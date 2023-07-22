
const colorCodesRange900 = ["red","#880e4f","#4a148c","#311b92","#1a237e",
"#0d47a1","#01579b","#006064","#004d40","#1b5e20","#33691e","#827717",
"#f57f17","#ff6f00","#e65100","#bf360c","#3e2723","#212121","#263238"];

const colorCodesRange300 = ["green","#f06292","#ba68c8","#9575cd","#7986cb",
"#64b5f6","#4fc3f7","#4dd0e1","#4db6ac","#81c784","#aed581","#dce775",
"#fff176","#ffd54f","#ffb74d","#ff8a65","#a1887f","#e0e0e0","#90a4ae"];

function getRandomColor(colorCodes){
    return colorCodes[Math.floor(Math.random()*20)]
  }
  
  function getRandomFontWeight()
  {
    const fontWeights = [100, 200, 300, 400, 500, 1000],
          fontWeightsLength = fontWeights.length;
  
    return fontWeights[Math.floor(Math.random()*fontWeightsLength)]
  }
  





  
  
 const text= setInterval(()=>{

    const main= document.querySelector('main');
    main.innerHTML = ''
  
    const h1 = document.createElement('h1');
  
    const split = '30 Days of JavaScript Challenge 2023 By Asabeneh Yetayeh'.split('')
  


    split.forEach(character => {
      const span = document.createElement('span');
      span.style.color = getRandomColor(colorCodesRange300)
      span.textContent = character
  
     h1.appendChild(span)
    })
  
    h1.style.fontWeight = getRandomFontWeight();
    
    main.style.backgroundColor = getRandomColor(colorCodesRange900)
  
    main.append(h1)
  }, 2000)
  
  