import * as React from "react";
import { Route } from "react-router";
import { observer, inject } from "mobx-react";

/**
 * Containers
 */

import Basic from "../../components/TripDataForm";
import Table from "../../components/ClothesDemandTable";
import InfoTable from "../../components/TripInformationTable";
import { ITripData, LuggageStore } from "../../stores/LuggageStore";
import {
	WeatherStore,
	ClimaType,
	Clima,
	IWeatherData,
	IWeatherResponse,
} from "../../stores/WeatherStore";
import { CurrencyStore, ICurrentData } from "../../stores/CurrentStore";

/**
 * Style
 */

const s = require("./style.scss");

interface Props {
	luggageStore: LuggageStore;
	weatherStore: WeatherStore;
	currentStore: CurrencyStore;
}

interface State {}
// Adicionei aqui no inject o novo Store (verificar se isso pode-se fazer)
@inject("luggageStore", "weatherStore", "currentStore") // este nome tem que ser igual ao nome passado para o Provider no rootStories
@observer
export default class Main extends React.Component<Props, State> {
	state: State = {};

	onSubmit = (fields: ITripData) => {
		this.props.luggageStore.tripData = fields;
	};

	searchWeather = (fields: IWeatherData) => {
		this.props.weatherStore.weatherData = fields;
		this.props.weatherStore.searchWeather();
	};

	searchCurrent = (fields: ITripData) => {
		this.props.currentStore.currentData = fields;
		this.props.currentStore.searchCurrent();
	};

	render() {
		return (
			<div className={s.main}>
				<div className={s.title}>
					<h1>Arrume Minha Mala</h1>
					<h2>
						Seu assistente pessoal para lhe ajudar a arrumar a suas roupas
					</h2>
				</div>
				<Basic
					fields={this.props.luggageStore.tripData || undefined}
					onSubmit={this.onSubmit}
					weatherSearcher={this.searchWeather}
					currentSearcher={this.searchCurrent}
					iweatherResponse={this.props.weatherStore.iweatherResponse}
					isRaining={this.props.weatherStore.isRaining}
				/>

				{this.props.luggageStore.clothesDemand ? (
					<Table
						tripData={this.props.luggageStore.tripData!}
						clothesDemand={this.props.luggageStore.clothesDemand}
						weatherResponse={this.props.weatherStore.iweatherResponse}
					/>
				) : null}

				{this.props.luggageStore.clothesDemand ? (
					<InfoTable
						tripData={this.props.luggageStore.tripData!}
						clothesDemand={this.props.luggageStore.clothesDemand}
						currentData={this.props.currentStore.currentData}
						currentSearcher={this.searchCurrent}
						currentResponse={this.props.currentStore.icurrentResponse}
						iweatherResponse={this.props.weatherStore.iweatherResponse}
					/>
				) : null}
			</div>
		);
	}
}
