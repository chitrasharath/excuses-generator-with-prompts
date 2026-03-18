// Excuse Generator
// This script generates random excuses for various situations

console.log("Excuse Generator is ready to run!");
const who = [
  "The dog",
  "My grandma",
  "A little kid",
  "An alien"
];

const action = [
  "ate",
  "broke",
  "stole",
  "hid"
];

const what = [
  "my homework",
  "my phone",
  "my keys",
  "my lunch",
  "my car"
];

const when = [
  "this morning",
  "last night",
  "yesterday",
  "a few hours ago",
  "right before class"
];

const randomWho = who[Math.floor(Math.random() * who.length)];

const randomAction = action[Math.floor(Math.random() * action.length)];

const randomWhat = what[Math.floor(Math.random() * what.length)];

const randomWhen = when[Math.floor(Math.random() * when.length)];

const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
console.log(excuse);