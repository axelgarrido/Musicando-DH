const express = require('express');
const router = express.Router();
const cancionesController = require('../controller/cancionesController')
const generosController = require('../controller/generosController')

router.get('/canciones',cancionesController.getTodasCanciones)
router.post('/canciones',cancionesController.createCancion)

router.get("/canciones/:id",cancionesController.getCancion)
router.put("/canciones/:id",cancionesController.updateCancion)
router.delete("/canciones/:id",cancionesController.deleteCancion)

router.get("/generos",generosController.getGeneros)


module.exports = router;