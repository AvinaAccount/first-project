import Expenses from "./components/Expenses";


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Graphics card',
      amount: 500,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Monitor 27"',
      amount: 250.90,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Mechanical keyboard',
      amount: 239.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Headphone',
      amount: 158.60,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <Expenses item={expenses}/>
    </div>);
}

export default App;
