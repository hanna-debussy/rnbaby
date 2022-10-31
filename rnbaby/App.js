import { useState, useCallback, } from 'react';
import { Provider, useSelector } from "react-redux";
import store from './src/store';
import AppInner from "./AppInner"

function App() {
  const [modal, setModal] = useState(true);
  // const [isLoggedIn, setLoggedIn] = useState(true);
  
  return (
    // Provider는 Redux Toolkit을 위해서 감싸주는 것
    <Provider store={store}>
      {/* 헉스 provider 안에서만 useSelector를 쓸 수 있어서 이렇게 뺀다 */}
      <AppInner/>
    </Provider>
  );
}

export default App;
