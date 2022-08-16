const f = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = f.flattenDeep(items);

console.log(newItems);
