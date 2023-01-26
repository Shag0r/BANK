console.log("Print I Love you prity");

function verify() {
    const loginBtn = document.getElementById('log');
    loginBtn.addEventListener("click", function () {
        console.log("I Love You");
        const loginarea = document.getElementById("login");
        loginarea.style.display = "none";
        const transarea = document.getElementById("trans-area").style.display = "block";


    })
}

//deposite button event handeler
function depo() {
    const addtaka = document.getElementById("add");
    addtaka.addEventListener("click", function () {
        //console.log("Prity I love you");
        const tex = document.getElementById("addamount").value;
        const deposite = parseFloat(tex);
        console.log("eposite = " + deposite);


        const currentdepo = document.getElementById("currentdeposite").innerText;
        const currentdeposite = parseFloat(currentdepo);
        console.log("currentdeposite" + currentdeposite);

        const total = deposite + currentdeposite;
        console.log("total = " + total);
        document.getElementById("currentdeposite").innerText = total;
        // document.getElementById("addamount").value = "";








    })
}