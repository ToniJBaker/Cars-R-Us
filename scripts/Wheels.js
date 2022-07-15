import {getWheels, setWheels} from './database.js'
const wheelChoices = getWheels()

//event listener that will select and option for wheel option 17 18 inch
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1", "2", "3", or "4"
            setWheels(parseInt(changeEvent.target.value))
        }
        
    }
)
// convert objects to <select> elements
export const Wheels = () => {
    let html = `<select id="wheel"><option value="0">Select Wheels</option>
    `   
    const listItems = wheelChoices.map(wheel => {
        return `        
        <option value=${wheel.id}>${wheel.name}</option>   
    `
    })
    html += listItems.join("")
    html += "</select>"
    return html
}
