import { JwtPayload } from "jsonwebtoken";

export interface HasuraRequest<T> {
	action: {
		name: string;
	};
	request_query: string;
	session_variables: object;
	input: {
		request: T;
	};
}

export interface HasuraToken extends JwtPayload {
	user_id: number;
	name: string;
}
