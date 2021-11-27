import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div className="background">

        <div className="cardBck">
            <div className="about">
                <img className="topImg" src='/image-equilibrium.jpg' alt="" />
                <h1 className="title">Equilibrium #3429</h1>
                <p className="desc">Our equilibrium collection promotes balance and calm.</p>
            </div>
            <div className="mid">
                <div className="info">
                    <img className="icons" src='/icon-ethereum.svg' alt="" srcset="" />
                    <span className="nftValue">
                     0.041ETH
                    </span>
                </div>
                 <div className="right">
                    <img className="icons" src='/icon-clock.svg' alt="" srcset="" />
                    <span className="timeLeft">
                         3 days left
                    </span>
                </div>
            </div>
                <hr />
                <div className="bottom">
                    <img className="bottomImg" src='/image-avatar.png' alt="" srcset="" />
                    <h3 className="createdBy"><span className="creationOf">Creation of </span>   drip016</h3>
                </div>
        </div>
            
        </div>
        
    )
}

export default Card
