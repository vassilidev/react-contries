import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
