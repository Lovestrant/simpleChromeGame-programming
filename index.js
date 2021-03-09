
var seconds = 00;
var minutes = 00;
var hours = 00;

var infiniteloop =0;

for(infiniteloop=0; infiniteloop>=-1; infiniteloop++){
    for(seconds=0; seconds<59; seconds++){

        seconds+= 1;
        if(seconds==59){
            for(minutes=0;minutes<59; minutes++){
                minutes+=1;
            }
            
        }else{
    
        }
        if(minutes==59){
            for(hours=0;hours<59; hours++){
            hours+= 1;
            }
        }else{
    

        }
    }
    console.log(hours +":"+ minutes +":"+ seconds);
}

