import * as FS from 'fs-extra';
import * as path from 'path';

export class ConfigSrevice {
    private config: any;
    constructor() {
        this.config = {
            DATABASE: FS.readJSONSync(path.resolve(__dirname, '..', '..', 'etc', 'configs', 'database.config.json')),
        };
    }

    getJSON(key: string): any {
        return this.config[key];
    }
}
