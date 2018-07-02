var fs = require("fs");

fs.readFile("./chat.log", "UTF-8", function (err, chatlog) {
  console.log(`File Read ${chatlog.length}`);
});

console.log("Reading File");
