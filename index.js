function takeANumber(katzDeliLine, name){
  var i=katzDeliLine.length +1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${i} in line.`
}


function nowServing(katzDeliLine){
    for (let i=0; i<katzDeliLine; i++){
      if (katzDeliLine.length===0){
        return 'There is nobody waiting to be served!'}
        else {return `Currently serving ${katzDeliLine[0]}`
            katzDeliLine.pop(i)}
    }
  }
