// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import MainRouter from './routers/mainRouters';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
