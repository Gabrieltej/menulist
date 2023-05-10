import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((menuitem) => {
        const {id, title, img, desc, price} = menuitem
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo'/>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
               </header>
              <p className='item-text'>{desc}</p>
              <p className='price'>${price}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
