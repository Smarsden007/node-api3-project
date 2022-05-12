const express = require('express');

const server = express();

// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.get( (req, res) => {
  
})
server.get( (req, res) => {
  
})
server.get( (req, res) => {
  
})
server.post( (req, res) => {
  
})
server.put( (req, res) => {
  
})
server.delete( (req, res) => {
  
})
server.get( (req, res) => {
  
})



module.exports = server;
