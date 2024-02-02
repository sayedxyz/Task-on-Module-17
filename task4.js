// Task-->> 4
/* Nested if else */

const scoreMe = 68 ;
const scoreFriend = 39 ;

if (scoreMe > 80)
{
if(scoreFriend > 80){
    console.log( 'Go for a lunch');
}
else {
    if( scoreFriend >= 60 && scoreFriend < 80){
        console.log('Good luck next time');
    }

else {
    if( scoreFriend >= 40 && scoreFriend < 60){
        console.log('Message Unseen');
    }

else {
    if( scoreFriend < 40){
        console.log('Blocked');
    }


    }
    }
    }
}
else {
    console.log('Go home and sleep with sadness');
}