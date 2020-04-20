"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FS = require("fs-extra");
const path = require("path");
class ConfigSrevice {
    constructor() {
        this.config = {
            DATABASE: FS.readJSONSync(path.resolve(__dirname, '..', '..', 'etc', 'configs', 'database.config.json')),
        };
    }
    getJSON(key) {
        return this.config[key];
    }
}
exports.ConfigSrevice = ConfigSrevice;
//# sourceMappingURL=config.service.js.map