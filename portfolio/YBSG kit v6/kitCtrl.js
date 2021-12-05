app.controller("kitCtrl", function($scope){

//used to decide which information to present
    class Brand {
        constructor() {
            this.YBSactive = false;
            this.CBSactive = false;
            this.ACCactive = false;
        }
    }

    $scope.brand = new Brand;
//toggles the brand between YBS/CBS/ACCORD
    $scope.toggleYbs = function() {
        $scope.brand.YBSactive = !$scope.brand.YBSactive;
        $scope.brand.CBSactive = false;
        $scope.brand.ACCactive = false;
        angular.element("h3, h5").css("color", "green");
    }
    $scope.toggleCbs = function() {
        $scope.brand.CBSactive = !$scope.brand.CBSactive;
        $scope.brand.YBSactive = false;
        $scope.brand.ACCactive = false;
        angular.element("h3, h5").css("color", "red");
    }
    $scope.toggleAcc = function() {
        $scope.brand.ACCactive = !$scope.brand.ACCactive;
        $scope.brand.CBSactive = false;
        $scope.brand.YBSactive = false;
        angular.element("h3, h5").css("color", "rgb(218, 145, 12)");
    }


//used to decide which information to present
    class Variation {
        constructor() {
            this.HP = false;
            this.REM = false;
            this.PORT = false;
            this.PT = false;
            this.AL = false;
            this.TOE = false;
            this.TT = false;
        }
    }
    
    $scope.variation = new Variation;
//toggles the variations on or off
    $scope.toggleHP = function() {
        $scope.variation.HP = !$scope.variation.HP;
    }
    $scope.toggleREM = function() {
        $scope.variation.REM = !$scope.variation.REM;
    }
    $scope.togglePORT = function() {
        $scope.variation.PORT = !$scope.variation.PORT;
    }
    $scope.togglePT = function() {
        $scope.variation.PT = !$scope.variation.PT;
    }
    $scope.toggleAL = function() {
        $scope.variation.AL = !$scope.variation.AL;
    }
    $scope.toggleTOE = function() {
        $scope.variation.TOE = !$scope.variation.TOE;
    }
    $scope.toggleTT = function() {
        $scope.variation.TT = !$scope.variation.TT;
    }

//The questions asked in the mandatories section
    let manda = {
        q1 : "Agenda: What I can do to meet the objective",
        q2 : "Confirm advice is not provided",
        q3 : "Data processing statement",
        q4 : "Joint authority statement",
    }
    let mandaBUY = {
        q5 : "Annual General Meeting statements",
        q6 : "Explain paperless process",
        q7 : "Concessionary purchase?",
        q8 : "Offer accepted for a new property?",
        q9 : "Living together?",
    }
    let mandaACC = {
        q10 : "Do they have an active broker relationship?",
        q11 : "Do they know they can use their broker?",
        q12 : "-- Record their intention --",
        q13 : "'Broker will have access to personal data unless the relationship is terminated'",
        q14 : "Do they want to end the relationship?",
    }  

    $scope.pull1 = manda;
    $scope.pull2 = mandaBUY;
    $scope.pull3 = mandaACC;


//The questions asked in the account recap section
    let recap = {
        q15: "Repayment history",
        q16: "Existing arrears",
    }
    let recapDetails = {
        q17: "Number of parts",
        q18: "Interest rate",
        q19: "Product expiry",
        q20: "Mortgage term",
        q21: "Repayment type",
        q22: "Remaining balance",
    }

    $scope.pull4 = recap;
    $scope.pull5 = recapDetails;
    

//The questions asked in the eligibility section
    let eligi = {
        q23 : "LTV within criteria?",
        q24 : "Main residence?"
    }
    let eligiBuy = {
        q25: "Are any applicants first time buyers?",
        q26: "Have all applicants provided paperless authority?",
    }
    let eligiAff ={
        q27: "Has the account been open for 6 months?",
        q28: "£70 revaluation fee",
        q29: "85% LTV Cap",
    }
    let eligiToe = {
        q30: "All parties need independent legal representation",
        q31: "All parties need to sign the application form",
        q32: "Only the remaining applicant can check progress",
        q33: "£180 non-refundable application fee",
        q34: "Are things amicable?"
    }    
    let eligiPt = {
        q35: "Any other changes? (A.L or Type/Term?)",
        q36: "Do they qualify for Ex. Only",
        q37: "Have you chosen a new product?"
    }

    $scope.pull6 = eligi;
    $scope.pull7 = eligiBuy;
    $scope.pull8 = eligiAff;
    $scope.pull9 = eligiToe;
    $scope.pull10 = eligiPt;

//The information confirmed in the AIP section
    let aip = {
        q38 : "Confirm the credit check statements",
        q39 : "Confirm decline rationale (where applicable)",
        q40 : "Send the AIP email"
    }
    let paperless = {
        q41 : "A guide to arranging your mortgage booklet",
        q42 : "Income documentation guidance",
        q43 : "A link to data privacy information"
    }

    $scope.pull11 = aip;
    $scope.pull12 = paperless;
    

//The information confirmed in the Appointment section
    let appoint = {
        q44 : "Expect a text and/or email confirming the appointment details",
        q45 : "The MA will go through the next steps which can include mortgage advice",
        q46 : "You should expect a courtesy call prior to your appointment",
        q47 : "RECAP: 'You called for X, I've done Y, we will call you to do Z",
        q48 : "Have I covered everything today?"
    }

    $scope.pull13 = appoint;

//The checklist information
    let checklist = {
        q49 : "LIVE Notes",
        q50 : "ISIS Notes",
        q51 : "Appointment",
        q52 : "Complaint",
        q53 : "Email sent",
        q54 : "Sharepoint",
        q55 : "Broker relationship",
        q56 : "Customer request"
    }

    $scope.pull14 = checklist;
});


//Draggable javascript

//Make the DIV element draggagle:

//pulled from a tutorial @ w3schools.com | https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable
dragElement(document.getElementById("draggable"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Item")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "Item").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}