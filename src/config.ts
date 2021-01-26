import * as process from "process";

export class Config {
    static PORT = process.env.PORT || 2000
    static SECRET_TOKEN = 'miclavedetokens'
}
