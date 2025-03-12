function printRectangle (){
  for(let i = 0;i<height;i++){
   let x =""
    for(let j=0;j<width;j++){
      x += text[(j+i*width)%text.length]
    } 
    console.log(x)
  }
}
/**
 * ini buka mdn jg gaboleh kan??????
 */
let width = 13
let height = 5
let text = "Hello World"
printRectangle(width,height,text)
