define(['plugins/router'], function (router) {
    function Shell() {
    }

    Shell.prototype.activate = function () {
        return router.map([
            { route: '',                        moduleId: 'modules/home/index' },
            { route: 'contact',                 moduleId: 'modules/contact/index' },
            { route: 'recipe/:recipeId',        moduleId: 'modules/recipe/index' },
            { route: 'recipes/:recipeGroupId',  moduleId: 'modules/recipe-group/index' },
        ])
        .mapUnknownRoutes('modules/not-found/index', 'not-found')
        .activate({
            pushState: true
        });
    };

    return Shell;
});