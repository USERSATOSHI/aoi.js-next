import { CommandName, CommandTypes } from "../types/CommandTypes";

export interface CommandData {
	name: CommandName;
	code: string;
	type?: CommandTypes;
	[CommandProperty: string]: any;
}
