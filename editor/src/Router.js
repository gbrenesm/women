import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route component = { Home } path='/' exact/>
        <Route component = { DetailPage } path='/detail/:womanid' exact/>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;