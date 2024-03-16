const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

let showMemberCount = 1;
function showMembers() {
  let homeIcon = document.getElementById("members-containers");

  if (showMemberCount % 2 == 1) {
    homeIcon.style.display = "flex";
  } else {
    homeIcon.style.display = "none";
  }

  showMemberCount++;
}

let nisidiniCount = 1;
let namruthaCount = 1;
let rukaiyaCount = 1;
let sevindaCount = 1;

function show(count, memberTasks) {
  if (count % 2 == 1) {
    memberTasks.style.display = "block";
  } else {
    memberTasks.style.display = "none";
  }
}

function showTasks(specificId) {
  let memberTasks = document.getElementById(specificId);

  if (specificId == "nisidini-tasks") {
    show(nisidiniCount, memberTasks);
    nisidiniCount++;
  } else if (specificId == "namrutha-tasks") {
    show(namruthaCount, memberTasks);
    namruthaCount++;
  } else if (specificId == "rukaiya-tasks") {
    show(rukaiyaCount, memberTasks);
    rukaiyaCount++;
  } else if (specificId == "sevinda-tasks") {
    show(sevindaCount, memberTasks);
    sevindaCount++;
  }
}
