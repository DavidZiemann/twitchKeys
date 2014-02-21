$('body').prepend('<div id="game_pad" style="width: 270px;height: 200px;background-color: #efefef;z-index: 10;position: fixed;right: 0;"><div class="left" style="width: 40px;height: 18px;background-color: #ccc;position: relative;top: 55px;left: 20px;text-align: center;font-weight: bold;padding-top: 2px;cursor: pointer;border-bottom: 2px solid #333;border-right: 1px solid #333;float: left;">LEFT</div><div class="up" style="width: 20px;height: 38px;  background-color: #ccc;  position: relative;  top: 10px;  left: 25px;  text-align: center;  font-weight: bold;  padding-top: 2px;  cursor: pointer;  border-bottom: 2px solid #333;  border-right: 1px solid #333;  float: left;border-left: 1px solid #333;">U<br>P</div><div class="left" style="width: 40px;height: 18px;background-color: #ccc;position: relative;top: 55px;left: 30px;text-align: center;font-weight: bold;padding-top: 2px;cursor: pointer;border-bottom: 2px solid #333;border-left: 1px solid #333;float: left;">RIGHT</div><div class="down" style="width: 20px;height: 38px;  background-color: #ccc;  position: relative;top: 80px;left: -38px;  text-align: center;  font-weight: bold;  padding-top: 2px;  cursor: pointer;  border-bottom: 2px solid #333;  border-right: 1px solid #333;  float: left;  border-left: 1px solid #333;">D<br>O<br>W<br>N</div></div>');

var _e = jQuery.Event("keypress");
_e.which = 13; //choose the one you want
_e.keyCode = 13;

$('.up').click(function() {
	$('#chat_text_input').val('up');
	submit();
});

$(document).keydown(function(e){
	switch(e.keyCode) {
		case 37:
			$('#chat_text_input').val('left');
			break;
		case 38:
			$('#chat_text_input').val('up');
			break;
		case 39:
			$('#chat_text_input').val('right');
			break;
		case 40:
			$('#chat_text_input').val('down');
			break;
	}
	submit();	
});

var submit = function() {
	setTimeout(function(){$('#chat_text_input').trigger(_e);},10);
}
