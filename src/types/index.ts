import { ReactNode } from 'react'
/* eslint-disable @typescript-eslint/no-explicit-any */
export type InitProps = {
  elementId?: string;
  customData?: any;
  user?: any;
  showLauncher?: boolean;
}

export interface CustomData {
  [key: string]: any;
}

export interface RalipoProviderProps {
  showWidget?: boolean
  showLauncher?: boolean
  apiKey: string
  children: ReactNode
}


export interface IResponse {
  question: string;
  value: string;
}

export interface NewResponseOptions {
  response: IResponse[];
  customData?: any;
}


export type RalipoObject = {
  /**
   *  Shows the chat launcher globally.
   * @param uid A optional but  unique identifier for the campaign. If omitted, shows the launcher globally..
   */
  showLauncher: (uid?: string) => void;

  /**
   * Sets custom data.
   * @param data A key-value pair object containing custom data..
   * @param uid An optional but unique identifier for the user. If omitted, sets data globally.
   * @returns The updated data.
   */
  setCustomData: (data: CustomData, uid?: string,) => any;

  /**
   * Opens a widget.
   * @param widgetId An optional unique identifier for the widget. If omitted, it opens the existing widget..
   * @returns A promise that resolves when the widget is opened.
   */
  openWidget: (widgetId?: string) => Promise<any>;

  /**
   * Initializes ralipo send feedback widget with specific options.
   * @param uid API key for initialization.
   * @param options Object with configuration options.
   * @returns A promise that resolves when initialization is complete.
   */
  initialize: (uid: string, options: InitProps) => Promise<any>;

  /**
   * Hides ralipo feedback launcher globally. This function can only be called after being initialized
   * @param uid  An optional unique identifier for the widget. If omitted, hides the launcher globally.
   */
  hideLauncher: (uid?: string) => void;

  /**
   * Adds new responses to the send Feedback widget dynamically.
   * @param uid  A unique identifier for the widget.
   * @param options An object containing the new responses: { response: IResponse[] }.
   * @param customData An optional Custom data to be associated with the responses.
   * @returns void
  */
  setNewResponseDynamically(uid: string, options: NewResponseOptions): void;
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


