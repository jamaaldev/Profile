
class LeftDaysToBirthDay {
    constructor(customTexts){
        this.textGreeting = customTexts.textGreeting;
        this.textDaysLeft = customTexts.textDaysLeft;
        this.textDayLeft = customTexts.textDayLeft;
        this.textBirthDay = customTexts.textBirthDay
    }
   
    daysLeftToBirthDay(DOB,DaysLeft,el,nameClass){
  

    const birthDay = parseInt(DOB.split("-")[2]);
    const birthMonth = parseInt(DOB.split("-")[1]);
    const birthYear = parseInt(DOB.split("-")[0]);
    const toDay = new Date().getDate();
    const toMonth = new Date().getMonth() + 1;
     
    const diffDays = Math.floor((new Date(birthMonth + "-" + birthDay) - new Date(`'${toMonth}-${toDay}'`)) / 86400000);
        const checkDayorDays = (dayOrDays) =>{
            switch(dayOrDays){
                case true:
                    return `${diffDays} ${this.textDayLeft || 'Day Left'}`
                    break
                case false:
                    return `${diffDays} ${this.textDaysLeft || 'Days Left'}`

            }
        }
    const checkDaysLeft = (checkDays) => {
        switch (new Date().getDate() >= checkDays) {
          case true:
            return `${checkDays}`;
            break;

        }
      };
      switch (diffDays) {
        case 0:
          return ` <${el} class="greeting"> ${this.textGreeting || 'Today is Your BirthDay'} </${el}>`;
          break;
        default:
            if (diffDays <= parseInt(DaysLeft) && ! 1 < diffDays) {
                return `<${el} class="${nameClass}"> ${this.textBirthDay || 'BirthDay:'} ${checkDayorDays(checkDaysLeft(diffDays) && diffDays <= 1 )} </${el}> `;
              } 
      }

      
     
    }
}

export {LeftDaysToBirthDay}