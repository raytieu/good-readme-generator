# Good README Generator

![Good README Generator](https://img.shields.io/github/repo-size/raytieu/good-readme-generator)

## Table of Contents

* Description
* Usage
* Contact

## Description

This application is a README generator that can be utilized through node.js.  The user is prompted with a series of inputs, and a README containing their inputs will be generated.

## Usage

Run index.js from this repository in node and a series of prompts will appear, asking for input.  After entering all of the information, a README will be generated under the default filename, "README.md".  If README.md already exists, it will overwrite the previous version.  To save to a new README file, simply navigate to the init() function and within it, change the first parameter for the writeToFile() call.

The following sections are contained in the generated README:  

* Project Title
* Badge
* Table of Contents
* Description
* Installation
* Usage
* License
* Contributing
* Tests
* User Profile Picture
* User E-mail

## Contact

![Profile Picture](./profile-pic.jpg)

E-mail: ray.tieu@gmail.com