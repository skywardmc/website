// this is just so my dev server doesn't spam the api lol

export function cached<T>(
	cache: Map<string, Promise<T>>,
	key: string,
	load: () => Promise<T>,
): Promise<T> {
	const value = cache.get(key);

	if (value) return value;

	const result = load();
	cache.set(key, result);
	void result.catch(() => cache.delete(key));

	return result;
}
