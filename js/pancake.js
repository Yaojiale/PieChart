//动态饼状图 id-这个饼图的ID percentage-比例 speed-动画速度
function pancakePercent(id,percentage,speed){
	var cycle=360/speed
	var text=".pancake:before{content: '';display: block;position: absolute;left:50%;top:0;right:0;bottom: 0;border-radius:0 100% 100% 0/ 50%;transform-origin: left center;background-color: inherit;"+"animation: spin "+cycle/2+"s linear 2, bg " +cycle+"s step-end 1;}";
	var style=document.getElementsByTagName('style')[0];
	try{
        style.appendChild(document.createTextNode(text));
    }
    catch(ex){
        style.styleSheet.cssText =text;
    }
    var pasused=".pancake:before{animation-play-state: paused;}";
   	setTimeout(function(){
   		try{
      	 	style.appendChild(document.createTextNode(pasused));
    	}catch(ex){
        style.styleSheet.cssText =pasused;
    }
	},1000*cycle*percentage);
}

var pancake1=new pancakePercent(pancake,0.8,120);