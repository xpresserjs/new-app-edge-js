const {ControllerClass} = require("xpresser");

/**
 * AppController
 * @class
 * @extends ControllerClass
 */
class AppController extends ControllerClass {

    /**
     * Boot Method
     *
     * Must be static.
     * Serves as a middleware for all roots
     *
     * Whatever is returned in boot method
     * is passed as the second method on all methods.
     *
     * @param {Xpresser.Http} http
     * @return {object|*}
     */
    static boot(http) {
        /**
         * Set a user variable that will be passed to all methods
         * This should maybe come from a database.
         */
        const user = {
            name: "Developer",
            email: "developer@example.com",
        };
        
        /**
         * Return Values we want other methods to get on every request.
         *
         * Imagine writing this in every method because we need them? :)
         */
        return {user}
    }


    /**
     * Index Page
     *
     * can be static or direct..
     *
     * About Page action is static for test.
     * @param {Xpresser.Http} http - RequestEngine Instance
     * @param user  - Imported form boot method
     */
    index(http, {user}) {
        // Return index view in views folder
        return http.view('index', {user})
    }


    /**
     * About Page
     *
     * A static method also works depending on your preference.
     *
     * @param {Xpresser.Http} http - RequestEngine Instance
     * @param user - Imported from boot method
     */
    static about(http, {user}) {
        /**
         * Set contact details
         * user is imported from the boot method.
         */
        const info = {
            email: user.email,
            company: 'Your Company',
            phone: '+123456789',
            address: "Somewhere on earth, maybe Astro world!"
        };

        return http.view('about', {
            user, info
        });
    }
}


module.exports = AppController;
