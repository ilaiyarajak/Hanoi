getContainerData=function(level,container){
	//alert('level='+level+',container='+container);
	switch(container)
	{
		case 1:
			return sendContainerDdata(level,container);//sendContainer1Ddata();
			break;
		case 2:
			return sendContainerDdata(level,container);//sendContainer2Ddata();
			break;
		case 3:
			return sendContainerDdata(level,container);//sendContainer3Ddata();
			break
	} 

}
sendContainerDdata=function(level,container){
	var containerTop='<div id="idPlace'+container+'1" class="clsPlace clsTop">&nbsp;</div>';
	var containerSpace='<div id="idPlace'+container+'2" class="clsPlace clsSpace">&nbsp;</div>'
		+'<div id="idPlace'+container+'3" class="clsPlace clsSpace">&nbsp;</div>'
		+'<div id="idPlace'+container+'4" class="clsPlace clsSpace">&nbsp;</div>';
	var containerItemsSuccess='';
	
	var itemSizeInterval=50/level;
	var marginLeftRightPercent=50-(1*itemSizeInterval);
	var Item1Style="margin:0 "+marginLeftRightPercent+"% 0 "+marginLeftRightPercent+"%;background-color: rgb(49, 57, 150);;";
	if(container==1)
		//containerItemsSuccess='<div id="idPlace'+container+'5" class="clsPlace clsItem clsItem1" data-itemsize="1">&nbsp;</div>';
		containerItemsSuccess='<div id="idPlace'+container+'5" class="clsPlace clsItem clsItem1" data-itemsize="1" style="'+Item1Style+'">1</div>';
	else
		containerItemsSuccess='<div id="idPlace'+container+'5" class="clsPlace" data-itemsize="0" data-success="1">&nbsp;</div>';
	var containerItems='';
	var itemId=6;
	/* var itemClassName='';
	if(container==1)
		itemClassName="clsPlace clsItem";
	else
		itemClassName="clsPlace"; */
	var itemSizeInterval=50/level;
	//console.log('itemSizeInterval='+itemSizeInterval);
	for(var i=1;i<level;i++)
	{
		if(container==1)
		{			
			var backColor='red';
			var marginLeftRightPercent=50-((i+1)*itemSizeInterval);
			//var margin='0 '+(50-(i*itemSizeInterval))+'% 0 '+(50-(i*itemSizeInterval))+'%';
			//console.log('level='+level+', container='+container+', i='+i+', margin='+margin);
			containerItems+='<div id="idPlace'+container+''+(i+5)+'" style="margin:0 '+marginLeftRightPercent+'% 0 '+marginLeftRightPercent+'%;background-color: rgb(49, 57, 150);;" class="clsPlace clsItem clsItem'+(i+1)+'" data-itemsize="'+(i+1)+'" >'+(i+1)+'</div>';
			
			//containerItems+='<div id="idPlace'+container+''+(i+5)+'" class="clsPlace clsItem clsItem'+(i+1)+'" data-itemsize="'+(i+1)+'" >&nbsp;</div>';
		}
		else
			containerItems+='<div id="idPlace'+container+''+(i+5)+'" class="clsPlace" data-itemsize="0">&nbsp;</div>';
	}
	return containerTop+containerSpace+containerItemsSuccess+containerItems;
}
sendContainer3Ddata=function(){
 return '<div id="idPlace31" class="clsPlace clsTop">&nbsp;'
		+'</div>'
		+'<div id="idPlace32" class="clsPlace clsSpace">&nbsp;'
		+'</div>'
		+'<div id="idPlace33" class="clsPlace clsSpace">&nbsp;'
		+'</div>'
		+'<div id="idPlace34" class="clsPlace clsSpace">&nbsp;'
		+'</div>'
		+'<div id="idPlace35" class="clsPlace" data-itemsize="0" data-success="1">&nbsp;'
		+'</div>'
		+'<div id="idPlace36" class="clsPlace" data-itemsize="0">&nbsp;'
		+'</div>'
		+'<div id="idPlace37" class="clsPlace" data-itemsize="0">&nbsp;'
		+'</div>'
		+'<div id="idPlace38" class="clsPlace" data-itemsize="0">&nbsp;'
		+'</div>'
		+'<div id="idPlace39" class="clsPlace" data-itemsize="0">&nbsp;'
		+'</div>';
}
sendContainer2Ddata=function(){
 return '<div id="idPlace21" class="clsPlace clsTop">&nbsp;'
		+'</div>'
		+'<div id="idPlace22" class="clsPlace clsSpace">&nbsp;'
		+'</div>'
		+'<div id="idPlace23" class="clsPlace clsSpace">&nbsp;'
		+'</div>'
		+'<div id="idPlace24" class="clsPlace clsSpace">&nbsp;'
		+'</div>'
		+'<div id="idPlace25" class="clsPlace" data-itemsize="0" data-success="1">&nbsp;'
		+'</div>'
		+'<div id="idPlace26" class="clsPlace" data-itemsize="0">&nbsp;'
		+'</div>'
		+'<div id="idPlace27" class="clsPlace" data-itemsize="0">&nbsp;'
		+'</div>'
		+'<div id="idPlace28" class="clsPlace" data-itemsize="0">&nbsp;'
		+'</div>'
		+'<div id="idPlace29" class="clsPlace" data-itemsize="0">&nbsp;'
		+'</div>';
}
sendContainer1Ddata=function(){

 return '<div id="idPlace11" class="clsPlace clsTop" data-itemsize="0">&nbsp;'
		+'</div>'
		+'<div id="idPlace12" class="clsPlace clsSpace">&nbsp;'
		+'</div>'
		+'<div id="idPlace13" class="clsPlace clsSpace">&nbsp;'
		+'</div>'
		+'<div id="idPlace14" class="clsPlace clsSpace">&nbsp;'
		+'</div>'
		+'<div id="idPlace15" class="clsPlace clsItem1 clsItem" data-itemsize="1" data-success="0">&nbsp;'
		+'</div>'
		+'<div id="idPlace16" class="clsPlace clsItem2 clsItem" data-itemsize="2">&nbsp;'
		+'</div>'
		+'<div id="idPlace17" class="clsPlace clsItem3 clsItem" data-itemsize="3">&nbsp;'
		+'</div>'
		+'<div id="idPlace18" class="clsPlace clsItem4 clsItem" data-itemsize="4">&nbsp;'
		+'</div>'
		+'<div id="idPlace19" class="clsPlace clsItem5 clsItem" data-itemsize="5">&nbsp;'
		+'</div>';
}