// ABSTRACT CLASS - la superclasse
abstract class Lavoratore {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(_redditoannuolordo: number, _codredd: number, _tasseinps: number, _tasseirpef: number) {
        this.redditoannuolordo = _redditoannuolordo;
        this.codredd = _codredd;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }

    getUtileTasse(): number {
        return this.redditoannuolordo * this.codredd / 100;
    }

    getTasseInps(): number {
        return this.getUtileTasse() * this.tasseinps / 100;
    }

    getTasseIrpef(): number {
        return this.getUtileTasse() * this.tasseirpef / 100;
    }

    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
    }
}

// SOTTOCLASSI
class Professionista extends Lavoratore {


    constructor (_redditoannuolordo: number, _codredd: number, _tasseinps: number, _tasseirpef: number) {
        super (_redditoannuolordo, _codredd, _tasseinps, _tasseirpef)
    }
}
class Artigiano extends Lavoratore {
    constructor (_redditoannuolordo: number, _codredd: number, _tasseinps: number, _tasseirpef: number) {
        super (_redditoannuolordo, _codredd, _tasseinps, _tasseirpef)
    }
}
class Commerciante extends Lavoratore {
    constructor (_redditoannuolordo: number, _codredd: number, _tasseinps: number, _tasseirpef: number) {
        super (_redditoannuolordo, _codredd, _tasseinps, _tasseirpef)
    }
}

let prof1 = new Professionista (30000, 78, 25.72, 5);
let artig1 = new Professionista (20000, 67, 35, 15);
let comm1 = new Professionista (40000, 40, 35, 15);

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