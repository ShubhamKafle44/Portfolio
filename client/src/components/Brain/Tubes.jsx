// Tubes.js
import React from 'react';
import Tube from './Tube';

export default function Tubes({ allTheCurves }) { // Fixed: Changed the export function name
    return (

        <>
            {allTheCurves.map((curve, index) => (
                <Tube curve={curve} key={index} />
            ))}
        </>
    );
}
