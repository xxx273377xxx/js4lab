
function hello()
{
// переменная р объект текстовое поле с именем t
	var i=document.getElementById('i');
	var d=document.getElementById('d');
	var f=document.getElementById('f');
	var l=document.getElementById('l');
// переменная r содержит значение свойства value этого объекта
	name=i.value;
	data=d.value;
	friend=f.value;
	love=l.value;
// переменная win экземпляр объекта window
// создается пустое окно размерами 400 на 500,
	var win=window.open("","","width=400,height=500");
// открываем запись в это окно - объект win
	win.document.open();
// формирование строки str 
// содержимое в заголовок передается из поля формы, переменная r 
	var str = "<h1>"+"Я"+" "+name+"!!!</h1><hr><P>";
// вывод строки в документ окна win
	win.document.write(str);
	str ="<h2>"+"Родился "+data+".У меня есть друг/подруга "+friend+".Мы с ним/ней любим "+love+".</h2>";
	win.document.write(str);
// формирование и вывод кнопки закрытия
	str ='<input type="button" value="закрыть"'+'onClick="window.close();">';
	win.document.write(str);
// закрываем вывод в документ объекта win
	win.document.close();
	}
