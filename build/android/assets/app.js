var win1 = Ti.UI.createWindow({
	backgroundColor : 'yellow'
});
var win2 = Ti.UI.createWindow({
	backgroundColor : 'blue'
});

var view1 = Ti.UI.createView({
	backgroundColor : "#F0E68C",
	height : '95%',
	width : '95%'
});
var view2 = Ti.UI.createView({
	backgroundColor : "#4682B4",
	height : '95%',
	width : '95%'
});
var btnFirstWindow=Ti.UI.createButton({
	title:'Open 2nd Window',
	width:'150',
	height:'35',
	top:'150'
});
var btnSecondWindow=Ti.UI.createButton({
	title:'Close 2nd Window',
	width:'150',
	height:'35',
	top:'150'
});
btnFirstWindow.addEventListener('click',function(e){
	win2.open({
		transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
});
btnSecondWindow.addEventListener('click',function(e){
	win2.close({
		transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
	});
});
view1.add(btnFirstWindow);
view2.add(btnSecondWindow);
win1.add(view1);
win2.add(view2);
win1.open();

