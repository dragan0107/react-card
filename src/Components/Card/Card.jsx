import React from 'react'
import './Card.css'
import topImg from '../../images/image-equilibrium.jpg'
import leftIcon from '../../images/icon-ethereum.svg'
import rightIcon from '../../images/icon-clock.svg'
import avatar from '../../images/image-avatar.png'


const Card = () => {
    return (
        <div className="background">

        <div className="cardBck">
            <div className="about">
                <img className="topImg" src={topImg} alt="" />
                <h1 className="title">Equilibrium #3429</h1>
                <p className="desc">Our equilibrium collection promotes balance and calm.</p>
            </div>
            <div className="mid">
                <div className="info">
                    <img className="icons" src={leftIcon} alt="" srcset="" />
                    <span className="nftValue">
                     0.041ETH
                    </span>
                </div>
                 <div className="right">
                    <img className="icons" src={rightIcon} alt="" srcset="" />
                    <span className="timeLeft">
                         3 days left
                    </span>
                </div>
            </div>
                <hr />
                <div className="bottom">
                    <img className="bottomImg" src={avatar} alt="" srcset="" />
                    <h3 className="createdBy"><span className="creationOf">Creation of </span>   drip016</h3>
                </div>
        </div>
            
        </div>
        
    )
}

export default Card
