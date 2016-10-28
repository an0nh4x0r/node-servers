// Require modules

var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

// Array of Mime types
// MIME = Multi-Purpose Internet Mail Extensions

var mimeTypes = {
	"html": "text/html", 
	"jpeg": "image/jpeg", 
	"jpg": "image/jpeg", 
	"png": "image/png", 
	"js": "text/javascript", 
	"css": "text/css"
};