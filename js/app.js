'use strict;'

$('document').ready(function () {
    //counts how many questions have been answered
    var Quiz = {
        qCount: 0,
        points: 0,
        percentScore: 0,
        qDone: 0,
    };
    var quiz = Object.create(Quiz);
    var tennisCount = quiz.qCount;

    //TODO: RANDOMIZE QUESTION ORDER

    quiz.questions = [
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
        $('#submit').show();
        $('.qcount').text(tennisCount + 1);
        $('.qDone').text(quiz.qDone);
        if (tennisCount === quiz.questions.length) {
            return;
        }
        $('.nocheck').prop('checked', false);
        $('.qText').text(quiz.questions[tennisCount].question);
        $('.answer[value=0]').text(quiz.questions[tennisCount].answers[0]);
        $('.answer[value=1]').text(quiz.questions[tennisCount].answers[1]);
        $('.answer[value=2]').text(quiz.questions[tennisCount].answers[2]);
        $('.answer[value=3]').text(quiz.questions[tennisCount].answers[3]);
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
        $('#submit').hide();
        //print out a div with correct answer in it
        $('#infoDiv').show();
        $('#infoDiv').text("Incorrect.");
        $('#moreInfo').show();
        $('#ok').show();
        //click handler for "more info button"
        $('#moreInfo').click(function (e) {
            $('#infodiv2').show();
            $('#infoDiv2').text("The correct answer was: " + quiz.questions[tennisCount].answers[quiz.questions[tennisCount].correctAns] + ".");
        });
        tennisCount = tennisCount + 1;
        quiz.qDone = quiz.qDone + 1;
        quiz.percentScore = Math.round((quiz.points / quiz.qDone) * 100);
        $('.qDone').text(quiz.qDone);
        $('.percentScore').text(quiz.percentScore);
        console.log($('input[name=option]:checked').attr('value'));
        console.log(quiz.questions[tennisCount].correctAns);
        console.log('left' + typeof $('input[name=option]:checked').attr('value'));
        console.log('right' + typeof quiz.questions[tennisCount].correctAns);
        //if they're right give them points
        if (Number($('input[name=option]:checked').attr('value')) === quiz.questions[tennisCount].correctAns) {
            quiz.points = quiz.points + 1;
            $('#points').text(quiz.points);
            $('#finalPoints').text(quiz.points);
        }
    }); //end question submit handler

    $('#ok').click(function () {
        $('#moreInfo').hide();
        $('#infoDiv').hide();
        $('#infoDiv2').hide();
        $('#ok').hide();
        generateQuestion();
        grade(quiz.points, quiz.qDone, quiz.percentScore);
        if (tennisCount === quiz.questions.length) {
            $('#resultsDiv').show();
            //$everythingElse.hide();
            $('html').addClass('lightResults');
            $('.first').text('You have finished the quiz!');
        }
    });

    function grade(points, qDone, percentage) {
        var percentScore = Math.round((points / qDone) * 100);
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
