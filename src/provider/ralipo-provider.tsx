import { handleRalipoInit } from '@/actions/ralipo-actions';
import useScript from '@/lib/scripts';
import { RalipoObjectWithoutInitialize, RalipoProviderProps } from '@/types';
import { FC, useEffect, useState } from 'react';
import { RalipoContext } from './contex/ralipo-context';

function useInitApp(props: {
  showWidget?: boolean;
  showLauncher?: boolean;
  apiKey: string;
}) {
  const { apiKey, showLauncher, showWidget } = props;
  const [scriptLoaded, scriptError] = useScript();
  const [ralipoObject, setRalipoObject] =
    useState<RalipoObjectWithoutInitialize | null>(null);

  async function init() {
    if (scriptError) {
      throw new Error('Unable to load Ralipo inline script');
    }

    if (window && window.ralipo) {
      const { initialize, ...rest } = handleRalipoInit();
      initialize(apiKey, { showLauncher, showWidget });
      setRalipoObject({ ...rest });
    } else {
      setTimeout(init, 1000);
    }
  }

  useEffect(() => {
    if (scriptError) {
      throw new Error('Unable to load Ralipo inline script');
    }
  }, [scriptError]);

  useEffect(() => {
    if (scriptLoaded) {
      init().catch(console.error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptLoaded]);

  return {
    ralipoObject,
  };
}

const RalipoProvider: FC<RalipoProviderProps> = ({
  showWidget,
  showLauncher,
  children,
  apiKey,
}) => {
  const response = useInitApp({
    apiKey,
    showLauncher,
    showWidget,
  });

  const ralipoObject = response.ralipoObject as RalipoObjectWithoutInitialize;

  return (
    <RalipoContext.Provider value={{ ralipoObject }}>
      {children}
    </RalipoContext.Provider>
  );
};

export default RalipoProvider;
