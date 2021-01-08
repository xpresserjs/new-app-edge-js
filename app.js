// Import Xpresser
const {init} = require("xpresser");
// Import Config
const config = require("./config");

// Initialize and boot() xpresser
init(config, {exposeDollarSign: false}).boot();

