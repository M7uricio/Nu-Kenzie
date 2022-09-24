import "./App.css";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/display.css";
import "./styles/buttons.css";
import nuKenzie from "./assets/img/nuKenzie.svg";
import nuKenzieDark from "./assets/img/nuKenzieDark.svg";
import groupSvg from "./assets/img/group.svg";
import { useState } from "react";

import FilterTransactions from "./components/FilterTransactions";
import Form from "./components/Form/inde";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [renderDash, setRenderDash] = useState(false);
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  const [listFilter, setListFilter] = useState([]);

  function alternateRender() {
    setRenderDash(!renderDash);
  }

  return (
    <div>
      {renderDash ? (
        <div className="App container alingColumn">
          <header className="header alingHeader">
            <div>
              <img src={nuKenzie} alt="Logo NuKenzie" />
            </div>
            <div>
              <button
                className="button-primary-2"
                onClick={() => {
                  alternateRender();
                }}
              >
                Inicio
              </button>
            </div>
          </header>
          <div className="container alingRowSpaceBTop gap-60">
            <div>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <div>
              <FilterTransactions
                listTransactions={listTransactions}
                setListFilter={setListFilter}
              />
              {listFilter.length == 0 ? (
                <List list={listTransactions} setList={setListTransactions} />
              ) : (
                <List list={listFilter} setList={setListFilter} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="homePage alingRow gap-60">
          <div className="leftHomePage alingForm">
            <img
              className="logoHomePage marginB-medium"
              src={nuKenzieDark}
              alt="Logo NuKenzie"
            />
            <h1 className="text-1 marginB-medium titleHomePage">
              Centralize o controle das suas finanças
            </h1>
            <span className="text-4 marginB-big spanHomePage">
              de forma rápida e segura
            </span>
            <button
              className="button-primary-1"
              onClick={() => {
                alternateRender();
              }}
            >
              Iniciar
            </button>
          </div>
          <div>
            <img className="groupSvg" src={groupSvg} alt="Grupo de imagens" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
