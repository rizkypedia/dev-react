import React from "react"
function Item ({name, isPacked}) {
    return(
    <li className="item">
        {isPacked ? name + '✔' : name}
     </li>
     )

}
function PackingList() {
    return(
        <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={false} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={true} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    )
}

export default PackingList