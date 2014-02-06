// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// TODO: If there is a way to specify no adapterType for a model this backbone model
// can be created in the standard 'model' project directory.

// This project runs on both iOS and Android 

Alloy.Models.appState = new Backbone.Model({
	counter: 1,
	color: '#00f'
});

Alloy.Collections.heroes = new Backbone.Collection();
Alloy.Collections.heroes.reset([
	{ name: 'Ironman', info: 'More info here' },
	{ name: 'Superman', info: 'I Love superman' },
	{ name: 'Thor', info: 'Strength' },
	{ name: 'Captain America', info: 'Team America!' },
	{ name: 'Hulk', info: 'is a fictional character, a superhero that appears in comic books published by Marvel Comics' },
	{ name: 'Green Lantern', info: 'Ryan Reynolds you rock!' },
	{ name: 'Punisher', info: 'the Anti-hero' },
	{ name: 'Spiderman', info: 'AKA Peter Parker' },
	{ name: 'Wolverine', info: 'Logan' },
	{ name: 'Cyclops', info: 'The Greek Mythology' }
]);