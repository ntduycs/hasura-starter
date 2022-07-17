import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router = Router();

const controller = new AuthController();

router.post("/login", async (req, res) => {
	const data = await controller.login(req.body);

	if (Object.prototype.hasOwnProperty.call(data, "error")) {
		res.status(401).json(data);
	} else {
		res.status(200).json(data);
	}
});

export default router;
