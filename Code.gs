// Folder globals
let advisorFolderId;
let classYear = "21";
let studentName = "Aaron Johnson";
let clp = false;
let athlete = false;

// Welcome email globals
let alreadyScheduled = false;
let orientationDate = "Monday, March 20th, from 7pm-830pm";
let orientationLocation = "bethel";
let clientEmails = [];

let advisorData = {};
let crmEmail = "";

function main(
  name,
  classYearInput,
  location,
  date,
  email,
  email2,
  email3,
  email4,
  advisor,
  crm
) {
  switch (advisor) {
    case "yoshi":
      advisorData.fullName = "Yoshi Akutsu";
      advisorData.position = "Lead Advisor";
      advisorData.phoneExtension = "709";
      advisorData.advisorEmail = "yoshi@incollegeplanning.com";
      advisorFolderId = "1Q_eXO663PGZHTxhkxVYmyAtgUw4A_o0T";
      //advisorData.advisorPicture = "https://incollegeplanning.com/wp-content/uploads/2020/12/Yoshi.jpg";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/5-wkPSaLXGJ9UMTc_CdDj1T4Oml7VjmBwMRKVNpe0fMAFvRLmckgnPG-VKhjqLyfbFdKY4zrqUvMF3VZPYaPrQv4QCa4cGIe2uE54we23FMwl47PzPJtZYOGQvrwhBot2VO7knWT-w=w2400";
      advisorData.advisorBio =
        "My name is Yoshi and I am from Columbus, Ohio. I went to the Ohio State University where I graduated with degrees in anthropology with a minor in biology. My time in college was a great chance for me to learn everything and anything I found interest in. That's how I landed in my major of anthropology; I was simply fascinated with the field. If you're not familiar with that, anthropology is the study of people, holistically. Part of the way through college I realized that I hadn't thought much about careers after college. I eventually found my way into education: I took internships in ESL in central Ohio and taught EFL in Japan after graduation. My favorite part of advising is helping students learn more about what is possible in the world of academics and careers. I am passionate about helping students feel confident and empowered with the choices they are making before heading off to college and that’s why I joined IN—the College Planning Experts Team. I look forward to being a part of this empowering journey with you all!";
      break;
    case "juleanna":
      advisorData.fullName = "Juleanna Smith";
      advisorData.position = "Lead Advisor";
      advisorData.phoneExtension = "710";
      advisorData.advisorEmail = "juleanna@incollegeplanning.com";
      advisorFolderId = "1ShNpERNw1XzgfsImtPE3-U9gPxSMbyNR";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/MD2kcDcV2W5iKnFiMt2jqu3ildNi9SupaLX_k3uFTB7B_1nWb8v_b67lMw1BMCHNsW5HGhxA4DERb7Zd_9o-9Tk-IfvVBKeRu1jcXn__9IIMzfEmCUeGFg9FRRUJQJgfD7y3uWn-aw=w2400";
      //advisorData.advisorPicture = "https://incollegeplanning.com/wp-content/uploads/2020/12/Juleanna.jpg";
      advisorData.advisorBio =
        "My name is Juleanna, and I’m originally from a town near Cleveland, Ohio. I attended Kent State University to pursue a degree in communication studies with a double minor in global and interpersonal communication. After leaving college and returning home to my mother, I embarked on a journey to explore my passions. I secured a few internships, worked part-time jobs, and even met with a career counselor. All of that self-reflection and job searching led me to join IN—the College Planning Experts Team. My goal is to help you and your family feel confident as you embark in your journey through navigating college and beyond. I look forward to working with you!";
      break;
    case "emma":
      advisorData.fullName = "Emma Mote";
      advisorData.position = "Lead Advisor";
      advisorData.phoneExtension = "708";
      advisorData.advisorEmail = "emma@incollegeplanning.com";
      advisorFolderId = "1_LtIxQK55IpfpucsvzyZbFiphMtS46L_";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/mI98EodHxbZTzna8NSAvAqRYvcfWsnRKU7PDk5yJlZL98sCdBVDV62hP0rKperuHYtfk-C8ScMoKlttwwr90PJsyVwVhx2UwGEF9WezmyEdq0QtIMKnj6u-Ro68uqbs78jjIGEIk1Q=w2400";
      //advisorData.advisorPicture = "https://incollegeplanning.com/wp-content/uploads/2020/12/Emma.jpg";
      advisorData.advisorBio =
        "My name is Emma Mote and I was born and raised in the Dayton, Ohio area. My freshman year of college, I packed my things and headed to central Ohio to attend Ohio State and I’ve called Columbus home ever since. When I left for college, I really had no idea why I was going, other than the fact that I knew “it was what I was supposed to do.” After a bit of exploring, I happened into a major called Strategic Communication, and I was really lucky to end up enjoying it. However, since then, I’ve realized how silly it is that we leave a decision as important and expensive as college up to luck. That’s why I’m so passionate about the work we do here at IN—the College Planning Experts. Together, we’ll be sure that you have all of the information you need in order to select the best possible school and major for you. I can’t wait to get started on this journey with you!";
      break;
    case "sara":
      advisorData.fullName = "Sara Kapaj";
      advisorData.position = "Lead Advisor";
      advisorData.phoneExtension = "711";
      advisorData.advisorEmail = "sara@incollegeplanning.com";
      advisorFolderId = "1a2_I73e_kEIVDf6sV9rvdKlaXXqKID3S";
      advisorData.advisorPicture =
        "https://incollegeplanning.com/wp-content/uploads/2020/12/Sara.jpg";
      advisorData.advisorBio = "";
      break;
    case "hannah":
      advisorData.fullName = "Hannah Laubach";
      advisorData.position = "Client Planning Advisor";
      advisorData.phoneExtension = "712";
      advisorData.advisorEmail = "hannah@incollegeplanning.com";
      advisorFolderId = "14OnpfGukM8e7BGso3YYIfSZFF55umQ2w";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/naZ_KxT5Td7HUYLPWvxBOUye628Dw_NvkOThGMG4i410JCaZ0iOSS2TShuk6Sdp1BHRBSKVG4FccSckyNm-NiTsiTUAOSFJ__SCLlaWvb1-GM_GRJjIFqRy9rjvP0WWpALKh0-aUYg=w2400";
      //advisorData.advisorPicture = "https://incollegeplanning.com/wp-content/uploads/2020/12/Hannah.jpg"
      advisorData.advisorBio =
        "I'm Hannah and I'm the advisor you'll be working with! I'm originally from the Akron area and I moved to Columbus to attend Ohio State. I was an English major with a minor in Professional Writing where I also worked in OSU's writing center. That's actually how I got started here at IN--The College Planning Experts! I came on to help rework the way we do our Writing Center and that allowed me to see how beneficial the rest of what we do is for our students. And now, I love helping everyone find their best path towards what they want to do, so I'm really excited to get started with you.";
      break;
    case "chris":
      advisorData.fullName = "Chris Prculovski";
      advisorData.position = "Client Planning Advisor";
      advisorData.phoneExtension = "716";
      advisorData.advisorEmail = "chris.prculovski@incollegeplanning.org";
      advisorFolderId = "1t9bth_QhCHps8JEpYsDB2D6GTLZQ4BnO";
      advisorData.advisorPicture =
        "https://incollegeplanning.com/wp-content/uploads/2020/12/Chris.jpg";
      advisorData.advisorBio = "";
      break;
    case "sian":
      advisorData.fullName = "Siân Lewis";
      advisorData.position = "Client Planning Advisor";
      advisorData.phoneExtension = "723";
      advisorData.advisorEmail = "sian@incollegeplanning.com";
      advisorFolderId = "15wyRPeDt9KTi1Yata0CMzSmTBxJMdLFq";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/UXsZpqXmY1mDxkL0spAqcp4OTG02hqd5rHtVHoqUWCn7PNHaTQoRsJKu6Lhh9t10OtfP3n9YGUvc1Ops1ovuPHOFIQ3YSgn1Ij5UNYwSUsozvlAdu-1lobs5Ey27kKChTQ1hVCEhqA=w2400";
      //advisorData.advisorPicture = "https://incollegeplanning.com/wp-content/uploads/2020/10/sian.jpg";
      advisorData.advisorBio =
        "My name is Siân (pronounced almost like “sharn”), and I’m originally from England. I moved here at 18 years old to attend Davidson College, which is a small Liberal Arts school in North Carolina. All of my family is still across the pond, so I try to get back there as often as I can! I graduated with degrees in Political Science and Music, and I loved my college experience. After working with the Admissions Team at Davidson however, I realized that a lot of students don’t really have a plan for after they graduate. That’s why I joined IN—the College Planning Experts Team. I am really excited to meet you all, and to start this journey with you. ";
      break;
    case "eric":
      advisorData.fullName = "Eric Martinez";
      advisorData.position = "Client Planning Advisor";
      advisorData.phoneExtension = "718";
      advisorData.advisorEmail = "eric@incollegeplanning.com";
      advisorFolderId = "1FNqq4KLUVSQAv11QPetJnAX4dgChDXQn";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/jGnyRZj8r3OX915Px8TfzcIDZZSxX6q-JGaUGjG-ew3WGknqDiiYhjWAxM0eeUyAabrvnwRoGyEuhgvbm13bSqYdcb5LZX0HZSkco87HGc9HerlEAve3y9fmyX2O9ScviiJOtyKUXA=w2400";
      //advisorData.advisorPicture = "https://incollegeplanning.com/wp-content/uploads/2020/12/Eric.jpg";
      advisorData.advisorBio =
        "My name is Eric Martinez and even though I’m originally from Texas, I’ve been proud to call Ohio my home for over the last 17 years. I would best describe my college path as non-traditional. I first attended Kent State University in hopes of one day becoming a mental health therapist, but as time went on I became more indecisive of what career I wanted to pursue. This ultimately led to me taking some time off school. Eventually, I returned to pursue my psychology degree which I ultimately completed at Kent State. Throughout that time, I gradually gained a passion for student development and academic success. I now channel those passions as a college planning advisor here at IN—The College Planning experts. I’m excited to work with everyone and guide you all through this process!";
      break;
    case "alecea":
      advisorData.fullName = "Alecea Howell";
      advisorData.position = "Client Planning Advisor";
      advisorData.phoneExtension = "721";
      advisorData.advisorEmail = "alecea@incollegeplanning.com";
      advisorFolderId = "1lpbYG4aaOEt9q1yFt8i38cHMdmGjCuGT";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/lN9_KlGcglUtMgCG11FqVdh28AtLmX_D-32ZpE5T-leHS0aXXcBobWeLAYovN3Op0PixDH0EDcpIaCfq_zRAsUkMUCotWfDBvRVKwuCmb4Few4vdxUfMD6TZXzDJ1eVf0KTI6BJ-8Q=w2400";
      //advisorData.advisorPicture = "https://incollegeplanning.com/wp-content/uploads/2020/12/Alecea.jpg";
      advisorData.advisorBio =
        "My name is Alecea and I was born and raised here in Columbus. I went to a small college down in Southern Ohio called Shawnee State University where I graduated with degrees in Psychology and Business Management, and I loved every part of my college experience. While there, I became a resident assistant and took on many leadership roles within my sorority, both things that lead to my love of engaging with and helping other students. Through these roles, I met a lot of students who were struggling with identifying the right path for them, even though they were already in college. Seeing these struggles and having experienced them myself, I became even more passionate about wanting to help students feel confident and empowered with the choices they were making before heading off to college and that’s why I joined IN—the College Planning Experts Team. I look forward to being a part of this empowering journey with you all!";
      break;
    case "sam":
      advisorData.fullName = "Sam Rubinoski";
      advisorData.position = "Client Planning Advisor";
      advisorData.phoneExtension = "720";
      advisorData.advisorEmail = "samantha@incollegeplanning.com";
      advisorFolderId = "11wO-QJ6Q3jYFrEFq6180z8fpzyvlY25j";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/qF_2yxESHrFKJv00T2YDCaOvRJKt_S0ApqWAyJvjCWh9NVNrw6h7N3mVscj61BDQp8GHdxO72-4x2f-Byv4N6OT9IWJx3DPC7mMc33B29kL6JqJKGfODLCqxSDFCYLIfFowM9tPeRQ=w2400";
      //advisorData.advisorPicture = "https://incollegeplanning.com/wp-content/uploads/2020/12/Samantha.jpg";
      advisorData.advisorBio =
        "My name is Sam, and I was born and raised in Columbus, Ohio. After graduating from The Ohio State University, I spent years in pursuit of gaining experience with both adolescents and people from diverse backgrounds. From time spent teaching and case managing to volunteering in rural villages, I realized my passion was in helping others discover their own. Being part of IN—the College Planning Experts Team is such a fulfilling role because I'm able to help students make intentional choices in pursuit of their goals. I'm so excited to get to know you all, and figure out a future that you can be both excited and confident in!";
      break;
    case "reilly":
      advisorData.fullName = "Reilly Grealis";
      advisorData.position = "Client Planning Advisor";
      advisorData.phoneExtension = "719";
      advisorData.advisorEmail = "reilly@incollegeplanning.com";
      advisorFolderId = "1e8cZb-wiJ2lZ6AP2FEKQIJjqDxw0bsUX";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/AsPIv3mKd8p4RSniHeA15SUXz90s-Yg046QxtvC89Wk9-72MUhvd4MQtQbGRCPwy4SyJQqhSNAjFio9603JJp9vYqQkBVbYCEZBI743i-SER01l75jAQ4Web8-s6LkqngknQmgEe6A=w2400";
      //advisorData.advisorPicture = "https://incollegeplanning.com/wp-content/uploads/2020/12/Reilly.jpg";
      advisorData.advisorBio =
        "My name is Reilly and I'm from Strongsville, Ohio (near Cleveland). I attended Ohio State University and got a Bachelor of Arts in English Literature. I've always loved to read and write stories, which is why I pursued English. Although I loved my degree and gaining that knowledge, I definitely wish I had planned better for what came next. That's why I started working at IN—The College Planning Experts: to help others plan their next! I'm also a Writing Center advisor and I'm very thankful I still get to use my degree. I can't wait to help you figure out your career and educational path!";
      break;
    case "alex":
      advisorData.fullName = "Alex Horn";
      advisorData.position = "College Planning Advisor";
      advisorData.phoneExtension = "711";
      advisorData.advisorEmail = "alex@incollegeplanning.com";
      advisorFolderId = "1CNdMFFjCxAk_RVs6TuMUBJIfQ73Tm1vW";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/kEK5MfIiMjY8jmzKPga8duGDYTICsmjdQ5bPn4Tme0U8ZOeocFltBeWnIia59-OS7gcZhSwlWQeiTh1RdDaHYES_aNEWgVo7VJlLz38d6JMF18-mvS-do0sJ4b_w_nxaGEz1-6TBAw=w2400";
      advisorData.advisorBio =
        "My name is Alex Horn and I graduated from George Mason University with a degree in Government and the University of Oklahoma with a master’s degree in Higher Education. My passion for mentorship and youth development comes from my experience working as a collegiate recreational sports professional for 7 years across 3 different universities. Throughout the opportunities I had to interact with students during that time, I regularly found myself speaking with them about anxiety related to their finances, career, or educational programs. In having those discussions, I realized that I wanted to find a way to help students improve their outcomes before and after college. I’m excited to fulfill my role as a college academic advisor with IN and the families that trust us with guiding their child’s future. The college selection process is one of the most exciting and emotional times for any family, and I look forward to being there for you as we discover the next step on your child’s journey.";
      break;
    case "drake":
      advisorData.fullName = "Drake Hankins";
      advisorData.position = "College Planning Advisor";
      advisorData.phoneExtension = "702";
      advisorData.advisorEmail = "drake@incollegeplanning.com";
      advisorFolderId = "1qKG4w9oaMu405gRNt4xH4f-kxTz0Psra";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/z27FYPvYGBafs8ckaHHI_0ZYRdq7HDAUj6Z9bMclSHXK8x4zC50HmCQcRHRrkKsytqzZiCZRlMXAOxnszCouk4SbB2B2ozLat_GaBj2IDnsoeoLK88WfwsWOYlu-YW4qFrarJ05ibg=w2400";
      advisorData.advisorBio =
        "As a first-generation college student, I struggled with the college process and all the details that came along with it. After I completed my bachelor’s degree at Youngstown State University in General Studies, I went to graduate school at Ohio University to study the development of college students and how I would be able to help those students transition to college. IN - The College Planning Experts have given me the opportunity to help high school students before they start their college career and to help guide them in the direction that is meant for them. Through this position, I will use my passions for helping people and to help students transition into their biggest decision in their life thus far.";
      break;
    case "sarah":
      advisorData.fullName = "Sarah Cook";
      advisorData.position = "College Planning Advisor";
      advisorData.phoneExtension = "700";
      advisorData.advisorEmail = "sarah@incollegeplanning.com";
      advisorFolderId = "1BABoVEs05KXkXDpgYuB-0z502VUhfUFz";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/5AopVyAORoq_lRRAwwFN8C4teSorCYcYKrUB3Xrq8qNizc6U0fZawWHfQb2WJF1QqiC9BDW_iOVRqV-LEEHgjukN3mRe731nR9p1hxzahoq4CNt-vD30tyFXKT1lbYr45OneX_U_oQ=w2400";
      advisorData.advisorBio =
        "My name is Sarah Cook and I received my bachelor's degree in Human Development and Family Studies from Bowling Green State University. Upon graduating from high school, my goal was to become a guidance counselor. My academic advisor at BGSU recommended the HDFS major, and it sounded like a great fit. What I didn't know, however, were any of the specific outcomes of this major; average starting salaries and jobs that would be available with only a bachelor's degree were never part of that conversation. After graduating, I began working at a non-profit organization with young students, which I loved, but I knew something was missing. After hearing about the mission of IN—The College Planning Experts, I knew it was something I and so many other students could have benefited from. I am so excited to get to know you and support you through the crazy process that is college planning, so you feel informed and empowered to make the right decisions for you!";
      break;
    case "lydia":
      advisorData.fullName = "Lydia Crannell";
      advisorData.position = "College Planning Advisor";
      advisorData.phoneExtension = "713";
      advisorData.advisorEmail = "lydia@incollegeplanning.com";
      advisorFolderId = "12jA9QS9xEQRRm611TSF2Xl7z615WQvm5";
      advisorData.advisorPicture =
        "https://lh3.googleusercontent.com/WB26WlrYsTSoP3VGKG73W_KzksN_PNxBWC43Q-Doi5-yyXAKK2lVLiL-fhmB0iQtKzoAEiF8mjlQyMDLcWjtSDP89lqqRJVSgdt_UheEnz164KId03pIKp1CLSsDuJevcAGNbTF9xA=w2400";
      advisorData.advisorBio =
        "My name is Lydia and I am incredibly excited to work with you and your support system as we discover your best post-secondary path. Originally from Texas, I moved to Ohio to attend Otterbein University despite not having a clear idea of future careers or a set financial plan for success. Thankfully, I loved my school and majors (English & Music) and all of the opportunities the programs afforded me. One of my favorite experiences was working within the Writing Center-- something that encouraged me to continue teaching, first with Duke TIP summer programs and then eventually moving to South Korea as an ESL elementary teacher. Being a part of Inspireducation allows me to use the communication and teaching skills I’ve honed over the years as well as share my passion for equal access among educational resources. I am thrilled to see Inspireducation continue to grow and reach wonderful members of our community!";
      break;
    default:
      break;
  }

  // advisorData.advisorBio = splitBio(advisorData.advisorBio);

  switch (crm) {
    case "aaron":
      crmEmail = "aaron@incollegeplanning.com";
      break;
    case "emma":
      crmEmail = "emma@incollegeplanning.com";
      break;
    case "richard":
      crmEmail = "richard@incollegeplanning.com";
      break;
    case "heather":
      crmEmail = "heather@incollegeplanning.com";
      break;
    //case "melissa":
    //  crmEmail = "melissa@incollegeplanning.com";
    //  break;
    case "alex":
      crmEmail = "alexandra@incollegeplanning.com";
    default:
      break;
  }

  studentName = name;
  classYear = classYearInput;
  orientationLocation = location;
  orientationDate = date;
  alreadyScheduled = date === "" ? false : true;
  if (email.length > 0) {
    clientEmails.push(email);
  }
  if (email2.length > 0) {
    clientEmails.push(email2);
  }
  if (email3.length > 0) {
    clientEmails.push(email3);
  }
  if (email4.length > 0) {
    clientEmails.push(email4);
  }

  let sharingLink = folderFunction();
  draftWelcomeEmail(sharingLink);
}

