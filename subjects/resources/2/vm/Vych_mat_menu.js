var integr_sign = document.createElement('img');
integr_sign.src = "./Int_sign.png";

window.addEventListener("load",start);

function insert_element(arg_1){
var p = document.createElement("p");	
 document.querySelectorAll("div")[0].appendChild(arg_1);	
 document.querySelectorAll("div")[0].appendChild(p);
}

function insert_li(name,descr,list){
var newLi = document.createElement('li');
newLi.innerHTML = "<dl><dt><b>" + name + "</dt></b>" + descr + "</dl>";
document.querySelectorAll("ul")[list-1].appendChild(newLi);
}

function insert_functions(){
var funcs_list = document.createElement("ul");
document.querySelectorAll("div")[1].appendChild(funcs_list);
var funcs_list = document.createElement("ul");
document.querySelectorAll("div")[2].appendChild(funcs_list);
    insert_li("Math.acos","арккосинус",1);
    insert_li("Math.asin","арксинус",1);
    insert_li("Math.atan","арктангенс",1);
    insert_li("Math.exp","экспонента в степени (число)",1);
    insert_li("Math.sqrt","квадратный корень",1);
	insert_li("Math.abs","модуль",1);
    insert_li("Math.log","натуральный логарифм",2);
    insert_li("Math.sin","синус",2);
    insert_li("Math.cos","косинус",2);
    insert_li("Math.tan","тангенс",2);
    insert_li("Math.pow","степень (число, степень)",2);
    insert_li("Math.PI","число Пи",2);

    document.querySelectorAll("li")[0].addEventListener("click",function(){	
	  document.getElementById("inp_func_id").value +='Math.acos(x)';	
	});
    document.querySelectorAll("li")[1].addEventListener("click",function(){
	  document.getElementById("inp_func_id").value += 'Math.asin(x)';
	});
    document.querySelectorAll("li")[2].addEventListener("click",function(){
	  document.getElementById("inp_func_id").value += 'Math.atan(x)';	
	});
    document.querySelectorAll("li")[3].addEventListener("click",function(){
	  document.getElementById("inp_func_id").value += 'Math.exp(x)';	
	});
    document.querySelectorAll("li")[4].addEventListener("click",function(){
	  document.getElementById("inp_func_id").value += 'Math.sqrt(x)';	
	});
    document.querySelectorAll("li")[5].addEventListener("click",function(){
	  document.getElementById("inp_func_id").value += 'Math.abs(x)';	
	});
    document.querySelectorAll("li")[6].addEventListener("click",function(){
	 document.getElementById("inp_func_id").value += 'Math.log(x)';	
	});
    document.querySelectorAll("li")[7].addEventListener("click",function(){
	 document.getElementById("inp_func_id").value += 'Math.sin(x)';	
	});
    document.querySelectorAll("li")[8].addEventListener("click",function(){
	 document.getElementById("inp_func_id").value += 'Math.cos(x)';	
	});
    document.querySelectorAll("li")[9].addEventListener("click",function(){
	 document.getElementById("inp_func_id").value += 'Math.tan(x)';	
	});
    document.querySelectorAll("li")[10].addEventListener("click",function(){
	 document.getElementById("inp_func_id").value += 'Math.pow(x,2)';	
	});
    document.querySelectorAll("li")[11].addEventListener("click",function(){
	 document.getElementById("inp_func_id").value += 'Math.PI';	
	});
}

function start(){
	document.body.innerHTML = "<div></div>";
    var button1 = document.createElement("button");

    var button3 = document.createElement("button");

    var button5 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Вычислительные процессы";
	insert_element(h2);
		
	button1.innerHTML = "Интегрирование";
    
    button3.innerHTML = "СЛАУ";

    button5.innerHTML = "Вычисление элементарных функций";

	insert_element(button1);

	insert_element(button3);

	insert_element(button5);
	
    button1.addEventListener("click",integr);

    button3.addEventListener("click",slau);

    button5.addEventListener("click",elem_func);
}

function elem_func(){
    document.body.innerHTML = "<div></div>";
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Вычисление элементарных функций";
	insert_element(h2);
	
	button1.innerHTML = "E в степени X - 1";
    button2.innerHTML = "Назад";
	button3.innerHTML = "E в степени X - 2";
	button4.innerHTML = "E в степени X - 3";
	
	insert_element(button1);
	insert_element(button3);
	insert_element(button4);
	insert_element(button2);
	
    button1.addEventListener("click",elem_exp);
    button2.addEventListener("click",start);
    button3.addEventListener("click",elem_exp_2);
    button4.addEventListener("click",elem_exp_3);
}

function elem_exp(){
	document.body.innerHTML = "<div></div>";
    var inp_step = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");	
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Е в степени Х - 1";
	insert_element(h2);
		
	inp_step.placeholder = "Показатель степени";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
	inp_step.value = "-1/2";

	insert_element(inp_step);
 	inp_step.size = 39;

	insert_element(inp_step);

	insert_element(button1);
	insert_element(button2);
	
	//insert_functions();
	
    button1.addEventListener("click",function(){
    if (Math.abs(eval(inp_step.value)) >= 1) {
	 alert("Способ работает только для |x| < 1");	
	} else {
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
var ar = [0.9999996, 0.9999586, 0.4993309, 0.1628427, 0.0325340]; 
var sum, c; 
var x = eval(inp_step.value); 
var c = ar[0]; 
var p = 1; 
var e = 0.0000005; 
var k = 1; 
var u = 1;

while (k < ar.length) { 
p *= x; 
u = p * ar[k]; 
c += u; 
k += 1; 

} 

	var t_elapsed = new Date().getTime() - t_start;	 
	 insert_element(document.createTextNode("Точность 5 * 10 в -7"));
	 insert_element(document.createTextNode("My Result " + c));
	 insert_element(document.createTextNode("JS  Result : " + Math.exp(x)));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",elem_exp);
     button4.addEventListener("click",start);  
	}
	});
    button2.addEventListener("click",elem_func);		
			
}

