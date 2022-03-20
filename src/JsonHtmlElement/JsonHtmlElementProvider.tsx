import React from 'react';

const JsonHtmlElementContext: React.Context<any> = React.createContext({});
const { Provider } = JsonHtmlElementContext;

type JsonHtmlElementProviderProps = {
    initial: object,
};

const JsonHtmlElementProvider: React.FC<JsonHtmlElementProviderProps> = ({ children, initial = {} }) => {
    const querySelector: HTMLElement | null = document.querySelector('#environment');
    const properties = JSON.parse(querySelector?.innerText || 'null') || initial;
    return (
        <Provider value={{ ...properties }}>
            {children}
        </Provider>
    );
};

export const useEnvironment = React.useContext(JsonHtmlElementContext)
export { JsonHtmlElementProvider, JsonHtmlElementContext };
