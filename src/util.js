let counter = 0;
export const DEBUG = false;

export function log(text) {
    if (DEBUG) {
        const log = document.getElementById("log-display");
        log.innerText += `${counter++}. ${text}\n`;
        log.scrollTop = log.scrollHeight;
    }
}

export function addResources(amt) {
    const resource = document.getElementById("resource-counter");
    resource.innerText = `${Number(resource.innerText) + amt}`;
}
