# xcuse

## Overview

`xcuse` is a JavaScript web application designed to generate random excuses. Users can click a button to get a humorous or creative excuse based on various categories such as objects, events, animals, and actions.

### Live Demo

You can try out the application here: [xcuse-web.netlify.app](https://xcuse-web.netlify.app/)

## Features

- **Random Excuses**: Generates random excuses by combining different types of placeholders.
- **Customizable Placeholders**: Excuses can include placeholders for objects, events, animals, and actions.

## Project Structure

Here's a brief overview of the project's structure:

- `index.html`: The main HTML file for the application.
- `style.css`: Contains the styling for the application.
- `super.js`: JavaScript file handling the logic for generating excuses.
- `logo.png` and `icons8-download-26.png`: Assets used in the application.

## Installation

To run this project locally, follow these steps:

**Clone the Repository**

   ```bash

   git clone https://github.com/priest-2105/xcuse.git

```


**Navigate to the Project Directory**


- cd xcuse
- Open index.html


You can open the index.html file in your web browser to view and interact with the application.

## Usage

**Open the Application**

Open the index.html file in your web browser.


**Generate an Excuse**

Click the "Generate Excuse" button to get a new random excuse. The generated excuse will replace the placeholders in the predefined templates.



## JavaScript Logic

**super.js**

The super.js file contains the main logic for generating excuses. Here's a brief overview of its functionality:


Placeholder Functions: Functions like displayObject(), displayEvent(), displayAnimal(), and displayAction() are used to fetch random values for each type of placeholder.

generateXcuse(): This function selects a random template and replaces placeholders ({object}, {event}, {animal}, {action}) with corresponding values.

Event Listener: The button click event triggers the generateXcuse() function to display a new excuse.



Example Code


Here's an example of how the generateXcuse() function works:


```
function generateXcuse() {
    const templateArray = excusesData.filter(item => item.type === 'template');
    if (templateArray.length === 0) {
        console.error('No templates found');
        return;
    }

    const template = templateArray[Math.floor(Math.random() * templateArray.length)].value;
    let newXcuse = template;

    // Retrieve values
    const objectXcuse = getRandomExcuse('object');
    const eventXcuse = getRandomExcuse('event');
    const animalXcuse = getRandomExcuse('animal');
    const actionXcuse = getRandomExcuse('action');

    // Replace placeholders
    newXcuse = newXcuse.replace(/{object}/g, objectXcuse)
                       .replace(/{event}/g, eventXcuse)
                       .replace(/{animal}/g, animalXcuse)
                       .replace(/{action}/g, actionXcuse);

    xcuseTextEl.innerText = newXcuse;
}
```

## Contributing

If you would like to contribute to the project, please follow these steps:


Fork the repository.

Create a new branch for your changes.

Make your changes and commit them.

Push your changes to your fork.

Submit a pull request.


Contact
For any questions or feedback, please contact the repository owner:
GitHub: priest-2105

