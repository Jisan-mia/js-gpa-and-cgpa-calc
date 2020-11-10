const calculateButton = document.getElementById('calculate-btn');
//gpa marks
const gpaSub1 = document.getElementById('gpaSub1');
const gpaSub2 = document.getElementById('gpaSub2');
const gpaSub3 = document.getElementById('gpaSub3');
const gpaSub4 = document.getElementById('gpaSub4');
const gpaSub5 = document.getElementById('gpaSub5');
const gpaSub6 = document.getElementById('gpaSub6');
const resetBtn = document.getElementById('reset-btn');

const gpaForm = document.getElementById('gpa-form');
const cgpaForm = document.getElementById('cgpa-form');

//cgpa semester points
const cgpaSem1 = document.getElementById('cgpaSem1');
const cgpaSem2 = document.getElementById('cgpaSem2');
const cgpaSem3 = document.getElementById('cgpaSem3');
const cgpaSem4 = document.getElementById('cgpaSem4');
const cgpaSem5 = document.getElementById('cgpaSem5');
const cgpaSem6 = document.getElementById('cgpaSem6');
const cgpaSem7 = document.getElementById('cgpaSem7');
const cgpaSem8 = document.getElementById('cgpaSem8');


function onloadAlert(){
	alert('This calculator is made for calculating gpa and cgpa of Diploma Students. Thanks (Your result will be out of 4) ')
}



function checkGpaGradePoint(marks){
	let gradePoint;
	if(marks >= 80){
		gradePoint = 4;
	} else if (marks >= 75 && marks <= 79){
		gradePoint = 3.75;
	} else if (marks >= 70 && marks <= 74){
		gradePoint = 3.50;
	} else if (marks >= 65 && marks <= 69){
		gradePoint = 3.25;
	} else if (marks >= 60 && marks <= 64){
		gradePoint = 3.00;
	} else if (marks >= 55 && marks <= 59){
		gradePoint = 2.75;
	} else if( marks >= 50 && marks <= 54){
		gradePoint = 2.50;
	} else if ( marks >= 45 && marks <= 49){
		gradePoint = 2.25;
	} else if ( marks >= 40 && marks <= 44){
		gradePoint  = 2.00;
	} else {
		gradePoint = 0;
	}
	return gradePoint;
}


//validate input box
function validateInputBox(inputValue, input){
	if(inputValue == "" || isNaN(inputValue)){
		input.style.borderColor = 'red';
		return false;
	} else {
		input.style.borderColor = 'limegreen';
		return true;
	}
}

function calculateGPA(){
	const gpaSub1Marks = parseFloat(gpaSub1.value);
	const gpaSub2Marks = parseFloat(gpaSub2.value);
	const gpaSub3Marks = parseFloat(gpaSub3.value);
	const gpaSub4Marks = parseFloat(gpaSub4.value);
	const gpaSub5Marks = parseFloat(gpaSub5.value);
	const gpaSub6Marks = parseFloat(gpaSub6.value);

	//validate input box1
	const validateInput1 = validateInputBox(gpaSub1Marks,gpaSub1);

	//validate input box2
	const validateInput2 = validateInputBox(gpaSub2Marks,gpaSub2);

	//validate input box3
	const validateInput3 =validateInputBox(gpaSub3Marks,gpaSub3);

	//validate input box4
	const validateInput4 =validateInputBox(gpaSub4Marks,gpaSub4);

	//validate input box5
	const validateInput5 =validateInputBox(gpaSub5Marks,gpaSub5);

	//validate input box6
	const validateInput6 =validateInputBox(gpaSub6Marks,gpaSub6);


 
	if(validateInput1 == true && validateInput2 == true && validateInput3 == true && validateInput4 == true && validateInput5 == true && validateInput6 == true){


		const gpaAllInputs = document.querySelectorAll('#gpa-form input');
		// console.log(gpaAllInputs);
		
		
		const gradePoint1 = checkGpaGradePoint(gpaSub1Marks);
		const gradePoint2 = checkGpaGradePoint(gpaSub2Marks);
		const gradePoint3 = checkGpaGradePoint(gpaSub3Marks);
		const gradePoint4 = checkGpaGradePoint(gpaSub4Marks);
		const gradePoint5 = checkGpaGradePoint(gpaSub5Marks);
		const gradePoint6 = checkGpaGradePoint(gpaSub6Marks);

		const pointArr = [gradePoint1, gradePoint2, gradePoint3, gradePoint4, gradePoint5, gradePoint6]

		let totalGrade = 0;
		for(let i = 0; i < pointArr.length; i++){
			totalGrade += pointArr[i];
			if(pointArr[i] == 0){
				console.log(pointArr[i], 'inside loop')
				totalGrade = 0;
				break;
			}
		}
		
		// const totalGrade =  gradePoint1+gradePoint2 + gradePoint3+ gradePoint4 + gradePoint5 + gradePoint6
		const result = document.getElementById('result');
		if(totalGrade == 0){
			result.innerText = 'F'
		} else{
			const averageGPA = totalGrade / gpaAllInputs.length
			result.innerHTML = `&nbsp` + averageGPA.toFixed(2);
		}
		
	}
	
}


