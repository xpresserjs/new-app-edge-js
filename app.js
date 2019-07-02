const xpresser = require("xpresser");


/**
 * xpresser init function that requires your config.
 *
 * Config can be written directly as below
 *
 *      xpresser({name: 'My Xpresser App'})
 *
 * Or a module that exports your object config e.g
 *
 *      xpresser(require('./config.js'))
 *
 * Or simply a string and xpresser will require it for you.
 *
 *      xpresser('path/to/config.js');
 */

xpresser({
    /**
     * Set Application Environment.
     */
    env: "development",

    /**
     * Set Name of Application.
     */
    name: "Xjs App",

    /**
     * Project Settings.
     */
    project: {
        theme: "bulma"
    },


    /**
     * Path settings..
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
        backend: 'base://',

        /**
         * By default if not set xjs will use base://backend/routes.js
         * Since this is not a framework app..
         */
        routesFile: 'base://routes.js'
    },

    /**
     * By default xjs sets this for you.
     */
    server: {
        domain: 'localhost',
        port: 3000,

        /**
         * By default port is excluded if its [80, 443]
         * You can also decide to exclude port in url
         * by setting this to false
         */
        includePortInUrl: true,
    },

    /**
     * In order to use express-edge.
     */
    template: {
        use: 'express-edge',
        // Set extension of templates
        extension: 'edge'
    }
});