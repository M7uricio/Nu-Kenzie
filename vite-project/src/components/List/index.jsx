import "./index.css";
import "../../styles/global.css";
import "../../styles/display.css";
import "../../styles/buttons.css";
import "../../styles/text.css";
import "../../styles/textAreas.css";
import "../../styles/margins.css";
import { FaTrash } from "react-icons/fa";

const List = ({ list, setList }) => {
  function removeTransaction(currentDescription) {
    const listRemove = list.filter((elm) => {
      return elm.description != currentDescription;
    });
    setList(listRemove);
  }

  return (
    <div>
      {list.length == 0 ? (
        <div>
          <h1 className="text-3 marginB-medium">
            Você ainda não possui nenhum lançamento
          </h1>
          <ul className="displayColumn gap-20">
            <li className="transition displayRow">
              <div className="exit"></div>
              <div className="displayColumn gap-20">
                <div className="emptyDescription"></div>
                <div className="emptyType"></div>
              </div>
            </li>
            <li className="transition displayRow">
              <div className="exit"></div>
              <div className="displayColumn gap-20">
                <div className="emptyDescription"></div>
                <div className="emptyType"></div>
              </div>
            </li>
            <li className="transition displayRow">
              <div className="exit"></div>
              <div className="displayColumn gap-20">
                <div className="emptyDescription"></div>
                <div className="emptyType"></div>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <ul className="displayColumn gap-20">
          {list.map((transaction, index) => {
            return (
              <li className="transition alingRowSpaceB" key={index}>
                {transaction.type == "entrada" ? (
                  <div className="enter"></div>
                ) : (
                  <div className="exit"></div>
                )}
                <div className="titleTransaction">
                  <h2 className="text-3">{transaction.description}</h2>
                  <span className="headline">{transaction.type}</span>
                </div>
                <div className="valueTransaction">
                  <span className="text-4">
                    R${" "}
                    {transaction.value < 0
                      ? transaction.value * -1
                      : transaction.value}
                    ,00
                  </span>
                </div>
                <div>
                  <button
                    className="trash marginR-small"
                    onClick={() => {
                      removeTransaction(transaction.description);
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default List;
