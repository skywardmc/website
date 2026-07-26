import { cached } from "./cache";
import { sizedAvatarUrl } from "./avatar";

const API = "https://api.modrinth.com/v2";
const VERSION_LIMIT = 8;
const authorCache = new Map<string, Promise<ModrinthAccount[]>>();

interface Version {
	dependencies: {
		dependency_type: string;
		project_id: string | null;
	}[];
}

interface Project {
	team: string;
}

interface TeamMember {
	user: {
		id: string;
		username: string;
		avatar_url: string | null;
	};
}

export interface ModrinthAccount {
	name: string;
	avatarUrl?: string;
	href: string;
}

async function get<T>(path: string): Promise<T> {
	const response = await fetch(`${API}${path}`);

	if (!response.ok) {
		throw new Error(
			`Modrinth API request failed (${response.status}): ${path}`,
		);
	}

	return response.json() as Promise<T>;
}

async function loadModrinthAuthors(pack: string): Promise<ModrinthAccount[]> {
	const versions = await get<Version[]>(
		`/project/${pack}/version?include_changelog=false`,
	);
	const projectIds = new Set<string>();

	for (const version of versions.slice(0, VERSION_LIMIT)) {
		for (const dependency of version.dependencies) {
			if (
				dependency.project_id &&
				["required", "embedded"].includes(dependency.dependency_type)
			) {
				projectIds.add(dependency.project_id);
			}
		}
	}

	if (projectIds.size === 0) return [];

	const projects = await get<Project[]>(
		`/projects?ids=${encodeURIComponent(JSON.stringify([...projectIds]))}`,
	);
	const teamIds = [...new Set(projects.map((project) => project.team))];
	const teams = await get<TeamMember[][]>(
		`/teams?ids=${encodeURIComponent(JSON.stringify(teamIds))}`,
	);

	const accounts = new Map<string, ModrinthAccount>();

	for (const team of teams) {
		for (const member of team) {
			accounts.set(`user:${member.user.id}`, {
				name: member.user.username,
				avatarUrl: member.user.avatar_url
					? sizedAvatarUrl(member.user.avatar_url)
					: undefined,
				href: `https://modrinth.com/user/${member.user.username}`,
			});
		}
	}

	return [...accounts.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export function getModrinthAuthors(pack: string): Promise<ModrinthAccount[]> {
	return cached(authorCache, pack, () => loadModrinthAuthors(pack));
}
