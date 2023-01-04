import Joi from "joi";

// author validation
export const AuthorSchema = Joi.object({
	name: Joi.string().min(3).required(),
});

export const UserSchema = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string().min(6).email().required(),
	password: Joi.string().min(8).required(),
});