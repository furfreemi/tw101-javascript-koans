"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

// Write your JavaScript here
function changeElementText(element, answer) {
    $(element).text(answer);
}

function changeElementHTML(element, answer) {
    document.getElementById(element).innerHTML = answer;
}

function correctAdvertisement(advert) {
    // should really be 3 but just need to check for length 2 as urdu line access is hardcoded
    if (advert.length >= 2){
        var given = "";
        var count = 0;
        var corrected = "";

        for (var i = 0; i < advert.length; i++){
            // couldn't get new lines to work without using html?
            given += advert[i].join(" ") + "<br>";
            count += advert[i].length;
            if (i == 1){
                corrected += advert[i].reverse().join(" ") + " ";
            } else {
                corrected += advert[i].join(" ") + " ";
            }
        }
        // span ids:
        //  originalText
        //  correctedText
        //  wordCount
        changeElementHTML("originalText", given);
        changeElementText("#wordCount", count);
        changeElementText("#correctedText", corrected);
    }
}