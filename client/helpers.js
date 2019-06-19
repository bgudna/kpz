  	Template.listinn.helpers({
		'verkWork': function() {
			var notandiId = Meteor.userId();
			return Verkefnalisti.find({ group: "work" }, {sort: {name: 1}});
		},
		'personalWork': function() {
			var notandiId = Meteor.userId();
			return Verkefnalisti.find({ group: "personal" }, {sort: {name: 1}});
		},
	});

	Template.textabox.helpers({
		'notesWork': function() {
			var notandiId = Meteor.userId();
			return Verkefnalisti.find({ group: "notes" });
		},
	});