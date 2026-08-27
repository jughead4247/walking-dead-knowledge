const homeInfo = document.getElementById("home-info");

const questions = [

    {
        question: "What was the first episode of The Walking Dead called?",
        answers: [
            ["Days Gone Bye", 2],
            ["Days Gone By", 0],
            ["The First Day", 0],
            ["Welcome to Atlanta", 0]
        ]
    },

    {
        question: "What does Glenn call Rick over the radio during their first contact?",
        answers: [
            ["Dummy", 0],
            ["Stupid", 0],
            ["Dumbass", 2],
            ["Idiot", 0]
        ]
    },

    {
        question: "Which of these terms was NOT used for the walking dead in the show?",
        answers: [
            ["Walkers", 0],
            ["Biters", 0],
            ["Geeks", 0],
            ["Zombies", 2]
        ]
    },

    {
        question: "What is the name of Negan's famous baseball bat?",
        answers: [
            ["Judith", 0],
            ["Lucille", 2],
            ["Clementine", 0],
            ["Annie", 0]
        ]
    },

    {
        question: "What was the name of the community led by Ezekiel?",
        answers: [
            ["The Commonwealth", 0],
            ["Oceanside", 0],
            ["The Kingdom", 2],
            ["The Sanctuary", 0]
        ]
    },

    {
        question: "What was the name of Morgan Jones's son?",
        answers: [
            ["Daniel Jones", 0],
            ["David Jones", 0],
            ["Darren Jones", 0],
            ["Duane Jones", 2]
        ]
    },

    {
        question: "Who was the leader of the Scavengers, the group that lived in the junkyard?",
        answers: [
            ["Brion", 0],
            ["Jadis", 2],
            ["Winslow", 0],
            ["Tamiel", 0]
        ]
    },

    {
        question: "Which animal was Ezekiel's beloved pet in The Walking Dead?",
        answers: [
            ["Dog", 0],
            ["Leopard", 0],
            ["Tiger", 2],
            ["Lion", 0]
        ]
    },

    {
        question: "What was the name of Andrea's sister?",
        answers: [
            ["Amy", 2],
            ["Beth", 0],
            ["Lori", 0],
            ["Maggie", 0]
        ]
    },

    {
        question: "What was the name of the prison where Rick's group lived for a period of time?",
        answers: [
            ["Atlanta Correctional Center", 0],
            ["Georgia State Prison", 2],
            ["West Georgia Correctional Facility", 0],
            ["Woodbury State Prison", 0]
        ]
    },

    {
        question: "What was the name of the man who taught Morgan the philosophy of 'All Life Is Precious'?",
        answers: [
            ["Carter", 0],
            ["Eastman", 2],
            ["Benjamin", 0],
            ["Harlan", 0]
        ]
    },

    {
        question: "Who was Judith Grimes named after?",
        answers: [
            ["Lori's mother", 0],
            ["Carl's teacher", 2],
            ["Rick's mother", 0],
            ["Carl's grandmother", 0]
        ]
    },

    {
        question: "What was Eugene Porter's claimed occupation when he first met Abraham?",
        answers: [
            ["Geneticist", 0],
            ["Epidemiologist", 0],
            ["Scientist", 0],
            ["Virologist", 2]
        ]
    },

    {
        question: "What is the name of Daryl Dixon's dog?",
        answers: [
            ["Bear", 0],
            ["Jack", 0],
            ["Scout", 0],
            ["Dog", 2]
        ]
    },

    {
        question: "What was the name of the hospital where Beth was held and eventually died?",
        answers: [
            ["Grady Memorial Hospital", 2],
            ["Atlanta Memorial Hospital", 0],
            ["Atlanta Medical Center", 0],
            ["Grady Memorial", 0]
        ]
    },

    {
        question: "Who was the leader of the Commonwealth?",
        answers: [
            ["Lance Hornsby", 0],
            ["Pamela Milton", 2],
            ["Sebastian Milton", 0],
            ["Mercer", 0]
        ]
    },

    {
        question: "What was the name of the high school that Maggie Greene attended?",
        answers: [
            ["King County High School", 0],
            ["Linden County High School", 0],
            ["Cranwall High School", 2],
            ["Harrison High School", 0]
        ]
    },

    {
        question: "Who shot Carl Grimes in the eye?",
        answers: [
            ["Dwight", 0],
            ["Spencer Monroe", 0],
            ["Ron Anderson", 2],
            ["Nicholas", 0]
        ]
    },

    {
        question: "What was Hershel Greene's profession before the apocalypse?",
        answers: [
            ["Veterinarian", 2],
            ["Doctor", 0],
            ["Surgeon", 0],
            ["Farmer", 0]
        ]
    },

    {
        question: "What was the name of the town ruled by the Governor?",
        answers: [
            ["Alexandria", 0],
            ["Fairview", 0],
            ["Woodbury", 2],
            ["Kingstown", 0]
        ]
    },

    {
        question: "What was the name of the former Savior who eventually became one of Rick's allies?",
        answers: [
            ["Dwight", 2],
            ["Gavin", 0],
            ["Jared", 0],
            ["Simon", 0]
        ]
    },

    {
        question: "Which role did Norman Reedus originally audition for before being cast as Daryl Dixon?",
        answers: [
            ["Merle Dixon", 2],
            ["Shane Walsh", 0],
            ["Rick Grimes", 0],
            ["T-Dog", 0]
        ]
    },

    {
        question: "What was T-Dog's real name?",
        answers: [
            ["Terrence Douglas", 0],
            ["Theodore Douglas", 2],
            ["Thomas Douglas", 0],
            ["Tyler Douglas", 0]
        ]
    },

    {
        question: "What was Barrington House at Hilltop originally?",
        answers: [
            ["A private mansion", 0],
            ["A military headquarters", 0],
            ["A government office", 0],
            ["A living-history museum", 2]
        ]
    },

    {
        question: "What was Abraham Ford's military rank?",
        answers: [
            ["Captain", 0],
            ["Sergeant", 2],
            ["Corporal", 0],
            ["Lieutenant", 0]
        ]
    },

    {
        question: "What was the name of Daryl's older brother?",
        answers: [
            ["Michael Dixon", 0],
            ["Martin Dixon", 0],
            ["Marcus Dixon", 0],
            ["Merle Dixon", 2]
        ]
    },

    {
        question: "What does CRM stand for in The Walking Dead universe?",
        answers: [
            ["Commonwealth Republic Military", 0],
            ["Central Republic Militia", 0],
            ["Civic Republic Military", 2],
            ["Civilian Republic Movement", 0]
        ]
    },

    {
        question: "Who shoots the rabid dogs for food while the group is on the road from Terminus?",
        answers: [
            ["Daryl Dixon", 0],
            ["Sasha Williams", 2],
            ["Abraham Ford", 0],
            ["Rick Grimes", 0]
        ]
    },

    {
        question: "What was the name of Carol Peletier's husband?",
        answers: [
            ["Ed Peletier", 2],
            ["Edward Peletier", 0],
            ["Eric Peletier", 0],
            ["Evan Peletier", 0]
        ]
    },

    {
        question: "What was the 100th episode of The Walking Dead called?",
        answers: [
            ["The Big Scary U", 0],
            ["Mercy", 2],
            ["Wrath", 0],
            ["The Key", 0]
        ]
    },

    {
        question: "What is Jesus's real name in the show?",
        answers: [
            ["Paul Rovia", 2],
            ["Peter Rovia", 0],
            ["Paul Reyes", 0],
            ["Philip Rivas", 0]
        ]
    },

    {
        question: "What was the name of Negan's main base?",
        answers: [
            ["The Compound", 0],
            ["The Fortress", 0],
            ["The Stronghold", 0],
            ["The Sanctuary", 2]
        ]
    },

    {
        question: "What was the name of the survivor who left Rick's group on the way to the CDC and later became a member of the Saviors?",
        answers: [
            ["Guillermo", 0],
            ["Morales", 2],
            ["Jacqui", 0],
            ["Jim", 0]
        ]
    },

    {
        question: "What was Ezekiel's occupation before the apocalypse?",
        answers: [
            ["Animal trainer", 0],
            ["Veterinary assistant", 0],
            ["Zookeeper", 2],
            ["High school teacher", 0]
        ]
    },

    {
        question: "What was the name of Hershel Greene's youngest daughter?",
        answers: [
            ["Beth", 2],
            ["Maggie", 0],
            ["Patricia", 0],
            ["Sophia", 0]
        ]
    },

    {
        question: "Who was Negan's right-hand man?",
        answers: [
            ["Simon", 2],
            ["Dwight", 0],
            ["Gavin", 0],
            ["Simon Grimes", 0]
        ]
    },

    {
        question: "What was the name of the CDC doctor who stayed behind until the end in Season 1?",
        answers: [
            ["Edward Jenner", 0],
            ["Ethan Jenner", 0],
            ["Edwin Jenner", 2],
            ["Everett Jenner", 0]
        ]
    },

    {
        question: "What was the name of Maggie's half-brother?",
        answers: [
            ["Brandon Greene", 0],
            ["Jimmy Greene", 0],
            ["Shawn Greene", 2],
            ["Billy Greene", 0]
        ]
    },

    {
        question: "What was Michonne's profession before the apocalypse?",
        answers: [
            ["Lawyer", 2],
            ["Journalist", 0],
            ["Social worker", 0],
            ["Prosecutor", 0]
        ]
    },

    {
        question: "What were the people wearing wolf symbols called?",
        answers: [
            ["The Wolves", 2],
            ["The Raiders", 0],
            ["The Hunters", 0],
            ["The Scavengers", 0]
        ]
    },

    {
        question: "What is Princess's real name in The Walking Dead?",
        answers: [
            ["Isabella Sanchez", 0],
            ["Maria Sanchez", 0],
            ["Juanita Sanchez", 2],
            ["Gabriela Sanchez", 0]
        ]
    },

    {
        question: "What was Glenn Rhee's job before the outbreak?",
        answers: [
            ["Store clerk", 0],
            ["Mechanic", 0],
            ["Pizza delivery driver", 2],
            ["Taxi driver", 0]
        ]
    },

    {
        question: "Which major characters does Alpha put on spikes to mark the Whisperers' territory?",
        answers: [
            ["Tara, Enid, and Henry", 2],
            ["Jesus, Alden, and Henry", 0],
            ["Tara, Siddiq, and Luke", 0],
            ["Enid, Rosita, and Tammy Rose", 0]
        ]
    },

    {
        question: "Which character had two younger twin brothers?",
        answers: [
            ["Maggie", 0],
            ["Aaron", 0],
            ["Noah", 2],
            ["Daryl", 0]
        ]
    },

    {
        question: "What was the name of the community founded by Deanna Monroe?",
        answers: [
            ["Hilltop", 0],
            ["Alexandria", 2],
            ["Oceanside", 0],
            ["Kingdom", 0]
        ]
    },

    {
        question: "Who accidentally shot Carl Grimes in Season 2?",
        answers: [
            ["Dale", 0],
            ["Otis", 2],
            ["Hershel", 0],
            ["Shane", 0]
        ]
    },

    {
        question: "What was the name of the doctor at Hilltop who treated Maggie?",
        answers: [
            ["Dr. Harlan", 0],
            ["Dr. Siddiq", 0],
            ["Dr. Hershel", 0],
            ["Dr. Carson", 2]
        ]
    },

    {
        question: "When Morgan Jones left The Walking Dead, which spin-off did he move to?",
        answers: [
            ["The Walking Dead: World Beyond", 0],
            ["Fear the Walking Dead", 2],
            ["The Walking Dead: Dead City", 0],
            ["The Walking Dead: The Ones Who Live", 0]
        ]
    },

    {
        question: "What is Negan's full name?",
        answers: [
            ["Negan Collins", 0],
            ["Negan James", 0],
            ["Negan Smith", 2],
            ["Negan Miller", 0]
        ]
    },

    {
        question: "What was the title of the final episode of The Walking Dead?",
        answers: [
            ["Rest in Peace", 2],
            ["Here's Negan", 0],
            ["A New Beginning", 0],
            ["What Comes After", 0]
        ]
    }

];


