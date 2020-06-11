// Folder globals
let advisorFolderId = "1Q_eXO663PGZHTxhkxVYmyAtgUw4A_o0T";
let classYear = "21";
let studentName = "Aaron Johnson";
let clp = false;
let athlete = false;

// Scheduler globals
let onlineOnly = true;

// Welcome email globals
let alreadyScheduled = false;
let orientationDate = "Monday, March 20th, from 7pm-830pm";
let orientationLocation = "bethel";
let clientEmails = ["akutsu.yoshi@gmail.com", "yoshi@collegeliftoff.org"];

let advisor = {
  fullName: "Yoshi Akutsu",
  position: "Client Planning Advisor",
  phoneExtension: "709",
  email: "yoshi@collegeliftoff.com"
};




function main() {
  copyFiles(contents[0], newClientFolder);
  copySubFolders(contents[1]);
  let sharingLink = setSharingGetLink(newClientFolder);
  draftWelcomeEmail(sharingLink)
}







// Allows separate html pages to be included
function include(filename){
   return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Initializes web app
function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}



// *******************************************************************************
// START EMAIL WRITING FUNCTIONS
//
function draftWelcomeEmail(sharingLink) {
  if (alreadyScheduled === false) {
    let template = HtmlService.createTemplateFromFile("welcome-email");
    template.name = studentName;
    let firstName = studentName.split(" ")[0];
    template.firstName = firstName;
    
    template.advisor = advisor;
    template.sharingLink = sharingLink;
    template.date = orientationDate;
    
    let location = getLocationalAvailability(orientationLocation);
    template.location = location;
    
    let message = template.evaluate().getContent();
    GmailApp.createDraft(clientEmails.toString(), "Welcome to College Liftoff!", message, { htmlBody: message, cc: "aaron@collegeliftoff.com, paige@collegeliftoff.com" })
  }
  else {
    let availability = getAvailability(getCalendarDays());
    let template = HtmlService.createTemplateFromFile("welcome-email-no-date");
    template.name = studentName;
    let firstName = studentName.split(" ")[0];
    template.firstName = firstName;
    
    let location = getLocationalAvailability(orientationLocation);
    template.location = location;

    template.advisor = advisor;
    template.sharingLink = sharingLink;
    template.availability = availability;
    
    let message = template.evaluate().getContent();
    GmailApp.createDraft(clientEmails.toString(), "Welcome to College Liftoff!", message, { htmlBody: message, cc: "aaron@collegeliftoff.com, paige@collegeliftoff.com" })
  }
}

function getLocationalAvailability(location) {
  let lowered = location.toLowerCase();
  if (lowered === "bethel") {
    return "at our office – 5202 Bethel-Reed Park, Suite 140";
  }
  if (lowered === "powell") {
    return "at our office – 3897 W. Powell Rd";
  }
  if (lowered === "online") {
    return "online";
  }
}

// 
// END EMAIL WRITING FUNCTIONS
// *******************************************************************************







// *******************************************************************************
// Start Availability Calculating functions
// 

function getAvailability(calendarDays) {
  let msg = [];
  
  for (let i = 0; i < calendarDays.length; i++) {
    let month = calendarDays[i].month + 1;
    let date = calendarDays[i].date;
    let dayOfWeek = calendarDays[i].dayOfWeek;
    let formattedSlots = formatSlots(calendarDays[i].validStartTimes);
    
    let oneDay = month + "/" + date + " (" + getDayOfWeekName(dayOfWeek) + "): " + formattedSlots + "\n";
    msg.push(oneDay);
  }
  return msg;
}

// Example input to output: 12:30 => 12.5
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes() / 60;
  return hours + minutes;
}

function getDayOfWeekName(number) {
  switch (number) {
    case 0:
      return "Su";
    case 1:
      return "M";
    case 2:
      return "Tu";
    case 3:
      return "W";
    case 4:
      return "Th";
    case 5:
      return "F";
    case 6:
      return "Sa";
  }
}

function decimalToMinutes(number) {
  let decimal = number - Math.floor(number);
  if (decimal == 0) return number;
  if (decimal == 0.5) return (Math.floor(number) + ":30");
  if (decimal == 0.25) return (Math.floor(number) + ":15");
  if (decimal == 0.75) return (Math.floor(number) + ":45");
}

