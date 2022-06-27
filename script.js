function submitAnswer(answer, check, rightAnswer){
    let answerEntered = document.getElementById(answer).value;
    let answerEnteredLcase = answerEntered.toLowerCase();
    let answerEnteredHash = stringToHash(answerEnteredLcase);
    if (rightAnswer === answerEnteredHash) {
        console.log("true");
        document.getElementById(check).innerHTML = `<img src="images/check_icon.svg" alt="error" width="50" height="50">`;
    } else {
        console.log("false");
        document.getElementById(check).innerHTML = `<img src="images/error_icon.svg" alt="error" width="50" height="50">`;
    }
}

function stringToHash(string) {
                  
    var hash = 0;
      
    if (string.length == 0) return hash;
      
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
      
    return hash;
}

function getFlagExercise1(answer, flagField){
    let citation = document.getElementById(answer).value;
    citation = citation.trim();
    if (citation.includes("“Process.” Merriam-Webster.com Dictionary, Merriam-Webster, https://www.merriam-webster.com/dictionary/process.")) {
        const flag = makeid(30);
        document.getElementById(flagField).style.visibility = 'visible';
        document.getElementById(flagField).innerHTML = flag;
    }
    else{
        document.getElementById(flagField).innerHTML = "Error. Try again.";
    }
}

function getFlag(answer, rightAnswer, flagField){
    let answerEntered = document.getElementById(answer).value;
    answerEntered = answerEntered.trim();
    answerHash = stringToHash(answerEntered);
    if (answerHash === rightAnswer) {
        const flag = makeid(30);
        document.getElementById(flagField).innerHTML = flag;
    }
    else{
        document.getElementById(flagField).innerHTML = "Error. Try again.";
    }
   
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    return result;
    }

function checkFlag(flagEntered, finishField, finishedSection){
    flag = document.getElementById(flagEntered).value;
    console.log(flag);
    if (flag.length == 30) {
        console.log('correct');
        document.getElementById(finishField).innerHTML = 'Congratulations! You captured the flag!';
        document.getElementById(finishedSection).innerHTML = `<img src="images/lock_open.svg" alt="error" width="50" height="50">`;
    }
    else{
        console.log('try again');
        document.getElementById(finishField).innerHTML = 'try again';
    }
    if (finishField == "finish_5") {
        document.getElementById(finishField).innerHTML = 'Congratulations! You captured the flag! Copy this flag again and email it to your instructor to finish the game.';
    }
}

function showSection(section){
    let x = document.getElementById(section);
    x.style.display = 'block';
}

let hashAnswer = stringToHash('abstract');
console.log(hashAnswer);