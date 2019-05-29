 function reshenie() {
	var F=document.forms[0].v1.value;
		a=eval(document.forms[0].v2.value), 
		b=eval(document.forms[0].v3.value), 
		n=eval(document.forms[0].v4.value), 
        h=(b-a)/n;
	    x = a,
        s = 0;
    while (x <= b-h) {
        s = s + eval(F.replace(/x(?!p)/g,"x")); 
        x = x + h;
    }
    var y = h*s;
    alert('y = ' + y);
}
function del(){
	document.forms[0].v1.value="";
	document.forms[0].v2.value="";
	document.forms[0].v3.value="";
	document.forms[0].v4.value="";
	}