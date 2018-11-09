"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var storage_1 = require("@ionic/storage");
var path_1 = require("path");
var DataBundleService = /** @class */ (function () {
    function DataBundleService(_storage) {
        this._storage = _storage;
        this.field = 'field';
    }
    DataBundleService.prototype.save = function (data) {
        this._storage.set(this.field, JSON.stringify(data));
    };
    DataBundleService.prototype.getField = function () {
        return this._storage.get(this.field)
            .then(function (data) {
            return path_1.resolve(JSON.parse(data));
        })
            .catch(function (e) { return console.error(e); });
    };
    DataBundleService.prototype.cleanAll = function () {
        this._storage.clear();
    };
    DataBundleService.prototype.clearField = function (key) {
        this._storage.remove(key);
    };
    DataBundleService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [storage_1.Storage])
    ], DataBundleService);
    return DataBundleService;
}());
exports.DataBundleService = DataBundleService;
//# sourceMappingURL=data-bundle.service.js.map