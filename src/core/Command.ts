import { CommandData } from "../typings/interfaces/CommandData";
import {
	CommandName,
	CommandProperties,
	CommandTypes,
} from "../typings/types/CommandTypes";

export default class Command {
	name?: CommandName;
	code?: string;
	type!: CommandTypes;
	[property: string]: unknown;

	constructor(data: CommandData) {
		const keyarr: CommandProperties[] = Object.keys(data);
		let i = keyarr.length - 1;

		while (i >= 0) {
			this[keyarr[i]] = data[keyarr[i]];

			i--;
		}
	}
}
