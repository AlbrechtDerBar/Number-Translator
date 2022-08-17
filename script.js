var hexLib = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function dec_to_bin(input) {
    var bin_final = "";
    var bin = [];
    while(input != 0) {
      bin.unshift(input % 2);
      input = (input - (input % 2)) / 2;
    }
    for(i = 0; i < bin.length; i++) {
      bin_final += bin[i];
    }
    return bin_final;
}

function dec_to_hex(input) {
  var hex_final = "";
  var hex = [];
  while(input != 0) {
    hex.unshift(hexLib[input % 16]);
    input = (input - (input % 16)) / 16;
  }
  for(i = 0; i < hex.length; i++) {
    hex_final += hex[i];
  }
  return hex_final;
}

function bin_to_dec(input) {
  var dec = 0;
  for (i = 0; i < input.length; i++) {
    dec += Math.pow(2, (input.length - i) - 1) * input[i];
  }
  return dec;
}

function hex_to_dec(input) {
  var dec = 0;
  for(i = 0; i < input.length; i++) {
    var index = hexLib.indexOf(input[i].toUpperCase());
    dec += Math.pow(16, (input.length - i) - 1) * index;
  }
  return dec;
}

function getTranslate() {
  var input = document.getElementById("inputSelection").value;
  var output = document.getElementById("outputSelection").value;

  switch (true) {
    case (input === "Decimal" && output === "Binary"):
      var input = document.getElementById("input").value;
      display(dec_to_bin(input));
    break;

    case (input === "Decimal" && output === "Hex"):
      var input = document.getElementById("input").value;
      display(dec_to_hex(input));
    break;

    case (input === "Binary" && output === "Decimal"):
      var input = document.getElementById("input").value;
      display(bin_to_dec(input));
    break;

    case (input === "Binary" && output === "Hex"):
      var input = document.getElementById("input").value;
      var input2 = bin_to_dec(input)
      display(dec_to_hex(input2));
    break;

    case (input === "Hex" && output === "Binary"):
      var input = document.getElementById("input").value;
      var input2 = hex_to_dec(input)
      display(dec_to_bin(input2));
    break;

    case (input === "Hex" && output === "Decimal"):
      var input = document.getElementById("input").value;
      display(hex_to_dec(input));
    break;

    default:
      window.alert("please select two different number systems");
  }
}

function display(num) {
  var output = document.getElementById("output");
  output.value = num;
}