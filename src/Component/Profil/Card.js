import React from 'react'
import './Cards.css';
import PropTypes from 'prop-types' ;

const Card = ({FullName , Bio , Profession, imgSrc}) => {
    return (
<div class="container d-flex justify-content-center">
    <div class="card p-3 py-4">
        <div class="text-center"> 
        <img style={{width:"100%"}} src={imgSrc} alt="sophia"/>
            <h3 class="mt-2">{FullName}</h3> 
            <span class="mt-1 clearfix">{Profession}</span> 
            <small class="mt-4">{Bio}</small>
            <div class="social-buttons mt-5"> <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button> <button class="neo-button"><i class="fa fa-twitter fa-1x"></i> </button> </div>
        </div>
    </div>
</div>
    )
}
 
Card.propTypes = {

FullName : PropTypes.string ,
Bio : PropTypes.string ,
Profession:PropTypes.string ,
imgSrc : PropTypes.string ,

}

Card.defaultProps ={

FullName : "Anonyme" ,
Bio :"free" ,
Profession : "no description" ,
imgSrc : "logo512.png" ,

}

export default Card;
