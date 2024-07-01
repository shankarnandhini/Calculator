let outputscreen = document.getElementById("output-screen");
        function num(num){
            outputscreen.value += num;
        }
        function calculate(){
            try{
                outputscreen.value= eval(outputscreen.value);
            }
            catch(error){
                alert("invalid");
            }
        }
        function Clear(){
            outputscreen.value = "";
        }
        function del(){
            outputscreen.value = outputscreen.value.slice(0, -1);
        }
         
