import "./style.css";
const inText = document.querySelector<HTMLTextAreaElement>("#inText");
const outText = document.querySelector<HTMLTextAreaElement>("#outText");


const main = (event: Event) => {
  const inValue = (event?.currentTarget as HTMLTextAreaElement).value;
  const splitInValue = inValue.trim().split(" ").filter((val)=>!!val);
  let outValue = "";
  
  for (let index = 0; index < splitInValue.length; index++) {
    if(index===splitInValue.length-1){ //last word doesn't need space
      outValue+= splitInValue[index] 
    }else if(splitInValue[index].length===1){ //word is short, shoud have hard space
      outValue+= `${splitInValue[index]}\u00A0`;
    }else{                             //word is long, shoud have normal space
      outValue+= `${splitInValue[index]} `;
    }
    
  }
  if (outText) {
    outText.value = outValue;

  }
};
inText?.addEventListener("change", main);
inText?.addEventListener("input", main);
