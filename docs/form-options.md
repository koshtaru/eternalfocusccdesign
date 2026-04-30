# Contact Form Service Options

Current setup uses Netlify Forms (100 submission/month free limit).
These are drop-in replacements that require minimal code changes.

---

## 1. Web3Forms — Recommended

- **Cost:** Free, unlimited submissions forever
- **Setup:** Get a free access key at web3forms.com (one email verification)
- **Code change:** Update fetch URL + add one hidden input with access key
- **Notes:** No branding, no spam issues, clean API

```tsx
// Add inside <form>
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />

// Update fetch in handleSubmit
const res = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body,
});
```

---

## 2. Formsubmit — No Account Required

- **Cost:** Free, unlimited submissions
- **Setup:** None — use your email address directly in the fetch URL
- **Code change:** Update fetch URL only
- **Notes:** First submission triggers a one-time email verification to your address

```tsx
// Update fetch in handleSubmit
const res = await fetch('https://formsubmit.co/appointments@eternalfocuscc.org', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body,
});
```

---

## 3. EmailJS — 200 emails/month free

- **Cost:** Free up to 200/month
- **Setup:** Account + email template config in EmailJS dashboard + their SDK
- **Code change:** Replace fetch with EmailJS SDK call
- **Notes:** More setup but gives full control over email formatting/template

---

## Current file to edit

`app/contact/page.tsx` — `handleSubmit` function and form hidden inputs
