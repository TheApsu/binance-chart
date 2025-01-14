import { z } from 'zod';

export const SymbolSchema = z.object({
  symbol: z.string(),
});

export const SymbolsSchema = z.array(SymbolSchema);
