(function (module) {
    cloudPOS.models = _.extend(module, {
        Role: function (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
        }
    });
}(cloudPOS.models || {}));
