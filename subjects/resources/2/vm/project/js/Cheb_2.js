function reshenie() { 
var a = []; 
a[0]=0.99999998; 
a[1]=1.00000000; 
a[2]=0.5000063; 
a[3]=0.1666674; 
a[4]=0.0416350; 
a[5]=0.0083298; 
a[6]=0.0014393; 
a[7]=0.0002040; 
var e=0.0000002; 
P=1; 
k=1; 
C = a[0]; 
x=1; 
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