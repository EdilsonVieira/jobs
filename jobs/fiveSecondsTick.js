
async function fiveSecondsTick(job) {
    let color = job.color;
    console.log(color.fg,color.bg,`Executing ${job.name}...`,color.rs);
    await sleep(1500);
}

module.exports = {
    fiveSecondsTick
}