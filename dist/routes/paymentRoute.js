import { Router } from 'express';
const router = Router();
/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a simple greeting
 *     responses:
 *       200:
 *         description: A simple greeting message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Hello, TypeScript with MongoDB!
 */
router.get('/', (req, res) => {
    res.send('Hello, TypeScript with MongoDB!');
});
export default router;
//# sourceMappingURL=paymentRoute.js.map