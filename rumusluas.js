function hitungLuasKerucut(jari, tinggi){
    if (jari === undefined || jari === null) throw 'Parameter tidak boleh null'
    if (typeof jari !== 'number') return 'Parameter Jari harus Angka'
    if (typeof tinggi !== 'number') return 'Parameter Tinggi harus Angka'
    // if (jari === undefined || jari === null) throw 'Parameter tidak boleh null'


    let hasil = jari*jari*tinggi/3*Math.PI
    hasil = hasil.toFixed(2)
    return hasil = parseFloat(hasil)
    // return hasil
}
export default hitungLuasKerucut