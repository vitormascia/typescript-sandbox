import { log } from "./log.ts";

function sandbox(): void { }

const r = sandbox();

log("RESULT", { r });
