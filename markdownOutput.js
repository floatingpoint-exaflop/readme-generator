function markdownOutput(mdObj) {
  getLicenseContent()
  const markdown = `# ${mdObj.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Credits](#credits)
  - [Questions](#questions)

  ## Description
  ${mdObj.description}

  ## Installation
  ${mdObj.installation}

  ## Usage
  ${mdObj.usage}

  ## Contributing
  ${mdObj.contributing}

  ## Tests
  ${mdObj.tests}

  ## License
  ${mdObj.licenseBadge} This project is using the ${mdObj.license}. Please click the badge icon for more information, or refer directly to the LICENSE in the repo.
  
  ## Credits
  ${mdObj.credits}
    
  ## Questions
  - [Check me out on Github!](https://www.github.com/${mdObj.github})
  - [Email Me](mailto:${mdObj.email}?subject=Hello!)
`
return markdown;
}

module.exports = {markdownOutput};