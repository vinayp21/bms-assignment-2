import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import bmsReducer from './reducers/bmsReducer';

const initialState = {
    data: {},
	mydata:'test'
};


export const context = React.createContext(initialState);

export const ContextProvider = ({ children })  => {
    const [state, testdispatch] = useReducer(bmsReducer, initialState);
    return (
        <context.Provider value={{state , testdispatch}}>
            {children}
        </context.Provider>
    );
}

ContextProvider.propTypes = {
    children: PropTypes.func.isRequired
};
