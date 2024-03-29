// @ts-nocheck
//alert("Welcome");
function generateCV()
{
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2")?.innerHTML = nameField;
    document.getElementById("contactT")?.innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT")?.innerHTML = document.getElementById("addressField").value;
    document.getElementById("fbT")?.innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT")?.innerHTML = document.getElementById("instaField").value;
    document.getElementById("objectiveT")?.innerHTML = document.getElementById("objectiveField").value;
    

    let wes = document.getElementById('weField');
    let str="";
    for(let e of wes)
    {
        str=str+ '<li> ${e.value} </li>';
    }
    document.getElementById('weT')?.innerHTML = str;

    let aqs = document.getElementById('eqField');
    let str1="";
    for(let e of aqs)
    {
        str1=str1+ '<li> ${e.value} </li>';
    }
    document.getElementById('eqT')?.innerHTML = str1;

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}
 function printCV()
 {
    window.print();
 }
