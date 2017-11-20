import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { Fields } from "../Forms";


interface Props {
    fields: Fields;
   // peso: number;
}

const Table: React.StatelessComponent<Props> = (props)=>{
    return(
        <div>
            <br/>
        <table>
            <caption>Tabela do {props.fields.nomePessoa}</caption>
            <thead>
                <tr>
                    <th>Itens</th>
                    <th>Quantidade</th>
                </tr>
                    <tr>
                        {
                            props.fields.sexoMFO === "m"?(
                               <div>
                                   <tr>
                                       <td><label>Camisas</label></td>
                                       <td>{(props.fields.banhos * props.fields.numeroDias)+1}</td>
                                   </tr>
                                   <tr>
                                       <td><label>Calças</label></td>
                                       <td>{props.fields.numeroDias>=7?(
                                           Math.round(props.fields.numeroDias/7)+1):(1)}</td>
                                   </tr>
                                   <tr>
                                       <td><label>Cueca</label></td>
                                       <td>{(props.fields.banhos * props.fields.numeroDias)+1}</td>
                                   </tr>
                                   <tr>
                                       <td><label>Meias</label></td>
                                       <td>{props.fields.numeroDias>=7?(
                                           Math.round(props.fields.numeroDias/7)+1):(1)}</td>
                                   </tr>
                                   <tr>
                                       <td><label>Pijama</label></td>
                                       <td>{props.fields.numeroDias>=7?(
                                           Math.round(props.fields.numeroDias/7)+1):(1)}</td>
                                   </tr>
                                   {
                                       props.fields.compromissos === "sim"?(
                                           <tr>
                                               <td>Camisa Social</td>
                                               <td>{props.fields.numeroCompromissos}</td>
                                           </tr>
                                       ):(
                                           <span></span>
                                       )
                                   }
                                   {
                                       props.fields.compromissos === "sim"?(
                                           <tr>
                                               <td>Calça Social</td>
                                               <td>{props.fields.numeroCompromissos>=2?(
                                                   props.fields.numeroCompromissos -1):(1)}</td>
                                           </tr>
                                       ):(
                                           <span></span>
                                       )
                                   }
                               </div> 
                            ):(
                                props.fields.sexoMFO === "f"?(
                                    <div>
                                    <tr>
                                        <td><label>Camisas</label></td>
                                        <td>{(props.fields.banhos * props.fields.numeroDias)+1}</td>
                                    </tr>
                                    <tr>
                                        <td><label>Calças</label></td>
                                        <td>{props.fields.numeroDias>=7?(
                                            Math.round(props.fields.numeroDias/7)+1):(1)}</td>
                                    </tr>
                                    <tr>
                                        <td><label>Calcinhas</label></td>
                                        <td>{(props.fields.banhos * props.fields.numeroDias)+1}</td>
                                    </tr>
                                    <tr>
                                        <td><label>Meias</label></td>
                                        <td>{props.fields.numeroDias>=7?(
                                            Math.round(props.fields.numeroDias/7)+1):(1)}</td>
                                    </tr>
                                    <tr>
                                        <td><label>Pijama</label></td>
                                        <td>{props.fields.numeroDias>=7?(
                                            Math.round(props.fields.numeroDias/7)+1):(1)}</td>
                                    </tr>
                                    {
                                       props.fields.compromissos === "sim"?(
                                           <tr>
                                               <td>Vestido</td>
                                               <td>{props.fields.numeroCompromissos}</td>
                                           </tr>
                                       ):(
                                           <span></span>
                                       )
                                   }
                                </div> 
                                ):(
                                    <div>
                                    <tr><label>Escolha um Sexo pra você, caso não se reconheça, envie um e-mail para contato@mala.com</label></tr>
                                    </div>
                                    
                                )

                            )
                        }
                    </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
       );
   }
  

export default Table;