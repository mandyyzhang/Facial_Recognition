let issuesElement = document.getElementById('issues');
//-------------------------------------------------
let allIssues = [
  {
    "name": "「Security」",
    "description": "Your facial data can be collected and stored, often without your permission. It’s possible hackers could access and steal that data. Facial recognition technology is becoming more widespread. That means your facial signature could end up in a lot of places. You probably won’t know who has access to it.",
    "picture": "security.jpg",
    "article" : "https://www.forbes.com/sites/forbestechcouncil/2020/06/23/facial-recognition-systems-security/?sh=874c6b723240"
  },
  {
    "name": "「Bias/Racism」",
    "description": "It is not a secret that facial recognition has a preference towards fair skin people as the majority of programmers are white cis male. This may create a more prejudice system against people of color.",
    "picture": "bias.jpg",
    "article": "http://sitn.hms.harvard.edu/flash/2020/racial-discrimination-in-face-recognition-technology/"
  },
  {
    "name": "「Ownership」",
    "description": "You own your face — the one atop your neck — but your digital images are different. You may have given up your right to ownership when you signed up on a social media network. Or maybe someone tracks down images of you online and sells that data.",
    "picture": "ownership.gif",
    "article": "https://www.technologyreview.com/2020/06/12/1003482/amazon-stopped-selling-police-face-recognition-fight/"
  },
  {
    "name": "「Safety」",
    "description": "Facial recognition could lead to online harassment and stalking. How? For example, someone takes your picture on a subway or some other public place and uses facial recognition software to find out exactly who you are.",
    "picture": "safety.jpeg",
    "article":"https://www.good.is/articles/facial-recognition-app-enables-next-level-web-stalking"
  },
  {
    "name": "「Mistaken Identity」",
    "description": "Say, for instance, law enforcement uses facial recognition to try to identify someone who robbed a corner store. Facial recognition systems may not be 100 percent accurate. What if the police think the suspect is you?",
    "picture": "identity.webp",
    "article": "https://www.nytimes.com/2020/06/24/technology/facial-recognition-arrest.html"
  },
  {
    "name": "「Basic Freedoms」",
    "description": "Government agencies and others could have the ability to track you. What you do and where you go might no longer be private. It could become impossible to remain anonymous.",
    "picture": "freedom.jpg",
    "article": "https://www.aclu.org/blog/privacy-technology/surveillance-technologies/federal-court-sounds-alarm-privacy-harms-face"
  }
]
//-------------------------------------------------
for (var i = 0; i < allIssues.length; i++) {
  createElementProper(allIssues[i]);
}
//-------------------------------------------------
function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let newContentName = document.createElement("H2");
  newContentName.classList.add("name");
  newContentName.innerText = incomingJSON['name'];
  newContentElement.appendChild(newContentName);

  let article = document.createElement("A");
  article.href = incomingJSON['article'];
  newContentElement.appendChild(article);

  let newImage = document.createElement("IMG");
  newImage.classList.add("image");
  newImage.src = incomingJSON['picture'];
  article.appendChild(newImage);

  let newContentDes = document.createElement("P");
  newContentDes.classList.add("descript");
  newContentDes.innerText = incomingJSON['description'];
  newContentElement.appendChild(newContentDes);


  issuesElement.appendChild(newContentElement);

};
