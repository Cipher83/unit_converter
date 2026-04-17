function converttemp() {
    let forhen;
    let celcius= document.getElementById("celcius").value;
    forhen= (celcius*9/5)+ 32
    document.getElementById("forh").value=forhen;
}
function convertweight() {
    let p;
    let kg= document.getElementById("kilogram").value;
p = kg * 2.2
    document.getElementById("pound").value=p;
}
function convertdist() {
    let m;
    let km= document.getElementById("kilometer").value;
m =km * 0.62137
    document.getElementById("miles").value=m;
}
