Meteor.publish('verkefnin', function() {
	var notandiId = this.userId;
	return Verkefnalisti.find({createdBy: notandiId});
});