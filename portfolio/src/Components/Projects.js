import React from 'react';
import dailyaxis from "../Assets/dailyaxis.png"
import thehate from "../Assets/thehate.png"
import dotboxes from "../Assets/dotboxes.png"
import peperosso from "../Assets/peperosso.png"


const Projects = () => {
    return (
        <div className="Projects">
            <a href="https://thehateugive.netlify.com/" target="_blank"><img src={thehate} /></a>
            <a href="https://dotboxes.netlify.com/index.html" target="_blank"><img src={dotboxes} /></a>
            <a href="http://thedailyaxis.surge.sh/" target="_blank"><img src={dailyaxis} /></a>
            <a href="https://peperossosocial.herokuapp.com/" target="_blank"><img src={peperosso} /></a>
        </div>
    );
}

export default Projects;