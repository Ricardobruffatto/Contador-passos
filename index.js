function clicar() {
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtp = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        alert('Entrada inválida')
    } else{
        res.innerHTML = `Contando..`
        let inicio = Number(txti.value)
        let fim = Number(txtf.value)
        let passo = Number(txtp.value)

        for(let contador = inicio; inicio<=fim; contador += passo){
            res.innerHTML += `${contador}`
        }


    }


}