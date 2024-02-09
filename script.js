let rand = Math.random
let First, Second, Third

//Generating the First word
rand = Math.random()
if (rand < 0.33) {
  First = 'Crazy'
} else if (rand < 0.66 && rand >= 0.33) {
  First = 'Amazing'
} else {
  First = 'Fire'
}

//Generating the second word
rand = Math.random()
if (rand < 0.33) {
  Second = 'Engine'
} else if (rand < 0.66 && rand >= 0.33) {
  Second = 'Foods'
} else {
  Second = 'Garment'
}

//Generating the third word
rand = Math.random()
if (rand < 0.33) {
  Third = 'Bros'
} else if (rand < 0.66 && rand >= 0.33) {
  Third = 'Limited'
} else {
  Third = 'Hub'
}

console.log(`${First} ${Second} ${Third}`)

// This will now generate the different names every time you refresh
// Check the console for the results and refresh everytime to see a new name
