import { getColor } from "colorthief";

interface AvatarColors {
	background: string;
	foreground: string;
}

const colorCache = new Map<string, Promise<AvatarColors | undefined>>();

export function sizedAvatarUrl(url: string): string {
	const avatarUrl = new URL(url);

	if (avatarUrl.hostname.endsWith("githubusercontent.com")) {
		avatarUrl.searchParams.set("s", "16");
	}

	return avatarUrl.toString();
}

export function avatarSrcSet(url: string): string | undefined {
	const avatarUrl = new URL(url);

	if (!avatarUrl.hostname.endsWith("githubusercontent.com")) return undefined;

	const retinaAvatarUrl = new URL(avatarUrl);
	retinaAvatarUrl.searchParams.set("s", "32");

	return `${avatarUrl} 1x, ${retinaAvatarUrl} 2x`;
}

export function getAvatarColors(
	url: string,
): Promise<AvatarColors | undefined> {
	let colors = colorCache.get(url);

	if (!colors) {
		colors = fetch(url).then(async (response) => {
			if (!response.ok) return undefined;

			const color = await getColor(Buffer.from(await response.arrayBuffer()));

			return color
				? { background: color.hex(), foreground: color.textColor }
				: undefined;
		});
		colorCache.set(url, colors);
	}

	return colors;
}
