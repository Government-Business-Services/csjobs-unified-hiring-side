//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.use('/csu71', require('./views/csu71/_routes'));
// router.use('/reserve-list-01', require('./views/reserve-list-01/_routes'));

router.post("/reservist1-handler", function (req, res) {
	if (req.session.data['see-candidate'] == "yes") {
		res.redirect('/reserve-list-01/step-2')
	} else {
		res.redirect('/reserve-list-01/task-list')
	}
})

router.post("/reservist2-handler", function (req, res) {
	if (req.session.data['contact-candidate'] == "yes") {
		res.redirect('/reserve-list-01/step-3')
	} else {
		res.redirect('/reserve-list-01/task-list')
	}
})

router.post("/reservist6-handler", function (req, res) {
	if (req.session.data['like-to-offer'] == "yes") {
		res.redirect('/reserve-list-01/step-7')
	} else {
		res.redirect('/reserve-list-01/task-list-reserve?nooffer=true')
	}
})
