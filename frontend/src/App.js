import { Routes, Route } from 'react-router-dom';
import style from './App.module.scss';
import Header from './components/Header';
import Home from './pages/Home';
import { OrderContextProvider } from './context/OrderContext';
import Order from './pages/Order';

function App() {
  return (
    <div className={style.pageContainer}>
      <OrderContextProvider>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </OrderContextProvider>
    </div>
  );
}

export default App;
