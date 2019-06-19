Template.listinn.events({
	'click .remove' : function(){
		var verk = this._id;
		Meteor.call('eydaVerkefni',verk);
		sAlert.error('Deleted!', {timeout: '2200',effect:'flip'});
	},
	'submit form.submitWork': function(event){
		event.preventDefault();
		var verk = event.target.verkWork.value;
		Meteor.call('setjaWorkVerkefni', verk);
		event.target.verkWork.value = "";
	},
	'submit form.verkUpdate': function(event){
		event.preventDefault();
		var verk = this._id;
		var punktar = event.target.verk.value;
		Meteor.call('updateNotes', verk, punktar);
	},
	'submit form.submitPersonal': function(event){
		event.preventDefault();
		var verk = event.target.verkPersonal.value;
		Meteor.call('setjaWorkPersonal', verk);
		event.target.verkPersonal.value = "";
	},
	'submit form.personalUpdate': function(event){
		event.preventDefault();
		var verk = this._id;
		var punktar = event.target.personal.value;
		Meteor.call('updateNotes', verk, punktar);
	},
	'click .toggle-checked': function () {
    	var verk = this._id;
    	Meteor.call('toggleChecked',verk, ! this.checked);
  },
});

Template.textabox.events({
	'submit form.submitNotes': function(event){
		event.preventDefault();
		var punktar = event.target.verkNotes.value;
		Meteor.call('setjaWorkNotes', punktar);
		event.target.verkNotes.value = "";
	},
	'submit form.updateNotes': function(event){
		event.preventDefault();
		var verk = this._id;
		var punktar = event.target.note.value;
		Meteor.call('updateNotes', verk, punktar);
	},
	'submit form.saveNotes': function(event){
		event.preventDefault();
		var verk = this._id;
		var punktar = event.target.note.value;
		Meteor.call('updateNotes', verk, punktar);
		sAlert.success('Notes saved!', {timeout: '2200',effect:'flip'});
	},

});


Template.textabox.rendered = function(){

	$('.box').autosize();

	$(document).keypress(function(event) {
		if (event.which == 115 && (event.ctrlKey || event.metaKey) || (event.which == 19)) {
			event.preventDefault();

			$('.saveNotes').submit();
			
			return false;
		}
		return true;
	});

	/*
      $textarea = ('name', $(this.firstNode));
      $textarea.autosize();
	*/
};

