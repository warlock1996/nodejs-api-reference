import { Module } from "module";

console.log(Module.builtinModules);
console.log(import.meta.url);

const require = Module.createRequire(import.meta.url);

const { str, str2 } = require("../buffers");

console.log(str, str2);
