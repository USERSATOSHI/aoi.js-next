import axios from "axios";

export default async function () {
	/**
	 * To fetch the API version current and version installed.
	 */
	const { version } = require("../../package.json");

	const res = await axios
		.get("https://api.leref.ga/package/version")
		.catch((_) => undefined); //This will change when the package is published.

	if (!res) return;

	if (version !== res.data.version) {
		console.warn(
			"\x1b[31maoi.js warning: \u001b[33mv" +
				res.data.version +
				" is available to install.\u001b[0m",
		);
	}
}
