const ctx = document.getElementById("myChart");

function ri() {
    document.querySelector(".vo").style.right = "40px";
    document.getElementById("eaa").setAttribute("class", "hi")
    document.getElementById("eaaa").removeAttribute("class", "hi")
}

function ril() {
    document.querySelector(".vo").style.right = "300px";
    document.getElementById("eaaa").setAttribute("class", "hi")
    document.getElementById("eaa").removeAttribute("class", "hi")
}

document.getElementById("salaryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var startSalary = document.getElementById("salaryEnter").value;
    document.getElementById("tm").innerHTML = "$" + startSalary;
    var afterMonthTax = Math.round(eval(startSalary / 12));
    document.getElementById("tm-r").innerHTML = "$" + afterMonthTax;
    document.getElementById("tst").innerHTML = "$" + afterMonthTax;
    document.getElementById("tst-r").innerHTML = "$" + Math.round(eval(afterMonthTax * .12));
    document.getElementById("ft").innerHTML = "$" + afterMonthTax;
    document.getElementById("ft-r").innerHTML = "$" + Math.round(eval(afterMonthTax * .07));
    document.getElementById("ss").innerHTML = "$" + afterMonthTax;
    document.getElementById("ss-r").innerHTML = "$" + Math.round(eval(afterMonthTax * .062));
    document.getElementById("tmc").innerHTML = "$" + afterMonthTax;
    document.getElementById("tmc-r").innerHTML = "$" + Math.round(eval(afterMonthTax * .0145));
    document.getElementById("tsd").innerHTML = "$" + afterMonthTax;
    document.getElementById("tsd-r").innerHTML = "$" + Math.round(eval(afterMonthTax * .01));
    document.getElementById("trm").innerHTML = "$" + afterMonthTax;
    document.getElementById("trm-r").innerHTML = "$" + Math.round(eval(afterMonthTax * .05));
    document.getElementById("thi").innerHTML = "$---";
    healthInsurance = 180;
    document.getElementById("thi-r").innerHTML = "$" + healthInsurance;
    document.getElementById("t-total-i").innerHTML = "$" + afterMonthTax;
    document.getElementById("t-total-m").innerHTML = "-$" + Math.round(eval((afterMonthTax * .12) + (afterMonthTax * .07) + (afterMonthTax * .062) + (afterMonthTax * .0145) + (afterMonthTax * .01) + (afterMonthTax * .05) + healthInsurance));
    document.getElementById("t-total-o").innerHTML = "$" + Math.round(afterMonthTax - eval((afterMonthTax * .12) + (afterMonthTax * .07) + (afterMonthTax * .062) + (afterMonthTax * .0145) + (afterMonthTax * .01) + (afterMonthTax * .05) + healthInsurance));
    document.getElementById("t-total-oo").innerHTML = document.getElementById("t-total-o").innerHTML;
    document.getElementById("h-l").innerHTML = document.getElementById("t-total-oo").innerHTML;
    document.getElementById("h-r").innerHTML = "$" + Math.round((afterMonthTax - eval((afterMonthTax * .12) + (afterMonthTax * .07) + (afterMonthTax * .062) + (afterMonthTax * .0145) + (afterMonthTax * .01) + (afterMonthTax * .05) + healthInsurance)) * .33);
    document.getElementById("h-rr").innerHTML = "$" + Math.round((afterMonthTax - eval((afterMonthTax * .12) + (afterMonthTax * .07) + (afterMonthTax * .062) + (afterMonthTax * .0145) + (afterMonthTax * .01) + (afterMonthTax * .05) + healthInsurance)) - ((afterMonthTax - eval((afterMonthTax * .12) + (afterMonthTax * .07) + (afterMonthTax * .062) + (afterMonthTax * .0145) + (afterMonthTax * .01) + (afterMonthTax * .05) + healthInsurance)) * .33));
    retire = Math.round(((afterMonthTax - eval((afterMonthTax * .12) + (afterMonthTax * .07) + (afterMonthTax * .062) + (afterMonthTax * .0145) + (afterMonthTax * .01) + (afterMonthTax * .05) + healthInsurance)) - ((afterMonthTax - eval((afterMonthTax * .12) + (afterMonthTax * .07) + (afterMonthTax * .062) + (afterMonthTax * .0145) + (afterMonthTax * .01) + (afterMonthTax * .05) + healthInsurance)) * .33)) * .20);
    rent = Math.round(((afterMonthTax - eval((afterMonthTax * .12) + (afterMonthTax * .07) + (afterMonthTax * .062) + (afterMonthTax * .0145) + (afterMonthTax * .01) + (afterMonthTax * .05) + healthInsurance)) - ((afterMonthTax - eval((afterMonthTax * .12) + (afterMonthTax * .07) + (afterMonthTax * .062) + (afterMonthTax * .0145) + (afterMonthTax * .01) + (afterMonthTax * .05) + healthInsurance)) * .33)) * .50);
    need = Math.round(((afterMonthTax - eval((afterMonthTax * .12) + (afterMonthTax * .07) + (afterMonthTax * .062) + (afterMonthTax * .0145) + (afterMonthTax * .01) + (afterMonthTax * .05) + healthInsurance)) - ((afterMonthTax - eval((afterMonthTax * .12) + (afterMonthTax * .07) + (afterMonthTax * .062) + (afterMonthTax * .0145) + (afterMonthTax * .01) + (afterMonthTax * .05) + healthInsurance)) * .33)) * .30);

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Rent Payment", "Self Payment", "Retirement"],
            datasets: [{
                label: "Budget",
                data: [rent, need, retire],
                backgroundColor: [
                    "rgb(213, 23, 48)",
                    "rgb(255, 100, 0)",
                    "rgb(255, 255, 0)"
                ],
                hoverOffset: 4
            }]
        },
    })
})