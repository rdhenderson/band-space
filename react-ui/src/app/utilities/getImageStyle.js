/*
* Takes an object that contains x, y, scale and rotate and returns proper style
*/
function getImageStyle({ xpos, ypos, scale, rotate }){
  return {
    width: `${200 * scale}px`,
    height: `${200 * scale}px`,
    "marginLeft": `${(xpos * 100) - 50}%`,
    "marginTop": `${(ypos * 100) - 50}%`,
    "transform": `rotate(${rotate}deg)`
  }
}

export default getImageStyle
