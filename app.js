'use strict';

const Homey = require('homey');

class Flic extends Homey.App {
    onInit() {
        console.log('Successfully init Flic version: %s', Homey.app.manifest.version);

    };
}   

module.exports = Flic;
