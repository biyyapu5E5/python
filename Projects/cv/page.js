function displayUserData() {
    var storedData = JSON.parse(localStorage.getItem('storedData')) || [];
    console.log(storedData);
    console.log(storedDataProject);
    console.log(storedDataSocial);
    var skillList = document.getElementById('skillList');
    var skillListRate = document.getElementById('skillListRate');

    skillList.innerHTML = ''; // Clear any existing list items
    skillListRate.innerHTML = ''; // Clear any existing list items

    storedData.forEach(function (data, index) {
        var listItem = createSkillListItem(data.skill, index);
        skillList.appendChild(listItem);

        var listItemRate = createSkillListItemRate(data.skill, data.rate, index);
        skillListRate.appendChild(listItemRate);
    });
}

function createSkillListItem(skillName, index) {
    var listItem = document.createElement('li');
    listItem.style.paddingBottom = '10px';
    var skillText = document.createElement('span');
    skillText.style.fontSize = '20px';
    skillText.style.fontWeight = 'bold';
    skillText.textContent = skillName;

    var editBtn = document.createElement('span');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit';
    editBtn.style.color = 'blue';
    editBtn.style.marginRight = '10px';
    editBtn.onclick = function () {
        startEditingSkill(index, skillText);
    };

    var deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.style.color = 'red';
    deleteBtn.onclick = function () {
        deleteRow(index);
    };
    skillText.style.marginRight = '30px';
    listItem.appendChild(skillText);
    listItem.appendChild(editBtn);
    listItem.appendChild(document.createTextNode(' '));
    listItem.appendChild(deleteBtn);

    return listItem;
}

function createSkillListItemRate(skillName, rating, index) {
    var listItemRate = document.createElement('li');
    listItemRate.style.paddingBottom = '10px';
    var skillTextRate = document.createElement('span');
    skillTextRate.style.fontSize = '20px';
    skillTextRate.style.fontWeight = 'bold';
    skillTextRate.textContent = skillName;
    var rateText = document.createElement('span');
    rateText.innerHTML = `<input type="range" value = ${rating} min = '1' max = '5'> Rating: ${rating}`;
    rateText.style.paddingRight = '20px';
    var editBtnRate = document.createElement('span');
    editBtnRate.textContent = 'Edit';
    editBtnRate.className = 'edit';
    editBtnRate.style.color = 'blue';
    editBtnRate.style.marginRight = '10px';
    editBtnRate.onclick = function () {
        startEditingRating(index, rateText);
    };

    var deleteBtnRate = document.createElement('span');
    deleteBtnRate.textContent = 'Delete';
    deleteBtnRate.className = 'delete';
    deleteBtnRate.style.color = 'red';
    deleteBtnRate.onclick = function () {
        deleteRow(index);
    };
    skillTextRate.style.marginRight = '30px';
    listItemRate.appendChild(skillTextRate);
    listItemRate.appendChild(rateText);
    listItemRate.appendChild(editBtnRate);
    listItemRate.appendChild(document.createTextNode(' '));
    listItemRate.appendChild(deleteBtnRate);

    return listItemRate;
}


function startEditingSkill(index, skillText) {
    var storedData = JSON.parse(localStorage.getItem('storedData')) || [];
    var editedSkill = prompt('Edit Skill:', storedData[index].skill);
    
    if (editedSkill != '') {
        var skillItem = storedData[index];
        skillItem.skill = editedSkill;
        localStorage.setItem('storedData', JSON.stringify(storedData));
        skillText.textContent = editedSkill; // Update the displayed skill
        syncSkillListRate(); // Update skillListRate
    }
    else{
        editedSkill = prompt('Edit Skill:', storedData[index].skill);
    }
}

function startEditingRating(index, rateText) {
    var storedData = JSON.parse(localStorage.getItem('storedData')) || [];
    var editedRating = prompt('Edit RateSkill (Outof 1 to 5):', storedData[index].rate);
    
    if (editedRating != '' && (editedRating>0 && editedRating<=5)) {
        var skillItem = storedData[index];
        skillItem.rate = editedRating;
        localStorage.setItem('storedData', JSON.stringify(storedData));
        rateText.innerHTML = `<input type="range" value="${editedRating}" min="1" max="5"> Rating: ${editedRating}`;
        rateText.style.paddingRight = '20px';
        syncSkillListRate(); // Update skillListRate
    }
    else{
        editedRating = prompt('Edit RateSkill (Outof 1 to 5):', storedData[index].rate);
    }
}

function deleteRow(index) {
    var storedData = JSON.parse(localStorage.getItem('storedData')) || [];
    var confirmDelete = confirm('Are you sure you want to delete this skill?');

    if (confirmDelete) {
        storedData.splice(index, 1);
        localStorage.setItem('storedData', JSON.stringify(storedData));
        displayUserData(); // Refresh the list
    }
}

function syncSkillList() {
    var storedData = JSON.parse(localStorage.getItem('storedData')) || [];
    var skillList = document.getElementById('skillList');

    skillList.innerHTML = ''; // Clear any existing list items

    storedData.forEach(function (data, index) {
        var listItem = createSkillListItem(data.skill, index);
        skillList.appendChild(listItem);
    });
}

