// Persegi
let TinggiPersegi = 5;
for (let i = 0; i < TinggiPersegi; i++) {
  let simbol = "";
  if (i === 0 || i === TinggiPersegi - 1) {
    for (let k = 0; k < TinggiPersegi; k++) {
      simbol += "* ";
    }
  } else {
    for (let e = 0; e < TinggiPersegi; e++) {
      if (e == 0) {
        simbol += "*";
      } else if (e === TinggiPersegi - 1) {
        simbol += " *";
      } else {
        simbol += "  ";
      }
    }
  }
  console.log(simbol);
}

// Segitiga
let n = 5
for (let i = 1; i <= n; i++){
    let output = ""
    for(let j = i; j <= n; j++){
        output += "0"
    }
    for(let h = 1; h <= i; h++){
        output += "* "
    }
    console.log(output)
}

// Labirin 
for (let k = 0; k < 5; k++) {
  let hasil = "";
  if (k % 2) {
    for (let g = 0; g < 5; g++) {
      hasil += " ";
    }
    // if( k == 1 ){
    //   hasil += "*";
    // }
    hasil += "*";

  } else {
    for (let q = 0; q < 6; q++) {
      hasil += "*";
    }
  }
  console.log(hasil);
}
