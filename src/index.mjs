import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const walk = require("./index.cjs");
export default walk;
