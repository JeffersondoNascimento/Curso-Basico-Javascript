var val = [8,1,3,4,7,9]
val.sort()
/*
for(var pos=0; pos < val.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}
*/
for( var pos in val) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}


