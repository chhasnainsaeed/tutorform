function tvalidateStep2() {

    var step5ErrorselectMessage = document.getElementById('step5ErrorselectMessage');
    var step5ErrorfilloutMessage = document.getElementById('step5ErrorfilloutMessage');
    var step5ErrorvalidemailMessage = document.getElementById('step5ErrorvalidemailMessage');
    const OtherQualificationdiv = document.getElementById('OtherQualificationdiv');
    const howyouhearrefreldiv = document.getElementById('howyouhearrefreldiv');
    const howyouhearotherdiv = document.getElementById('howyouhearotherdiv');
   
  
    step5ErrorselectMessage.style.display = 'none';
    step5ErrorfilloutMessage.style.display = 'none';
    step5ErrorvalidemailMessage.style.display = 'none';
      
       // Validate text input fields
       var textfield = document.getElementById('Tutor-Name');
      var textValue = textfield.value.trim();
      if (textValue === '') {
        // Display error message for empty field
        step5ErrorfilloutMessage.style.display = 'block';
        return false; // Validation failed
      } 
      
      
        // Validate email field
        var emailField = document.getElementById('Tutor-Email');
        var emailValue = emailField.value.trim();
        if (emailValue === '') {
          step5ErrorfilloutMessage.style.display = 'block';
          return false; // Validation failed
        } else {
          // Validate email format using regular expression
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailValue)) {
            step5ErrorvalidemailMessage.style.display = 'block';
            return false; // Validation failed
          }
        }
      
        // Validate phone field
        var phoneField = document.getElementById('Tutor-Mobile');
        var phoneValue = phoneField.value.trim();
        if (phoneValue === '') {
          step5ErrorfilloutMessage.style.display = 'block';
          return false; // Validation failed
        } 
     
     
     // Validate High School Certificate
        var highschoolcrtField = document.getElementById('highschoolcertificate');
        var highschoolcrtValue = highschoolcrtField.value.trim();
        if (highschoolcrtValue === '') {
          step5ErrorfilloutMessage.style.display = 'block';
          return false; // Validation failed
        } 
      
       // Validate High School
        var highschoolField = document.getElementById('High-School');
        var highschoolValue = highschoolField.value.trim();
        if (highschoolValue === '') {
          step5ErrorfilloutMessage.style.display = 'block';
          return false; // Validation failed
        } 
     
   
      
      // Validate what degree
        var QualificationField = document.getElementById('University-Degree');
        var QualificationValue = QualificationField.value.trim();
        if (QualificationValue === '') {
          step5ErrorfilloutMessage.style.display = 'block';
          return false; // Validation failed
        } 
     
      
      // Validate what degree
        var QualificationField = document.getElementById('SelectGraduatingClass');
        var QualificationValue = QualificationField.value.trim();
        if (QualificationValue === '') {
         step5ErrorselectMessage.style.display = 'block';
          return false; // Validation failed
        } 
     
     
     // Validate what degree
        var QualificationField = document.getElementById('tqualification');
        var QualificationValue = QualificationField.value.trim();
        if (QualificationValue === '') {
         step5ErrorselectMessage.style.display = 'block';
          return false; // Validation failed
        } 
     
     
     // Validate what degree
        var QualificationField = document.getElementById('How-did-you-hear-about-Apex');
        var QualificationValue = QualificationField.value.trim();
        if (QualificationValue === '') {
         step5ErrorselectMessage.style.display = 'block';
          return false; // Validation failed
        } 
      
      var textFieldpname = document.getElementById('How-did-you-hear-about-Apex-Other');
      var isHiddenpnamedivVisible = howyouhearotherdiv.style.display === 'block'; // Check if the hidden div is visible
      
      if (isHiddenpnamedivVisible) {
        var textpnamedValue = textFieldpname.value.trim();
      
        if (textpnamedValue === '') {
           step5ErrorfilloutMessage.style.display = 'block'; // Show the error message
          return false; // Validation failed
        } 
      }
      
      var textFieldpmobile = document.getElementById('How-did-you-hear-about-Apex-Referral');
      var isHiddenpmobiledivVisible = howyouhearrefreldiv.style.display === 'block'; // Check if the hidden div is visible
      
      if (isHiddenpmobiledivVisible) {
        var textpmobileValue = textFieldpmobile.value.trim();
      
        if (textpmobileValue === '') {
          step5ErrorfilloutMessage.style.display = 'block'; // Show the error message
          return false; // Validation failed
        } 
      }
      
      var emailFieldpemail = document.getElementById('Other-Qualification-2');
      var isHiddenpemaildivVisible = OtherQualificationdiv.style.display === 'block'; // Check if the hidden div is visible
      
      if (isHiddenpemaildivVisible) {
        var textpemailValue = emailFieldpemail.value.trim();
      
        if (textpemailValue === '') {
          step5ErrorfilloutMessage.style.display = 'block'; // Show the error message
          return false; // Validation failed
        } 
      }
      
     
        return true; // Validation succeeded
      }
        
      
    
       function tvalidateStep3() {
        // Reset error message and field highlight
        var errorFileUploadMessage = document.getElementById('step3ErrorfileUploadMessage');
        errorFileUploadMessage.style.display = 'none';
    
        // Validate file upload field
        var fileUploadField = document.getElementById('CV');
        if (!fileUploadField.files || fileUploadField.files.length === 0) {
          errorFileUploadMessage.style.display = 'block';
          return false; // Validation failed
        }
    
        return true; // Validation passed
      }
     
    function ttvalidateStep4() {
      
  
      var step4ErrorfilloutMessagee = document.getElementById('step4ErrorfilloutMessage');
      step4ErrorfilloutMessagee.style.display = 'none';
      var step4ErrorradioMessagee = document.getElementById('step4ErrorradioMessage');
     step4ErrorradioMessagee.style.display = 'none';
      
        // Validate how far you willing to travell
        var farwilling = document.getElementById('How-far-are-you-willing-to-travel-2');
        var farwillingValue = farwilling.value.trim();
        if (farwillingValue === '') {
         step4ErrorfilloutMessagee.style.display = 'block';
          return false; // Validation failed
        } 
      
         // Validate Tuttor Suburb 
        var tutorsuburb = document.getElementById('Tutor-Suburb');
        var tutorsuburbValue = farwilling.value.trim();
        if (farwillingValue === '') {
         step4ErrorfilloutMessagee.style.display = 'block';
          return false; // Validation failed
        } 
      
       // Check if at least one radio option is selected
      var wwccyes = document.getElementById('Yes-2');
      var Nowilling = document.getElementById('No-but-willing-to-apply-2');
      var nowwcc = document.getElementById('No');
        if (!wwccyes.checked && !Nowilling.checked && !nowwcc.checked) {
          step4ErrorfilloutMessagee.style.display = 'block';
          return false; // Validation failed
        }
      
       // Check if at least one radio option is selected in Step 4
       var accyes = document.getElementById('Yes');
       var accno = document.getElementById('No-2');
        if (!accyes.checked && !accno.checked) {
          step4ErrorradioMessagee.style.display = 'block';
          return false; // Validation failed
        }
     
    return true;
    }
    
     function tvalidateStep5() { 
    
  // Get the displayed additional div
        const vceSubjects = document.getElementById('vceSubjects');
        const ibSubjects = document.getElementById('ibSubjects');
        const othersubjects = document.getElementById('othersubjects');
        const step5ErrorfilloutMessag = document.getElementById('step5ErrorfilloutMessag');
       
        step5ErrorfilloutMessag.style.display = 'none';
      
        var checkboxes = [];
      
        // Check which additional div is displayed
        if (vceSubjects.style.display === 'block') {
          checkboxes = vceSubjects.querySelectorAll('input[type="checkbox"]');
          
        } else if (ibSubjects.style.display === 'block') {
          checkboxes = ibSubjects.querySelectorAll('input[type="checkbox"]');
        } else if (othersubjects.style.display === 'block') {
          checkboxes = othersubjects.querySelectorAll('input[type="checkbox"]');
        }
      
        // Check if at least one checkbox option is selected
        var isChecked = Array.from(checkboxes).some(function (checkbox) {
          return checkbox.checked;
        });
      
        if (!isChecked) {
          step5ErrorfilloutMessag.style.display = 'block';
          return false; // Validation failed
        }
       
    var textInputs = document.querySelectorAll('.validatescore');
    // Loop through each text input field and validate
    for (var i = 0; i < textInputs.length; i++) {
      var input = textInputs[i];
      if (input.value.trim() === '') {
        // Validation failed, display an error message (you can customize this part)
        step5ErrorfilloutMessag.style.display = 'block';
        return false;
      }
    }
  
       // Function to check if at least one radio button in the group is selected
    function isRadioGroupValid(radioGroup) {
      var radioInputs = radioGroup.querySelectorAll('input[type="radio"]');
      return Array.from(radioInputs).some(function (radio) {
        return radio.checked;
      });
    }
  
    // Get all radio button groups
    var radioGroups = document.querySelectorAll('input[type="radio"][data-validate="true"]');
  
    // Check if at least one radio button in each group is selected
    var isRadioValid = Array.from(radioGroups).every(function (radio) {
      var groupName = radio.name;
      var group = document.querySelectorAll('input[name="' + groupName + '"]');
      return isRadioGroupValid(group[0].parentNode); // Check only once per group
    });
  
    if (!isRadioValid) {
      step5ErrorfilloutMessag.style.display = 'block';
      return false; // Validation failed
    }
  
    return true;
     }

  
      //tutor form multistep function 
    
    const checkboxContainers = document.querySelectorAll('.w-checkbox.checkbox-field-3');
    
    checkboxContainers.forEach(function(container) {
      const checkbox = container.querySelector('input[type="checkbox"]');
      const label = container.querySelector('.checkbox-label');
    
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          container.style.backgroundColor = '#CCFFD7';
          container.style.borderColor = '#82e3af';
          label.style.color = '#000';
        } else {
          container.style.backgroundColor = '#09f';
          container.style.borderColor = '#09f';
          label.style.color = '#fff'; // Set the default text color here
        }
      });
    });
    