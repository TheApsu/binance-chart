import { z } from 'zod';
import { SymbolSchema, SymbolsSchema } from '../schemas/crypto-schema';

export type CryptoKLineResponse = {
  [key: number]: string | number;
};

export type CryptoFormattedData = {
  data: number[][];
};

export type CryptoSymbols = z.infer<typeof SymbolsSchema>;

export type CryptoSymbol = z.infer<typeof SymbolSchema>;
