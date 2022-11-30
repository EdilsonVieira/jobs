async function workDayTick() {
    let color = getJobColor(__filename);
    console.log(color.fg,color.bg,`workDayTick: ${new Date()}`,color.rs);
}

module.exports = {
    workDayTick
}