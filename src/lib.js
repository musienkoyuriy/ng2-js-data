"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var js_data_1 = require('js-data');
var js_data_http_1 = require('js-data-http');
var Ng2JSData = (function () {
    function Ng2JSData() {
    }
    Ng2JSData.prototype.createMapper = function (options, adapterOptions) {
        if (adapterOptions === void 0) { adapterOptions = { 'default': true }; }
        var mapper = new js_data_1.Mapper(options);
        var adapter = new js_data_http_1.HttpAdapter();
        mapper.registerAdapter('http', adapter, adapterOptions);
        return mapper;
    };
    Ng2JSData.prototype.createCollection = function (options, adapterOptions) {
        if (adapterOptions === void 0) { adapterOptions = { 'default': true }; }
        var collection = new js_data_1.Collection(options);
        return collection;
    };
    Ng2JSData.prototype.createLinkedCollection = function (options, adapterOptions) {
        if (adapterOptions === void 0) { adapterOptions = { 'default': true }; }
        var linkedCollection = new js_data_1.LinkedCollection(options);
        return linkedCollection;
    };
    Ng2JSData.prototype.createContainer = function (options, adapterOptions) {
        if (adapterOptions === void 0) { adapterOptions = { 'default': true }; }
        var container = new js_data_1.Container(options);
        return container;
    };
    Ng2JSData.prototype.createDataStore = function (options, adapterOptions) {
        if (adapterOptions === void 0) { adapterOptions = { 'default': true }; }
        var ds = new js_data_1.DataStore(options);
        return ds;
    };
    Ng2JSData.prototype.createQuery = function (options, adapterOptions) {
        if (adapterOptions === void 0) { adapterOptions = { 'default': true }; }
        var query = new js_data_1.Query(options);
        return query;
    };
    Ng2JSData = __decorate([
        core_1.Injectable()
    ], Ng2JSData);
    return Ng2JSData;
}());
exports.Ng2JSData = Ng2JSData;
//# sourceMappingURL=lib.js.map