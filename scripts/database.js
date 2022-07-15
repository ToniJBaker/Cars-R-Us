const database = {
    paintColor: [
        {id:1, color: "Silver", price:1500 },
        {id:2, color: "Midnight Blue",price:1200 },
        {id:3,color: "Firebrick Red", price:2200},
        {id:4,color: "Spring Green", price:1350}
    ],
    interior: [
        {id:1, fabric: "Beige Fabric",price:2000},
        {id:2, fabric:"Charcoal Fabric", price:2200},
        {id:3, fabric: "White Leather",price:3200},
        {id:4, fabric: "Black Leather",price:3100}
    ],
    technology: [
        {id:1, package: "Basic Package (basic sound system)",price:1800 },
        {id:2, package: "Navigation Package (includes integrated navigation controls)",price:1700},
        {id:3, package: "Visibility Package (includes side and reat cameras)",price:1200},
        {id:4, package: "Ultra Package (includes navigation and visibility packages)",price:2400}
    ],
    wheels: [
        {id:1, name: "17-inch Pair Radial",price:120},
        {id:2, name: "17-inch Pair Radial Black",price: 180},
        {id:3, name: "18-inch Pair Spoke Silver",price: 200},
        {id:4, name: "18-inch Pair Spoke Black",price:220}
    ],
    customOrders: [
        {id: 1,
         paintColorId:3 ,
         interiorId:4 ,
         technologyId:2 ,
         wheelsId:1   
        }
    ],
    orderBuilder: [
        {

        },
    ]
}

export const getPaintColor = () => {
    return database.paintColor.map(paint => ({...paint}))
}
export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}
export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}



export const getOrderBuilder = () => {
    return database.constgetOrderBuilder
}
export const setPaint = (id) => {
    return database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    return database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    return database.orderBuilder.interiorId = id
}
export const setWheels = (id) => {
    return database.orderBuilder.wheelId = id
}



export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
