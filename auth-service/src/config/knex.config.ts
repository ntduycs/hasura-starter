import logger from "../utils/log.util";

const mode = process.env.NODE_ENV || "development";

const knexConfig = {
	development: {
		client: "postgres",
		useNullAsDefault: true,
		connection: {
			host: "localhost",
			port: "5432",
			user: "postgres",
			password: "123456",
			database: "account",
		},
		acquireConnectionTimeout: 5000, // in millis
		debug: true,
	},
	// Production config
	production: {
		client: "postgres",
		connection: {
			host: "localhost",
			port: "5432",
			user: "postgres",
			password: "123456",
			database: "account",
		},
		acquireConnectionTimeout: 5000, // in millis
	},
};

logger.info(`Initializing Knex instance in mode ${mode}`);

const knexInstance = mode === "production" ? knexConfig.production : knexConfig.development;

export default knexInstance;
