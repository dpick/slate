(function(_controller) {

var slate = window.slate = {

    log: function() {
        var msg = Array.prototype.slice.call(arguments, 0).join(" ");
        return _controller.log(msg);
    },

    bind: function(key, callback, repeat) {
        if(key.slice(-7) == " repeat") {
            repeat = true;
            key = key.slice(0, -7);
        }
        if(typeof(callback) == "string") {
            var opString = callback;
            callback = function() { slate.op(opString); };
        }
        return _controller.bind(key, callback, repeat);
    },

    bindAll: function(bindMap) {
        for(key in bindMap) {
            slate.bind(key, bindMap[key]);
        }
    },

    op: function(opString) {
        return _controller.op(opString);
    },

    resize: function(dx, dy) {
        return slate.op("resize " + slate._delta_str(dx) +
                        " " + slate._delta_str(dy));
    },

    nudge: function(dx, dy) {
        return slate.op("nudge " + slate._delta_str(dx) +
                        " " + slate._delta_str(dy));
    },

    focus: function(direction) {
        return slate.op("focus " + direction);
    },

    relaunch: function() {
        return slate.op("relaunch");
    },

    _delta_str: function(val) {
        return (val<0 ? "" : "+") + val;
    }

};

})(window._controller);
