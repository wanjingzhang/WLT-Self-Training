var model = Bone.extend({}, Bone.Events, {

    init: function () {
    },

    random: function (n1, n2) {
        return n1 + Math.floor(Math.random() * (n2 - n1) * 100) / 100;
    },

});

