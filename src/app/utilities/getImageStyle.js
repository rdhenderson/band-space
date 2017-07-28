/*
* Takes an object that contains x, y, scale and rotate and returns proper style
*/
function getImageStyle({ xpos, ypos, scale, rotate }){
  return {
    width: `${180 * scale}px`,
    height: `${180 * scale}px`,
    // "marginLeft": `${(xpos * 100) - 150}%`,
    // "marginTop": `${(ypos * 100) - 100}%`,
    "transform": `rotate(${rotate}deg)`
  }
}

export default getImageStyle
