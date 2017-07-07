const express = require('express');
const cheerio = require('cheerio');
const superagent = require('superagent');
const http = require('http')
const {email} = require('./email.js');
const fs = require('fs');
const {server} = require('./server.js');

server.start()
// server.watcher()
