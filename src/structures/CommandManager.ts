import { Collection } from "discord.js";
import { AoiClient } from "../core/AoiClient";
import Command from "./Command";

/**
 * Stores commands for the Client.
 */
export default class CommandManager {
	#client: AoiClient;
	#customTypes?: string[];
	#isDefault: boolean;
	data!: Record<string, Collection<string, Command>>;

	constructor(client: AoiClient, isDefault = true, customTypes?: string[]) {
		this.#client = client;
		this.#isDefault = isDefault;
		this.#customTypes = customTypes;

		if (this.#isDefault) {
			this.createCommandCollection();
		} else {
			this.createCustomCommandCollection();
		}
	}
	get types() {
		return ["default"];
	}
	createCommandCollection() {
		const types = this.types;
		let i = types.length;

		while (i >= 0) {
			this.data[types[i--]] = new Collection();
		}
	}
	createCustomCommandCollection() {
		const customCmds = this.#customTypes || ["default"];
		if (!customCmds.includes("default")) customCmds.push("default");
		let i = customCmds.length;

		while (i >= 0) {
			this.data[customCmds[i--]] = new Collection();
		}
	}
}
