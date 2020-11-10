const {getInstanceRouter} = require('xpresser');
/**
 * Xpresser Router = $.router;
 */
const route = getInstanceRouter();

/**
 * Name in routes is not compulsory.
 * if action of controller name is === to route name
 * You can use the .actionAsName() function,
 * As seen in about route
 */
route.get('/', 'App@index').name('index');
route.get('/about', 'App@about').actionAsName();
