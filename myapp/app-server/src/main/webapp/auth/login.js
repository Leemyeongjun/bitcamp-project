

document.querySelector('.signup').addEventListener('click', function() {
	location.href='../sign/signup.html';
});

document.querySelector('.login').addEventListener('click', function() {
	location.href='login.html';
});

document.querySelector('.board').addEventListener('click', function() {
	location.href='../board/list.html';
});

document.querySelector('.logo').addEventListener('click', function() {
	location.href='../index.html';
});

document.querySelector('#logo').addEventListener('click', function() {
	location.href='../index.html';
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

document.querySelector('input[name="email"]').value = getCookie('email');
		
		document.querySelector('#btn-login').onclick = () => {
			// 이메일을 쿠키에 보관
			if (document.querySelector('input[type="checkbox"]:checked') != null) {
				setCookie('email', document.querySelector('input[name="email"]').value, 60 * 60 * 24 * 7);
			} else {
				setCookie('email', '', 0);
			}
			
			const form = document.querySelector('#login-form');
			const formData = new FormData(form);
			
			fetch("login", {
				method: "post",
				body: formData
			})
			.then(response => {
				return response.json();
			})
			.then(result => {
				if (result.status == 'success') {
					location.href = '../';
				} else {
					alert('로그인 실패!');
					document.querySelector('input[name="email"]').value = "";
					document.querySelector('input[name="password"]').value = "";
				}
			})
			.catch(exception => {
				alert("로그인 오류!");
				console.log(exception);
			});
		};
		
		function getCookie(cookieName){
				var cookieValue=null;
				if(document.cookie){
						var array=document.cookie.split((escape(cookieName)+'='));
						if(array.length >= 2){
								var arraySub=array[1].split(';');
								cookieValue=unescape(arraySub[0]);
						}
				}
				return cookieValue;
		}
		 
		function setCookie(cookieName, cookieValue, cookieMaxAge, cookiePath, cookieDomain, cookieSecure){
				var cookieText=encodeURIComponent(cookieName)+'='+encodeURIComponent(cookieValue);
				cookieText+=(cookieMaxAge ? '; max-age='+cookieMaxAge : '');
				cookieText+=(cookiePath ? '; path='+cookiePath : '');
				cookieText+=(cookieDomain ? '; domain='+cookieDomain : '');
				cookieText+=(cookieSecure ? '; secure' : '');
				document.cookie=cookieText;
		}