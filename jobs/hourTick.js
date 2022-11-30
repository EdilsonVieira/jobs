async function hourTick() {
    let color = getJobColor(__filename);
    console.log(color.fg,color.bg,`hourTick: ${new Date()}`,color.rs);
}

module.exports = {
    hourTick
}