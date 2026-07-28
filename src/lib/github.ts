import { cached } from "./cache";

const API = "https://api.github.com";
const headers = {
	Accept: "application/vnd.github+json",
	...(process.env.GITHUB_TOKEN
		? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
		: {}),
};
const contributorCache = new Map<string, Promise<string[]>>();
const userCache = new Map<string, Promise<GitHubUser>>();

export interface GitHubUser {
	username: string;
	name: string;
	href: string;
	avatarUrl: string;
}

async function loadGitHubContributors(repo: string): Promise<string[]> {
	let url: string | undefined =
		`${API}/repos/skywardmc/${repo}/contributors?per_page=100`;

	const contributors: string[] = [];

	while (url) {
		const response = await fetch(url, { headers });

		if (!response.ok) {
			throw new Error(`GitHub API request failed (${response.status}): ${url}`);
		}

		contributors.push(
			...((await response.json()) as { login: string }[]).map(
				(contributor) => contributor.login,
			),
		);
		const next = response.headers
			.get("link")
			?.match(/<([^>]+)>;\s*rel="next"/)?.[1];
		url = next;
	}

	return contributors;
}

export function getGitHubContributors(repo: string): Promise<string[]> {
	return cached(contributorCache, repo, () => loadGitHubContributors(repo));
}

async function loadGitHubUser(username: string): Promise<GitHubUser> {
	const response = await fetch(`${API}/users/${username}`, { headers });

	if (!response.ok) {
		throw new Error(
			`GitHub API request failed (${response.status}): /users/${username}`,
		);
	}

	const user = (await response.json()) as {
		login: string;
		name: string | null;
		html_url: string;
		avatar_url: string;
	};

	return {
		username: user.login,
		name: user.name ?? user.login,
		href: user.html_url,
		avatarUrl: user.avatar_url,
	};
}

export function getGitHubUsers(usernames: string[]): Promise<GitHubUser[]> {
	const users = new Map(
		usernames.map((username) => [username.toLowerCase(), username]),
	);

	return Promise.all(
		[...users].map(([key, username]) =>
			cached(userCache, key, () => loadGitHubUser(username)),
		),
	);
}
