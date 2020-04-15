<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<script type="text/javascript">
    var layout_west_tree;
    $(function () {
        initWestTree("/platform/getMenuList", $('#layout_west_tree'), {});
		//css
		var folderNodeAll = $('ul>li>.tree-node>.tree-folder').parent();
		folderNodeAll.css('border-top','1px solid #ffcdd2').css('border-bottom','1px solid #ffcdd2')
				.css('background-color','#fae2e2')
				.find('.tree-title').css('font-size','16px');
		$('#layout_west_tree').css('border-left','1px solid #ffcdd2').css('border-right','1px solid #ffcdd2');
    });
</script>
<style>
	#layout_west_tree .tree-node{height:30px;}
	#layout_west_tree .tree-title{padding:0 2px;height:30px;line-height:30px}
	#layout_west_tree .tree-folder{display:none;}
	#layout_west_tree .tree-expanded{width:18px;height:30px;margin:6px 9px;background:url(<%=request.getContextPath() %>/static/style/images/icon-set6.png) no-repeat }
	#layout_west_tree .tree-expanded-hover{margin:6px 9px;height:30px;background:url(<%=request.getContextPath() %>/static/style/images/icon-set6.png) no-repeat}
	#layout_west_tree .tree-collapsed{width:18px;height:30px;margin:6px 9px;background:url(<%=request.getContextPath() %>/static/style/images/icon-set5.png) no-repeat}
	#layout_west_tree .tree-collapsed-hover{width:18px;height:30px;margin:6px 9px;background:url(<%=request.getContextPath() %>/static/style/images/icon-set5.png) no-repeat}
	#layout_west_tree .tree-file{width:18px;        margin-top:7px;height:30px;background:url(<%=request.getContextPath() %>/static/style/images/icon-set7.png) no-repeat}
	#layout_west_tree .panel-title {
		color: #A80D0D;
	}
	#layout_west_tree .accordion .accordion-header-selected{
		background-color: RGB(228,238,255);
	}
	#layout_west_tree .tree-node-selected{color:#b71c1c;background-color: #ffcdd2;font-weight: bold}
	#layout_west_tree .tree-node-hover{background:#fff1f1;}

	#layout_west_tree .tree-node-selected>.tree-file{
        background:url(<%=request.getContextPath() %>/static/style/images/icon-set8.png) no-repeat;
        margin-top:7px;
	}
	#layout_west_tree .accordion .accordion-header-selected .panel-title{color:#A80D0D}
</style>
<div style="height:100%;overflow-y:auto;overflow-x:scroll">
        <div class="well well-small">
            <ul id="layout_west_tree"></ul>
        </div>
</div>