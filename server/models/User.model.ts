import mongoose from "mongoose";

// author schema
const schema: mongoose.Schema = new mongoose.Schema(
	{
		name: {type: String},
		email: {type: String}, 
		password: {type: String}, 
		siparisler:[],
		kartbilgileri:[],
		sepet:[],
		favoriler:[],
		adres:[],
		telefon:'',
	},
	{ timestamps: true }
);

// author model
export default mongoose.model("users", schema);
