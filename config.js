// Import Edge Template Engine
const engine = require("express-edge");

/**
 * Your App Configuration
 */
module.exports = {
    /**
     * Set Application Environment.
     */
    env: "development",

    /**
     * Set Name of Application.
     */
    name: "Xpresser Edge App",

    /**
     * Project Settings.
     */
    project: {
        theme: "bulma"
    },


    /**
     * Path settings.
     */
    paths: {

        /**
         * Base Folder
         * Where this app is called from.
         *
         * Best value for this is: __dirname
         */
        base: __dirname,


        /**
         * Xpresser has special string paths
         * and base:// simply means xpresser should
         * use base path.
         *
         * See file: xpresser/src/config.ts
         * For all default Config options.
         */
        backend: 'base://backend',
    },

    /**
     * By default, xjs sets this for you.
     */
    server: {
        // Server Port
        port: 3000,

        /**
         * By default, port is excluded if its [80, 443]
         * You can also decide to exclude port in url
         * by setting this to false
         */
        includePortInUrl: true,
    },

    /**
     * To use express-edge.
     */
    template: {
        use: engine,
        // Set extension of templates
        extension: 'edge'
    },
};
