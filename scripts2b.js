a=document.getElementById("bt")
b=document.getElementById("box1")
c=document.getElementById("box2")
m=document.getElementById("rupi")
t=document.getElementById("somoy")
i=document.getElementById("sudh")
f=document.getElementById("tm")



a.addEventListener("click", () =>{
    m1=m.value
     t1=t.value
     i1=i.value
     eq=m1*(1+(i1/100))**t1
    c.textContent = eq
    a.style.borderRight="1px solid black"
    a.style.borderLeft="1px solid black"

    a.style.borderBottom="1px solid black"
   f.style.opacity="1"
   c.style.opacity="1"

})
