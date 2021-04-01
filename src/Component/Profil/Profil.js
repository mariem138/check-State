import React from 'react'
import Card from './Card'


const Profil = ({FullName , Bio , Profession, imgSrc }) => {

    return (
        <div id="profil">
        
            <Card  FullName={FullName} Bio={Bio} Profession={Profession}  imgSrc={imgSrc}/>
             
        </div>
    )
}

export default Profil ; 
