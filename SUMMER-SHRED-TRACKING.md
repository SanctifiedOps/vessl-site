# Summer Shred — analytics tracking

**Page:** https://vessl-ltd.co.uk/summer-shred (source: `public/summer-shred.html`)
**Tags on page:** GTM `GTM-WRJSF9V2` + GA4 `G-H4E39MSV0Y` (mirrors the homepage).

## Conversion (GA4 key event)
- **Event:** `summer_shred_signup_click`
- **Meaning:** a click on any signup CTA — all of which go out to PT Distinction
  `…/package_signup?…&pkid=46701`. This is **buy intent**, not a completed sale
  (checkout finishes on ptdistinction.com, which GA cannot see).
- **How to define it (GA4 UI):** Admin → Events → Create event →
  name `summer_shred_signup_click`, condition `event_name = click` AND
  `link_url contains pkid=46701` → then Admin → Key events → mark it as a key event.
  Requires Enhanced Measurement → "Outbound clicks" = ON on the web data stream.
- **Alternative (GTM):** Click trigger (Click URL contains `pkid=46701`) → GA4 Event tag
  (event name `summer_shred_signup_click`, params link_url / link_text / page_location).

## Also collected automatically
- `page_view` for `/summer-shred` (Reports → Engagement → Pages).
- `click` (outbound) events for the CTAs, via enhanced measurement.

## Notes / caveats
- Page mirrors the homepage's tags. If the site double-counts `page_view`
  (GTM GA4 config + direct gtag both present), this page inherits that — it's a
  pre-existing, site-wide config matter, not specific to this page.
- UK site: analytics cookies should sit behind the same consent mechanism as the
  rest of the site (same GTM container, same domain).
- Full setup brief for the GA4/GTM web UI lives in the chat handoff to Claude-in-Chrome.