function elem_exp_2(){
	document.body.innerHTML = "<div></div>";
    var inp_step = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");	
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Е в степени Х - 2";
	insert_element(h2);
		
	inp_step.placeholder = "Показатель степени";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
	inp_step.value = "-1/2";

	insert_element(inp_step);
 	inp_step.size = 39;

	insert_element(inp_step);

	insert_element(button1);
	insert_element(button2);
	
	//insert_functions();
	
    button1.addEventListener("click",function(){
    if (Math.abs(eval(inp_step.value)) >= 1) {
	 alert("Способ работает только для |x| < 1");	
	} else {
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
var ar = [0.99999999998, 0.99999845, 0.49997505, 0.16651509, 0.04122325, 0.07654311, 0.00084901];
var sum, c; 
var x = eval(inp_step.value); 
var c = ar[0]; 
var p = 1;  
var k = 1; 
var u = 1;

while (k < ar.length) { 
p *= x; 
u = p * ar[k]; 
c += u; 
k += 1; 

} 

	var t_elapsed = new Date().getTime() - t_start;	 
	 insert_element(document.createTextNode("Точность 2.4 * 10 в -8"));
	 insert_element(document.createTextNode("My Result " + c));
	 insert_element(document.createTextNode("JS  Result : " + Math.exp(x)));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",elem_exp_2);
     button4.addEventListener("click",start);  
	}
	});
    button2.addEventListener("click",elem_func);		
			
}

function elem_exp_3(){
	document.body.innerHTML = "<div></div>";
    var inp_step = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");	
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Е в степени Х - 3";
	insert_element(h2);
		
	inp_step.placeholder = "Показатель степени";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
	inp_step.value = "-1/2";

	insert_element(inp_step);
 	inp_step.size = 39;

	insert_element(inp_step);

	insert_element(button1);
	insert_element(button2);
	
	//insert_functions();
	
    button1.addEventListener("click",function(){
    if (Math.abs(eval(inp_step.value)) >= 1) {
	 alert("Способ работает только для |x| < 1");	
	} else {
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
var ar = [0.9999998, 1.0000000, 0.5000063, 0.1666674, 0.0416350, 0.0083298, 0.0014393, 0.0002040]; 
var sum, c; 
var x = eval(inp_step.value); 
var c = ar[0]; 
var p = 1;  
var k = 1; 
var u = 1;

while (k < ar.length) { 
p *= x; 
u = p * ar[k]; 
c += u; 
k += 1; 

} 

	var t_elapsed = new Date().getTime() - t_start;	 
	 insert_element(document.createTextNode("Точность 2 * 10 в -7"));
	 insert_element(document.createTextNode("My Result " + c));
	 insert_element(document.createTextNode("JS  Result : " + Math.exp(x)));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",elem_exp_3);
     button4.addEventListener("click",start);  
	}
	});
    button2.addEventListener("click",elem_func);		
		
}

function integr(){
    document.body.innerHTML = "<div></div>";
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Интегрирование";
	insert_element(h2);
	
	button1.innerHTML = "С постоянным шагом";
    button2.innerHTML = "С переменным шагом";
    button3.innerHTML = "Кратные интегралы";
    button4.innerHTML = "Назад";
	
	insert_element(button1);
	insert_element(button2);
	insert_element(button3);
	insert_element(button4);
	
    button1.addEventListener("click",post_Shag);
    button2.addEventListener("click",perem_Shag);
    button3.addEventListener("click",cr_Int);
    button4.addEventListener("click",start);
}

function cr_Int(){
	document.body.innerHTML = "<div></div>";
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var button5 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Кратные интегралы";
	insert_element(h2);
	
	button1.innerHTML = "Метод левых частей";
    button2.innerHTML = "Метод правых частей";
    button3.innerHTML = "Метод трапеции";
    button4.innerHTML = "Метод парабол";
    button5.innerHTML = "Назад";

	insert_element(button1);
	insert_element(button2);
	insert_element(button3);
	insert_element(button4);
	insert_element(button5);
	
    button1.addEventListener("click",cr_Left_Parts);
    button2.addEventListener("click",cr_R_Parts);
    button3.addEventListener("click",cr_Trap_Parts);
    button4.addEventListener("click",cr_Par_Parts);
    button5.addEventListener("click",integr);
}

function cr_Left_Parts(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_c = document.createElement("input");
    var inp_d = document.createElement("input");
    var inp_n_x = document.createElement("input");
    var inp_n_y = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");	
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Левые части (кратн.)";
	insert_element(h2);
		
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "Коорд. начала отрезка a";
    inp_b.placeholder = "Коорд. конца отрезка b";
    inp_c.placeholder = "Коорд. начала отрезка c";
    inp_d.placeholder = "Коорд. конца отрезка d";
    inp_n_x.placeholder = "Кол-во разбиений x";
    inp_n_y.placeholder = "Кол-во разбиений y";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
	inp_func.value = "x*x+y+y";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_c.value = 2;
    inp_d.value = 6;
    inp_n_x.value = 2048;
    inp_n_y.value = 2048;	

 	inp_func.size = 39;
    inp_a.size = 39;
    inp_b.size = 39;
    inp_c.size = 39;
    inp_d.size = 39;
    inp_n_x.size = 39;
    inp_n_y.size = 39;

	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_b);
	insert_element(inp_c);
	insert_element(inp_d);
	insert_element(inp_n_x);
	insert_element(inp_n_y);
	insert_element(button1);
	insert_element(button2);
	
	insert_functions();
	
    button1.addEventListener("click",function(){
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/X(?!p)/g,'x');	 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var c = eval(inp_c.value);
	 var d = eval(inp_d.value);
	 var n_x = +inp_n_x.value;
	 var n_y = +inp_n_y.value;
	 var sum_x = 0, sum_y = 0;
     var h_x = (b-a)/n_x;
     var h_y = (d-c)/n_y;
     var result, x, y, I_y;
	 
     x = a;
	 while (x <= b-h_x) {
	   sum_y = 0;	 
	   y = c;
	   while (y <= d-h_y) {		   
		 sum_y += Math.abs(eval(func));
		 y += h_y;
	 }	 
	 I_y = sum_y * h_y;
	 sum_x += I_y;
     x += h_x;	 
	 }
	 result = h_x * sum_x;
	 
	var t_elapsed = new Date().getTime() - t_start;	 
	 insert_element(document.createTextNode("Площадь равна " + result));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",cr_Left_Parts);
     button4.addEventListener("click",start);  
	});
    button2.addEventListener("click",cr_Int);		
			
}

