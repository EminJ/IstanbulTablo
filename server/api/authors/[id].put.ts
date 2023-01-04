import AuthorModel from "~~/server/models/Author.model";
import { AuthorSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
	// Get data form body
	const body = await readBody(event);
	//Get id from params
	const id = event.context.params.id;
	
	// validate
	let { value, error } = AuthorSchema.validate(body, { abortEarly: true, allowUnknown: true });
	if (error) {
		throw createError({
			message: error.message.replace(/"/g, ""),
			statusCode: 400,
			fatal: false,
		});
	}

	const language = await AuthorModel.findById(id)
	
	return language
});
