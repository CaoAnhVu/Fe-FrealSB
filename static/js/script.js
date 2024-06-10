//slider
document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    loop: true, // Cho phép lặp lại các slide
    autoplay: {
      delay: 5000, // Thời gian hiển thị mỗi slide là 3 giây
    },
    speed: 1000, // Tốc độ chuyển động của slider (ms)
    effect: "fade", // Hiệu ứng chuyển động (vd: fade, slide, cube, flip, ...)
    navigation: {
      nextEl: ".swiper-button-next", // Selector cho nút điều hướng tiếp theo
      prevEl: ".swiper-button-prev", // Selector cho nút điều hướng trước
    },
    pagination: {
      el: ".swiper-pagination", // Selector cho điểm chuyển đổi trực quan
      clickable: true, // Cho phép điểm chuyển đổi trực quan có thể được nhấp
    },
  });
});
//show hide password
const passwordToggles = document.querySelectorAll(".password-toggle");

passwordToggles.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const targetIds = this.getAttribute("data-target").split(" ");
    targetIds.forEach((targetId) => {
      const passwordInput = document.getElementById(targetId);
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
    });

    // Toggle the icon between eye and eye-slash
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});
// kiểm tra thông tin

/// Kiểm tra sự khớp nhau giữa mật khẩu và mật khẩu xác nhận
function checkPasswordMatch() {
  var password = document.getElementById("register-password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var matchText = document.getElementById("password-match");

  if (password === "" && confirmPassword === "") {
    matchText.style.display = "none"; // Ẩn thông báo nếu cả hai ô đều trống
  } else {
    matchText.style.display = "block"; // Hiển thị thông báo nếu một trong hai ô không trống
    if (password === confirmPassword) {
      matchText.innerHTML = "Passwords match";
      matchText.style.color = "green";
    } else {
      matchText.innerHTML = "Passwords do not match";
      matchText.style.color = "red";
    }
  }
}

// Gọi hàm kiểm tra sự khớp mật khẩu khi trang được tải và sau mỗi lần nhập liệu
document
  .getElementById("register-password")
  .addEventListener("input", checkPasswordMatch);
document
  .getElementById("confirm-password")
  .addEventListener("input", checkPasswordMatch);

// Kiểm tra mật khẩu mạnh yếu
function checkPasswordStrength() {
  var password = document.getElementById("register-password");
  var messageText = document.getElementById("message");
  var strengthText = document.getElementById("password-strength");

  password.addEventListener("input", function () {
    if (password.value.length > 0) {
      messageText.style.display = "block";
    } else {
      messageText.style.display = "none";
      password.style.borderColor = ""; // Xóa màu viền khi không có giá trị
    }

    if (password.value.length < 4 && password.value.length > 0) {
      strengthText.innerHTML = "weak";
      password.style.borderColor = "red";
      messageText.style.color = "red";
    } else if (password.value.length >= 4 && password.value.length < 8) {
      strengthText.innerHTML = "medium";
      password.style.borderColor = "orange";
      messageText.style.color = "orange";
    } else if (password.value.length >= 8) {
      strengthText.innerHTML = "strong";
      password.style.borderColor = "green";
      messageText.style.color = "green";
    }
  });
}

// Gọi hàm kiểm tra mật khẩu khi trang được tải
document.addEventListener("DOMContentLoaded", checkPasswordStrength);

// Hàm kiểm tra và thông báo xác nhận đăng ký
function showAlert(message) {
  document.getElementById("alert-message").innerText = message;
  document.getElementById("custom-alert").style.display = "flex";
}

function closeAlert() {
  document.getElementById("custom-alert").style.display = "none";
}
// Hàm kiểm tra và xác nhận đăng ký
function validateSignUp() {
  var password = document.getElementById("register-password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var signUpButton = document.getElementById("sign-up-button");

  // Kiểm tra mật khẩu rỗng
  if (password === "" || confirmPassword === "") {
    showAlert("Vui lòng nhập cả mật khẩu và xác nhận mật khẩu.");
    return false;
  }

  // Kiểm tra sự khớp nhau giữa mật khẩu và mật khẩu xác nhận
  if (password !== confirmPassword) {
    showAlert("Mật khẩu và xác nhận mật khẩu không khớp!");
    signUpButton.disabled = true; // Vô hiệu hóa nút Sign Up nếu mật khẩu không khớp
    return false; // Ngăn chặn việc submit form
  }

  return true; // Cho phép submit form nếu mật khẩu khớp nhau
}

document
  .getElementById("sign-up-button")
  .addEventListener("click", function () {
    if (validateSignUp()) {
      window.location.href = "otp.html";
    }
  });
//index
document.getElementById("post-button").addEventListener("click", function () {
  const content = document.getElementById("post-content").value;
  if (content) {
    addPost(content);
    document.getElementById("post-content").value = "";
  }
});

function addPost(content) {
  const postsContainer = document.getElementById("posts-container");

  const postDiv = document.createElement("div");
  postDiv.className = "post";

  const postContent = document.createElement("p");
  postContent.textContent = content;

  const postTime = document.createElement("span");
  postTime.className = "post-time";
  postTime.textContent = new Date().toLocaleString();

  postDiv.appendChild(postContent);
  postDiv.appendChild(postTime);
  postsContainer.insertBefore(postDiv, postsContainer.firstChild);
}
