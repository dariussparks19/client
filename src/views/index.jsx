import React from "react";
import Delete from "../components/Delete";
import { Link } from "@reach/router";

const Home = props => {
    return(
        <div>
            <h1>Team Updater</h1>
            <Link to="/create">Add member</Link>
            <ul>
                <li><Link to="/1">DJ</Link> | <Link to = "/5/edit">Edit</Link> <Delete /> </li>
            </ul>
        </div>
    )
}

export default Home;