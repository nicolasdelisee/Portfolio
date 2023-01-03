import wcs from "../src/assets/pictures/wcs.png";
import iut from "../src/assets/pictures/iut.jpg"
// import olim from "../src/assets/pictures/olim.jpg"
// import voyage from "../src/assets/pictures/voyage.png"

const TimelineDates = [
    {
        id: 1,
        date: "Septembre 2022 - Février 2023",
        place: "Wild Code School, Bordeaux",
        title: "Développeur Web",
        description: "Après avoir passé une dizaine d'années dans le monde du Génie Civil, et plus particulièrement celui du dessin industriel, j'ai décidé de changer de voie et donc de me rapprocher d'un domaine qui me passionne depuis plus jeune, l'informatique. La formation intensive de 5 mois au sein de la Wild School est la porte d'entrée parfaite au métier de développeur web, et je recherche donc une enterprise qui pourrait m'accueillir pour un contrat de professionnalisation, pour une durée de 1 an (à partir de Mars 2023).",
        softwares: ["React", "HTML", "CSS", "JavaScript", "NodeJS"],
        url_image: wcs,
    },
    {
        id: 2,
        date: "Mars 2018 - Août 2022",
        place: "Engie Solutions, Bordeaux",
        title: "Dessinateur-projeteur",
        description: "Réalisation de commande d'accès et Fin de travaux (C3A, C3B, C6, C7, Relevé Appuis...) Réalisation d'études complètes en Transport et Distribution : utilisation de Géofibre, QGIS, IPON. Gestion de sous-traitant pour les études de zones PM/commandes d'accès",
        softwares: ["Géofibre", "QGIS", "IPON"],
        url_image: iut,
    },
    {
        id: 3,
        date: "Février 2012 - Septembre 2017",
        place: "Stantec, Montréal (Canada)",
        title: "Technicien Dessinateur",
        description: "Hydro Manitoba Participation à la conception et mise en plan de deux postes électriques : Mise en plan des dessins; S'assurer de la constance et du suivi des dessins d'après les normes du client. Responsable de l'organisation et de la coordination avec une équipe de 4 dessinateurs. Hydro-Québec Participation à la conception de projets de remplacement ou d'ajout de nouveaux équipements pour les postes Hertel, La Vérendrye et Chénier : Mise en plan des dessins 2D; Gestion des dessins via Logesdes; Mise en plan des dessins TQC et de mise en accord avec le chantier (également fait pour les postes Leclerc et Wyman); S'assurer de la constance et du suivi des dessins d'après les normes du client.Hydro-One Participation à la conception de projets de remplacement ou d'ajout de nouveaux équipements pour les postes Dymond, Muskoka, Norfold et Wabushchene : Élaboration des croquis d'avant-projet; Recherche des dessins utiles à la conception du projet (via Meridian); Mise en plan des dessins; S'assurer de la constance et du suivi des dessins d'après les normes du client. Groupe AXOR Participation à la conception et mise en plan du projet de construction du nouveau poste de 25 kV de la Rivière Sheldrake dans le nord du Québec.",
        softwares: ["AutoCad", "Logesdes", "Meridian"],
        url_image: iut,
    },
    {
        id: 4,
        date: "Juin 2011 - Octobre 2011",
        place: "SNCF, Bordeaux",
        title: "Technicien d'études Travaux Publics",
        description: "Réalisation d'un dossier, en phase APO, pour le projet « Mise au Gabarit de l'Autoroute Ferroviaire » (GAF), sur huit gares de la région ferroviaire Poitou-Charentes Aquitaine : Utilisation du logiciel Auto CAD : Récupérations de données Excel, à mettre en place sur les plans des gares Utilisation du logiciel interne Estimétier : Chiffrage complet du projet.Création d'une notice descriptive Marquage, chaînage, nivellement et détermination des flèches des voies, à Port Sainte–Marie (France) Mise à jour de plans de gare : Caudéran - Mérignac (France). Suppression de voies, modifications des quais, des limites d'emprises, insertion de poteaux hectométriques, kilométriques…Talence - Médoquine (France) : Scan de plan, utilisation de plans anciens, mise en place d'éléments (Passage Supérieur, Caténaires, poteaux hectométriques), suppression d'éléments (dépose de voie, de quai), mise à l'échelle de plan",
        softwares: ["AutoCad"],
        url_image: iut,
    },
    {
        id: 5,
        date: "Mars 2009 - Juin 2009",
        place: "EGEE Conseil, Bordeaux",
        title: "Dessinateur en mécanique du bâtiment",
        description: "Diagnostic thermique d'une maison individuelle avec le logiciel Perrenoud : entrée des caractéristiques du bâtiment (orientation, composition des parois, parois vitrées, planchers…), calcul des déperditions. Dimensionnement et réalisation de plans Auto CAD du plancher chauffant de l'habitat Diagnostic thermique d'un logement collectif avec le logiciel Perrenoud : entrée des caractéristiques du bâtiment, calcul des déperditions, mise en place de différentes solutions (modification de l'isolant, de la paroi vitrée…) selon la norme RT 2005 Modifications de plans Auto CAD sur un bâtiment existant (IUT Génie Civil de Bordeaux, France) : mise en place, sur les réseaux déjà existants, de panneaux solaires photovoltaïques, d'une pompe à chaleur géothermique (sol/eau), d'une chaudière à condensation, d'une CTA et d'une VMC simple flux, dans le cadre des Travaux Pratiques des étudiants en Génie Climatique",
        softwares: ["AutoCad", "Perrenoud"],
        url_image: iut,
    },
];

export default TimelineDates;