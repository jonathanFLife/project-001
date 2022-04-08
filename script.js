let button = document.getElementById('but')
let res    = document.getElementById('res')
let num    = document.getElementById('num')
let num2   = document.getElementById('num2')
let num3   = document.getElementById('num3')

button.onclick = function (){
    res.innerHTML= ''
   let n = Number(num.value) 
   let n2= Number(num2.value)
   let n3= Number(num3.value)
    //alert(`${n}`)

    if ( n==0 || (num.value)>300 || 
        n2==0 || (num2.value) >100 || 
        n3==0 || (num3.value) >100 ){
alert('por favor preencha todos os espaços')
}   else{
    let m      = 300 - n // número de barras que falta
    let steela = m * 10 //  número de barras azuir que falta
    let steelg = m * 25 //  número de glittering que falta
    let darka  = m * 5000
    res.innerHTML= `<br>Falta ${steela} barras azuis.</br>`
    res.innerHTML+= `<br>Falta ${steelg} de pó.</br>`
    res.innerHTML+= `<br>Falta ${darka} de aço negro.</br>`

    let m1     = 100 - n2
    let quint  = m1 * 10
    let quint2 = m1 * 25
    let darkq  = m1 * 5000
    res.innerHTML+= `<br>Falta ${quint} de quintessence.</br>`
    res.innerHTML+= `<br>Falta ${quint2} de pó.</br>`
    res.innerHTML+= `<br>Falta ${darkq} de aço negro.</br>`

    let m2     = 100 - n3
    let bugi   = m2 * 10
    let bugi2  = m2 * 25
    let darkb  = m2 * 5000
    res.innerHTML+= `<br>Falta ${bugi} de bugiganga.</br>`
    res.innerHTMAL+= `<br>Falta ${bugi2}de pó.</br>`
    res.innerHTML+= `<br>Falta ${darkb} de aço negro.</br>`
    let po     = steelg + quint2 + bugi2
    let dark   = darka + darkq + darkb
    res.innerHTML+= `<br>Falta no total ${po} de pó.</br>`
    res.innerHTML+= `<br>Falta no total ${dark} de aço negro.</br>`

}

} 