import "./index.css";
import "../../styles/global.css";
import "../../styles/display.css";
import "../../styles/buttons.css";
import "../../styles/text.css";
import "../../styles/textAreas.css";
import "../../styles/margins.css";

import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [descriptions, setDescriptions] = useState("");
  const [values, setValues] = useState("");
  const [type, setType] = useState("");

  function addTransation(newTransation) {
    if (type != "") {
      setListTransactions([...listTransactions, newTransation]);
    }
  }

  return (
    <div>
      <form
        className="form alingForm marginB-big"
        onSubmit={(event) => {
          event.preventDefault();
          addTransation({
            description: descriptions,
            type: type,
            value: type == "entrada" ? +values : -+values,
          });
        }}
      >
        <label className="text-3 marginB-small" htmlFor="description">
          Descrição
        </label>
        <input
          required
          className="input-primary"
          type="text"
          placeholder="Digite aqui sua descrição"
          id="description"
          value={descriptions}
          onChange={(event) => setDescriptions(event.target.value)}
        />
        <span className="body marginB-medium">Ex: Compra de roupas</span>
        <div className="alingRowSpaceB marginB-medium">
          <div className="divTextAreas alingForm">
            <label className="text-4" htmlFor="value">
              Valor
            </label>
            <div className="divInputValor">
              <input
                required
                className="inputValue input-primary"
                type="text"
                id="value"
                value={values}
                onChange={(event) => setValues(event.target.value)}
              />
              <span className="moeda text-4">R$</span>
            </div>
          </div>
          <div className="alingForm">
            <label className="text-4" htmlFor="tipeValue">
              Tipo de valor
            </label>
            <select
              required
              className="select-primary"
              name=""
              id="tipeValue"
              onChange={(event) => setType(event.target.value)}
            >
              <option value="">Selecione o tipo</option>
              <option value="entrada">Entrada</option>
              <option value="saída">Saida</option>
            </select>
          </div>
        </div>
        <button className="button-primary-1" type="submit">
          Inserir valor
        </button>
      </form>
    </div>
  );
};

export default Form;
