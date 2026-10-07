// Paste your final links here. The two buttons on the home page use these values.
const BROCHURE_URL='https://drive.google.com/file/d/1d_BxX0z-WrfQQ1LLxfNZ7gmCMyHX8i71/view?usp=drivesdk'; // Google Drive brochure link
const DEVELOPER_INSTAGRAM_URL='https://www.instagram.com/bansal.arnav?stkn=b2tibHVwazJ1dWsw';
const EVENT_REGISTRATION_URL='https://docs.google.com/spreadsheets/d/1ll3WSmmYoMrOaPJMRCKyGCP9Z8eD9Tfo/edit?usp=drivesdk&ouid=113367413386334836636&rtpof=true&sd=true';

const categories=[
 {slug:'literary',name:'LITERARY',desc:'Literary League, PIMS Villa, Medical MedMaster, Cinema Clash & MBBS Through Ages.',color:'yellow',icon:'book'},
 {slug:'cultural',name:'CULTURAL',desc:'Singing Competition, Dance Competition, MBBS Through Ages & Bhangra.',color:'pink',icon:'mask'},
 {slug:'arts',name:'ARTS',desc:'Inkverse, Flavor Without Fire, T-Volution & Rangoli.',color:'purple',icon:'palette'},
 {slug:'digital',name:'DIGITAL',desc:'AI Prompt Battle, A Day in the Life of MBBS & Design Rush.',color:'orange',icon:'monitor'},
 {slug:'clinical',name:'MEDXPLORE CLINICAL',desc:'Cut to Closure Workshop, Materna MiniMed Workshop & Clinexcel Workshop.',color:'pink',icon:'medical'},
 {slug:'social',name:'SOCIAL',desc:'Sansad Unfiltered, Recraft and Repurpose, Canvas for a Change & Pixels and Pain.',color:'yellow',icon:'heart'},
 {slug:'fandom',name:'FANDOM',desc:'Murder Mystery & PIMS Roadies.',color:'cyan',icon:'film'},
 {slug:'e-sports',name:'ESPORTS',desc:'Clash Royale & BGMI.',color:'orange',icon:'game'},
 {slug:'photography',name:'PHOTOGRAPHY',desc:'Unposed Challenge, Behind the Scenes Photography & Bloom Flower Bouquet.',color:'cream',icon:'camera'}
];
const specialEvent={slug:'mr-miss-insomnia',name:'MR & MISS INSOMNIA',desc:'The flagship Insomnia stage competition.',color:'purple',icon:'crown',special:true};
const eventData={
 literary:[['LITERARY LEAGUE','A literary showdown built around wit, language, ideas and fast thinking.'],['PIMS VILLA','Step into the villa, meet the characters and play your way through the chaos.'],['MEDICAL MEDMASTER','Put your medical knowledge, recall and clinical thinking to the test.'],['CINEMA CLASH','A celebration of cinema, scenes, characters and the moments every movie lover remembers.'],['MBBS THROUGH AGES','Travel through the eras of MBBS in a creative journey through medicine and student life.']],
 cultural:[['SINGING COMPETITION','Take the mic, own the moment and bring your voice to the Insomnia stage.'],['DANCE COMPETITION','Bring your rhythm, energy and signature moves to the dance floor.'],['MBBS THROUGH AGES','Travel through the eras of MBBS in a creative journey through medicine and student life.'],['BHANGRA','Bring the energy, rhythm and spirit of Bhangra to the Insomnia stage.']],
 arts:[['INKVERSE','Turn ideas into visual expression through ink, line and imagination.'],['FLAVOUR WITHOUT FIRE','Create something delicious and creative without conventional cooking.'],['T-VOLUTION','Transform, create and compete in a hands-on art challenge.'],['RANGOLI COMPETITION','Turn colour, pattern and precision into a visual masterpiece.']],
 digital:[['AI PROMPT BATTLE','Craft precise prompts, think creatively and see how far your imagination can take AI.'],['A DAY IN THE LIFE OF MBBS','Capture the chaos, humour and reality of a day in medical student life.'],['DESIGN RUSH','Turn your digital canvas into a bold visual idea and make your creativity do the talking.']],
 clinical:[['CUT TO CLOSURE WORKSHOP','A practical suturing workshop focused on technique, precision and confidence.'],['MATERNA – MINIMED WORKSHOP','Hands-on learning around maternal and paediatric clinical skills.'],['CLINEXCEL','Build essential clinical skills through practical, focused training.']],
 social:[['SANSAD UNFILTERED','Step into the house, debate policy and represent a constituency in a fast-paced parliamentary simulation.'],['RECRAFT AND REPURPOSE','Turn discarded materials into something creative, useful and worth displaying.'],['CANVAS FOR A CHANGE','Use art as a medium for expression, awareness and positive social impact.'],['PIXELS AND PAIN','Explore the impact of cyberbullying through awareness, expression and conversation.']],
 fandom:[['MURDER MYSTERY','Follow the clues, interrogate the suspects and crack the case before the killer gets away.'],['PIMS ROADIES','A high-energy challenge of personality, teamwork, grit and unexpected tasks.']],
 'e-sports':[['CLASH ROYALE','Compete head-to-head, build your strategy and outplay the competition.'],['BGMI','Squad up, survive the battlefield and fight your way to the top.']],
 photography:[['UNPOSED CHALLENGE','Capture authentic moments, expressions and stories without staged poses.'],['BEHIND THE SCENES PHOTOGRAPHY','Find the moments that happen away from the spotlight and turn them into a story.'],['BLOOM FLOWER BOUQUET','Create a visually striking floral arrangement through composition, colour and creativity.']]
};
const specialEventData=[['MR & MISS INSOMNIA','The flagship Insomnia stage competition — confidence, personality, presence and performance.']];
const iconPaths={book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 5.5v15A2.5 2.5 0 0 1 6.5 18H20"/>',mask:'<path d="M4 6h16v7c0 4-3.6 7-8 7s-8-3-8-7z"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/>',palette:'<circle cx="12" cy="12" r="9"/><circle cx="8" cy="9" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="9" r="1"/>',camera:'<path d="M4 7h4l2-2h4l2 2h4v12H4z"/><circle cx="12" cy="13" r="4"/>',monitor:'<rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8M12 17v4"/>',film:'<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 5v14M16 5v14M4 9h4M16 9h4M4 15h4M16 15h4"/>',game:'<path d="M7 9h10a4 4 0 0 1 3.5 6l-1 2a2 2 0 0 1-3.4.4L14.5 16h-5l-1.6 1.4A2 2 0 0 1 4.5 17l-1-2A4 4 0 0 1 7 9z"/><path d="M8 12v4M6 14h4M16 13h.01M18 15h.01"/>',heart:'<path d="M20 12c0 5-8 9-8 9s-8-4-8-9a4.5 4.5 0 0 1 8-2.6A4.5 4.5 0 0 1 20 12z"/>',medical:'<path d="M12 4v5M9.5 6.5h5"/><path d="M7 9h10v8a5 5 0 0 1-10 0z"/>',crown:'<path d="m4 7 3 4 5-6 5 6 3-4-1 12H5z"/>'};
function $(q,s=document){return s.querySelector(q)} function $$(q,s=document){return [...s.querySelectorAll(q)]}
function categoryIcon(key){return `<span class="category-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[key]||iconPaths.book}</svg></span>`}
function makeCategoryCard(c,i){const count=c.special?specialEventData.length:(eventData[c.slug]?.length||0);return `<a class="category-card ${c.color} tilt-${i%2?'l':'r'} reveal" href="events.html?category=${encodeURIComponent(c.slug)}"><div class="card-top">${categoryIcon(c.icon)}<span class="count">${count} ${count===1?'EVENT':'EVENTS'}</span></div><h3>${c.name}</h3><p>${c.desc}</p><span class="card-arrow">SEE EVENTS <b>↗</b></span><span class="card-glow"></span></a>`}
function renderCategories(){const el=$('#homeCategories');if(!el)return;el.innerHTML=categories.map((c,i)=>makeCategoryCard(c,i)).join('')+makeCategoryCard(specialEvent,categories.length).replace('category-card purple','category-card purple special-category-card')}
function setupNav(){const nav=$('#nav');if(nav){const f=()=>nav.classList.toggle('scrolled',scrollY>50);f();addEventListener('scroll',f,{passive:true})}$$('[data-menu-open]').forEach(b=>b.onclick=()=>{const overlay=$('#menuOverlay');if(!overlay)return;overlay.classList.toggle('open');overlay.setAttribute('aria-hidden',overlay.classList.contains('open')?'false':'true')});$('[data-menu-close]')?.addEventListener('click',closeMenu);$('#menuOverlay')?.addEventListener('click',e=>{if(e.target.id==='menuOverlay')closeMenu()});$$('#menuOverlay a').forEach(a=>a.addEventListener('click',closeMenu))}
function closeMenu(){$('#menuOverlay')?.classList.remove('open');$('#menuOverlay')?.setAttribute('aria-hidden','true')}
function setupPass(){const link=$('[data-pass-link]');if(link)link.addEventListener('click',e=>{if(!EVENT_REGISTRATION_URL){e.preventDefault();alert('Add your Google registration URL in app.js → EVENT_REGISTRATION_URL.')}})}
function setupPassCopy(){const toast=$('#copyToast');$$('.copy-upi').forEach(button=>button.addEventListener('click',async()=>{const upi=button.dataset.upi||'';try{await navigator.clipboard.writeText(upi)}catch(e){const input=document.createElement('input');input.value=upi;document.body.appendChild(input);input.select();document.execCommand('copy');input.remove()}const old=button.textContent;button.textContent='COPIED';toast?.classList.add('show');setTimeout(()=>{button.textContent=old;toast?.classList.remove('show')},1400)}))}
function setupExternalLinks(){const links=$$('[data-external-link]');links.forEach(link=>{const type=link.dataset.externalLink;const url=type==='brochure'?BROCHURE_URL:EVENT_REGISTRATION_URL;if(url)link.href=url;else link.addEventListener('click',e=>{e.preventDefault();alert(type==='brochure'?'Add your Google Drive brochure URL in app.js → BROCHURE_URL.':'Add your Google registration URL in app.js → EVENT_REGISTRATION_URL.')})})}
function setupDeveloperInstagram(){const link=$('[data-developer-instagram]');if(!link)return;if(DEVELOPER_INSTAGRAM_URL){link.href=DEVELOPER_INSTAGRAM_URL}else{link.addEventListener('click',e=>{e.preventDefault();alert('Add the developer Instagram URL in app.js → DEVELOPER_INSTAGRAM_URL.')})}}
function setupSpotlightCarousel(){
  const carousel=$('#mainSpotlightCarousel');
  if(!carousel)return;
  const slides=$$('.spotlight-slide',carousel);
  const dots=$$('.spotlight-dot',carousel);
  if(!slides.length)return;

  let index=0;
  let timer=null;
  let touchStartX=0;
  let touchStartY=0;
  let isPointerDown=false;
  let available=[];

  const refreshAvailable=()=>{
    available=slides.map((slide,i)=>{
      const img=$('img',slide);
      return {i,ok:!!(img&&img.complete&&img.naturalWidth>0)};
    }).filter(x=>x.ok).map(x=>x.i);

    dots.forEach((dot,i)=>{
      const slideIndex=Number(dot.dataset.slide||i);
      const exists=available.includes(slideIndex);
      dot.hidden=!exists;
      if(exists)dot.setAttribute('aria-current',slideIndex===index?'true':'false');
    });
    return available;
  };

  const show=(target,instant=false)=>{
    refreshAvailable();
    if(!available.length)return;
    const pos=available.indexOf(target);
    if(pos<0){
      index=available[0];
    }else{
      index=available[pos];
    }
    slides.forEach((slide,i)=>{
      slide.classList.toggle('is-active',i===index);
      slide.classList.toggle('is-prev',i===((index-1+slides.length)%slides.length));
      slide.setAttribute('aria-hidden',i===index?'false':'true');
    });
    dots.forEach((dot,i)=>{
      const slideIndex=Number(dot.dataset.slide||i);
      const active=slideIndex===index;
      dot.classList.toggle('is-active',active);
      dot.setAttribute('aria-current',active?'true':'false');
    });
    if(instant)carousel.classList.add('is-instant');
    else carousel.classList.remove('is-instant');
  };

  const next=direction=>{
    refreshAvailable();
    if(available.length<2)return;
    const pos=available.indexOf(index);
    show(available[(pos+direction+available.length)%available.length]);
  };

  const restart=()=>{
    if(timer)clearInterval(timer);
    timer=setInterval(()=>next(1),5000);
  };

  dots.forEach(dot=>dot.addEventListener('click',()=>{
    const target=Number(dot.dataset.slide||0);
    if(!available.includes(target))return;
    show(target);
    restart();
  }));

  carousel.addEventListener('touchstart',e=>{
    const t=e.changedTouches[0];
    touchStartX=t.clientX; touchStartY=t.clientY;
  },{passive:true});
  carousel.addEventListener('touchend',e=>{
    const t=e.changedTouches[0];
    const dx=t.clientX-touchStartX;
    const dy=t.clientY-touchStartY;
    if(Math.abs(dx)<45||Math.abs(dx)<Math.abs(dy))return;
    next(dx<0?1:-1);
    restart();
  },{passive:true});

  carousel.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse'&&e.button!==0)return;
    isPointerDown=true; touchStartX=e.clientX; touchStartY=e.clientY;
  });
  carousel.addEventListener('pointerup',e=>{
    if(!isPointerDown)return;
    isPointerDown=false;
    const dx=e.clientX-touchStartX;
    const dy=e.clientY-touchStartY;
    if(Math.abs(dx)<45||Math.abs(dx)<Math.abs(dy))return;
    next(dx<0?1:-1);
    restart();
  });

  slides.forEach((slide,i)=>{
    const img=$('img',slide);
    if(!img)return;
    img.addEventListener('load',()=>{
      refreshAvailable();
      show(index,true);
      restart();
    });
    img.addEventListener('error',()=>{
      refreshAvailable();
      show(available[0]??0,true);
    });
  });

  refreshAvailable();
  show(available[0]??0,true);
  restart();
}
function setupSpotlightZoom(){
  const carousel=$('#mainSpotlightCarousel');
  if(!carousel)return;
  const images=$$('.spotlight-slide img',carousel);
  if(!images.length)return;
  let overlay=$('#spotlightZoomOverlay');
  if(!overlay){
    overlay=document.createElement('div');
    overlay.id='spotlightZoomOverlay';
    overlay.className='spotlight-zoom-overlay';
    overlay.setAttribute('aria-hidden','true');
    overlay.innerHTML='<button class="spotlight-zoom-close" type="button" aria-label="Close image">×</button><div class="spotlight-zoom-stage"><img class="spotlight-zoom-image" alt="Expanded spotlight image"></div><div class="spotlight-zoom-hint">PINCH OR SCROLL TO ZOOM • DRAG TO MOVE</div>';
    document.body.appendChild(overlay);
  }
  const zoomImg=$('.spotlight-zoom-image',overlay);
  const close=()=>{overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true');document.body.classList.remove('spotlight-zoom-open');zoomImg.style.transform='translate(0px,0px) scale(1)';};
  $('.spotlight-zoom-close',overlay)?.addEventListener('click',close);
  overlay.addEventListener('click',e=>{if(e.target===overlay||e.target.classList.contains('spotlight-zoom-stage'))close()});
  let scale=1,tx=0,ty=0,startX=0,startY=0,startTx=0,startTy=0,startDist=0,startScale=1,panning=false;
  const apply=()=>{zoomImg.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;};
  const dist=(a,b)=>Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
  const open=img=>{zoomImg.src=img.currentSrc||img.src;zoomImg.alt=img.alt||'Expanded spotlight image';scale=1;tx=0;ty=0;apply();overlay.classList.add('open');overlay.setAttribute('aria-hidden','false');document.body.classList.add('spotlight-zoom-open');};
  images.forEach(img=>img.addEventListener('click',()=>open(img)));
  zoomImg.addEventListener('wheel',e=>{e.preventDefault();scale=Math.max(1,Math.min(4,scale+(e.deltaY<0?.22:-.22)));apply();},{passive:false});
  zoomImg.addEventListener('touchstart',e=>{
    if(e.touches.length===2){startDist=dist(e.touches[0],e.touches[1]);startScale=scale;return;}
    if(e.touches.length===1){panning=true;startX=e.touches[0].clientX;startY=e.touches[0].clientY;startTx=tx;startTy=ty;}
  },{passive:false});
  zoomImg.addEventListener('touchmove',e=>{
    e.preventDefault();
    if(e.touches.length===2&&startDist){scale=Math.max(1,Math.min(4,startScale*(dist(e.touches[0],e.touches[1])/startDist)));apply();return;}
    if(e.touches.length===1&&panning){tx=startTx+(e.touches[0].clientX-startX);ty=startTy+(e.touches[0].clientY-startY);apply();}
  },{passive:false});
  zoomImg.addEventListener('touchend',e=>{if(e.touches.length<2)startDist=0;if(e.touches.length===0)panning=false;if(scale===1){tx=0;ty=0;apply();}});
  zoomImg.addEventListener('dblclick',()=>{scale=scale>1?1:2;tx=0;ty=0;apply();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}
const EVENT_DETAILS={
  'LITERARY LEAGUE':{date:'30 October 2026',time:'10 AM - 12 PM',venue:'LT 1',teamSize:'TEAM OF 4',registration:'https://forms.gle/bQcVgRGf1o2c2sh39'},
  'PIMS VILLA':{date:'31 October 2026',time:'10 AM - 12 PM',venue:'LT 1',teamSize:'LONE WOLF',registration:'https://docs.google.com/forms/d/e/1FAIpQLSdoznZNnDlXr1Loeqq08bC6iTsZNt6VB7Y06Bkj8Lh12zhorw/viewform?usp=publish-editor'},
  'MEDICAL MEDMASTER':{date:'1 November 2026',time:'1:30 PM - 3 PM',venue:'LT 1',teamSize:'TEAM OF 4',registration:'https://docs.google.com/forms/d/e/1FAIpQLSf89yJvJ3uONqPxFygw9nXTfnLVYPI-tflPxPOTN6Had4UCBg/viewform'},
  'CINEMA CLASH':{date:'1 November 2026',time:'12 PM - 1:30 PM',venue:'LT 1',teamSize:'TEAM OF 4',registration:'https://docs.google.com/forms/d/e/1FAIpQLSefUz7lBAbrNGuYJhRZLAgXLD5WNMBIBgoOBGoIbmVPXpFfCg/viewform'},
  'MBBS THROUGH AGES':{date:'30 October 2026',time:'4 PM - 5 PM',venue:'STAGE',teamSize:'GROUP PERFORMANCE',registration:'https://docs.google.com/forms/d/e/1FAIpQLSeRcz-RD7aqfnq2LT8-e-Bv4SpHERiqt10q-dhYg4Lz7FsWdA/viewform?usp=publish-editor'},
  'SINGING COMPETITION':{date:'30 October 2026',time:'12 PM - 2 PM',venue:'STAGE',teamSize:'SOLO | DUO',registration:'https://www.google.com/url?q=https://docs.google.com/forms/d/e/1FAIpQLScRJXiqIOaj1Mvl0G27rW4n99P07hA3N5lVduw1dL0f6Ab-vA/viewform&sa=D&source=editors&ust=1790541632012312&usg=AOvVaw1n7nc1JF-AqfP0GKLScyj4'},
  'DANCE COMPETITION':{date:'30 October 2026',time:'2 PM - 4 PM',venue:'STAGE',teamSize:'SOLO | DUO | FACE OFF',registration:'https://forms.gle/ozqodfw4n1dGTpMMA'},
  'BHANGRA':{date:'31 October 2026',time:'4 PM - 5 PM',venue:'STAGE',teamSize:'GROUP PERFORMANCE'},
  'INKVERSE':{date:'1 November 2026',time:'3 PM - 5 PM',venue:'AUDITORIUM',teamSize:'TEAM OF 2',registration:'https://docs.google.com/forms/d/e/1FAIpQLScYxrHq9n2W_jFhaT2JYHjbOwVqNXKw5XICNHZdybhpkE7srA/viewform?usp=publish-editor'},
  'FLAVOUR WITHOUT FIRE':{date:'30 October 2026',time:'1 PM - 2 PM',venue:'AUDITORIUM',teamSize:'TEAM OF 2',registration:'https://docs.google.com/forms/d/e/1FAIpQLSe65AmA-0W7lc8Ate2FieSzpAf0Eum6cNpO0xHJY1AErYTTng/viewform?usp=publish-editor'},
  'T-VOLUTION':{date:'30 October 2026',time:'2 PM - 5 PM',venue:'PIMS GROUND',teamSize:'TEAM OF 2',registration:'https://docs.google.com/forms/d/e/1FAIpQLSfPSghzTi_0crx0_m6T9399ALIzf-s-t2i2lhktoDwxdwMR8A/viewform?usp=header'},
  'RANGOLI COMPETITION':{date:'1 November 2026',time:'9 AM - 12 PM',venue:'PIMS CORRIDORS',teamSize:'TEAM OF 2',registration:'https://share.google/845MkynfxM29MfEs2'},
  'AI PROMPT BATTLE':{date:'30 October 2026',time:'12 PM - 1 PM',venue:'AUDITORIUM',teamSize:'LONE WOLF',registration:'https://forms.gle/DuSWkLcpC919vY7g8'},
  'A DAY IN THE LIFE OF MBBS':{date:'31 October 2026',time:'12 PM - 2 PM',venue:'LT 1',teamSize:'LONE WOLF',registration:'https://forms.gle/8c1fRfh2EXxK521LA'},
  'DESIGN RUSH':{date:'1 November 2026',time:'12 PM - 2 PM',venue:'AUDITORIUM',teamSize:'TEAM OF 2',registration:'https://forms.gle/w5bU3sn2sd3SpQPP8'},
  'CUT TO CLOSURE WORKSHOP':{date:'17 October 2026',time:'9 AM - 1 PM',venue:'ANATOMY DEPT.',teamSize:'SINGLE',registration:'https://forms.gle/3ZJPaeLiX9Vmz48ZA'},
  'MATERNA – MINIMED WORKSHOP':{date:'17 October 2026',time:'2 PM - 5 PM',venue:'AUDITORIUM',teamSize:'SINGLE',registration:'https://forms.gle/3fjD8W2S4NdNStWq5'},
  'CLINEXCEL':{date:'17 October 2026',time:'10:30 AM - 1 PM',venue:'AUDITORIUM',teamSize:'SINGLE',registration:'https://forms.gle/2Dbsth8aPaNpmf1m6'},
  'SANSAD UNFILTERED':{date:'1 November 2026',time:'9 AM - 12 PM',venue:'LT 1',teamSize:'LONE WOLF',registration:'https://docs.google.com/forms/d/e/1FAIpQLSfMbA8dezehbErZ6nH21c3wPBg4FTvJlP2nGhWmorjf1kSStg/viewform'},
  'RECRAFT AND REPURPOSE':{date:'31 October 2026',time:'11:30 AM - 1 PM',venue:'AUDITORIUM',teamSize:'MAX GROUP OF 2',registration:'https://docs.google.com/forms/d/14ANOfeuAXF9yNfaf-PQD5RQGt4suXvg0J18fpItwVlM/edit?ts=6abf6102'},
  'CANVAS FOR A CHANGE':{date:'31 October 2026',time:'10 AM - 11:30 AM',venue:'AUDITORIUM',teamSize:'LONE WOLF',registration:'https://docs.google.com/forms/d/1RX5uJ-QzOLaERQPs2--j0IcOR8jePY6znTWX3xd0gKQ/edit?ts=6abf622c'},
  'PIXELS AND PAIN':{date:'1 November 2026',time:'2 PM - 3 PM',venue:'LT 2',teamSize:'MAX GROUP OF 5',registration:'https://docs.google.com/forms/d/e/1FAIpQLScRGbgRtXOH7vUkWgYpZE1jHMCm-lgiH0iEYv54TDk2QAnBsA/viewform?usp=publish-editor'},
  'MURDER MYSTERY':{date:'1 November 2026',time:'12 PM - 2 PM',venue:'PIMS CORRIDOR',teamSize:'TEAM OF 6',registration:'https://sites.google.com/view/fandomsyndicatexinsomnia/home'},
  'PIMS ROADIES':{date:'31 October 2026',time:'1 PM - 2 PM',venue:'AUDITORIUM',teamSize:'LONE WOLF',registration:'https://sites.google.com/view/fandomsyndicatexinsomnia/home'},
  'CLASH ROYALE':{date:'30 October 2026',time:'2 PM - 3 PM',venue:'LT 1',teamSize:'LONE WOLF',registration:'https://sites.google.com/view/fandomsyndicatexinsomnia/home'},
  'BGMI':{date:'30 October 2026',time:'2 PM - 3 PM',venue:'LT 1',teamSize:'TEAM OF 4',registration:'https://sites.google.com/view/fandomsyndicatexinsomnia/home'},
  'UNPOSED CHALLENGE':{date:'31 October 2026',time:'10 AM - 11 AM',venue:'LT 2',teamSize:'LONE WOLF',registration:'https://forms.gle/Ass2vahNhJF8SKhW8'},
  'BEHIND THE SCENES PHOTOGRAPHY':{date:'31 October 2026',time:'11 AM - 12 PM',venue:'LT 2',teamSize:'LONE WOLF',registration:'https://forms.gle/pqx8Na8bPUFTiUce9'},
  'BLOOM FLOWER BOUQUET':{date:'30 October 2026',time:'10 AM - 12 PM',venue:'PIMS GROUND',teamSize:'TEAM OF 2',registration:'https://forms.gle/7R2ZCcG7WVBy8XWZ9'},
  'MR & MISS INSOMNIA':{date:'31 October 2026',time:'12 PM - 5 PM',venue:'STAGE',teamSize:'LONE WOLF',registration:'https://docs.google.com/forms/d/e/1FAIpQLScNvcqov2XnUScurrIpx0wpeM2sL6sL6D9Z6RZcoIHcdZ13Fw/viewform'}
};
function eventSlug(title){return slugifyEvent(title)}
function eventPosterPath(title){return `assets/posters/${posterOverrides[title]||slugifyEvent(title)+'.jpg'}`}
function eventShareText(title,d){
  const websiteUrl=new URL('index.html',location.href).href;
  const registration=d.registration&&d.registration!=='#'?d.registration:'Registration details on the event page';
  return `🌙 INSOMNIA 2026\n\n⚡ ${title}\n\n📅 ${d.date}\n⏰ ${d.time}\n📍 ${d.venue}\n👥 ${d.teamSize}\n\n🔥 Think you can take this one? Step into the night and make your mark.\n\n🎟️ Register: ${registration}\n🌐 Explore INSOMNIA: ${websiteUrl}\n\nSTAY AWAKE. DREAM BEYOND. ✦`;
}
async function shareEvent(title,d){
  const posterUrl=new URL(eventPosterPath(title),location.href).href;
  const text=eventShareText(title,d);
  try{
    if(navigator.share){
      let files=[];
      try{
        const res=await fetch(posterUrl,{cache:'no-cache'});
        if(res.ok){
          const blob=await res.blob();
          const mime=blob.type||'image/jpeg';
          const ext=(mime.split('/')[1]||'jpeg').replace('jpg','jpg');
          const file=new File([blob],`${eventSlug(title)}.${ext}`,{type:mime});
          if(!navigator.canShare || navigator.canShare({files:[file]})) files=[file];
        }
      }catch(_){ }
      // Native Web Share can pass the actual poster image to WhatsApp. When it does, avoid cluttering the message with a second poster URL.
      const nativeText=text;
      await navigator.share(files.length?{title:`INSOMNIA — ${title}`,text:nativeText,files}:{title:`INSOMNIA — ${title}`,text:nativeText});
      return;
    }
  }catch(err){if(err&&err.name==='AbortError')return;}
  // WhatsApp's URL API cannot force an attachment; this fallback sends the complete text + poster URL.
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer');
}
function eventDetails(title,index){
  const d=EVENT_DETAILS[title]||{};
  return {
    date:d.date||'TBA', time:d.time||'TBA', venue:d.venue||d.location||'TBA',
    teamSize:d.teamSize||d.format||'TBA',
    registration:d.registration||'#'
  };
}
const posterOverrides={'CUT TO CLOSURE WORKSHOP':'cut-to-closure-workshop.jpg','CLINEXCEL':'clinexcel-workshop.jpg','SANSAD UNFILTERED':'sansad-unfiltered.jpg','DESIGN RUSH':'design-rush.jpg','UNPOSED CHALLENGE':'unposed.jpg','BEHIND THE SCENES PHOTOGRAPHY':'behind-the-scenes.jpg','RANGOLI COMPETITION':'rangoli.jpg'};
function slugifyEvent(title){return title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function renderEventCard(e,i,categorySlug){
  const d=eventDetails(e.title,i);
  const reg=d.registration==='#'?'javascript:void(0)':d.registration;
  const poster=eventPosterPath(e.title);
  const specialClass=e.title==='MR & MISS INSOMNIA'?'special-event-card':'';
  return `<article class="event-card ${specialClass} ${i%2?'tilt-left':'tilt-right'} reveal" id="event-${eventSlug(e.title)}"><button class="event-share" type="button" aria-label="Share ${e.title}" data-share-event="${e.title.replace(/"/g,'&quot;')}" title="Share event">↗</button>
    <div class="poster-box" aria-label="3:4 poster slot for ${e.title}"><img src="${poster}" alt="${e.title} poster" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="poster-word" style="display:none">POSTER<small>3 : 4 • ${slugifyEvent(e.title)}</small></div></div>
    <div class="event-info">
      <div class="event-label">${categorySlug==='mr-miss-insomnia'?'SPECIAL EVENT':'EVENT '+String(i+1).padStart(2,'0')}</div>
      <h3>${e.title}</h3><p>${e.desc||''}</p>
      <div class="event-meta-grid"><div><b>DATE</b><span>${d.date}</span></div><div><b>TIME</b><span>${d.time}</span></div><div><b>VENUE</b><span>${d.venue}</span></div><div><b>TEAM SIZE</b><span>${d.teamSize}</span></div></div>
      ${e.title==='BHANGRA'?'':`<a class="register-btn ${d.registration==='#'?'is-disabled':''}" href="${reg}" ${d.registration==='#'?'aria-disabled="true"':'target="_blank" rel="noopener noreferrer"'}>REGISTER <span>↗</span></a>`}
    </div></article>`;
}
function setupEventSharing(){
  $$('[data-share-event]').forEach(button=>{
    button.addEventListener('click',async e=>{
      e.preventDefault();e.stopPropagation();
      const title=button.dataset.shareEvent||''; const d=eventDetails(title);
      const old=button.textContent; button.textContent='…'; button.disabled=true;
      try{await shareEvent(title,d)}finally{button.textContent=old;button.disabled=false;}
    });
  });
}
function focusCatalogEvent(){
  const key=new URLSearchParams(location.search).get('event'); if(!key)return;
  const target=document.getElementById(`event-${slugifyEvent(key)}`); if(!target)return;
  setTimeout(()=>{target.scrollIntoView({behavior:'smooth',block:'center'});target.classList.add('event-focus');setTimeout(()=>target.classList.remove('event-focus'),2200)},180);
}
function renderEventsPage(){
  const tabs=$('#tabs'); if(!tabs)return;
  const selected=new URLSearchParams(location.search).get('category')||'all';
  const allCats=[{slug:'all',name:'ALL',icon:'crown'},...categories,specialEvent];
  tabs.innerHTML=allCats.map(c=>`<a class="category-tab ${selected===c.slug?'active':''}" href="${c.slug==='all'?'events.html':'events.html?category='+encodeURIComponent(c.slug)}">${c.name}</a>`).join('');
  let list=[];
  if(selected==='all'){const seen=new Set();[...Object.values(eventData).flat(),...specialEventData].forEach(([title,desc])=>{if(!seen.has(title)){seen.add(title);list.push({title,desc})}})}
  else if(selected===specialEvent.slug){list=specialEventData.map(([title,desc])=>({title,desc}))}
  else list=(eventData[selected]||[]).map(([title,desc])=>({title,desc}));
  const cat=allCats.find(c=>c.slug===selected)||allCats[0];
  $('#categoryTitle').textContent=cat.name; $('#eventCount').textContent=`${list.length} ${list.length===1?'EVENT':'EVENTS'}`; $('#categoryIcon').innerHTML=categoryIcon(cat.icon);
  $('#eventGrid').innerHTML=list.map((e,i)=>renderEventCard(e,i,selected)).join('');
  setupEventSharing();
  setupAnimations();
  focusCatalogEvent();
}
function setupParallax(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const layers=$$('.layer');if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);layers.forEach(l=>{const s=parseFloat(l.dataset.speed||0);gsap.to(l,{y:()=>innerHeight*s*2, ease:'none',scrollTrigger:{trigger:l.closest('.scene'),start:'top bottom',end:'bottom top',scrub:.7}})})}else{addEventListener('scroll',()=>{const y=scrollY;layers.forEach(l=>{const s=parseFloat(l.dataset.speed||0);l.style.transform=`translate3d(0,${y*s}px,0)`})},{passive:true})}}
function setupAnimations(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){$$('.reveal').forEach(e=>e.classList.add('visible'));return}
  if(window.gsap&&window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    $$('.reveal').forEach((el,i)=>{
      gsap.fromTo(el,
        {y:55,opacity:0},
        {y:0,opacity:1,duration:.9,ease:'power3.out',delay:Math.min(i*.025,.16),scrollTrigger:{trigger:el,start:'top 90%',once:true}}
      );
    });
    $$('.category-card').forEach((c,i)=>{
      gsap.fromTo(c,
        {x:i%2?42:-42,y:26,rotate:i%2?3.2:-3.2,scale:.975,opacity:0},
        {x:0,y:0,rotate:i%2?-1.15:1.15,scale:1,opacity:1,duration:1.0,ease:'power4.out',scrollTrigger:{trigger:c,start:'top 92%',once:true}}
      );
    });
    $$('.event-card').forEach((c,i)=>{
      const fromX=i%2?70:-70;
      const fromR=i%2?4.5:-4.5;
      const toR=i%2?-1.15:1.15;
      gsap.fromTo(c,
        {x:fromX,y:48,rotate:fromR,scale:.965,opacity:0},
        {x:0,y:0,rotate:toR,scale:1,opacity:1,duration:1.0,ease:'power4.out',delay:Math.min(i*.045,.18),scrollTrigger:{trigger:c,start:'top 92%',once:true}}
      );
    });
    $$('.display').forEach(h=>gsap.fromTo(h,{scale:.88,y:55,opacity:0},{scale:1,y:0,opacity:1,ease:'power3.out',scrollTrigger:{trigger:h,start:'top 88%',end:'top 55%',scrub:.9}}));
    $$('.section-head').forEach(h=>gsap.fromTo(h,{x:-55,opacity:0},{x:0,opacity:1,duration:.95,ease:'power4.out',scrollTrigger:{trigger:h,start:'top 87%',once:true}}));
    $$('.night-placard').forEach((c,i)=>gsap.fromTo(c,{y:48,opacity:0,scale:.975},{y:0,opacity:1,scale:1,duration:1.05,delay:i*.06,ease:'power3.out',scrollTrigger:{trigger:c,start:'top 90%',once:true}}));
    $$('.insomnia-night-title').forEach((h)=>gsap.fromTo(h,{x:-35,opacity:0},{x:0,opacity:1,duration:1.0,ease:'power3.out',scrollTrigger:{trigger:h,start:'top 90%',once:true}}));
  }else{
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
    $$('.reveal').forEach(e=>io.observe(e));
  }
}

function setupCinematicMotion(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  if(!window.gsap||!window.ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);

  $$('.spotlight-feature').forEach(el=>{
    gsap.fromTo(el,{y:55,scale:.97},{y:-18,scale:1,ease:'none',
      scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:.75}});
  });

  $$('.closing-inner').forEach(el=>{
    gsap.fromTo(el,{y:35,opacity:.65},{y:-25,opacity:1,ease:'none',
      scrollTrigger:{trigger:el.closest('.closing'),start:'top bottom',end:'bottom top',scrub:.7}});
  });
}

