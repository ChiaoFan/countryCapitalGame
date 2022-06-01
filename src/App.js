import logo from './logo.svg';
import './App.css';
import CountryCapitalGame from './components/CountryCapitalGame';

function App() {
  const countryData = {
    Germany: 'Berlin',
    Taiwan: 'Taipei',
    Japan: 'Tokiyo'
  }
  return (
    <div className="App">
    <CountryCapitalGame data={countryData}/>
    </div>
  );
}

export default App;
