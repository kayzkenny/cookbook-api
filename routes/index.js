const Router = require("koa-router");
const router = new Router();

const { RecipeController } = require("../controllers");

router.post("/recipes", RecipeController.create);
router.get("/recipes", RecipeController.find);
router.get("/recipes/:id", RecipeController.findOne);
router.delete("/recipes/:id", RecipeController.destroy);
router.put("/recipes/:id", RecipeController.update);

module.exports = router;
