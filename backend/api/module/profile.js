const fs = require("fs");
const Path = "profileData.json";

class Profile {
  get() {
    return this.readData();
  }
  addData(newUser) {
    const currentData = Array.from(this.readData());
    currentData.unshift(newUser);
    this.writeData(currentData);
  }
  readData() {
    const rawData = fs.readFileSync(Path);
    const users = JSON.parse(rawData);
    return users;
  }
  writeData(rawData) {
    const data = JSON.stringify(rawData);
    fs.writeFileSync(Path, data);
  }
}

module.exports = Profile;
