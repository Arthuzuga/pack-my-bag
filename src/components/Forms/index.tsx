import * as React from 'react'
import { withFormik, FormikProps } from 'formik'

interface Fields {
  newComentText: string;
  cidade: string;
  numeroDias: string;
  dataViagem: string;
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
      <p>Qual o seu nome?</p>
                <input 
                    name="newComentText"
                    value= {values.newComentText}
                    onChange={handleChange}
                    placeholder="Qual o seu nome?"
                />
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
                    value= {values.dataViagem}
                    onChange={handleChange}
                    placeholder="DD/MM/AAAA"
                />
                <button type ="submit">Comentar</button>
    </form>
  );

  // Wrap our form with the using withFormik HoC
const MyForm = withFormik({
    // Transform outer props into form values
    mapPropsToValues: props => ({ email: '',
    password: '',
    newComentText:'',
    dataViagem: '',
    cidade: '',
    numeroDias:'',
    }),
    

    // Submission handler
    handleSubmit: (
      values,
      {
        props,
        setSubmitting,
        setErrors /* setValues, setStatus, and other goodies */,
      }
    ) => {
      console.log(values);
    },
  })(InnerForm);
  
  // Use <MyForm /> anywhere
  const Basic = () => (
    <div>
      <h1>My Form</h1>
      <p>This can be anywhere in your application</p>
      <MyForm />
    </div>
  );
  
  export default Basic;