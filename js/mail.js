function throttle (limit, callback) {
	var wait = false;                  // Initially, we're not waiting
	return function (arg) {            // We return a throttled function
		if (!wait) {                     // If we're not waiting
			callback(arg);                 // Execute users function
			wait = true;                   // Prevent future invocations
			setTimeout(function () {       // After a period of time
					wait = false;              // And allow future invocations
			}, limit);
		}
	}
}

function sendMail(email) {
	console.log('sending to', email);
	return Email.send({
		SecureToken : "accd8739-3623-45fb-adc6-20c35f5cedc3",
    To : "hello@codenomad.io",
    From : "hello@codenomad.io",
    Subject : "Subscribed on website: " + email,
    Body : email
	}).then(() => {
		alert('Thank you! We will write you back soon.');
	});
}

const sendMailThrottled = throttle(300, sendMail);

function handleMailButton() {
	const email = document.getElementById('email-input').value;
	document.getElementById('email-input').value = '';

	if(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/.test(email) === false) {
		alert('Invalid email format.');
		return;
	}

	sendMailThrottled(email);
}
