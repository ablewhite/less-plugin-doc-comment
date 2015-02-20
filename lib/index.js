var plugin = require("./plugin");

module.exports = {
    install: function(less, pluginManager) {
        var Visitor = plugin(less);
        pluginManager.addVisitor(new Visitor());
    }
};
