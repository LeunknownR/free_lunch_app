export default class SessionStorageEntry<T> {
    constructor(private readonly key: string) {}
    exists(): boolean {
        return Boolean(localStorage.getItem(this.key));
    }
    get(): T {
        return JSON.parse(sessionStorage.getItem(this.key)!);
    }
    set(value: T): void {
        sessionStorage.setItem(this.key, JSON.stringify(value));
    }
    remove(): void {
        sessionStorage.removeItem(this.key);
    }
}