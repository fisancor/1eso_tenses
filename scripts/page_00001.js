//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 0;
    var weight = DecodeNumber('wY9nU25WEJ8=', 842, 0, 99999);
    var numOfAnswers = 35;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qsi0YhkwiM4=', 678, -1000, 1000),DecodeDecimal('j0gOm8qle8A=', 678, -1000, 1000),DecodeDecimal('j0gOm8qle8A=', 678, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps with the correct tense of the verb in brackets ------------------------------------  ";
    question.noChoice = false;
    choice = $('#idGap1_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5F6uRPdaz1A='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xo+bRh+um0Q='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap1_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('bJ0mVlhPgvZwciYLCkYtsA=='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap1_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Zr8u19yLlSU='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap1_4').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('y+kXfnsxEX5j95+f'));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap1_5').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('APbuBTPGZz7Fl27n'));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    choice = $('#idGap1_6').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('a2JJ3EoUsFlsjrDJLa6EwwmyU28='));
    var answer6 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer6);
    choice = $('#idGap1_7').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('33uyel42NEyX7gR/'));
    var answer7 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer7);
    choice = $('#idGap1_8').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xXVYaTILfuw='));
    var answer8 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer8);
    choice = $('#idGap1_9').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('55YlqICsZLQ='));
    var answer9 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer9);
    choice = $('#idGap1_10').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KcGWuW22Cn2ZVADnyNtlwg=='));
    var answer10 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer10);
    choice = $('#idGap1_11').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('F9sTa3BWcvM='));
    var answer11 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer11);
    choice = $('#idGap1_12').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('9tPC5ouI+5nleO4e'));
    var answer12 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer12);
    choice = $('#idGap1_13').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xXVYaTILfuw='));
    var answer13 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer13);
    choice = $('#idGap1_14').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('wPi046g0g1ThZuCw'));
    var answer14 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer14);
    choice = $('#idGap1_15').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('NlFOsoV2tWA='));
    var answer15 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer15);
    choice = $('#idGap1_16').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xXVYaTILfuw='));
    var answer16 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer16);
    choice = $('#idGap1_17').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('yd5YjXG5mV8='));
    var answer17 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer17);
    choice = $('#idGap1_18').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('tfPAL90TeRIPZEJI'));
    var answer18 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer18);
    choice = $('#idGap1_19').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xXVYaTILfuw='));
    var answer19 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer19);
    choice = $('#idGap1_20').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('enT1XUBPEh4='));
    var answer20 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer20);
    choice = $('#idGap1_21').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('X3UEMydEZkQ='));
    var answer21 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer21);
    choice = $('#idGap1_22').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('AiIzqsgUfd4='));
    var answer22 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer22);
    choice = $('#idGap1_23').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('djHLmM/HaaKNYJtF'));
    var answer23 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer23);
    choice = $('#idGap1_24').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vGwvgK4PAdE='));
    var answer24 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer24);
    choice = $('#idGap1_25').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KEjaJqvlJew='));
    var answer25 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer25);
    choice = $('#idGap1_26').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xXVYaTILfuw='));
    var answer26 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer26);
    choice = $('#idGap1_27').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('zLGEkNbOPCIQitu2'));
    var answer27 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer27);
    choice = $('#idGap1_28').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('fqIkTRn+4T8='));
    var answer28 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer28);
    choice = $('#idGap1_29').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('4zQaxyK2qeM='));
    var answer29 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer29);
    choice = $('#idGap1_30').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('C6aOU9wp67U='));
    var answer30 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer30);
    choice = $('#idGap1_31').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('0+DkZboUQg0='));
    var answer31 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer31);
    choice = $('#idGap1_32').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('T9X6vj0zSeo='));
    var answer32 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer32);
    choice = $('#idGap1_33').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('rTtk2XTuhY9xqGz3'));
    var answer33 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer33);
    choice = $('#idGap1_34').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('uxhhIPFiy9MfdRXb'));
    var answer34 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer34);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    ClearFillTheGap(1,0);
    ClearFillTheGap(1,1);
    ClearFillTheGap(1,2);
    ClearFillTheGap(1,3);
    ClearFillTheGap(1,4);
    ClearFillTheGap(1,5);
    ClearFillTheGap(1,6);
    ClearFillTheGap(1,7);
    ClearFillTheGap(1,8);
    ClearFillTheGap(1,9);
    ClearFillTheGap(1,10);
    ClearFillTheGap(1,11);
    ClearFillTheGap(1,12);
    ClearFillTheGap(1,13);
    ClearFillTheGap(1,14);
    ClearFillTheGap(1,15);
    ClearFillTheGap(1,16);
    ClearFillTheGap(1,17);
    ClearFillTheGap(1,18);
    ClearFillTheGap(1,19);
    ClearFillTheGap(1,20);
    ClearFillTheGap(1,21);
    ClearFillTheGap(1,22);
    ClearFillTheGap(1,23);
    ClearFillTheGap(1,24);
    ClearFillTheGap(1,25);
    ClearFillTheGap(1,26);
    ClearFillTheGap(1,27);
    ClearFillTheGap(1,28);
    ClearFillTheGap(1,29);
    ClearFillTheGap(1,30);
    ClearFillTheGap(1,31);
    ClearFillTheGap(1,32);
    ClearFillTheGap(1,33);
    ClearFillTheGap(1,34);

}






