var Nightmare = require('nightmare');
new Nightmare()
	.goto('http://www.volunteertoronto.ca/networking/opening_search.asp')
	.click('input[name="btnSubmit"]')
	.wait()
	.evaluate(function (page) {
		return document.documentElement.innerHTML;
	}, function (res) {
		console.log(res);
	})
	.run();