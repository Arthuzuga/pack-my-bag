import { autorun, observable, computed, action } from "mobx";

const FieldsLocalStorageID = "fields";

export interface IWeatherData {
    location: {
        lat: string;
        lng: string;
    };
}

export interface IWeatherResponse {
    city: {
        coord: {
            lat: number;
            lng: number;
        };
        country: string;
        id: number;
    };
    cnt: number;
    list: [
        {
            clouds: {
                all: number;
            };
            dt: number;
            dt_txt: string;
            main: {
                grndlevel: number;
                humidity: number;
                pressure: number;
                sealevel: number;
                temp: number;
                tempkf: number;
                tempmax: number;
                tempmin: number;
            };
            weather: [{
                description: string;
                icon: string;
                id: number;
                main: string;
            }];
        }
    ];
    message: number;
}

export type Clima = "rain" | "sunny" | "cloudy";

export type ClimaType = { [key in Clima]: null };
export type Names = { [key in Clima]: null | string };

export interface WeatherTypes {
    history: [string];
}

export class WeatherStore {
    @observable public weatherData: IWeatherData | null;

    @observable public iweatherResponse: IWeatherResponse | null;

    @observable public iweatherTypes: WeatherTypes | null;

    constructor() {
        const fieldsAsString = localStorage.getItem(FieldsLocalStorageID);

        let weatherData: IWeatherData | null = null;

        let weatherResponse: IWeatherResponse | null = null;

        let weatherTypes: WeatherTypes | null = null;

        if (fieldsAsString) {
            try {
                weatherData = JSON.parse(fieldsAsString);
            } catch {}
        }

        this.weatherData = weatherData;
        this.iweatherResponse = weatherResponse;
        this.searchWeather;
        this.iweatherTypes = weatherTypes   
    }

    private saveData = autorun(() => {
        localStorage.setItem(
            FieldsLocalStorageID,
            JSON.stringify(this.weatherData)
        );
    });

    public get location() {
        return this.weatherData && this.weatherData.location;
    }

    @computed
    public get isRaining() {
        if (!this.iweatherResponse) return null;

        for (let el of this.iweatherResponse.list) {
            for (let i of el.weather){
                console.log(i.main);
                console.log(el.dt_txt);
                if (i.main === "Rain") return true;
            }
        }
        
        return false;
    }

    @action.bound
    public async searchWeather(): Promise<ClimaType | undefined> {
        if (!this.weatherData) return undefined;

        const fields = this.weatherData;

        try {
            const data1 = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${
                    fields.location.lat
                }&lon=${
                    fields.location.lng
                }&cnt=16&units=metric&appid=2d500cb874e4b6c07216d58d9201c979`
            ).then(res => res.json());
            // console.log(data1);
            this.iweatherResponse = data1;
            // console.log(this.iweatherResponse);
            return data1;
        } catch (err) {
            console.error(err);
        } finally {
            // console.info("finally");
        }
    }
}
