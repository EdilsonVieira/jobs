
async function tenSecondsTick() {
    let color = getJobColor(__filename);
    console.log(color.fg,color.bg,`tenSeconds: ${new Date()}`,color.rs);
}

module.exports = {
    tenSecondsTick
}