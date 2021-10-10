import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Mypile from "./components/Mypile";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ViewMypile from "./components/ViewMypile";
import ScrollToTop from "./components/ScrollToTop";
import AddSecretePile from "./components/AddSecretePile";
import ViewSecretePile from "./components/ViewSecretePile";
import TestClient from "./components/TestClient"; // This is for testing purposes na should be removed
import { TokenContext } from "./components/context/TokenContext";
import NotFound from "./components/NotFound";

const App = () => {
  const [globalUserId, setGlobalUserId] = useState("");

  return (
    <div>
      <HashRouter>
        {/* scroll to the top copmponent here please */}
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/signup" component={SignUp} />
          <Route path="/logout" component={Logout} />
          {/* <TokenContext.Provider value={{ globalUserId, setGlobalUserId }}> */}
          <Route path="/login" component={Login} />
          <Route path="/mypile" component={Mypile} />
          <Route path="/viewmypile" component={ViewMypile} />
          <Route path="/addsecretepile" component={AddSecretePile} />
          <Route path="/viewsecretepile" component={ViewSecretePile} />
          <Route path="/testclient" component={TestClient} />
          <Route component={NotFound} /> {/*more research for this compoent*/}
          {/* </TokenContext.Provider> */}
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
