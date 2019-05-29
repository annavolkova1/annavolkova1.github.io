function reshenie() { 
var a = []; 
a[0]=0.99999999998; 
a[1]=0.99999845; 
a[2]=0.49997505; 
a[3]=0.16651509; 
a[4]=0.04122325; 
a[5]=0.07654311; 
a[6]=0.00084901; 
var e=0.00000024; 
P=1; 
k=1; 
C = a[0]; 
x=-1; 
top: 
while (k < a.length) { 
P *= x; 
U = P * a[k]; 
C += U; 
if (Math.abs(U)<e) { 
break top; 
} 
k += 1; 
} 
alert(C); 
}