function militaryToTwelveHour(militaryHour) {
  Logger.log(militaryHour);
  if (militaryHour >= 12 && militaryHour < 13) {
    let twelveHour = militaryHour;
    twelveHour = decimalToMinutes(twelveHour) + "pm";
    return twelveHour;
  }
  else if (militaryHour >= 13) {
    let twelveHour = militaryHour - 12;
    twelveHour = decimalToMinutes(twelveHour) + "pm";
    return twelveHour;
  }
  else {
    let twelveHour = militaryHour;
    twelveHour = decimalToMinutes(twelveHour) + "am";
    return twelveHour;
  }
}

function fixFormatting(name) {
  let array = name.split(" ");
  if (array.length == 2) {
    let firstName = array[0].split("");
    let lastName = array[1].split("");
    firstName[0] = firstName[0].toUpperCase();
    lastName[0] = lastName[0].toUpperCase();
    return firstName.join("") + " " + lastName.join("");
  }
  else if (array.length == 1){
    let name = array[0].split("")
    name[0] = name[0].toUpperCase();
    return name.join("");
  }
  else {
    return name;
  }
}

// Example input: [11.0, 11.25, 11.5, 11.75, 12.0, 12.25, 12.5, 12.75, 13.0, 13.25, 13.5, 13.75]
function formatSlots(validStartTimes){
  let formattedString = "";
  for (let i = 0; i < validStartTimes.length; i++) {
      if (i === 0) {
        formattedString = formattedString + militaryToTwelveHour(validStartTimes[0]);
        formattedString = formattedString + "-";
      }
      if (validStartTimes[i + 1] - validStartTimes[i] != 0.25) {
        if (i !== validStartTimes.length - 1) {
          formattedString = formattedString + militaryToTwelveHour((validStartTimes[i] + 1));
          formattedString = formattedString + ", " + militaryToTwelveHour(validStartTimes[i + 1]) + "-";  
        }
        else {
          formattedString = formattedString + militaryToTwelveHour((validStartTimes[i] + 1));
        }
      }
  }
  return formattedString + " ET";
}

function doesRangeMatchMeeting(time, meetingTimes) {
  for (let i = 0; i < meetingTimes.length; i++) {
    for (let j = meetingTimes[i].startTime; j < meetingTimes[i].startTime + meetingTimes[i].lengthTime; j += 0.25) {
      if (time === j) {
        return true;
      }
    }
  }
  return false;
}

// Gets meeting start time and length in hours
function getMeetingTimes(daysEvents) {
  let meetingTimes = [];
  for(let i = 0; i < daysEvents.length; i++) {
    let meeting = {};
    meeting.startTime = formatDate(daysEvents[i].getStartTime());
    meeting.lengthTime = formatDate(daysEvents[i].getEndTime()) - formatDate(daysEvents[i].getStartTime());
    meetingTimes.push(meeting);
  }
  return meetingTimes;
}

// Takes {startTime: foo, lengthTime: bar} and defines a range of availability based on rules
function defineWorkHours(meetingTimes) {
  let range = {};
  // Latest work hours on an empty day
  let max = 19;
  // Earliest work hours on an empty day
  let min = 11;
  
  // Checking for actual meetings that fall outside the ideal range defined above
  for(let i = 0; i < meetingTimes.length; i++) {
    if (meetingTimes[i].startTime + meetingTimes[i].lengthTime > max) {
      max = meetingTimes[i].startTime + meetingTimes[i].lengthTime;
    }
    if (meetingTimes[i].startTime < min) {
      min = meetingTimes[i].startTime;
    }
  }
  
  // Adjusting working hours if meetings fall outside of the predefined range
  if (max >= 20) {
    min = max - 7;
  }
  if (min <= 10) {
    max = min + 7
  }
  range.max = max;
  range.min = min;
  return range;
}

// Finds where there is not overlap between range and meeting range for one day
function findOpenings(range, day) {
  let openings = [];
  for (let i = range.min; i < range.max; i += .25) {
    if (doesRangeMatchMeeting(i, getMeetingTimes(getOneDaysEvents(day).events)) === true) {
      continue;
    }
    else {
      openings.push(i);
    }     
  }
  return openings;
}