//calculate cgpa
function calculateCGPA(){
	const cgpaSem1Marks = parseFloat(cgpaSem1.value);
	const cgpaSem2Marks = parseFloat(cgpaSem2.value);
	const cgpaSem3Marks = parseFloat(cgpaSem3.value);
	const cgpaSem4Marks = parseFloat(cgpaSem4.value);
	const cgpaSem5Marks = parseFloat(cgpaSem5.value);
	const cgpaSem6Marks = parseFloat(cgpaSem6.value);
	const cgpaSem7Marks = parseFloat(cgpaSem7.value);
	const cgpaSem8Marks = parseFloat(cgpaSem8.value);	

	//validate input box1
	const validateInput1 = validateInputBox(cgpaSem1Marks,cgpaSem1);

	//validate input box2
	const validateInput2 = validateInputBox(cgpaSem2Marks,cgpaSem2);

	//validate input box3
	const validateInput3 =validateInputBox(cgpaSem3Marks,cgpaSem3);

	//validate input box4
	const validateInput4 =validateInputBox(cgpaSem4Marks,cgpaSem4);

	//validate input box5
	const validateInput5 =validateInputBox(cgpaSem5Marks,cgpaSem5);

	//validate input box6
	const validateInput6 =validateInputBox(cgpaSem6Marks,cgpaSem6);

	//validate input box7
	const validateInput7 =validateInputBox(cgpaSem7Marks,cgpaSem7);

	//validate input box8
	const validateInput8 =validateInputBox(cgpaSem8Marks,cgpaSem8);


	if(validateInput1 == true && validateInput2 == true && validateInput3 == true && validateInput4 == true && validateInput5 == true && validateInput6 == true && validateInput7 == true && validateInput8 == true){

		// 1st semesters 5%
		const sem1Percent = ((5/100)*cgpaSem1Marks)

		// 2nd semesters 5%
		const sem2Percent = ((5/100)*cgpaSem2Marks)

		//3rd semesters 5%
		const sem3Percent = ((5/100)*cgpaSem3Marks)

		// 4th semseters 10%
		const sem4Percent = ((10/100)*cgpaSem4Marks)

		// 5th semesters 15%
		const sem5Percent = ((15/100)*cgpaSem5Marks)

		// 6th semseters 20%
		const sem6Percent = ((20/100)*cgpaSem6Marks)

		// 7th semesters 25%
		const sem7Percent = ((25/100)*cgpaSem7Marks)
 
		// 8th semesters 15%
		const sem8Percent = ((15/100)*cgpaSem8Marks)

		const cgpa = sem1Percent + sem2Percent + sem3Percent + sem4Percent + sem5Percent + sem6Percent + sem7Percent + sem8Percent;

		const result = document.getElementById('result');
		result.innerHTML = `&nbsp` +cgpa.toFixed(2);


	}

}


const selectCalc = document.getElementById('selcet-calc'); 

const restulText = document.getElementById('restulText');

selectCalc.addEventListener('change', function(){
	if(selectCalc.value == 'gpa'){
		restulText.innerText = 'GPA ';
		gpaForm.style.display = 'block';
		cgpaForm.style.display = 'none';


	} else if(selectCalc.value = 'cgpa'){
		restulText.innerText = 'CGPA ';
		gpaForm.style.display = 'none';
		cgpaForm.style.display = 'block';
		console.log('its cgpa')
	}
})

calculateButton.addEventListener('click', function(e){
	e.preventDefault();

	
	if( selectCalc.value == 'gpa' ){
		calculateGPA();	
	} else if(selectCalc.value == 'cgpa'){
		calculateCGPA();
		
	}

})

resetBtn.addEventListener('click', function(e){
	e.preventDefault();
	if( selectCalc.value == 'gpa' ){
		let gpaInputArr = [gpaSub1, gpaSub2, gpaSub3, gpaSub4, gpaSub5, gpaSub6]
		for(let i = 0; i < gpaInputArr.length; i++){
			gpaInputArr[i].value = '';
			gpaInputArr[i].style.borderColor = 'gray'
		}
		document.getElementById('result').innerText = "";
	} else if(selectCalc.value == 'cgpa'){
		let cgpaInputArr = [cgpaSem1, cgpaSem2, cgpaSem3, cgpaSem4, cgpaSem5, cgpaSem6, cgpaSem7, cgpaSem8]

		for(let i = 0; i < cgpaInputArr.length; i++){
			cgpaInputArr[i].value = '';
			cgpaInputArr[i].style.borderColor = 'gray'
		}
		document.getElementById('result').innerText = "";
		
	}


	

})