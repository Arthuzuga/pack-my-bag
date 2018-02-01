import { autorun, observable, computed, action } from "mobx";
import { ITripData } from "./LuggageStore";



const FieldsLocalStorageID = "fields";

export interface ICurrentData {
    base: string;
    date: string;
    rates: {
        AUD: number;
        BGN: number;
        CAD: number;
        CHF: number;
        CNY: number;
        CZK: number;
        DKK: number;
        EUR: number;
        GBP: number;
        HKD: number;
        HUF: number;
        IDR: number;
        ILS: number;
        INR: number;
        JPY: number;
        KRW: number;
        MXN: number;
        MYR: number;
        N0K: number;
        NZD: number;
        PHP: number;
        PLN: number;
        RON: number;
        RUB: number;
        SEK: number;
        SGD: number;
        THB: number;
        TRY: number;
        USD: number;
        ZAR: number;
    }
}

export interface ICurrentResponse {
    base: string;
    date: string;
    rates: {
        AUD: number;
        BGN: number;
        BRL: number;
        CAD: number;
        CHF: number;
        CNY: number;
        CZK: number;
        DKK: number;
        EUR: number;
        GBP: number;
        HKD: number;
        HUF: number;
        IDR: number;
        ILS: number;
        INR: number;
        JPY: number;
        KRW: number;
        MXN: number;
        MYR: number;
        N0K: number;
        NZD: number;
        PHP: number;
        PLN: number;
        RON: number;
        RUB: number;
        SEK: number;
        SGD: number;
        THB: number;
        TRY: number;
        USD: number;
        ZAR: number;
    }
}

export type Current = "BRL";

export type CurrentType = { [key in Current]: null  };

export class CurrencyStore{
    @observable
    public currentData: ITripData | null;
    
    @observable
    public icurrentResponse: ICurrentResponse | null;

    constructor() {
        const fieldsAsString = localStorage.getItem(FieldsLocalStorageID);
        
        let currentData: ITripData | null = null;

        let currentResponse: ICurrentResponse | null = null;

        if (fieldsAsString) {
            try {
                currentData = JSON.parse(fieldsAsString);
            } catch {}
        }

        this.currentData = currentData;
        this.icurrentResponse = currentResponse;
        this.searchCurrent;
    }

    private saveData = autorun(() => {
        localStorage.setItem(FieldsLocalStorageID, JSON.stringify(this.currentData));
    });

    public get base() {
        return this.currentData && this.currentData.base;
    }

    @action.bound
    public async searchCurrent() {
        if (!this.currentData) return undefined;
        
        const fields = this.currentData;
        console.log({fields});
        
        try {
            const data = await fetch(`http://api.fixer.io/latest?base=${fields.base}`)
                    .then(res => res.json());
            // console.log(data1);
            this.icurrentResponse = data;
            // console.log(this.icurrentResponse);
            return data;
        } catch (err) {
            console.error(err);
        } finally {
            // console.info("finally");
        }
    }
}