var num  = [5,4,3,2,1,7]
num.push(6)
num.sort()
console.log(num)
console.log(`Vetores posições ${num.length}`)
console.log(`O primeiro vetor é ${num[0]}`)
var pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
}else {
    console.log(`O valor 4 está na posição ${pos}`)
}