function makeProjects(projectName, linkToProjects, description) {
    this.projectName = projectName;
    this.linkToProjects = linkToProjects;
    this.description = description;
    
    this.getProject = function() {
        var project =   "<div id='"+this.projectName+"' class='projectBlock'> \
                           <h3 class='smallTitle'>" + this.projectName + "</h3> \
                        </div>";
                        // <div id='modal"+this.projectName+"' class='modal'> \
                        //     <p>"+ this.description+"</p> \
                        // </div>;

        return project;
    }
}

var project1 = new makeProjects('Project1','een link van project 1','beschrijving project1');
var project2 = new makeProjects('Project2','een link van project 1','beschrijving project2');
var project3 = new makeProjects('Project3','een link van project 1','beschrijving project3');
var project4 = new makeProjects('Project4','een link van project 1','beschrijving project4');
var project5 = new makeProjects('Project5','een link van project 1','beschrijving project3');
var project6 = new makeProjects('Project6','een link van project 1','beschrijving project4');
var projectList = '';
var projectArray = [project1.getProject(), project2.getProject(), project3.getProject(), project4.getProject(), project5.getProject(), project6.getProject()];

projectArray.forEach(printProjects);

function printProjects(value) {
    projectList = projectList + value;
}

window.addEventListener("load", function makeevents() { 
    document.getElementById('project').innerHTML = projectList;
})