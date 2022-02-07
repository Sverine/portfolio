import React from "react";

const Skill = ({skill, color})=>{
    const {title, year, intro, description, description2, website, website2, keywords} = skill
    return(
        <div className="skill" style={{color:color}}>
            <h5>{title} {year ? <span> • {year} ans</span>:null}</h5>
            <p>{intro}</p>
            {description ? <p className="description">• {description}</p> : null }
            {website ? <a href={website} className="website" target="_blank" rel="noreferrer" style={{color:color}}>{website}</a> : null}
            {description2 ? <p className="description">• {description2}</p> : null }
            {website2 ? <a href={website2} className="website" target="_blank" rel="noreferrer" style={{color:color}}>{website2}</a> : null}

            <div className="keywords-container">
                {keywords.map((keyword, index)=>(
                    <span key={index}>{keyword}</span>
                ))}
            </div>
        </div>
    )
}

export default Skill;