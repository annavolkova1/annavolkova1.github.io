function reshenie() {
	var F=document.forms[0].v1.value; 
		a=eval(document.forms[0].v2.value), 
		b=eval(document.forms[0].v3.value), 
		c=eval(document.forms[0].v4.value), 
		d=eval(document.forms[0].v5.value), 
		nx=eval(document.forms[0].v6.value), 
		ny=eval(document.forms[0].v7.value), 
				hx=(b-a)/nx; 
				hy=(d-c)/ny; 
				x = a + hx; 
				Sx = 0; 
				while (x <= (b-hx)) { 
				Sy=0; 
				y=c + hy;
				fa=eval(F.replace(/x(?!p)/g,"a")); 
				fb=eval(F.replace(/x(?!p)/g,"b")); 
				fc=eval(F.replace(/y(?!p)/g,"c")); 
				fd=eval(F.replace(/y(?!p)/g,"d")); 
				while(y <= (d-hy)){ 
					Sy = Sy + Math.abs(eval(F)); 
					y = y + hy; 
				}
				Iy = hy * ((fc + fd) / 2 + Sy);
				Sx = Sx + Iy;
				x = x + hx;
				}
        var Ix = hx * ((fa + fb) / 2 + Sx);
        alert('Ix = ' +Ix);
			}
function del(){
	document.forms[0].v1.value="";
	document.forms[0].v2.value="";
	document.forms[0].v3.value="";
	document.forms[0].v4.value="";
}

