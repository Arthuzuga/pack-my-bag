import * as React from "react";
import * as ReactDOM from "react-dom";
import { ITripData, Stuff, Amounts, clothNames, clothWeights } from "../../stores/LuggageStore";
import { IWeatherResponse } from "../../stores/WeatherStore";


type Fields = ITripData;

const s = require("./style.scss");

interface Props {
    tripData: ITripData;
    clothesDemand: Amounts;
    weatherResponse: IWeatherResponse | null;
}

const Table: React.StatelessComponent<Props> = ({ tripData, clothesDemand, weatherResponse  }) => {
    return (
        <table>
            <caption>Tabela do {tripData.nomePessoa}</caption>
            <thead>
                <tr>
                    <th>Itens</th>
                    <th>Quantidade</th>
                    <th>Peso</th>
                </tr>
            </thead>
            <tbody>
                {(Object.keys(clothesDemand) as Stuff[])
                    .filter(cloth => clothesDemand[cloth] !== null) //filtrar somente aquele que apresentem valore diferentes de null
                    .map(cloth => (
                        <tr key={cloth}>
                            <td>{clothNames[cloth]}</td>
                            <td>{clothesDemand[cloth]}</td>
                            <td>
                                {clothesDemand[cloth]! * clothWeights[cloth] / 1000}kg
                            </td>
                        </tr>
                    ))}

                <tr>
                    <td colSpan={2} className={s.total}>
                        <b>Peso total</b>
                    </td>
                    <td>
                        {(Object.keys(clothesDemand).filter(
                            cloth => cloth !== null
                        ) as Stuff[]).reduce(
                            (acc, el) => acc + clothesDemand[el]! * clothWeights[el],
                            0
                        ) / 1000}kg
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
