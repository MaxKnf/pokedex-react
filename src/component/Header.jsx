import React from 'react'
import "./style/Header.css"
import pokeball from "../static/images/pokeball.png"

function Header() {

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
      <div className='logo-container' style={{ position:"fixed", opacity:"0.9", margin: "2px auto", padding: "3px 0px", display:"flex", flexDirection:"row",justifyContent:"center", width:"70%", borderRadius: "50px", backgroundColor: "white"}}>
        <div  style={{display: "flex", flexDirection: "column", justifyContent:"center",width:"100%", borderRadius:  "60px", backgroundColor: "white", padding: "5px 20px"}}>
        <a href='/' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <img src={pokeball} alt="pokeball-logo" style={{width: "60px"}} />
          <h1  style={{ margin: "0px", fontFamily: "Lexend"}}>POKEDEX</h1>
        </a> 
        </div>
      </div>
    </div>
    
    
  )
}

export default Header