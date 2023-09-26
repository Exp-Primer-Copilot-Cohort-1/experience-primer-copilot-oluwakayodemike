// Create web server
// To run this program, enter the following command in the terminal: node index.js
// To test the program, open a browser and enter the following URL: http://localhost:8080/

const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;

// Create a server object
http.createServer((req, res) => {
    // Parse the URL
    const q = url.parse(req.url, true);
    // Get the pathname
    const pathname = q.pathname;
    // Get the query string
    const query = q.query;

    // If the request is for the root directory
    if (pathname === '/') {
        // Set the content type
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // Send the response
        res.end('<h1>Welcome to my homepage!</h1>');
    }
    // If the request is for the /about page
    else if (pathname === '/about') {
        // Set the content type
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // Send the response
        res.end('<h1>This is the about page!</h1>');
    }
    // If the request is for the /contact page
    else if (pathname === '/contact') {
        // Set the content type
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // Send the response
        res.end('<h1>This is the contact page!</h1>');
    }
    // If the request is for the /products page
    else if (pathname === '/products') {
        // Set the content type
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // Send the response
        res.end('<h1>This is the products page!</h1>');
    }
    // If the request is for the /users page
    else if (pathname === '/users') {
        // Set the content type
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // Send the response
        res.end('<h1>This is the users page!</h1>');
    }
    // If the request is for the /users/:name page
    else if (pathname === '/users/' + query.name) {
        // Set the content type
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // Send the response
        res.end('<h1>This is the user page for ' + query.name + '!</h1>');
    } {
        // Set the content type
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // Send the response
        res.end('<h1>This is the user page for ' + query.name + '!</h1>');
    }
};