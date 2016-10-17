module.exports = function(less) {
    function Plugin() {
        this._visitor = new less.visitors.Visitor(this);
    }
    Plugin.prototype = {
        isReplacing: true,
        isPreEvalVisitor: false,
        run: function (root) {
            return this._visitor.visit(root);
        },
        visitComment: function (node, visitArgs) {
            if ( (node.value.slice(0, 2) == '/*' && node.value[2] != '!') ||
                 (node.value.slice(0, 4) == '/***' && node.value[4] != '!')
               ) {
              return;
            }
            return node;
        }
    };
    return Plugin;
};
