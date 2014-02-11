var appState = Alloy.Models.appState;
var heroes = Alloy.Collections.heroes;
var numberListItems = 15;
var i = 15;
var setMarker = true;


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
	Ti.API.info('in Filter');

	if(setMarker) {
		$.listView.setMarker({ sectionIndex:0, itemIndex: (numberListItems - 1) });
		
		//var items = _.first(Alloy.Collections.heroes, 5);
		//Ti.API.info(items.length);
	
		//return collection.where({ name: 'Ironman' });
	} 

	
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


$.listView.addEventListener('marker', function(e){
	Ti.API.info('load more');
   
    numberListItems = numberListItems + 10;
    var data = [];
	//var max = i + 10;
    
  	for(var x=0; x< 10; x++)
  	{
  		data.push({
  			template: 'default',
  			title: { text: 'TEST' }
  		});
  	}
  	$.section.appendItems(data);
    Alloy.Collections.heroes.trigger('change');
    
    setMarker = false;
    
    
    /*heroes.each(function(_m) {
    	Ti.API.info(JSON.stringify(_m));
    });*/
    
	 //for (var k = i; k < max; k++) {
      //  var model = heroes;
       // Ti.API.info(JSON.stringify(model));
        //i = i + 10;
        //data.push({
        //	model.
        //})
    //}

    
    /*for (var k = i; k < max; k++) {
        data.push({
            properties : {
                title: 'Row ' + (k + 1)
            }
        });
   
    }
    $.section.appendItems(data);*/

    
    //heroes.trigger('change');
    //$.listView.setMarker({ sectionIndex:0, itemIndex: (i - 1) });
    //$.listView.setMarker({sectionIndex:0, itemIndex: (i - 1)});
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