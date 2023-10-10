let correct = 0;
let answered = new Set();
let q1="";
let q2="";
let q3="";
let q4="";
let q5="";
let q6="";
let q7="";
let q8="";
let q9="";
let q10="";
let q11="";
let q12="";
let q13="";
let q14="";
let q15="";
let q16="";
let q17="";
let q18="";
let q19="";
let q20="";

function Check(x,y)
{
    if(y==="q1")
    {
        q1 = x;
        answered.add("q1");
    }
    else if(y==="q2")
    {
        q2 = x;
        answered.add("q2");
    }
    else if(y==="q3")
    {
        q3 = x;
        answered.add("q3");
    }
    else if(y==="q4")
    {
        q4 = x;
        answered.add("q4");
    }
    else if(y==="q5")
    {
        q5 = x;
        answered.add("q5");
    }
    else if(y==="q6")
    {
        q6 = x;
        answered.add("q6");
    }
    else if(y==="q7")
    {
        q7 = x;
        answered.add("q7");
    }
    else if(y==="q8")
    {
        q8 = x;
        answered.add("q8");
    }
    else if(y==="q9")
    {
        q9 = x;
        answered.add("q9");
    }
    else if(y==="q10")
    {
        q10 = x;
        answered.add("q10");
    }
    else if(y==="q11")
    {
        q11 = x;
        answered.add("q11");
    }
    else if(y==="q12")
    {
        q12 = x;
        answered.add("q12");
    }
    else if(y==="q13")
    {
        q13 = x;
        answered.add("q13");
    }
    else if(y==="q14")
    {
        q14 = x;
        answered.add("q14");
    }
    else if(y==="q15")
    {
        q15 = x;
        answered.add("q15");
    }
    else if(y==="q16")
    {
        q16 = x;
        answered.add("q16");
    }
    else if(y==="q17")
    {
        q17 = x;
        answered.add("q17");
    }
    else if(y==="q18")
    {
        q18 = x;
        answered.add("q18");
    }
    else if(y==="q19")
    {
        q19 = x;
        answered.add("q19");
    }
    else if(y==="q20")
    {
        q20 = x;
        answered.add("q20");
    }
    
    


    if(answered.size === 20)
    {
        document.getElementById("score").disabled = false;
    }
}

function score() //adds 1 point to the score for each question that is answered correctly
{
   if(q1 === "correct")
    {
        correct++;
    }  
     if(q2 === "correct")
    {
        correct++;
    }  
     if(q3 === "correct")
    {
        correct++;
    }  
     if(q4 === "correct")
    {
        correct++;
    }  
     if(q5 === "correct")
    {
        correct++;
    }  
     if(q6 === "correct")
    {
        correct++;
    }  
     if(q7 === "correct")
    {
        correct++;
    }  
     if(q8 === "correct")
    {
        correct++;
    }  
     if(q9 === "correct")
    {
        correct++;
    }  
     if(q10 === "correct")
    {
        correct++;
    }  
     if(q11 === "correct")
    {
        correct++;
    }  
     if(q12 === "correct")
    {
        correct++;
    }  
     if(q13=== "correct")
    {
        correct++;
    }  
     if(q14=== "correct")
    {
        correct++;
    }  
     if(q15 === "correct")
    {
        correct++;
    }  
     if(q16 === "correct")
    {
        correct++;
    }  
     if(q17 === "correct")
    {
        correct++;
    }  
     if(q18 === "correct")
    {
        correct++;
    }  
     if(q19 === "correct")
    {
        correct++;
    }  
     if(q20 === "correct")
    {
        correct++;
    }  
   
    
    
    
    document.getElementById("score").disabled = true;
    let div = document.getElementById("scoreDiv");
    let p = document.createElement("p");
    p.innerHTML = `${correct}/20 or ${correct/20*100}%`; //the score out of 20
    div.appendChild(p);
}


