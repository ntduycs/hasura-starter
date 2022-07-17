import { LoginRequest, LoginResponse } from "../models/auth.model";
import { ErrorResponse, HasuraRequest } from "../models/common.model";
import logger from "../util/log.util";

export class AuthController {
	public async login(req: HasuraRequest<LoginRequest>): Promise<LoginResponse | ErrorResponse> {
		logger.info(`Processing ${req.action.name} request for ${JSON.stringify(req.input?.request)}`);

		return {
			access_token: "",
			refresh_token: "",
		};
	}
}
