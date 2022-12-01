
const fs = require("fs");
const text = fs.readFileSync('word.txt','utf-8');
text= text.replace("helolo","omkar");
console.log("This is Content Of file..")
console.log(text);

console.log("creating new file..")
fs.writeFileSync("om.txt",text);
