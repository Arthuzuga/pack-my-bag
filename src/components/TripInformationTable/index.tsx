import * as React from "react";
import * as ReactDOM from "react-dom";
import { ITripData, Stuff, Amounts, clothNames, clothWeights } from "../../stores/LuggageStore";
import {  ICurrentResponse } from "../../stores/CurrentStore";
import { IWeatherResponse } from "../../stores/WeatherStore";


type Fields = ITripData;

const s = require("./style.scss");

interface Props {
    tripData: ITripData;
    clothesDemand: Amounts;
    weatherResponse: IWeatherResponse | null;
    currentData:  ITripData | null;
    currentSearcher: (fields: Fields) => void;
    currentResponse: ICurrentResponse | null;
}

const InfoTable: React.StatelessComponent<Props> = ({ tripData, clothesDemand, currentData, currentSearcher, currentResponse, weatherResponse }) => {
    return (
        <table>
            <caption>Informações para sua viagem </caption>
            <thead>
                <tr>
                    <th>Tipo de Mala</th>
                    <th>Local</th>
                    <th>Taxa</th>
                </tr>
            </thead>
            <tbody>

                {
                     ((Object.keys(clothesDemand).filter(
                        cloth => cloth !== null
                    ) as Stuff[]).reduce(
                        (acc, el) => acc + clothesDemand[el]! * clothWeights[el],
                        0
                    ) / 1000) <=5 ?(
                        <tr>
                            <td>
                                <img src={require('../../images/mochila.png')} />
                            </td>
                            <td>Sua mala poderá ser levada no bagageiro</td>
                            <td>Você não terá custos adicionais</td>
                        </tr>
                    ):(
                        <tr>
                            <td>
                            <img src={require('../../images/maleta.png')}/>
                            </td>
                            <td>Sua mala deverá ser despachada</td>
                            {
                                ((currentData  === null) || (currentResponse === null))? (
                                    <td>Possivel Erro</td>
                                ):(
                                    <td>
                                        O Valor que você irá pagar será {(50/(currentResponse.rates.BRL || 1)).toFixed(2)} {currentData.base}
                                    </td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default InfoTable;