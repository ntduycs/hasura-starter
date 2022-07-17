import { LoginRequest, LoginResponse } from "../models/auth.model";
import { HasuraRequest } from "../models/hasura.model";
import logger from "../utils/log.util";
import { userRepository } from "../repositories";
import { generateToken } from "../utils/jwt.util";

export class AuthController {
	public async login(req: HasuraRequest<LoginRequest>): Promise<LoginResponse> {
		logger.info(`Processing ${req.action.name} request for ${JSON.stringify(req.input?.request)}`);

		const { email } = req.input.request;

		const user = await userRepository.findByEmail(email);

		if (!user.isPresent()) {
			throw new Error(`User not found with email ${email}`);
		}

		const token = generateToken(user.get());

		return {
			access_token: token,
			refresh_token: "ok",
		};
	}
}