function cr_R_Parts(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_c = document.createElement("input");
    var inp_d = document.createElement("input");
    var inp_n_x = document.createElement("input");
    var inp_n_y = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");	
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Правые части (кратн.)";
	insert_element(h2);
		
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "Коорд. начала отрезка a";
    inp_b.placeholder = "Коорд. конца отрезка b";
    inp_c.placeholder = "Коорд. начала отрезка c";
    inp_d.placeholder = "Коорд. конца отрезка d";
    inp_n_x.placeholder = "Кол-во разбиений x";
    inp_n_y.placeholder = "Кол-во разбиений y";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
	inp_func.value = "x*x+y+y";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_c.value = 2;
    inp_d.value = 6;
    inp_n_x.value = 2048;
    inp_n_y.value = 2048;	

 	inp_func.size = 39;
    inp_a.size = 39;
    inp_b.size = 39;
    inp_c.size = 39;
    inp_d.size = 39;
    inp_n_x.size = 39;
    inp_n_y.size = 39;

	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_b);
	insert_element(inp_c);
	insert_element(inp_d);
	insert_element(inp_n_x);
	insert_element(inp_n_y);
	insert_element(button1);
	insert_element(button2);
	
	insert_functions();
	
    button1.addEventListener("click",function(){
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/X(?!p)/g,'x');	 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var c = eval(inp_c.value);
	 var d = eval(inp_d.value);
	 var n_x = +inp_n_x.value;
	 var n_y = +inp_n_y.value;
	 var sum_x = 0, sum_y = 0;
     var h_x = (b-a)/n_x;
     var h_y = (d-c)/n_y;
     var result, x, y, I_y;
	 
     x = a+h_x;
	 while (x <= b) {
	   sum_y = 0;	 
	   y = c+h_y;
	   while (y <= d) {		   
		 sum_y += Math.abs(eval(func));
		 y += h_y;
	 }	 
	 I_y = sum_y * h_y;
	 sum_x += I_y;
     x += h_x;	 
	 }
	 result = h_x * sum_x;
	 
	var t_elapsed = new Date().getTime() - t_start;	 
	 insert_element(document.createTextNode("Площадь равна " + result));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",cr_R_Parts);
     button4.addEventListener("click",start);  
	});
    button2.addEventListener("click",cr_Int);		
			
}

function cr_Trap_Parts(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_c = document.createElement("input");
    var inp_d = document.createElement("input");
    var inp_n_x = document.createElement("input");
    var inp_n_y = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");	
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Трапеции (кратн.)";
	insert_element(h2);
		
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "Коорд. начала отрезка a";
    inp_b.placeholder = "Коорд. конца отрезка b";
    inp_c.placeholder = "Коорд. начала отрезка c";
    inp_d.placeholder = "Коорд. конца отрезка d";
    inp_n_x.placeholder = "Кол-во разбиений x";
    inp_n_y.placeholder = "Кол-во разбиений y";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
	inp_func.value = "x*x+y+y";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_c.value = 2;
    inp_d.value = 6;
    inp_n_x.value = 2048;
    inp_n_y.value = 2048;	

 	inp_func.size = 39;
    inp_a.size = 39;
    inp_b.size = 39;
    inp_c.size = 39;
    inp_d.size = 39;
    inp_n_x.size = 39;
    inp_n_y.size = 39;

	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_b);
	insert_element(inp_c);
	insert_element(inp_d);
	insert_element(inp_n_x);
	insert_element(inp_n_y);
	insert_element(button1);
	insert_element(button2);
	
	insert_functions();
	
    button1.addEventListener("click",function(){
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/X(?!p)/g,'x');	 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var c = eval(inp_c.value);
	 var d = eval(inp_d.value);
	 var n_x = +inp_n_x.value;
	 var n_y = +inp_n_y.value;
	 var sum_x = 0, sum_y = 0;
     var h_x = (b-a)/n_x;
     var h_y = (d-c)/n_y;
     var result, x, y, I_y, fc, fd;
	 
	 x = a + h_x;
	 while (x <= b-h_x) {
	   sum_y = 0;	 
	   y = c + h_y;
	   while (y <= d-h_y) {		   
		 sum_y += Math.abs(eval(func));
		 y += h_y;
	 }	 
	 fc = Math.abs(eval(func.replace(/y(?!p)/g,'c')));
	 fd = Math.abs(eval(func.replace(/y(?!p)/g,'d')));
	 I_y = h_y*((fc+fd)/2+sum_y);
	 sum_x += I_y;
     x += h_x;	 
	 }

	 fa = eval(func.replace(/x(?!p)/g,'a'));
	 fb = eval(func.replace(/x(?!p)/g,'b'));
	 result = h_x * ((fa+fb)/2+sum_x);
	 
	var t_elapsed = new Date().getTime() - t_start;	 
	 insert_element(document.createTextNode("Площадь равна " + result));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",cr_Trap_Parts);
     button4.addEventListener("click",start);  
	});
    button2.addEventListener("click",cr_Int);		
			
}

