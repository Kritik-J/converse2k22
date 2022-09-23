import { Component } from "react";
import Event from "./event";
import HomePage from "./HomePage";
const Home = () => {

    return (
        <div className="App">
            <div class="container py-4">
                <h1 class="h1 text-center" id="pageHeaderTitle">EVENTS</h1>
                {/* <HomePage /> */}
                <Event />
            </div>
        </div>
    );
}

export default Home;