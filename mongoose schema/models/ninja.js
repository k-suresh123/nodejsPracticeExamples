const mongoose = require('mongoose');
const Schema = mongoose.Schema


const NinjaSchema  = new Schema({
    name:{
	type:String,
	required:[true,"Name field is required"],
	unique: true
	},
	address:{
		type:String,
		required:[true,"address field is required"],
		},
	rank:{
	type:String
	},
	available:{
	type:Boolean,
	default: false
	}

})
module.exports = mongoose.model('ninja',NinjaSchema)

