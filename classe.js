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
// ABSTRACT CLASS - la superclasse
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
    function Professionista(_redditoannuolordo, _codredd, _tasseinps, _tasseirpef) {
        return _super.call(this, _redditoannuolordo, _codredd, _tasseinps, _tasseirpef) || this;
    }
    return Professionista;
}(Lavoratore));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_redditoannuolordo, _codredd, _tasseinps, _tasseirpef) {
        return _super.call(this, _redditoannuolordo, _codredd, _tasseinps, _tasseirpef) || this;
    }
    return Artigiano;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_redditoannuolordo, _codredd, _tasseinps, _tasseirpef) {
        return _super.call(this, _redditoannuolordo, _codredd, _tasseinps, _tasseirpef) || this;
    }
    return Commerciante;
}(Lavoratore));
var prof1 = new Professionista(30000, 78, 25.72, 5);
var artig1 = new Professionista(20000, 67, 35, 15);
var comm1 = new Professionista(40000, 40, 35, 15);
console.log(prof1);
////////////////////////////////////////////////////////////////////////////////////////
// SON ACCOUNT
// class SonAccount {
//     // Con quanti soldi parto
//     balanceInit: number;
//     constructor(_balanceInit: number) {
//         this.balanceInit = _balanceInit;
//     }
//     // Deposita quantità
//     deposit(num: number): number {
//         this.balanceInit = this.balanceInit + num;
//         return num;
//     }
//     // Deposita 100
//     depositFixed(): number {
//         this.deposit(100);
//         return 100;
//     }
//     // Ritira quantità
//     withdraw(num: number): number {
//         this.balanceInit = this.balanceInit - num;
//         return num;
//     }
//     // Ritira 100
//     withdrawFixed(): number {
//         this.withdraw(100);
//         return 100;
//     }
// }
//////////////////////////////////////////////////
// MOTHER ACCOUNT
// class MotherAccount extends SonAccount {
//     constructor(_balanceInit: number) {
//         super(_balanceInit);
//     }
//     // Deposita quantità
//     deposit(num: number): number {
//         this.balanceInit = this.balanceInit + this.getInterest(num);
//         return this.getInterest(num);
//     }
//     // Deposita 100
//     depositFixed(): number {
//         this.deposit(100);
//         return this.getInterest(100);
//     }
//     // Interesse del 10% di number
//     interest(number: number): number {
//         return (10 / 100) * number;
//     }
//     getInterest(num: number): number {
//         return num - this.interest(num);
//     }
// }
// CONSOLE LOGS
// let mother = new MotherAccount(0);
// console.log("");
// console.log("---MOTHER ACCOUNT MOVEMENTS---");
// console.log("Balance: " + mother.balanceInit + " €");
// console.log("> Depositing: " + mother.deposit(50) + " €");
// console.log("Balance: " + mother.balanceInit + " €");
// console.log("> Depositing: " + mother.depositFixed() + " €");
// console.log("Balance: " + mother.balanceInit + " €");
// console.log("> Withdrawing: " + mother.withdrawFixed() + " €");
// console.log("Balance: " + mother.balanceInit + " €");
// console.log("> Withdrawing: " + mother.withdraw(20) + " €");
// console.log("Balance: " + mother.balanceInit + " €");
// console.log("---------------------------");
