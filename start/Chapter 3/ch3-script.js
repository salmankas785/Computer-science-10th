// Header hamburger script
const hamburger = document.querySelector(".hamburger");
const navbars = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbars.classList.toggle("active");
});
// navbar icons links script
const navbar = document.createElement('div');
navbar.className='navbar';
const navbarList=document.createElement('ul');
const navbarItems=[
  {
    href: '../index.html',
    iconClass: 'fas fa-home',
    text: 'Home',
    active: true // Indicates this link is active
  },
  {
    href: 'https://www.youtube.com/@Computerblogs',
    iconClass: 'fab fa-youtube',
    text: 'YouTube Channel'
  },
  {
    href: 'https://www.instagram.com/jani_i_am_here/',
    iconClass: 'fab fa-instagram',
    text: 'Instagram'
  },
  {
    href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox',
    iconClass: 'fas fa-envelope',
    text: 'Contact Us'
  },
  {
    href: '#',
    iconClass: 'fas fa-info-circle',
    text: 'About'
  },
  {
    href: 'styles/Moreinfo/salman portfolio/index.html',
    iconClass: 'fas fa-ellipsis-h',
    text: 'More Info'
  }
];

navbarItems.forEach(item=>{
  const listItem=document.createElement('li');
  listItem.className='nav-item';
  const link=document.createElement('a');
  link.href=item.href;
  link.textContent=item.text;
  link.classList.add('nav-link');
  if(item.active){
    link.classList.add('active');
  }
  listItem.appendChild(link);
  const icon=document.createElement('i');
  icon.className=item.iconClass;
  listItem.appendChild(icon);
  navbarList.appendChild(listItem);
});
navbar.appendChild(navbarList);

document.addEventListener("DOMContentLoaded", function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const pdfLinks = document.querySelectorAll(".pdf-link");
  const pdfViewer = document.getElementById("pdf-viewer");
  const downloadButtonContainer = document.getElementById("download-button-container");
  const downloadButton = document.getElementById("download-button");

  pdfLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const pdfUrl = this.href;

          if (isMobile) {
              // On mobile, hide the PDF viewer and show only the download button
              pdfViewer.style.display = "none"; // Disable the viewer
              downloadButtonContainer.style.display = "block";
              downloadButton.onclick = () => {
                  window.location.href = pdfUrl;
              };
          } else {
              // On desktop, show both the viewer and the download button
              pdfViewer.style.display = "block"; // Enable the viewer
              downloadButtonContainer.style.display = "block";
              downloadButton.onclick = () => {
                  window.location.href = pdfUrl;
              };
              pdfViewer.innerHTML = `<iframe src="${pdfUrl}" style="width: 100%; height: 100%; border: none;"></iframe>`;
          }
      });
  });
});
// Footer link Script
const socialIconList=document.createElement('ul');
socialIconList.className='socail-icon';
const sociallinks=[
  {
    href: 'https://www.facebook.com/share/rpfdHEWSJ4KoD3jU/',
    iconName: 'logo-facebook'
  },
  {
    href: 'https://wa.me/message/XQB2GTMQ44W4O1',
    iconName: 'logo-whatsapp'
  },
  {
    href: 'https://www.linkedin.com/in/salman-kashif-826b2b275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    iconName: 'logo-linkedin'
  },
  {
    href: 'https://www.instagram.com/jani_i_am_here/',
    iconName: 'logo-instagram'
  },
  {
    href: 'https://youtube.com/@salmantalentacademy2739?si=8t3ZnJKAQynQX4gr',
    iconName: 'logo-youtube'
  }
];

sociallinks.forEach(link =>{
  const listItem=document.createElement('li');
  const anchor=document.createElement('a');
  anchor.href=link.href;
  //Create <ion icon> element
  const icon=document.createElement('ion-icon');
  icon.name=link.iconName;
  anchor.appendChild(icon);
  listItem.appendChild(anchor);
  socialIconList.appendChild(listItem);
});