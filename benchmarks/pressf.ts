import PressF from "../pressf.ts";

let router = new PressF();
router.get("/", (req: any) => req.respond({ body: "Hello" }));

router.listen(1234);