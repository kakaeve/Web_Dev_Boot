import { franc, francAll } from "franc";

// const langs = require("langs");
import langs from "langs";

const input = process.argv[2];

const langCode = franc(input);
//console.log(input);
// console.log(langs);
//console.log(langCode);
if (langCode === "und") {
  console.log("sry");
} else {
  const language = langs.where("3", langCode);
  // console.log(langs.where("3", langCode));
  console.log(language.name);
}
