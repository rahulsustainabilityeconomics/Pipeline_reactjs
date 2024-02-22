import React from 'react'
import "./Addcart.scss"


interface cartprops {
  addedcart: any
  editcart:any
  handleCartDelete:any
}

const Addcart: React.FC<cartprops> = ({ addedcart,editcart,handleCartDelete}) => {
  return (
    <div className='parent-cart'>
      {addedcart && addedcart?.items?.map((item:any,index:number) => {
        return (
          <div key={index} className='cart'>
            <div className='title'>{item.moduleName}-{item.modulePlan}<span><button onClick={()=>handleCartDelete(item)}>X</button></span></div>
          </div>
        )
      })}
      {editcart && editcart?.map((item:any,index:number) => {
        return (
          <div key={index} className='cart'>
            <div className='title'>{item.moduleName}-{item.modulePlan}<span></span></div>
          </div>
        )
      })}
    </div>
  )
}

export default Addcart
