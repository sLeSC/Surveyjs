

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#293652";
defaultThemeColors["$main-hover-color"] = "#f19436";
defaultThemeColors["$text-color"] = "#293652";
defaultThemeColors["$header-color"] = "#293652";

defaultThemeColors["$header-background-color"] = "#293652";
defaultThemeColors["$body-container-background-color"] = "#293652";

Survey
    .StylesManager
    .applyTheme("default");

var json = {
    pages: [
        {
            questions: [
                
                {
                    type: "html",
                    title: "Learning Assessment!",
                    html: "<h1>Learning Assessment!</h1>You are about to start a learning assessment! <br/>This will help determine your learning style.<br/>Please click on the <b>'Next'</b> button when you are ready."
                }
            ]
        }, {
             questions: [
        {
            "type": "sortablelist",
            "name": "question1",
            "title": "What type of learner are you? Order the words that describes you the most. ",
            "isRequired": true,
            "choices": ["Arrange, Blend, Develop", "Recipe, Logical, Structure", "Articulate, Huddle, Role-play", "Judicious, Diagnostic, Investigative"]
        }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "question2",
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
                    name: "question3",
                    title: "Sort these in order of importance to your learning style",
                    choicesOrder: "random",
                    choices: [
                        "Hypothesis, Explanitory, Determining", "Vent, Groupthink, Dialog","Standarize, Practical, Tabulate","Reconstruct, Integrate, Synthesize"
                    ],
                    
                }
            ]
        }
    ]
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
