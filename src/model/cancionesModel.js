const db = require("../database/models");

const cancionesModel = {
  getTodasCanciones: async () => {
    try {
      const response = await db.canciones.findAll();
      return response;
    } catch (error) {
      console.log(`fallo consulta a la base de datos ${error.message}`);
      return [];
    }
  },
  getCancion: async (id) => {
    try {
      const response = await db.canciones.findByPk(id);
      return response;
    } catch (error) {
      console.log(`fallo consulta a la base de datos ${error.message}`);
      return [];
    }
  },
  createCancion: async (cancion) => {
    try {
      const response = await db.canciones.create({
        ...cancion,
      });
      return response;
    } catch (error) {
      console.log(`fallo creacion en la base de datos ${error.message}`);
      return [];
    }
  },
  updateCancion: async (id, cancion) => {
    try {
      const response = await db.canciones.update(cancion, {
        where: { id: id },
      });
      return response;
    } catch (error) {
      console.log(`fallo edicion en la base de datos ${error.message}`);
      return [];
    }
  },
  deleteCancion: async (id) => {
    try {
      const response = await db.canciones.destroy({
        where: { id: id },
      });
      return response;
    } catch (error) {
      console.log(`fallo al borrar en la base de datos ${error.message}`);
      return [];
    }
  },
};

module.exports = cancionesModel;
