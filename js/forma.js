/*Форма отправки*/
$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Thank you for the application!We will contact you as soon as possible");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});