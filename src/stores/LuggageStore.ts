import { autorun, observable, computed } from "mobx";

export interface ITripData {
    nomePessoa: string;
    cidade: string;
    numeroDias: number;
    dataViagem: string;
    sexoMFO: "m" | "f" | "o";
    banhos: number;
    saidasNoites: "sim" | "nao";
    numeroSaidasNoite: number;
    cidadePraia: "sim" | "nao";
    praias: "sim" | "nao";
    numeroPraia: number;
    compromissos: "sim" | "nao";
    numeroCompromissos: number;
    location: {
        lat: string,
        lng: string,
    };
    base: "BRL" | "USD" | "EUR" | "GBP" | "JPY";
    
}

export type Gender = "male" | "female" | "other";
export type Stuff =
    | "shirt"
    | "pants"
    | "underwear"
    | "socks"
    | "pijamas"
    | "socialshirt"
    | "socialpants"
    | "dress"
    | "sunga"
    | "biquini";
export type Amounts = { [key in Stuff]: null | number }; //irá criar um objeto com os mesmos contrutores do Stuff, mas con sua tipagem de null ou number
export type Weights = { [key in Stuff]: number };
export type Names = { [key in Stuff]: string };
export type IsGenderSpecific = { [key in Stuff]: null | Gender };

export const clothWeights: Weights = {
    shirt: 250,
    pants: 800,
    underwear: 50,
    socks: 50,
    pijamas: 400,
    socialshirt: 250,
    socialpants: 600,
    dress: 400,
    sunga: 50,
    biquini: 100
};

export const clothNames: Names = {
    shirt: "Camisas",
    pants: "Calças",
    underwear: "Roupas Intimas",
    socks: "Meias",
    pijamas: "Pijamas",
    socialshirt: "Camisas Social",
    socialpants: "Calças Social",
    dress: "Vestidos",
    sunga: "Sunga",
    biquini: "Biquini"
};

const FieldsLocalStorageID = "fields";

// Criar uma Store!!!!!!!
// const base = "BRL";

// async function getCurrency() {
//     try {
//         const data = await fetch(`http://api.fixer.io/latest?base=${base}`).then(res => res.json());
//         console.log(data);
//     } catch (err) {
//     }
// }

// getCurrency()

// const city = "Sao+Paulo";
// const lat = "-23.5505199";
// const lng = "-46.63330939999997";
// const countryCode= "BR";

// async function getWeather(location: ITripData) { //adicionei o parametro de location para ter acesso aos estados
//                                                 //de latitude e longitude dos estados que serão passados pela chamada da função
//     try {
//         const data1 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.location.lat}&lon=${location.location.lng}&units=metric&appid=2d500cb874e4b6c07216d58d9201c979&cnt=16`)
//             .then(res => res.json());
//         console.log(data1);
//     } catch(err) {
//         console.log(err);
//     }   
// }
// getWeather()
// Pesquisar sobre como usar um store (MobX) com api call 

export class LuggageStore {
    @observable
    public tripData: ITripData | null;

    constructor() {
        const fieldsAsString = localStorage.getItem(FieldsLocalStorageID);
        
        let tripData: ITripData | null = null;

        if (fieldsAsString) {
            try {
                tripData = JSON.parse(fieldsAsString);
            } catch {}
        }

        this.tripData = tripData;

    }

    private saveData = autorun(() => {
        localStorage.setItem(FieldsLocalStorageID, JSON.stringify(this.tripData));
    });

    @computed
    public get clothesDemand(): Amounts | undefined {
        if (!this.tripData) return undefined;

        const fields = this.tripData;

        return {
            shirt: fields.banhos * fields.numeroDias + 1,
            pants:
                fields.numeroDias >= 7 ? Math.round(fields.numeroDias / 7) + 1 : 1,
            underwear: fields.banhos * fields.numeroDias + 1,
            socks:
                fields.numeroDias >= 7 ? Math.round(fields.numeroDias / 7) + 1 : 1,
            pijamas:
                fields.numeroDias >= 7 ? Math.round(fields.numeroDias / 7) + 1 : 1,
            socialshirt:
                fields.sexoMFO === "m" && fields.compromissos === "sim"
                    ? fields.numeroCompromissos
                    : null,
            socialpants:
                fields.sexoMFO === "m" && fields.compromissos === "sim"
                    ? fields.numeroCompromissos >= 2
                      ? fields.numeroCompromissos - 1
                      : 1
                    : null,
            dress:
                fields.sexoMFO === "f" && fields.compromissos === "sim"
                    ? fields.numeroCompromissos
                    : null,
            sunga:
                fields.sexoMFO === "m" &&
                fields.praias === "sim" &&
                fields.cidadePraia == "sim"
                    ? 1
                    : null,
            biquini:
                fields.sexoMFO === "f" &&
                fields.praias === "sim" &&
                fields.cidadePraia == "sim"
                    ? 1
                    : null
        };
    }
}
