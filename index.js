function calcular() {
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtp = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        alert('Entrada inválida')
    } else {
        res.innerHTML = `Contando..`
        let inicio = Number(txti.value)
        let fim = Number(txtf.value)
        let passo = Number(txtp.value)

        if(passo<=0){
            window.alert('Passo inválido! Considerando passo 1')
            passo = 1
        }

        if (inicio < fim) {

            //contagem crescente
            for (let contador = inicio; contador <= fim; contador += passo) {
                res.innerHTML += `${contador} `
            }

        } else {
            //contagem decrescente
            for(let contador = inicio; contador>=fim; contador-=passo){
                res.innerHTML = `${c} \u{1F449}`
            }
        }



    }


}