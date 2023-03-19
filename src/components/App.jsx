
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import  Navbar  from "../modules/MyPhonebook/Navbar/Navbar";
import {store, persistor }from "../redux/store";
import UserRoutes from 'pages/UserRoutes';
import AuthLayout from 'modules/AuthLayout/AuthLayout';


const App = () => {
  
  return (

    
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <Navbar />
          <UserRoutes />
            </BrowserRouter>
            </AuthLayout>
          </PersistGate>
    </Provider>
    </div>
  );
};

export default App;