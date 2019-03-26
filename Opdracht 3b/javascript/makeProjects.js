function MakeProjects(projectName, linkToProjects, description) {
    this.projectName = projectName;
    this.linkToProject = linkToProjects;
    this.description = description;

    this.project = "<div id='" + this.projectName + "' class='projectBlock'> \
                      <h3 class='smallTitle'>" + this.projectName + "</h3> \
                    </div> \
                   <div id='modal" + this.projectName + "' class='modal'>\
                        <div class='modalContent'>\
                            <h3 class='smallTitle'>" + this.projectName + "</h3> \
                            <p>" + this.description + "</p> \
                            <div class='modalBottom'> \
                                <a href='" + this.linkToProject + "'> \
                                    Ga naar Github om het project te bekijken \
                                </a> \
                            </div> \
                        </div> \
                    </div>";

    this.projectModal = 'modal'+this.projectName;

    this.getProjects = function() {
      return this.project
    };

    this.getProjectName = function() {
        return this.projectName;
    };

    this.getProjectModalName = function() {
        return this.projectModal;
    };
}

function ProjectList() {
    this.projectArray = [];

    this.addProject = function (project) {
        this.projectArray.push(project);
    };

    this.getProject = function() {
        return this.projectArray;
    };
}

var project1 = new MakeProjects('Project1','www.google.nl','beschrijving project1');
var project2 = new MakeProjects('Project2','een link van project 1','beschrijving project2');
var project3 = new MakeProjects('Project3','een link van project 1','beschrijving project3');
var project4 = new MakeProjects('Project4','een link van project 1','beschrijving project4');
var project5 = new MakeProjects('Project5','een link van project 1','beschrijving project3');
var project6 = new MakeProjects('Project6','een link van project 1','beschrijving project6');

var projectList = new ProjectList();

projectList.addProject(project1);
projectList.addProject(project2);
projectList.addProject(project3);
projectList.addProject(project4);
projectList.addProject(project5);
projectList.addProject(project6);

var projectBlock = '';
var projectNames = [];
var projectModalNames = [];
projectList.getProject().forEach(printProjectBlocks);

function printProjectBlocks(value) {
    projectBlock = projectBlock + value.getProjects();
    projectNames.push(value.getProjectName());
    projectModalNames.push(value.getProjectModalName());

    document.getElementById('project').innerHTML = projectBlock;
}

projectModalNames.forEach(modalNotBeShown);

function modalNotBeShown(value) {
    document.getElementById(value).style.display = 'none';
}

projectNames.forEach(OpenModal);

function OpenModal(value) {
    document.getElementById(value).onclick = seeModal;

    function seeModal() {
        document.getElementById('modal'+this.id).style.display = 'block';

        var modal = document.getElementById('modal'+this.id);

        window.onclick = function(event) {
            if (event.target === modal)
            {
                modal.style.display = "none";
            }
        };
    }
}
