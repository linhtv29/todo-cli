const meow = require("meow")
const simpleNote = require('.');

const cli = meow('-t de them task, -d id de xoa', {
	flags: {
		task: {
			type: 'boolean',
			alias: 't'
		},
		delete: {
			type: 'boolean',
			alias: 'd'
		},
	}
})

simpleNote(cli.input, cli.flags);