// Allows separate html pages to be included
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Initializes web app
function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

// *******************************************************************************
// START EMAIL WRITING FUNCTIONS
//
function draftWelcomeEmail(sharingLink) {
  let ccString = "aaron@incollegeplanning.com, emma@incollegeplanning.com";
  // Defaults all CRM emails to Heather
  crmEmail = "heather@incollegeplanning.com";
  if (crmEmail.length > 0 && crmEmail != "aaron@incollegeplanning.com") {
    if (crmEmail == "richard@incollegeplanning.com") {
      ccString = ccString.concat("," + "alexandra@incollegeplanning.com");
    }
    ccString = ccString.concat("," + crmEmail);
  }
  switch (advisorData.fullName) {
    case "Alecea Howell":
      ccString = ccString.concat("," + "yoshi@incollegeplanning.com");
      break;
    case "Siân Lewis":
      ccString = ccString.concat("," + "yoshi@incollegeplanning.com");
      break;
    case "Eric Martinez":
      ccString = ccString.concat("," + "juleanna@incollegeplanning.com");
      break;
    case "Reilly Grealis":
      ccString = ccString.concat("," + "juleanna@incollegeplanning.com");
      break;
    case "Sam Rubinoski":
      ccString = ccString.concat("," + "juleanna@incollegeplanning.com");
      break;
    case "Alex Horn":
      ccString = ccString.concat("," + "juleanna@incollegeplanning.com");
      break;
    case "Sarah Cook":
      ccString = ccString.concat("," + "juleanna@incollegeplanning.com");
      break;
    case "Drake Hankins":
      ccString = ccString.concat("," + "yoshi@incollegeplanning.com");
      break;
    case "Lydia Crannell":
      ccString = ccString.concat("," + "yoshi@incollegeplanning.com");
      break;
    default:
      break;
  }

  let fromAddress = getFromEmail();

  if (alreadyScheduled === true) {
    let template = HtmlService.createTemplateFromFile("new-welcome-email");
    template.name = studentName;
    let firstName = studentName.split(" ")[0];
    template.firstName = firstName;

    template.advisor = advisorData;
    template.sharingLink = sharingLink;
    template.date = orientationDate;

    let location = getLocationalAvailability(orientationLocation);
    template.location = location;

    let message = template.evaluate().getContent();
    GmailApp.createDraft(
      clientEmails.toString(),
      "Welcome to IN — The College Planning Experts!",
      message,
      { htmlBody: message, cc: ccString, from: fromAddress }
    );
  } else {
    let availability = getAvailability(getCalendarDays());
    let template = HtmlService.createTemplateFromFile(
      "new-welcome-email-no-date"
    );
    template.name = studentName;
    let firstName = studentName.split(" ")[0];
    template.firstName = firstName;

    let location = getLocationalAvailability(orientationLocation);
    template.location = location;

    template.advisor = advisorData;
    template.sharingLink = sharingLink;
    template.availability = availability;

    let message = template.evaluate().getContent();
    GmailApp.createDraft(
      clientEmails.toString(),
      "Welcome to IN — The College Planning Experts!",
      message,
      { htmlBody: message, cc: ccString, from: fromAddress }
    );
  }
}

