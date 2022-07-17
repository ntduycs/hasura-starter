import { UserRepository, UserRepositoryImpl } from "./user.repository";

export const userRepository: UserRepository = new UserRepositoryImpl();
