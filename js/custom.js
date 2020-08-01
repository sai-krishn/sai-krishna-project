function gpacalc()
{
//define valid grades and their values
var gr = new Array(18); // letter grade
var cr = new Array(18); // weight
var ingr = new Array(8); // user input grade
var incr = new Array(8); // user input credits

// define valid grades and their values
// upper case
var grcount = 22; 

gr[1] = "A"; 
cr[1] = 4.0; 

gr[4] = "B";
cr[4] = 3.0;

gr[7] = "C";
cr[7] = 2.0;
gr[9] = "D";
cr[9] = 1.0;
gr[10] = "F";
cr[10] = 0.0;
//lower case

gr[12] = "a"; 
cr[12] = 4.0; 


gr[15] = "b";
cr[15] = 3.0;

gr[18] = "c";
cr[18] = 2.0;

gr[20] = "d";
cr[20] = 1.0;
gr[21] = "f";
cr[21] = 0.0;
// retrieve user input
ingr[0] = document.GPACalcForm.GR1.value;
ingr[1] = document.GPACalcForm.GR2.value;
ingr[2] = document.GPACalcForm.GR3.value;
ingr[3] = document.GPACalcForm.GR4.value;
ingr[4] = document.GPACalcForm.GR5.value;
ingr[5] = document.GPACalcForm.GR6.value;
ingr[6] = document.GPACalcForm.GR7.value;
ingr[7] = document.GPACalcForm.GR8.value;
incr[0] = document.GPACalcForm.CR1.value;
incr[1] = document.GPACalcForm.CR2.value;
incr[2] = document.GPACalcForm.CR3.value;
incr[3] = document.GPACalcForm.CR4.value;
incr[4] = document.GPACalcForm.CR5.value;
incr[5] = document.GPACalcForm.CR6.value;
incr[6] = document.GPACalcForm.CR7.value;
incr[7] = document.GPACalcForm.CR8.value;

// Calculate GPA
var allgr =0;
var allcr = 0;
var gpa = 0;
for (var x = 0; x < 5 + 3; x++)
        {
        if (ingr[x] == "") break;

        var validgrcheck = 0;
        for (var xx = 0; xx < grcount; xx++)
                {
                if (ingr[x] == gr[xx])
                        {
                        allgr = allgr + (parseInt(incr[x],10) * cr[xx]);
                        allcr = allcr + parseInt(incr[x],10);
                        validgrcheck = 1;
                        break;
                        }
                }
        if (validgrcheck == 0)
                {
                alert("Error- Could not recognize the grade entered for Class " + eval(x +  1) + ". Please use standard college grades in the form of A A- B+ ...F.");
                return 0;
                }
        }

// this if-check prevents a divide by zero error
if (allcr == 0)
        {
        alert("Error- You did not enter any credit values! GPA = N/A");
        return 0;
        }

gpa = allgr / allcr;
document.GPACalcForm.GPACurrent.value = eval(gpa.toFixed(2));
document.GPACalcForm.creditsCurrent.value = allcr;


return 0;
}

function cumulativeCalc()
{
  var gr1=0;
  var gr2=0;
  var currentCredits = 0
  var currentGPA = 0
  var cumulativeGPA = 0
  var cr = 0
  var gpa = 0;
  
  currentCredits = document.GPACalcForm.creditsCurrent.value;
  currentGPA = document.GPACalcForm.GPACurrent.value;
  cumulativeGPA = document.GPACalcForm.GRCumulative.value;
  cr = document.GPACalcForm.CRCumulative.value;
  
  if(currentGPA > 4 || currentGPA < 0 || !currentGPA)
  {
    alert("Calculate your semester GPA before calculating your cumulative GPA!");
    return 0;
  }
  if(cumulativeGPA > 4 || cumulativeGPA < 0 || !cumulativeGPA)
  {
    alert("Please enter a GPA in the 4.0 scale! In the cumulative GPA field.");
    return 0;
  }
  if(cr < 0 || !cr)
  {
    alert("Please enter a valid credit number in the cumulative credits field!");
    return 0;
  }
  
  gr1 = currentCredits * currentGPA;
  gr2 = cr * cumulativeGPA;
  
  gpa = (+gr1 + +gr2)/(+currentCredits + +cr);
  
  document.GPACalcForm.cumulativeGPAOutput.value = gpa.toFixed(2);
}

$(function () {
        $('#baseUrl').click(function () {
                window.location = $(this).attr('href') + '' + $('#appendUrl').val();
                return false;
        });
});

