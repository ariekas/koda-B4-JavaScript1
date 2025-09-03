// buatkan saya segitiga siku siku

for(let Baris = 0; Baris < 6; Baris++)
{
    let Simbol = ""
    for(let Tambah = 0; Tambah <= Baris; Tambah++){
        Simbol += "*"
    }
    
    console.log(Simbol)
}

let Baris = 0
do{
    Simbol = ""
    let Tambah = 0 
    do{
        Tambah++
        Simbol += "*"
    }while (Tambah <= Baris)
    console.log(Simbol)
    Baris++
} while(Baris < 6)




