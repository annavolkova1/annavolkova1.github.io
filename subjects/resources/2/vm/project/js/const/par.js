function reshenie() {
	var F=document.forms[0].v1.value;
	    a=eval(document.forms[0].v2.value), 
		b=eval(document.forms[0].v3.value), 
		n=eval(document.forms[0].v4.value), 
				h=(b-a)/n;
			    p1=0;
				p2=0;
				x1=a+h;
				x2=a+2*h;
				fa=eval(F.replace(/x(?!p)/g,"a")); 
				fb=eval(F.replace(/x(?!p)/g,"b")); 
				while (x1<=b-h){
          r1=eval(F.replace(/x(?!p)/g,"x1"));
          p1=p1+r1;
				  x1=x1+2*h;
				}
        while (x2<=b-2*h){
          r2=eval(F.replace(/x(?!p)/g,"x2"));
          p2=p2+r2;
          x2=x2+2*h;
        }

			var y=(h/3)*(fa+(4*p1)+(2*p2)+fb)
alert('y = ' +y);}
function del(){
	document.forms[0].v1.value="";
	document.forms[0].v2.value="";
	document.forms[0].v3.value="";
	document.forms[0].v4.value="";
	}