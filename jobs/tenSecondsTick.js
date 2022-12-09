
async function tenSecondsTick(job) {
    job.log(`Executing with log function ${job.name}...`);
    await sleep(2500);
}

module.exports = {
    tenSecondsTick
}