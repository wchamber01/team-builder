import React, { useState, useEffect } from 'react';

const Form = props => {
    const [card, setCard] = useState({ name: "", })

    return (
        <form>
            <label htmlFor="fname">First Name</label>
            <input
                id="fname"
                type="text"
                name="fname"
            //   value={}
            />
            <label htmlFor="lname">Last Name</label>
            <input
                id="lname"
                type="text"
                name="lname"
            //   value={}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                name="email"
            //   value={}
            />
        </form>
    );
}