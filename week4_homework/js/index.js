$(function(){
    console.log("page loaded");
    
    $('.image1').hover(function(){
        console.log("heading1 clicked");
        $('.image1').animate({'opacity':'0.7'}, 100);
        });

    $('.image2').hover(function(){
        console.log("heading1 clicked");
        $('.image2').animate({'opacity':'0.7'}, 100);
        });

    $('.image3').hover(function(){
        console.log("heading1 clicked");
        $('.image3').animate({'opacity':'0.7'}, 100);
        });
    });

$(function(){
	console.log("mouse out");

	$('.image1').mouseout(function(){
		console.log("mouse out");
		$('.image1').animate({'opacity':'1'}, 100);
	});

	$('.image2').mouseout(function(){
		console.log("mouse out");
		$('.image2').animate({'opacity':'1'}, 100);
	});

	$('.image3').mouseout(function(){
		console.log("mouse out");
		$('.image3').animate({'opacity':'1'}, 100);
	});
});

$(function(){
	console.log("toggle");

	$('#heading1').click(function(){
		console.log("yes");
		$('.image1').hide(500);
	});
});

console.log("file loaded");



