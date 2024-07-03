// Declare variables below to save the different divs of your story.
let startButton =document.querySelector(".startbutton");
let storyOpening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
let buttons =document.querySelector(".buttons");
let walkInButton =document.querySelector(".walkinbutton");
let optionTwoScreen =document.querySelector(".option-two-screen");
let optionOneEnd =document.querySelector(".option-one-end");
let optionOne =document.querySelector(".option-one");
let optionTwoEnd =document.querySelector(".option-two-end");
let optionTwo =document.querySelector(".option-two");
let gameOverButton =document.querySelector(".gameoverbutton");
let continueButton =document.querySelector(".continuebutton");
let optionOneCont =document.querySelector(".option-one-cont");
let optionThree =document.querySelector(".option-three");
let optionFour =document.querySelector(".option-four");
let optionThreeEnd =document.querySelector(".option-three-end");
let gameOverButtonTwo =document.querySelector(".gameoverbuttontwo");
let optionFourCont =document.querySelector(".option-four-cont");
let optionFiveEnd =document.querySelector(".option-five-end");
let optionFive =document.querySelector(".option-five");
let optionSix =document.querySelector(".option-six");
let optionSixEnd =document.querySelector(".option-six-end");
let gameOverButtonThree =document.querySelector(".game-over-button-three");
let gameOverButtonFour =document.querySelector(".game-over-button-four");


// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


 startButton.addEventListener('click', function(){
storyOpening.style.display= "none"
optionOneScreen.style.display="block";
 });

 walkInButton.addEventListener('click', function(){
    optionOneScreen.style.display="none";
    optionTwoScreen.style.display="block";
    buttons.style.display="block";

});


optionOne.addEventListener('click', function(){
    optionTwoScreen.style.display="none";
    optionOneEnd.style.display="block";
 });

optionTwo.addEventListener('click', function(){
    optionTwoScreen.style.display="none";
    optionTwoEnd.style.display="block";

});

gameOverButton.addEventListener('click', function(){
    optionTwoEnd.style.display="none";
    storyOpening.style.display="block";
 });

continueButton.addEventListener('click', function(){
    optionOneEnd.style.display="none";
    optionOneCont.style.display="block";

});

optionThree.addEventListener('click', function(){
    optionOneCont.style.display="none";
    optionThreeEnd.style.display="block";
});

gameOverButtonTwo.addEventListener('click', function(){
    optionThreeEnd.style.display="none";
    storyOpening.style.display="block";
});

optionFour.addEventListener('click', function(){
    optionFourCont.style.display="block";
    optionOneCont.style.display="none";
 });

optionFive.addEventListener('click', function(){
    optionFiveEnd.style.display="block";
    optionFourCont.style.display="none";
 });

 optionSix.addEventListener('click', function(){
    optionFourCont.style.display="none";
    optionSixEnd.style.display="block";

 });

gameOverButtonThree.addEventListener('click', function(){
    optionFiveEnd.style.display="none";
    storyOpening.style.display="block";
 });

gameOverButtonFour.addEventListener('click', function(){
    optionSixEnd.style.display="none";
    storyOpening.style.display="block";
 });