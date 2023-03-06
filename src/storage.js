const os = require("os");
const fs = require("fs");
const path = require("path");
const { join } = path;
class Storage {
  constructor() {
    this._storageDir = this._mainAppDir;
    this._storageFile = join(this._mainAppDir, "storage.json");
    this._initStorage();
  }
  get _mainAppDir() {
    const defaultDir = join(os.homedir(), ".my-todo");
    return defaultDir;
  }
  get _isExistDir() {
    return fs.existsSync(this._mainAppDir);
  }
  _initStorage() {
    if (!this._isExistDir) fs.mkdirSync(this._mainAppDir);
  }
  get() {
    let data = {};
    if (fs.existsSync(this._storageFile)) {
      const content = fs.readFileSync(this._storageFile, "utf8");
      data = JSON.parse(content);
    }
    return data;
  }
  set(data) {
		data = JSON.stringify(data)
    fs.writeFileSync(this._storageFile, data, "utf8");
  }
}

module.exports = Storage;
