  var burger = document.getElementById('burgerBtn');
  var mobileNav = document.getElementById('mobileNav');
  burger.addEventListener('click', function(){
    var open = mobileNav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobileNav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      mobileNav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Gallery slider: one slide at a time, arrows + dots + swipe */
  var galleryTrack = document.getElementById('galleryTrack');
  if (galleryTrack) {
    var slides = Array.prototype.slice.call(galleryTrack.children);
    var dotsWrap = document.getElementById('galleryDots');
    var prevBtn = document.getElementById('galleryPrev');
    var nextBtn = document.getElementById('galleryNext');
    var slideIndex = 0;

    slides.forEach(function(_, i){
      var dot = document.createElement('button');
      dot.className = 'gallery-dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Слайд ' + (i + 1));
      dot.addEventListener('click', function(){ goTo(i); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function goTo(i){
      slideIndex = (i + slides.length) % slides.length;
      galleryTrack.style.transform = 'translateX(-' + (slideIndex * 100) + '%)';
      dots.forEach(function(d, di){ d.classList.toggle('is-active', di === slideIndex); });
      filterPills.forEach(function(p){
        p.classList.toggle('is-active', p.getAttribute('data-index') === String(slideIndex));
      });
    }
    prevBtn.addEventListener('click', function(){ goTo(slideIndex - 1); });
    nextBtn.addEventListener('click', function(){ goTo(slideIndex + 1); });

    var filterWrap = document.getElementById('galleryFilters');
    var filterPills = filterWrap ? Array.prototype.slice.call(filterWrap.children) : [];
    filterPills.forEach(function(pill){
      pill.addEventListener('click', function(){
        var idx = pill.getAttribute('data-index');
        if (idx === 'all') {
          filterPills.forEach(function(p){ p.classList.remove('is-active'); });
          pill.classList.add('is-active');
        } else {
          goTo(parseInt(idx, 10));
        }
      });
    });

    var dragStartX = null;
    galleryTrack.addEventListener('pointerdown', function(e){ dragStartX = e.clientX; });
    galleryTrack.addEventListener('pointerup', function(e){
      if (dragStartX === null) { return; }
      var dx = e.clientX - dragStartX;
      dragStartX = null;
      if (dx > 40) { goTo(slideIndex - 1); }
      else if (dx < -40) { goTo(slideIndex + 1); }
    });
  }

  /* Stat cards: fade up into place, staggered, and count up to their value once the row enters view */
  function animateCount(el, to, duration){
    var start = null;
    function tick(now){
      if (start === null) { start = now; }
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * to);
      if (p < 1) { requestAnimationFrame(tick); }
    }
    requestAnimationFrame(tick);
  }
  var statRow = document.getElementById('statRow');
  if (statRow) {
    var counters = statRow.querySelectorAll('.count[data-to]');
    var revealStats = function(){
      statRow.classList.add('is-visible');
      counters.forEach(function(el){
        if (reduceMotion) { el.textContent = el.getAttribute('data-to'); }
        else { animateCount(el, parseInt(el.getAttribute('data-to'), 10), 1100); }
      });
    };
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealStats();
    } else {
      var statIO = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) { revealStats(); statIO.unobserve(entry.target); }
        });
      }, { threshold: .35 });
      statIO.observe(statRow);
    }
  }

  /* Generic scroll-reveal for everything else marked .reveal */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function(el){ el.classList.add('is-visible'); });
    } else {
      var genericIO = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); genericIO.unobserve(entry.target); }
        });
      }, { threshold: .15 });
      revealEls.forEach(function(el){ genericIO.observe(el); });
    }
  }

  /* Scrollspy: highlight the nav link for whichever section is currently in view */
  var navLinks = document.querySelectorAll('nav.main-nav a[href^="#"]');
  var spySections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  if (navLinks.length && spySections.length && 'IntersectionObserver' in window) {
    var setActive = function(id){
      navLinks.forEach(function(a){
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
      });
    };
    var spyIO = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) { setActive(entry.target.id); }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    spySections.forEach(function(sec){ spyIO.observe(sec); });
  }

  /* Process rail: draws left to right once the timeline enters view */
  var railFill = document.getElementById('processRailFill');
  if (railFill) {
    var revealRail = function(){ railFill.style.width = '100%'; };
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealRail();
    } else {
      var railIO = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) { revealRail(); railIO.unobserve(entry.target); }
        });
      }, { threshold: .4 });
      railIO.observe(document.querySelector('.process-grid'));
    }
  }

