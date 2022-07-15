import {getPaintColor, setPaint} from './database.js'
const paints = getPaintColor()


//event listener that will select and option for paint color

document.addEventListener(
    "change",
    (event) => {
              
        if (event.target.id === "paint") {
            const chosenOption = event.target.value
            console.log(chosenOption)  // "1", "2", "3", or "4"
            setPaint(parseInt(event.target.value))
        
        
    }
}
)

// convert objects to <select> elements
export const Paints = () => {
    let html = `<select id="paint">
    <option value="0">Select a Paint Color</option>
    `   
    const listItems = paints.map(paintColor => {
        return `        
        <option value="${paintColor.id}">${paintColor.color}</option>   
    `
    })
    html += listItems.join("")
    html += "</select>"
    return html
}

    