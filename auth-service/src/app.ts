import cors from "cors";
import express, { Express, json, NextFunction, urlencoded, Request, Response } from "express";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import logger from "./util/log.util";
import router from "./routes";

const app: Express = express();

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));

const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

if (process.env.NODE_ENV === "production") {
	app.use(morgan("tiny"));
	app.use(helmet());
	app.use(compression());
} else {
	app.use(morgan("dev"));
}

app.use(router);

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
	if (err) {
		logger.err(err, true);
		return res.status(500).json({
			error: err.message,
		});
	} else {
		return next();
	}
});

export default app;
