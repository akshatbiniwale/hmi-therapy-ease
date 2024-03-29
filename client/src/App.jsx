import Login from "./pages/Login";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counsellor from "./pages/Counsellor";

const App = () => {
	return(
	 <>
	 <Router>
        <div className="container">
          <Routes>
            <Route exact path="/counsellor" element={<Counsellor />}>
            </Route>
          </Routes>
        </div>
      </Router>
	</>

	);
};

export default App;
