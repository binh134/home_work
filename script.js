//name,email,password,signup-button,form-help
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupButton = document.getElementById("signup-button");
const formHelp = document.getElementById("form-help");

signupButton.addEventListener("click",function() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if(name === ""||email === ""||password ===""){
        formHelp.style.display = "block";
        formHelp.innerText = "Vui lòng nhập đầy đủ thông tin!";
        return;
    }
    if(!email.includes("@")){
    formHelp.style.display = "block";
    formHelp.textContent = "Vui lòng nhập đúng định dạng email!";
    return;
}

if (password.length < 8) {
    formHelp.style.display = "block";
    formHelp.textContent = "Mật khẩu phải có ít nhất 8 ký tự!";
    return;
}

  formHelp.style.display = "none";
  alert("Đăng ký thành công!");
  emailInput.value = "";
  passwordInput.value = "";
 window.location.href = "login.html";

});

