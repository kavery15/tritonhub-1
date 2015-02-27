'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	var from,to,subject,email,text;
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	$(".nameselection").click(anagramthing);
	$(".testclass").click(getData);
	// $("#submit").click(sendMessage);
}

// function sendMessage() {
// 		to="crexmob@gmail.com";
//         subject=$("#namer").val();
//         email=$("#email").val();
//         text=$("#message").val();
//         $("#inprogress").text("Sending E-mail...Please wait");
//         console.log("Sendingggggggg");
//         $.get("http://localhost:5000/send",{to:to,subject:subject,email:email,text:text},function(data){
//         if(data=="sent")
//         {
//             $("inprogress").empty().html("

// Email has been sent at "+to+" . Please check inbox !

// ");
//         }

// });
//     });

}
function getData(e) {
	$.get("../../data.json", callbackFn);
	console.log("working");

}

function callbackFn(result) {
		console.log(result);
		var finaladdon = '<a href="#" class="thumbnail">' +'1'+ '<img src="' + result['image'] + '" class="img">' + '<p>' + result['title'] + '</p>' + '<p><small>' + result['date'] + '</small></p></a>' + result['id'] + ':' + result['summary'];
		console.log(finaladdon);
		$("#project-container").html(finaladdon);
	}




function goBack() {
    window.history.back()
}