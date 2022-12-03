
async function workDayTick(job) {
    let color = job.color;
    console.log(color.fg,color.bg,`Executing ${job.name}...`,color.rs);
    await sleep(25000);
}

module.exports = {
    workDayTick
}