(function (module) {
    cloudPOS.models = _.extend(module, {
        roleMap: {
            1: "superuser",
            2: "branchmanager",
            3: "funder"
        }
    });
}(cloudPOS.models || {}));
