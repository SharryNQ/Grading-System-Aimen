function sum(){
    var eng=parseInt(document.getElementById("english").value);
    var math=parseInt(document.getElementById("math").value);
    var phy=parseInt(document.getElementById("physics").value);
    var chem=parseInt(document.getElementById("chemistry").value);
    var comp=parseInt(document.getElementById("computer").value);
    if(eng>100 || math>100)
    {
        document.getElementById("display").innerHTML="Incorrect value";
    }else if( phy>100 || chem>100 || comp>100)
    {
        document.getElementById("display").innerHTML="incorrect value";
    }else
    {
        var res=eng+math+phy+chem+comp;
         document.getElementById("display").innerHTML="Sum = "+res;
    }
}
function average(){
    var eng=parseInt(document.getElementById("english").value);
    var math=parseInt(document.getElementById("math").value);
    var phy=parseInt(document.getElementById("physics").value);
    var chem=parseInt(document.getElementById("chemistry").value);
    var comp=parseInt(document.getElementById("computer").value);
    if(eng>100 || math>100)
    {
        document.getElementById("display2").innerHTML="Incorrect value";
    }else if( phy>100 || chem>100 || comp>100)
    {
        document.getElementById("display2").innerHTML="incorrect value";
    }else
    {   var res=0;
        var res=(eng+math+phy+chem+comp)/5;
         document.getElementById("display2").innerHTML="Average = "+res;
    }
    
}
function grade(){
    var eng=parseInt(document.getElementById("english").value);
    var math=parseInt(document.getElementById("math").value);
    var phy=parseInt(document.getElementById("physics").value);
    var chem=parseInt(document.getElementById("chemistry").value);
    var comp=parseInt(document.getElementById("computer").value);
    if(eng>100 || math>100)
    {
        document.getElementById("display").innerHTML="Incorrect value";
    }else if( phy>100 || chem>100 || comp>100)
    {
        document.getElementById("display").innerHTML="incorrect value";
    }else
    {
        var avg=(eng+math+phy+chem+comp)/5;
         if(avg>=80 && avg<=100)
         {
            document.getElementById("display3").innerHTML="Grade A";
         }else if(avg>=75 && avg<80)
         {
            document.getElementById("display3").innerHTML=" Grade B+";
         }else if(avg>=70 && avg<75)
         {
            document.getElementById("display3").innerHTML=" Grade B";
         }
         else if(avg>=65 && avg<70)
         {
            document.getElementById("display3").innerHTML=" Grade C+";
         }else if(avg>=60 && avg<65)
         {
            document.getElementById("display3").innerHTML=" Grade C";
         }else if(avg>=55 && avg<60)
         {
            document.getElementById("display3").innerHTML=" Grade D+";
         }else if(avg>=50 && avg<55)
         {
            document.getElementById("display3").innerHTML=" Grade D";
         }else if(avg<50)
         {
            document.getElementById("display3").innerHTML="Grade F";
         }
    }
    
}