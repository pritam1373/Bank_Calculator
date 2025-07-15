a=document.getElementById("bt")
b=document.getElementById("box1")
c=document.getElementById("box2")
m=document.getElementById("rupi")
t=document.getElementById("somoy")
i=document.getElementById("sudh")
f=document.getElementById("tm")
g=document.getElementById("ti")




a.addEventListener("click", () =>{
    m1=m.value
     t1=t.value
     t2=t1*12
     i1=i.value
     i2=i1/(1200)
     eq=m1*(((1+i2)**t2)-1)*(1+i2)/i2
    c.textContent = eq
    a.style.borderRight="1px solid black"
    a.style.borderLeft="1px solid black"

    a.style.borderBottom="1px solid black"
   f.style.opacity="1"
   c.style.opacity="1"
   b.style.opacity="1"
   g.style.opacity="1"



})
