const { getNewses } = require("../services/news");

const getNewsController = async (req, res, next) => {
  console.log(1);
  const { page = 1, limit = 6 } = req.query;
  const skip = (page - 1) * limit;

  try {
    const news = await getNewses(skip, limit);
    res.status(200).json(news);
  } catch (error) {
    next(error);
  }
};

module.exports = { getNewsController };
