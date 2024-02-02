//  Task-->> 6
/*
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const ageChildren = 8 ;
const isStudent = true ;
const isSeniorCitizen = true ;
const ageSeniorCitizen = 66 ;

if( ageChildren < 10){
    console.log("Free");}

 else if ( isStudent === true ) {
    console.log("Get 50% Discount") ;
}
else if( isSeniorCitizen === true && ageSeniorCitizen >= 60 )
{ 
    console.log("Get 15% Discount");
}
else{
    console.log("Regular Ticket fare 800 taka");
}
