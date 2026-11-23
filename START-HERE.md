# Start here

This is the First Lutheran Church Kingsville website.

Live at **https://kingsvillelutheran.church**

You do not need to know how to code to run this site. You tell Claude what you
want changed, in plain English, and it does the work and publishes it. Everything
Claude needs to know about this site is written down in `CLAUDE.md`, which it
reads automatically before it touches anything.

## What you need

1. **A Claude paid plan.** Pro is the entry level. Check whether there is a
   nonprofit rate.
2. **Access to this repository** on GitHub. Victoria adds you.
3. **Access to the Cloudflare account** that serves the site. Victoria adds you.

Nothing is installed on your computer. You work in a browser.

## How to make a change

1. Go to claude.ai/code and open this repository.
2. Say what you want in ordinary words.
3. Claude makes the change, checks the site in a real browser, and shows you
   what it did.
4. Say yes to publish. It goes live in about a minute.

## Things you will actually ask for

**The monthly newsletter.** Attach Becky's PDF and say "do this month's
newsletter." Claude updates the calendar page and the "Coming up" banner on the
home page, then shows you before publishing.

**The statement of faith.** Attach the new PDF and say "replace the statement of
faith." The download link on the Worship Services page never changes, so anything
you have printed or shared keeps working.

**Anything else.** "Change the Sunday service time." "Add a photo to the history
timeline." "Sunday School is starting again, update the page." Just say it.

## Two rules worth knowing

**Nothing goes live until you say so.** Claude can edit and check as much as it
likes without the public seeing anything. Only publishing changes the real site.

**Always let it check before you publish.** This site is built in a way where a
change can look correct and silently not take effect. There is a checker built in
that catches it. Claude knows to run it. If it ever says it skipped the check,
ask it to run `./check-site.sh`.

## If something looks wrong on the live site

Say "check the live site." Claude will load every page the way a visitor does and
tell you what is broken. Changes can be undone, so nothing is permanent.

## Who to ask

- **Victoria Snyder**, who built it: victoria.tultz@gmail.com, 716.778.4786
- **Becky Bunn** sends the monthly newsletter: bbunn300@gmail.com

## Where things live

- **The site's code and the notes for Claude:** this repository
- **Hosting:** Cloudflare
- **The domain name:** registered at GoDaddy, pointed at Cloudflare
