var Forms = {
  getElements: function() {
    this.el = {};
    this.el.formField = $(document.querySelector('.form-field'));
  },

  toggleVechicleAreaField: function(prefix) {
    var value = $("select#inquiry_" + prefix + "_area_of_vechicle").val();
    var areaOfVechicleOtherField = $("input#inquiry_"+prefix+"_area_of_vechicle_other_field");
    var other = "Other";
    if (value === other) {
      areaOfVechicleOtherField.show('slow');
    } else {
      areaOfVechicleOtherField.hide();
    }
  },

  toggleOtherMakeField: function() {
    var value = $("select#inquiry_make").val();
    var makeOtherField = $("input#inquiry_make_other_field");
    var other = "Other";
    if (value === other) {
      makeOtherField.show('slow');
    } else {
      makeOtherField.hide();
    }
  },

  initOtherAreaVechicleField: function(prefix) {
    this.toggleVechicleAreaField(prefix);
    $("select#inquiry_" + prefix + "_area_of_vechicle").change(function(){
      Forms.toggleVechicleAreaField(prefix);
    });
  },

  initDynamicForms: function() {
    $("select#inquiry_make").change(function(){
      Forms.toggleOtherMakeField();
    });

    $("select#inquiry_inquiry_type").change(function(){
      var value = $(this).val();
      var missingInfo = "Missing Information";
      var missingInfoPrefix = "missing";
      var parts = "Parts";
      var partsPrefix = "parts";
      var procedurePage = "Procedure Page Issue";
      var procedurePagePrefix = "procedure";
      var weldedPanelOperations = "Welded Panel Operations";
      var weldedPanelOperationsPrefix = "welded";
      var nonWeldedPanelOperations = "Non-Welded Panel Operations";
      var nonWeldedPanelOperationsPrefix = "non_welded";
      var refinishedOperations = "Refinish Operations";
      var refinishedOperationsPrefix = "refinished";
      var allOther = "All Other";
      var select = " ";

      if (value === select) {
        Forms.hideDatabaseForms();
      } else if (value === missingInfo) {
        Forms.hideDatabaseForms();
        $(".missing-info-form").show('slow');
        Forms.initOtherAreaVechicleField(missingInfoPrefix);
      } else if (value === parts) {
        Forms.hideDatabaseForms();
        $(".parts-form").show('slow');
        Forms.initOtherAreaVechicleField(partsPrefix);
      } else if (value === procedurePage) {
        Forms.hideDatabaseForms();
        $(".procedure-page-form").show('slow');
        Forms.initOtherAreaVechicleField(procedurePagePrefix);
      } else if (value === weldedPanelOperations) {
        Forms.hideDatabaseForms();
        $(".welded-panel-operations-form").show('slow');
        Forms.initOtherAreaVechicleField(weldedPanelOperationsPrefix);
      } else if (value === nonWeldedPanelOperations) {
        Forms.hideDatabaseForms();
        $(".non-welded-panel-operations-form").show('slow');
        Forms.initOtherAreaVechicleField(nonWeldedPanelOperationsPrefix);
      } else if (value === refinishedOperations) {
        Forms.hideDatabaseForms();
        $(".refinished-operations-form").show('slow');
        Forms.initOtherAreaVechicleField(refinishedOperationsPrefix);
      } else if (value === allOther) {
        Forms.hideDatabaseForms();
        $(".all-other-form").show('slow');
        Forms.initOtherAreaVechicleField();
      }
    });
  },

  hideDatabaseForms: function() {
    $(".missing-info-form").hide();
    $(".parts-form").hide();
    $(".procedure-page-form").hide();
    $(".welded-panel-operations-form").hide();
    $(".non-welded-panel-operations-form").hide();
    $(".refinished-operations-form").hide();
    $(".all-other-form").hide();
    this.toggleOtherMakeField();
  },

  validateRequiredFields: function() {

    $('input.form-next-button').attr('disabled', 'disabled');

    $('.required-input').on('keyup mouseup', function() {
      var hasAllrequiredInputs;
      var hasRequiredInputsArray = [];
      var requiredInputs = ["inquiry_name", "inquiry_phone", "inquiry_email", "inquiry_make", "inquiry_year", "inquiry_model", "inquiry_vin"];
      for (var i in requiredInputs) {
        var hasContent = false;
        if (($('#' + requiredInputs[i]).val().trim() !== '')) {
          hasContent = true;
        }
        hasRequiredInputsArray.push(hasContent);
      }

      hasAllrequiredInputs = hasRequiredInputsArray.every(Boolean);

      if (hasAllrequiredInputs) {
        $('input.form-next-button').removeAttr('disabled');
      } else {
        $('input.form-next-button').attr('disabled', 'disabled');
      }
    });
  },

  checkRequiredFields: function() {
    $("form").validate({
      debug: true,
      rules: {
        "inquiry[name]": {required: true},
        "inquiry[phone]": {required: true, phoneUS: true},
        "inquiry[email]": {required: true, email: true},
        "inquiry[make]": {required: true, nowhitespace: true},
        "inquiry[model]": {required: true},
        "inquiry[year]": {required: true, nowhitespace: true},
        "inquiry[vin]": {required: true, minlength: 17, maxlength: 17}
      },
      messages: {
        "inquiry[name]": {required: "enter a name"},
        "inquiry[phone]": {required: "enter a phone number", phoneUS: "enter a valid phone number"},
        "inquiry[email]": {required: "enter an email", email: "enter a valid email"},
        "inquiry[make]": {required: "select a make", nowhitespace: "select a make"},
        "inquiry[model]": {required: "enter a model"},
        "inquiry[year]": {required: "select a year", nowhitespace: "select a year"},
        "inquiry[vin]": {required: "enter a vin", minlength: "enter a valid 17 character VIN", maxlength: "enter a valid 17 character VIN"}
      }
    });
  },

  init: function() {
    this.getElements();
    if (this.el.formField.length !== 0) {
      this.hideDatabaseForms();
      this.toggleOtherMakeField();
      this.initDynamicForms();
      this.validateRequiredFields();
      this.checkRequiredFields();
    }
  }
};