# Handoff: "A Second Brain In The Room" section

**Site:** benjipow.com
**Repo:** `sf-marketing-landing` (GitHub) → auto-deploys to Cloudflare Pages
**What changes:** Replace the old "Build Your World" section with a new highlight section ("A second brain in the room") plus a 1–5 "What I do" services list.

## Files

| File | What it is |
|---|---|
| `second-brain-snippet.html` | The paste-ready code. This is the one you use. |
| `second-brain-section.html` | Full standalone preview page. Open it in a browser to see the design. |

## What's in the section

1. **Scrolling ticker** (lime) with three brand lines. Stops moving for visitors who have reduced motion turned on.
2. **Highlight:** "Your Business Bestie for Solopreneurs" pill, giant "A second brain in the room" headline, intro copy, "Book a free call" button, and a lavender panel: *Your options / What they cost / What I'd do first / Then we get it done.*
3. **What I do, 1–5:** Get found on Google and AI search · Website copy that sounds like you · Branding and messaging · Content that has a plan · Creative help, done for you.

Palette: #1F1F1F, #262626, #D2EB8C, #C6B7F6, #EF8246, #F2F2F2. Fonts: Playfair Display + Inter (Google Fonts). All CSS is scoped under `.bb`, so it won't affect the rest of the site.

---

## Go-live steps (GitHub + Cloudflare Pages)

### 1. Get the latest code
```bash
cd sf-marketing-landing
git pull
git checkout -b second-brain-section
```

### 2. Find the old section
Open the homepage file (usually `index.html`) and search for **"Build Your World"** (or "BUILD YOUR WORLD"). Select the whole section it lives in, from its opening tag to its closing tag, and delete it.

> Tip: GHL exports wrap sections in `<div>`s with long generated class names. Delete the outermost wrapper for that section, so you don't leave an empty gap.

### 3. Paste the new section
- Copy the two `<link rel="preconnect">` lines and the Google Fonts `<link>` from the top of `second-brain-snippet.html` into the page's `<head>`. Skip this if your site already loads Playfair Display and Inter.
- Paste the `<style>…</style>` block and the `<section class="bb">…</section>` exactly where the old section was.

### 4. Update the links
Search the pasted code for these placeholders and swap in real URLs:

| Placeholder | Replace with |
|---|---|
| `#contact` | Your booking or contact page (the "Book a free call" button) |
| `#seo` | SEO / AI search service page |
| `#copy` | Website copy service page |
| `#brand` | Branding and messaging page |
| `#content` | Content planning page |
| `#creative` | Done-for-you creative page |

If a service page doesn't exist yet, point it at `#contact` for now.

### 5. Check it locally
Open `index.html` in your browser (or run `npx serve .` in the repo folder). Check:
- [ ] Fonts load (headline is Playfair Display, not Times New Roman)
- [ ] Old "Build Your World" section is gone, no blank gap
- [ ] Every link goes somewhere real
- [ ] Shrink the browser to phone width: the 1–5 list stacks with the number on the left

### 6. Push it live
```bash
git add .
git commit -m "Replace Build Your World with Second Brain section"
git push -u origin second-brain-section
```
Cloudflare Pages builds a **preview link** for the branch. Open it from the Cloudflare dashboard (Workers & Pages → your project → Deployments), check it on your phone, then merge to `main`:
```bash
git checkout main
git merge second-brain-section
git push
```
Cloudflare deploys `main` to benjipow.com in a minute or two. If you still see the old version, hard-refresh (Cmd+Shift+R).

### 7. If something breaks
Roll back from Cloudflare: Deployments → pick the previous deployment → **Rollback**. Or `git revert` the commit and push.

---

## Prompt for Claude Code (optional)

If you'd rather have Claude Code do steps 1–6, paste this in the repo:

> In this repo, replace the homepage section titled "Build Your World" with the code in `second-brain-snippet.html`. Move its Google Fonts `<link>` tags into the `<head>` unless Playfair Display and Inter are already loaded. Remove the old section's outermost wrapper so no empty gap remains. Replace the placeholder links: `#contact` → [booking URL], `#seo` → [URL], `#copy` → [URL], `#brand` → [URL], `#content` → [URL], `#creative` → [URL]. Don't change any other section. Work on a branch named `second-brain-section`, commit, and push so Cloudflare Pages creates a preview deploy.
