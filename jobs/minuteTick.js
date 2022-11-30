async function minuteTick() {
    let color = getJobColor(__filename);
    console.log(color.fg,color.bg,`minuteTick: ${new Date()}`,color.rs);
}

module.exports = {
    minuteTick
}