let currentQuestion = 0;
let score = 0;


const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const shareButton = document.getElementById("share-btn");
const challengeButton = document.getElementById("challenge-btn");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");


startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", shareResult);
challengeButton.addEventListener("click", shareResult);


function startQuiz() {

    homeInfo.classList.add("hidden");

    currentQuestion = 0;
    score = 0;

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}


function showQuestion() {

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = current.question;

    answersContainer.innerHTML = "";

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;


    current.answers.forEach((answer) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = answer[0];

        button.addEventListener("click", () => {
            selectAnswer(answer[1]);
        });

        answersContainer.appendChild(button);

    });
}


function selectAnswer(points) {

    score += points;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }
}


function showResult() {

    homeInfo.classList.remove("hidden");

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    document.getElementById("final-score").textContent = score;


    let title;
    let description;
    let knowledge;
    let icon;


    if (score <= 20) {

        title = "🧟 Walker-Level Knowledge";

        description =
            "You might recognize Rick and Daryl, but most of the details of the apocalypse have escaped you.";

        knowledge = "Casual Viewer";

        icon = "🧟";

    } else if (score <= 40) {

        title = "🏚️ Alexandria Beginner";

        description =
            "You've watched the show, but there are plenty of characters, places and events you could still forget.";

        knowledge = "Casual Fan";

        icon = "🏚️";

    } else if (score <= 60) {

        title = "🔥 Survivor";

        description =
            "You know the major characters and events, but some of the deeper Walking Dead trivia caught you out.";

        knowledge = "Good Fan";

        icon = "🔥";

    } else if (score <= 80) {

        title = "⚔️ Seasoned Survivor";

        description =
            "You've spent a lot of time in the apocalypse. You remember most of the important details and many of the obscure ones.";

        knowledge = "Dedicated Fan";

        icon = "⚔️";

    } else if (score <= 94) {

        title = "👑 Walking Dead Expert";

        description =
            "Impressive. You remember characters, communities, groups and details that many fans have forgotten.";

        knowledge = "Expert Fan";

        icon = "👑";

    } else {

        title = "🧠 Walking Dead Encyclopedia";

        description =
            "You don't just remember the show — you remember the tiny details. You could probably survive a Walking Dead trivia convention.";

        knowledge = "Ultimate Fan";

        icon = "🧠";
    }


    document.getElementById("result-title").textContent = title;

    document.getElementById("result-description").textContent =
        description;

    document.getElementById("knowledge-level").textContent =
        knowledge;

    document.getElementById("result-icon").textContent =
        icon;

    progressBar.style.width = "100%";
}


function restartQuiz() {

    resultScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");

}


async function shareResult() {

    const title =
        document.getElementById("result-title").textContent;

    const knowledge =
        document.getElementById("knowledge-level").textContent;

    const finalScore =
        document.getElementById("final-score").textContent;


    const shareText =
        `🧟 I scored ${finalScore}/100 on The Walking Dead Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU know The Walking Dead?`;


    const shareData = {

        title: "The Walking Dead Quiz",

        text: shareText,

        url: "https://apocalypsequizzes.com/walking-dead-quiz/"

    };


    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(
                shareText +
                "\n\nhttps://apocalypsequizzes.com/walking-dead-quiz/"
            );

            alert(
                "Your result has been copied! You can paste it anywhere."
            );

        }

    } catch (error) {

        console.log("Sharing cancelled.");

    }

}