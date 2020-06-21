function telephoneCheck(str) {
    let regex = /^(1 |1|1-)*(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/g;
    console.log(str, regex.test(str))
    return regex.test(str);
  }

  
telephoneCheck("1(555)555-5555")
telephoneCheck("555-5555") 
telephoneCheck("5555555") 
telephoneCheck("1 555)555-5555") 

