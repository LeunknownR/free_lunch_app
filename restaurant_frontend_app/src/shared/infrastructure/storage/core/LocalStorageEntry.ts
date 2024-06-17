export default class LocalStorageEntry<T> {
    constructor(private readonly key: string) {}
    exists(): boolean {
        return Boolean(localStorage.getItem(this.key));
    }
    get(): T {
        const value = localStorage.getItem(this.key);
        try {
            return JSON.parse(value!);
        }
        catch (_) {
            return value as T;
        }
    }
    set(value: T): void {
        if (["string", "number", "boolean"].includes(typeof value))
            localStorage.setItem(this.key, String(value));
        else 
            localStorage.setItem(this.key, JSON.stringify(value));
    }
    remove(): void {
        localStorage.removeItem(this.key);
    }
}