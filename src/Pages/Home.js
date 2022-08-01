
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

const HomePage = (props) => {
    const [res, setRes] = useState(100);

    useEffect(() => {
        fetch('/optimize').then(res => res.json()).then(data => {
            // let w = ""
            // for (const [key, value] of Object.entries(data.weight)) {
            //   w = w.concat(`${key}: ${value}\n`)
            // }
            // setRes(w)
            setRes(data.weight)
        })
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Home Page: check Weight?</h1>
            {Object.keys(res).map((key, index) => {
                return (
                    <h3 key={key}>{key}: {res[key]}</h3>
                )
            })
            }
        </div>
    );
};

export default HomePage;