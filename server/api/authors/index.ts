import AuthorModel from "~~/server/models/Author.model";

export default defineEventHandler(async (event) => {
	return await AuthorModel.find();
});
