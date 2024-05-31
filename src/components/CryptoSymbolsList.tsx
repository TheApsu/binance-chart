import { useCryptoStore } from '../stores/store';
import Loader from './Loader/Loader';

export default function CryptoSymbolsList() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
  const selectedPair = useCryptoStore((state) => state.selectedPair);
  const fetchPairPrice = useCryptoStore((state) => state.fetchPairPrice);

  const handleClick = (pair: string) => {
    fetchPairPrice(pair);
  };

  return (
    <div className='bg-slate-600 rounded-lg shadow-gray-400 shadow-lg overflow-auto max-h-crypto-height p-6 w-full'>
      <div className='flex  items-center gap-4 justify-center'>
        <h2 className='text-center font-bold text-2xl text-white uppercase underline underline-offset-8'>
          Pares disponibles
        </h2>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-8 text-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
      </div>
      <div className='mt-8'>
        {!cryptocurrencies.length ? (
          <div className='flex justify-center items-center p-4'>
            <Loader />
          </div>
        ) : (
          cryptocurrencies.map((pair) => (
            <button
              className={`${
                pair.symbol === selectedPair
                  ? ' bg-white text-slate-600 hover:bg-white shadow-md font-bold'
                  : 'font-normal'
              } text-slate-100 mb-2 w-full text-left transition-colors border border-transparent p-4 rounded-md cursor-pointer hover:bg-slate-700`}
              key={pair.symbol}
              onClick={() => handleClick(pair.symbol)}
            >
              {pair.symbol}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
