// 1. IMPORTACIONES
const Room = require("./../models/Room")

// 2. CONTROLLERS
exports.getRooms = async (req, res) => {

	const allRooms = await Room.find({})

	console.log(allRooms)

	res.render("rooms/rooms", {
		rooms: allRooms 
	})

}

exports.createRoom = (req, res) => {

	res.render("rooms/create")

}


exports.createRoomForm = async (req, res) => {

	// req.body.name
	// req.body.description
	// req.body.imageUrl

	// const name = req.body.name

	const { name, description, imageUrl } = req.body

	try {
		
		const newRoom = await Room.create({ name, description, imageUrl })

		console.log(newRoom)

		return res.redirect("/rooms")

	} catch (error) {
		console.log(error)

		return res.render("rooms/create", {
			errorMsg: "Hubo un problema en la creación del cuarto."
		})

	}



}

exports.getDetails = async (req, res) => {

	try {

		// req.params === { roomID: "65as4df56as4d" }
		const { roomID } = req.params

		console.log(roomID)
		console.log(typeof roomID)

		const singleRoom = await Room.findById(roomID)

		return res.render("rooms/details", {
			singleRoom
		})


	} catch (error) {
		
		console.log(error)

		return res.render(`rooms`, {
			errorMsg: "Hubo un problema en la muestra de los detalles del cuarto."
		})

	}

}

exports.editRoom = async (req, res) => {

	const { roomID } = req.params

	const singleRoom = await Room.findById(roomID)

	res.render("rooms/edit", {
		singleRoom
	})


}


exports.editRoomForm = async (req, res) => {

	const { name, description, imageUrl } = req.body

	const { roomID } = req.params

	await Room.findByIdAndUpdate(
		roomID,
		{ name, description, imageUrl },
		{ new: true }
	)

	res.redirect(`/rooms/${roomID}`)


}

exports.deleteRoom = async (req, res) => {

	const { roomID } = req.params

	try {
		const deletedRoom = await Room.findByIdAndRemove(roomID)

		console.log(deletedRoom)

		res.redirect("/rooms")

	} catch (error) {
		console.log(error)

		res.redirect(`rooms/${roomID}`, {

			msgError: "No se pudo guardar el cambio."

		} )
	}


}