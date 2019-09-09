require('./countWords.test.js');
require('./sumDigits.test.js');
require('./makeFib.test.js');
require('./multiplicativePersistence.test.js');
require('./transformEmployeeData.test.js');

const fs = require('fs');
const vm = require('vm');
const { describe, it, beforeEach } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM('<!DOCTYPE html><html><body><ul id="container"></ul></body></html>');
const { document } = window;

const sandbox = vm.createContext({ sinon, describe, it, beforeEach, expect, console, window, document })
let runnable1 = fs.readFileSync('src/getObjectById.js');
let testable1 = fs.readFileSync('spec/getObjectById.test.js');
vm.runInContext(runnable1 + testable1, sandbox);

let runnable2 = fs.readFileSync('src/transformAsHTML.js');
let testable2 = fs.readFileSync('spec/transformAsHTML.test.js');
vm.runInContext(runnable2 + testable2, sandbox);