// JavaScript Document
$(function () {
	"use strict";
	//搜索框
	$("#search-kw").focus(function () {
		$(".search-key").hide();
	}).blur(function () {
		$(".search-key").show();
	});

	//菜单
	$(".menuAll2").hover(function () {
		$(".menu-main").css("display", "block");
	}, function () {
		$(".menu-main").css("display", "none");
	});
    $(".menu-part").hover(function () {
        $(this).children("dd").show();
        $(this).css("background-color", "#1a75bc");
    }, function () {
        $(this).children("dd").hide();
        $(this).css("background-color", "#000000");
    });


	//现货大厅-搜索区域标签
	$(".search-radio").click(function () {
		$(".search-radio").css("background-position", "0 0px");
		$(this).css("background-position", "0 -19px");
	});
	//移除 这个是 验货标记 checkbox 显示的
	// $(".search-check").toggle(function () {
	// 	var ding = $(this).attr("id");
	// 	if (ding === "search-check-ding") {
	// 		$(".buy-ding").show();
	// 	}
	// 	$(this).css("background-position", "0 -18px");
	// }, function () {
	// 	var ding = $(this).attr("id");
	// 	if (ding === "search-check-ding") {
	// 		$(".buy-ding").hide();
	// 	}
	// 	$(this).css("background-position", "0 0px");
	// });

	//现货大厅-搜索结果筛选
	$(".list-title div").toggle(function () {
		$(".sort-i").css("background-position", "0px 0px");
		$(this).children(".sort-i").css("background-position", "0px -10px");
	}, function () {
		$(".sort-i").css("background-position", "0px 0px");
		$(this).children(".sort-i").css("background-position", "0px -20px");
	});

	//现货大厅-收起筛选
	$(".putaway-search").toggle(function () {
		$(".search-area-top").slideUp();
		$(this).html("展开筛选");
		$(this).css("background-position", "75px -25px");
	}, function () {
		$(".search-area-top").slideDown();
		$(this).html("收起筛选");
		$(this).css("background-position", "75px 0px");
	});

	//现货大厅-更多选项
	$(".search-top-more").toggle(function () {
		$(this).parent().siblings().slideDown();
		$(this).html("收起");
		$(this).css("background-position", "35px -18px");
	}, function () {
		$(this).parent().siblings().slideUp();
		$(this).html("更多");
		$(this).css("background-position", "35px 7px");
	});

	//现货大厅-商品列表
	$(".list-storage").each(function (index) {
		$(this).css('z-index', 99 - index);
	});
	$(".list-attribute").each(function (index) {
		$(this).css('z-index', 99 - index);
	});

	//中钢买办-搜索区域
	$(".maiban-dropdown a").click(function () {
		var that = $(this);
		that.closest(".maiban-search-sub").find(".maiban-variety").html(that.html());
		$(".maiban-dropdown").css("display", "none");
	});
	$(".maiban-search-sub").hover(function () {
		$(this).children(".maiban-dropdown").show();
	}, function () {
		$(this).children(".maiban-dropdown").hide();
	});

	//限时抢购-当前价
	$(".list-current-price").each(function (index) {
		$(this).css('z-index', 99 - index);
	});
	$(".list-current-price").each(function (index) {
		$(this).css('z-index', 99 - index);
	});
	
	

});
//form拼数据
function filterSpecial(value) {
    return value.replace(/[']/g, '')
}

$.serializeObject = function (form) {
    var o = {};
    $.each(form.serializeArray(), function (index) {
        if (o[this['name']]) {
            o[this['name']] = filterSpecial(o[this['name']] + "," + this['value'])
        } else {
            o[this['name']] = filterSpecial(this['value'])
        }
    });
    return o
};


function errorFunction(resultData) {
    showMessage(resultData);
}

function showMessage(resultData) {
    alert(resultData.description);
}

function zgshowLoading() {
    if ($("#aLoad").length < 1) {
        $('body').append('<div id="aLoad"><div id="aLoad-overlay"></div><div class="cssload-loader"><div class="cssload-side"></div>' +
            '<div class="cssload-side"></div><div class="cssload-side"></div>' +
            '<div class="cssload-side"></div><div class="cssload-side"></div>' +
            '<div class="cssload-side"></div><div class="cssload-side"></div>' +
            '<div class="cssload-side"></div></div>');
    }
}
function deleteLoading() {
    $("#aLoad").remove();
}


function isSuccess(result) {
    return (result === "10")
}

function isRediration(result) {
    return (result === "11")
}

function isLogin(result) {
    return (result === "99")
}

function templateInternalError(msg) {
    $('body').html(msg)
}



// resultCode    结果代码（00 失败  01 无权限  02 平台校验不通过 10 成功）
// description   返回描述（比如操作成功，因为XXX操作失败等）
// returnResult  returnResult，如果有返回结果，填在这个里面，是对象，对象列表，啥都可以）。
// {"result":"10","description":"操作成功","object":"jsonstring"}
var postAjax = function (url, postData, successFunction, options) {
    var returnFlag= false;;
    var defaultOptions = {
        errorFunction: errorFunction,
        successArguments: "",
        errorArguments: "",
        successMessage: "",
        type: "post",
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache:false
    };
    var currentOptions = $.extend(defaultOptions, options);
    url = url.indexOf('?')!=-1?url + '&securityToken='+$("#securityToken").val():url + '?securityToken='+$("#securityToken").val();
    $.ajax({
        type: currentOptions.type,
        data: postData,
        contentType: currentOptions.contentType,
        dataType: currentOptions.dataType,
        url: url,
        async: currentOptions.async,
        beforeSend: function () {
            $('body').append('<div id="aLoad"><div id="aLoad-overlay"></div><div class="cssload-loader"><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div></div>');
        },
        success: function (resultData) {
            if (resultData && isSuccess(resultData.resultcode)) {
                if (currentOptions && currentOptions.successArguments) {
                    successFunction(resultData, currentOptions.successArguments);
                } else {
                    successFunction(resultData);
                }
                returnFlag = true;
            } else if(isRediration(resultData.resultcode)){
                var pathName = document.location.pathname;
                var index = pathName.substr(1).indexOf("/");
                var result = pathName.substr(0, index + 1);
                alert(resultData.description);
                location.replace(result+'/index');
            }else if(isLogin(resultData.resultcode)){
                var pathName = document.location.pathname;
                var index = pathName.substr(1).indexOf("/");
                var result = pathName.substr(0, index + 1);
                alert(resultData.description);
                location.replace(result+resultData.returnResult);
            }else{
                defaultOptions.errorFunction(resultData);
                console.log(resultData);
                returnFlag = false;
			}
        },
        complete:function(){
            deleteLoading();
		},
        error: function (result) {
            returnFlag = false;
            deleteLoading();
            // $("html").html(result);
        }
    });
    return returnFlag;
};

var ajax = function (url, postData, successFunction, options) {
    var returnFlag= false;;
    var defaultOptions = {
        errorFunction: errorFunction,
        successArguments: "",
        errorArguments: "",
        successMessage: "",
        type: "post",
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache:false
    };
    var currentOptions = $.extend(defaultOptions, options);
    url = url.indexOf('?')!=-1?url + '&securityToken='+$("#securityToken").val():url + '?securityToken='+$("#securityToken").val();
    $.ajax({
        type: currentOptions.type,
        data: postData,
        contentType: currentOptions.contentType,
        dataType: currentOptions.dataType,
        url: url,
        async: currentOptions.async,
        beforeSend: function () {
            $('body').append('<div id="aLoad"><div id="aLoad-overlay"></div><div class="cssload-loader"><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div></div>');
        },
        success: function (resultData) {
        	successFunction(resultData);
        },
        complete:function(){
            deleteLoading();
		},
        error: function (result) {
            returnFlag = false;
            deleteLoading();
            // $("html").html(result);
        }
    });
    return returnFlag;
};

var postForm = function (url, postData, successFunction, options) {
    var returnFlag= false;;
    var defaultOptions = {
        errorFunction: errorFunction,
        successArguments: "",
        errorArguments: "",
        successMessage: "",
        type: "post",
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        cache:false
    };
    var currentOptions = $.extend(defaultOptions, options);
    url = url.indexOf('?')!=-1?url + '&securityToken='+$("#securityToken").val():url + '?securityToken='+$("#securityToken").val();
    $.ajax({
        type: currentOptions.type,
        data: postData,
        contentType: currentOptions.contentType,
        dataType: currentOptions.dataType,
        url: url,
        async: currentOptions.async,
        beforeSend: function () {
            $('body').append('<div id="aLoad"><div id="aLoad-overlay"></div><div class="cssload-loader"><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div><div class="cssload-side"></div>' +
                '<div class="cssload-side"></div></div>');
        },
        success: function (resultData) {
            if(typeof resultData =="string"){
                successFunction(resultData);
            }else{
                if(typeof resultData =="object") {
                    alert(resultData.description);
                }
            }
        },
        complete:function(){
            deleteLoading();
		},
        error: function (result) {
            returnFlag = false;
            deleteLoading();
            // $("html").html(result);
        }
    });
    return returnFlag;
};


var postAjaxNoLoading = function (url, postData, successFunction, options) {
    var returnFlag= false;
    var defaultOptions = {
        errorFunction: errorFunction,
        successArguments: "",
        errorArguments: "",
        successMessage: "",
        type: "post",
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache:false
    };
    var currentOptions = $.extend(defaultOptions, options);
    url = url.indexOf('?')!=-1?url + '&securityToken='+$("#securityToken").val():url + '?securityToken='+$("#securityToken").val();
    $.ajax({
        type: currentOptions.type,
        data: postData,
        contentType: currentOptions.contentType,
        dataType: currentOptions.dataType,
        url: url,
        async: currentOptions.async,
        success: function (resultData) {
            if (resultData && isSuccess(resultData.resultcode)) {
                if (currentOptions && currentOptions.successArguments) {
                    successFunction(resultData, currentOptions.successArguments);
                } else {
                    successFunction(resultData);
                }
                returnFlag = true;
            } else if(isRediration(resultData.resultcode)){
                var pathName = document.location.pathname;
                var index = pathName.substr(1).indexOf("/");
                var result = pathName.substr(0, index + 1);
                alert(resultData.description);
                location.replace(result+'/index');
            }else if(isLogin(resultData.resultcode)){
                var pathName = document.location.pathname;
                var index = pathName.substr(1).indexOf("/");
                var result = pathName.substr(0, index + 1);
                alert(resultData.description);
                location.replace(result+resultData.returnResult);
            }else{
                defaultOptions.errorFunction(resultData);
                console.log(resultData);
                returnFlag = false;
            }
        },
        complete:function(){
            deleteLoading();
        },
        error: function (result) {
            returnFlag = false;
            deleteLoading();
            // $("html").html(result);
        }
    });
    return returnFlag;
};

function initLeftMenu(text,url){
    $(".menu-sub-list").find("li").removeClass("activity");
    $("li a:contains("+text+")").attr("href",url).parent().addClass("activity");
}

//两位数 正整数校验
function numV(that) {
    var t = $(that);
    var reg = /^[1-9]\d{0,1}$/;
    if (!reg.test(t.val())) {
        t.val('')
    }
}
function returnKB(k){
    return k?k:"";
}

//调用：accAdd(arg1,arg2)
//返回值：arg1加上arg2的精确结果
function accAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (arg1*m+arg2*m)/m
}

//调用：accSub(arg1,arg2)
//返回值：arg1减上arg2的精确结果
function accSub(arg1,arg2){
    return accAdd(arg1,-arg2);
}

function isNum(str) {
    var re = /^[-+]?\d+(\.\d+)?$/;
    return re.test(str);
}

function returnMaijia(v){
    return v.syrmc?v.syrmc:v.hzmc;
}
//小数
function numDigital(that){var t=$(that);t.val(t.val().replace(/[^0-9.]/g,''));}
function numZS(that){var t=$(that);t.val(t.val().replace(/[^0-9]/g,''));}

// 转为unicode 编码
function encodeUnicode(str) {
    var res = [];
    for ( var i=0; i<str.length; i++ ) {
        res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);
    }
    return "\\u" + res.join("\\u");
}

