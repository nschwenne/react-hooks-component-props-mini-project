import React from "react";

function About({about, posterSrc = "https://via.placeholder.com/215 (Links to an external site.)"}) {
return (
    <aside>
        <img src={posterSrc} alt="blog logo"></img>
        <p>{about}</p>
    </aside>
)
}
export default About;