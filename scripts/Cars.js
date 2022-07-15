import {Wheels} from './Wheels.js'
import {Paints} from './Paints.js'
import {Technologies} from './Technologies.js'
import {Interiors} from './Interiors.js'
import {addCustomOrder} from './database.js'

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if(itemClicked.id === 'orderButton'){addCustomOrder()}
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars R' Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paint ">
                <h2>Paint Color</h2>
                ${Paints()}
            </section>
            <section class="choices__interior ">
                <h2>Interior</h2>
                ${Interiors()}
            </section>
            <section class="choices__tech ">
                <h2>Technology</h2>
                ${Technologies()}
            </section>
            <section class="choices__wheel ">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
                    
        </article>

        <article class="customOrders">
            <button id="orderButton">Place Custom Order</button>
            <h2>Custom Car Orders</h2>
            
        </article>
    `
}

