import { Client, ClientOptions } from "discord.js";
import { AoiOptions } from "../typings/interfaces/AoiOptions";
import { AoiDefaultOptions } from "../util/constants/AoiDefaultOptions";
import { Util } from "../util/Util";
import CommandManager from "../structures/CommandManager";

export class AoiClient {
	/**
	 * The client managed by this Client.
	 */
	client: Client;

	/**
	 * The commands for this Client.
	 */
	commands = new CommandManager(this);

	/**
	 * Options passed to the Client.
	 */
	options: AoiOptions;

	/**
	 *
	 * @param options The options to pass to Client.
	 */
	constructor(options: AoiOptions) {
		this.options = Util.mergeDefault(options, AoiDefaultOptions);

		this.#validateOptions();

		this.client = new Client(options.client as ClientOptions);
	}

	#validateOptions() {
		if (
			this.options.intents &&
			this.options.client &&
			!this.options.client?.intents
		) {
			this.options.client.intents = this.options.intents;
		}
	}
}
