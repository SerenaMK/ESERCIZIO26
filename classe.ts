// ABSTRACT CLASS - superclasse
abstract class Lavoratore {
    redditoannuolordo: number;
    codredd: number;
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
    constructor (_redditoannuolordo: number) {
        super (_redditoannuolordo, 78, 25.72, 5);
    }
}

class Artigiano extends Lavoratore {
    constructor (_redditoannuolordo: number) {
        super (_redditoannuolordo, 67, 35, 15);
    }
}

class Commerciante extends Lavoratore {
    constructor (_redditoannuolordo: number) {
        super (_redditoannuolordo, 40, 35, 15);
    }
}

// ISTANZE DI CLASSE
let prof1 = new Professionista (30000);
let artig1 = new Artigiano (20000);
let comm1 = new Commerciante (40000);

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