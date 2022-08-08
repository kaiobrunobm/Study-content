let valores = [4, 6, 7, 3 ,8]
valores.sort()
console.log(`Nossos dados são ${valores}`)
/*
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let pos in valores) {
    if(pos == -1){
        console.log(`Numero não encontrado`)
    } else {
        console.log(`A posição ${pos} tem o valor ${valores[pos]} e a posição de 7 é ${valores.indexOf(1)}`)   
    }
}
