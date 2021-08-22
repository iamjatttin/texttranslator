# texttranslator


A simple interface to translate any input string into a desired language output.

This translator tool uses google api to translate the texts.
It Automatically detects the language of the input and translates it into the required output language.

# Installation::
 **You need nodejs installed on your machine.**

> Start:
- Open the terminal and enter `npm init` to initialise the node js project.
-In order to run express we need to install few packages, In the terminal enter `npm i --save express @vitalets/google-translate-api mysql ejs`. This will install the required dependencies
- Now copy *index.js* in the root directory.
- Now create a new folder *views* in the root directory and then copy *home.ejs* file in that directory.

> Creating Database:
- Go to *phpmyadmin* and create a database ***translator***.
- In the translator database create a table which contains 4 columns::
    - **id** : Should be Int with AI enabled.
    - **itext**: Should be Varchar with length of 5000 characters.(It will store the text input of the user.)
    - **language**: Should be of varchar length of 200 characters.(It will store the language of the output.)
    - **response**: Should be Varchar with length of 5000 characters.(It will store the translated text.)

> Execution:

- Open the terminal and enter ***`node index.js`***
- Open the browser and go to url >*`http://localhost:8080/`*
- Enter the text in the input section, Select the output language and click on translate.
