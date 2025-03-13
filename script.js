const ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["Rent Payment", "Self Payment", "Retirement"],
        datasets: [{
            label: "Budget",
            data: [40000, 25000, 15000],
            backgroundColor: [
                "rgb(213, 23, 48)",
                "rgb(255, 100, 0)",
                "rgb(255, 255, 0)"
            ],
            hoverOffset: 4
        }]
    },
})

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