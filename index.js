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
        name: `fiveSecondsTick`, title: `Five seconds tick`, prog: `*/5 * * * * *`, 
        func: require('./jobs/fiveSecondsTick').fiveSecondsTick, 
        color: {fg: cor.FgGreen, bg: cor.BgWhite}, 
        enabled: true
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

// Função para aguardar <ms> milisegundos (usada nos testes) ...
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
global.sleep = sleep;

async function jobExecuter(job) {
    let color = job.color;
    let startTime = new Date();
    try {
        console.log(`\n`);
        console.log(color.fg,color.bg,`Job ${job.name} started at ${startTime} - ${job.title}`,color.rs);
        //********************************
        //* Execução da função do job em si
        await job.func(job);
        //********************************
        let endTime = new Date();
        let elapsed = Math.abs(endTime - startTime) / 1000;
        console.log(color.fg,color.bg,`Job ${job.name} ended at ${endTime}. Elapsed: ${elapsed}s`,color.rs);
    } catch (error) {
        let errorTime = new Date();
        let elapsed = Math.abs(errorTime - startTime) / 1000;
        console.log(color.fg,color.bg,`Job ${job.name} ended with error at ${errorTime}. Elapsed: ${elapsed}s`,color.rs);
        console.log(color.fg,color.bg,error,color.rs);
    }
}

jobs.forEach((job)=>{
    if (job.enabled) {
        job.color.rs = cor.Reset;
        schedule.scheduleJob(job.prog, jobExecuter.bind(null,job));
    }
})

console.log('\n');
console.log(`>>> ${jobs.length} jobs scheduled <<<`);
console.log('\n');



