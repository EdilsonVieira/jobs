
async function tirthySecondsTick(job) {
    let color = job.color;
    console.log(color.fg,color.bg,`Executing ${job.name}...`,color.rs);
    await sleep(10000);
}

module.exports = {
    tirthySecondsTick
}