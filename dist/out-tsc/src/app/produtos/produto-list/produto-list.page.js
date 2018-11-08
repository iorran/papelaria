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
var router_1 = require("@angular/router");
var firestore_1 = require("@angular/fire/firestore");
var operators_1 = require("rxjs/operators");
var ProdutoListPage = /** @class */ (function () {
    function ProdutoListPage(_afs, _router) {
        this._afs = _afs;
        this._router = _router;
    }
    ProdutoListPage.prototype.ngOnInit = function () {
        this.collection = this._afs.collection('produtos');
        this.produtos = this.collection.snapshotChanges().pipe(operators_1.map(function (actions) { return actions.map(function (a) {
            console.log(a);
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    ProdutoListPage.prototype.add = function () {
        this._router.navigate(['/produto-detail']);
        this.collection.add({
            nome: 'Samuel',
            marca: 'j@javebratt.com',
        });
    };
    ProdutoListPage.prototype.edit = function () {
    };
    ProdutoListPage.prototype.remove = function () {
        alert(1);
    };
    ProdutoListPage = __decorate([
        core_1.Component({
            selector: 'app-produto-list',
            templateUrl: './produto-list.page.html',
            styleUrls: ['./produto-list.page.scss'],
        }),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore,
            router_1.Router])
    ], ProdutoListPage);
    return ProdutoListPage;
}());
exports.ProdutoListPage = ProdutoListPage;
//# sourceMappingURL=produto-list.page.js.map