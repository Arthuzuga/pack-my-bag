import * as React from 'react'
import * as ReactDOM from 'react-dom';


interface Fields {
    nomePessoa: String;
    pijama: number;
    nomeCidade: String;
    camisaM: number;
    camisaF: number;
    calcaJeansAdulto: number;
    camiseta: number;
    roupaIntimaM: number;
    roupaIntimaF: number;
    vestido: number;

    eHomem?: boolean;
}


const BasicTable = (props: Fields)=>{
    <div>
        <table>
            <thead>Olá {props.nomePessoa}</thead>
            <tbody>
                <tr>
                    <th>Itens</th>
                    <th>Quantidade</th>
                </tr>
                {
                    props.eHomem ? (
                        <tr></tr>
                    ) : (
                        <span/>
                    )
                }
            </tbody>
        </table>
    </div>
};

export default BasicTable;