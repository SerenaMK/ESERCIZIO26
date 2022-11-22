var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ABSTRACT CLASS - superclasse
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_redditoannuolordo, _codredd, _tasseinps, _tasseirpef) {
        this.redditoannuolordo = _redditoannuolordo;
        this.codredd = _codredd;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * this.codredd / 100;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.tasseinps / 100;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.tasseirpef / 100;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return Lavoratore;
}());
// SOTTOCLASSI
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_redditoannuolordo) {
        return _super.call(this, _redditoannuolordo, 78, 25.72, 5) || this;
    }
    return Professionista;
}(Lavoratore));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_redditoannuolordo) {
        return _super.call(this, _redditoannuolordo, 67, 35, 15) || this;
    }
    return Artigiano;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_redditoannuolordo) {
        return _super.call(this, _redditoannuolordo, 40, 35, 15) || this;
    }
    return Commerciante;
}(Lavoratore));
// ISTANZE DI CLASSE
var prof1 = new Professionista(30000);
var artig1 = new Artigiano(20000);
var comm1 = new Commerciante(40000);
//// CONSOLE LOGS
// Console log libero professionista
console.log("----------------------------------");
console.log("> LIBERO PROFESSIONISTA");
console.log("Reddito annuo lordo: ", prof1.redditoannuolordo, "€");
console.log("Reddito annuo netto: ", prof1.getRedditoAnnuoNetto(), "€");
console.log("Utile tasse: ", prof1.getUtileTasse(), "€");
console.log("Tasse INPS: ", prof1.getTasseInps(), "€");
console.log("Tasse IRPEF: ", prof1.getTasseIrpef(), "€");
console.log("----------------------------------");
// Console log artigiano
console.log("----------------------------------");
console.log("> ARTIGIANO");
console.log("Reddito annuo lordo: ", artig1.redditoannuolordo, "€");
console.log("Reddito annuo netto: ", artig1.getRedditoAnnuoNetto(), "€");
console.log("Utile tasse: ", artig1.getUtileTasse(), "€");
console.log("Tasse INPS: ", artig1.getTasseInps(), "€");
console.log("Tasse IRPEF: ", artig1.getTasseIrpef(), "€");
console.log("----------------------------------");
// Console log commerciante
console.log("----------------------------------");
console.log("> COMMERCIANTE");
console.log("Reddito annuo lordo: ", comm1.redditoannuolordo, "€");
console.log("Reddito annuo netto: ", comm1.getRedditoAnnuoNetto(), "€");
console.log("Utile tasse: ", comm1.getUtileTasse(), "€");
console.log("Tasse INPS: ", comm1.getTasseInps(), "€");
console.log("Tasse IRPEF: ", comm1.getTasseIrpef(), "€");
console.log("----------------------------------");
