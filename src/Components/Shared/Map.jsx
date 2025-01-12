import React from 'react'
import Card from './Card'

const Map = ({data}) => {
     
         const item= data.map(da => <Card key={da._id} item={da}></Card>)
         return item
  
}

export default Map