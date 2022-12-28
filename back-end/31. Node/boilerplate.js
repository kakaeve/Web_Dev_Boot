import { mkdirSync, writeFileSync } from "node:fs";
const folderName = process.argv[2] || `Project`;
//console.log(folderName);
//console.log(fs);

// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   if (err) {
//     throw err;
//   }
// });

//fs.mkdirSync(folderName);
mkdirSync(folderName);
writeFileSync(`${folderName}/index.html`);
// fs.writeFileSync(`${folderName}/index.html`);
//console.log(`${folderName}/index.html`);
// fs.writeFileSync(`${folderName}/index.html`);
// fs.writeFileSync(`${folderName}/app.js`);
// fs.writeFileSync(`${folderName}/app.css`);
