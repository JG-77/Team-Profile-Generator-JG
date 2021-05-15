# Team-Profile-Generator-JG ![Node.js](https://img.shields.io/badge/License-Node.js-blue.svg) ![MIT](https://img.shields.io/badge/License-MIT-red.svg)


## GitHub Repository and Application
---
[GitHub Link](https://github.com/JG-77/Team-Profile-Generator-JG.git)

[App Walkthrough Video pt.1](https://drive.google.com/file/d/15y6Kz4RF0EVUWa-Nn3ankfpDQiz8fxAT/view?usp=sharing)

[App Walkthrough Video pt.2](https://drive.google.com/file/d/1YLInjPzg_QyYGL9ZZmXvHU1Z-ADdu6bf/view?usp=sharing)

[App Walkthrough Video pt.3](https://drive.google.com/file/d/13VIcTMAqwS--vEz8PB118BfKmt16K8Mt/view?usp=sharing)

## Application Screenshots
---
![Deployed App HTML](https://user-images.githubusercontent.com/76461629/118380727-e6fe1600-b598-11eb-84f0-4d6f35c59de9.png)
 
![VScode files and code)](https://user-images.githubusercontent.com/76461629/118380737-f1201480-b598-11eb-965a-4f39fdbdfc03.png)

## Description
---
The Team Profile Generator app allows teams to display all members on their own card section displaying their information to get a visualization of the project team. Each team member will be asked their name, ID number, email, and role, and based on their role, each member will be asked for different information. Manager roles will be asked for their office number, engineers will be asked their GitHub username, and interns will be asked the school they are currently attending. The inquirer prompts powered by Node.js will make users answer the prompts, and once the team is finished being built, a HTML file will be generated which will display team memebers when opened in a browser.

## Technologies
---
### Node.js/Javascript

* Employee class created and extended by Engineer, Intern, and Manager subclasses in 'lib' folder
* Test files with passing tests for each of these clases in '__tests__' folder 
* Package.json file with node dependencies and packages installed along with package-lock.json file added
* Application runs in index.js files by running 'node index.js' in the terminal
* Prompt.js file has inquirer prompt functiond which follow user flow on whether they want to create more roles or finish building the team
* Prompt.js has necessary packages for generating the HTMl file and calling methods from classes
* Template.js contains template html functions that get displayed with team role information
* With every role, a new card is inserted into the generateHTML function and then generated with the HTML
* TeamRoleTemplate function cycles through each role and adds a card template for each role based on cardArray variable

### CSS/Boottrap.css

* Standard CSS style sheet for minor styling edits: spacing, flex properties, and font styling
* Bootstrap styling for jumbotron display and card sections in class attributes

### HTML

* HTML elements displayed through bootstap element templates
* Contains a jumbotron header and card sections with unordered list for team information



## Contact 
Jessie Guadarrama: <jesguadarrama98@gmail.com>

## License
[Node.js License](https://raw.githubusercontent.com/nodejs/node/master/LICENSE)

Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.

---
The MIT License (MIT)

Copyright (c) 2011-2021 Twitter, Inc.
Copyright (c) 2011-2021 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
