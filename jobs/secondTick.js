
async function secondTick(job) {
    let color = job.color;
    console.log(color.fg,color.bg,`Executing ${job.name}...`,color.rs);
    await sleep(500);
}

module.exports = {
    secondTick
}