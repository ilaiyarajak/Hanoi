var readyToPopContainerNo=0;//1;
var lastItemPlaceId='0';//'idPlace15';
var isGameStared=false;
var isNewButton=false;
var tmpLastClickCount=0;
//var levelPlaying=1;
var timer;
var timerSeconds=0;
var timerRunning=false;

$(document).on("pagebeforeshow","#home",function(e){ // When entering pagetwo
	pauseTimer();
});
$(document).on("pagebeforeshow","#hanoi",function(e){ // When entering pagetwo
	//alert();
	//e.preventDefault();
  var levelPlaying=getLevelToLoad();
  if(isNewButton)//If new button
  {
	initNewGame(levelPlaying);
  }
  else//Continue button
  {
	continueTimer();
	setDisplayData();
  }
  
});
setDisplayData=function()
{
	//alert(localStorage.moves);
  //Set variables on to the page
  setHtml('idHanoiClicksCountDiv','Clicks:'+localStorage.clicks);
  setHtml('idHanoiMovesCountDiv','Moves:'+localStorage.moves);
  setHtml('idHanoiLevelDiv','Level:'+localStorage.levelPlaying);
  setHtml('idHanoiDurCountDiv','Dur:'+localStorage.duration);
  tmpLastClickCount=localStorage.clicks;
}
setHtml=function(id,value)
{
	$('#'+id).html(value);
}
addMove=function()
{
	addClick();
	localStorage.moves=parseInt(localStorage.moves)+1;
	setHtml('idHanoiMovesCountDiv','Moves:'+localStorage.moves);
	/* //Calculate  score
	localStorage.score=parseInt(localStorage.score)+6-(localStorage.clicks-tmpLastClickCount);
	//alert(localStorage.clicks-tmpLastClickCount);
	tmpLastClickCount=localStorage.clicks;
	setHtml('idHanoiScoreCountDiv','Score:'+localStorage.score); */
}
addClick=function()
{
	localStorage.clicks=parseInt(localStorage.clicks)+1;
	setHtml('idHanoiClicksCountDiv','Clicks:'+localStorage.clicks);
}
initVariables=function()
{
	if(!localStorage.levelPlaying)	localStorage.levelPlaying=1;
	if(!localStorage.levelUnlocked){
		localStorage.levelUnlocked=localStorage.levelPlaying;
	}
	if(!localStorage.clicks)		localStorage.clicks=0;
	if(!localStorage.moves)		localStorage.moves=0;
	if(!localStorage.score)		localStorage.score=0;
	if(!localStorage.duration)		localStorage.duration=0;
}

$(function(){
	initVariables();
	
	//alert(localStorage.levelPlaying);
	$('#idBtnNewGame').click(function(){
		//alert('idBtnNewGame');
		isNewButton=true;
	});
	$('#idBtnContinueGame').click(function(){
		//alert('idBtnNewGame');
		if(!isGameStared)//if continue button without starting the game
		{
		 alert('No paused game to continue');
		 return false;
		}
		else
			isNewButton=false;
	});
	$('#idBtnLevel').click(function(){
	
		//alert(localStorage.levelUnlocked);
		var levelButons='';
		for(var i=1;i<=localStorage.levelUnlocked;i++)
			levelButons+='<a href="#sdf" class="clsBtnLoadLevel" data-role="button" data-inline="true"  data-mini="true" data-icon="delete" data-iconpos="right">'+i+'</a>';
		$('#idPopupContentDiv').html(levelButons);
		$('.clsBtnLoadLevel').button().button('refresh');
	});
	$('#idPopupContentDiv').on('click','.clsBtnLoadLevel',function(){
		//localStorage.levelUnlocked=localStorage.levelPlaying;
		localStorage.levelPlaying=$(this).html();
		isNewButton=true;
		$.mobile.changePage("#hanoi");
		/*if(!isGameStared)//if continue button without starting the game
		{
		 alert('No paused game to continue');
		 return false;
		}
		else
			isNewButton=false;
		*/
	});
	//alert('i am fine');
	//readyToPop(1);
	//push(2);
	//resetPopReady();
	$('#idContainer1').click(function(){
		//alert('i am also ok='+readyToPopContainerNo);
		if(readyToPopContainerNo==0)
		{
			//
			var count=$('#idContainer1').find('.clsItem').length;
			//alert('No of item present='+count);	
			if(count>0)
				readyToPop(1);
		}
		else
		{
			if(readyToPopContainerNo==1)
				resetPopReady();
			else
			{
			//Move to this
			push(1);
			}
		}
	});
	
	$('#idContainer2').click(function(){
		//alert('idContainer2='+readyToPopContainerNo);
		if(readyToPopContainerNo==0)
		{
			//
			var count=$('#idContainer2').find('.clsItem').length;
			//alert('No of ite present='+count);
			if(count>0)
				readyToPop(2);
		}
		else
		{
			if(readyToPopContainerNo==2)
				resetPopReady();
			else
			{
			//Move to this
			push(2);
			}
		}
	});
	$('#idContainer3').click(function(){
		//alert('idContainer2='+readyToPopContainerNo);
		if(readyToPopContainerNo==0)
		{
			//
			var count=$('#idContainer3').find('.clsItem').length;
			//alert('No of ite present='+count);
			if(count>0)
				readyToPop(3);
		}
		else
		{
			if(readyToPopContainerNo==3)
				resetPopReady();
			else
			{
			//Move to this
			push(3);
			}
		}
	});
});