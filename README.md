# Chat App Socket Demo

A simple chat app that uses socket.io.

Run the http server with `http-server` package in the terminal.
```
http-server -p <PORT>
# example
http-server -p 5000
```

Run the server in the terminal.
```
npm run devStart
# or
nodemon server.js
```

To fix the CORS issue, add the following option when initializing `io` in `server.js`.
``` js
const options = {
  cors: {
    origin: "*"
  }
};
const io = require("socket.io")(3000, options);
```
