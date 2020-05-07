"use strict"

var dictionary = {
    0: "DCMTRIX",
    1: "CHICKEN",
    2: "KITCHEN",
    3: "NOOB",
    4: "QUARTZ",
    5: "HAHHAH"
};

var tab = [];
var word;
var numGuess = 0;
var guessBuffer = "";
var guess;
var numWord;
var del = "off"; // delete element toggle

function init(num)
{
    word = dictionary[num];
}

function checkExist(char,string)
{
    for(var i = 0; i < string.length; i++)
    {
        if(char === string[i])
            return true;
    }
    return false;
}

function guessing(id)
{
    init(id);   
    // force to enter guess  
    do
    {
        guess = prompt("Nhập đi em :))");

    }while(guess == false);

    // check if guess was right
    if(checkExist(guess,word))
    {
        // check if the word has been guessed before
        if(!checkExist(guess,tab))
        {
            show();
        }   
        else
        {
            // force to enter guess
            do
            {
                guess = prompt("Chữ này đoán rồi, nhập lại em ei: ");
            }while(guess == false || checkExist(guess,tab));
            show();
        }
    }
    else
    {
        numGuess++;
        document.getElementById("check").innerHTML = "Bạn đã đoán sai " + numGuess + " lần";
        drawMan();
    }

    if(numGuess == 6)
    {
        setTimeout(function () {alert("Thua rồi, nhóc con!");},800);
        numGuess = 0;
        showAnswer();
        /*xác nhận chơi tiếp
        var cf = confirm("Bạn có muốn chơi tiếp? ");
        if(cf == true) 
            alert("Bạn chọn chơi tiếp.");
        else alert("Cút");*/
    }
    else if(checkWin())
    {
        setTimeout(function () {alert("Chúc mừng chiến thắng!")},800);
        numGuess = 0;
    }
}

function checkWin()
{
    for(var i =0; i < word.length; i++)
    {
        if(!checkExist(tab[i], word))
        {
            return false;
        }
    }
    return true;
}

