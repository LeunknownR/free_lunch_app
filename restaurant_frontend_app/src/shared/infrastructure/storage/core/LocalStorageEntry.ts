export default class LocalStorageEntry<T> {
    constructor(private readonly key: string) {}
    exists(): boolean {
        return Boolean(localStorage.getItem(this.key));
    }
    get(): T {
        return JSON.parse(localStorage.getItem(this.key)!);
    }
    set(value: T): void {
        localStorage.setItem(this.key, JSON.stringify(value));
    }
    remove(): void {
        localStorage.removeItem(this.key);
    }
}