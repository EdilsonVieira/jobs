async function moonTick() {
    let color = getJobColor(__filename);
    console.log(color.fg,color.bg,`moonTick: ${new Date()}`,color.rs);
}

module.exports = {
    moonTick
}