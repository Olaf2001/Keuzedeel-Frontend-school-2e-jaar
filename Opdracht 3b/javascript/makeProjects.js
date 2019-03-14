function makeProjects(projectName, linkToProjects, description) {
    this.projectName = projectName;
    this.linkToProjects = linkToProjects;
    this.description = description;

    this.getProject = function() {
       document.getElementById('project').innerHTML  = this.projectName + this.linkToProjects + this.description;
    }
}

window.addEventListener("load", function makeevents() { 
    var project1 = new makeProjects('Appelflap','perzik','mooie beschrijving');
    var project2 = new makeProjects('baard','jas','in je tas');

    project1.getProject();
    project2.getProject();
})