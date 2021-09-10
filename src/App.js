import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage'

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          {/* always put the home route at the bottom */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
      
      {/* home page */}
          {/* header */}
          {/* banner */}
            {/* search */}
          {/* crads */}
          {/* footer */}

      {/* serch page */}
           {/* header */}
        {/* loading... */}
    </div>
  );
}

export default App;
