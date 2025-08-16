const text = "欢迎来到我的网站";
const speed = 200;
let i = 0;
const target = document.querySelector(".fade-in");

target.innerHTML = ""; // 清空原有内容

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
