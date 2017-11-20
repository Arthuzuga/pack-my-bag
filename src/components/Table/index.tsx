import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { Fields } from "../Forms";


interface Props {
    fields: Fields;
   // peso: number;
}

type Gender = "male" | "female" | "other";
type Stuff = "shirt" | "pants" | "underwear" | "socks" | "pijamas" | "socialshirt" | "socialpants" | "dress";
type Amounts = { [key in Stuff]: null | number };
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
        socialshirt: fields.numeroCompromissos,
        socialpants: fields.numeroCompromissos >= 2 ? (fields.numeroCompromissos -1) : 1,
        dress: fields.sexoMFO === "m" ? null : fields.numeroCompromissos
    };
}

//Metodo Criado por Victor Magalhães
const clothWeights: Weights = {
    shirt: 250,
    pants: 800,
    underwear: 50,
    socks: 50,
    pijamas: 400,
    socialshirt: 250,
    socialpants: 600,
    dress: 400,
 }

 //Metodo Criado por Victor Magalhães
 const clothNames: Names ={
     shirt: "Camisas",
     pants: "Calças",
     underwear: "Roupas Intima",
     socks: "Meias",
     pijamas: "Pijamas",
     socialshirt: "Camisas Social",
     socialpants: "Calças Social",
     dress: "Vestidos"
 }

 //Metodo Criado por Victor Magalhães
 const Table: React.StatelessComponent<Props> = (props) => {
     const amounts = getAmounts(props.fields);
     return (
            <div>
                <br/>
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
                                .filter(cloth => amounts[cloth] !== null)
                                .map(
                                    (cloth) => (
                                        <tr>
                                            <td>{ clothNames[cloth] }</td>
                                            <td>{ amounts[cloth] }</td>
                                            <td>{ amounts[cloth]! * clothWeights[cloth] / 1000 }kg</td>
                                        </tr>
                                    ),
                                )
                        }

                        <tr>
                            <td colSpan={2}><b>Peso total</b></td>
                            <td>{
                                (Object.keys(amounts).filter(cloth => cloth !== null) as Stuff[])
                                    .reduce((acc, el) => acc + amounts[el]! * clothWeights[el], 0) / 1000
                            }kg</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
   }
  

//    const Table: React.StatelessComponent<Props> = (props) => {
//     return(
//         <div>
//             <br/>
//         <table>
//             <caption>Tabela do {props.fields.nomePessoa}</caption>
//             <thead>
//                 <tr>
//                     <th>Itens</th>
//                     <th>Quantidade</th>
//                 </tr>
//                     <tr>
//                         {
//                             props.fields.sexoMFO === "m"?(
//                                <div>
//                                    <tr>
//                                        <td><label>Camisas</label></td>
//                                        <td>{(props.fields.banhos * props.fields.numeroDias)+1}</td>
//                                    </tr>
//                                    <tr>
//                                        <td><label>Calças</label></td>
//                                        <td>{props.fields.numeroDias>=7?(
//                                            Math.round(props.fields.numeroDias/7)+1):(1)}</td>
//                                    </tr>
//                                    <tr>
//                                        <td><label>Cueca</label></td>
//                                        <td>{(props.fields.banhos * props.fields.numeroDias)+1}</td>
//                                    </tr>
//                                    <tr>
//                                        <td><label>Meias</label></td>
//                                        <td>{props.fields.numeroDias>=7?(
//                                            Math.round(props.fields.numeroDias/7)+1):(1)}</td>
//                                    </tr>
//                                    <tr>
//                                        <td><label>Pijama</label></td>
//                                        <td>{props.fields.numeroDias>=7?(
//                                            Math.round(props.fields.numeroDias/7)+1):(1)}</td>
//                                    </tr>
//                                    {
//                                        props.fields.compromissos === "sim"?(
//                                            <tr>
//                                                <td>Camisa Social</td>
//                                                <td>{props.fields.numeroCompromissos}</td>
//                                            </tr>
//                                        ):(
//                                            <span></span>
//                                        )
//                                    }
//                                    {
//                                        props.fields.compromissos === "sim"?(
//                                            <tr>
//                                                <td>Calça Social</td>
//                                                <td>{props.fields.numeroCompromissos>=2?(
//                                                    props.fields.numeroCompromissos -1):(1)}</td>
//                                            </tr>
//                                        ):(
//                                            <span></span>
//                                        )
//                                    }
//                                </div> 
//                             ):(
//                                 props.fields.sexoMFO === "f"?(
//                                     <div>
//                                     <tr>
//                                         <td><label>Camisas</label></td>
//                                         <td>{(props.fields.banhos * props.fields.numeroDias)+1}</td>
//                                     </tr>
//                                     <tr>
//                                         <td><label>Calças</label></td>
//                                         <td>{props.fields.numeroDias>=7?(
//                                             Math.round(props.fields.numeroDias/7)+1):(1)}</td>
//                                     </tr>
//                                     <tr>
//                                         <td><label>Calcinhas</label></td>
//                                         <td>{(props.fields.banhos * props.fields.numeroDias)+1}</td>
//                                     </tr>
//                                     <tr>
//                                         <td><label>Meias</label></td>
//                                         <td>{props.fields.numeroDias>=7?(
//                                             Math.round(props.fields.numeroDias/7)+1):(1)}</td>
//                                     </tr>
//                                     <tr>
//                                         <td><label>Pijama</label></td>
//                                         <td>{props.fields.numeroDias>=7?(
//                                             Math.round(props.fields.numeroDias/7)+1):(1)}</td>
//                                     </tr>
//                                     {
//                                        props.fields.compromissos === "sim"?(
//                                            <tr>
//                                                <td>Vestido</td>
//                                                <td>{props.fields.numeroCompromissos}</td>
//                                            </tr>
//                                        ):(
//                                            <span></span>
//                                        )
//                                    }
//                                 </div> 
//                                 ):(
//                                     <div>
//                                     <tr><label>Escolha um Sexo pra você, caso não se reconheça, envie um e-mail para contato@mala.com</label></tr>
//                                     </div>
                                    
//                                 )

//                             )
//                         }
//                     </tr>
//             </thead>
//             <tbody>

//             </tbody>
//         </table>
//     </div>
//        );
//    }

export default Table;