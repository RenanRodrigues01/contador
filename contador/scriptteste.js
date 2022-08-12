function calcular(){
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pass = document.getElementById('pass')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length ==0 || pass.value.length ==0){
        res.innerHTML = 'impossivel fazer a conta'
    }else{
        res.innerHTML = `contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
    if(p<=0){
        alert('impossivel contar, considerando o passo 1')
        p = 1
    }
    if(i<f){
        //contagem crescente
        for(let c=i; c<=f;c += p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }else if(i>f){
        //contagem decresent
        for(let c=i;c>=f;c -= p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }
}
    res.innerHTML += `\u{1f3c1}`
}