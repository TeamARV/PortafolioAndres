import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Index from "./pages";
import L1 from "./layout/L1";


function App() {
  return (
    
    <div className='App'> 
      <Router>
        <Switch>
        <Route path='/L1' >
            <L1 />
          </Route>
          <Route path='/Page1' >
            <Page1 />
          </Route>
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
      </div>
    
  );
}

export default App;
