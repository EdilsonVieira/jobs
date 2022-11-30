async function monthTick() {
    let color = getJobColor(__filename);
    console.log(color.fg,color.bg,`monthTick: ${new Date()}`,color.rs);
}

module.exports = {
    monthTick
}