//email,password,form-button
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signinButton = document.getElementById("signin-button");
const formHelp = document.getElementById("form-help");

signinButton.addEventListener("click",function() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    if(email === ""||password === ""){
        formHelp.style.display = "block";
        formHelp.textContent = "Vui lòng nhập đầy đủ thông tin!";
        return;
    }
    if(!email.includes("@")){
        formHelp.style.display = "block";
        formHelp.textContent = "Vui lòng nhập đúng địng dạng email!";
        return;
    }
    if(password.length < 8){
        formHelp.style.display = "block";
        formHelp.textContent = "Mật khẩu phải có ít nhất 8 ký tự!";
        return;
    }
    formHelp.style.display = "none";
  alert("Đăng nhập thành công!");
  emailInput.value = "";
  passwordInput.value = "";

});
