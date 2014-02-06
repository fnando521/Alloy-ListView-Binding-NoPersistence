var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Models.appState = new Backbone.Model({
    counter: 1,
    color: "#00f"
});

Alloy.Collections.heroes = new Backbone.Collection();

Alloy.Collections.heroes.reset([ {
    name: "Ironman",
    info: "More info here"
}, {
    name: "Superman",
    info: "I Love superman"
}, {
    name: "Thor",
    info: "Strength"
}, {
    name: "Captain America",
    info: "Team America!"
}, {
    name: "Hulk",
    info: "is a fictional character, a superhero that appears in comic books published by Marvel Comics"
}, {
    name: "Green Lantern",
    info: "Ryan Reynolds you rock!"
}, {
    name: "Punisher",
    info: "the Anti-hero"
}, {
    name: "Spiderman",
    info: "AKA Peter Parker"
}, {
    name: "Wolverine",
    info: "Logan"
}, {
    name: "Cyclops",
    info: "The Greek Mythology"
} ]);

Alloy.createController("index");