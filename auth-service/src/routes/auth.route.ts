import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router = Router();

const controller = new AuthController();

router.post("/login", async (req, res) => {
	try {
		const data = await controller.login(req.body);
		res.status(200).json(data);
	} catch (e: any) {
		res.status(401).json({
			message: e.message,
		});
	}
});

export default router;
