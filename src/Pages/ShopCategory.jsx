import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className='shopCategory'>
      <img className='shopCategoryBanner' src={props.banner} alt='' />
      <div className="shopCategoryIndexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategorySort">
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className="shopCategoryProducts">
        {all_product.map((item,i) => {
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopCategoryLoadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory