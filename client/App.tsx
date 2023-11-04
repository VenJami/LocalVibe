import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Navigations/Main';
import Auth from './Navigations/Auth';
import Store from './redux/Store';
import {Provider, useSelector} from 'react-redux';
import { loadUser } from './redux/actions/userAction';
import { StatusBar, Text } from 'react-native';
import Loader from './src/common/Loader';

function App() {
  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
}

const AppStack = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const { isAuthenticated, loading } = useSelector((state:any) => state.user);

  React.useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  console.log(isAuthenticated);

  return (
    <>
      <>
        <StatusBar
          animated={true}
          backgroundColor={'#fff'}
          barStyle={'dark-content'}
          showHideTransition={'fade'}
        />
      </>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated ? (
            <NavigationContainer>
              <Main />
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <Auth />
            </NavigationContainer>
          )}
        </>
      )}
    </>
  );
};

export default App;
