function getLicenseBadge() {
    let licenseBadge
      if (userQuestions.license === "MIT License"){
        licenseBadge = `[<img src="https://img.shields.io/badge/License-MIT_License-blue">](https://mit-license.org/)`
        
          } else if (userQuestions.license === "Apache License 2.0"){
            licenseBadge = `[<img src="https://img.shields.io/badge/License-Apache_License_2.0-green">](https://www.apache.org/licenses/LICENSE-2.0)`
        
          } else if (userQuestions.license === "BSD 3-Clause 'Revised'"){
            licenseBadge = `[<img src="https://img.shields.io/badge/License-BSD_3Clause_'Revised'-yellow">](https://opensource.org/license/bsd-3-clause)`
        
          } else if (userQuestions.license === "BSD 2-Clause 'Simplified'"){
            licenseBadge = `[<img src="https://img.shields.io/badge/License-BSD_2Clause_'Simplified'-pink">](https://opensource.org/license/bsd-2-clause)`
        
        
          } else if (userQuestions.license === "ISC License"){
            licenseBadge = `[<img src="https://img.shields.io/badge/License-ISC_License-gray">](https://www.isc.org/licenses/)`
          } else {licenseBadge = ""}
          return licenseBadge
      }
    