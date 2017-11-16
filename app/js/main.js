/*function a(){
	document.getElementById('info').innerHTML = 'Alexey';
	}*/
$(function a() {

	$(".cbk").magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
		
	});

	var commentsWrapper = document.getElementById("comments-wrapper");
	var selct= 0;

$(document).ready(function() {
	if(("#tabl div a").click){
		selct++
	}
    $("#tabl div a").click(function() {
    	
        $(this).parent().animate({
           width: '+=15px'
          

        }, 500);
 		
 		

         $(this).prev().html(parseInt($(this).prev().html()) + 1);
       
  		return false;
    });

});




	$(".req").click(function() {
	
		Data = new Date();
		Year = Data.getFullYear();
		Month = Data.getMonth();
		Day = Data.getDate();


		switch (Month)
	{
 	 case 0: fMonth="января"; break;
 	 case 1: fMonth="февраля"; break;
 	 case 2: fMonth="марта"; break;
 	 case 3: fMonth="апреля"; break;
 	 case 4: fMonth="мае"; break;
 	 case 5: fMonth="июня"; break;
 	 case 6: fMonth="июля"; break;
 	 case 7: fMonth="августа"; break;
 	 case 8: fMonth="сентября"; break;
 	 case 9: fMonth="октября"; break;
 	 case 10: fMonth="ноября"; break;
 	 case 11: fMonth="декабря"; break;
	}


	






		var name = document.getElementById("name").value;
		var surname = document.getElementById("surname").value;
		var comment = document.getElementById("comment").value;
		

		
		var error = "Введите значение";
		if (comment != ''){
			// console.log(comment.value);
			
			commentsWrapper.innerHTML += `${name} ${surname}`;
			commentsWrapper.innerHTML +=` ${Day} ${fMonth} ${Year} года `;
			commentsWrapper.innerHTML += "<div class='comment'> "  + comment + "</div>";
			

			document.getElementById("comment").value='';
			document.getElementById(Day+" "+fMonth+" "+Year+" года");
			
			$.magnificPopup.close();		
		}
		else{
			
			$.magnificPopup.close();

		}

	});
	
});