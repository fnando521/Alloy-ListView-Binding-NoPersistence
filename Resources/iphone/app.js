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
}, {
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
}, {
    name: "Ironman1",
    info: "More info here"
}, {
    name: "Mickey mouse",
    info: "I Love superman"
}, {
    name: "Aladdin",
    info: "Strength"
}, {
    name: "Alice",
    info: "Team America!"
}, {
    name: "Ariel",
    info: "is a fictional character, a superhero that appears in comic books published by Marvel Comics"
}, {
    name: "Apollo",
    info: "Ryan Reynolds you rock!"
}, {
    name: "Archimedes",
    info: "the Anti-hero"
}, {
    name: "Bambi",
    info: "AKA Peter Parker"
}, {
    name: "Bear",
    info: "Logan"
}, {
    name: "Bella",
    info: "The Greek Mythology"
}, {
    name: "Big Al",
    info: "More info here"
}, {
    name: "Billy Bass",
    info: "I Love superman"
}, {
    name: "Big Mama",
    info: "Strength"
}, {
    name: "Chief",
    info: "Team America!"
}, {
    name: "Chip",
    info: "is a fictional character, a superhero that appears in comic books published by Marvel Comics"
}, {
    name: "Cinderella",
    info: "Ryan Reynolds you rock!"
}, {
    name: "Donald Duck",
    info: "the Anti-hero"
}, {
    name: "Dewey",
    info: "AKA Peter Parker"
}, {
    name: "Dale",
    info: "Logan"
}, {
    name: "Daffy",
    info: "The Greek Mythology"
}, {
    name: "Eeyore",
    info: "Ryan Reynolds you rock!"
}, {
    name: "Einstein",
    info: "the Anti-hero"
}, {
    name: "El capitan",
    info: "AKA Peter Parker"
}, {
    name: "Ella",
    info: "Logan"
}, {
    name: "Elliott",
    info: "The Greek Mythology"
}, {
    name: "Esmeralda",
    info: "More info here"
}, {
    name: "Flora",
    info: "I Love superman"
}, {
    name: "Flynn Rider",
    info: "Strength"
}, {
    name: "Flower",
    info: "Team America!"
}, {
    name: "Flounder",
    info: "is a fictional character, a superhero that appears in comic books published by Marvel Comics"
}, {
    name: "Footman",
    info: "Ryan Reynolds you rock!"
}, {
    name: "Fran",
    info: "the Anti-hero"
}, {
    name: "Francis",
    info: "AKA Peter Parker"
}, {
    name: "Frank",
    info: "Logan"
}, {
    name: "Franny",
    info: "The Greek Mythology"
} ]);

Alloy.createController("index");