const RespuestaModel = require('../models/respuesta');
var respuesta = require('../utils/responses');


const crearRespuesta= (req, res) => {
    let Respuesta = new RespuestaModel({
      fermentacion  : req.body.fermentacion,
      tipo          : req.body.tipo,
      pepa          : req.body.pepa,
      experto       : req.body.experto,
      survey        : req.body.survey
    });
    Respuesta.crearRespuesta((err, pregunta) => {
      if (err) return respuesta.serverError(res);
      return respuesta.creado(res);
    });
  }

  const obtenerRespuestas = (req, res) => {
    RespuestaModel.obtenerRespuestas(req.params.id_pepa,(err, respuestas) => {
      if (err) return respuesta.serverError(res);
      return respuesta.ok(res, respuestas);
    })
  }

  const obtenerRespuestasPorExperto = (req, res) => {
    RespuestaModel.obtenerRespuestasPorExperto(req.params.id_experto,(err, respuestas) => {
      if (err) return respuesta.serverError(res);
      return respuesta.ok(res, respuestas);
    })
  }

  const obtenerTodasRespuestas = (req, res) => {
    RespuestaModel.obtenerTodasRespuestas((err, respuestas) => {
      if (err) return respuesta.serverError(res);
      return respuesta.ok(res, respuestas);
    })
  }

  module.exports = {
    obtenerRespuestas,
    obtenerRespuestasPorExperto,
    crearRespuesta,
    obtenerTodasRespuestas
  }