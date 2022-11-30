async function moonTick(job) {
    let color = job.color;
    console.log(color.fg,color.bg,`${job.name}: ${new Date()}`,color.rs);
}

module.exports = {
    moonTick
}