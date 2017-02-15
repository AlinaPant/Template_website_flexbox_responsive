$(document).ready(function () {
	var contrLink = $(".tabs_control-link");
	
	contrLink.on("click", function (e) {
		e.preventDefault();
		
		var item = $(this).closest(".tabs_controls-item"),
			contentItem = $(".tabs_item"),
			itemPosition = item.data("class");
		
		contentItem.filter(".tabs_item_" + itemPosition)
			.add(item)
			.addClass("active")
			.siblings()
			.removeClass("active");
	});
});