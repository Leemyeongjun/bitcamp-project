

document.querySelector('.signup').addEventListener('click', function() {
	location.href='sign/signup.html';
});

document.querySelector('.login').addEventListener('click', function() {
	location.href='auth/login.html';
});

document.querySelector('.board').addEventListener('click', function() {
	location.href='board/list.html';
});

document.querySelector('.logo').addEventListener('click', function() {
	location.href='index.html';
});

document.querySelector('#logo').addEventListener('click', function() {
	location.href='index.html';
});

fetch("auth/user")
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
	fetch("auth/logout")
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			location.reload();
		})
		.catch((exception) => {
			console.log(exception);
		});
}