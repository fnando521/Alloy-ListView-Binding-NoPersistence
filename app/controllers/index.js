var appState = Alloy.Models.appState;
var heroes = Alloy.Collections.heroes;

function generateRandomColor() {
	var c =(Math.floor(Math.random()*255))*256*256 +
		(Math.floor(Math.random()*255))*256 +
		(Math.floor(Math.random()*255));
	c = c.toString(16);
	while (c.length < 6) {
		c = '0' + c;
	}
	return '#' + c;
}

$.listView.addEventListener('itemclick', function(e) {
	
	// Get the item associated with the clicked row
	Ti.API.info(e.section.getItemAt(e.itemIndex));
	
	// Update the model with any pertinant info etc...
	var model = heroes.at(e.itemIndex);
	model.set('name', model.get('name') + '+');
	
	// Open more details...
	var detailWin = Alloy.createController('detail', {
		data: model
	});
	detailWin.getView().open();
});

// Update the model's counter and color, which in turn
// updates the UI via model binding
$.counter.addEventListener('click', function(e) {
	appState.set({
		counter: appState.get('counter')+1,
		color: generateRandomColor()
	});
});

// Simulate a change in our model to trigger UI binding.
// Remember, don't use fetch() when using a model with
// no persistence, it will generate an error.
appState.trigger('change');
heroes.trigger('change');

$.homeTab.open();