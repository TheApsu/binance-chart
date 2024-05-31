import { useEffect } from 'react';
import BinanceChart from './components/BinanceChart';
import { useCryptoStore } from './stores/store';
import CryptoSymbolsList from './components/CryptoSymbolsList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  //Consulta inicial para traerme las monedas que el usuario pueda escoger
  const fetchSymbols = useCryptoStore((store) => store.fetchSymbols);

  //Consulto al iniciar el componente
  useEffect(() => {
    fetchSymbols();
  }, []);

  return (
    <>
      <Header />
      <div className='bg-slate-50 min-h-screen'>
        <div className='container m-auto flex justify-center p-8 '>
          <div className='grid grid-cols-3 lg:gap-12 w-full'>
            <div className='col-span-3 lg:col-span-1 mt-4'>
              <CryptoSymbolsList />
            </div>
            <div className='mt-6 lg:mt-0 col-span-3 lg:col-span-2'>
              <BinanceChart />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
