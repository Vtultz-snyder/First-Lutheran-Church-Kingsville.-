(function () {
  function addFeaturedEvents() {
    if (document.getElementById('flc-featured-events')) return;

    var footer = document.querySelector('footer');
    if (!footer) return;

    var style = document.createElement('style');
    style.textContent = `
      #flc-featured-events { position: relative; z-index: 30; margin: 0 auto -3.25rem; padding: 0 1rem; max-width: 80rem; }
      .flc-event-banner { position: relative; min-height: 22rem; overflow: hidden; border-radius: 1.5rem; color: #fff; box-shadow: 0 24px 60px rgba(4, 24, 48, .28); background: #0a2947 url('/images/events/july-featured-events.png') center/cover no-repeat; }
      .flc-event-shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(4, 24, 48, .92) 0%, rgba(4, 24, 48, .67) 48%, rgba(4, 24, 48, .9) 100%); }
      .flc-event-content { position: relative; display: grid; grid-template-columns: .75fr 1fr 1fr; gap: 1.2rem; align-items: stretch; min-height: 22rem; padding: 2rem; }
      .flc-event-intro { align-self: center; }
      .flc-event-kicker { margin: 0 0 .45rem; color: #f5c76e; font-size: .78rem; font-weight: 800; letter-spacing: .15em; text-transform: uppercase; }
      .flc-event-title { margin: 0; max-width: 9ch; font-family: Georgia, serif; font-size: clamp(2rem, 4vw, 3.3rem); line-height: .98; }
      .flc-event-card { align-self: center; padding: 1.4rem; border: 1px solid rgba(255,255,255,.28); border-radius: 1.1rem; background: rgba(4,24,48,.62); backdrop-filter: blur(8px); }
      .flc-event-card h3 { margin: 0 0 .65rem; color: #fff; font-family: Georgia, serif; font-size: 1.45rem; line-height: 1.15; }
      .flc-event-card p { margin: .25rem 0; color: rgba(255,255,255,.9); line-height: 1.5; }
      .flc-event-date { color: #f5c76e !important; font-weight: 800; }
      .flc-event-link { display: inline-flex; margin-top: .75rem; color: #fff; font-weight: 800; text-decoration: underline; text-underline-offset: .25rem; }
      @media (max-width: 820px) {
        #flc-featured-events { margin-bottom: -2rem; }
        .flc-event-content { grid-template-columns: 1fr; padding: 1.25rem; }
        .flc-event-title { max-width: none; }
        .flc-event-banner { min-height: 0; }
      }
      #flc-footer-facebook { display: flex; flex-direction: column; align-items: center; }
      .flc-facebook-heading { margin: 0 0 .9rem; color: rgba(255,255,255,.72); font-size: .72rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
      .flc-facebook-links { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .75rem; width: min(58rem, 100%); }
      .flc-facebook-link { display: flex; align-items: center; gap: .75rem; min-height: 3.75rem; padding: .7rem .9rem; border: 1px solid rgba(255,255,255,.16); border-radius: 1rem; background: rgba(255,255,255,.065); color: rgba(255,255,255,.92); font-size: .82rem; font-weight: 750; line-height: 1.25; text-decoration: none; box-shadow: none; transition: transform .2s ease, background-color .2s ease, border-color .2s ease; }
      .flc-facebook-link:hover { transform: translateY(-2px); border-color: rgba(24,119,242,.8); background: rgba(255,255,255,.12); }
      .flc-facebook-link:focus-visible { outline: 3px solid #69a7f7; outline-offset: 3px; }
      .flc-facebook-icon { display: inline-grid; flex: 0 0 2.15rem; width: 2.15rem; height: 2.15rem; place-items: center; border-radius: 50%; background: #1877f2; color: #fff; box-shadow: 0 5px 14px rgba(0,0,0,.2); }
      @media (max-width: 640px) {
        .flc-facebook-links { grid-template-columns: 1fr; }
      }
      @media (prefers-reduced-motion: reduce) {
        .flc-facebook-link { transition: none; }
      }
      /* --- Mobile/tablet nav fixes: real 3-line hamburger + larger logo --- */
      header button[aria-label="Toggle menu"] > span,
      header button[aria-label="Toggle menu"] > svg { opacity: 0 !important; }
      header button[aria-label="Toggle menu"]::before {
        content: ""; position: absolute; left: 50%; top: 50%;
        width: 20px; height: 14px; transform: translate(-50%, -50%);
        background:
          linear-gradient(currentColor, currentColor) left top / 20px 2px no-repeat,
          linear-gradient(currentColor, currentColor) left center / 20px 2px no-repeat,
          linear-gradient(currentColor, currentColor) left bottom / 20px 2px no-repeat;
      }
      header button[aria-label="Toggle menu"][aria-expanded="true"]::before {
        width: 22px; height: 22px;
        background: linear-gradient(currentColor, currentColor) center / 22px 2px no-repeat;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      header button[aria-label="Toggle menu"][aria-expanded="true"]::after {
        content: ""; position: absolute; left: 50%; top: 50%;
        width: 22px; height: 2px; background: currentColor;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      @media (max-width: 1024px) {
        header a[href="/"] img { height: 52px !important; width: auto !important; }
      }
    `;
    document.head.appendChild(style);

    // Always add the Facebook footer links, regardless of upcoming events.
    addFooterFacebookLinks(footer);

    // Featured events, newest newsletter first. Each stays visible only until its date passes
    // (iso = YYYY-MM-DD). Add or update entries here; past ones drop off automatically.
    var FEATURED = [
      { kicker: 'Worship together', title: 'VENVI Worship Service', iso: '2026-08-23',
        dateLabel: 'Sunday, August 23 · 2:00 PM',
        desc: 'Join us for a special afternoon worship service at First Lutheran Church.',
        link: '/calendar-events/#venvi-worship-august', linkLabel: 'View church calendar' },
      { kicker: 'Community event', title: 'Food for All Community Luncheon', iso: '2026-09-16',
        dateLabel: 'Wednesday, September 16 · Roma Club, Leamington',
        desc: 'Save the date for the annual Southwestern Ontario Gleaners community luncheon.',
        link: '/calendar-events/#food-for-all-luncheon', linkLabel: 'See event details' }
    ];
    var todayStr = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Toronto' });
    var upcoming = FEATURED.filter(function (ev) { return ev.iso >= todayStr; }).slice(0, 2);
    if (!upcoming.length) return; // nothing upcoming: skip the banner entirely

    var cards = upcoming.map(function (ev) {
      return '<article class="flc-event-card">' +
        '<p class="flc-event-kicker">' + ev.kicker + '</p>' +
        '<h3>' + ev.title + '</h3>' +
        '<p class="flc-event-date">' + ev.dateLabel + '</p>' +
        '<p>' + ev.desc + '</p>' +
        '<a class="flc-event-link" href="' + ev.link + '">' + ev.linkLabel + '</a>' +
      '</article>';
    }).join('');

    var section = document.createElement('section');
    section.id = 'flc-featured-events';
    section.setAttribute('aria-labelledby', 'flc-featured-heading');
    section.innerHTML =
      '<div class="flc-event-banner">' +
        '<div class="flc-event-shade" aria-hidden="true"></div>' +
        '<div class="flc-event-content">' +
          '<div class="flc-event-intro">' +
            '<p class="flc-event-kicker">Featured events</p>' +
            '<h2 class="flc-event-title" id="flc-featured-heading">Coming up</h2>' +
          '</div>' +
          cards +
        '</div>' +
      '</div>';

    footer.parentNode.insertBefore(section, footer);
  }

  function addFooterFacebookLinks(footer) {
    if (document.getElementById('flc-footer-facebook')) return;

    var copyright = Array.from(footer.querySelectorAll('p')).find(function (paragraph) {
      return paragraph.textContent.indexOf('All rights reserved') !== -1;
    });
    var copyrightRow = copyright && copyright.parentElement;
    if (!copyrightRow || !copyrightRow.parentElement) return;

    var social = document.createElement('div');
    social.id = 'flc-footer-facebook';
    social.setAttribute('aria-label', 'Facebook pages');
    social.style.cssText = 'position:relative;z-index:10;margin-top:2rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.1)';
    social.innerHTML = `
      <p class="flc-facebook-heading">Follow us on Facebook</p>
      <div class="flc-facebook-links">
        <a class="flc-facebook-link" href="https://www.facebook.com/lutheranchurchkingsville" target="_blank" rel="noopener noreferrer" aria-label="First Lutheran Church Kingsville on Facebook" title="First Lutheran Church Facebook">
          <span class="flc-facebook-icon"><svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M14 8.5V6.8c0-.8.5-1 1-1h2.6V2.1L14.5 2C11.1 2 10 4.1 10 6.3v2.2H7v4h3V22h4v-9.5h3.2l.5-4H14Z"/></svg></span>
          <span>First Lutheran Church</span>
        </a>
        <a class="flc-facebook-link" href="https://www.facebook.com/profile.php?id=61576675765454" target="_blank" rel="noopener noreferrer" aria-label="The GYM — God’s Youth Ministry on Facebook" title="Youth Ministry Facebook">
          <span class="flc-facebook-icon"><svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M14 8.5V6.8c0-.8.5-1 1-1h2.6V2.1L14.5 2C11.1 2 10 4.1 10 6.3v2.2H7v4h3V22h4v-9.5h3.2l.5-4H14Z"/></svg></span>
          <span>Youth Ministry</span>
        </a>
        <a class="flc-facebook-link" href="https://www.facebook.com/profile.php?id=61575627140647" target="_blank" rel="noopener noreferrer" aria-label="Youth Unlimited YFC Kingsville on Facebook" title="Youth Unlimited YFC Kingsville Facebook">
          <span class="flc-facebook-icon"><svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M14 8.5V6.8c0-.8.5-1 1-1h2.6V2.1L14.5 2C11.1 2 10 4.1 10 6.3v2.2H7v4h3V22h4v-9.5h3.2l.5-4H14Z"/></svg></span>
          <span>Youth Unlimited YFC Kingsville</span>
        </a>
      </div>`;
    copyrightRow.parentElement.insertBefore(social, copyrightRow);
  }

  // Becky's review content fixes (Aug 2026), applied after hydration.
  function applyContentFixes() {
    try {
      var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
      var nodes = [], n;
      while ((n = walker.nextNode())) nodes.push(n);
      nodes.forEach(function (node) {
        var v = node.nodeValue;
        if (!v || !v.trim()) return;
        var nv = v;
        // Founding year: congregation born 1942 (not 1947)
        nv = nv.replace(/\b1947\b/g, '1942').replace(/over 75 years/g, 'over 80 years');
        // Communion: closed communion, dates announced in advance (not 1st & 3rd Sundays)
        nv = nv.replace('1st & 3rd Sundays', 'Announced in advance');
        nv = nv.replace(/We celebrate the Lord.s Supper on the first and third Sundays of each month, and on festival days\. All baptized believers in Christ are welcome to receive\./,
          'We practice closed communion, and our communion service dates are announced in advance. If you would like to commune with us, please speak with our leadership beforehand.');
        // Worship music: worship band, no organ
        nv = nv.replace(/Our service includes traditional hymns led by piano and organ, with congregational singing that unites voices in praise\./,
          'Our worship includes hymns and songs led by our worship band, with congregational singing that unites voices in praise.');
        if (nv !== v) node.nodeValue = nv;
      });
      // Community use: remove the FunFit4Youth entries (moving out of the basement)
      Array.prototype.forEach.call(document.querySelectorAll('h3, h4'), function (h) {
        if (/FunFit4Youth/i.test(h.textContent)) {
          var card = h.closest('article') || h.closest('[class*="rounded"]') || h.closest('li') || h.parentElement;
          if (card && card !== document.body && card.parentElement) card.remove();
        }
      });
    } catch (e) { /* no-op */ }
  }

  function scheduleFeaturedEvents() {
    window.setTimeout(addFeaturedEvents, 900);
    // Re-run content fixes a few times to catch elements that animate in after load.
    [600, 1200, 2500, 4000].forEach(function (d) { window.setTimeout(applyContentFixes, d); });
  }

  if (document.readyState === 'complete') {
    scheduleFeaturedEvents();
  } else {
    window.addEventListener('load', scheduleFeaturedEvents, { once: true });
  }

  if (window.location.pathname.indexOf('/calendar-events') === 0) {
    var monthlyDataScript = document.createElement('script');
    monthlyDataScript.src = '/calendar-highlights-data.js';
    var monthlyScript = document.createElement('script');
    monthlyScript.src = '/calendar-highlights.js';
    monthlyScript.defer = true;
    monthlyDataScript.onload = function () { document.head.appendChild(monthlyScript); };
    document.head.appendChild(monthlyDataScript);
  }
})();
