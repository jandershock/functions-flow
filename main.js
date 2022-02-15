const createWoodBlock = () => {
    // Return an object with 4 properties.
    return {
        type: 'wood block',
        length: 10,
        material: 'pine',
        purpose: 'flute'
    }
}


const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    return `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a ${woodObject.purpose}`; //I left out "wooden" from flute because it seems like it wouldn't make sense if it was a different material imo
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)

console.log(carvingString);