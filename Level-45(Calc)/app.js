function add()
{
  let n1=+document.getElementById("num1").value;
  let n2=+document.getElementById("num2").value;

//   input.value=""; // to reset the input value
  
  let ans=n1+n2;
  let result=document.getElementById("result");
  result.innerHTML=`${ans}`;
}

function subtract()
{
  let n1=+document.getElementById("num1").value;
  let n2=+document.getElementById("num2").value;

  let ans=n1-n2;

  let result=document.getElementById("result");
  result.innerHTML=`${ans}`;
}

function multiply()
{
  let n1=+document.getElementById("num1").value;
  let n2=+document.getElementById("num2").value;

  let ans=n1*n2;
  let result=document.getElementById("result");
  result.innerHTML=`${ans}`;
}

function divide()
{
  let n1=+document.getElementById("num1").value;
  let n2=+document.getElementById("num2").value;

  let ans=n1/n2;

  let result=document.getElementById("result");
  result.innerHTML=`${ans}`;
}