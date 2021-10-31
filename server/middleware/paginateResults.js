function paginateResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    try {
      if (endIndex < (await model.countDocuments().exec())) {
        results.next = {
          nextPage: page + 1,
          limit: limit,
        };
      }
      results.data = await model.find().limit(limit).skip(startIndex).exec();
      res.results = results;
      next();
    } catch (err) {
      res.status(404).json({ errors: [err.message] });
    }
  };
}

export default paginateResults;
