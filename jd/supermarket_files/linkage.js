"use strict";
$(function() {
    var a = $(".J_linkAge_container");
    function b(a) {
        var b = window.location.search.substring(1);
        var c = b.split("&");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].split("=");
            if (e[0] == a) return e[1]
        }
        return !1
    }
    if (b("productId") && b("skuId")) {
        var c = b("productId");
        var d = b("skuId").replace(/_/, '","');
        $.ajax({
            url: '//api.m.jd.com/client.action?functionId=queryMatProdsForGrps&body={"ids":"' + c + '","topInfo":{"' + c + '":["' + d + '"]},"currentStageFlag":"Y","sourceCode":"student","pageId":"student"}&client=wh5&clientVersion=1.0.0&loginType=3&uuid=' + (new Date).getTime(),
            dataType: "jsonp",
            success: function(b) {
                if (b && b.groupList && b.groupList.length > 0 && b.groupList[0].stageList && b.groupList[0].stageList.length > 0 && b.groupList[0].stageList[0].productList && b.groupList[0].stageList[0].productList.length > 4) {
                    var d = b.groupList[0].stageList[0].productList;
                    var e = '<ul class="product-list">';
                    for (var f = 0; 5 > f; f++) e += '<li class="product-item" clstag="channel|keycount|' + c + "|home_product_" + d[f].skuId + '">\n                    <a href="//item.jd.com/' + d[f].skuId + '.html" target="_blank">\n                        <img class="p-img" src="//img1' + f + ".360buyimg.com/n2/" + d[f].pictureUrl + '" />\n                        <div class="p-name">' + d[f].name + '</div>\n                        <div class="p-price"><span class="p-icon">&yen;</span>' + Number(d[f].pPrice).toFixed(2) + "</div>\n                    </a>\n                </li>";
                    e += "</ul>", a.empty().append(e)
                } else a.hide()
            },
            error: function() {
                a.hide()
            }
        })
    } else a.hide()
});