
async function tirthySecondsTick() {
    let color = getJobColor(__filename);
    console.log(color.fg,color.bg,`tirthySeco: ${new Date()}`,color.rs);
}

module.exports = {
    tirthySecondsTick
}