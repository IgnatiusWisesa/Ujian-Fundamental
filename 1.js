lelang =(menit)=>{
    harga = 10000
    for(i=1;i<=menit;i++){
        if(i%4==0){
            harga = harga + Math.ceil(harga*0.1)
        }
        else{
            harga = harga + Math.ceil(harga*0.2)
        }
        if(harga>=30000000){
            return 'Barang Sudah Terjual'
        }
    }
    return harga
}


console.log(lelang(49))