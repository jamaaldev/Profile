const urlProfile = "http://localhost:3000/";
import {DaysToCome,JointDate} from './node_modules/birthday-test/dist/birthday-test.esm.js'

const customTexts ={
  textGreeting:'Happy BirthDay',
  textDaysLeft:'',
  textDayLeft:'',
  textBirthDay:''
}

const birth = new DaysToCome();
const joint = new JointDate();
fetch(urlProfile + "profile", {
  method: "GET",
})
  .then((data) => data.json())
  .then((data) => {
    userProfile(data);
  })
  .catch((err) => console.log(err));
const userProfile = (data) => {
  let html = "";
  for (let user of data) {
   
    html += `
    
<div class="user">
<p>${user.firstName} ${user.lastName}</p>
<img src="${urlProfile + user.avatar}" alt="">
<p>Joint: ${joint.YearJoint(user.joint)}</p>
<p>Age: ${birth.YearsOld(user.DOB)} Years Old</p>

</div>


`;
  }
  document.querySelector(".profile").innerHTML = html;
};
