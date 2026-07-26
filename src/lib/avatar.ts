export function sizedAvatarUrl(url: string): string {
	const avatarUrl = new URL(url);

	if (avatarUrl.hostname.endsWith("githubusercontent.com")) {
		avatarUrl.searchParams.set("s", "64");
	}

	return avatarUrl.toString();
}
