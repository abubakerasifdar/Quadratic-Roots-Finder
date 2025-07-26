
        document.addEventListener("keydown", (e)=>{
            if(e.key == "Enter"){
                myFunction();
                document.getElementById("input1").value = "";
                document.getElementById("input2").value = "";
                document.getElementById("input3").value = "";
                document.getElementById("input4").value = "";
                document.getElementById("input5").value = "";
            }
        })
        function myFunction() {
            let a = Number(document.getElementById("input1").value);
            let b = Number(document.getElementById("input2").value);
            let c = Number(document.getElementById('input3').value);
            let d = Number(document.getElementById("input4").value);
            let e = Number(document.getElementById("input5").value);
            let result;
            if (d * e == a * c && d + e == b) {
                result = `Root of this equation  ${a}x^2 + ${b}x + ${c} = 0. are ${d} and ${e} which is real.`
                document.getElementById("output").style.background = "brown"
            }
            else {
                result = `Roots of this equation ${a}x^2 + ${b}x + ${c}=0 are ${d} and ${e} which is not real.`
                document.getElementById("output").style.background = "black"
            }
            document.getElementById("output").style.display = "flex"
            document.getElementById("output").innerHTML = result;


        }
