Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start a learning assessment!. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
             questions: [
        {
            "type": "sortablelist",
            "name": "lifepriority",
            "title": "What type of learner are you? Order the words that describes you the most. ",
            "isRequired": true,
            "choices": ["Arrange, Blend, Develop", "Recipe, Logical, Structure", "Articulate, Huddle, Role-play", "Judicious, Diagnostic, Investigative"]
        }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "What most describes you?'",
                    choicesOrder: "random",
                    choices: [
                        "Step ", "Research", "Creative", "Test"
                    ],
                    
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "sortablelist",
                    name: "magnacarta",
                    title: "Sort these in order of importance to your learning style",
                    choicesOrder: "random",
                    choices: [
                        "Hypothesis,Explanitory,Determining", "Vent, Groupthink, Dialog","Standarize, Practical, Tabulate"
                    ],
                    
                }
            ]
        }
    ],
    completedHtml: "<h4>Thank you for taking the survey.</h4>"

    
};


window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
