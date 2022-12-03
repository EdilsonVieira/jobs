
async function minuteTick(job) {
    let color = job.color;
    console.log(color.fg,color.bg,`Executing ${job.name}...`,color.rs);
    await sleep(30000);
}

module.exports = {
    minuteTick
}