cekkoin = (angka)=>{
    hasil = 0
    do{
        if(angka/25>0){
            hasil = hasil+ Math.floor(angka/25)
            angka = angka%25
        }
        if(angka/10>0){
            hasil = hasil+ Math.floor(angka/15)
            angka = angka%15
        }
        if(angka/5>0){
            hasil = hasil+ Math.floor(angka/5)
            angka = angka%5
        }
        if(angka/1>0){
            hasil = hasil+ Math.floor(angka/1)
            angka = angka%1
        }
        return hasil
    }while(angka>0)
}

console.log(cekkoin(49))