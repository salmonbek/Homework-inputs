var telegram_bot_id = "7656330967:AAE3Gad0yNNQpvysGglQ_KTzmhzXszjHDbE";
var chat_id = 6610528887;

document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

document.getElementById("sendData").addEventListener("click", function () {
  var fullname = document.getElementById("fullname").value;
  var homeworkName = document.getElementById("homeworkName").value;
  var group = document.getElementById("group").value;
  var versalLink = document.getElementById("versalLink").value;
  var zipFile = document.getElementById("zipFile").files[0];

  if (!fullname || !homeworkName || !versalLink || !zipFile) {
    alert("Iltimos, barcha maydonlarni to'ldiring.");
    return;
  }

  var formData = new FormData();
  formData.append("chat_id", chat_id);
  formData.append("document", zipFile);
  formData.append(
    "caption",
    `👤 Fullname: ${fullname}\n📚 Homework: ${homeworkName}\n📝 Group: ${group}\n🔗 Versal: ${versalLink}`
  );

  fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendDocument`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Ma'lumotlar muvaffaqiyatli yuborildi!");
      document.getElementById("modal").style.display = "none";
    })
    .catch((error) => {
      console.error("Xatolik yuz berdi:", error);
      alert("Xatolik yuz berdi, qayta urinib ko'ring.");
    });
});
