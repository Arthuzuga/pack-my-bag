import * as React from "react";
import * as ReactDOM from "react-dom";
import { ITripData, Stuff, Amounts, clothNames, clothWeights } from "../../stores/LuggageStore";



type Fields = ITripData;

const s = require("./style.scss");

interface Props {
    tripData: ITripData;
    clothesDemand: Amounts;
}

const InfoTable: React.StatelessComponent<Props> = ({ tripData, clothesDemand }) => {
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
                            <td>Custo adicional de: </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default InfoTable;