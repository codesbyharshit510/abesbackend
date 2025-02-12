const fs = require('fs');
const read = async () =>{
    const data = await fs.readFileSync("./data.txt", "utf8");
    console.log(data);

}
const write = async () =>{
    const newdata = "let me cook";
    await fs.writeFileSync("./data1.txt", newdata);
    console.log("File written successfully");
}
write();
read();
console.log(" first time Reading file...");
console.log(" second time Reading file...");
console.log(" third question Reading file...");
console.log(" fourth question Reading file...");