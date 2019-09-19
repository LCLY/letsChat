import React from "react";
import "./css/style.min.css";
import Dashboard from "./Component/Dashboard";
import Store from "./Store";
function App() {
    return (
        <div className="App">
            <Store>
                <Dashboard />
            </Store>
        </div>
    );
}

export default App;
