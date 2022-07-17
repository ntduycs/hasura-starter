export interface ErrorResponse {
	message: string;
}

export class Optional<T> {
	private readonly value: T | null;

	constructor(value: T | null) {
		this.value = value;
	}

	get(): T | null {
		if (!this.value) {
			throw new Error("Access to null value");
		}

		return this.value;
	}

	isPresent(): boolean {
		return !!this.value;
	}

	static of<T>(value: T): Optional<T> {
		if (!value) {
			throw new Error("Assign null value to non-null field");
		}

		return new Optional(value);
	}

	static empty<T>(): Optional<T> {
		return new Optional<T>(null);
	}

	static ofNullable<T>(value: T | undefined): Optional<T> {
		return value ? this.of(value) : this.empty();
	}
}
