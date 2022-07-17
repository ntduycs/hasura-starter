import { Router } from "express";

const router = Router();

router.get("", async (_, res) => {
	res.send({
		message: "OK!",
	});
});

export default router;
