var args = arguments[0] || {};

Ti.API.info(JSON.stringify(args));
var model = args.data.toJSON();

$.lblInfo.text = model.info;

$.btnBack.addEventListener('click', function(e) {
	$.detailWin.close();
});

