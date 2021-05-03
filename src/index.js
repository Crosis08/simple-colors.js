const cref = require(`./cref`);
class Color {
	/**
 * @param ${string} string - Text you want to change to another color, must be a string.
 */
	constructor(string = String) {
		this.string = string
	}
	get Yellow() { return `${cref.yellow}${this.string}\x1b[0m` }
	get Cyan() { return `${cref.cyan}${this.string}\x1b[0m`}
	get Red() { return `${cref.red}${this.string}\x1b[0m`}
	get Magenta() { return `${cref.magenta}${this.string}\x1b[0m`}
	get Purple() { return `${cref.magenta}${this.string}\x1b[0m`}
	get Green() { return `${cref.green}${this.string}\x1b[0m`}
	get Blue() { return `${cref.blue}${this.string}\x1b[0m`}
	get Black() { return `${cref.black}${this.string}\x1b[0m`}
}
module.exports = Color;