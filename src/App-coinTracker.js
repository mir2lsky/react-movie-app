import { useEffect, useRef, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState();
  const searchAmount = useRef();
  const onChange = (e) => setAmount(e.target.value);
  const onClick = () => {
    setAmount(searchAmount.current.value);
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        if (amount > 0) {
          json = json.filter((coin) => coin.quotes.USD.price > amount);
        }
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, [amount]);

  // 챌린지 : 20달러를 입력하면 20달라로 살수 있는 코인만 보여주기
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {/* <input value={amount} type="text" onChange={onChange} /> */}
      <input ref={searchAmount} type="text" onKeyDown={onKeyDown} />
      <button onClick={onClick}>Search</button>
      <hr />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
