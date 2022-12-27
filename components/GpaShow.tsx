import { useEffect, useState } from 'react';
import { gpa } from '../hooks/Gpa';


const GpaShow = ({ pos, semesters }: any) => {
    const [cg, setCg] = useState(NaN)
    useEffect(() => {
        setCg(gpa(semesters));
    }, [semesters])
    useEffect(() => {
        setCg(gpa(semesters));
    }, [])
    return (
        <div style={{ textAlign: pos, color: 'cyan', margin: '1.5rem 5px' }}>
            {isNaN(cg) ? (<span>Add course</span>) : (<span>Your CGPA is <b>{cg.toPrecision(4)}</b></span>)}
        </div>
    );
};

export default GpaShow;