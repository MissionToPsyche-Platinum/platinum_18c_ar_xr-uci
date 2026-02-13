import $ from "jquery";

let counter = 0;
export const DEBUG = false;

export function log(text) {
    if (DEBUG) {
      const log = $("#log-display");
      log.append(`${counter++}. ${text}\n`);
      log.scrollTop(log[0].scrollHeight);
    }
}
