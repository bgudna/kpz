Meteor.methods({
	'setjaWorkVerkefni' : function(verk){
		var notandiId = Meteor.userId();
		Verkefnalisti.insert({
			name: verk,
			group: "work",
			createdBy: notandiId
		});
	},
	'setjaWorkPersonal' : function(verk){
		var notandiId = Meteor.userId();
		Verkefnalisti.insert({
			name: verk,
			group: "personal",
			createdBy: notandiId
		});
	},
	'setjaWorkNotes' : function(punktar){
		var notandiId = Meteor.userId();
			Verkefnalisti.insert({
			name: punktar,
			group: "notes",
			createdBy: notandiId
		});
	},	
	'updateNotes' : function(verk, updated){
		Verkefnalisti.update(verk, {$set: {name: updated}});
	},		
	'eydaVerkefni' : function(verk){
		Verkefnalisti.remove(verk);
	},
	'toggleChecked' : function(verk, setChecked){
		Verkefnalisti.update(verk, {$set: {checked: setChecked}});
	}
});

