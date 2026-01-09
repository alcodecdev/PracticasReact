import React from "react";

export function Skill({array, show}) {
    return (
        show && (
        <div>
            <ul>
                {
                    array.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
        )
    )
}