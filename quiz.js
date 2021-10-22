const body = document.getElementsByTagName('body');
const round = document.getElementById('round');
const decade = document.getElementById('decade');
const scoreContainer = document.getElementById('score');
const question = document.getElementById('question');
const answerA = document.getElementById('A');
const answerB = document.getElementById('B');
const answerC = document.getElementById('C');
const answerD = document.getElementById('D');
const quizContainer = document.getElementById('quiz-container');
const finalScore = document.getElementById('final-score');
const finalScoreContainer = document.getElementById('final-score-container');
const correctDisplay = document.getElementById('correct-container');
const incorrectDisplay = document.getElementById('incorrect-container');
const correctButton = document.getElementById('correct-btn');
const incorrectButton = document.getElementById('incorrect-btn'); 

let roundIndex = 0;
let qIndex = 0;
let score = 0;


const questionList = [
    {round: 1,
      decade: '1971-1980',
      background: 'ziggy.jpg',
     qs: [
        {year: '1971',
        qtext: 'Who failed to win a trophy in 1971?',
        qImg: '',
        answerA: 'Arsenal',
        answerB: 'Tottenham',
        answerC: 'Liverpool',
        answerD: 'Everton',
        correct: 'C'
        },
        {year: '1972',
        qtext: 'Which of the following won best film at the Oscars in 1972?',
        qImg: '',
        answerA: 'The Godfather',
        answerB: 'The French Connection',
        answerC: 'The Poseidon Adventure',
        answerD: 'Deep Throat',
        correct: 'B'
        },
        {year: '1973',
        qtext: 'Which radio station opened in 1973, becoming the first ever legal competitor to the BBC?',
        qImg: '',
        answerA: 'Capital Radio',
        answerB: 'Radio Caroline',
        answerC: 'Radio Gaga',
        answerD: 'Kiss FM',
        correct: 'A'
        },
        {year: '1974',
        qtext: 'Which show, featurning Glenda Jackson, was the most popular Christmas TV show in 1974?',
        qImg: '',
        answerA: 'The Two Ronnies',
        answerB: 'Morecambe and Wise',
        answerC: 'The Val Doonican Show',
        answerD: 'Elizabeth R',
        correct: 'B'
        },
        {year: '1975',
        qtext: 'There was a referendum in 1975 open to all British voters. What was it about?',
        qImg: '',
        answerA: 'Decimalisation',
        answerB: 'Whether Carlisle is Scottish or English',
        answerC: 'Joining the Common Market',
        answerD: 'Scottish Devolution',
        correct: 'C'
        },
        {year: '1976',
        qtext: 'Which band is widely accepted as releasing the UK\'s first Punk single on 22nd October 1976 with a song called \'New Rose\'?',
        qImg: '',
        answerA: 'The Sex Pistols',
        answerB: 'The Clash',
        answerC: 'The Ramones',
        answerD: 'The Damned',
        correct: 'D'
        },
        {year: '1977',
        qtext: 'Which team were relegated from football\'s First Division in 1977, seeing their goalkeeper join local rivals?',
        qImg: '',
        answerA: 'Manchester City',
        answerB: 'Bristol City',
        answerC: 'Nottingham Forrest',
        answerD: 'Tottenham',
        correct: 'D'
        },
        {year: '1978',
        qtext: 'By which extraordinary James Bond-esque method was the exiled Bulgarian author Georgi Markov assasinated in 1978?',
        qImg: '',
        answerA: 'A laser beam between the legs - "Do you expect me to talk?"',
        answerB: 'An electric fan tossed into a bath - "Positively shocking!"',
        answerC: 'Partial drowning in a bathroom sink - "Yes considerably"',
        answerD: 'A poisoned pellet through an umbrella',
        correct: 'D'
        },
        {year: '1979',
        qtext: 'Which UK theme park opened in 1979?',
        qImg: '',
        answerA: 'Alton Towers',
        answerB: 'Blackpool Pleasure Beach',
        answerC: 'Thorpe Park',
        answerD: 'Peppa Pig World',
        correct: 'C'
        },
        {year: '1980',
        qtext: 'Which of the following albums was not released in 1980?',
        qImg: '',
        answerA: 'Boy - U2',
        answerB: 'Ace of Spades - Motorhead',
        answerC: 'Scary Monsters - David Bowie',
        answerD: 'Purple Rain - Prince',
        correct: 'D'
        },
     ]},
     {round: 2,
      decade: '1981-1990',
      background: 'smiths.png',
     qs: [
        {year: '1981',
        qtext: 'In 1981 which two British athletes broke the world record for the mile three times in ten days?',
        qImg: '',
        answerA: 'Steve Cram and Steve Ovett',
        answerB: 'Steve Ovett and Sebastian Coe',
        answerC: 'Sebastian Coe and Brendan Foster',
        answerD: 'Steve Cram and Brendan Foster',
        correct: 'B'
        },
        {year: '1982',
        qtext: 'In 1982 who went missing during the Paris-Dakar-Rally',
        qImg: '',
        answerA: 'Mark Thatcher',
        answerB: 'Margaret Thatcher',
        answerC: 'Dennis Thatcher',
        answerD: 'Carole Thatcher',
        correct: 'A'
        },
        {year: '1983',
        qtext: 'In 1983 who was elected as deputy leader of the Labour party?',
        qImg: '',
        answerA: 'Neil Kinnock',
        answerB: 'Roy Hattersley',
        answerC: 'John Prescott',
        answerD: 'Denis Healey',
        correct: 'B'
        },
        {year: '1984',
        qtext: 'Which of the following hits was not released in 1984?',
        qImg: '',
        answerA: 'Pride (In The Name Of Love)',
        answerB: 'Two Tribes',
        answerC: 'Do They Know It\'s Christmas?',
        answerD: 'Vienna',
        correct: 'D'
        },
        {year: '1985',
        qtext: 'What was the name of the battery powered tricycle unveiled by Clive Sinclair?',
        qImg: '',
        answerA: 'C1',
        answerB: 'C3',
        answerC: 'C3PO',
        answerD: 'C5',
        correct: 'D'
        },
        {year: '1986',
        qtext: 'Which space shuttle tragically exploded 73 seconds after launch in 1986?',
        qImg: '',
        answerA: 'Discovery',
        answerB: 'Columbia',
        answerC: 'Endeavour',
        answerD: 'Challenger',
        correct: 'D'
        },
        {year: '1987',
        qtext: 'While playing for Tottenham Hotspur in the 1987 FA Cup Final, what part of Gary Mabbutt\'s body caused him and all Spurs fans distress?',
        qImg: '',
        answerA: 'His face',
        answerB: 'His big toe',
        answerC: 'His knee',
        answerD: 'His hand',
        correct: 'C'
        },
        {year: '1988',
        qtext: 'Who preceded Gorbachev as Head of State of the Soviet Union in 1988?',
        qImg: '',
        answerA: 'Andrei Gromyko',
        answerB: 'Leonid Brezhnev',
        answerC: 'Boris Yeltsin',
        answerD: 'Nikita Krushchev',
        correct: 'A'
        },
        {year: '1989',
        qtext: 'Which debut album sharing the same name as the band that recorded it, was released in 1989?',
        qImg: '',
        answerA: 'Ride',
        answerB: 'The Stone Roses',
        answerC: 'My Bloody Valentine',
        answerD: 'Teenage Fanclub',
        correct: 'B'
        },
        {year: '1990',
        qtext: 'Who had a hit with "What Time Is Love?" in 1990?',
        qImg: '',
        answerA: 'KFC',
        answerB: 'Soul II Soul',
        answerC: 'KLF',
        answerD: 'Oasis',
        correct: 'C'
        },
     ]},
     {round: 3,
      background: 'stone-roses.jpg',
      decade: '1991-2000',
     qs: [
        {year: '1991',        
        qtext: 'Which of these albums was not release in 1991?',
        qImg: '',
        answerA: 'Seal - Seal',
        answerB: 'Bandwagonesque - Teenage Fanclub',
        answerC: 'Loveless - My Bloody Valentine',
        answerD: 'Definitely Maybe - Oasis',
        correct: 'D'
        },
        {year: '1992',
        qtext: 'What title was dubbed on David Mellor in 1992 after he admitted to having an affair?',
        qImg: '',
        answerA: 'The Baron of Bum',
        answerB: 'The Minister of Fun',
        answerC: 'The Toe\'d in the Hole',
        answerD: 'The Rusty Tromboner',
        correct: 'B'
        },
        {year: '1993',
        qtext: 'In 1983 Kim Campbell was elected the first woman Prime Minister of which country?',
        qImg: '',
        answerA: 'Canada',
        answerB: 'Australia',
        answerC: 'New Zealand',
        answerD: 'South Africa',
        correct: 'A'
        },
        {year: '1994',
        qtext: 'Which Italian cruise ship, best known for its hijacking in 1985, sank in 1994?',
        qImg: '',
        answerA: 'Michelangelo',
        answerB: 'Joe Dolce',
        answerC: 'Achille Lauro',
        answerD: 'Grandiosa',
        correct: 'C'
        },
        {year: '1995',
        qtext: 'Which bank collapsed in 1995?',
        qImg: '',
        answerA: 'Northern Rock',
        answerB: 'Brinks Matt',
        answerC: 'Bradford and Bingley',
        answerD: 'Barings',
        correct: 'D'
        },
        {year: '1996',
        qtext: 'In 1996 what happened to Wallace and Gromit, causing distress to their owner, Nick Park?',
        qImg: '',
        answerA: 'They starred in the first stop-motion animation blue movie',
        answerB: 'They caught fire',
        answerC: 'They were left in a taxi',
        answerD: 'They ended up in a car boot sale',
        correct: 'C'
        },
        {year: '1997',
        qtext: 'What was the popular name given to Daniel Hopper, an anti-road protester?',
        qImg: '',
        answerA: 'Stig',
        answerB: 'Crusty',
        answerC: 'Swampy',
        answerD: 'Bus Wanker',
        correct: 'C'
        },
        {year: '1998',
        qtext: 'Why was a Blue Peter presenter sacked in 1998?',
        qImg: '',
        answerA: 'Snorting cocaine',
        answerB: 'Gambling',
        answerC: 'Indecent exposure',
        answerD: 'Assault',
        correct: 'A'
        },
        {year: '1999',
        qtext: 'Who wrote the book Rogue Trader?',
        qImg: '',
        answerA: 'Steven Cohen',
        answerB: 'George Soros',
        answerC: 'Albert E Arkwright',
        answerD: 'Nick Leeson',
        correct: 'D'
        },
        {year: '2000',
        qtext: 'Who released their debut album in 2000?',
        qImg: '',
        answerA: 'Arctic Monkeys',
        answerB: 'Radiohead',
        answerC: 'Coldplay',
        answerD: 'The Killers',
        correct: 'C'
        },
     ]},
     {round: 4,
      background: 'killers.png',
     decade: '2001-2010', 
     qs: [
        {year: '2001',
        qtext: 'Geri Halliwell\'s cover of "It\'s Raining Men" featured on the soudtrack of which film?',
        qImg: '',
        answerA: 'Serendipity',
        answerB: 'Bridget Jones\' Diary',
        answerC: 'Shallow Hal',
        answerD: 'Legally Blonde',
        correct: 'B'
        },
        {year: '2002',
        qtext: 'Which 2002 film set in the future was based on a short story by Philip K Dick?',
        qImg: '',
        answerA: 'Blade Runner',
        answerB: 'A Scanner Darkly',
        answerC: 'Minority Report',
        answerD: 'Blade Runner 2049',
        correct: 'C'
        },
        {year: '2003',
        qtext: 'Who had a great 2003?',
        qImg: '',
        answerA: 'Bob Hope',
        answerB: 'Johnny Wilkinson',
        answerC: 'Maurice Gibb',
        answerD: 'Bob Monkhouse',
        correct: 'B'
        },
        {year: '2004',
        qtext: 'Which football manager passed away in 2004?',
        qImg: '',
        answerA: 'Brian Clough',
        answerB: 'Bobby Robson',
        answerC: 'Bill Nicholson',
        answerD: 'Bob Paisley',
        correct: 'C'
        },
        {year: '2005',
        qtext: 'In 2005 The Sun caused a stir by publishing a photo of which 68 year old in his underpants?',
        qImg: '',
        answerA: 'Jack Nicholson',
        answerB: 'Saddam Hussein',
        answerC: 'Silvio Berlusconi',
        answerD: 'Bill Wyman',
        correct: 'B'
        },
        {year: '2006',
        qtext: 'In 2006 it was announced that the murder of former KGB officer Alexander Litvinenko was due to poisoning by which chemical element?',
        qImg: '',
        answerA: 'Plutonium',
        answerB: 'Polonium',
        answerC: 'Phosphorus',
        answerD: 'Palladium',
        correct: 'B'
        },
        {year: '2007',
        qtext: 'In June 2007, which highly anticipated electronic gadget was finally released in the USA?',
        qImg: '',
        answerA: 'Palm Pilot',
        answerB: 'iPad',
        answerC: 'iPhone',
        answerD: 'Bluetooth headphones',
        correct: 'C'
        },
        {year: '2008',
        qtext: 'Which bank became the first in Europe to be taken under state control due to the US subprime mortgage financial crisis in 2008?',
        qImg: '',
        answerA: 'Northern Rock',
        answerB: 'Brinks Matt',
        answerC: 'Bradford and Bingley',
        answerD: 'Barings',
        correct: 'A'
        },
        {year: '2009',
        qtext: 'How old was Michael Jackson when he died in 2009?',
        qImg: '',
        answerA: '45',
        answerB: '50',
        answerC: '55',
        answerD: '60',
        correct: 'B'
        },
        {year: '2010',
        qtext: 'Who became Prime Minister of the UK in 2010?',
        qImg: '',
        answerA: 'Gordon Brown',
        answerB: 'Alan B\'stard',
        answerC: 'David Cameron',
        answerD: 'Tony Blair',
        correct: 'C'
        },
     ]},
     {round: 5,
        decade: '2011-2020',
      background: 'adele.jpg',
     qs: [
        {year: '2011',
        qtext: 'Which former Thin Lizzy guitarist died in February 2011?',
        qImg: '',
        answerA: 'Gary Moore',
        answerB: 'Phil Lynott',
        answerC: 'Lemmy',
        answerD: 'Rory Gallagher',
        correct: 'A'
        },
        {year: '2012',
        qtext: 'During the 2012 Olympics, which country was unable to view the opening ceremony in London on live TV?',
        qImg: '',
        answerA: 'Ireland',
        answerB: 'France',
        answerC: 'China',
        answerD: 'USA',
        correct: 'D'
        },
        {year: '2013',
        qtext: 'In 2013 which sporting event was delayed for 34 minutes thanks to a power outage',
        qImg: '',
        answerA: 'The FA Cup Final',
        answerB: 'The Super Bowl',
        answerC: 'Roland-Garros Final',
        answerD: 'T20 match between India and Sri Lanka',
        correct: 'B'
        },
        {year: '2014',
        qtext: 'Who did Luis Sarez bite during the 2014 World Cup?',
        qImg: '',
        answerA: 'Italian defender Giorgio Chiellini',
        answerB: 'Spanish defender Gerard Pique',
        answerC: 'French defender Mathieu Debucy',
        answerD: 'German defender Shkrodan Mustafi',
        correct: 'A'
        },
        {year: '2015',
        qtext: 'In 2015 a BA flight turned around half an hour into the flight to Dubai because of what in a lavatory?',
        qImg: '',
        answerA: 'Use of an e-cigarette',
        answerB: 'A pungent smell of excrement',
        answerC: 'Graffiti depicting the prophet Mohammed',
        answerD: 'A broken flush',
        correct: 'B'
        },
        {year: '2016',
        qtext: 'In 2016 what percentage of people in Britain voted Brexit?',
        qImg: '',
        answerA: '52%',
        answerB: '54%',
        answerC: '57%',
        answerD: '60%',
        correct: 'A'
        },
        {year: '2017',
        qtext: 'Who in 2017 was appointed World Organisational Health Goodwill Ambassador, only for it to be revoked within days?',
        qImg: '',
        answerA: 'Donald Trump',
        answerB: 'Kate Moss',
        answerC: 'Robert Mugabe',
        answerD: 'The Duke of Sussex',
        correct: 'C'
        },
        {year: '2018',
        qtext: 'In 2018 which country changed its constitution by removing limits for its leaders, thereby making the current incumbent "President for Life"?',
        qImg: '',
        answerA: 'America',
        answerB: 'Cuba',
        answerC: 'Russia',
        answerD: 'China',
        correct: 'D'
        },
        {year: '2019',
        qtext: 'In 2019 England won the Cricket World Cup, but at which ground was it played?',
        qImg: '',
        answerA: 'Headingley',
        answerB: 'Riverside Ground, Chester-le-Street',
        answerC: 'Lords',
        answerD: 'The Oval',
        correct: 'C'
        },
        {year: '2020',
        qtext: '2020 saw the tragic end to the reign of Donald Trump.  Which of the following is not a quote of his?',
        qImg: '',
        answerA: "If this were a dictatorship, it'd be a heck of a lot easier, just so long as I'm the dictator.",
        answerB: 'My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.',
        answerC: "It’s freezing and snowing in New York – we need global warming!",
        answerD: 'My Twitter has become so powerful that I can actually make my enemies tell the truth',
        correct: 'A'
        },
     ]}, 
]

