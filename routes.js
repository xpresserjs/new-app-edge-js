/**
 * Xpresser Router = $.router;
 * @type XpresserRouter
 */
const route = $.router;

/**
 * Name in routes is not compulsory.
 * if action of controller name is === to route name
 * You can use the .actionAsName() function,
 * As seen in about route
 */
route.get('/', 'App@index').name('master.edge');
route.get('/about', 'App@about').actionAsName();
