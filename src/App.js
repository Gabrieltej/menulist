import React, {useState} from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'


const categoriesAvailable= items.map((itemCat)=>{
 return  itemCat.category
})
const uniqueValues=new Set(['all', ...categoriesAvailable])
const finallValues=[...uniqueValues]


function App() {
const [menuItems, setmenuitems] = useState(items)

const filterItem=(category)=>{
  if(category=== 'all'){
    setmenuitems(items)
    return
  }

  const newcat=items.filter((item)=>
  item.category===category
  )
  setmenuitems(newcat)
  return
}

  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItem} finallValues={finallValues} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
