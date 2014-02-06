function Controller() {
    function __alloyId18(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId18.opts || {};
        var models = __alloyId17.models;
        var len = models.length;
        var __alloyId13 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId14 = models[i];
            __alloyId14.__transform = {};
            var __alloyId16 = {
                title: {
                    text: "undefined" != typeof __alloyId14.__transform["name"] ? __alloyId14.__transform["name"] : __alloyId14.get("name")
                }
            };
            __alloyId13.push(__alloyId16);
        }
        opts.animation ? $.__views.section.setItems(__alloyId13, opts.animation) : $.__views.section.setItems(__alloyId13);
    }
    function generateRandomColor() {
        var c = 256 * 256 * Math.floor(255 * Math.random()) + 256 * Math.floor(255 * Math.random()) + Math.floor(255 * Math.random());
        c = c.toString(16);
        while (6 > c.length) c = "0" + c;
        return "#" + c;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId0 = [];
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        navBarHidden: true,
        id: "__alloyId2"
    });
    $.__views.__alloyId3 = Ti.UI.createLabel({
        height: "50dp",
        width: Ti.UI.FILL,
        top: 0,
        textAlign: "center",
        color: "#fff",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Model",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.counter = Ti.UI.createLabel({
        font: {
            fontSize: "160dp",
            fontWeight: "bold"
        },
        id: "counter"
    });
    $.__views.__alloyId2.add($.__views.counter);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "model",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId5 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        navBarHidden: true,
        id: "__alloyId5"
    });
    $.__views.__alloyId6 = Ti.UI.createLabel({
        height: "50dp",
        width: Ti.UI.FILL,
        top: 0,
        textAlign: "center",
        color: "#fff",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Collection",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    var __alloyId7 = {};
    var __alloyId10 = [];
    var __alloyId12 = {
        type: "Ti.UI.Label",
        bindId: "title",
        properties: {
            bindId: "title"
        }
    };
    __alloyId10.push(__alloyId12);
    var __alloyId9 = {
        properties: {
            name: "default"
        },
        childTemplates: __alloyId10
    };
    __alloyId7["default"] = __alloyId9;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId17 = Alloy.Collections["heroes"] || heroes;
    __alloyId17.on("fetch destroy change add remove reset", __alloyId18);
    var __alloyId19 = [];
    __alloyId19.push($.__views.section);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId19,
        templates: __alloyId7,
        id: "listView",
        defaultItemTemplate: "default"
    });
    $.__views.__alloyId5.add($.__views.listView);
    $.__views.__alloyId4 = Ti.UI.createTab({
        window: $.__views.__alloyId5,
        title: "collection",
        id: "__alloyId4"
    });
    __alloyId0.push($.__views.__alloyId4);
    $.__views.homeTab = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        id: "homeTab"
    });
    $.__views.homeTab && $.addTopLevelView($.__views.homeTab);
    var __alloyId20 = function() {
        $.__alloyId3.backgroundColor = _.isFunction(Alloy.Models.appState.transform) ? Alloy.Models.appState.transform()["color"] : Alloy.Models.appState.get("color");
        $.__alloyId3.backgroundColor = _.isFunction(Alloy.Models.appState.transform) ? Alloy.Models.appState.transform()["color"] : Alloy.Models.appState.get("color");
        $.counter.text = _.isFunction(Alloy.Models.appState.transform) ? Alloy.Models.appState.transform()["counter"] : Alloy.Models.appState.get("counter");
        $.counter.color = _.isFunction(Alloy.Models.appState.transform) ? Alloy.Models.appState.transform()["color"] : Alloy.Models.appState.get("color");
        $.counter.text = _.isFunction(Alloy.Models.appState.transform) ? Alloy.Models.appState.transform()["counter"] : Alloy.Models.appState.get("counter");
        $.counter.color = _.isFunction(Alloy.Models.appState.transform) ? Alloy.Models.appState.transform()["color"] : Alloy.Models.appState.get("color");
        $.__alloyId6.backgroundColor = _.isFunction(Alloy.Models.appState.transform) ? Alloy.Models.appState.transform()["color"] : Alloy.Models.appState.get("color");
        $.__alloyId6.backgroundColor = _.isFunction(Alloy.Models.appState.transform) ? Alloy.Models.appState.transform()["color"] : Alloy.Models.appState.get("color");
    };
    Alloy.Models.appState.on("fetch change destroy", __alloyId20);
    exports.destroy = function() {
        __alloyId17.off("fetch destroy change add remove reset", __alloyId18);
        Alloy.Models.appState.off("fetch change destroy", __alloyId20);
    };
    _.extend($, $.__views);
    var appState = Alloy.Models.appState;
    var heroes = Alloy.Collections.heroes;
    $.listView.addEventListener("itemclick", function(e) {
        Ti.API.info(e.section.getItemAt(e.itemIndex));
        var model = heroes.at(e.itemIndex);
        model.set("name", model.get("name") + "+");
        var detailWin = Alloy.createController("detail", {
            data: model
        });
        detailWin.getView().open();
    });
    $.counter.addEventListener("click", function() {
        appState.set({
            counter: appState.get("counter") + 1,
            color: generateRandomColor()
        });
    });
    appState.trigger("change");
    heroes.trigger("change");
    $.homeTab.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;