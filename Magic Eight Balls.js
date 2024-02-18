let userName=""
//greeting user
let checkname=userName? `Hello ${userName}`:'Hello'
console.log(checkname)
//Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
const userQuestion="do you want Magic Eight Ball"
console.log(userQuestion)
//We need to generate a random number between 0 and 7.
let randomnumber=Math.floor(Math.random()*8)
console.log(randomnumber)
//random number 
let checkrandom=Math.random()*6
console.log(checkrandom)
//Create one more variable named eightBall, and set it equal to an empty string.
let eightBall=''
//.We need to create a control flow that takes in the randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would return
let eightballsol= function()
{
  //e randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would return
  
  switch(randomnumber)
{
case 0:
  console.log('It is certain')
  break;
   case 1:
  console.log('It is decidedly so')
  break;
   case 2:
  console.log('Reply hazy try again')
  break;
   case 3:
  console.log('cannot predict now')
  break;
   case 4:
  console.log('Don not count on it')
  break;
   case 5:
  console.log('My source say no')
  break;
   case 6:
  console.log('outlook not so good')
  break;
   case 7:
  console.log('Signs point to yes')
  break;
}
}
//If the randomNumber is 0, then save an answer to the eightBall variable; if randomNumber is 1, then save the next answer, and so on
 sol=eightballsol();
console.log(sol)
