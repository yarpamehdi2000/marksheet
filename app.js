const calcy = () =>{
  let wd = document.getElementById('wd').value;
  let maths = document.getElementById('maths').value;
  let comp = document.getElementById('comp').value;
  let che = document.getElementById('che').value;
  let phy = document.getElementById('phy').value;

  let total = parseFloat(wd)+parseFloat(maths)+parseFloat(comp)+parseFloat(che)+parseFloat(phy)
  let percent = (total/500)*100
  let grade = "";
  switch (true){
    case (percent <=100 && percent >=80):
        grade ="A+"
        break;
  
  case (percent <=79 && percent >=70):
        grade ="A";
        break;
  
  case (percent <=69 && percent >=60):
        grade ="B+";
        break;
  
  case (percent <=59 && percent >=50):
        grade ="B";
        break;
  
  case (percent <=49 && percent >=33):
        grade ="C";
        break;
  case (percent <=32):
            grade ="F";
            break;     
        default:grade="Enter valid percentage";


}
if (percent <=100 && percent >=33){
    let para = document.getElementById('para').innerHTML=`Out of 500 your total is ${total} and percentage is ${percent}% <br> Your grade is ${grade}. You are pass`

}
else{
    let para = document.getElementById('para').innerHTML=`Out of 500 your total is ${total} and percentage is ${percent}% <br> Your grade is ${grade}. You are Fail`
}



}
const clearr = () =>{

 document.getElementById('myForm').reset();
  


}
 

