import { expect } from "chai"
import hitungLuasKerucut from "./rumusluas.js"

describe ("Testing Rumus Kerucut",function(){
    it('Hitung Luas Kerucut dengan parameter yang Valid', function() {
        const jari = 10 / 3.14
        const tinggi = 30
        const hasil = hitungLuasKerucut(jari,tinggi)
        // parseFloat(hasil)
        expect(hasil).to.equal(318.63)
    })

    it('Hitung Luas Kerucut dengan input parameter string', function() {
        const jari = 20
        const tinggi = '30'
        const hasil = hitungLuasKerucut(jari,tinggi)
        expect(hasil).to.equal('Parameter Tinggi harus Angka')
    })

    it('Hitung Luas Kerucut dengan parameter kosong', function() {
        // const jari = null
        // const tinggi = null
        const hasil = function(){
            hitungLuasKerucut()
        }
        expect(hasil).to.throw('Parameter tidak boleh null')
    })
})