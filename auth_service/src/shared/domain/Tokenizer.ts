export type TokenPayload = Record<string, string | number | boolean>

export default interface Tokenizer {
    create(payload: TokenPayload): Promise<string>;
    check(token: string): Promise<boolean>;
}