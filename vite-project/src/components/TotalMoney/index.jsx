import "./index.css";
import "../../styles/global.css";
import "../../styles/display.css";
import "../../styles/buttons.css";
import "../../styles/text.css";
import "../../styles/textAreas.css";
import "../../styles/margins.css";

const TotalMoney = ({ listTransactions }) => {
  function valueTotal() {
    const sum = listTransactions.reduce((previousValue, currentValue) => {
      let total = previousValue + currentValue.value;
      return total;
    }, 0);
    return sum;
  }
  return (
    <div>
      {listTransactions.length != 0 && (
        <div>
          <div className="alingRowSpaceB">
            <h2 className="text-3">Valor total:</h2>
            <h3 className="total">R$ {valueTotal()},00</h3>
          </div>
          <span className="body">O valor se refere ao saldo</span>
        </div>
      )}
    </div>
  );
};

export default TotalMoney;
