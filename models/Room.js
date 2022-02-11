// 1. IMPORTACIONES
const mongoose = require("mongoose")


// 2. SCHEMA
const roomSchema = mongoose.Schema({
	name: {
		type: String
	},
	description: {
		type: String
	},
	imageUrl: {
		type: String
	}
})


// 3. MODELO
const Room = mongoose.model("Room", roomSchema)


// 4. EXPORTACIÓN
module.exports = Room