function cr_Par_Parts(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_c = document.createElement("input");
    var inp_d = document.createElement("input");
    var inp_n_x = document.createElement("input");
    var inp_n_y = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");	
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Параболы (кратн.)";
	insert_element(h2);
		
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "Коорд. начала отрезка a";
    inp_b.placeholder = "Коорд. конца отрезка b";
    inp_c.placeholder = "Коорд. начала отрезка c";
    inp_d.placeholder = "Коорд. конца отрезка d";
    inp_n_x.placeholder = "Кол-во разбиений x";
    inp_n_y.placeholder = "Кол-во разбиений y";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
	inp_func.value = "x*x+y+y";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_c.value = 2;
    inp_d.value = 6;
    inp_n_x.value = 2048;
    inp_n_y.value = 2048;	

 	inp_func.size = 39;
    inp_a.size = 39;
    inp_b.size = 39;
    inp_c.size = 39;
    inp_d.size = 39;
    inp_n_x.size = 39;
    inp_n_y.size = 39;

	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_b);
	insert_element(inp_c);
	insert_element(inp_d);
	insert_element(inp_n_x);
	insert_element(inp_n_y);
	insert_element(button1);
	insert_element(button2);
	
	insert_functions();
	
    button1.addEventListener("click",function(){
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/X(?!p)/g,'x');	 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var c = eval(inp_c.value);
	 var d = eval(inp_d.value);
	 var n_x = +inp_n_x.value;
	 var n_y = +inp_n_y.value;
	 var sum_x = 0, sum_y = 0;
	 var sum_x_2 = 0, sum_y_2 = 0;
     var h_x = (b-a)/n_x;
     var h_y = (d-c)/n_y;
     var result, x, y, I_y, fc, fd;
	
	 x = a + h_x;
	 while (x <= b-h_x) {
	   sum_y = 0;	
       sum_y_2 = 0;	   
	   y = c + h_y;
	   while (y <= d-h_y) {		   
		 sum_y += Math.abs(eval(func));
		 y += h_y;
		 sum_y_2 += Math.abs(eval(func));
		 y += h_y;
	 }	 

	 fc = Math.abs(eval(func.replace(/y(?!p)/g,'c')));
	 fd = Math.abs(eval(func.replace(/y(?!p)/g,'d')));
	 I_y = (h_y/3)*(fc+fd+4*sum_y+2*sum_y_2);
	 sum_x += I_y;
     x += h_x;	
	 sum_x_2 += I_y;
     x += h_x;	 
	 }
	 fa = eval(func.replace(/x(?!p)/g,'a'));
	 fb = eval(func.replace(/x(?!p)/g,'b'));
	 result = (h_x/3) * (fa+fb+4*sum_x+2*sum_x_2);
	 
	var t_elapsed = new Date().getTime() - t_start;	 
	 insert_element(document.createTextNode("Площадь равна " + result));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",cr_Par_Parts);
     button4.addEventListener("click",start);  
	});
    button2.addEventListener("click",cr_Int);		
			
}

function diff(){
alert('Пока не реализовано');
}


function slau(){
let A = [
[1,2,3,2],
[3,4,5,5],
[6,0,8,1],
];

let Q = 9;	
	
	document.body.innerHTML = "<div></div>";
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var button5 = document.createElement("button");
    var button6 = document.createElement("button");
    var button7 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Решение СЛАУ";
	insert_element(h2);
	
	button1.innerHTML = "Стандартный";
    button2.innerHTML = "Оптимальный";
    button3.innerHTML = "С выбором по строке";
	button4.innerHTML = "Строка и столбец";
	button5.innerHTML = "Строка";
	button6.innerHTML = "Гаусса-Жордана";
    button7.innerHTML = "Назад";

	insert_element(button1);
	insert_element(button2);
	insert_element(button3);
	insert_element(button4);
	insert_element(button5);
	insert_element(button6);
	insert_element(button7);
	
    button1.addEventListener("click",slay_stand.bind(null,A,Q));
    button2.addEventListener("click",slay_opt.bind(null,A));
    button3.addEventListener("click",slay_stolb.bind(null,A,Q));
    button4.addEventListener("click",slay_str_stolb.bind(null,A));
    button5.addEventListener("click",slay_str.bind(null,A,Q));
    button6.addEventListener("click",slay_g_j.bind(null,A,Q));
    button7.addEventListener("click",start);

}


function show_matrix_element(p){
document.querySelectorAll("div")[0].appendChild(document.createTextNode(p));	
}
function new_line(){
document.querySelectorAll("div")[0].appendChild(document.createElement('p'));	
}

function slay_g_j(a,q){ 
const n = a.length; 

document.body.innerHTML = "<div></div>";
let button1 = document.createElement("button");
    button1.innerHTML = "Назад";
	insert_element(button1);
    button1.addEventListener("click",slau);
     show_matrix_element('Гаусса-Жордана');	
	 new_line();
     show_matrix_element('Для матрицы');
	 new_line();
for(let i=0;i<n;i++){
	for(let j=0;j<n;j++){
     show_matrix_element(a[i][j] + ' ');	   	
    }	
     new_line();
}
let time = Date.now(); 

let x =[]; 
//Приведение матрицы к диагональномму виду 
for (let i = 0; i < n; i++) { 
let tmp = a[i][i]; 
for (let j = i; j <= n; j++) { 
a[i][j] = (a[i][j]/tmp).toFixed(q); 
} 
for (let l = i+1; l < n; l++) { 
tmp = a[l][i]; 
for (let j = i+1; j <= n; j++) { 
a[l][j] = +(a[l][j]-a[i][j] * tmp).toFixed(q); 
} 
a[l][i]=Number(0).toFixed(q); 
} 
} 
for (let i=(n-2); i>=0; i--) { 
let sum = 0; 
for (let j = (n-1); j > i; j--) { 
sum+=Number(a[i][j]); 
a[i][j]=Number(0).toFixed(q); 
} 
a[i][n]=(a[i][n]-sum).toFixed(q); 
} 

for(let i=0;i<n;i++){
	for(let j=0;j<n;j++){
     show_matrix_element(a[i][j] + ' ');	   	
    }	
     new_line();
}

//Обратный ход 
x[n - 1] = +(a[n - 1][n] / a[n - 1][n - 1]).toFixed(q); 
for (let i = n - 2; i >= 0; i--) { 
let sum=0; 
for (let j = i + 1; j < n; j++) { 
sum += a[i][j] * x[j]; 
} 
x[i] = +(a[i][n] - sum).toFixed(q); 
} 

console.log("Время выполнения: ",((Date.now() - time)/100)); 

show_matrix_element('Решением будет');
new_line();
	 
for(let i=0;i<n;i++){
 show_matrix_element(x[i] + ' ');
 new_line(); 
 }
 
} 

function slay_str(a,q){ 
const n = a.length; 

document.body.innerHTML = "<div></div>";
let button1 = document.createElement("button");
    button1.innerHTML = "Назад";
	insert_element(button1);
    button1.addEventListener("click",slau);
     show_matrix_element('Строка');	
	 new_line();
     show_matrix_element('Для матрицы');
	 new_line();
for(let i=0;i<n;i++){
	for(let j=0;j<n;j++){
     show_matrix_element(a[i][j] + ' ');	   	
    }	
     new_line();
}
	
let time = Date.now();
	
let aTmp=[]; 
for(let i=0; i<=n; i++){ 
aTmp[i]=i+1; 
} 
a.push(aTmp); 

new_line();
	 
for(let i=0;i<=n;i++){
	for(let j=0;j<n;j++){
     show_matrix_element(a[i][j] + ' ');	   	
    }	
     new_line();
}

for (let i=0; i<=n; i++){ 
//Поиск максимального элемента в строке 
let max = Math.abs(a[i][i]); 
for (let j=i;j<n-1;j++){ 
max = a[i][j]>max ? Math.abs(a[i][j]) : max; 
console.log(i + ' ' + max)
} 
let numMax = a[i].indexOf(max); 
if (numMax != i){ 
// перестановка j-го столбца, содержащей главный элемент k=i-ой строки 
for (let k=0;k<=n;k++) { 
let tmp = a[k][i]; 
a[k][i] = a[k][numMax]; 
a[k][numMax] = tmp; 
} 
} 
} 
let numer = a.pop(); 
console.log(numer)
numer.pop(); 
console.log(numer)
let res = slay_stand(a,q); 

console.log("Время выполнения: ",((Date.now() - time)/100));

show_matrix_element('Решением будет');
new_line();
	 
for(let i=0;i<n;i++){
 show_matrix_element(res[i] + ' ');
 new_line(); 
 }
 
} 

