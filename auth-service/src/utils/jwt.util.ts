import { readFileSync } from "fs";
import { join } from "path";
import { sign, SignOptions, verify, VerifyOptions } from "jsonwebtoken";
import { HasuraToken } from "../models/auth.model";

export const generateToken = (payload: any) => {
	const privateKey = readFileSync(join(__dirname, "../../private.key"));

	const signOptions: SignOptions = {
		algorithm: "RS256",
		expiresIn: "1h",
	};

	return sign({ ...payload }, privateKey, signOptions);
};

export const validateToken = (token: string): Promise<HasuraToken> => {
	const publicKey = readFileSync(join(__dirname, "../../public.key"));

	const verifyOptions: VerifyOptions = {
		algorithms: ["RS256"],
	};

	return new Promise<HasuraToken>((resolve, reject) => {
		verify(token, publicKey, verifyOptions, (err, decoded) => {
			if (err) {
				reject(err);
			}

			return resolve(decoded as HasuraToken);
		});
	});
};
