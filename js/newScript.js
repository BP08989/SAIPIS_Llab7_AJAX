function testAjax(year) {
   console.log(year);

		$('#dd').dialog({
			title: "description",
   			autoOpen: false,
   			modal: true
   		});
		$("#dd").load("../html/results.html");
		$("#dd").css({'background-color': 'red'});
   		$("#dd").dialog('open');
}