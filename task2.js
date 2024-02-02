// Task-->> 2
/* BMI Calculator and Health Category */

const weight = 75 ;
const height = 1.72 ;
const BMI = (weight/((height)^2));
console.log(BMI.toFixed(2));

if(BMI < 18.5){
    console.log('You are underweight');
}
else if ( BMI >= 18.5 && BMI <= 24.9 ){
    console.log('You are normal');
}
else if ( BMI >= 25 && BMI <= 29.9 ){
    console.log('You are overweight');
}
else{
        console.log('You are  obese');
    }