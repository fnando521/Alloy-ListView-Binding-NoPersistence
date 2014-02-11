var appState = Alloy.Models.appState;
var heroes = Alloy.Collections.heroes;
var numberListItems = 5;


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

function filterFunction(collection) {

	//var items = _.first(Alloy.Collections.heroes, 5);
	//Ti.API.info(items.length);
	
	//return collection.where({ name: 'Ironman' });
	return collection.first(numberListItems);

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

// Set the initial item threshold
$.listView.setMarker({ sectionIndex:0, itemIndex: (numberListItems - 1) });

$.listView.addEventListener('marker', function(e){
	Ti.API.info('load more');
    numberListItems = numberListItems + 10;
    //var data = [];
    heroes.trigger('change');
    /*for (var k = i; k < max; k++) {
        data.push({
            properties : {
                title: 'Row ' + (k + 1)
            }
        });		
    }
    $.section.appendItems(data);
    i = i + 25;
    $.listView.setMarker({sectionIndex:0, itemIndex: (i - 1)});*/
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