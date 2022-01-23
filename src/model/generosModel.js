const db = require("../database/models");

const generosModel = {
  getGeneros: async () => {
    try {
        const response = await db.generos.findAll();
        return response;
    } catch (error) {
      console.log(`fallo consulta a la base de datos ${error.message}`);
      return [];
    }
  },
};

module.exports = generosModel