function slay_str_stolb(a,q){ 
const n = a.length; 

document.body.innerHTML = "<div></div>";
let button1 = document.createElement("button");
    button1.innerHTML = "Назад";
	insert_element(button1);
    button1.addEventListener("click",slau);
     show_matrix_element('Строка и столбец');	
	 new_line();
     show_matrix_element('Для матрицы');
	 new_line();
for(let i=0;i<n;i++){
	for(let j=0;j<n;j++){
     show_matrix_element(a[i][j] + ' ');	   	
    }	
     new_line();
}

let time = Date.now();
	
for (let j=0; j<n; j++){ 
//Поиск максимального элемента в первом столбце 
let max = Math.abs(a[j][j]); 
let i = j; 
for(let m = j; m<n; m++) { 
if (Math.abs(a[m][j]) > max) { 
i = m; 
max = Math.abs(a[m][j]); 
} 
} 

if (i != j){ 
// перестановка i-ой строки, содержащей главный элемент j-ой строки 
let tmp = a[j]; 
a[j]=a[i]; 
a[i]=tmp; 


} 
} 
console.log(a); 
let aTmp=[]; 
for(let i=0; i<=n; i++){ 
aTmp[i]=i+1; 
} 
a.push(aTmp); 
for (let i=0; i<=n; i++){ 
//Поиск максимального элемента в строке 
let max = Math.abs(a[i][i]); 
for (let j=i;j<n-1;j++){ 
max = a[i][j]>max ? Math.abs(a[i][j]) : max; 
} 
let numMax = a[i].indexOf(max); 
if (numMax != i){ 
// перестановка j-го столбца, содержащей главный элемент k=i-ой строки 
for (let k=0;k<=n;k++) { 
let tmp = a[k][i]; 
a[k][i] = a[k][numMax]; 
a[k][numMax] = tmp; 
} 
} 
} 
console.log(a); 
let numer = a.pop(); 
numer.pop(); 
let res = slay_stand(a,q); 

console.log("Время выполнения: ",((Date.now() - time)/100));
show_matrix_element('Решением будет');
new_line();
	 
for(let i=0;i<n;i++){
 show_matrix_element(res[i] + ' ');
 new_line(); 
 }
 
} 

function slay_stolb(a,q){ 
const n = a.length; 

document.body.innerHTML = "<div></div>";
let button1 = document.createElement("button");
    button1.innerHTML = "Назад";
	insert_element(button1);
    button1.addEventListener("click",slau);
     show_matrix_element('Столбец');	
	 new_line();
     show_matrix_element('Для матрицы');
	 new_line()
	
for(let i=0;i<n;i++){
	for(let j=0;j<n;j++){
     show_matrix_element(a[i][j] + ' ');	   	
    }	
     new_line();
}
let time = Date.now();
for (let j=0; j<n; j++){ 
//Поиск максимального элемента в первом столбце 
let max = Math.abs(a[j][j]); 
let i = j; 
for(let m = j; m<n; m++) { 
if (Math.abs(a[m][j]) > max) { 
i = m; 
max = Math.abs(a[m][j]); 
} 
} 

if (i != j){ 
// перестановка i-ой строки, содержащей главный элемент j-ой строки 
let tmp = a[j]; 
a[j]=a[i]; 
a[i]=tmp; 


} 


} 

let res = slay_stand(a,q); 
 
console.log("Время выполнения: ",((Date.now() - time)/100));
show_matrix_element('Решением будет');
new_line();
	 
for(let i=0;i<n;i++){
 show_matrix_element(res[i] + ' ');
 new_line(); 
 }
}

function slay_opt(a) { 

const n = a.length; 	

document.body.innerHTML = "<div></div>";
let button1 = document.createElement("button");
    button1.innerHTML = "Назад";
	insert_element(button1);
    button1.addEventListener("click",slau);
     show_matrix_element('Оптимальный');	
	 new_line();	
     show_matrix_element('Для матрицы');
	 new_line()
	
for(let i=0;i<n;i++){
	for(let j=0;j<n;j++){
     show_matrix_element(a[i][j] + ' ');	   	
    }	
     new_line();
}

let time = Date.now(); 
//прямой ход 
let x = []; 
for (let i = 0; i < n; i++) { 
for (let k = i + 1; k < n; k++) { 
let temp = a[k][i]; 
for (let j = i; j < (n+1); j++) { 
a[k][j] = +(a[k][j]-a[i][j]*(temp/a[i][i])); 
} 
} 
} 
//Обратный ход 
x[n - 1] = (a[n-1][n] / a[n - 1][n - 1]); 
for (let i = n - 2; i >= 0; i--) { 
let sum=0; 
for (let j = i + 1; j < n; j++) { 
sum += a[i][j] * x[j]; 
} 
x[i] = (a[i][n] - sum)/a[i][i]; 
} 
console.log("Время выполнения: ",((Date.now() - time)/100)); 
show_matrix_element('Решением будет');
new_line();
	 
for(let i=0;i<n;i++){
 show_matrix_element(x[i] + ' ');
 new_line(); 
 }
} 

