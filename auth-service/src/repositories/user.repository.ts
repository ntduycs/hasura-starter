import UserEntity from "../entities/user.entity";
import { Optional } from "../models/common.model";
import logger from "../utils/log.util";

export interface UserRepository {
	findById: (id: number) => Promise<Optional<UserEntity>>;
	findByEmail: (email: string) => Promise<Optional<UserEntity>>;
}

export class UserRepositoryImpl implements UserRepository {
	async findByEmail(email: string): Promise<Optional<UserEntity>> {
		try {
			const user = await UserEntity.query().where("email", "=", email).first();

			return Optional.ofNullable(user);
		} catch (e) {
			logger.err(e);
			return Optional.empty();
		}
	}

	async findById(id: number): Promise<Optional<UserEntity>> {
		try {
			const user = await UserEntity.query().findById(id).first();

			return Optional.ofNullable(user);
		} catch (e) {
			logger.err(e);
			return Optional.empty();
		}
	}
}
