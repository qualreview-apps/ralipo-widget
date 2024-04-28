import { ReactNode } from 'react'
/* eslint-disable @typescript-eslint/no-explicit-any */
export type InitProps = {
  showLauncher?: boolean
  showWidget?: boolean
}

export interface RalipoProviderProps {
  showWidget?: boolean
  showLauncher?: boolean
  apiKey: string
  children: ReactNode
}

export type RalipoObject = {
  /**
   * Displays the launcher.
   * @param launcherId Identifier of the launcher to display.
   */
  showLauncher: (launcherId: string) => void;

  /**
   * Retrieves campaigns data.
   * @returns Campaigns data.
   */
  showCampaignsData: () => any;

  /**
   * Sets custom data.
   * @param key Key to set data for.
   * @param data Custom data to set.
   * @returns The updated data.
   */
  setCustomData: (key: string, data: any) => any;

  /**
   * Opens a widget.
   * @param widgetId Identifier of the widget to open.
   * @param options Options for the widget.
   * @returns A promise that resolves when the widget is opened.
   */
  openWidget: (widgetId: string, options: any) => Promise<any>;

  /**
   * Initializes the Ralipo object.
   * @param apiKey API key for initialization.
   * @param initProps Additional initialization properties.
   * @returns A promise that resolves when initialization is complete.
   */
  initialize: (apiKey: string, initProps: InitProps) => Promise<any>;

  /**
   * Hides the launcher.
   * @param launcherId Identifier of the launcher to hide.
   */
  hideLauncher: (launcherId: string) => void;
};

/**
 * Represents a subset of RalipoObject without the 'initialize' method.
 */
export type RalipoObjectWithoutInitialize = Omit<RalipoObject, 'initialize'>




declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ralipo: RalipoObject
    ralipoLoaded: boolean
  }
}


