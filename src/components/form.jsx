import React from "react";

const Form = props => {
    return(
        <form action="">
            <p>
                <label htmlFor="">First Name</label>
                <input type="text" name="firstName" id="" />
            </p>
            <p>
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastName" id="" />
            </p>
            <p>
                <label htmlFor="">Sport</label>
                <input type="text" name="teamName" id="" />
            </p>
            <p>
                <label htmlFor="">Team</label>
                <input type="text" name="positionName" id="" />
            </p>
            <input type="submit" value="Done" />
        </form>
    )
}

export default Form;