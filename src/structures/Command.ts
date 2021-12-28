import { CommandData } from "../typings/interfaces/CommandData";
export default class Command {
data : CommandData

	constructor(data: CommandData) {
		this.data = data
	}
}
