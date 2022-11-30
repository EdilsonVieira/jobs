async function cristhmasTick() {
    let color = getJobColor(__filename);
    console.log(color.fg,color.bg,`cristhmasTick: ${new Date()}`,color.rs);
}

module.exports = {
    cristhmasTick
}