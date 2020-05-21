module.exports = {
  async create(ctx) {
    try {
      ctx.body = await ctx.db.Recipes.create({
        name: ctx.request.body.name,
        tips: ctx.request.body.tips,
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async find(ctx) {
    try {
      ctx.body = await ctx.db.Recipes.findAll({});
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async findOne(ctx) {
    try {
      const recipe = await ctx.db.Recipes.findOne({
        id: ctx.params.id,
      });
      recipe ? (ctx.body = recipe) : ctx.throw(404, "Recipe ID is invalid");
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async destroy(ctx) {
    try {
      const result = await ctx.db.Recipes.destroy({
        where: { id: ctx.params.id },
      });
      result
        ? (ctx.body = `Recipe with id ${ctx.params.id} deleted successfully`)
        : ctx.throw(404, "Recipe ID is invalid");
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async update(ctx) {
    try {
      const result = await ctx.db.Recipes.update(
        {
          name: ctx.request.body.name,
          tips: ctx.request.body.tips,
        },
        {
          where: {
            id: ctx.params.id,
          },
        }
      );
      result
        ? (ctx.body = `Recipe with id ${ctx.params.id} updated successfully`)
        : ctx.throw(404, "Recipe ID is invalid");
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
