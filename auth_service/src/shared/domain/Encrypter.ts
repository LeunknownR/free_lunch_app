interface Encrypter {
    encrypt(plainText: string): Promise<string>;
    compare(plaintext: string, encryptedText: string): Promise<boolean>;
}
export default Encrypter;