// Dark Mode Toggle
const darkModeToggle = document.createElement('div');
darkModeToggle.id = 'dark-mode-toggle';
darkModeToggle.innerHTML = `
  <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
  </svg>
  <svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2"/>
    <path d="M12 21v2"/>
    <path d="m4.22 4.22 1.42 1.42"/>
    <path d="m18.36 18.36 1.42 1.42"/>
    <path d="M1 12h2"/>
    <path d="M21 12h2"/>
    <path d="m4.22 19.78 1.42-1.42"/>
    <path d="m18.36 5.64 1.42-1.42"/>
  </svg>
`;

// Add CSS for positioning and styling
const darkModeStyle = document.createElement('style');
darkModeStyle.textContent = `
  #dark-mode-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1000;
  }
  #dark-mode-toggle svg {
    width: 30px;
    height: 30px;
    stroke: #333;
  }
  body.dark-mode #moon-icon {
    display: none;
  }
  body:not(.dark-mode) #sun-icon {
    display: none;
  }
`;

function initDarkMode() {
  const savedMode = localStorage.getItem('dark-mode');
  if (savedMode === 'true') {
    document.body.classList.add('dark-mode');
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

document.addEventListener('DOMContentLoaded', () => {
  document.head.appendChild(darkModeStyle);
  document.body.appendChild(darkModeToggle);
  
  initDarkMode();
  darkModeToggle.addEventListener('click', toggleDarkMode);
});

// Smooth Scrolling
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// Skill Hover Effects
function skillHoverEffects() {
  const skills = document.querySelectorAll('.details-container article');
  skills.forEach(skill => {
    skill.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
    skill.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  });
}

// Project Hover Effects
function projectHoverEffects() {
  const projects = document.querySelectorAll('.details-container.color-container');
  projects.forEach(project => {
    project.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    project.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
}

// Initialize all interactive features
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  smoothScroll();
  skillHoverEffects();
  projectHoverEffects();
  // fetchUniqueVisitors();
  // Dark Mode Toggle Button (add to your HTML)
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
});


// document.addEventListener('DOMContentLoaded', function() {
//   let count = localStorage.getItem('visitorCount');
//   if (count === null) {
//     count = 1;
//   } else {
//     count = parseInt(count) + 1;
//   }
//   localStorage.setItem('visitorCount', count);
//   document.getElementById('count').innerText = count;
// });


// async function fetchUniqueVisitors() {
//   try {
//     const response = await fetch('/api/visitors');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     document.getElementById('count').innerText = data.uniqueVisitors;
//   } catch (error) {
//     console.error('Error fetching unique visitors:', error);
//   }
// }



// async function fetchUniqueVisitors() {
//   const zoneId = 'd562af0e2bcf193e031b9edba4b637a6'; // Replace with your Cloudflare Zone ID
//   const apiToken = 'AO_LpYuTMolUtBjHRaipGz-hC_Tpdf2gk1HCVUv8'; // Replace with your Cloudflare API token

//   const query = `
//     query {
//       viewer {
//         zones(filter: { zoneTag: "${zoneId}" }) {
//           httpRequests1dGroups(
//             limit: 1,
//             filter: { date: "${new Date().toISOString().split('T')[0]}" }
//           ) {
//             uniq {
//               uniques
//             }
//           }
//         }
//       }
//     }
//   `;

//   try {
//     const response = await fetch('https://api.cloudflare.com/client/v4/zones/{zoneId}/analytics/report', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiToken}`,
//       },
//       body: JSON.stringify({ query }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     const uniqueVisitors = data.data.viewer.zones[0].httpRequests1dGroups[0].uniq.uniques;
    
//     // Update the visitor counter in your HTML
//     document.getElementById('count').innerText = uniqueVisitors;
//   } catch (error) {
//     console.error('Error fetching unique visitors:', error);
//   }
// }

// // Call this function when the page loads
// document.addEventListener('DOMContentLoaded', fetchUniqueVisitors);