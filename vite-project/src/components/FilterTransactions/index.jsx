import "./index.css";
import "../../styles/global.css";
import "../../styles/display.css";
import "../../styles/buttons.css";
import "../../styles/text.css";
import "../../styles/textAreas.css";
import "../../styles/margins.css";

const FilterTransactions = ({ listTransactions, setListFilter }) => {
  function everyone() {
    setListFilter([]);
  }

  function enter() {
    const entries = listTransactions.filter((elm) => {
      return elm.type == "entrada";
    });
    setListFilter(entries);
  }

  function exit() {
    const exits = listTransactions.filter((elm) => {
      return elm.type == "saída";
    });
    setListFilter(exits);
  }

  return (
    <div className="rightHomePage alingDivFilters marginB-medium">
      <h3 className="text-3">Resumo finaceiro</h3>
      <div className="buttonsFilter alingFilters">
        <button className="button-primary-2" onClick={() => everyone()}>
          Todos
        </button>
        <button className="button-primary-2" onClick={() => enter()}>
          Entrada
        </button>
        <button className="button-primary-2" onClick={() => exit()}>
          Saídas
        </button>
      </div>
    </div>
  );
};

export default FilterTransactions;
