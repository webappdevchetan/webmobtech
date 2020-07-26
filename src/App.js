import React, { Component } from 'react';
import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";
import Loader from './subcomponent/Loader'
const MovieDetail = lazy(() => import('./component/MovieDetailComponent'));
const MovieList = lazy(() => import('./container/MovieListContainer'));
class App extends Component {
  
  render() {
    return (
      <div className="App" >
        <section className="main-area-root">
          <Switch>
            <Suspense fallback={<Loader />}>
              <Route exact path="/" component={MovieList} />
              <Route exact path="/detail/:id" component={MovieDetail} />
            </Suspense>
          </Switch>
        </section>
        
      </div>
    );
  }

}


export default App;
