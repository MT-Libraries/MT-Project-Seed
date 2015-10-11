/**
 *
 * webpack.config.
 *
 * @project     localhost_thonatos.com
 * @datetime    18:22 - 15/9/10
 * @author      Thonatos.Yang <thonatos.yang@gmail.com>
 * @copyright   Thonatos.Yang <https://www.thonatos.com>
 *
 */

'use strict';

module.exports = {
    entry: {
        'example': './src/js/js-page/example.js',
    },
    output: {
        path: __dirname + "/public/js/dev",
        filename: '[name].js'
    }
};