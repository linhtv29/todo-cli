const Storage = require("./storage")
class Todo {
	constructor() {
		this._storage = new Storage()
	}

	get showStorageDir(){
		return this._storage._mainAppDir
	}
	addTodo(data){
		this._storage.set(data)
	}
	showTodo(){
		return this._storage.get()
	}
}

module.exports = new Todo();