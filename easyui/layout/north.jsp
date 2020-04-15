<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>
<script type="text/javascript" charset="utf-8">
    function logoutFun() {
        window.location.href='${pageContext.request.contextPath}/logout';
    }
    function changeCurrentZhangTao(that) {
        if (that.attr("deptId") != "") {
            postAjax('/loginController/changeAccount?f_account=' + that.attr("deptId"), {},
                    function () {
                        refreshIndexPage();
                    }, {type: 'get', async: false});
        }
    }
    function editCurrentUserPwd() {
        parent.$.modalDialog({
            title: '修改密码',
            width: 300,
            height: 250,
            href: '${pageContext.request.contextPath}/platform/userEditPwd',
            buttons: [{
                text: '修改',
                handler: function () {
                    var f = parent.$.modalDialog.handler.find('#editCurrentUserPwdForm');
                    f.submit();
                }
            }]
        });
    }
    function editCurrentUserHead() {
        parent.$.modalDialog({
            title: '修改头像',
            width: 450,
            height: 250,
            href: '${pageContext.request.contextPath}/platform/userEditHead',
            buttons: [{
                text: '上传',
                handler: function () {
                    var f = parent.$.modalDialog.handler.find('#editCurrentUserHead');
                    f.submit();
                }
                
            }]
        });
    }
    function currentUserRole() {
        parent.$.modalDialog({
            title: '我的角色',
            width: 300,
            height: 250,
            href: '${pageContext.request.contextPath}/userController/currentUserRolePage'
        });
    }
    function currentUserResource() {
        parent.$.modalDialog({
            title: '我可以访问的资源',
            width: 300,
            height: 250,
            href: '${pageContext.request.contextPath}/userController/currentUserResourcePage'
        });
    }
</script>
<style>
    .top-header{padding:0;height:86px;background-color:#f21b0b}
    #operateArea a.l-btn{color:#FFF;height:30px;-moz-border-radius:3px 3px 0 0;-webkit-border-radius:3px 3px 0 0;border-radius:3px 3px 0 0}
    #operateArea a.m-btn-plain-active{border-bottom:none;color:#000;z-index:99999999}
    #operateArea a.m-btn-plain-active .icon-refresh{background:url('<%=request.getContextPath() %>/static/style/images/extjs_icons/icon-refresh.png') no-repeat left center}
    #operateArea a.m-btn-plain-active .icon-set{background:url('<%=request.getContextPath() %>/static/style/images/extjs_icons/icon-set.png') no-repeat left center}
    #operateArea a.m-btn-plain-active .icon-dropOut{background:url('<%=request.getContextPath() %>/static/style/images/extjs_icons/icon-dropOut.png') no-repeat left center}
    #operateArea a.m-btn-plain-active .m-btn-downarrow{background:url(<%=request.getContextPath() %>/static/style/images/extjs_icons/menu_arrows.png) no-repeat 2px center}
    #operateArea a:hover.l-btn-plain{background:#FFF;border:1px solid #FFF}
    #operateArea .m-btn-downarrow{background:url(<%=request.getContextPath() %>/static/style/images/extjs_icons/menu_arrows.png) no-repeat -14px center}
    .top-loginInfo{position:absolute;right:0;bottom:10px;padding:9px 20px;background-color:#fff;margin:0 16px;border-radius:3px;color:#666666;}
    .login-man{width:18px;height:18px;display:inline-block;padding:0 4px 0 0;background:url(<%=request.getContextPath() %>/static/style/images/icon-set4.png) no-repeat}
    #layout_north_kzmbMenu .menu-text,#layout_north_ztMenu .menu-text,#layout_north_zxMenu .menu-text{line-height:30px}
    #layout_north_kzmbMenu .menu-item,#layout_north_ztMenu .menu-item,#layout_north_zxMenu .menu-item{height:30px!important}
    #layout_north_kzmbMenu .menu-line,#layout_north_ztMenu .menu-line,#layout_north_zxMenu .menu-line{border-left:0;border-right:0}
    .menu{border:0}
    #layout_north_kzmbMenu,#layout_north_ztMenu,#layout_north_zxMenu{margin-top:-2px}
</style>
<div class="top-header">
    <div style="position:absolute;top:0;left:0;background: url('${pageContext.request.contextPath}/static/style/images/head-bg_01.png') no-repeat;width:100%;height:86px">
    </div>
    <div id="sessionInfoDiv" class="top-loginInfo">
        <span class="login-man">&nbsp;</span>
        <c:if test="${user.id != null}"><span>[${user.bmmc}][${user.mc}]</span></c:if>
    </div>
    <div id="operateArea" style="position: absolute; right: 5px; top: 10px;">
        <%--<c:if test="${user.id != '0'}">--%>
            <%--<a href="javascript:void(0);" class="easyui-menubutton"--%>
               <%--data-options="menu:'#layout_north_ztMenu',iconCls:'icon-refresh'">切换账套</a>--%>
        <%--</c:if>--%>
        <a href="javascript:void(0);" class="easyui-menubutton"
           data-options="menu:'#layout_north_kzmbMenu',iconCls:'icon-set'">控制面板</a>
        <a href="javascript:void(0);" class="easyui-menubutton"
           data-options="menu:'#layout_north_zxMenu',iconCls:'icon-dropOut'">注销</a>
    </div>
    <div id="layout_north_kzmbMenu" style="width: 100px; display: none;">
        <div onclick="editCurrentUserPwd();">修改密码</div>
        <div onclick="editCurrentUserHead();">修改头像</div>
    </div>
    <%--<div id="layout_north_ztMenu" style="width: 100px; display: none;">--%>
        <%--<c:if test="${user.id != '0'}">--%>
            <%--<c:forEach var="item" items="${zhangTaoList}" varStatus="status">--%>
                <%--<div onclick="changeCurrentZhangTao($(this));" deptId="${item.id}" style="height:30px">${item.deptName}</div>--%>
            <%--</c:forEach>--%>
        <%--</c:if>--%>
    <%--</div>--%>
    <div id="layout_north_zxMenu" style="width: 100px; display: none;">
        <div onclick="logoutFun(true);">退出系统</div>
    </div>
</div>