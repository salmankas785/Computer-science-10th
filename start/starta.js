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
// document.body.appendChild(navbar);
// Footer Script
const container=document.createElement("div");
const authorSpan=document.createElement('span');
authorSpan.innerHTML=`Created by Front-end develper Salman Kashif`;
const copyrightSpan=document.createElement('span');
copyrightSpan.className='far fa-copyright';
copyrightSpan.textContent='20/11/2024';
container.appendChild(authorSpan);
container.appendChild(copyrightSpan);

const contactDiv=document.createElement('div');
contactDiv.className='contact';

const contactIcon=document.createElement('i');
contactIcon.className='fas fa-phone';

const contactLink=document.createElement('a');
contactLink.href='tel:+923264619125';
contactLink.textContent='0326-4619125';
contactDiv.appendChild(contactIcon);
contactDiv.appendChild(contactLink);
container.appendChild(contactDiv);
// document.body.appendChild(container);

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

// document.body.appendChild(socialIconList);