// Sample input: { month: 11.0, dayOfWeek: 3.0, date: 18.0, openings: [11.0, 11.25, 11.5, 11.75, 12.0, 12.25, 12.5, 12.75, 13.0, 13.25, 13.5, 13.75] }
function findHourSlots(calendarDay){
  let validStartTimes = [];
  for (let i = 0; i < calendarDay.openings.length; i++) {
    if (calendarDay.openings[i] + 0.25 == calendarDay.openings[i + 1]) {
      if (calendarDay.openings[i] + 0.50 == calendarDay.openings[i + 2]) {
        if (calendarDay.openings[i] + 0.75 == calendarDay.openings[i + 3]) {
          if (calendarDay.openings[i] + 1 == calendarDay.openings[i + 4]) {
            if (calendarDay.openings[i] + 1.25 == calendarDay.openings[i + 5]) {
              validStartTimes.push(calendarDay.openings[i]);
            }
          }
        }
      }
    }
  }
  return validStartTimes;
}

function getOneDaysEvents(daysFromToday) {
  let now = new Date();
  let day = new Date(now.getTime() + ((24 * daysFromToday) * 60 * 60 * 1000));
  let events = CalendarApp.getDefaultCalendar().getEventsForDay(day);
  return { events: events, day: day };
}

// Gets calendar days for next 14 days
function getCalendarDays() { 
  let calendarDays = [];
  // Number of days forward to look is defined here
  for (let i = 0; i < 14; i++) {
    let calendarDay = {};

    let events = getOneDaysEvents(i);
    calendarDay.dayOfWeek = events.day.getDay();
    calendarDay.month = events.day.getMonth();
    calendarDay.date = events.day.getDate();
    
    if (calendarDay.dayOfWeek == 0 || calendarDay.dayOfWeek == 6) {
      calendarDay.openings = [];
      continue;
    }
    let meetingTimes = getMeetingTimes(events.events);
    let workHours = defineWorkHours(meetingTimes);
    calendarDay.openings = findOpenings(workHours, i);
    calendarDay.validStartTimes = findHourSlots(calendarDay);
    delete calendarDay.openings;
    calendarDays.push(calendarDay);  
  }
  // I now have a great calendar object with which to build out the calendar GUI
  return calendarDays; 
}

// 
// End Availability Calculating
// ******************************************************************************* 









// *******************************************************************************
// Start Folder Duplicating functions
// 

let advisorFolder = getDestinationFolder();
let newClientFolder = advisorFolder.createFolder(studentName);
let contents = grabTemplate();

// Gets destination folder
function getDestinationFolder() {
  let folders = DriveApp.getFolderById(advisorFolderId).getFolders();
  let folderName = classYear === "Grad" ? "Grad": "Class" + classYear;
  while(folders.hasNext()) {
    let folder = folders.next();
    if(folder.getName() == folderName) {
      return folder;
    }
  }
}

// Gets template folder subfolders and base files
function grabTemplate() {
  let templateFolder = DriveApp.getFolderById("0B63jya8InpGKSEFZNGtWeFhNeEU");
  let baseFiles = templateFolder.getFiles();
  let baseFolders = templateFolder.getFolders();
  Logger.log(baseFolders)
  return ([baseFiles, baseFolders])
}

function copyFiles(fileiterator, destination) {
  while(fileiterator.hasNext()) {
    let file = fileiterator.next();
    file.makeCopy(file.getName(), destination);
  }
}

function copySubFolders(folderiterator) {
  while(folderiterator.hasNext()) {
    let folderToAdd = folderiterator.next();
    if(clp == false && folderToAdd.getName() == "CLP") {
      continue;
    }
    if(athlete == false && folderToAdd.getName() == "Athlete") {
      continue;
    }
    let addedFolder = newClientFolder.createFolder(folderToAdd.getName());
    let filesToAdd = folderToAdd.getFiles();
    while(filesToAdd.hasNext()) {
      let fileToAdd = filesToAdd.next();
      fileToAdd.makeCopy(fileToAdd.getName(), addedFolder);
    }
  }
}

function myFunction() {
  copyFiles(contents[0], newClientFolder);
  copySubFolders(contents[1]);
  
}

function setSharingGetLink(folder) {
  let folderId = folder.getId();
  folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
  return "https://drive.google.com/drive/folders/" + folderId + "?usp=sharing";
}

// 
// End Folder Duplicating functions
// ******************************************************************************* 