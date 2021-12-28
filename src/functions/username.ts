import createNativeFunction from "../util/functions/createNativeFunction";

export default createNativeFunction({
	name: "$username",
	brackets: true,
	optional: true,
	fields: [
		{
			name: "userID",
			description: "the user to get it's username.",
			type: "USER",
			required: true,
		},
	],
	description: "Returns the user's username.",
	returns: "STRING",
	execute: function () {},
});
