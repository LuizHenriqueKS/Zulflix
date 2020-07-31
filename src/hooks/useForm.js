import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  const setValue = (chave, valor) => setValues({ ...values, [chave]: valor });
  const handleChange = (event) => setValue(event.target.getAttribute('name'), event.target.value);
  const clearForm = () => setValues({ ...valoresIniciais });
  return { values, handleChange, clearForm };
}

export default useForm;
