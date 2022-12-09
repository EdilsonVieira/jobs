
async function otherTick(job) {
    let color = job.color;
    console.log(color.fg,color.bg,`Executing ${job.name}...`,color.rs);
    await sleep(700);
}

module.exports = {
    otherTick
}