function syncSkillListRate() {
    var storedData = JSON.parse(localStorage.getItem('storedData')) || [];
    var skillListRate = document.getElementById('skillListRate');

    skillListRate.innerHTML = ''; // Clear any existing list items

    storedData.forEach(function (data, index) {
        var listItemRate = createSkillListItemRate(data.skill, data.rate, index);
        skillListRate.appendChild(listItemRate);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    displayUserData();
    document.getElementById('showForm').addEventListener('click', function () {
        window.location.href = 'add.html';
    });
});
var storedDataProject = JSON.parse(localStorage.getItem('storedDataProject')) || [];
function loadProjects() {
    var projectList = document.getElementById('projectList');
    projectList.innerHTML = ''; // Clear any existing list items

    storedDataProject.forEach(function (data, index) {
        var listItem = document.createElement('li');
        var Text = document.createElement('span');
        Text.textContent = data.project;
        Text.style.fontSize = '20px';
        Text.style.fontWeight = 'bold';
        Text.style.paddingRight = '30px';
        var editBtn = document.createElement('span');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit';
        editBtn.style.color = 'blue';
        editBtn.style.paddingRight = '10px';
        editBtn.onclick = function () {
            startEditingProject(index);
        };

        var deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete';
        deleteBtn.style.color = 'red';
        deleteBtn.onclick = function () {
            delete_Row(index);
        };
        listItem.style.paddingBottom = '10px';
        listItem.appendChild(Text);
        listItem.appendChild(editBtn);
        listItem.appendChild(document.createTextNode(' '));
        listItem.appendChild(deleteBtn);
        projectList.appendChild(listItem);
    });
}

// Save the projects data to localStorage
function saveProjects() {
    localStorage.setItem('storedDataProject', JSON.stringify(storedDataProject));
}

function op_project() {
    var project = prompt("Add Project: ");
    if (project != '') {
        storedDataProject.push({ project: project });
        saveProjects(); // Save the updated projects data
        loadProjects(); // Load and display projects
    }
    else{
        project = prompt("Add Project: ");
    }
}

function startEditingProject(index) {
    var editedProject = prompt('Edit Project:', storedDataProject[index].project);
    
    if (editedProject != '') {
        storedDataProject[index].project = editedProject;
        saveProjects(); // Save the updated projects data
        loadProjects(); // Reload and display projects
    }
    else
        editedProject = prompt('Edit Project:', storedDataProject[index].project);
}
function delete_Row(index) {
    var confirmDelete = confirm('Are you sure you want to delete this project?');

    if (confirmDelete) {
        storedDataProject.splice(index, 1);
        localStorage.setItem('storedDataProject', JSON.stringify(storedDataProject));
        loadProjects(); // Refresh the project list
    }
}
var storedDataSocial = JSON.parse(localStorage.getItem('storedDataSocial')) || [];
function loadsocialLinks() {
    var socialList = document.getElementById('socialList');
    socialList.innerHTML = ''; // Clear any existing list items

    storedDataSocial.forEach(function (data, index) {
        var listItem = document.createElement('li');
        var Text = document.createElement('span');
        Text.textContent = data.social;
        Text.style.fontSize = '20px';
        Text.style.fontWeight = 'bold';
        Text.style.paddingRight = '30px';
        var editBtn = document.createElement('span');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit';
        editBtn.style.color = 'blue';
        editBtn.style.marginRight = '10px';
        editBtn.onclick = function () {
            startEditingSocial(index);
        };

        var deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete';
        deleteBtn.style.color = 'red';
        deleteBtn.onclick = function () {
            delete_row(index);
        };
        listItem.style.paddingBottom = '10px';
        listItem.appendChild(Text);
        listItem.appendChild(editBtn);
        listItem.appendChild(document.createTextNode(' '));
        listItem.appendChild(deleteBtn);
        socialList.appendChild(listItem);
    });
}

// Save the projects data to localStorage
function saveSocial() {
    localStorage.setItem('storedDataSocial', JSON.stringify(storedDataSocial));
}

function slinks() {
    var social = prompt("Add Social Link: ");
    if (social !='') {
        storedDataSocial.push({ social:social });
        saveSocial(); // Save the updated projects data
        loadsocialLinks(); // Reload and display projects
    }
    else 
        social = prompt("Add Social Link: ");

}

function startEditingSocial(index) {
    var editedSocial = prompt('Edit Social:', storedDataSocial[index].social);
    
    if (editedSocial != '') {
        storedDataSocial[index].social = editedSocial;
        saveSocial(); // Save the updated projects data
        loadsocialLinks(); // Reload and display projects
    }
    else
        editedSocial = prompt('Edit Social:', storedDataSocial[index].social);
}
function delete_row(index) {
    var confirmDelete = confirm('Are you sure you want to delete this project?');

    if (confirmDelete) {
        storedDataSocial.splice(index, 1);
        localStorage.setItem('storedDataSocial', JSON.stringify(storedDataSocial));
        loadsocialLinks(); // Refresh the project list
    }
}
document.addEventListener('DOMContentLoaded', function () {
    displayUserData();
    loadProjects();
    loadsocialLinks();
});
