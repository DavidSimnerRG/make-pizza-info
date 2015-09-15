define({
    suites: [
        'tests/modules/contact',
        'tests/modules/home',
        'tests/modules/not-found',
        'tests/modules/recipe',
        'tests/widgets/header',
    ],
    loaders: {
        'host-node': 'durandal/node_modules/requirejs'
    },
    basePath: 'app',
    loaderOptions: {
        paths: {
            'tests': '../tests'
        }
    },
    excludeInstrumentation: /\/node_modules\//
});