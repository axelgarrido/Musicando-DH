const cancionesModel = require('../model/cancionesModel')

const cancionesController ={
    getTodasCanciones: async (req, res, next) => {
        try {
            const response = await cancionesModel.getTodasCanciones()
            res.status(200).json({data: response, error:null, succes:true})
        } catch (error) {
            console.log(`fallo creacion en la base de datos ${error.message}`);
            res.status(500).json({data:null, error: error, succes:false})   
        }
    },  getCancion: async (req, res, next) => {
        try {
            const response = await cancionesModel.getCancion(req.params.id)
            res.status(200).json({data: response, error:null, succes:true})
        } catch (error) {
            res.status(500).json({data:null, error: error, succes:false})   
        }
    },
    createCancion: async (req, res, next) => {
        try {
            const response = await cancionesModel.createCancion(req.body)
            res.status(200).json({data: response, error:null, succes:true})
        } catch (error) {
            res.status(500).json({data:null, error: error, succes:false})   
        }
    },
    updateCancion: async (req,res,next) => {
        try {
            let cancion = {
                titulo:req.body.titulo,
                duracion:req.body.duracion,
                created_at:req.body.createAt,
                updated_at:req.body.updateAt,
                genero_id:req.body.genero_id,
                album_id:req.body.album_id,
                artista_id:req.body.artista_id
            } 
            const response = await cancionesModel.updateCancion(req.params.id,cancion);
            res.status(200).json({data: response, error:null, succes:true})
        } catch (error) {
            res.status(500).json({data:null, error: error, succes:false})
        }
    },
    deleteCancion: async (req,res,next) => {
        try {
            const response = await cancionesModel.deleteCancion(req.params.id);
            res.status(200).json({data: response, error:null, succes:true})
        } catch (error) {
            res.status(500).json({data:null, error: error, succes:false})            

        }
    }
}

module.exports = cancionesController