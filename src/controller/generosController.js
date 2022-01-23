const generosModel = require("../model/generosModel");

const generosController = {
  getGeneros: async function (req, res, next) {
    try {
      const response = await generosModel.getGeneros();
      res.status(200).json({ data: response, error: null, succes: true });
    } catch (error) {
      res.status(500).json({ data: null, error: error, succes: false });
    }
  },
};

module.exports = generosController