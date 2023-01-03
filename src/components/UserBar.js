import React from 'react'
import "../styles/UserBar.css"

export default function UserBar(props) {
  return (
        <div className='userbar-box'>
      {"HOŞ GELDİN "+props.name+" "+props.surname+":)"}


        </div>
  )
}
