/* Chaque objet represente une seulequestion avec comme propriete 
la question, les reponses possibles et la bonne reponse. QuizData est un
tableau d'objet  */
const questions = [
    {
        question: "Qu'est-ce qu'un algorithme ?",
        choices: ["Un type de logiciel", "Une instruction donnée à un programme", "Une séquence d'instructions pour résoudre un problème", "Un type de matériel informatique"],
        correctAnswer: "Une séquence d'instructions pour résoudre un problème"
    },
    {
        question: "Qu'est-ce que la complexité temporelle en algorithmique ?",
        choices: ["Le temps nécessaire pour écrire un algorithme", "Le temps d'exécution d'un algorithme en fonction de la taille de l'entrée", "La durée d'une boucle dans un programme", "Le nombre d'opérations effectuées par un processeur"],
        correctAnswer: "Le temps d'exécution d'un algorithme en fonction de la taille de l'entrée"
    },
    {
        question: "Lequel de ces langages est principalement utilisé pour les applications mobiles Android ?",
        choices: ["Swift", "Ruby", "Java", "PHP"],
        correctAnswer: "Java"
    },
    {
        question: "Quel est le rôle d'un compilateur dans un langage de programmation compilé ?",
        choices: ["Convertir le code source en code machine exécutable", "Exécuter directement le code ligne par ligne", "Transformer le code en bytecode intermédiaire", "Optimiser le code pendant l'exécution"],
        correctAnswer: "Convertir le code source en code machine exécutable"
    },
    {
        question: "Qui est considéré comme le premier programmeur de l'histoire ?",
        choices: ["Alan Turing", "Ada Lovelace", "Charles Babbage", "John von Neumann"],
        correctAnswer: "Ada Lovelace"
    },
    {
        question: "Quel fut le premier ordinateur électronique programmable?",
        choices: ["UNIVAC I", "Colossus", "ENIAC", "Z3"],
        correctAnswer: "ENIAC"
    },
    {
        question: "En quelle année le premier site web a-t-il été mis en ligne ?",
        choices: ["1989", "1991", "1995", "1997"],
        correctAnswer: "1991"
    },
    {
        question: "Qui a fondé Microsoft en 1975 avec Paul Allen ?",
        choices: ["Steve Jobs", "Bill Gates", "Tim Berners-Lee", "Mark Zuckerberg"],
        correctAnswer: "Bill Gates"
    },
    {
        question: "Quelle pionnière de l'informatique est connue pour avoir développé le premier compilateur pour un langage de programmation ?",
        choices: ["Margaret Hamilton", "Joan Clarke", "Grace Hopper", "Frances Allen"],
        correctAnswer: "Grace Hopper"
    },
    {
        question: "Quel est le rôle principal du framework front-end Bootstrap ?",
        choices: ["Gérer les bases de données", "Faciliter la création d'interfaces utilisateur réactives avec des composants pré-construits", "Optimiser le code JavaScript", "Fournir un support pour les animations CSS"],
        correctAnswer: "Faciliter la création d'interfaces utilisateur réactives avec des composants pré-construits"
    },
    {
        question: "Quelle commande Git est utilisée pour voir l’historique des commits d’une branche ?",
        choices: ["git log", "git history", "git status", "git show"],
        correctAnswer: "git log"
    },
    {
        question: "Quel fichier est utilisé pour stocker les configurations spécifiques au dépôt Git, comme les informations sur le dépôt distant ?",
        choices: [".gitconfig", "config.json", "gitsettings.xml", "config.yml"],
        correctAnswer: ".gitconfig"
    },
    {
        question: "Quel est l'objectif des 'cookies' dans le navigateur web ?",
        choices: ["Optimiser les performances du serveur", "Conserver des informations sur l'utilisateur, comme les préférences ou les sessions de connexion", "Améliorer la qualité des images sur les sites web", "Gérer les autorisations de sécurité pour les applications web"],
        correctAnswer: "Conserver des informations sur l'utilisateur, comme les préférences ou les sessions de connexion"
    },
    {
        question: "Quel projet de réseau, financé par le ministère de la Défense des États-Unis, a précédé l'Internet ?",
        choices: ["ARPANET", "BITNET", "Usenet", "NPL Network"],
        correctAnswer: "ARPANET"
    },
    {
        question: "Quel est le rôle principal d'un cache dans les systèmes informatiques ?",
        choices: ["Augmenter la capacité de stockage des disques durs", "Accélérer l'accès aux données en stockant les informations les plus fréquemment utilisées", "Gérer les connexions réseau entre les serveurs", "Créer des sauvegardes automatiques des fichiers"],
        correctAnswer: "Accélérer l'accès aux données en stockant les informations les plus fréquemment utilisées"
    }
];

let currentQuestionIndex = 0;
let userResponses = [];

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next-question');

// Fonction pour afficher la question et les choix
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    choicesElement.innerHTML = ''; // Vider les choix précédents

    currentQuestion.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => handleChoiceSelection(choice));
        li.appendChild(button);
        choicesElement.appendChild(li);
    });
}

// Fonction qui gère la sélection de l'utilisateur
function handleChoiceSelection(choice) {
    userResponses[currentQuestionIndex] = choice;
    nextButton.disabled = false; // Activer le bouton suivant
}

// Fonction pour aller à la question suivante
function goToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        nextButton.disabled = true; // Désactiver jusqu'à la prochaine sélection
    } else {
        // Afficher les résultats
        showResults();
    }
}

// Afficher les résultats
function showResults() {
    questionElement.textContent = "Quiz terminé ! Voici vos réponses :";
    choicesElement.innerHTML = '';

    questions.forEach((question, index) => {
        const li = document.createElement('li');
        li.textContent = `${question.question} - Votre réponse : ${userResponses[index]}`;
        choicesElement.appendChild(li);
    });

    nextButton.style.display = 'none'; // Cacher le bouton suivant
}

// Ajouter l'écouteur d'événements pour le bouton "Suivant"
nextButton.addEventListener('click', goToNextQuestion);

// Afficher la première question
displayQuestion();
