// insere a página Contact.html no main na Index
$(document).ready(
    function changeForContact() {
        $("#contactPage").click(function() {
            $("#main").load("pages/contact.html");
        });
    },
);

// insere a página projects.html no main na Index
$(document).ready(
    function changeForProjects() {
        $("#projectsPage").click(function() {
            $("#main").load("pages/projects.html");
        });
    }    
);

// insere a página about.html no main na Index
$(document).ready(
    function changeForAbout() {
        $("#aboutPage").click(function() {
            $("#main").load("pages/about.html");
        });
    }
);