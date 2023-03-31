document.querySelector('.signup').addEventListener('click', function() {
	location.href='../sign/signup.html';
});

document.querySelector('.login').addEventListener('click', function() {
	location.href='../auth/login.html';
});

document.querySelector('.logo').addEventListener('click', function() {
	location.href='../index.html';
});

document.querySelector('#logo').addEventListener('click', function() {
	location.href='../index.html';
});

//

fetch("../auth/user")
	.then((response) => {
		return response.json();
	})
	.then((result) => {
		if (result.status == "success") {
			document.querySelector("#nickname").innerHTML = result.data.nickname;
			document.querySelector(".logout").classList.remove("logout");
		} else {
			document.querySelector(".login").classList.remove("login");
			document.querySelector(".signup").classList.remove("signup");
		}
	})
	.catch((exception) => {
		alert("로그인 사용자 정보 조회 오류!");
	});

function logout() {
	fetch("../auth/logout")
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			location.href="../index.html";
		})
		.catch((exception) => {
			console.log(exception);
		});
}

//

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