// JavaScript Document

function loadDialog(){
	var registerDialog =document.getElementById("register_dialog");
	registerDialog.style.display="block";
	var bgDiv=document.getElementById("bg_div");
	bgDiv.style.display="block";
}
function cancelDialog(){
	window.location="login.html";
}
function agreeDialog(){
  	var registerDialog =document.getElementById("register_dialog");
	registerDialog.style.display="none";
	var bgDiv=document.getElementById("bg_div");
	bgDiv.style.display="none";
	var userName=document.getElementById("userName");
	userName.focus();
}	

function validate(){
	var userName = document.getElementById("userName");
	var userNameMsg = document.getElementById("userNameMsg");
	var userNameSuccess = document.getElementById("userNameSuccess");
//			if(userName.value ==""){
////				alert("用户名不能为空");
//				userNameMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/>  用户名不能为空";
//				userName.focus();
//				return false;
//			}
//			else if(userName.value.length<4 || userName.value.length>20){
////				alert("用户名长度只能在4-20个字符之间");
//				userNameMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/>  用户名长度只能在4-20个字符之间";
//				userName.focus();
//				return false;
//			}
//			else if(!isNaN(userName.value)){
////				alert("用户名不能是纯数字，请重新输入！");
//				userNameMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/>  用户名不能是纯数字，请重新输入！";
//				userName.focus();
//				return false;
//			}
	if(!/^.+$/.test(userName.value)){
		userNameMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/>  用户名不能为空";
				userName.focus();
				return false;
	}else if(!/^.{4,20}$/.test(userName.value)){
		userNameMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/> 用户名长度只能在4-20个字符之间";
				userName.focus();
				return false;
	}else if(/^\d+$/.test(userName.value)){
		userNameMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/> 用户名不能是纯数字，请重新输入!";
				userName.focus();
				return false;
	} else if(!/^[\u4e00-\u9fa5\w-]+$/.test(userName.value)){
		userNameMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/> 格式错误，仅支持汉字，字母，数字 “-”、“_” 的组合!";
				userName.focus();
				return false;
	} 
			else{
				userNameSuccess.style.display = "inline";
				userNameMsg.innerHTML=" &nbsp;";
				
			}
			
	
	var password = document.getElementById("password");
	var passwordMsg = document.getElementById("passwordMsg");
	var passwordSuccess = document.getElementById("passwordSuccess");
			if(password.value ==""){
				passwordMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/>  密码不能为空";
				password.focus();
				passwordMsg.style.color="#ff8801";
//				alert("密码不能为空");
				return false;
			}
			else if(password.value.length<6 || password.value.length>20){
				passwordMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/>  长度只能在6-20个字符之间";
				password.focus();
					passwordMsg.style.color="#ff8801";
//				alert("长度只能在6-20个字符之间");
				return false;
			}else if(/^([0-9]+|[a-zA-Z]+|[^0-9a-zA-Z]+)$/.test(password.value)){
				passwordMsg.innerHTML=" <img src='common/image/jd_icon_9.png'/>  有被盗风险，建议使用数字，字母，字符两种以上搭配";
				password.focus();
					passwordMsg.style.color="#ff8801";	
				return false;
			}else if(/^(?![^0-9]+$)(?![^a-zA-Z]+$)(?![0-9a-zA-Z]+$)/.test(password.value)){
				passwordMsg.innerHTML=" <img src='common/image/jd_icon_10.png'/> 您的密码很安全";
				password.focus();
					passwordSuccess.style.display ="inline";
				passwordMsg.style.color="#43c75a";
				
				
			}else if(/^(?![0-9]+$)(?![a-zA-Z]+$)(?![^0-9a-zA-Z]+$)/.test(password.value)){
				passwordMsg.innerHTML=" <img src='common/image/jd_icon_8.png'/> 强度适中";
				password.focus();
				passwordSuccess.style.display ="inline";
				passwordMsg.style.color="#cfdaec";				
				
			}
	

	var repassword = document.getElementById("repassword");
	var repasswordMsg = document.getElementById("repasswordMsg");
	var repasswordSuccess = document.getElementById("repasswordSuccess");
			if(repassword.value ==""){
				repasswordMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/>  确认密码不能为空";
				repassword.focus();
				return false;
			}
			else if(password.value!= repassword.value){
				repasswordMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/>  两次密码不一致";
				repassword.focus();
				return false;
			}else{						
				repasswordMsg.innerHTML=" &nbsp;";
				repasswordSuccess.style.display="inline";	
			}

 	var phone = document.getElementById("phone");
	var phoneMsg = document.getElementById("phoneMsg");
	var phoneSuccess = document.getElementById("phoneSuccess");
	
			if(phone.value ==""){
				phoneMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/> 手机号不能为空";
				phone.focus();
				return false;
			}
			else if(phone.value.length !=11 ){
				phoneMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/> 手机号必须为11位";
				phone.focus();
				return false;
			}
			else if(isNaN(phone.value)){
				phoneMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/> 手机号必须由数字组成！";
				phone.focus();
				return false;
			}	
	else if(!/^1[38][0-9]{9}|15[012356789][0-9]{8}|14[57][0-9]{8}|17[678][0-9]{8}$/.test(phone.value)){
				phoneMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/> 手机号码格式错误！";
				phone.focus();
				return false;
			}else{
				phoneMsg.innerHTML=" &nbsp;";
				phoneSuccess.style.display="inline";
						
			}
	
	
	var validateCode = document.getElementById("validateCode");
	var validateCodeMsg = document.getElementById("validateCodeMsg");
			if(validateCode.value ==""){
				validateCodeMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/> 手机验证码不能为空！";
				validateCode.focus();
				return false;
			}
			else if(validateCode.value.length !=6 ){
				validateCodeMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/> 手机号验证码必须为6位！";
				validateCode.focus();
				return false;
			}
			else if(isNaN(validateCode.value)){
				validateCodeMsg.innerHTML=" <img src='common/image/jd_icon_6.png'/> 手机号验证码必须由数字组成！";
				validateCode.focus();
				return false;
			}
			else{
				validateCodeMsg.innerHTML=" <img src='common/image/jd_icon_7.png'/> 手机验证码格式正确！";
			}
	return true;
}

	

		