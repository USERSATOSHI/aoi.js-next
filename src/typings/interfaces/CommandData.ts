
export interface CommandData {
	name: string;
	code: string;
	type?: string;
	[CommandProperty: string]: unknown;
}
