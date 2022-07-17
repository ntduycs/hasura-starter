import { Router } from "express";
import healthRoute from "./health.route";
import authRoute from "./auth.route";

const router = Router();

router.use("/health", healthRoute);
router.use("/auth", authRoute);
router.use("", async (_, res) => {
	res.send({
		message: "OK",
	});
});

export default router;
