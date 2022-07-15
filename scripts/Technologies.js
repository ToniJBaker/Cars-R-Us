import {getTechnology} from './database.js'
const technologyChoices = getTechnology()


//event listener that will select and option for tech package
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1", "2", "3", or "4"
            window.alert(`User Chose Option: ${chosenOption}`)
        }
        
    }
)
// convert objects to <select> elements
export const Technologies = () => {
    let html = `<select id="tech">
    <option value="0">Select a Technology Package</option>
    `   
    const listItems = technologyChoices.map(technology => {
        return `        
        <option value=${technology.id}>${technology.package}</option>   
    `
    })
    html += listItems.join("")
    html += "</select>"
    return html
}



// export const Technologies = () => {
//     return `<h2>Technologies</h2>`
// }