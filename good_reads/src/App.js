import React from 'react'
import './App.css'
import { Main } from './pages/allOption/main/Main'
import { Routes } from './routes/Routes'
import {useDispatch} from 'react-redux'
import { getUserRequestPerformer } from './redux/userData/action'

const App = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getUserRequestPerformer(1))
  }, [])

  return (
    <div>
      <Routes/>
    </div>
  );
};

export default App;
