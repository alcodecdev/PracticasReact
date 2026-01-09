import React from "react";

export function Contact({email, phone, show}) {
    return (
        show &&(
        <div>
            <h3>Contact</h3>
            <p>Email: {email}</p>
            <p>Telefono: {phone}</p>
        </div>
        )
    )
}