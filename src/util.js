let counter = 0;

export function log(text) {
    const log = document.getElementById("log")
    log.innerText += `${counter++}. ${text}\n`;
    log.scrollTop = log.scrollHeight;
}
