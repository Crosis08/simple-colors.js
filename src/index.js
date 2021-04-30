const cref = require(`./cref`);
class Color {
	/**
 * @param ${string} string - Text you want to change to another color, must be a string.
 */
	constructor(string = String) {
		this.string = string
	}
	get Yellow() { return `${cref.yellow}${this.string}` }
	get Cyan() { return `${cref.cyan}${this.string}`}
	get Red() { return `${cref.red}${this.string}`}
	get Magenta() { return `${cref.magenta}${this.string}`}
	get Purple() { return `${cref.magenta}${this.string}`}
	get Green() { return `${cref.green}${this.string}`}
	get Blue() { return `${cref.blue}${this.string}`}
	get Black() { return `${cref.black}${this.string}`}
}
module.exports = Color;