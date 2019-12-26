import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import bmsReducer from './reducers/bmsReducer';

const initialState = {
    data: {}
};


export const context = React.createContext(initialState);

export const ContextProvider = ({ children })  => {
    const [state, contextDispatch] = useReducer(bmsReducer, initialState);
    return (
        <context.Provider value={{state , contextDispatch}}>
            {children}
        </context.Provider>
    );
}

ContextProvider.propTypes = {
    children: PropTypes.func.isRequired
};
