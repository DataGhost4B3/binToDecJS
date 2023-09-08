//BINARY TO DECIMAL CONVERTER

function conv(n) {      //function to carry out the conversion
    NUM = 0;            //initialize the sum to be output
    for (let i = 0; i < n.length; i++) {        //loop
        NUM += parseInt(n[i]) * (2 ** (n.length - i - 1));
    }
    return NUM;
}

//defining new error for empty string input (containing only space and/or tabs)
function emptystringError(m) {
    const err = new Error(m);
    err.code = 'emptystring';
    return err;
}

function ch(s) {        //function to check if the input is legal
    if (!(s.split(" ").join("").split("\t").join("").split("").length)) {
        throw new emptystringError("You entered an empty string!");     //throw exception if string contains only spaces/tabs (looks empty)
    }
    let trueds = "10";
    for (let d of s) {  //loop to check whether each character of input string is only either 0 or 1
        if (!(trueds.includes(d))) return false;}    //if illegal character found, indicate so by returning false
    return true;                                //otherwise return true (this line exists outside of loop)
}

function bintodec(uinput) {     //main function to handle the input
    if (!(ch(uinput))) throw new Error("Input is NOT a binary string!");    //invoke ch() function, throw exception if input is not valid
    return conv(uinput);                                    //otherwise invoke conv() to convert input to decimal
}
