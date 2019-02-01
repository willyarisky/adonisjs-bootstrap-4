let mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Adonis application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css').options({
    postCss: [
        require('autoprefixer')({
            browsers: [
                'last 2 versions',
                'iOS >= 8',
                'Safari >= 8',
            ],
            cascade: false,
            flexbox: "no-2009"
        }),
    ]
});