function getFromEmail() {
  let aliases = GmailApp.getAliases();
  for (let i = 0; i < aliases.length; i++) {
    if (aliases[i].includes("incoll")) {
      return aliases[i];
    }
  }
}

function splitBio(bio) {
  let array = bio.split("");
  let half = Math.ceil(array.length / 2);
  while (array[half] != " ") {
    half += 1;
  }
  let firstHalf = array.splice(0, half);
  let secondHalf = array.splice(-half);
  let bio1 = firstHalf.join("");
  let bio2 = secondHalf.join("");
  return [bio1, bio2];
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
  if (lowered === "bexley") {
    return "at our office – 2511 E. Main St";
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

    let oneDay =
      month +
      "/" +
      date +
      " (" +
      getDayOfWeekName(dayOfWeek) +
      "): " +
      formattedSlots +
      "\n";
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
  if (decimal == 0.5) return Math.floor(number) + ":30";
  if (decimal == 0.25) return Math.floor(number) + ":15";
  if (decimal == 0.75) return Math.floor(number) + ":45";
}

function militaryToTwelveHour(militaryHour) {
  Logger.log(militaryHour);
  if (militaryHour >= 12 && militaryHour < 13) {
    let twelveHour = militaryHour;
    twelveHour = decimalToMinutes(twelveHour) + "pm";
    return twelveHour;
  } else if (militaryHour >= 13) {
    let twelveHour = militaryHour - 12;
    twelveHour = decimalToMinutes(twelveHour) + "pm";
    return twelveHour;
  } else {
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
  } else if (array.length == 1) {
    let name = array[0].split("");
    name[0] = name[0].toUpperCase();
    return name.join("");
  } else {
    return name;
  }
}

// Example input: [11.0, 11.25, 11.5, 11.75, 12.0, 12.25, 12.5, 12.75, 13.0, 13.25, 13.5, 13.75]
function formatSlots(validStartTimes) {
  let formattedString = "";
  for (let i = 0; i < validStartTimes.length; i++) {
    if (i === 0) {
      formattedString =
        formattedString + militaryToTwelveHour(validStartTimes[0]);
      formattedString = formattedString + "-";
    }
    if (validStartTimes[i + 1] - validStartTimes[i] != 0.25) {
      if (i !== validStartTimes.length - 1) {
        formattedString =
          formattedString + militaryToTwelveHour(validStartTimes[i] + 1);
        formattedString =
          formattedString +
          ", " +
          militaryToTwelveHour(validStartTimes[i + 1]) +
          "-";
      } else {
        formattedString =
          formattedString + militaryToTwelveHour(validStartTimes[i] + 1);
      }
    }
  }
  return formattedString + " ET";
}

function doesRangeMatchMeeting(time, meetingTimes) {
  for (let i = 0; i < meetingTimes.length; i++) {
    for (
      let j = meetingTimes[i].startTime;
      j < meetingTimes[i].startTime + meetingTimes[i].lengthTime;
      j += 0.25
    ) {
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
  for (let i = 0; i < daysEvents.length; i++) {
    let meeting = {};
    meeting.startTime = formatDate(daysEvents[i].getStartTime());
    meeting.lengthTime =
      formatDate(daysEvents[i].getEndTime()) -
      formatDate(daysEvents[i].getStartTime());
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
  for (let i = 0; i < meetingTimes.length; i++) {
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
    max = min + 7;
  }
  range.max = max;
  range.min = min;
  return range;
}

// Finds where there is not overlap between range and meeting range for one day
function findOpenings(range, day) {
  let openings = [];
  for (let i = range.min; i < range.max; i += 0.25) {
    if (
      doesRangeMatchMeeting(
        i,
        getMeetingTimes(getOneDaysEvents(day).events)
      ) === true
    ) {
      continue;
    } else {
      openings.push(i);
    }
  }
  return openings;
}

// Sample input: { month: 11.0, dayOfWeek: 3.0, date: 18.0, openings: [11.0, 11.25, 11.5, 11.75, 12.0, 12.25, 12.5, 12.75, 13.0, 13.25, 13.5, 13.75] }
function findHourSlots(calendarDay) {
  let validStartTimes = [];
  for (let i = 0; i < calendarDay.openings.length; i++) {
    if (calendarDay.openings[i] + 0.25 == calendarDay.openings[i + 1]) {
      if (calendarDay.openings[i] + 0.5 == calendarDay.openings[i + 2]) {
        if (calendarDay.openings[i] + 0.75 == calendarDay.openings[i + 3]) {
          validStartTimes.push(calendarDay.openings[i]);
        }
      }
    }
  }
  return validStartTimes;
}

function getOneDaysEvents(daysFromToday) {
  let now = new Date();
  let day = new Date(now.getTime() + 24 * daysFromToday * 60 * 60 * 1000);
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

function folderFunction() {
  let advisorFolder = getDestinationFolder();
  let newClientFolder = advisorFolder.createFolder(studentName);
  let contents = grabTemplate();

  // Gets destination folder
  function getDestinationFolder() {
    let folders = DriveApp.getFolderById(advisorFolderId).getFolders();
    let folderName = classYear === "Grad" ? "Grad" : "Class" + classYear;
    while (folders.hasNext()) {
      let folder = folders.next();
      if (folder.getName() == folderName) {
        return folder;
      }
    }
  }

  // Gets template folder subfolders and base files
  function grabTemplate() {
    let templateFolder = DriveApp.getFolderById("0B63jya8InpGKSEFZNGtWeFhNeEU");
    let baseFiles = templateFolder.getFiles();
    let baseFolders = templateFolder.getFolders();
    Logger.log(baseFolders);
    return [baseFiles, baseFolders];
  }

  function copyFiles(fileiterator, destination) {
    while (fileiterator.hasNext()) {
      let file = fileiterator.next();
      file.makeCopy(file.getName(), destination);
    }
  }

  function copySubFolders(folderiterator) {
    while (folderiterator.hasNext()) {
      let folderToAdd = folderiterator.next();
      if (clp == false && folderToAdd.getName() == "CLP") {
        continue;
      }
      if (athlete == false && folderToAdd.getName() == "Athlete") {
        continue;
      }
      let addedFolder = newClientFolder.createFolder(folderToAdd.getName());
      let filesToAdd = folderToAdd.getFiles();
      while (filesToAdd.hasNext()) {
        let fileToAdd = filesToAdd.next();
        fileToAdd.makeCopy(fileToAdd.getName(), addedFolder);
      }
    }
  }

  function setSharingGetLink(folder) {
    let folderId = folder.getId();
    folder.setSharing(
      DriveApp.Access.ANYONE_WITH_LINK,
      DriveApp.Permission.EDIT
    );
    return (
      "https://drive.google.com/drive/folders/" + folderId + "?usp=sharing"
    );
  }

  copyFiles(contents[0], newClientFolder);
  copySubFolders(contents[1]);
  return setSharingGetLink(newClientFolder);
}

//
// End Folder Duplicating functions
// *******************************************************************************
