// Denatra Antar
// ITMD 441-02 Undergrad student

// 1. Change the hero main headline
const heroHeading = document.querySelector('#hero h1');
if (heroHeading) {
  heroHeading.textContent = "Uplift Your Brand with Stellar Marketing";
}

// 2. Changing only "thrive" and "excel" bold and italic
const heroSubText = document.querySelector('#hero p');
if (heroSubText) {
  heroSubText.innerHTML = `Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive</em></strong> and <strong><em>excel</em></strong>.`;
}

// 3. Change the hero section background image
const heroSection = document.querySelector('#hero');
if (heroSection) {
  heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";
}

// 4. Change nav background to match background
const nav = document.querySelector('header'); // nav is inside header
const footer = document.querySelector('footer');
if (nav && footer) {
  const footerBg = getComputedStyle(footer).backgroundColor;
  nav.style.backgroundColor = footerBg;
}

// 5. Remove the "Get Started" CTA button
const ctaBtn = document.querySelector('#hero a');
if (ctaBtn) {
  ctaBtn.remove();
}

// 6. Center-align the headings for Services, Solutions, and Contact sections
['services', 'solutions', 'contact'].forEach(id => {
  const heading = document.querySelector(`#${id} h2`);
  if (heading) {
    heading.style.textAlign = 'center';
    heading.style.marginLeft = 'auto';
    heading.style.marginRight = 'auto';
    heading.style.display = 'block';
  }
});

// 7. Change all service icons to green (#47C714)
document.querySelectorAll('#services .material-symbols-outlined').forEach(icon => {
  icon.style.color = '#47C714';
});

// 8. Change digital marketing icon to 'ads_click'
const digitalIcon = document.querySelector('#services .material-symbols-outlined');
if (digitalIcon) {
  digitalIcon.textContent = 'ads_click';
}

// 9. Make tiles in the #solutions section 4 across at >= 1024px
const solutionsGrid = document.querySelector('#solutions .grid');
if (solutionsGrid) {
  const style = document.createElement('style');
  style.textContent = `
    #solutions .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    @media (min-width: 1024px) {
      #solutions .grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `;
  document.head.appendChild(style);
}

// 10. Change Musicians image in the #solutions section
const images = document.querySelectorAll('#solutions img');
images.forEach(img => {
  if (img.alt && img.alt.toLowerCase().includes('musician')) {
    img.src = 'https://picsum.photos/id/453/400/300';
  }
});
