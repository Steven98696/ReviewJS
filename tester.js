 
      let x
      document.getElementById("Tes").innerHTML=x??=5
    
    
      let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      document.getElementById("Length").innerHTML = text.length
      const number=[1,2,3,4,5,6]
      document.getElementById("Numb").innerHTML=number
      function addField(){
        let input= document.createElement("input")
        input.type="text"
        input.className="field-box"
        input.placeholder="Masukkan Text"
        document.getElementById("container").appendChild(input)
      }
        function addBox() {
        let box = document.createElement("div")
        box.className = "box"; 
        box.innerHTML = "New Box"; 
        document.getElementById("container1").appendChild(box);
       }
       const d = new Date();
        document.getElementById("date").innerHTML = d;
    
    
      const numbers = [45, 4, 9, 16, 25];
        numbers.sort((a, b) => a - b);
        let txt = "";
        numbers.forEach(myFunction);
        document.getElementById("Loop").innerHTML = txt;
        function myFunction(value) {
          txt += value + "<br>"; 
        }
      const letters = new Set(["a","b","c"]);

        // List all Elements
        let da = "";
        letters.forEach (function(value) {
          da+= value + "<br>";
        })

        document.getElementById("trial").innerHTML = da;
      