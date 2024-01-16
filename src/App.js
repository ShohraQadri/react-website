import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Category from './Component/Category';
import Company from './Component/Company';
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import Offers from './Component/Offers';
import Partnership from './Component/Partnership';
function App() {
  return (
    <div className="App">
    <Header/>
    <Category/>
    <Offers/>
    <Company/>
    <Partnership/>
    <Banner/>
    <Footer/>
    </div>
  );
}

export default App;
