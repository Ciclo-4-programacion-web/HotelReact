import './App.css';
import Home from 'pages/public/Home';
import FooterComponent from 'components/FooterComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from 'components/layout/404';
import RoomReview from 'components/room/RoomReview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/habitacion/:id' component={RoomReview}/>
          <Route component={NotFound} />
        </Switch>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
