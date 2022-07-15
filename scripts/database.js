const database = {
    paintColor: [
        {pk:1, color: "Silver" },
        {pk:2, color: "Midnight Blue" },
        {pk:3,color: "Firebrick Red"},
        {pk:4,color: "Spring Green"}
    ],
    interior: [
        {pk:1, fabric: "Beige Fabric"},
        {pk:2, fabric:"Charcoal Fabric"},
        {pk:3, fabric: "White Leather"},
        {pk:4, fabric: "Black Leather"}
    ],
    technology: [
        {pk:1, package: "Basic Package (basic sound system)" },
        {pk:2, package: "Navigation Package (includes integrated navigation controls)"},
        {pk:3, package: "Visibility Package (includes side and reat cameras)"},
        {pk:4, package: "Ultra Package (includes navigation and visibility packages)"}
    ],
    wheels: [
        {pk:1, name: "17-inch Pair Radial"},
        {pk:2, name: "17-inch Pair Radial Black"},
        {pk:3, name: "18-inch Pair Spoke Silver"},
        {pk:4, name: "18-inch Pair Spoke Black"}
    ],
    // customOrders: [
    //     {id: 1,
    //      paintColorId:3 ,
    //      interiorId:4 ,
    //      technologyId:2 ,
    //      wheelsId:1   
    //     }
    // ]
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
