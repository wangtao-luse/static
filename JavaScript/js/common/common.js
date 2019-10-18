var postAjax=function(url,postData,successFunction,option){
	var returnFlag=false;
	var defaultOptions={
		errorFunction: errorFunction,
        successArguments: "",
        errorArguments: "",
        successMessage: "",
        type: "post",
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache:false
	}
	 var currentOptions = $.extend(defaultOptions, options);
	 $.ajax({
	 	type:currentOptions.type,
	 	url:url,
	 	async:currentOptions.async,
	 	beforeSend:function(){};
	 	success:function(){},
	 	complete:function(){},
	 	error:function(){}
	 });
	return returnFlag;
};
