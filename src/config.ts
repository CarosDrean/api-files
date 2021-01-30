import * as process from "process";
import {Utils} from "./utils/utils";

export const PORT = process.env.PORT || 2000
export const SECRET_TOKEN = Utils.getConfiguration().secretToken
export const PATH_INVOICES = 'bucket/invoice'
