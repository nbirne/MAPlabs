import React from 'react'
import { Glyphicon, Button } from 'react-bootstrap'

/* **************************************************
   MultiLineString component

   Output string with embeded '/n' as seperate <p>'s

   props:
     str
***************************************************** */
const MultiLineString = ( props ) => {

  const {
    str
   } = props

   return (
    <>
      {str.split('\n').map(function(para, key) {
        return (
          <p key={key}>{para}</p>
        )
      })}    
    </>    
  )
}
export default MultiLineString
