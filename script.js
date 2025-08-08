document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.clickedin');

  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('clicked');
    });
  });
});



/* ...........Project Section.............*/

   const tabsContainer = document.getElementById("projectTabs");
  const titleEl = document.getElementById("projectTitle");
  const descEl = document.getElementById("projectDesc");
  const imgEl = document.getElementById("projectImage");
  const githubBtn = document.getElementById("githubBtn");
  const previewBtn = document.getElementById("previewBtn");

  function renderTabs() {
    projects.forEach((project, index) => {
      const btn = document.createElement("button");
      btn.textContent = project.name;
      btn.onclick = () => changeProject(index);
      if (index === 0) btn.classList.add("active");
      tabsContainer.appendChild(btn);
    });
  }

  function changeProject(index) {
    const buttons = tabsContainer.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.remove("active"));
    buttons[index].classList.add("active");

    titleEl.textContent = projects[index].name;
    descEl.textContent = projects[index].desc;
    githubBtn.href = projects[index].github;
    previewBtn.href = projects[index].preview;

    imgEl.style.opacity = 0;
    setTimeout(() => {
      imgEl.src = projects[index].img;
      imgEl.style.opacity = 1;
    }, 200);
  }
function scrollTabs(amount) {
  const tabs = document.getElementById('projectTabs');
  tabs.scrollBy({ left: amount, behavior: 'smooth' });
}
document.addEventListener('keydown', (e) => {
  const tabs = document.getElementById('projectTabs');
  if (!tabs) return;
  if (e.key === 'ArrowLeft') tabs.scrollBy({ left: -150, behavior: 'smooth' });
  if (e.key === 'ArrowRight') tabs.scrollBy({ left: 150, behavior: 'smooth' });
});

  renderTabs();
  changeProject(0);