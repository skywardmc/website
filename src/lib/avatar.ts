import { getColor } from "colorthief";

interface AvatarColors {
	background: string;
	foreground: string;
}

const colorCache = new Map<string, Promise<AvatarColors | undefined>>();

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
