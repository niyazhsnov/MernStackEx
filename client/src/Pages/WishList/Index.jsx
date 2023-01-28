import React from 'react'
import './Index.scss'
import {Helmet} from "react-helmet";
const Index = ({wishList, setWishList}) => {
function handleDelete(_id){
   let newWishList= wishList.filter((x)=>x._id!==_id)
    setWishList(newWishList)
}
function deleteAllWishList(){

    setWishList([])
}

  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>WishList</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    <div className='wishListPage'>
       
       
    {
      wishList&&  wishList.map((data)=>{
            return(
                
                <div className='card'>
                    <div><img src={`${data.img}`} alt="" /></div>
                    <div>{data.name}</div>
                    <div>{data.date}</div>
                    <button onClick={()=>{
                        handleDelete(data._id)
                    }}>Delete from wishlist</button>
                </div>
            )
        })
        
    }
     {
            wishList.length!==0 &&  <button className='deleteAll'onClick={()=>{
                deleteAllWishList()
            }}>DELETE ALL</button>
        }
    </div>
    
    </>
  )
}

export default Index