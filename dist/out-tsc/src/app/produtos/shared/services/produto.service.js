"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var firestore_1 = require("@angular/fire/firestore");
var operators_1 = require("rxjs/operators");
var ProdutoService = /** @class */ (function () {
    function ProdutoService(_afs) {
        this._afs = _afs;
    }
    ProdutoService.prototype.findAll = function () {
        this.collection = this._afs.collection('produtos');
        return this.collection.snapshotChanges().pipe(operators_1.map(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    ProdutoService.prototype.findOne = function (id) {
        this.collection = this._afs.collection("produtos/" + );
        return this._afs
            .collection('produtos', function (ref) { return ref.where('marca', '==', 'j@javebratt.com'); })
            .snapshotChanges().pipe(operators_1.map(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            console.log(data);
            var id2 = a.payload.doc.id;
            return __assign({ id2: id2 }, data);
        }); }));
    };
    ProdutoService.prototype.remove = function (id) {
        this._afs.doc("produtos/" + id).delete();
    };
    ProdutoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], ProdutoService);
    return ProdutoService;
}());
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=produto.service.js.map