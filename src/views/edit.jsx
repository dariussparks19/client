import React from "react";
import Form from "../components/form";
import Delete from "../components/Delete";

const Edit = props => {
    const { id } = props; 
    return(
        <div>
            <h1>Editing team member: { id } </h1>
            <Form />
            <Delete />
        </div>
    )
}

export default Edit;