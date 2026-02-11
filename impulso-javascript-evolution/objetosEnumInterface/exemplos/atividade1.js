"use strict";
let valorAny;
valorAny = 3;
valorAny = "ola";
valorAny = true;
let ValorString = "teste";
ValorString = valorAny;
let ValorString2 = "teste";
ValorString = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(ValorString, ValorString2);
somarString("ola", "como vai");
