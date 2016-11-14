
function hello()
{
// переменная р объект текстовое поле с именем t
	var i=document.getElementById('i');
	var d=document.getElementById('d');
	var s=document.getElementById('s');
	var z=document.getElementById('z');
	var j=document.getElementById('j');
	var e=document.getElementById('e');
	var p=document.getElementById('p');
	var n=document.getElementById('n');
	var g=document.getElementById('g');
// переменная r содержит значение свойства value этого объекта
	name=i.value;
	drug=d.value;
	spasitel=s.value;
	zlo=z.value;
	job=j.value;
	eat=e.value;
	perk=p.value;
	navik=n.value;
	gun=g.value;
// переменная win экземпляр объекта window
// создается пустое окно размерами 600 на 600,
	var win=window.open("","","width=600,height=600");
// открываем запись в это окно - объект win
	win.document.open();
// формирование строки str 
// содержимое в заголовок передается из поля формы, переменная r 
	var str = "<h1> Сказонька о "+name+"</h1><hr><P>";
// вывод строки в документ окна win
	win.document.write(str);
	str ="<h2>Давным давно,в высокой башне обитал/обитала "+name+" .У него/неё был/была друг/подруга "+drug+" который(ая) таскал(а) ей хавку из магаза и по хате помогал(а). "+name+
	" любил(а) "+job+" одновременно поглощая "+eat+" .Вроде как,всё было для счастья,но на самом деле "+name+" был(а) не счастлив(а) ибо его/её против воли держал(а) в башне сам/сама "
	+zlo+" .Однажды на спасение "+name+" пришел "+spasitel+" .Шоб спасти "+name+","+spasitel+" использовал(а) свой "+perk+" и как только наши герои ринулись на утёк "+zlo+" достал(а)"+
	"своё секретное оружие именуемое "+gun+",но "+spasitel+" юзанул/юзнула свой "+navik+" обратив "+gun+" против "+zlo+".<br>Вот и сказоньке конец.Дочитал?Ну молодец!</h2><br>";
	win.document.write(str);
// формирование и вывод кнопки закрытия
	str ='<input type="button" value="закрыть"'+'onClick="window.close();">';
	win.document.write(str);
// закрываем вывод в документ объекта win
	win.document.close();
	}
