import {Configuration} from "../interfaces/configuration";

declare var require: any;
const json = require('../configuration.json')

export class Utils {
    static getConfiguration(): Configuration {
        const config: Configuration = json
        return config
    }
}
