// 1. IMPORTACIONES
const express		= require("express")
const router		= express.Router()

const roomsController		= require("./../controllers/roomsController")

// 2. ROUTER
// http://localhost:3005/rooms/
router.get("/", roomsController.getRooms)

// http://localhost:3005/rooms/create
// GET - Generar la vista
router.get("/create", roomsController.createRoom)

// POST - Envío de datos del formulario
router.post("/create", roomsController.createRoomForm)

router.get("/:roomID", roomsController.getDetails)

router.get("/:roomID/edit", roomsController.editRoom)

router.post("/:roomID/edit", roomsController.editRoomForm)

router.get("/:roomID/delete", roomsController.deleteRoom)


// 3. EXPORTACIÓN
module.exports = router