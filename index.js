const schedule = require('node-schedule')

const {cor} = require('./cor')

//******/ 
//
// Sintaxe do node-schedule: <seconds> <minutes> <hours> <dayofmonth> <monthofyear> <dayofweek>
//                               *         *        *          *            *            *
//******/ 

const jobs = [
    {
        name: `secondTick`, title: `Segundo tick`, prog: `*/1 * * * * *`, 
        func: require('./jobs/secondTick').secondTick, 
        color: {fg: cor.FgWhite, bg: cor.BgBlack}, 
        enabled: false
    },
    {
        name: `tenSecondsTick`, title: `Ten seconds tick`, prog: `*/10 * * * * *`, 
        func: require('./jobs/tenSecondsTick').tenSecondsTick, 
        color: {fg: cor.FgBlack, bg: cor.BgCyan}, 
        enabled: true
    },
    {
        name: `tirthySecondsTick`, title: `Tirthy seconds tick`, prog: `*/30 * * * * *`, 
        func: require('./jobs/tirthySecondsTick').tirthySecondsTick, 
        color: {fg: cor.FgWhite, bg: cor.BgMagenta}, 
        enabled: true
    },
    {
        name: `minuteTick`, title: `Minute tick`, prog: `0 * * * * *`, 
        func: require('./jobs/minuteTick').minuteTick, 
        color: {fg: cor.FgBlack, bg: cor.BgYellow}, 
        enabled: true
    },
    {
        name: `hourTick`, title: `Hour tick`, prog: `0 0 * * * *`, 
        func: require('./jobs/hourTick').hourTick, 
        color: {fg: cor.FgGreen, bg: cor.BgBlack}, 
        enabled: true
    },
    {
        name: `moonTick`, title: `Moon tick`, prog: `0 0 12 * * *`, 
        func: require('./jobs/moonTick').moonTick, 
        color: {fg: cor.FgYellow, bg: cor.BgBlack}, 
        enabled: true
    },
    {
        name: `workDayTick`, title: `Work Day tick`, prog: `0 0 12 * * 1,2,3,4,5`, 
        func: require('./jobs/workDayTick').workDayTick, 
        color: {fg: cor.FgCyan, bg: cor.BgBlack}, 
        enabled: true
    },
    {
        name: `monthTick`, title: `Month tick`, prog: `0 0 12 1 * *`, 
        func: require('./jobs/monthTick').monthTick, 
        color: {fg: cor.FgBlue, bg: cor.BgBlack}, 
        enabled: true
    },
    {
        name: `cristhmasTick`, title: `Cristhmas tick`, prog: `0 0 12 25 12 *`, 
        func: require('./jobs/cristhmasTick').cristhmasTick, 
        color: {fg: cor.FgRed, bg: cor.BgWhite}, 
        enabled: true
    },
]

jobs.forEach((job)=>{
    if (job.enabled) {
        schedule.scheduleJob(job.prog, job.func);
    }
})

const getJobColor = function (fileName) {
    var path = require('path');
    var scriptName = path.basename(fileName).split('.')[0];
    let j = jobs.find((x)=>x.name == scriptName);
    j.color.rs = cor.Reset;
    return j.color;
}

global.getJobColor = getJobColor;


