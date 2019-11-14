import React, { useState, useEffect } from 'react';

const Form = props => {
    const [card, setCard] = useState({ name: "", })

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
            //   value={}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                name="email"
            //   value={}
            />
            <label htmlFor="position"></label>
            <input
                id="position"
                type="text"
                name="position"
            //   value={}
            />
        </form>
    );
}