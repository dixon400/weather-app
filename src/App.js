import './App.css';
import CurrentWeather from './components/current-weather/Current-weather';
import Search from './components/search/Search';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
     <Search onSearchChange={handleOnSearchChange} />
     <CurrentWeather />
    </div>
  );
}

export default App;
