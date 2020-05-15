# Contribution Guidelines
Ensure your pull request adheres to the following guidelines.
- Leave issues if you have any interesting ideas or bugs.
- Use English in all cases(Communication, Comment, and Code review etc).

## Code contribution guide
- Indentation of 4 spaces.
- Name a react component file as pascal case, others snake case.
- Name a react component variable as pascal case, others camel case.
- Refer to existing codes.

## Quiz contribution guide
- Sync answer with question.
- Question and answer are added / modified / deleted according to the JSON format. See format below.
- Format
  - Question ([/src/static/json/python.json](https://github.com/ainize-team/python-level-challenge/blob/release/src/static/json/python.json))
    ```
    {
        "Id": (Integer, problem number in ascending order)[Required],
        "Subject": (String)[Required],
        "Difficulty": (Integer, 0:Easy 1:Normal 2:Hard)[Required],
        "Question": (String)[Required],
        "Code": (String)[Optional],
        "Answers": (Array of String)[Required],
        "Reference": (String)[Optional]
    }
    ```    
  - Answer ([/src/static/json/python_answer.json](https://github.com/ainize-team/python-level-challenge/blob/release/src/static/json/python_answer.json))
    ```
    {
        "Id": (Integer, answer number in ascending order, must sync with question number)
        "Answer": (Integer, 0 ~ ...)
    }
    ```
