
async function tenSecondsTick(job) {
    let color = job.color;
    console.log(color.fg,color.bg,`Executing ${job.name}...`,color.rs);
    await sleep(2500);
}

module.exports = {
    tenSecondsTick
}