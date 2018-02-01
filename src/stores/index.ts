import { LuggageStore } from './LuggageStore';
import { RouterStore } from 'mobx-react-router';
import { CurrencyStore } from './CurrentStore';
import { WeatherStore } from './WeatherStore';

export { LuggageStore } from './LuggageStore';
export { WeatherStore } from './WeatherStore';
export { CurrencyStore } from './CurrentStore';
export { RouterStore } from 'mobx-react-router';

export class RootStore {
    luggageStore = new LuggageStore();
    weatherStore = new WeatherStore();
    currentStore = new CurrencyStore();
    routerStore = new RouterStore();
}

export const rootStore = new RootStore();
