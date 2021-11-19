import React from 'react';


import RootNavigator from './navigation/RootNavigator';
import {store} from './redux/store';
import {Provider} from 'react-redux';


function App(){
  return(
    <Provider store={store}>
       <RootNavigator />
    </Provider>
  );
  
}

export default App;
