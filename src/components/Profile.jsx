import React from "react";

export default function Profile({name, age, profession}) {
    return (
        <div>
            <h2>Perfil</h2>
            <p>{name}</p>
            <p>{age}</p>
            <p>{profession}</p>
        </div>
    )
}