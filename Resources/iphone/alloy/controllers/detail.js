function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.detailWin = Ti.UI.createWindow({
        backgroundColor: "white",
        fullscreen: false,
        navBarHidden: true,
        id: "detailWin"
    });
    $.__views.detailWin && $.addTopLevelView($.__views.detailWin);
    $.__views.btnBack = Ti.UI.createButton({
        id: "btnBack",
        title: "Back",
        top: "35"
    });
    $.__views.detailWin.add($.__views.btnBack);
    $.__views.lblInfo = Ti.UI.createLabel({
        id: "lblInfo",
        top: "85"
    });
    $.__views.detailWin.add($.__views.lblInfo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info(JSON.stringify(args));
    var model = args.data.toJSON();
    $.lblInfo.text = model.info;
    $.btnBack.addEventListener("click", function() {
        $.detailWin.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;