const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskCOntroller')

router.post('/novaTarefa', TaskController.novaTarefa)
router.get('/tarefas', TaskController.listarTarefas)
router.get('/tarefa/:id', TaskController.listarUmaTarefa)

module.exports = router