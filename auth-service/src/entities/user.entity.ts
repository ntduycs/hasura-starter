import { Model } from "objection";

class UserEntity extends Model {
	static get tableName() {
		return "users";
	}
}

export default UserEntity;
