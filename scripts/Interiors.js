import {getInterior, setInterior, } from './database.js'
const interiorChoices = getInterior()
//event listener that will select and option for interior fabric
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1", "2", "3", or "4"
            setInterior(parseInt(changeEvent.target.value))
        }
        
    }
)
// convert objects to <select> elements
export const Interiors = () => {
    let html = `<select id="interior">
        <option value="0">Select Interior Material</option>`
       
        const listItems = interiorChoices.map(interiorOption => {
        return `        
        <option value=${interiorOption.id}>${interiorOption.fabric}</option>   
        `
    })
    html += listItems.join("")
    html += "</select>"
    return html
}