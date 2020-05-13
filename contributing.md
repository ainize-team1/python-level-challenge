# Contribution Guidelines

- Ensure your pull request adheres to the following guidelines
- If you have interesting ideas, please leave them in Issue.

1. Quiz PR
    - Default language is English.
    - Must sync answer with question.
    - Question ([/src/static/json/python.json](https://github.com/ainize-team/python-level-challenge/blob/release/src/static/json/python.json))
        - Question needs to be added / modified / deleted according to the JSON format. See format below.
        - ```
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
        - Answer must sync with question. See format below.
        - ```
          {
              "Id": (Integer, answer number in ascending order, must sync with question number)
              "Answer": (Integer, 0 ~ ...)
          },
          ```
2. Other PR
    - Adhere coding convention.
