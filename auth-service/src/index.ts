import app from "./app";
import logger from "./util/log.util";
import * as fs from "fs";
import * as https from "https";

const port = Number(process.env.SERVER_PORT || 3000);
const mode = process.env.NODE_ENV || "development";

if (mode === "development") {
	app.listen(port, () => {
		logger.info("=".repeat(30));
		logger.info(`Express running on port ${port}`);
	});
} else {
	const sslKey = process.env.SSL_KEY_PATH as string;
	const sslCert = process.env.SSL_KEY_CERT as string;

	if (!sslKey || !sslCert) {
		logger.err("Failed to start HTTP server. Required SSL config is missing");
		process.exit(1);
	}

	const credentials = {
		key: fs.readFileSync(sslKey),
		cert: fs.readFileSync(sslCert),
	};

	const httpsServer = https.createServer(credentials, app);
	httpsServer.listen(port, () => {
		logger.info("=".repeat(30));
		logger.info(`HTTP server is running on port ${port}\n`);
	});
}
