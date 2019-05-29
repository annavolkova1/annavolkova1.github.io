function reshenie() { 
var a = []; 
a[0]=0.9999996; 
a[1]=0.9999586; 
a[2]=0.4993309; 
a[3]=0.1628427; 
a[4]=0.0325340; 
var e=0.0000005; 
P=1; 
k=1; 
C = a[0]; 
x=-1/2; 
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