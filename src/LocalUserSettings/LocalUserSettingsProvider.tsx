import React from 'react';
import useLocalStorage from './useLocalStorage';

type UserSettingsProviderProps = {
    initialState: object,
    key: string,
    version: string
};

const UserSettingsContext: React.Context<any> = React.createContext({});
const { Provider } = UserSettingsContext;

const UserSettingsProvider: React.FC<UserSettingsProviderProps> = ({
                                                                       children,
                                                                       key = 'user.settings',
                                                                       version = '1',
                                                                       initialState = {}
                                                                   }) => {
    const [state, setState] = useLocalStorage(`${key}@${version}`, initialState);

    function setSettings(key: string, value: any) {
        setState(prevState => ({ ...prevState, [key]: value }));
    }

    return (
        <Provider value={{ settings: state, setSettings }}>
            {children}
        </Provider>
    );
};


export const useLocalUserSettings = React.useContext(UserSettingsContext)
export { UserSettingsProvider, UserSettingsContext };
