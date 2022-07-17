import { JwtPayload } from "jsonwebtoken";

export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	access_token: string;
	refresh_token: string;
}

export interface HasuraToken extends JwtPayload {
	user_id: number;
	name: string;
}
