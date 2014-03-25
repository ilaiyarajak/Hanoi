initNewGame=function(level){
	//alert('new game:'+level);
	$('#idContainer1').html(getContainerData(level,1));
	$('#idContainer2').html(getContainerData(level,2));
	$('#idContainer3').html(getContainerData(level,3));
	isGameStared=true;
	
	localStorage.clicks=0;
	localStorage.moves=0;
	localStorage.score=0;
	localStorage.duration=0;
	tmpLastClickCount=0;
	setDisplayData();
	startTimer();
}
getTimeFrmSeconds=function(seconds){
	var mins=parseInt(seconds/60);
	var hrs=parseInt(mins/60);
	mins=mins%60;
	seconds=seconds%60;
	return hrs+':'+mins+':'+seconds;
}
timer=setInterval(function(){
	if(timerRunning)
	{
		timerSeconds++;
		//console.log('timerSeconds='+timerSeconds);
		setHtml('idHanoiDurCountDiv','Dur:'+getTimeFrmSeconds(timerSeconds));
	}
},1000);
startTimer=function()
{
	timerSeconds=0;
	timerRunning=true;
}
pauseTimer=function()
{
	timerRunning=false;
}
continueTimer=function(){
	timerRunning=true;
}
readyToPop=function(containerNo){
	readyToPopContainerNo=containerNo;
	//alert('Pop from container:'+containerNo);
	var currentTopItemId=$('#idContainer'+containerNo).find('.clsItem').attr('id');
	$currentItemPlace=$('#'+currentTopItemId);
	//var count=$('#idContainer'+containerNo).find('.clsItem').length;
	lastItemPlaceId=$currentItemPlace.attr('id');
	var itemSize=$currentItemPlace.attr('data-itemsize');
	$placeTop=$('#idContainer'+containerNo).find('.clsTop');
	move($currentItemPlace,$placeTop);
	addClick();
	/*$currentItemPlace.removeClass('clsItem'+itemSize);
	$currentItemPlace.removeClass('clsItem');
	//alert('currentItemPlace='+itemSize);
	$currentItemPlace.attr('data-itemsize','0');
	$placeTop.addClass('clsItem'+itemSize);
	$placeTop.addClass('clsItem');
	$placeTop.attr('data-itemsize',itemSize);
	*/
	//alert('currentItemPlace='+$currentItemPlace.attr('id'));
}
resetPopReady=function(){
	//alert('readyToPopContainerNo='+readyToPopContainerNo);
	$placeTop=$('#idContainer'+readyToPopContainerNo).find('.clsTop');
	var itemSize=$placeTop.attr('data-itemsize');
	$currentItemPlace=$('#'+lastItemPlaceId);
	move($placeTop,$currentItemPlace);
	/*$currentItemPlace.addClass('clsItem'+itemSize);
	$currentItemPlace.addClass('clsItem');
	$currentItemPlace.attr('data-itemsize',itemSize);
	$placeTop.removeClass('clsItem'+itemSize);
	$placeTop.removeClass('clsItem');
	$placeTop.attr('data-itemsize','0');*/
	readyToPopContainerNo=0;
	lastItemPlaceId='0';
	addClick();
}
push=function(containerNo){
	//alert('push from='+readyToPopContainerNo+', to ='+containerNo);
	$placeTop=$('#idContainer'+readyToPopContainerNo).find('.clsTop');
	var count=$('#idContainer'+containerNo).find('.clsItem').length;
	//alert('count to container:='+count);
	var $topEmpty,$topContent;
	if(count>0)
	{
		//alert('p');
		var topIetmToContainer=$('#idContainer'+containerNo).find('.clsItem').attr('id');
		$topContent=$('#'+topIetmToContainer);
		var currentItemId=$('#idContainer'+containerNo).find('.clsItem').prev().attr('id');
		$topEmpty=$('#'+currentItemId);
		//alert('move item size='+$placeTop.attr('data-itemsize')+', top item size='+$topContent.attr('data-itemsize'));
		if($placeTop.attr('data-itemsize')<$topContent.attr('data-itemsize'))
		{
			addMove();
			move($placeTop,$topEmpty);
			//alert('addMoveT');
		}
		else
			resetPopReady();
	}
	else
	{
		//$topEmpty=$('#idPlace'+containerNo+'9');
		var levelPlaying=getLevelToLoad();
		//alert('#idPlace'+containerNo+(parseInt(levelPlaying)+4));
		$topEmpty=$('#idPlace'+containerNo+(parseInt(levelPlaying)+4));
		//alert($topEmpty.attr('id'));
		addMove();
		move($placeTop,$topEmpty);
		//alert('addMoveE');
	}
	//var itemSize=$placeTop.attr('data-itemsize');
	//alert('size to move top id='+$placeTop.attr('id'));
	//move($placeTop,$topEmpty);
	/* $topEmpty.addClass('clsItem'+itemSize);
	$topEmpty.addClass('clsItem');
	$topEmpty.attr('data-itemsize',itemSize);
	$placeTop.removeClass('clsItem'+itemSize);
	$placeTop.removeClass('clsItem');
	$placeTop.attr('data-itemsize','0'); */
	readyToPopContainerNo=0;
	lastItemPlaceId='0';
}
move=function($from,$to)
{
	//alert($to.attr('id'));
	var itemSize=$from.attr('data-itemsize');
	$to.addClass('clsItem'+itemSize);
	$to.addClass('clsItem');
	$to.attr('data-itemsize',itemSize);
	$to.css('margin',$from.css('margin'));
	$to.css('background-color',$from.css('background-color'));
	$to.html($from.html());
	$from.removeClass('clsItem'+itemSize);
	$from.removeClass('clsItem');
	$from.attr('data-itemsize','0');
	$from.css('margin','');
	$from.css('background-color','');
	$from.html('&nbsp;');
	checkSccess($to);
}
checkSccess=function($to)
{
	//alert($to.attr('id')+', ' +$to.attr('data-success'));
	if($to.attr('data-success')=='1')
	{
		//location.reload();
		var levelPlaying=getLevelToLoad();
		alert('Level-'+levelPlaying+' completed .');
		levelPlaying=parseInt(levelPlaying)+1;
		console.log('levelPlaying added 1:'+levelPlaying);
		setLevelplaying(levelPlaying);
		initNewGame(levelPlaying);
	}
}

getLevelToLoad=function(){
	console.log('getLevelToLoad. levelPlaying Before:='+ localStorage.levelPlaying);
	//if(localStorage.levelPlaying!=0 && localStorage.levelPlaying && localStorage.levelPlaying!='undefined')
		return localStorage.levelPlaying;
	/*else
	{
		setLevelplaying(1);
		return 1;
	}*/
    //console.log('getLevelToLoad. levelPlaying After:='+ localStorage.levelPlaying);
}
setLevelplaying=function(levelPlaying)
{
	console.log('setLevelplaying. levelPlaying. before:='+ localStorage.levelPlaying);
	localStorage.levelPlaying=levelPlaying;
	localStorage.levelUnlocked=levelPlaying;
	console.log('setLevelplaying. levelPlaying. after:='+ localStorage.levelPlaying);
}
