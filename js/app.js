'use strict;'

$('document').ready(function () {
    //counts how many questions have been answered
    var qCount = 0,
        points = 0,
        percentScore = 0,
        qDone = 0;

    // DO LESSONS 1 AND 2 OF UNIT 4


    //RANDOMIZE QUESTION ORDER
    //i have to use object.create to do things :(
    var questions = [
        {
            question: 'What happens at the start of each point in a tennis game?',

            answers: ['The players switch sides', 'The referee calls time',
                      'One player states the score', 'One player serves'],
            correctAns: 3

        },
        {
            question: 'What color are the tennis balls used at official tournaments?',

            answers: ['White', 'Bright green', 'Yellow', 'Light pink'],
            correctAns: 2

        },
        {
            question: 'Assuming no ties, how many sets must a woman win in pro tennis to have won the match?',

            answers: [' 2', ' 3', ' 4', ' 6'],
            correctAns: 0
        },
        {
            question: 'What must one do to serve in the game of tennis?',

            answers: ['You have to jump and then you can hit the ball.', 'You have to throw the ball up and then you can swing at it.', 'You first drop the ball, then hit it.', 'You must bounce the ball against the court, then swing at it.'],
            correctAns: 1

        },
        {
            question: 'What advertisement is Maria Sharapova famous for doing during her tennis career?',

            answers: ['A sunglasses ad', 'A watch ad', 'A dress ad', 'A camera ad'],
            correctAns: 3

        },

        {
            question: 'Who was the first woman to win a singles tournament at the U.S. Open?',

            answers: ['Maria Sharapova', 'Ellen Hansell', 'Stephie Graph', 'Serena Williams'],
            correctAns: 1
        },
        {
            question: 'Where did André Agassi win his first Grand Slam title?',

            answers: ['Wimbledon', 'The U.S. Open', 'The Australian Open', 'In France'],
            correctAns: 0
        },
        {
            question: 'Which pair of brothers are famous for their skills teaming up in doubles play?',

            answers: ['Patrick & John McEnroe', 'Jamie & Andy Murray', 'Christophe & Olivier Rochus', 'Bob & Mike Bryan'],
            correctAns: 3
        },
        {
            question: 'Which bank sponsors the digital reviewing system used at the U.S. Open to assess the validity of Challenges that players make to referee calls?',

            answers: ['Citibank', 'Chase', 'Bank of America', 'First Republic'],
            correctAns: 1
        },
        {
            question: 'In 1881, Richard Sears won the first men\'s singles tournament at the U.S. Open. How many more years following this did he continue to hold the champion title?',

            answers: ['3', '8', '5', '6'],
            correctAns: 3
        }
    ];


    function generateQuestion() {
        $('.qcount').text(qCount + 1);
        $('.qDone').text(qDone);
        if (qCount === questions.length) {
            return;
        }
        $('.nocheck').prop('checked', false);
        $('.qText').text(questions[qCount].question);
        $('.answer[value=0]').text(questions[qCount].answers[0]);
        $('.answer[value=1]').text(questions[qCount].answers[1]);
        $('.answer[value=2]').text(questions[qCount].answers[2]);
        $('.answer[value=3]').text(questions[qCount].answers[3]);
    }

    $('#startQuiz').click(function () {
        $('#introDiv').hide();
        $('#quizDiv').show();
        generateQuestion();
        $('.bot_of_quizDiv').show();

    });

    //submit handler
    $('#submit').click(function (e) {
        e.preventDefault();
        if ($('input[name=option]:checked').attr('value') == questions[qCount].correctAns) {
            points = points + 1;
            $('#points').text(points);
            $('#finalPoints').text(points);
        } else {
            //print out a div with correct answer in it
            $('#infoDiv').text("Incorrect.");
            $('#moreInfo').show();
            //click handler for "more info button"
            $('#moreInfo').click(function (e) {
                $('#infoDiv2').text("The correct answer was: " + questions[qCount].answers[questions[qCount].correctAns] + ".");
            })
        }
        qCount = qCount + 1;
        qDone = qDone + 1;
        percentScore = Math.round((points / qDone) * 100);
        $('.percentScore').text(percentScore);
        generateQuestion();
        grade(percentScore);
        if (qCount === questions.length) {
            $('#resultsDiv').show();
            //$everythingElse.hide();
            $('html').addClass('lightResults');
            $('.first').text('You have finished the quiz!');
        }
    }); //end question submit handler

    function grade(percentage) {
        percentScore = Math.round((points / qDone) * 100);
        if (percentScore >= 90) {
            $('#finGrade').text("A");
        } else if (percentScore >= 80 && percentage < 90) {
            $('#finGrade').text("B");
        } else if (percentScore >= 70 && percentage < 80) {
            $('#finGrade').text("C");
        } else if (percentScore >= 60 && percentage < 70) {
            $('#finGrade').text("D");
        } else {
            $('#finGrade').text("F");
        }
    }

}); //end ready function
