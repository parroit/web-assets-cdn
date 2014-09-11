/*
 * web-assets-cdn
 * https://github.com/parroit/web-assets-cdn
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var webAssetsCdn = require('../lib/web-assets-cdn.js');

describe('webAssetsCdn', function(){
    it('is defined', function(){
      webAssetsCdn.should.be.a('function');
    });

});
