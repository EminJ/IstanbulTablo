import UserModel from "~~/server/models/User.model";
import { UserSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
	// Get data form body
	const body = await readBody(event);

	// validate
	let { value, error } = UserSchema.validate(body);

	const data = await UserModel.find({ email:body.email });
	console.log(data[0]==[]); // burdaki sorgu çalışmıyor!
	

	if (error) {
		throw createError({
			message: error.message.replace(/"/g, ""),
			statusCode: 400,
			fatal: false,
		});
	}
	

	try {
		//await UserModel.create(body);
		return { message: "Users created" };
	} catch (err) {
		throw createError({
			message: 'err.message',
		});
	}
});
