/** uuid module
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uuid = v4.generate();
console.log(uuid);
**/
/** fs module
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const jsonObj = await readJson("ninjas.json");
console.log(jsonObj);

const books = [
  { title: "book 1", author: "momo" },
  { title: "book 2", author: "lolo" },
];

await writeJson("books.json", books);
console.log("created books.json");
**/
/** http module (server)
import { serve } from "https://deno.land/std/http/mod.ts";

const server = serve({ port: 3000 });
console.log("listen on port 3000");

for await (const req of server) {
  const url = req.url;
  req.respond({ body: `hello ninjas, you's guys visited ${url}` });
}
*/

import {
  camelCase,
  paramCase,
  pascalCase,
  snakeCase,
} from "https://deno.land/x/case/mod.ts";

const text = "Hello again ninjas";

const camel = camelCase(text);
const param = paramCase(text);
const pascal = pascalCase(text);
const snake = snakeCase(text);

console.log(camel);
console.log(param);
console.log(pascal);
console.log(snake);
