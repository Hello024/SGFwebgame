

export class map{
  static thing;
  static unit
}
genmap(13)
function biggerlarger(row, size){

  return  size - Math.abs((size-1)/2-row)

}
function checkmake (i, size, b, ugh){

  if (Math.abs(b-(size-1)/2+ugh)<=biggerlarger(i,size)/2){

    return true
  }
  else{
    return false
  }
}
function thisistedius(size){
  if ((size-1)/2%2 == 1){
    alert (0.2)
    return 0.2
  }
  if ((size-1)/2%2 == 0){
    alert (-0.2)
    return -0.2
  }
  else{
    alert("error in the miserable mapgen part")
  }
}

function genmap(size){
  map.thing = []
  map.unit = []

  const ugh = thisistedius(size)



  for (let i = 0; i<size; i++){
    let templist = []
    for (let b = 0; b<size; b++){
      if (checkmake(i, size, b, ugh)){
        templist.push(0)


      }else{templist.push(-1)}}


    map.thing.push(templist)
    map.unit.push(templist)
  }
  alert(map.thing[0])

}

