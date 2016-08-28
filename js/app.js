'use strict;'

$('document').ready(function () {
    //counts how many questions have been answered
    var qCount = 0;
    var points = 0;
    var percentScore = 0;


    //here are all the questions
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

            answers: ['Maria Sharapova', 'Ellen Hansell', '3', '4'],
            correctAns: 1
        },
        {
            question: 'In 1881, Richard Sears won the first men\'s singles tournament at the U.S. Open. How many more years following this did he continue to hold the champion title?',

            answers: ['3', '8', '5', '6'],
            correctAns: 4
        },
        {
            question: 'In 1881, Richard Sears won the first men\'s singles tournament at the U.S. Open. How many more years following this did he continue to hold the champion title?',

            answers: ['3', '8', '5', '6'],
            correctAns: 4
        },
        {
            question: 'In 1881, Richard Sears won the first men\'s singles tournament at the U.S. Open. How many more years following this did he continue to hold the champion title?',

            answers: ['3', '8', '5', '6'],
            correctAns: 4
        },
        {
            question: 'In 1881, Richard Sears won the first men\'s singles tournament at the U.S. Open. How many more years following this did he continue to hold the champion title?',

            answers: ['3', '8', '5', '6'],
            correctAns: 4
        }
    ];


    function generateQuestion() {
        $('.qcount').text(qCount);
        if (qCount === questions.length) {
            return;
        }
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

    });

    //submit handler
    $('#question').submit(function (e) {
        e.preventDefault();
        //temporary
        console.log('Im about to run this conditional');
        console.log($('input[name=option]:checked').attr('value'));
        console.log(questions[qCount].correctAns);

        if ($('input[name=option]:checked').attr('value') == questions[qCount].correctAns) {
            //console.log('conditional evaluated true');
            points = points + 1;
            $('#points').text(points);
        }
        qCount = qCount + 1;
        percentScore = Math.round((points / qCount) * 100);
        $('.percentScore').text(percentScore);
        generateQuestion();

        if (qCount === questions.length) {
            $('#resultsDiv').show();
        }
    }); //end question submit handler

    function grade(percentage) {
        percentScore = Math.round((points / qCount) * 100);
        if (percentScore > 90) {
            $('#finGrade').text("A");
        } else if (percentScore > 80 && percentage < 90) {
            $('#finGrade').text("B");
        } else if (percentScore > 70 && percentage < 80) {
            $('#finGrade').text("C");
        } else if (percentScore > 60 && percentage < 70) {
            $('#finGrade').text("D");
        } else {
            $('#finGrade').text("F");
        }
    }
    grade(percentScore);


}); //end ready function