function slay_stand(a,q){
const n = a.length; 	

document.body.innerHTML = "<div></div>";
let button1 = document.createElement("button");
    button1.innerHTML = "Назад";
	insert_element(button1);
    button1.addEventListener("click",slau);
     show_matrix_element('Стандартный');	
	 new_line();	
     show_matrix_element('Для матрицы');
	 new_line()
	
for(let i=0;i<n;i++){
	for(let j=0;j<n;j++){
     show_matrix_element(a[i][j] + ' ');	   	
    }	
     new_line();
}


let time = Date.now(); 
let x = []; 
//Приведение матрицы к треугольному виду 
for (let i = 0; i < n; i++) { 
let tmp = a[i][i]; 
for (let j = 0; j <= n; j++) { 
a[i][j] = (a[i][j]/tmp); 
} 
for (let k = i + 1; k < n; k++) { 
for (let j = i+1; j < (n+1); j++) { 
a[k][j] = (a[k][j]-(a[i][j] * a[k][i])); 
} 
} 
} 
//Обратный ход 
x[n - 1] = +(a[n - 1][n] / a[n - 1][n - 1]).toFixed(q); 
for (let i = n - 2; i >= 0; i--) { 
let sum=0; 
for (let j = i + 1; j < n; j++) { 
sum += a[i][j] * x[j]; 
} 
x[i] = +(a[i][n] - sum).toFixed(q); 
} 
console.log("Время выполнения: ",((Date.now() - time)/100));

show_matrix_element('Решением будет');
new_line();
	 
for(let i=0;i<n;i++){
 show_matrix_element(x[i] + ' ');	
 new_line(); 
 }
 return x;
} 

function nelur(){
alert('Пока не реализовано');		
}

function post_Shag(){
	document.body.innerHTML = "<div></div>";
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var button5 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "С постоянным шагом";
	insert_element(h2);
	
	button1.innerHTML = "Метод левых частей";
    button2.innerHTML = "Метод правых частей";
    button3.innerHTML = "Метод трапеции";
    button4.innerHTML = "Метод парабол";
    button5.innerHTML = "Назад";

	insert_element(button1);
	insert_element(button2);
	insert_element(button3);
	insert_element(button4);
	insert_element(button5);
	
    button1.addEventListener("click",const_Left_Parts);
    button2.addEventListener("click",const_Right_Parts);
    button3.addEventListener("click",const_Trapec);
    button4.addEventListener("click",const_Parabol);
    button5.addEventListener("click",integr);	
}

function perem_Shag(){
	document.body.innerHTML = "<div></div>";
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var button5 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "С переменным шагом";
	insert_element(h2);
	
	button1.innerHTML = "Метод левых частей";
    button2.innerHTML = "Метод правых частей";
    button3.innerHTML = "Метод трапеции";
    button4.innerHTML = "Метод парабол";
    button5.innerHTML = "Назад";

	insert_element(button1);
	insert_element(button2);
	insert_element(button3);
	insert_element(button4);
	insert_element(button5);
	
    button1.addEventListener("click",perem_Left_Parts);
    button2.addEventListener("click",perem_Right_Parts);
    button3.addEventListener("click",perem_Trapec);
    button4.addEventListener("click",perem_Parabol);
    button5.addEventListener("click",integr);		
}

function perem_Left_Parts(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_e = document.createElement("input");
    var inp_pr = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Левых частей (пер. шаг)";
	insert_element(h2);
		
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "Коорд. начала отрезка";
    inp_b.placeholder = "Коорд. конца отрезка";
    inp_e.placeholder = "Точность вычисления";
    inp_pr.placeholder = "Производная";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
	inp_func.value = "Math.exp(Math.sqrt(x))";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_e.value = 0.00001;
    inp_pr.value = "Math.exp(Math.sqrt(x))/(2*Math.sqrt(x))";
		
 	inp_func.size = 30;
    inp_a.size = 2;
    inp_b.size = 2;
    inp_e.size = 39;
    inp_pr.size = 39;
  	
	inp_func.id = "inp_func_id";
	inp_func.autofocus = "true";	
	insert_element(inp_b);
	insert_element(integr_sign);	
	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_e);
	insert_element(inp_pr);
	insert_element(button1);
	insert_element(button2);
	
	insert_functions();
	
  button1.addEventListener("click",function(){
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/X(?!p)/g,'x');	 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var e = eval(inp_e.value);
	 var pr = (inp_pr.value).replace(/x(?!p)/g,'i');
	 var sum = 0;
     var x = a;
     var s, r, eps;
     var array = [];
     var i=a;
    var I2n=1;
    var In=0;
    
  while(i<b){ 
    array.push(eval(pr));
    i+=1
  } 
	 r = (((b-a)*(b-a))/2)*Math.abs.apply(null,array);
	 h = (b-a)/r;
   do{
     x=a;
     while (x <= b-h) {
        sum += eval(func);
        x += h;
     }
     I2n = (sum * h);
     R=Math.abs(I2n-In);
     In=I2n;
     sum=0;
     h=h/2;
   } while(R > e)
	   
     	var t_elapsed = new Date().getTime() - t_start;
	 insert_element(document.createTextNode("Площадь равна " + I2n));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
   insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",perem_Left_Parts);
     button4.addEventListener("click",start); 
	});
    button2.addEventListener("click",perem_Shag);		
	
	}

function perem_Right_Parts(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_e = document.createElement("input");
    var inp_pr = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Правых частей (пер. шаг)";
	insert_element(h2);
		
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "Коорд. начала отрезка";
    inp_b.placeholder = "Коорд. конца отрезка";
    inp_e.placeholder = "Точность вычисления";
    inp_pr.placeholder = "Производная";

	inp_func.value = "Math.exp(Math.sqrt(x))";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_e.value = 0.00001;
    inp_pr.value = "Math.exp(Math.sqrt(x))/(2*Math.sqrt(x))";
	
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
		
 	inp_func.size = 30;
    inp_a.size = 2;
    inp_b.size = 2;
    inp_e.size = 39;
    inp_pr.size = 39;
  	
	inp_func.id = "inp_func_id";
	inp_func.autofocus = "true";	
	insert_element(inp_b);
	insert_element(integr_sign);	
	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_e);
	insert_element(inp_pr);
	insert_element(button1);
	insert_element(button2);
	
	insert_functions();
	
  button1.addEventListener("click",function(){
	 var t_start = new Date().getTime();
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/X(?!p)/g,'x');	 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var e = eval(inp_e.value);
	 var pr = (inp_pr.value).replace(/x(?!p)/g,'i');
	 var sum = 0;
     var x = a;
     var s, r, eps;
     var array = [];
     var i=a;
    var I2n=1;
    var In=0;
    
  while(i<b){ 
    array.push(eval(pr));
    i+=1
  } 
	 r = (((b-a)*(b-a))/2)*Math.abs.apply(null,array);
	 h = (b-a)/r;
   do{
     x=a+h;
     while (x <= b) {
        sum += eval(func);
        x += h;
     }
     I2n = (sum * h);
     R=Math.abs(I2n-In);
     In=I2n;
     sum=0;
     h=h/2;
   } while(R > e)
     	var t_elapsed = new Date().getTime() - t_start;
	 insert_element(document.createTextNode("Площадь равна " + I2n));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
   insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",perem_Right_Parts);
     button4.addEventListener("click",start); 
	});
    button2.addEventListener("click",perem_Shag);		
	
}

