import React from "react";

export const loginUser = (authBody, redirect) => {
    if (typeof authBody === 'undefined' || authBody === null || !authBody) {
        authBody = JSON.stringify({
            auth: 'checking'
        });
    };
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return fetch('http://localhost:3001/login', {
        method: 'POST',
        mode: 'cors',
        body: authBody,
        headers: myHeaders
    }).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        redirect(data);
    });
};