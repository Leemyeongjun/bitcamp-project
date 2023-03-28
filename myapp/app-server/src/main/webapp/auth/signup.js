document.querySelector("#btn-insert").onclick = () => {
  const form = document.querySelector("#member-form");
  const formData = new FormData(form);

  let json = JSON.stringify(Object.fromEntries(formData));

  fetch("../members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.status == "success") {
        location.reload();
      } else {
        alert("입력 실패!");
        console.log(result.data);
      }
    })
    .catch((exception) => {
      alert("입력 중 오류 발생!");
      console.log(exception);
    });
};