import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Detail from './pages/Detail'

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route component = { Home } path='/' exact/>
        <Route component = { Detail } path='/detail/:womanid' exact/>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;