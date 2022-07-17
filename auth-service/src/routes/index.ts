import { Router } from "express";
import healthRoute from "./health.route";

const router = Router();

router.use("/health", healthRoute);
router.use("", async (_, res) => {
	res.send({
		message: "OK",
	});
});

export default router;
