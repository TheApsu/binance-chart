import axios from 'axios';
import { CryptoKLineResponse } from '../types';
import { SymbolsSchema } from '../schemas/crypto-schema';

const baseApiUrl = 'https://api.binance.com/api/v3';

export const getCryptoPrices = async (
  pair: string
): Promise<CryptoKLineResponse[]> => {
  try {
    const url = `${baseApiUrl}/uiKlines?symbol=${pair}&interval=1d&startTime=1704139963268`;
    const { data } = await axios(url);
    if (data.code) {
      // Si viene una propiedad "code" en la respuesta significa que ocurrio un error
      throw data;
    }
    return data;
  } catch (error: any) {
    console.log('error :>> ', error.toJSON());
    throw error;
  }
};

export const getCryptoSymbols = async () => {
  try {
    const url = `${baseApiUrl}/exchangeInfo`;
    const { data } = await axios(url);
    const result = SymbolsSchema.safeParse(data.symbols);
    if (result.success) {
      return result.data.slice(0, 5);
    } else {
      if (data.code) {
        // Si success da false significa que hubo un error en la consulta y si existe code dentro de ella
        throw data;
      }
    }
  } catch (error) {
    throw error;
  }
};
