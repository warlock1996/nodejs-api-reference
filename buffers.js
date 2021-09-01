const arr = new Uint16Array();

arr;

const alloc = Buffer.alloc(10, "0");
alloc;
const allocUnsafe = Buffer.allocUnsafe(10);
allocUnsafe.fill("Arslan Ali");
allocUnsafe;

const from = Buffer.from([1, 2, 3], 0, 3);
from;

const str = Buffer.from("test");
str;

const str2 = Buffer.from("test1");
str2;

console.log(alloc.toString("base64"));
console.log(from.keys());

console.log(str.byteLength);

console.log(str.compare(str2));

console.log(Buffer.concat([str, str2]).toString());

console.log(Buffer.isBuffer(str));
