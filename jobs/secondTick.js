
async function secondTick() {
    let color = getJobColor(__filename);
    console.log(color.fg,color.bg,`secondTick: ${new Date()}`,color.rs);
}

module.exports = {
    secondTick
}