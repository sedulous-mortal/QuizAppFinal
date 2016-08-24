'use strict;'

$('document').ready(function () {
    //counts how many questions have been answered
    var qCount = 0;

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
            question: 'blah',

            answers: ['answer1', 'answer2', 'answer3', 'answer4'],
            correctAns: 1,
    }
]


    function generateQuestion() {
        $('.qText').text(questions[qCount].question);
        $('.answer[value=0]').text(questions[qCount].answers[0]);
        $('.answer[value=1]').text(questions[qCount].answers[1]);
        $('.answer[value=2]').text(questions[qCount].answers[2]);
        $('.answer[value=3]').text(questions[qCount].answers[3]);
    }

    $('#startQuiz').click(function () {
        generateQuestion();
    });

    //submit handler
    $('#question').submit(function (e) {
        e.preventDefault();
        if ($('input[name=option]:checked').attr('value') == questions[qCount].correctAns) {
            qCount = qCount + 1;
            console.log("correct answer selected");
        }

    });
    /*
    //jquery handler for starting the quiz
    startQuiz.click-- > takeQuiz()

    takeQuiz: function () {
            quizDiv.show();
            for (i = 1, i <= 10, i++) {
                this.id = ("q" + i);
            }

            nextQuestion: function () {
                if ('this.answered == 0') {
                    //SHOW NEXT QUESTION
                }
            }

            showResults: function () {
                document.write("Here are your results: you scored ____/10, or ____%, on this quiz.")
            }

            showResults();
        } //close ready function
        */
}); //end ready function
