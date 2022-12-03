async function minuteTick(job) {
    let color = job.color;
    try {
        console.log(color.fg,color.bg,`${job.name}: ${new Date()} - ${job.title}`,color.rs);
    } catch (error) {
        console.log(color.fg,color.bg,error,color.rs);
    }
}

module.exports = {
    minuteTick
}