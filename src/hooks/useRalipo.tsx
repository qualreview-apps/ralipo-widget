import { useContext } from 'react';
import { RalipoContext } from '@/provider/contex/ralipo-context';
import { RalipoContextTypes } from '@/provider/types';

export default function useRalipo() {
  const context = useContext<RalipoContextTypes | null>(RalipoContext);
  if (context === undefined || context === null) {
    throw new Error('useRalipo must be used within a  Ralipo Provider');
  }

  return context as RalipoContextTypes;
}
