function MakeProjects(projectName, linkToProjects, description) {
    this.projectName = projectName;
    this.linkToProject = linkToProjects;
    this.description = description;

    this.project = "<div id='" + this.projectName + "' class='projectBlock'> \
                      <h3 class='smallTitle'>" + this.projectName + "</h3> \
                    </div> \
                   <div id='modal" + this.projectName + "' class='modal'>\
                        <div class='modalContent'>\
                            <div class='smallTitle'>" + this.projectName + "</div> \
                            <p class='modalDescription'>" + this.description + "</p> \
                            <div class='modalBottom'> \
                                <button id='modalButton"+ this.projectName +"' class='button'>Sluit Pop-up</button> \
                                <a target='_blank' class='link' href='" + this.linkToProject + "'> \
                                    Ga naar Github om het project te bekijken \
                                </a>\
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

var project1_description = 'In dit project was het de bedoeling om OOP te leren en dat hebben we \
    met simpele opdrachtjes gedaan';
var project2_description = 'In dit project gingen we meer leren over Frontend development. Het \
    begon met kleine opdrachtjes en dat werd uiteindelijk een portfoliowebsite maken waar steeds \
    meer opdrachtjes bij kwamen';
var project3_description = 'In dit project moesten we in groepjes van 3 met Laravel een website \
    gaan maken. Wij hebben als een gropeje besloten om een fictief pretpark te maken genaamd \
    HappyLand';

var project1 = new MakeProjects('OOP basis','https://github.com/Olaf2001/Oop-school-2e-jaar', project1_description);
var project2 = new MakeProjects('Keuzedeel Frontend','https://github.com/Olaf2001/Keuzedeel-Frontend-school-2e-jaar', project2_description);
var project3 = new MakeProjects('MVC project','https://github.com/Olaf2001/MVC-project-school-2e-jaar', project3_description);

var projectList = new ProjectList();

projectList.addProject(project1);
projectList.addProject(project2);
projectList.addProject(project3);

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
        var modalButton = document.getElementById('modalButton'+this.id);

        modalButton.onclick = function() {
            modal.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target === modal)
            {
                modal.style.display = "none";
            }
        };
    }
}
