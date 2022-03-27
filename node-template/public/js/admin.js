$(function(){
	// 删除
	$('.del').on("click", function(e){
		var id = $(this).data(id).id
		var tr = $('.item-id-' + id)

		$.ajax({
			type: "DELETE",
			url: '/admin/list?id=' + id
		})
		.done(function(res) {
			if (res.success === 1) {
				if (tr.length > 0) tr.remove()
			}
		})
	})
})