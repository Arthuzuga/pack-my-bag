import * as React from 'react'
import { withFormik, FormikProps } from 'formik'

interface Props {
  onSubmit: (fields: Fields) => void;
}

export interface Fields {
  nomePessoa: string;
  cidade: string;
  numeroDias: number;
  dataViagem: string;
  sexoMFO: "m"|"f"|"o";
  banhos: number;
  saidasNoites: "sim" | "nao";
  numeroSaidasNoite: number;
  cidadePraia: "sim" | "nao";
  praias: "sim" | "nao";
  numeroPraia: number;
  compromissos: "sim" | "nao";
  numeroCompromissos: number;
}

const InnerForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
  }: FormikProps<Fields>) => (
    <form onSubmit={handleSubmit}>
        <label>
        <p>Qual o seu nome?</p>
                <input 
                    name="nomePessoa"
                    value= {values.nomePessoa}
                    onChange={handleChange}
                    placeholder="Qual o seu nome?"
                />
        </label>

     <label htmlFor={"sexoMFO"}><p>Qual o seu sexo</p></label>
            <input 
                type="radio"
                name="sexoMFO"
                required
                onChange={handleChange}
                value="m"
            /> Masculino
            <input 
                type="radio"
                required
                name="sexoMFO"
                onChange={handleChange}
                value="f"
            /> Feminino
            <input 
                type="radio"
                name="sexoMFO"
                required
                onChange={handleChange}
                value="o"
            /> Outro

      <p>Para onde vamos?</p>
                <input 
                    name="cidade"
                    value= {values.cidade}
                    onChange={handleChange}
                    placeholder="Para Onde Vamos"
                />
      <p>Quantos dia pretende passar lá?</p>
                <input 
                    name="numeroDias"
                    type="number"
                    value= {values.numeroDias}
                    onChange={handleChange}
                    placeholder="Numero de dias"
                />
      <p>Qual dia pretende viajar?</p>
                <input 
                    name="dataViagem"
                    type="date"
                    value= {values.dataViagem}
                    onChange={handleChange}
                    //placeholder="DD/MM/AAAA"
                />
       <p>Quantos Banhos você toma no dia? (Juro que isso será confidencial)</p>
                <input 
                name="banhos"
                type="number"
                onChange={handleChange}
                value= {values.banhos}
                /> 

        <p>Vai ter algum compromissso lá em {values.cidade}?</p>
                <input 
                name="compromissos"
                type="radio"
                value="sim"
                onChange={handleChange}
                checked={values.compromissos === "sim"}/>Sim
                <input 
                name="compromissos"
                type="radio"
                value="nao"
                onChange={handleChange}
                checked={values.compromissos === "nao"}/>Não
                {
                  values.compromissos === "sim" ?(
                    <div>
                      <p>Quantos dias de compromissos você vai ter lá?</p>
                      <input 
                    name="numeroCompromissos"
                    type="number"
                    onChange={handleChange}
                    value={values.numeroCompromissos}/> 
                    </div>
                  ):(
                    <span></span>
                  )
                }  

        <p>Prentende sair algum dia a noite?</p>
                <input 
                name="saidasNoites"
                type="radio"
                value="sim"
                onChange={handleChange}
                checked={values.saidasNoites === "sim"}/>Sim
                <input 
                name="saidasNoites"
                type="radio"
                value="nao"
                onChange={handleChange}
                checked={values.saidasNoites === "nao"}/>Não
                {
                  values.saidasNoites === "sim" ?(
                    <div>
                      <p>Quantos dias pretende sair?</p>
                      <input 
                    name="numeroSaidasNoite"
                    type="number"
                    onChange={handleChange}
                    value={values.numeroSaidasNoite}/> 
                    </div>
                  ):(
                    <span></span>
                  )
                }  
        <p>Em {values.cidade} tem praia?</p> 
        <input 
                name="cidadePraia" 
                value="sim"
                onChange ={handleChange}
                checked = {values.cidadePraia === "sim"}
                type="radio"
                />  Sim
                <input 
                name="cidadePraia" 
                value="nao"
                onChange ={handleChange}
                checked = {values.cidadePraia === "nao"}
                type="radio"
                /> Não   
  
                    {
                      values.cidadePraia === "sim"?(
                        <div>
                        <p>Vamos a La Playa?</p>
                        <input 
                        name="praias" 
                        value="sim"
                        onChange ={handleChange}
                        checked = {values.praias === "sim"}
                        type="radio"
                        />  Sim
                        <input 
                        name="praias" 
                        value="nao"
                        onChange ={handleChange}
                        checked = {values.praias === "nao"}
                        type="radio"
                        /> Não
                        {
                          values.praias === "sim" ?(
                            <div>
                              <p>Quantos dias vai a praia?</p>
                              <input 
                            name="numeroPraia"
                            type="number"
                            onChange={handleChange}
                            value={values.numeroPraia}/> 
                            </div>
                          ):(
                            <span></span>
                          )
                        }   
                      </div>
                      ):(
                        <span></span>
                      )
                    }                  
                        
                    <br/>
                <button type ="submit">Enviar</button>
    </form>
  );

  // Wrap our form with the using withFormik HoC
const MyForm = withFormik<Props, Fields>({
    // Submission handler
    handleSubmit: (
      values,
      {
        props,
        setSubmitting,
        setErrors /* setValues, setStatus, and other goodies */,
      }
    ) => {
      props.onSubmit(values);
    },
  })(InnerForm);
  
  // Use <MyForm /> anywhere
  const Basic = (props: Props) => (
    <div>
      <h1>Arrume Minha Mala</h1>
      <h2>Seu assistente pessoal para lhe ajudar a arrumar a suas roupas</h2>
      <MyForm onSubmit={props.onSubmit}/>
    </div>
  );
  
  export default Basic;