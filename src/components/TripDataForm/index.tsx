import * as React from "react";
import { withFormik, FormikProps, Field } from "formik";
import Geosuggest, { Suggest, Styles, GeosuggestProps } from "react-geosuggest";
import { ITripData } from "../../stores/LuggageStore";
import { WeatherStore, Clima, Names, Weathers , ClimaType} from "../../stores/WeatherStore";
import { CurrentStore } from "../../stores/CurrentStore";

const s = require("./style.scss");

interface Props {
    fields?: Fields;
    onSubmit: (fields: Fields) => void;
    weatherSearcher: (fields: Fields)=> void;
    currentSearcher: (fields: Fields)=> void;
}

type Fields = ITripData;

export const InnerForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
    weatherSearcher,
}: FormikProps<Fields> & Pick<Props, "weatherSearcher">) => (
    <form onSubmit={handleSubmit} className={s.form}>
        <label>
            <p className={s.p}>Qual o seu nome?</p>
            <input
                type="text"
                name="nomePessoa"
                value={values.nomePessoa}
                onChange={handleChange}
                placeholder="Qual o seu nome?"
                className={s.input}
            />
        </label>
        <label htmlFor={"sexoMFO"}>
            <p className={s.p}>Qual o seu sexo?</p>
        </label>
        <input
            type="radio"
            name="sexoMFO"
            required
            onChange={handleChange}
            value="m"
            checked={values.sexoMFO === "m"}
            className={s.input}
        />{" "}
        Masculino
        <input
            type="radio"
            required
            name="sexoMFO"
            onChange={handleChange}
            value="f"
            checked={values.sexoMFO === "f"}
            className={s.input}
        />{" "}
        Feminino
        <input
            type="radio"
            name="sexoMFO"
            required
            onChange={handleChange}
            value="o"
            checked={values.sexoMFO === "o"}
            className={s.input}
        />{" "}
        Outro
        <p className={s.p}>Para onde vamos?</p>
        {/* <input
            type="text"
            name="cidade"
            value={values.cidade}
            onChange={handleChange}
            placeholder="Para Onde Vamos"
            className={s.input}
        /> */}

        <Geosuggest 
            className={s.geosuggestSytle}
            
            onChange={(...args: any[]) => {
                console.log({args});
            }}
            onSuggestSelect={(value) => {
                values.location = value.location;
                values.cidade = value.label.toString();
                console.log(value);
                weatherSearcher(values);
            }}
        />

        <p className={s.p}>Qual a moeda que você usa?</p>
        <select value={values.base} name="base" onChange={handleChange}>
            <option>Selecione uma moeda</option>
            <option value="BRL" selected={values.base === "BRL"}>Reais</option>
            <option value="USD" selected={values.base === "USD"}>Dólar Americano</option>
            <option value="EUR" selected={values.base === "EUR"}>Euro</option>
            <option value="GBP" selected={values.base === "GBP"}>Libras Esterlinas</option>
            <option value="JPY" selected={values.base === "JPY"}>YEN</option>
        </select>    

        <p className={s.p}>Quantos dia pretende passar lá?</p>
        <input
            name="numeroDias"
            type="number"
            value={values.numeroDias}
            onChange={handleChange}
            placeholder="Numero de dias"
            className={s.input}
            min="0"
        />
        <p className={s.p}>Qual dia pretende viajar?</p>
        <input
            name="dataViagem"
            type="date"
            value={values.dataViagem}
            onChange={handleChange}
            className={s.input}
        />
        <p className={s.p}>
            Quantos Banhos você toma no dia? <br />(Juro que isso será
            confidencial)
        </p>
        <input
            name="banhos"
            type="number"
            onChange={handleChange}
            value={values.banhos}
            className={s.input}
            min="0"
        />
        <p className={s.p}>Vai ter algum compromissso lá em {values.cidade}?</p>
        <input
            name="compromissos"
            type="radio"
            value="sim"
            onChange={handleChange}
            checked={values.compromissos === "sim"}
            className={s.input}
        />Sim
        <input
            name="compromissos"
            type="radio"
            value="nao"
            onChange={handleChange}
            checked={values.compromissos === "nao"}
            className={s.input}
        />Não
        {values.compromissos === "sim" ? (
            <div>
                <p className={s.p}>
                    Quantos dias de compromissos você vai ter lá?
                </p>
                <input
                    name="numeroCompromissos"
                    type="number"
                    onChange={handleChange}
                    value={values.numeroCompromissos}
                    className={s.input}
                    min="0"
                />
            </div>
        ) : (
            <span />
        )}
        <p className={s.p}>Prentende sair algum dia a noite?</p>
        <input
            name="saidasNoites"
            type="radio"
            value="sim"
            onChange={handleChange}
            checked={values.saidasNoites === "sim"}
            className={s.input}
        />Sim
        <input
            name="saidasNoites"
            type="radio"
            value="nao"
            onChange={handleChange}
            checked={values.saidasNoites === "nao"}
            className={s.input}
        />Não
        {values.saidasNoites === "sim" ? (
            <div>
                <p className={s.p}>Quantos dias pretende sair?</p>
                <input
                    name="numeroSaidasNoite"
                    type="number"
                    onChange={handleChange}
                    value={values.numeroSaidasNoite}
                    className={s.input}
                    min="0"
                />
            </div>
        ) : (
            <span />
        )}
        <p className={s.p} >Em {values.cidade} tem praia?</p>
        <input
            name="cidadePraia"
            value="sim"
            onChange={handleChange}
            checked={values.cidadePraia === "sim"}
            type="radio"
            className={s.input}
        />{" "}
        Sim
        <input
            name="cidadePraia"
            value="nao"
            onChange={handleChange}
            checked={values.cidadePraia === "nao"}
            type="radio"
            className={s.input}
        />{" "}
        Não
        {values.cidadePraia === "sim"? (
            <div>
                <p className={s.p}>Vamos a La Playa?</p>
                <input
                    name="praias"
                    value="sim"
                    onChange={handleChange}
                    checked={values.praias === "sim"}
                    type="radio"
                    className={s.input}
                />{" "}
                Sim
                <input
                    name="praias"
                    value="nao"
                    onChange={handleChange}
                    checked={values.praias === "nao"}
                    type="radio"
                    className={s.input}
                />{" "}
                Não
                {values.praias === "sim" ? (
                    <div>
                        <p className={s.p}>Quantos dias vai a praia?</p>
                        <input
                            name="numeroPraia"
                            type="number"
                            onChange={handleChange}
                            value={values.numeroPraia}
                            className={s.input}
                            min="0"
                        />
                    </div>
                ) : (
                    <span />
                )}
            </div>
        ) : (
            <span />
        )}
        <br />
        <button type="submit" className={s.button}>
            Enviar
        </button>
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
            setErrors /* setValues, setStatus, and other goodies */
        }
    ) => {
        props.onSubmit(values);
        props.weatherSearcher(values);
        props.currentSearcher(values);
    },
    mapPropsToValues: props => props.fields!,
    enableReinitialize: true,
})(InnerForm);

// Use <MyForm /> anywhere
// const Basic = (props: Props) => {
//     return <MyForm fields={props.fields} onSubmit={props.onSubmit} />;
// };

export default MyForm;
