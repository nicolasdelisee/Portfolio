import circus from "../src/assets/pictures/circus.jpg"
import festival from "../src/assets/pictures/festival.jpg"
import olim from "../src/assets/pictures/olim.jpg"
import voyage from "../src/assets/pictures/voyage.png"

const Project = [
    {
        id: 1,
        project_type: "Projet 1",
        project_name: "Wild Circus",
        project_duration: "2 semaines",
        project_description: "Lors de notre premier projet au sein de la Wild Code School, nous avons eu pour mission, avec mes 3 partenaires, de réaliser un site web pour une troupe de Cirque. Nous avons pour la première fois appris à travailler en groupe, avec l'utilisation de Git/GitHub, et nous avons pu faire nos armes sur les les langages CSS, HTML et JavaScript, malgré le faible temps imparti (2 semaines). Nous avons aussi pu créer notre propre maquette à l'aide de Figma, afin de définir le design général de notre site web.",
        url_image: circus,
        classname_image: "tl-bg1",
    },
    {
        id: 2,
        project_type: "Projet 2",
        project_name: "Wild Festival",
        project_duration: "4 semaines",
        project_description: "Pour ce deuxième projet, d'une durée d'1 mois, nous avions pour objectif de créer un site web en s'aidant d'une base de données existante. Nous avions donc une API regroupant des artistes et des festivals, et notre but était de lister, puis de permettre à l'utilisateur de réserver un billet pour le festival choisi. Nous avons enfin pu mettre à profit nos connaissances sur React, et avons pu affiner nos compétences en CSS et HTML. Nous avons aussi mis en place la Méthode Agile SCRUM, afin de se mettre face à des conditions réelles que l'on pourrait rencontrer dans le monde professionnel.",
        url_image: festival,
        classname_image: "tl-bg2",
    },
    {
        id: 3,
        project_type: "Hackhaton",
        project_name: "Voyage sans retour",
        project_duration: "30 heures",
        project_description: "Ce premier Hackhahton, qui s'est déroulé sur une période de 30h, avait pour thème les Voyages. Nous avons décidé de réaliser un site web sur un ton humoristique et absurde, et finalement notre choix s'est porté vers un site représentant une agence de voyage, qui propose des activités dangereuses et/ou loufoques, à travers le Monde. Nous avons utilisé pour cela CSS, HTML, ainsi que React.",
        url_image: voyage,
        classname_image: "tl-bg3",
    },
    {
        id: 4,
        project_type: "Projet 3",
        project_name: "Olim",
        project_duration: "8 semaines",
        project_description: "Lors de notre premier projet au sein de la Wild Code School, nous avons eu pour mission, avec mes 3 partenaires, de réaliser un site web pour une troupe de Cirque. Nous avons pour la première fois appris à travailler en groupe, avec l'utilisation de Git/GitHub, et nous avons pu faire nos armes sur les les langages CSS, HTML et JavaScript, malgré le faible temps imparti (2 semaines). Nous avons aussi pu créer notre propre maquette à l'aide de Figma, afin de définir le design général de notre site web.",
        url_image: olim,
        classname_image: "tl-bg4",
    }
];

export default Project;