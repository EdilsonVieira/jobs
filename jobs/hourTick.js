
async function hourTick(job) {
    let color = job.color;
    console.log(color.fg,color.bg,`Executing ${job.name}...`,color.rs);
    await sleep(15000);
}

module.exports = {
    hourTick
}