import {getPaintColor, getInterior, getTechnology, getWheels, getOrders} from './database.js'
const paints = getPaintColor()
const interiors = getInterior()
const technology = getTechnology()
const wheels = getWheels()



const buildOrderListItem = (order) => {
    const chosenPaint = paints.find(
        (paint) => {
        return paint.id === order.paintColorId
        }
    )
    const chosenInterior = interiors.find(
        (interior) => {
        return interior.id === order.interiorId
        }
    )
    const chosenTechnology = technology.find(
        (tech) =>{
        return tech.id === order.technologyId
        }
    )
    const chosenWheels = wheels.find(
       (wheel) => {
        return wheel.id === order.wheelsId
    
       }
    )

    const totalCost = chosenPaint.price + chosenInterior.price + chosenTechnology.price + chosenWheels.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    ${chosenPaint.color} car with ${chosenWheels.name} wheels, ${chosenInterior.fabric} interior, and ${chosenTechnology.package}  for a total cost of ${costString}  
    </li>`
}

// const buildOrderListItem = (order) => {
//         return `<li>
//             Order #${order.id} was placed on ${order.timestamp}
//         </li>`
//     }

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"
    return html
}