let currentRound = questionList[roundIndex];
let currentQuestion = questionList[roundIndex].qs[qIndex];



function displayQuestion() {
   question.innerText = currentQuestion.qtext;
   answerA.innerText = currentQuestion.answerA;
   answerB.innerText = currentQuestion.answerB;
   answerC.innerText = currentQuestion.answerC;
   answerD.innerText = currentQuestion.answerD;
}

function displayRound() {
   round.innerText = `Round ${questionList[roundIndex].round}: `;
   decade.innerText = currentRound.decade;
}

function displayBackground() {
   let backgroundUrl = `url(./assets/${questionList[roundIndex].background})`;
   document.body.style.backgroundImage = backgroundUrl;
}



function displayScore() {
   scoreContainer.innerText = `Score ${score}`;
}


function updateDisplay() {
   displayRound();
   displayQuestion();
   displayScore();
   displayBackground();
}

updateDisplay()

function nextQuestion() {
   if(qIndex < 9) {
      qIndex += 1;
      currentQuestion = questionList[roundIndex].qs[qIndex];
   }
   else {
      if (roundIndex < 4) {
         roundIndex += 1;
         qIndex = 0;
         currentRound = questionList[roundIndex];
         currentQuestion = questionList[roundIndex].qs[qIndex];
      } else {
         quizContainer.classList.add('hide');
         finalScore.innerText = `${score} points`;
         finalScoreContainer.classList.remove('hide');
         finalScoreContainer.classList.add('show');
      }
   }
   updateDisplay()
}

function showCorrect () {
   quizContainer.classList.add('hide'); 
   correctDisplay.classList.remove('hide');
   correctDisplay.classList.add('show');
}

function showIncorrect () {
   quizContainer.classList.add('hide'); 
   incorrectDisplay.classList.remove('hide');
   incorrectDisplay.classList.add('show')
}

function hideCorrect () {
   quizContainer.classList.remove('hide'); 
   correctDisplay.classList.add('hide');
   correctDisplay.classList.remove('show');
   nextQuestion();
}

function hideIncorrect () {
   quizContainer.classList.remove('hide'); 
   incorrectDisplay.classList.add('hide');
   incorrectDisplay.classList.remove('show');
   nextQuestion();
}

correctButton.addEventListener('click', hideCorrect);
incorrectButton.addEventListener('click', hideIncorrect);


function checkAnswer(e) {
   if (e.target.id === currentQuestion.correct) {
       showCorrect()
      score += 1;              
   } 
   else {
      showIncorrect()
   } 
   
}

answerA.addEventListener('click', checkAnswer);
answerB.addEventListener('click', checkAnswer);
answerC.addEventListener('click', checkAnswer);
answerD.addEventListener('click', checkAnswer);