/* ==========================================================================
   Cornell DEBUT — Main JavaScript
   ==========================================================================

   Functions:
   - showPage(name)    — switches between the 5 pages
   - filterTeam(team)  — filters the members grid by subteam
   - toggleFaq(el)     — opens/closes a FAQ accordion item
   ========================================================================== */


/**
 * showPage
 * Hides all .page divs and shows the one matching `name`.
 * Also updates the active state on nav links and scrolls to top.
 *
 * @param {string} name — one of: 'home', 'about', 'members', 'apply', 'sponsors'
 */
function showPage(name) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p =>
    p.classList.remove('active')
  );

  // Show the target page
  document.getElementById('page-' + name).classList.add('active');

  // Update nav highlight based on onclick target
  document.querySelectorAll('.nav-link').forEach(link => {
    const target = link.getAttribute('onclick');
    link.classList.toggle('active', target.includes(name));
  });

  // Scroll to top
  window.scrollTo(0, 0);
}

/**
 * filterTeam
 * Shows only the subteam section matching `team`, or all if 'all'.
 * Updates the active filter button.
 *
 * @param {string} team — data-team attribute value, or 'all'
 * @param {HTMLElement} btn — the clicked filter button
 */
function filterTeam(team, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide subteam sections
  document.querySelectorAll('.subteam-section').forEach(section => {
    section.style.display =
      (team === 'all' || section.dataset.team === team) ? 'block' : 'none';
  });
}


/**
 * toggleFaq
 * Toggles the open/closed state of a FAQ accordion item.
 *
 * @param {HTMLElement} questionEl — the .faq-q element that was clicked
 */
function toggleFaq(questionEl) {
  questionEl.parentElement.classList.toggle('open');
}