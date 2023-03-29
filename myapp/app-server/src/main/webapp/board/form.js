

document.querySelector('#btn-insert').onclick = function() {
  const form = document.querySelector('#board-form');
  const formData = new FormData(form);
  
  fetch("../boards", {
    method: "POST",
    body: formData
  })
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result);
    if (result.status == 'success') {
      location.href = 'list.html';
    } else if (result.errorCode == '401') {
    	location.href = '../auth/form.html';
    } else {
      alert('입력 실패!');
    }
  })
  .catch(exception => {
	  alert("입력 오류!");
	  console.log(exception);
  });
  
}

document.querySelector('#btn-cancel').onclick = function() {
  location.href = 'list.html';
}