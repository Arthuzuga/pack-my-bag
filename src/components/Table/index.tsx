import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { Fields } from "../Forms";

const s = require("./style.scss");

interface Props {
    fields: Fields;
}

type Gender = "male" | "female" | "other";
type Stuff = "shirt" | "pants" | "underwear" | "socks" | "pijamas" | "socialshirt" | "socialpants" | "dress"|"sunga"|"biquini";
type Amounts = { [key in Stuff]: null | number }; //irá criar um objeto com os mesmos contrutores do Stuff, mas con sua tipagem de null ou number
type Weights = { [key in Stuff]: number };
type Names = { [key in Stuff]: string };
type IsGenderSpecific = { [key in Stuff]: null | Gender };

//Metodo Criado por Victor Magalhães
//Forçando a função getAmounts a ser do tipo Amounts
function getAmounts(fields: Fields): Amounts { 
    return {
        shirt: (fields.banhos * fields.numeroDias) + 1, 
        pants: fields.numeroDias >= 7 ? (Math.round(fields.numeroDias / 7) + 1) : 1,
        underwear: ((fields.banhos * fields.numeroDias)+1),
        socks: fields.numeroDias >= 7 ? (Math.round(fields.numeroDias / 7) + 1):1,
        pijamas: fields.numeroDias >= 7 ? (Math.round(fields.numeroDias / 7) + 1) : 1,
        socialshirt: fields.sexoMFO === "m" && fields.compromissos ==="sim" ? fields.numeroCompromissos : null,
        socialpants: fields.sexoMFO === "m" && fields.compromissos ==="sim" ? (fields.numeroCompromissos >= 2 ? (fields.numeroCompromissos -1) : 1) : null,
        dress: fields.sexoMFO === "f" && fields.compromissos ==="sim"  ?  fields.numeroCompromissos : null,
        sunga: fields.sexoMFO === "m" && fields.praias ==="sim" && fields.cidadePraia=="sim" ? 1:null,
        biquini: fields.sexoMFO === "f" && fields.praias ==="sim"  && fields.cidadePraia=="sim" ? 1:null
    };
}

//Objeto Criado por Victor Magalhães
const clothWeights: Weights = {
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
 }

 //Objeto Criado por Victor Magalhães
 const clothNames: Names ={
     shirt: "Camisas",
     pants: "Calças",
     underwear: "Roupas Intimas",
     socks: "Meias",
     pijamas: "Pijamas",
     socialshirt: "Camisas Social",
     socialpants: "Calças Social",
     dress: "Vestidos",
     sunga: "Sunga",
     biquini:"Biquini"
 }

 //Metodo Criado por Victor Magalhães
 const Table: React.StatelessComponent<Props> = (props) => {
     const amounts = getAmounts(props.fields);
     return (
                <table>
                    <caption>Tabela do {props.fields.nomePessoa}</caption>
                    <thead>
                        <tr>
                            <th>Itens</th>
                            <th>Quantidade</th>
                            <th>Peso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (Object.keys(amounts) as Stuff[])
                                .filter(cloth => amounts[cloth] !== null) //filtrar somente aquele que apresentem valore diferentes de null
                                .map(
                                    (cloth) => (
                                        <tr key={cloth}>
                                            <td>{ clothNames[cloth] }</td>
                                            <td>{ amounts[cloth] }</td>
                                            <td>{ amounts[cloth]! * clothWeights[cloth] / 1000 }kg</td>
                                        </tr>
                                    ),
                                )
                        }

                        <tr>
                            <td colSpan={2} className={s.total}><b>Peso total</b></td>
                            <td>{
                                (Object.keys(amounts).filter(cloth => cloth !== null) as Stuff[])
                                    .reduce((acc, el) => acc + amounts[el]! * clothWeights[el], 0) / 1000
                            }kg</td>
                        </tr>
                    </tbody>
                </table>
        );
   }

export default Table;