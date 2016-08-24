'use strict;'

$('document').ready(function () {
    //counts how many questions have been answered
    var qCount = 0;
    var points = 0;

    //here are all the questions
    var questions = [
        {
            question: 'What happens at the start of each point in a tennis game?',

            answers: ['The players switch sides', 'The referee calls time',
                      'One player states the score', 'One player serves'],
            correctAns: 3,

},
        {
            question: 'What color are the tennis balls used at official tournaments?',

            answers: ['White', 'Bright green', 'Yellow', 'Light pink'],
            correctAns: 2,

    },
        {
            question: 'Assuming no ties, how many sets must a woman win in pro tennis to have won the match?',

            answers: [' 2', ' 3', ' 4', ' 6'],
            correctAns: 0,
    },
        {
            question: 'What must one do to serve in the game of tennis?',

            answers: ['You have to jump and then you can hit the ball.', 'You have to throw the ball up and then you can swing at it.', 'You first drop the ball, then hit it.', 'You must bounce the ball against the court, then swing at it.'],
            correctAns: 1,

},
        {
            question: 'What advertisement is Maria Sharapova famous for doing during her tennis career?',

            answers: ['A sunglasses ad', 'A watch ad', 'A dress ad', 'A camera ad'],
            correctAns: 3,

    },
];


    function generateQuestion() {
        $('.qcount').text(qCount);
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
        console.log('Im about to run this conditional');
        console.log($('input[name=option]:checked').attr('value'));
        console.log(questions[qCount].correctAns);

        if ($('input[name=option]:checked').attr('value') == questions[qCount].correctAns) {
            console.log('conditional evaluated true');
            points++;
            $('#points').text(points);
        }
        qCount = qCount + 1;
        $('.percentScore').text(points / qCount);
        console.log(points + "is points");
        console.log(qCount + "is question count");
        generateQuestion();

        if (qCount == 5) {
            $('#resultsDiv').show();
        }
    });



}); //end ready function
