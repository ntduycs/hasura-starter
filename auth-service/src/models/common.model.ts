export interface ErrorResponse {
	error: string;
}

export interface HasuraRequest<T> {
	action: {
		name: string;
	}
	request_query: string;
	session_variables: object;
	input: {
		request: T;
	}
}
