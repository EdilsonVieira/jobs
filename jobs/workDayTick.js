
async function workDayTick(job) {
    let color = job.color;
    console.log(color.fg,color.bg,`${job.name}: ${new Date()} - ${job.title}`,color.rs);
}

module.exports = {
    workDayTick
}