import React, {useReducer} from 'react';

export default (reducer, actions, defaultValue) => {
  // console.log('reducer :' + reducer);
  // console.log('actions :' + actions);
  // console.log('defaultValue :' + defaultValue);

  const Context = React.createContext();

  const Provider = ({children}) => {
    // console.log('children :' + {children});

    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    for (let key in actions) {
      // console.log('key' + key);

      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };
  return {Context, Provider};
};
