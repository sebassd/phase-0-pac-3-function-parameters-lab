//1st option
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }

//2nd option  
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  //3rd option
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }


console.log(introduction("Sebastian"));
console.log(introductionWithLanguage("Sebastian", "JavaScript"));
console.log(introductionWithLanguageOptional("Sebastian", "JavaScript"));
console.log(introductionWithLanguageOptional("Sebastian",));
