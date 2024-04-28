import { createContext } from 'react';
import { RalipoContextTypes } from '../types';

export const RalipoContext = createContext<RalipoContextTypes | null>(null);
