const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];



//1. PRINT

const print = function () {
  $('#content').empty();
  $('#returns').empty();
  $('#content').html('<p class="directory">The Minimalists Directory.</p>');
  employeeList.forEach(e => render("Name: " + e.name, "Office Number: " + e.officeNum, "Phone Number: " + e.phoneNum));
}



//2. VERIFY

const verify = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p> <input class="verify-input" placeholder="Employee Name"></input> <button id="verify-button"><i class="far fa-search"></i></button>');
  $('#verify-button').on('click', verifyFunction);
  $('#returns').empty();
}
const verifyFunction = function () {
  $('#returns').empty();
  let verifyEmployee = $('.verify-input').val().toLowerCase().trim();
  const verifyArray = employeeList.filter(e => e.name.toLowerCase() === verifyEmployee);
  switch (verifyArray.length) {
    case 0:
      render('Employee Not Found');
      break;
    default:
      render('Employee Found')
      break;
  }
}



//3. LOOKUP

const lookup = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p> <input class="lookup-input" placeholder="Employee Name"></input> <button id="lookup-button"><i class="far fa-search"></i></button>');
  $('#lookup-button').on('click', lookupFunction);
  $('#returns').empty();
}
function lookupFunction() {
  $('#returns').empty();
  const lookupEmployee = $('.lookup-input').val().toLowerCase().trim();
  const lookupArray = employeeList.filter(employee => employee.name.toLowerCase() === lookupEmployee);
  switch (lookupArray.length) {
    default:
      lookupArray.forEach(e => render("Name: " + e.name, "Office Number: " + e.officeNum, "Phone Number: " + e.phoneNum));
      break;
    case 0:
      render('Employee Not Found');
      break;
  }
}



//4. CONTAINS

const contains = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p> <input class="contains-input" placeholder="Enter part of an Employee Name"></input> <button id="contains-button"><i class="far fa-search"></i></button>');
  $('#contains-button').on('click', containsFunction);
  $('#returns').empty();
}
function containsFunction() {
  $('#returns').empty();
  const containsEmployeeName = $('.contains-input').val().toLowerCase().trim();
  const containsArray = employeeList.filter(e => e.name.toLowerCase().includes(containsEmployeeName));
  switch (containsEmployeeName !== '' && containsArray.length) {
    default:
      containsArray.forEach(e => render("Name: " + e.name, "Office Number: " + e.officeNum, "Phone Number: " + e.phoneNum));
      break;
    case 0:
      render('Employee Not Found');
      break;
  }
}



//5. UPDATE

const update = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p> <input class="empInput" placeholder="Enter an existing employee name"></input>  <select class="fieldInput" name="Update Field"><option value="name">Name</option><option value="phoneNum">Phone Number</option><option value="officeNum">Office Number</option></select> <input class="valueInput" placeholder="Enter the updated information"></input>  <button id="update-button"><i class="far fa-search"></i></button>');
  $('#update-button').on('click', updateFunction);
  $('#returns').empty();
}
function updateFunction() {
  $('#returns').empty();
  const updateEmployee = $('.empInput').val().toLowerCase().trim();
  const updateField = $('.fieldInput').val().trim();
  const updateValue = $('.valueInput').val().trim();
  const updateArray = employeeList.filter(e => e.name.toLowerCase() === updateEmployee);
  switch (updateArray.length) {
    default:
      switch (updateArray[0].hasOwnProperty(updateField)) {
        default: updateArray[0][updateField] = updateValue;
          updateArray.forEach(e => render("Name: " + e.name, "Office Number: " + e.officeNum, "Phone Number: " + e.phoneNum));
          break;
        case 0:
          render('Invalid Field');
          break;
      }
      break;
    case 0: render('Employee Not Found');
      break;
  }
}



//6. ADD

const add = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p>  <input class="add-name-input" placeholder="Enter a new employee name"></input> <input class="addnum-input" placeholder="Enter an office number"></input>  <input class="phone-input" placeholder="Enter a phone number"></input> <button class="add-button"><i class="far fa-search"></i></button>');
  $('.add-button').on('click', addFunction);
  $('#returns').empty();
}
const addFunction = function () {
  $('#returns').empty();
  const addEmployee = $('.add-name-input').val();
  const officeNumber = $('.addnum-input').val();
  const teleNumber = $('.phone-input').val();
  employeeList.push({
    name: addEmployee,
    officeNum: officeNumber,
    phoneNum: teleNumber
  });
  render("Name: " + employeeList[employeeList.length - 1].name);
  render("Office Number: " + employeeList[employeeList.length - 1].officeNum);
  render("Phone Number: " + employeeList[employeeList.length - 1].phoneNum);
}



//7. DELETE

const deleteEmployee = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p> <input class="delete-input" placeholder="Employee Name"></input> <button class="delete-button"><i class="far fa-search"></i></button>')
  $('.delete-button').on('click', deleteFunction);
  $('#returns').empty();
}
const deleteFunction = function () {
  $('#returns').empty();
  const deleteEmployee = $('.delete-input').val().toLowerCase().trim();
  const index = employeeList.findIndex(e => e.name.toLowerCase() === deleteEmployee);
  switch (index < 0) {
    case (true):
      render('Employee Not Found')
      break;
    case (false):
      employeeList.splice(index, 1);
      render('Employee Deleted');
      break;
  }
}



$(".printlist").on('click', print);
$(".verifylist").on('click', verify);
$(".lookuplist").on('click', lookup);
$(".containslist").on('click', contains);
$(".updatelist").on('click', update);
$(".addlist").on('click', add);
$(".deletelist").on('click', deleteEmployee);