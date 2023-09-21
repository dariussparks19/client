import React from "react";
import Delete from "../components/Delete";

const Detail = props => {
    const { id } = props;
    return(
        <div>
            <h1>This is a view about team member: {id}</h1>
            <Delete />
        </div>
    )
}

export default Detail;