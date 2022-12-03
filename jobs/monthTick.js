
async function monthTick(job) {
    let color = job.color;
    console.log(color.fg,color.bg,`Executing ${job.name}...`,color.rs);
    await sleep(360000);
}

module.exports = {
    monthTick
}