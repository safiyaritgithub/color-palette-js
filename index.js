const generateBtn=document.getElementById("generateBtn")
const singleHexColorGenerator=()=>{
  const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

  let hexColor="#"

  for (let i=0;i<6;i++){
    let random =Math.floor(Math.random()* hex.length)
    hexColor +=hex[random]
  }
  return hexColor
}

const colorpaletteGenerator =()=>{
  const colorpalette=[]
  for (let i=0;i<4;i++){
   colorpalette.push(singleHexColorGenerator())
  }
  return colorpalette;
}



const renderColorPalette=()=>{
const colorsContainer=document.querySelector(".colors_container")

colorsContainer.innerHTML=""

  const colorpalette = colorpaletteGenerator()
colorpalette.forEach((color,i)=>{
  const colorDiv = document.createElement("div")
  colorDiv.id=`color${i+1}`
  colorDiv.style.background=color;
colorDiv.className="colorBox"

  const colorTag=document.createElement('p')
  colorTag.id=`color${i+1}Tag`
  colorTag.className="colorTag"
  colorTag.innerHTML=color
  colorDiv.appendChild(colorTag)

colorsContainer.appendChild(colorDiv)

})
const copytoClipBoard =(id)=>{
const el = document.getElementById(id)
if (!navigator.clipboard || !navigator.clipboard.writeText) {
  alert("Copied to clipboard.");
  return;
}

navigator.clipboard
.writeText(el.innerText)
.then(()=>{
  alert("copied to clipboard")
})
.catch((err)=>{
  alert("could not copy")
})
}



  const colorTags=document.querySelectorAll(".colorTag")
  console.log("colorTags",colorTags);
  colorTags.forEach((colorTag,i)=>{
    colorTag.addEventListener("click",()=>
    copytoClipBoard(`color${i+1} Tag`) )

   
  }
  )

}
generateBtn.addEventListener("click",renderColorPalette)