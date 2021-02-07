// Import Xpresser
const {init} = require("xpresser");
// Import Config
const config = require("./config");

// Initialize xpresser with project config
const $ = init(config);

// Boot Xpresser.
$.boot();

