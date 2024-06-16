import bcrypt from "bcrypt";
import Encrypter from "../domain/Encrypter";

const { ENCRYPT_PEPPER } = process.env;
export default class BcryptEncrypter implements Encrypter {
	private static readonly ROUNDS = 12;
	private withPepper(plainText: string): string {
		return `${plainText}${ENCRYPT_PEPPER}`;
	}
	async encrypt(plainText: string): Promise<string> {
		return await bcrypt.hash(
			this.withPepper(plainText),
			BcryptEncrypter.ROUNDS
		);
	}
	async compare(plainText: string, encryptedText: string): Promise<boolean> {
		return await bcrypt.compare(
			this.withPepper(plainText),
			encryptedText
		);
	}
}
