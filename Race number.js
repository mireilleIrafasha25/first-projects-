let raceNumber = Math.floor(Math.random() * 1000);
let registeredearly=false;
let runnerAge=25;
if(runnerAge>18 && !registeredearly)
{
  console.log(`${raceNumber} will race at 09:30 am.`)
}
else if (runnerAge>18 && registeredearly)
{
console.log(`${raceNumber} will race at 11:00 am.`)  
}
else if (runnerAge<18){
  console.log(`${raceNumber} will race at 12:30 am.`)
}
else
{
  console.log('See the registration desk')
}
if(registeredearly && runnerAge>18){
raceNumber=raceNumber+1000;
console.log(raceNumber)
} 
