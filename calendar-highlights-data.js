// Monthly newsletter data. Update this one file when a new calendar is submitted.
// The heading month and the hiding of past events are handled automatically in
// calendar-highlights.js, using each event's "end" date (YYYY-MM-DD, last day it stays visible).
window.FLC_MONTHLY_HIGHLIGHTS = {
  monthLabel: 'August 2026 Highlights',
  pageIntro: 'Updated with the August 2026 newsletter calendar, including worship, Bible study, prayer, fellowship, and community events.',
  intro: 'Select any event card to open its dates, time, and location directly underneath. Past events drop off automatically, so this list always shows what is still to come.',
  featuredEventId: 'venvi-worship-august',
  events: [
    {
      id: 'august-sunday-worship', category: 'Sunday Worship', date: 'Sundays in August', end: '2026-08-30',
      title: 'Sunday Worship Service', image: '/images/beatiful church/495254348_1097264415771680_7802909647679742562_n.webp', alt: 'Worship at First Lutheran Church',
      summary: 'Worship at 10:00 AM every Sunday. Everyone is welcome.',
      details: '<strong>Every Sunday</strong> · 10:00 AM<br>27 Spruce St. N., Kingsville<br><br>No Sunday School this month. Stay after the service for coffee, tea, and fellowship.'
    },
    {
      id: 'august-bible-and-prayer', category: 'Faith & Fellowship', date: 'Mondays in August', end: '2026-08-31',
      title: 'Bible Study, Prayer Group & WOW', image: '/images/events/june-crops/venvi-cross-bible.jpg', alt: 'An open Bible beside a cross',
      summary: 'Monday opportunities to learn, pray, and grow together.',
      details: '<strong>Monday Bible Study</strong> · Aug 10, 17, 24 & 31 · 9:30-10:30 AM · Pastor’s Room<br><strong>Prayer Group</strong> · Mondays · 11:00 AM · Pastor’s Room (except holidays)<br><strong>WOW Bible Study</strong> · Aug 10 only · 7:00 PM · Balcony'
    },
    {
      id: 'august-fit-for-christ', category: 'Health & Fellowship', date: 'Saturdays in August', end: '2026-08-29',
      title: 'Fit for Christ: Zumba', image: '/images/events/june-named/zumba-dance.jpg', alt: 'Fit for Christ Zumba and dance class',
      summary: 'Saturday morning movement, fellowship, and encouragement.',
      details: '<strong>August 8, 15, 22 & 29</strong><br>9:45-11:00 AM<br>Church Basement'
    },
    {
      id: 'holy-communion-august', category: 'Special Worship', date: 'Saturday, August 8', end: '2026-08-08',
      title: 'Worship with Holy Communion', image: '/images/beatiful church/Sanctuary from Balcony - Summertime.webp', alt: 'First Lutheran Church sanctuary from the balcony',
      summary: 'An evening worship service with Holy Communion.',
      details: '<strong>Saturday, August 8</strong><br>6:30 PM<br>First Lutheran Church'
    },
    {
      id: 'hogs-for-hospice', category: 'Community Volunteer Event', date: 'Saturday, August 1', end: '2026-08-01',
      title: 'Hogs for Hospice Ride Support', image: '/images/events/july-featured-events.png', alt: 'Community volunteers welcoming a summer charity motorcycle ride',
      summary: 'Volunteer with First Lutheran to welcome the registered ride in Wheatley.',
      details: '<strong>Saturday, August 1</strong><br>Approximately 10:30 AM-1:30 PM<br>Wheatley'
    },
    {
      id: 'venvi-worship-august', category: 'Special Worship', date: 'Sunday, August 23', end: '2026-08-23',
      title: 'VENVI Worship Service', image: '/images/events/june-named/venvi-worship-service-june.jpg', alt: 'Cross and Bible for the VENVI worship service',
      summary: 'A special Sunday afternoon worship service at First Lutheran.',
      details: '<strong>Sunday, August 23</strong><br>2:00 PM<br>First Lutheran Church Sanctuary'
    },
    {
      id: 'food-for-all-luncheon', category: 'Featured Community Event', date: 'Wednesday, September 16', end: '2026-09-16',
      title: 'Food for All Community Luncheon', image: '/images/events/june-crops/gleaners-food-box.jpg', alt: 'A box of fresh produce and pantry food from the Gleaners',
      summary: 'Save the date for the annual Southwestern Ontario Gleaners community luncheon.',
      details: '<strong>Wednesday, September 16</strong><br>Roma Club, Leamington<br><br>An annual luncheon celebrating the work of the Southwestern Ontario Gleaners. More details and ticket information coming soon.'
    }
  ]
};
