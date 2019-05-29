function vvodd()
{
  var n=document.forms[0].urav.value
  var m=new Array(n); //Рабочий массив
  var l=new Array(n); //Массив ответов
  var i, j, k;
  for(i=0; i<n; ++i)
  {
    m[i] = new Array(n);
    l[i] = new Array(n);
  }

  for(i=0; i<n; ++i)
  { //Заполнение матрицы
    for(j=0; j <= n; ++j)
    {
      m[i][j] = prompt("Введите коэффициенты:");
    }
  }
  document.write("<table>"); //Вывод исходной матрицы
  for(i=0; i<n; ++i)
  {
    for(j=0; j <= n; ++j)
    {
      if(j === 0) document.write("<tr>");
      document.write("<td>" + m[i][j] + "</td>");
      if(j === n) document.write("</tr>");
    }
    $("table").css({
         textAlign: "center",
         borderCollapse: "collapse",
         margin: "50px auto",
         fontSize: "20px",
         maxWidth: "70%",
         width: "40%",
         maxHeight: "50%",
         height: "10%"
       });

$("td", "tr").css({
  padding: "10px 15px",
  background: "#f3d9df  ",
  borderRight: "2px solid #858cf3",
  borderLeft: "2px solid #858cf3",
  border:  "3px solid #858cf3",
  color: "#039",
  padding: "8px"
  });
  }
    $("body").css({background: "#F2E1EE"})
  document.write("</table>");
  Iteration(n);
  Answers();

  function Iteration(iter_item)
  { //Функция итеррация
    for(iter_item=0;iter_item<(n-1);iter_item++)
    { //Цикл выполнения итерраций
      if (m[iter_item][iter_item] == 0) SwapRows(iter_item); //Проверка на ноль
      for(j=n; j>=iter_item; j--)
      {
        m[iter_item][j] /= m[iter_item][iter_item]; //Делим строку i на а[i][i]
      }
      for(i=iter_item+1; i<n; i++)
      { //Выполнение операций со строками
        for(j=n;j>=iter_item;j--)
        {
          m[i][j] -= m[iter_item][j] * m[i][iter_item];
        }
      }
      /*if (iter_item % 2) document.write("<table>");//Вывод итеррации
      else document.write("<table>");
      for(i=0; i<n; ++i)
      {
        document.write("<tr>");
        for(j=0; j <= n; ++j)
        {
          document.write("<td>" + m[i][j] + "</td>");
        }
        document.write("</tr>");
      }
      document.write("</table>");*/
    }
  };
  function SwapRows(iter_item)
  { //Функция перемены строк
    for(i=iter_item+1;i<n;i++)
    {
      if(m[i][iter_item] !== 0)
      {
        for(j=0;j<=n;j++)
        {
          k = m[i-1][j];
          m[i-1][j] = m[i][j];
          m[i][j] = k;
        }
      }
    }
  };
  function Answers()
  { //Функция поиска и вывода корней
    l[n-1] = m[n-1][n]/m[n-1][n-1];
    for(i=n-2;i>=0;i--)
    {
      k=0;
      for(j=n-1;j>i;j--)
      {
        k = (m[i][j]*l[j]) + k;
      }
      l[i] = m[i][n] - k;
    }
    for(i=n;i>0;i--)
    {
      document.write("<center><h2> x" + i + " = " + l[i-1] + "</h2></center>");
    }
  }
}
