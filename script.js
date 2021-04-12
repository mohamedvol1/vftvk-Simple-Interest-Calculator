/*displays the range input value*/
function myFunction(val) {
  document.getElementById('demo').innerHTML = val + "%";
}
document.getElementById("rate").value = 10;

/*comput the value of the expected interest*/
function compute()
{
    var princibal = document.getElementById("principal").value;
    if (Math.sign(princibal) == -1 || Math.sign(princibal) == 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = Number(princibal)*Number(years)*(Number(rate)/100);
    var d = new Date();
    var current_year = d.getFullYear();
    var target_year = Number(current_year) + Number(years);
    document.getElementById("result").innerHTML = "<br/>if you deposit <mark>" + princibal +"</mark>,<br/>"
    + "at an interest rate of <mark>" + rate + "%</mark>,<br/>You will receive an amount of <mark>" + interest + "</mark>,<br/>in the year <mark>" + target_year + "</mark>";
    return true;
}
