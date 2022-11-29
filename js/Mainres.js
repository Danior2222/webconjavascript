function resultado(){
      var cuenta = document.getElementById("cuenta").value;
      var numero = document.getElementById("numero").value;
      
        switch (document.getElementById("elementos").value){
        case "1":
            if(cuenta != 0){
              cuenta =  Math.floor((cuenta * 30)/100)/numero;
              alert(cuenta); 
            }
            else{
              alert("error");
            }
            break;
        case "2":
            if(cuenta != 0){
              cuenta = Math.floor((cuenta * 20)/100)/numero;
              alert(cuenta); 
            }
            else{
              alert("error");
            }
            break;
        case "3":
            if(cuenta != 0){
              cuenta = Math.floor((cuenta * 15)/100)/numero;
              alert(cuenta); 
            }
            else{
              alert("error");
            }
            break;
        case "4":
            if(cuenta != 0){
              cuenta = Math.floor((cuenta * 10)/100)/numero;
              alert(cuenta); 
            }
            else{
              alert("error");
            }
            break;
        case "5":
            if(cuenta != 0){
              cuenta = Math.floor((cuenta * 5)/100)/numero;
              alert(cuenta); 
            }
            else{
              alert("error");
            }
            break;

                
      } 
      
      
    }
  