async function minuteTick(job) {
    try {
        let color = job.color;
        consoe.log(color.fg,color.bg,`${job.name}: ${new Date()}`,color.rs);            
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    minuteTick
}