function perem_Trapec(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_e = document.createElement("input");
    var inp_pr = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Трапеций (пер. шаг)";
	insert_element(h2);
		
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "Коорд. начала отрезка";
    inp_b.placeholder = "Коорд. конца отрезка";
    inp_e.placeholder = "Точность вычисления";
    inp_pr.placeholder = "Производная";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
	inp_func.value = "Math.exp(Math.sqrt(x))";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_e.value = 0.00001;
    inp_pr.value = "(Math.exp(Math.sqrt(x))*(Math.sqrt(x)-1))/(4*Math.pow(x,3/2))";
		
 	inp_func.size = 30;
    inp_a.size = 2;
    inp_b.size = 2;
    inp_e.size = 39;
    inp_pr.size = 39;
  	
	inp_func.id = "inp_func_id";
	inp_func.autofocus = "true";	
	insert_element(inp_b);
	insert_element(integr_sign);	
	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_e);
	insert_element(inp_pr);
	insert_element(button1);
	insert_element(button2);
	
	insert_functions();
	
   button1.addEventListener("click",function(){
	 var t_start = new Date().getTime();  
	   
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/x(?!p)/g,'x');	 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var e = eval(inp_e.value);
	 var pr = (inp_pr.value).replace(/x(?!p)/g,'i');
	 var sum = 0;
     var In=1;
     var I2n=0;
     var fa,fb,x;
     var i = a;
     var array = [];
     
    while(i<b){
      array.push(eval(pr));
      i+=1;
    }    
     var n = (((b-a)*(b-a)*(b-a))/12)*Math.abs(Math.max.apply(null,array));
     var h = (b-a)/n;
	 
    do{
      x = a+h; 
      sum = 0;	  
      while (x <= (b-h)) {		
        sum += (eval(func.replace(/x(?!p)/g,'(x+h)'))+eval(func.replace(/x(?!p)/g,'(x-h)')))/2;
        x += h;
      }
      fa = Math.abs(eval(func.replace(/x(?!p)/g,'a')));
      fb = Math.abs(eval(func.replace(/x(?!p)/g,'b')));
      I2n = h*((fa+fb)/2+sum);
      R = Math.abs(I2n-In);
      In=I2n;
      h=h/2;
    }while(R > e/2)
	var t_elapsed = new Date().getTime() - t_start;

    insert_element(document.createTextNode("Площадь равна " + I2n));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",perem_Trapec);
     button4.addEventListener("click",start); 
	});
    button2.addEventListener("click",perem_Shag);		
					
}

function perem_Parabol(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_e = document.createElement("input");
    var inp_pr = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Парабол (пер. шаг)";
	insert_element(h2);
		
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "Коорд. начала отрезка";
    inp_b.placeholder = "Коорд. конца отрезка";
    inp_e.placeholder = "Точность вычисления";
    inp_pr.placeholder = "Производная";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
	inp_func.value = "Math.exp(Math.sqrt(x))";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_e.value = 0.00001;
    inp_pr.value = "(Math.exp(Math.sqrt(x))*(Math.pow(x,3/2)-6*x+15*Math.sqrt(x)-15))/(16*Math.pow(x,7/2))";
		
 	inp_func.size = 30;
    inp_a.size = 2;
    inp_b.size = 2;
    inp_e.size = 39;
    inp_pr.size = 39;
  	
	inp_func.id = "inp_func_id";
	inp_func.autofocus = "true";	
	insert_element(inp_b);
	insert_element(integr_sign);	
	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_e);
	insert_element(inp_pr);
	insert_element(button1);
	insert_element(button2);
	
	insert_functions();
	
    button1.addEventListener("click",function(){
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/x(?!p)/g,'x');	 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var e = +inp_e.value;
	 var pr = (inp_pr.value).replace(/x(?!p)/g,'i');
     var fa,fb;
     var i = a;
     var array = [];
     var sum = 0, sum2 = 0, x, R, s;
	 var I2n = 1;
     var In = 0;
	 
     while(i<b){
       array.push(Math.abs(eval(pr)));
       i+=1;
     }
     
     n=(Math.pow(b-a,5)/2880)*Math.abs(Math.max.apply(null,array));
     h=(b-a)/n;
    do{
      sum=0;
      sum2=0;		
	    x = a+h;
	  do {
        sum += eval(func);
        x += 2*h;		 	
	  } while (x <= b-h);
	  x = a+2*h;
	  do {
        sum2 += eval(func);
        x += 2*h;		  				
	  } while (x <= b-2*h);
      fa = Math.abs(eval(func.replace(/x(?!p)/g,'a')));
      fb = Math.abs(eval(func.replace(/x(?!p)/g,'b')));
      s = (h/3)*(fa+fb+4*sum+2*sum2);
      I2n = s;
      R = Math.abs(I2n-In);
      In = I2n;
      h = h/2;
    }while(R > e/2);
	var t_elapsed = new Date().getTime() - t_start;
	 insert_element(document.createTextNode("Площадь равна " + I2n));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",perem_Parabol);
     button4.addEventListener("click",start); 
	});
    button2.addEventListener("click",perem_Shag);							
}
  
