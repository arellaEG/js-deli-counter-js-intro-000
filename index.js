function takeANumber(katzDeliLine, name){
  var i=katzDeliLine.length +1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${i} in line.`
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  else {console.log(`Currently serving ${katzDeliLine[0]}.`);}
  katzDeliLine.pop(0)
  }