function renderEventCatalog(){
  const grid=$('#catalogGrid'); if(!grid)return;
  const byTitle=new Map();
  Object.values(eventData).flat().forEach(([title,desc])=>{if(!byTitle.has(title))byTitle.set(title,desc)});
  specialEventData.forEach(([title,desc])=>byTitle.set(title,desc));
  const days=[
    {date:'30 October 2026',label:'DAY 01'},
    {date:'31 October 2026',label:'DAY 02'},
    {date:'1 November 2026',label:'DAY 03'}
  ];
  const parseTime=t=>{const m=(t||'').match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)/i);if(!m)return 9999;let h=+m[1],min=+(m[2]||0),ap=m[3].toUpperCase();if(h===12)h=0;if(ap==='PM')h+=12;return h*60+min};
  const dayMarkup=days.map(day=>{
    const items=[...byTitle.entries()].map(([title,desc])=>({title,desc,d:eventDetails(title)})).filter(x=>x.d.date===day.date).sort((a,b)=>parseTime(a.d.time)-parseTime(b.d.time));
    return `<section class="catalog-day reveal" id="catalog-${slugifyEvent(day.date)}">
      <div class="catalog-day-head"><div><span class="catalog-day-label">${day.label}</span><h2>${day.date}</h2></div><span class="catalog-day-count">${items.length} EVENTS</span></div>
      <div class="catalog-list">${items.map((x,i)=>{
        const poster=eventPosterPath(x.title);
        return `<a class="catalog-event" href="events.html?event=${encodeURIComponent(x.title)}" data-event-slug="${eventSlug(x.title)}">
          <div class="catalog-time"><strong>${x.d.time.split(' - ')[0]}</strong><span>${x.d.time.includes(' - ')?'— '+x.d.time.split(' - ')[1]:''}</span></div>
          <div class="catalog-poster"><img src="${poster}" alt="${x.title} poster" loading="lazy" onerror="this.style.display='none'"></div>
          <div class="catalog-event-main"><h3>${x.title}</h3><div class="catalog-venue"><span>VENUE</span><b>${x.d.venue}</b></div></div>
          <span class="catalog-arrow" aria-hidden="true">↗</span>
        </a>`;
      }).join('')}</div>
    </section>`;
  }).join('');
  grid.innerHTML=dayMarkup;
}
function init(){setupNav();renderCategories();renderEventCatalog();setupPass();setupExternalLinks();setupDeveloperInstagram();setupPassCopy();setupSpotlightCarousel();setupSpotlightZoom();setupAnimations();setupParallax();setupCinematicMotion();if($('#eventGrid'))renderEventsPage()}
document.addEventListener('DOMContentLoaded',init);
