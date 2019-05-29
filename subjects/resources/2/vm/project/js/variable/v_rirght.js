function reshenie() {
	var F=document.forms[0].v1.value;
	    a=eval(document.forms[0].v2.value), 
		b=eval(document.forms[0].v3.value), 
		n=eval(document.forms[0].v4.value), 
		e=eval(document.forms[0].v5.value), 
			h=(b-a)/n;
			In=0;
			do
			{
				S2=0;
				h=(b-a)/n;
				x=a+h;
				while (x<=b)	
				{
					S2 = S2 + eval(F.replace(/x(?!p)/g,"x"));
					x = x + h;
				}
			I2n=h*S2;
			R=Math.abs(I2n-In);
			In=I2n;
			h=h/2;
		}
		while (R>e)
		alert('I2n = ' + I2n + '\n' + 'h = ' + h ); 

}
function del(){
	document.forms[0].v1.value="";
	document.forms[0].v2.value="";
	document.forms[0].v3.value="";
	document.forms[0].v4.value="";
	document.forms[0].v5.value="";
	}
