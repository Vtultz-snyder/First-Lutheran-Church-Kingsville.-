(function () {
  var JULY_EVENTS = [
    {
      id: 'july-bible-and-prayer',
      category: 'Faith & Fellowship',
      date: 'Mondays in July',
      title: 'Bible Study, Prayer Group & WOW',
      image: '/images/events/june-crops/venvi-cross-bible.jpg',
      alt: 'An open Bible beside a cross',
      summary: 'Three Monday opportunities to learn, pray, and grow together.',
      details: '<strong>July 6, 13, 20 & 27</strong><br>Bible Study · 9:30-10:30 AM · Pastor’s Room<br>Prayer Group · 11:00 AM · Pastor’s Room<br>WOW Bible Study · 7:00 PM · Balcony'
    },
    {
      id: 'july-coda',
      category: 'Community Support',
      date: 'Tuesdays in July',
      title: 'CODA',
      image: '/images/Health and Care Ministry/elder-hand-held-care.jpeg',
      alt: 'Supportive hands held together',
      summary: 'Weekly Tuesday evening meetings in the church basement.',
      details: '<strong>July 7, 14, 21 & 28</strong><br>7:00-9:00 PM<br>Church Basement'
    },
    {
      id: 'fit-for-christ-july',
      category: 'Health & Fellowship',
      date: 'Saturdays in July',
      title: 'Fit for Christ: Zumba',
      image: '/images/events/june-named/zumba-dance.jpg',
      alt: 'Fit for Christ Zumba and dance class',
      summary: 'Saturday morning movement, fellowship, and encouragement.',
      details: '<strong>July 4, 11, 18 & 25</strong><br>9:45-11:00 AM<br>Church Basement'
    },
    {
      id: 'greeter-meeting-july',
      category: 'Congregational Life',
      date: 'Sunday, July 5',
      title: 'Greeter Meeting',
      image: '/images/beatiful church/You Are Welcome Here Sign.webp',
      alt: 'You are welcome here sign at First Lutheran Church',
      summary: 'A brief meeting for church greeters following worship.',
      details: '<strong>Sunday, July 5</strong><br>Immediately after the worship service<br>First Lutheran Church'
    },
    {
      id: 'venvi-worship-july',
      category: 'Special Worship',
      date: 'Sunday, July 26',
      title: 'VENVI Worship Service',
      image: '/images/events/june-named/venvi-worship-service-june.jpg',
      alt: 'Cross and Bible for the VENVI worship service',
      summary: 'A special Sunday afternoon worship service at First Lutheran.',
      details: '<strong>Sunday, July 26</strong><br>2:00 PM<br>First Lutheran Church Sanctuary'
    },
    {
      id: 'hogs-for-hospice',
      category: 'Featured Community Event',
      date: 'Saturday, August 1',
      title: 'Hogs for Hospice Ride Support',
      image: '/images/events/july-featured-events.png',
      alt: 'Community volunteers welcoming a summer charity motorcycle ride',
      summary: 'Volunteer with First Lutheran to welcome the registered ride in Wheatley.',
      details: '<strong>Saturday, August 1</strong><br>Approximately 10:30 AM-1:30 PM<br>Wheatley<br><br>Volunteers will help welcome the riders and support traffic flow. This August 1 event is featured in the July newsletter so members have time to plan.'
    }
  ];
  var MONTH_DATA = window.FLC_MONTHLY_HIGHLIGHTS || {
    monthLabel: 'July 2026 Highlights',
    intro: 'Select any event card to open its dates, time, and location directly underneath.',
    featuredEventId: 'hogs-for-hospice',
    events: JULY_EVENTS
  };

  function eventCard(event) {
    var featuredClass = event.id === MONTH_DATA.featuredEventId ? ' flc-featured-month-card' : '';
    return '<details class="flc-month-card' + featuredClass + '" id="' + event.id + '">' +
      '<summary>' +
        '<span class="flc-month-image"><img src="' + event.image + '" alt="' + event.alt + '"></span>' +
        '<span class="flc-month-copy">' +
          '<span class="flc-month-meta"><span>' + event.category + '</span><time>' + event.date + '</time></span>' +
          '<span class="flc-month-title">' + event.title + '</span>' +
          '<span class="flc-month-summary">' + event.summary + '</span>' +
          '<span class="flc-month-action"><span class="flc-open-label">See event details</span><span class="flc-close-label">Hide event details</span><span aria-hidden="true">↓</span></span>' +
        '</span>' +
      '</summary>' +
      '<div class="flc-month-details"><p>' + event.details + '</p></div>' +
    '</details>';
  }

  function openHashEvent(shouldScroll) {
    var id = window.location.hash.replace('#', '');
    if (!id) return;
    var card = document.getElementById(id);
    if (!card || !card.matches('details.flc-month-card')) return;
    card.open = true;
    if (shouldScroll) {
      window.setTimeout(function () { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 80);
    }
  }

  function installMonthlyHighlights() {
    if (document.getElementById('flc-monthly-highlights')) {
      openHashEvent(true);
      return;
    }

    var sections = Array.from(document.querySelectorAll('section'));
    var pageHeading = document.querySelector('h1');
    if (pageHeading && pageHeading.textContent.trim() === 'Calendar & Events' && MONTH_DATA.pageIntro) {
      var heroSection = pageHeading.closest('section');
      var heroIntro = heroSection && Array.from(heroSection.querySelectorAll('p')).find(function (paragraph) {
        return /newsletter calendar/i.test(paragraph.textContent);
      });
      if (heroIntro) heroIntro.textContent = MONTH_DATA.pageIntro;
    }
    var upcoming = sections.find(function (section) {
      var heading = section.querySelector('h2');
      return heading && heading.textContent.trim() === 'Upcoming Events';
    });
    if (!upcoming) return;

    var style = document.createElement('style');
    style.textContent = `
      #flc-monthly-highlights { background: #f4f6f8; padding: 5.5rem 1rem; }
      .flc-month-wrap { width: min(76rem, 100%); margin: 0 auto; }
      .flc-month-head { max-width: 44rem; margin: 0 auto 2.5rem; text-align: center; }
      .flc-month-kicker { display: inline-block; margin-bottom: .8rem; color: #a2222d; font-size: .78rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
      .flc-month-head h2 { margin: 0 0 .75rem; color: #092b4c; font-family: Georgia, serif; font-size: clamp(2.25rem, 5vw, 4rem); font-weight: 500; }
      .flc-month-head p { margin: 0; color: #526174; line-height: 1.7; }
      .flc-month-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; align-items: start; }
      .flc-month-card { scroll-margin-top: 7rem; overflow: hidden; border: 1px solid rgba(9,43,76,.12); border-radius: 1.35rem; background: #fff; box-shadow: 0 12px 32px rgba(9,43,76,.08); transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
      .flc-month-card:hover { transform: translateY(-2px); border-color: rgba(197,151,55,.5); box-shadow: 0 18px 38px rgba(9,43,76,.12); }
      .flc-month-card[open] { border-color: #c59737; }
      .flc-month-card summary { display: block; cursor: pointer; list-style: none; }
      .flc-month-card summary::-webkit-details-marker { display: none; }
      .flc-month-card summary:focus-visible { outline: 3px solid #c59737; outline-offset: -3px; border-radius: 1.35rem; }
      .flc-month-image { display: block; height: 14rem; overflow: hidden; background: #092b4c; }
      .flc-month-image img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
      .flc-month-card:hover .flc-month-image img { transform: scale(1.035); }
      .flc-featured-month-card .flc-month-image img { object-position: 70% center; }
      .flc-month-copy { display: block; padding: 1.35rem 1.4rem 1.25rem; }
      .flc-month-meta { display: flex; flex-wrap: wrap; justify-content: space-between; gap: .45rem 1rem; color: #a2222d; font-size: .72rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
      .flc-month-title { display: block; margin: .75rem 0 .55rem; color: #092b4c; font-family: Georgia, serif; font-size: 1.5rem; line-height: 1.15; }
      .flc-month-summary { display: block; color: #526174; line-height: 1.6; }
      .flc-month-action { display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; color: #a2222d; font-size: .75rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
      .flc-close-label { display: none; }
      .flc-month-card[open] .flc-open-label { display: none; }
      .flc-month-card[open] .flc-close-label { display: inline; }
      .flc-month-card[open] .flc-month-action span[aria-hidden] { transform: rotate(180deg); }
      .flc-month-details { padding: 0 1.4rem 1.4rem; color: #34465a; }
      .flc-month-details p { margin: 0; padding: 1.2rem; border-radius: .9rem; background: #f4f6f8; line-height: 1.75; }
      .flc-featured-month-card { grid-column: 1 / -1; }
      .flc-featured-month-card summary { display: grid; grid-template-columns: 1.2fr 1fr; }
      .flc-featured-month-card .flc-month-image { height: 100%; min-height: 20rem; }
      .flc-featured-month-card .flc-month-copy { align-self: center; padding: 2rem; }
      @media (max-width: 760px) {
        #flc-monthly-highlights { padding: 4rem 1rem; }
        .flc-month-grid { grid-template-columns: 1fr; }
        .flc-featured-month-card { grid-column: auto; }
        .flc-featured-month-card summary { display: block; }
        .flc-featured-month-card .flc-month-image { min-height: 0; height: 14rem; }
      }
      @media (prefers-reduced-motion: reduce) {
        .flc-month-card, .flc-month-image img { transition: none; }
      }
    `;
    document.head.appendChild(style);

    // Church-local (Eastern) date as YYYY-MM-DD, so past events fall off automatically.
    var todayStr = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Toronto' });
    var visibleEvents = (MONTH_DATA.events || []).filter(function (event) {
      return !event.end || event.end >= todayStr;
    });
    // Heading month always reflects the current month, no manual edit needed.
    var dynamicMonthLabel = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'America/Toronto' }) + ' Highlights';

    upcoming.id = 'flc-monthly-highlights';
    upcoming.innerHTML = '<div class="flc-month-wrap">' +
      '<header class="flc-month-head">' +
        '<span class="flc-month-kicker">' + dynamicMonthLabel + '</span>' +
        '<h2>Upcoming Events</h2>' +
        '<p>' + MONTH_DATA.intro + '</p>' +
      '</header>' +
      '<div class="flc-month-grid">' + visibleEvents.map(eventCard).join('') + '</div>' +
    '</div>';

    window.addEventListener('hashchange', function () { openHashEvent(true); });
    openHashEvent(true);
  }

  window.setTimeout(installMonthlyHighlights, 1100);
})();
