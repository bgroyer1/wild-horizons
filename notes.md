# Notes

## Node.js

- Node is **not a language**, it is an environment that allows us to run javascript outside of the browser
- Express.js is a **framework** that simplifies and streamlines the use of node.js

### Running node in an IDE

- Start a node environment (if you want to run javascript directly from the terminal):

```js
node; //then hit enter
// type your javasript code, press enter
// press cntl + c twice to exit
```

- Write javascript in a file
- Run a file in the terminal by typing:

```js
  node <file_name>
```

---

### Package.json

- contains metadata (name, version, author, description, etc.)
- JSON file, only accepts json, doesn't even accept comments!
- simplifies collaboration
  - Manages dependencies
  - Defines starting scripts
- create a package.json file:

```js
  npm init
  /*
  ENTER THIS INFORMATION
  name: <project-name>
  version: default
  description: <project_description>
  entry point: <server_file.ext>
  test command: default (unsure)
  git repository: <link_to_github_repo>
  keywords: default (unsure)
  authour: your name
  license: default (ISC ? )
   */
```

- this creates the pacakage.json (see file)
- after running npm init, it is now possible to type start instead of running node <file_name>

```js
  npm start
  /* replaces node server.js */
```

---

### HTTP Module

#### Getting it running

- to create a server, a project need nodes HTTP module
- to import an http module, use an import statement

```js
import http from "http";
```

- doing this will cause an error, as the project does not currently have type: module in either the pacakge.json, or a .mjs extension file
- older, common.js method was to use the required keyword:

```js
import http from "http";
require("http");
```

- the modern approach is to use ES Modules, by adding type='module'

```json
    {
  "name": "wild-horizons",
  "version": "1.0.0",
  "description": "a dataset of the planet’s most interesting places",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js"
  },
  "author": "Tom Chant",
  "license": "ISC"
}
```

- Best practice to include node:<module_name> in import statements
- tells the app that it is a node module being imported, not a self-made javascript module
- can speed up performance in larger apps 


```js
  import http from 'node:http'
```

#### What it is

- Allows node.js to transfer data over the HyperText (HTTP) protocol
- Used to:
  - Create s  ervers
  - Handle requests from clients
  - Provide responses to those requests
- The only method being used in this course from the imported HTTP module is http.createServer

```js
  import http from 'node:http';
  const server = http.createServer();
```

- http.createServer() takes a callback function with two parameters: request and response
- response has a method called the end() method, which sends data over http, and ends the response

```js
  import http from 'node:http';
  const server = http.createServer((req, res) => {
    res.end('Hello from the server')
  })
```

##### Problems i faced

- ran a live server using the index.html page.
- when i realized my mistake, i closed the index.html page, and attempted to go to http://localhost:5501/
- however, i forgot to close the previously open live server, so instead of seeing the node message in the browser, i was seeing the project folders