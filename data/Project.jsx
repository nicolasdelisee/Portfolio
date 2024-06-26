import circus from "../src/assets/pictures/circus.jpg"
import festival from "../src/assets/pictures/festival.jpg"
import olim from "../src/assets/pictures/olim.jpg"
import voyage from "../src/assets/pictures/voyage.png"
import ridenow from "../src/assets/pictures/ridenow.jpg"
import prepamonarchi from "../src/assets/pictures/monarchi.jpg"


const Project = [
    {
        id: 1,
        type: "Projet 1",
        name: "Wild Circus",
        has_website : true,
        link : "https://circus-wild.netlify.app/",
        duration: "2 semaines",
        description: "Lors de notre premier projet au sein de la Wild Code School, nous avons eu pour mission, avec mes 3 partenaires, de réaliser un site web pour une troupe de Cirque. Nous avons pour la première fois appris à travailler en groupe, avec l'utilisation de Git/GitHub, et nous avons pu faire nos armes sur les langages CSS, HTML et JavaScript, malgré le faible temps imparti (2 semaines). Nous avons aussi pu créer notre propre maquette à l'aide de Figma, afin de définir le design général de notre site web.",
        url_image: circus,
        classname_image: "tl-bg1",
    },
    {
        id: 2,
        type: "Projet 2",
        name: "Wild Festival",
        has_website : false,
        link : false,
        duration: "4 semaines",
        description: "Pour ce deuxième projet, nous avions pour objectif de créer un site web en s'aidant d'une base de données existante. Nous avions donc une API regroupant des artistes et des festivals, et notre but était de lister, puis de permettre à l'utilisateur de réserver un billet pour le festival choisi. Nous avons enfin pu mettre à profit nos connaissances sur React, et avons pu affiner nos compétences en CSS et HTML. Nous avons aussi mis en place la Méthode Agile SCRUM, afin de se mettre face à des conditions réelles que l'on pourrait rencontrer dans le monde professionnel.",
        url_image: festival,
        classname_image: "tl-bg2",
    },
    {
        id: 3,
        type: "Hackhaton 1",
        name: "Voyage sans retour",
        has_website : false,
        link : false,
        duration: "30 heures",
        description: "Ce premier Hackhahton, qui s'est déroulé sur une période de 30h, avait pour thème les Voyages. Nous avons décidé de réaliser un site web sur un ton humoristique et absurde, et finalement notre choix s'est porté vers un site représentant une agence de voyage, qui propose des activités dangereuses et/ou loufoques, à travers le Monde. Nous avons utilisé pour cela CSS, HTML, ainsi que React.",
        url_image: voyage,
        classname_image: "tl-bg3",
    },
    {
        id: 4,
        type: "Projet 3",
        name: "Olim",
        has_website : false,
        link : false,
        duration: "8 semaines",
        description: "Ce projet final au sein de la Wild Code School, nous a permi de mettre en application tout ce que nous avons pu apprendre lors de nos 5 mois de formation. Ainsi, nous avons créé, avec mes 4 `collègues`, une application rappelant `leboncoin`, mais avec un design récent. Nous avons donc dû créer notre propre base de données, imaginer le design général du site, et créer une authentification pour les utilisateurs. Pour cela, nous avons à nouveau utilisé React, mais aussi du côté du back-end, Express et Node.js.",
        url_image: olim,
        classname_image: "tl-bg4",
    },
        {
        id: 5,
        type: "Hackhaton 2",
        name: "Ride Now",
        has_website : false,
        link : false,
        duration: "48 heures",
        description: "Ce second Hackhaton avait pour sujet la location de véhicule, et nous avions un temps imparti de 48h au total. Nous avions pour objectif de créer nous-même notre base de données, que nous avons créée manuellement, en ajoutant différents types de véhicules. Nous pouvions de plus créer un compte utilisateur, afin de louer les différents véhicules présents sur la plateforme.",
        url_image: ridenow,
        classname_image: "tl-bg4",
    },
    {
        id: 6,
        type: "Site web professionnel",
        name: "Prépa MonArchi",
        has_website : true,
        link : "https://www.prepa-monarchi.fr/",
        duration: "1 mois",
        description: "Site web réalisé entièrement pour un client, grâce à WordPress. Je me suis occupé du design, jusqu'au déploiement de celui-ci, avec la mise en place de différentes pages, et différents formulaires.",
        url_image: prepamonarchi,
        classname_image: "tl-bg4",
    }
];

export default Project;