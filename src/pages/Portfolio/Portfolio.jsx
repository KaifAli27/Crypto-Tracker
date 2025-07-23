import React, { useContext, useEffect, useState } from 'react';
import './Portfolio.css';
import { CoinContext } from '../../context/CoinContext';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const Portfolio = () => {
  const { allCoin, currency } = useContext(CoinContext);

  const [portfolioName, setPortfolioName] = useState('');
  const [holdings, setHoldings] = useState([]);
  const [form, setForm] = useState({
    crypto: '',
    quantity: '',
    price: '',
    date: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.crypto || !form.quantity || !form.price) return;

    const coin = allCoin.find(c => c.id === form.crypto);
    if (!coin) return;

    const currentPrice = coin.current_price;
    const pnl = ((currentPrice - form.price) * form.quantity).toFixed(2);

    const entry = {
      ...form,
      currentPrice,
      pnl,
      totalValue: (form.quantity * currentPrice).toFixed(2)
    };

    setHoldings(prev => [...prev, entry]);
    setForm({ crypto: '', quantity: '', price: '', date: '' });
  };

  const getPieChartData = () => {
    return {
      labels: holdings.map(h => h.crypto.toUpperCase()),
      datasets: [
        {
          label: 'Portfolio Value',
          data: holdings.map(h => h.totalValue),
          backgroundColor: ['#66bb6a', '#42a5f5', '#ffa726', '#ab47bc', '#ef5350'],
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="portfolio-page">
      <h2>Create Your Crypto Portfolio</h2>

      <input
        type="text"
        placeholder="Portfolio Name"
        value={portfolioName}
        onChange={(e) => setPortfolioName(e.target.value)}
        className="portfolio-name-input"
      />

      <div className="add-coin-form">
        <select name="crypto" value={form.crypto} onChange={handleChange}>
          <option value="">Select Coin</option>
          {allCoin.map(coin => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Buy Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <button onClick={handleAdd}>Add</button>
      </div>

      {holdings.length > 0 && (
        <>
          <table className="portfolio-table">
            <thead>
              <tr>
                <th>Crypto</th>
                <th>Quantity</th>
                <th>Buy Price</th>
                <th>Buy Date</th>
                <th>Current Price</th>
                <th>Total Value</th>
                <th>PNL</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h, idx) => (
                <tr key={idx}>
                  <td>{h.crypto}</td>
                  <td>{h.quantity}</td>
                  <td>{currency.symbol}{h.price}</td>
                  <td>{h.date}</td>
                  <td>{currency.symbol}{h.currentPrice}</td>
                  <td>{currency.symbol}{h.totalValue}</td>
                  <td style={{ color: h.pnl >= 0 ? 'limegreen' : 'red' }}>
                    {currency.symbol}{h.pnl}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="portfolio-chart">
            <Pie data={getPieChartData()} />
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;
