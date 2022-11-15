import React from 'react';

import '../utils/main.css';

export default function Project(props) {
    console.log(props);
    return (
        <div>
            {props.cardContent.map((card) => (
                <div className="card space">
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <img src={card.image} alt={card.title} />
                        <a href={card.linkg} className="card-link">{card.linkg}</a>
                        <a href={card.linkd} className="card-link">{card.linkd}</a>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
