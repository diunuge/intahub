(function (module) {
    cloudPOS.filters = _.extend(module, {
        SearchFilter: function () {
            return function (list, searchText) {
            	var searchRegx = new RegExp(searchText, "i");
                if (searchText == undefined) {
                    return list;
                }
                var result = [];
                for (i = 0; i < list.length; i++) {
                    if (list[i].name.search(searchRegx) != -1 || 
                        list[i].glCode.toString().search(searchRegx) != -1 || list[i].type.value.search(searchRegx) != -1 ) {
                        result.push(list[i]);
                    }
                }
                return result;
            }
        }
    });
    cloudPOS.ng.application.filter('SearchFilter', [cloudPOS.filters.SearchFilter]).run(function ($log) {
        $log.info("SearchFilter filter initialized");
    });
}(cloudPOS.filters || {}));
