/*
 * web-assets-cdn
 * https://github.com/parroit/web-assets-cdn
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */
'use strict';

var path = require('path');
var lessMiddleware = require('less-middleware');

module.exports = function(express) {
    return [
        express.static(__dirname + '/../node_modules/font-awesome'),
        express.static(__dirname + '/../node_modules/bootstrap'),
        lessMiddleware(__dirname + '/../lib/styles'),
        express.static(__dirname + '/../lib/styles')
    ];
};