// 解码
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}

function formatNum(str, num) {
    if ((str+"").indexOf(",") >= 0) {
        return str
    } else {
        var numAF = 3;
        var buStrDian = ".00";
        var buStr = "00";
        if (num !== undefined) {
            numAF = num;
            buStrDian = ".00000000";
            buStr = "00000000"
        }
        str = str ? str : 0;
        if (str != undefined) {
            str = str.toString();
            var newStr = "";
            var count = 0;
            var mius = "";
            if (str.indexOf("-") == -1) {
            } else {
                mius = "-";
                str = str.substr(1)
            }
            if (str.indexOf(".") == -1) {
                for (var i = str.length - 1; i >= 0; i--) {
                    if (count % 3 == 0 && count != 0) {
                        newStr = str.charAt(i) + "," + newStr
                    } else {
                        newStr = str.charAt(i) + newStr
                    }
                    count++
                }
                str = newStr + buStrDian;
                return mius + str
            } else {
                for (var i = str.indexOf(".") - 1; i >= 0; i--) {
                    if (count % 3 == 0 && count != 0) {
                        newStr = str.charAt(i) + "," + newStr
                    } else {
                        newStr = str.charAt(i) + newStr
                    }
                    count++
                }
                str = newStr + (str + buStr).substr((str + buStr).indexOf("."), numAF);
                return mius + str
            }
        }
    }
}

(function ($) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        var array = this.serializeArray();
        var str = this.serialize();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value.trim())
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value.trim()]
                }
            } else {
                serializeObj[this.name] = this.value.trim()
            }
        });
        return serializeObj
    }
})(jQuery);
