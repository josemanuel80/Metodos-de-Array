
const array=[];


const arrayInput=document.getElementById('arrayInput');
const submitButton=document.getElementById('submitButton');
const text=document.getElementById('textArray');
const textPop=document.getElementById('textPop');
const textLength=document.getElementById('textLength');
const textUnshift=document.getElementById('textUnshift');
const popButton=document.getElementById('popButton');
const resultPop=document.getElementById('resultPop');
const lengthResult=document.getElementById('lengthResult');
const inputUnshift=document.getElementById('inputUnshift');
const resetButton=document.getElementById('resetButton');
const allTexts=document.querySelectorAll('textarea');
const allInputs=document.querySelectorAll('input');
const inputShift=document.getElementById('inputShift');
const shiftButton=document.getElementById('shiftButton');
const shiftResult=document.getElementById('shiftResult');
const textSplice1=document.getElementById('textSplice1');
const textSplice2=document.getElementById('textSplice2');
const textSplice3=document.getElementById('textSplice3');
const textReverse=document.getElementById('textReverse');
const textJoin=document.getElementById('textJoin');


submitButton.addEventListener('click',submit);

arrayInput.addEventListener('keyup', pressEnter);
function pressEnter(event){
    // console.log(event);
    if(event.key==='Enter'){
        event.preventDefault();
        submitButton.click();
    }
}
function submit(event){
    array.push(arrayInput.value);
  arrayInput.value='';
    text.value=array;
    textPop.value=array;
    textLength.value=array;
    textUnshift.value=array;
    textShift.value=array;
    textSplice1.value=array;
    textSplice2.value=array;
    textSplice3.value=array;
    textSlice.value=array;
    textReverse.value=array;
    textJoin.value=array;
}

resetButton.addEventListener('click',reset);

function reset(event){
    array.splice(0,array.length);
    const allText=Array.from(allTexts);
    console.log(allText);
    allText.forEach((text)=>{
        text.value=('');
    });
    const imputs=Array.from(allInputs);
    imputs.forEach((imput)=>{
        imput.value=('');
    })
    location.reload();
}



popButton.addEventListener('click', pop);

function pop(event){
    const result=array.pop();
    textPop.value=array;
resultPop.value=result;
}

lengthButton.addEventListener('click',length);

function length(event){
    const result=array.length;
    lengthResult.value=result;

}

unshiftButton.addEventListener('click',unshift);

function unshift(event){
const input=inputUnshift.value;
    array.unshift(input);
    textUnshift.value=array
}

shiftButton.addEventListener('click',shift);

function shift(event){
    const result= array.shift(inputShift);
shiftResult.value=result;
}

const splicebutton1=document.getElementById('spliceButton1').addEventListener('click',splice1);
const spliceButton2=document.getElementById('spliceButton2').addEventListener('click',splice2);
const spliceButton3=document.getElementById('spliceButton3').addEventListener('click', splice3);

function splice1(event){
    const param1=document.getElementById('param1').value;
    retorno=array.splice(param1);
    const textSplice=document.getElementById('textSplice1').value;
    const returnSplice1=document.getElementById('returnSplice1').value=retorno;
    textSplice.value=array;
}

function splice2(event){
    const param1=document.getElementById('param21').value;
    const param2=document.getElementById('param22').value;
    retorno=array.splice(param1,param2);
    returnSplice2.value=retorno;
    textSplice2.value=array;

}




function splice3(event){
    const param1=document.getElementById('param31').value;
    const param2=document.getElementById('param32').value;
    const param3=document.getElementById('param33').value;
    console.log(array);
    const textSplice3=document.getElementById('textSplice3');
   
    const removed=array.splice(param1,param2,param3);
    textSplice3.value=array;
    const returnSplice3=document.getElementById('returnSplice3');
    
    returnSplice3.value=removed;
}

const buttonSlice=document.getElementById('buttonSlice');
buttonSlice.addEventListener('click', slice);

function slice(event){
    const param1Slice=document.getElementById('param1Slice').value;
    const param2Slice=document.getElementById('param2Slice').value;
    const retorno=array.slice(param1Slice,param2Slice);
    console.log(array);
    textSlice.value=array;    
    const returnSlice=document.getElementById('returnSlice');
    returnSlice.value=retorno;
    console.log(retorno);
}

const reverseButton=document.getElementById('reverseButton');

reverseButton.addEventListener('click',reverse);

function reverse(event){
    const rev=array.reverse();
    console.log(rev);
    const returnReverse=document.getElementById('returnReverse');
    returnReverse.value=rev;
}

const joinButton=document.getElementById('joinButton');
const resultJoin=document.getElementById('resultJoin');
joinButton.addEventListener('click',join);

function join(event){
    const joint=array.join('');
    console.log(array);
    console.log(joint);
    resultJoin.value=joint;
}






