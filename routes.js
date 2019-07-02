/**
 * Xpresser Router = $.router;
 * To make it neater
 * router.get() instead of $.router.get()
 */
const router = $.router;

/**
 * Name in routes is not compulsory.
 * if action of controller name is === to route name
 * You can use the .actionAsName() function,
 * As seen in about route
 */

router.get('/', 'App@index').name('master.edge');
router.get('/about', 'App@about').actionAsName();