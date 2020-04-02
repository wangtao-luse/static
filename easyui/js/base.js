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
//创建datagrid
function initDataGrid(dataGridNode,newOptions){
	//http://www.jeasyui.net/plugins/183.html
	var options ={		
		fitColumns:true,//自动扩大或缩小列的尺寸以适应网格的宽度并且防止水平滚动
		pagination:true,//在数据网格（datagrid）底部显示分页工具栏
		idField:'id',//标识字段
		sortName:'id',//可以排序的列
		sortOrder:'asc',//指定排序的方式,只能用 'asc' 或 'desc'
		checkOnSelect:true,//当用户点击某一行时，则会选中/取消选中复选框。如果设置为 false 时，只有当用户点击了复选框时，才会选中/取消选中复选框。
		singleSelect:true,//只允许选中一行
		selectOnCheck:true,//如果设置为 true，点击复选框将会选中该行。如果设置为 false，选中该行将不会选中复选框。
		nowrap:true,//设置为 true，则把数据显示在一行里。设置为 true 可提高加载性能。
		pageNumber:1,//当设置了 pagination 属性时，初始化页码。
		pageSize:(newOptions.postData&&newOptions.postData.page&&newOptions.postData.page.size?newOptions.postData.page:"100"),//当设置了 pagination 属性时，初始化页面尺寸。
		pageList:[50, 100, 300, 500, 1000],//当设置了 pagination 属性时，初始化页面尺寸的选择列表。
		toolbar: '#toolbar',//数据网格（datagrid）面板的头部工具栏
		onLoadSuccess:function(data){
			//当数据加载成功时触发
		}
	};
	$.extend(options, newOptions);
	dataGridNode.datagrid(options);
	return dataGridNode;
	
}
//查询所以支持带条件
 function serachFun(url,dataGridNode,functionName,newoptions){
 	//1.序列化表单 	
 	 //自定义一个全局的方法来序列化表单位一个对象
 	var formData = $.serializeObject($("#searchForm"));
   //2.处理参数(JavaScript三元表达式)
   var postData={"page":{}};
   newoptions&&newoptions.k?postData[newoptions.k] = formData:"";
   postData.page.current=newoptions&&newoptions.current?newoptions.current:"1";
   postData.page.size=newoptions&&newoptions.size?newoptions.size:"100";
   //3.构建initDataGrid;  
   var op=functionName({postData:postData});
   initDataGrid(dataGridNode,op);
 }
 var postAjax = function(url,postData,successFunction,options){
	var flag =false;
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
    var currentOptions = $.extend(defaultOptions,options);
    $.ajax({
    	type: currentOptions.type,
        data: postData,
        contentType: currentOptions.contentType,
        dataType: currentOptions.dataType,
        url: url,
        async: currentOptions.async,
    	beforeSend:function(){
    		
    	},
    	success:function(resultData){
    		if(resultData&&isSuccess(resultData)){
    			successFunction(resultData);
    			flag=true;
    		}else{
    			defaultOptions.errorFunction(resultData);
    			flag=false;
    		}
    	},
    	complete: function(){
    		
    	},
    	error:function(){
    		defaultOptions.errorFunction(resultData);
    		flag=false;	
    	}
    });
    return flag;
}
function isSuccess(result){
	return result.resultCode=="10";
}
function errorFunction(result){
	alert(result.resultMessage);
}
function ajaxDataGrid(url,dataGridNode,newoptions){
	var options={"postData":{}};
	$.extend(options,newoptions);
	postAjax(url,JSON.stringify(options.postData),function(){
			 var formatData = {};
			if(result.returnResult){
				if(result.returnResult.records){
					formatData.total = data.returnResult.total;
                    formatData.rows = data.returnResult.records;
				}
			   options.data = formatData;
			}
			initDataGrid(dataGridNode,newoptions);
	})
	
}