function const_Left_Parts(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_n = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Метод левых частей";
	insert_element(h2);
			
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "Коорд. начала отрезка";
    inp_b.placeholder = "Коорд. конца отрезка";
    inp_n.placeholder = "Кол-во разбиений";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
 	inp_func.size = 30;
    inp_a.size = 2;
    inp_b.size = 2;
    inp_n.size = 39;
	
	inp_func.value = "Math.exp(Math.sqrt(x))";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_n.value = 100000;

	inp_func.id = "inp_func_id";
	inp_func.autofocus = "true";	
	insert_element(inp_b);
	insert_element(integr_sign);	
	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_n);
	insert_element(button1);
	insert_element(button2);
	
	insert_functions();
	
    button1.addEventListener("click",function(){
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/X(?!p)/g,'x');	 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var n = +inp_n.value;
	 var sum = 0;
     var h = (b-a)/n;
     var x = a;
     var s;

     while (x <= b-h) {
        sum = sum + eval(func);
        x = x + h;
     }
     s = sum * h;
	var t_elapsed = new Date().getTime() - t_start;	 
	 insert_element(document.createTextNode("Площадь равна " + s));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",const_Left_Parts);
     button4.addEventListener("click",start); 
	});
    button2.addEventListener("click",post_Shag);		
	
	}

function const_Right_Parts(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_n = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");	
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Метод правых частей";
	insert_element(h2);
		
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "a";
    inp_b.placeholder = "b";
    inp_n.placeholder = "Кол-во разбиений";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
 	inp_func.size = 30;
    inp_a.size = 2;
    inp_b.size = 2;
    inp_n.size = 39;
	
	inp_func.value = "Math.exp(Math.sqrt(x))";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_n.value = 100000;

	inp_func.id = "inp_func_id";
	inp_func.autofocus = "true";	
	insert_element(inp_b);
	insert_element(integr_sign);	
	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_n);
	insert_element(button1);
	insert_element(button2);
	
	insert_functions();
	
    button1.addEventListener("click",function(){
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/X(?!p)/g,'x'); 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var n = +inp_n.value;
	 var sum = 0;
     var h = (b-a)/n;
     var x = a+h;
     var s;

     while (x <= b) {
        sum = sum + eval(func);
        x = x + h;
     }
     s = sum * h;
	var t_elapsed = new Date().getTime() - t_start;	 
	 insert_element(document.createTextNode("Площадь равна " + s));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",const_Right_Parts);
     button4.addEventListener("click",start);  
	});
    button2.addEventListener("click",post_Shag);		
			
}

function const_Trapec(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_n = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");	
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Метод трапеций";
	insert_element(h2);
	
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "Коорд. начала отрезка";
    inp_b.placeholder = "Коорд. конца отрезка";
    inp_n.placeholder = "Кол-во разбиений";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
 	inp_func.size = 30;
    inp_a.size = 2;
    inp_b.size = 2;
    inp_n.size = 39;
	
	inp_func.value = "Math.exp(Math.sqrt(x))";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_n.value = 100000;

	inp_func.id = "inp_func_id";
	inp_func.autofocus = "true";	
	insert_element(inp_b);
	insert_element(integr_sign);	
	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_n);
	insert_element(button1);
	insert_element(button2);
	
	insert_functions();
	
    button1.addEventListener("click",function(){
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/X(?!p)/g,'x');	 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var n = +inp_n.value;
	 var sum = 0;
     var h = (b-a)/n;
     var x = a+h;
     var s,fa,fb;

     while (x <= b-h) {
        sum = sum + eval(func);
        x = x + h;
     }
	 
	 fa = eval(func.replace(/x(?!p)/g,'a'));
	 fb = eval(func.replace(/x(?!p)/g,'b'));

     s = h*((fa+fb)/2+sum);
	var t_elapsed = new Date().getTime() - t_start;	 
	 insert_element(document.createTextNode("Площадь равна " + s));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",const_Trapec);
     button4.addEventListener("click",start); 
	});
    button2.addEventListener("click",post_Shag);		
					
}

function const_Parabol(){
	document.body.innerHTML = "<div></div><div></div><div></div>";
    var inp_func = document.createElement("input");
    var inp_a = document.createElement("input");
    var inp_b = document.createElement("input");
    var inp_n = document.createElement("input");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var h2 = document.createElement("h2");	
		
    h2.innerHTML = "Метод парабол";
	insert_element(h2);
	
	inp_func.placeholder = "Подынтегр. выражение";
    inp_a.placeholder = "Коорд. начала отрезка";
    inp_b.placeholder = "Коорд. конца отрезка";
    inp_n.placeholder = "Кол-во разбиений";
    button1.innerHTML = "Вычислить";
    button2.innerHTML = "Назад";
	button3.innerHTML = "Вернуться на экран расчёта";	  
	button4.innerHTML = "В главное меню";
	
 	inp_func.size = 30;
    inp_a.size = 2;
    inp_b.size = 2;
    inp_n.size = 39;
	
	inp_func.value = "Math.exp(Math.sqrt(x))";
    inp_a.value = 1;
    inp_b.value = 5;
    inp_n.value = 100000;

	inp_func.id = "inp_func_id";
	inp_func.autofocus = "true";	
	insert_element(inp_b);
	insert_element(integr_sign);	
	insert_element(inp_func);
	insert_element(inp_a);
	insert_element(inp_n);
	insert_element(button1);
	insert_element(button2);

	insert_functions();
	
    button1.addEventListener("click",function(){
	 var t_start = new Date().getTime(); 
	 document.body.innerHTML = "<div></div>";
	 var func = (inp_func.value).replace(/X(?!p)/g,'x'); 
	 var a = eval(inp_a.value);
	 var b = eval(inp_b.value);
	 var n = +inp_n.value;
	 var sum = 0, sum2 = 0;
     var h = (b-a)/n;
     var x = a+h;
     var s,fa,fb;

     while (x <= b-h) {
        sum = sum + eval(func);
        x = x + 2 * h;
     }
	 x = a+2*h;
     while (x <= b-2*h) {
        sum2 = sum2 + eval(func);
        x = x + 2 * h;
     }
	 
	 fa = eval(func.replace(/x(?!p)/g,'a'));
	 fb = eval(func.replace(/x(?!p)/g,'b'));
     s = h/3*(fa+fb+4*sum+2*sum2);
	var t_elapsed = new Date().getTime() - t_start;	 
	 insert_element(document.createTextNode("Площадь равна " + s));
    insert_element(document.createTextNode("Время вычисления: " + t_elapsed/1000 + " секунд"));
	 insert_element(button3);		 
	 insert_element(button4);	
     button3.addEventListener("click",const_Parabol);
     button4.addEventListener("click",start); 
	});
    button2.addEventListener("click",post_Shag);		
							
}