import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CryptoFormattedData, CryptoSymbol } from '../types';
import { getCryptoPrices, getCryptoSymbols } from '../services/crypto-services';
import { errorHandler } from '../util/error-handler';

// Defino las propiedades que va a tener mi state
type CryptoState = {
  cryptocurrencies: CryptoSymbol[];
  result: CryptoFormattedData;
  loading: boolean;
  selectedPair: string;
  error: string;
  fetchSymbols: () => Promise<void>; // Funcion que me permite obtener los pares disponibles
  fetchPairPrice: (pair: string) => Promise<void>; // Funcion que a partir de un par disponible me devuelve los datos necesarios para representarla graficamente
};

// Inicializo mi state
export const useCryptoStore = create<CryptoState>()(
  devtools((set) => ({
    selectedPair: '',
    cryptocurrencies: [],
    result: { data: [] },
    loading: false,
    error: '',
    fetchPairPrice: async (pair) => {
      try {
        set({
          loading: true,
          selectedPair: pair,
        });
        const data = await getCryptoPrices(pair);

        //Casting de los datos devueltos a tipo numero
        const formattedData = data.map((item) => [
          +item[0],
          [+item[1], +item[2], +item[3], +item[4]],
        ]);

        // Casting de formattedData al valor que va a recibir la libreria "apexcharts"
        set({
          result: { data: formattedData as number[][] },
          loading: false,
          error: '',
        });
      } catch (err: any) {
        // Manejo de errores
        const error = errorHandler(err);
        set({
          loading: false,
          error,
        });
      }
    },
    fetchSymbols: async () => {
      try {
        // Seteo los pares disponibles en el state correspondiente
        const data = await getCryptoSymbols();
        set({
          cryptocurrencies: data,
          error: '',
        });
      } catch (err: any) {
        const error = errorHandler(err);
        set({
          loading: false,
          error,
        });
      }
    },
  }))
);
