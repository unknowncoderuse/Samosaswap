import React from "react";
import ReactDOM from "react-dom";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";

function App() {
    return (
        <div style={{ width: "400px", height: "500px", margin: "20px auto" }}>
            <SwapWidget />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
