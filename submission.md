# Project Submission Report

## 1. Student Details

- **Full Name:** Kevin Kaniaru
- **GitHub Username:** kaniarukevin
- **Email:** kevin.kaniaru@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/habittracker-164806/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/habittracker-164806/commit/1e02c8dbcf8e4c2f4c15a93a8d03b6d2d59586b2
- **Why this one?** It uses a clear `feat` type tag, a concise imperative subject line, and a body that explains exactly what the change does and why, with a footer referencing the issue it closes.

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/habittracker-164806/pull/24
- **What happened and how did you recover?** Two branches independently modified the same CSS block in different ways, causing a merge conflict when the second branch was merged into main. I resolved it by opening GitHub's web conflict editor, reviewing both versions of the block, and keeping the correct one before committing the merge.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/habittracker-164806/pull/18
- **What did you check before merging?** I reviewed the diff on the Files changed tab to confirm the change matched the linked issue's scope, checked that the commit message followed Conventional Commits format, and left a review comment summarizing what I verified before merging.

### D. One Thing You Would Do Differently

- **What would you change?** I'd build the responsive layout into the very first CSS commit instead of bolting it on as a separate media-query pass near the end. Doing it early would have meant styling every new feature — habit cards, the weekly grid, dark mode — against both desktop and mobile from the start, instead of retrofitting breakpoints afterward.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/habittracker-164806/commit/f343a15368dea54e307602889bf317dcae8556d8

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues

<img width="1499" height="741" alt="image" src="https://github.com/user-attachments/assets/08c25989-6560-415f-862f-31e78af85e91" />


* **Caption:** Three milestones — Structure & Layout, Core Functionality, and Polish & Deploy — each with granular issues linked before development began.

### B. Project Board

<img width="2998" height="1482" alt="image" src="https://github.com/user-attachments/assets/e3dc7244-b489-4f54-9a51-7c4415c0b8ae" />


* **Caption:** Kanban board showing issues tracked across columns as work progressed, from Backlog through to Done.

### C. Branching Architecture

<img width="1499" height="824" alt="image" src="https://github.com/user-attachments/assets/08aa51a5-60cd-49cb-9b8c-62cb07dd21f4" />


* **Caption:** Branch list showing conventional, issue-linked naming patterns (`feat/`, `style/`, `docs/`, `chore/`, `conflict/`) used throughout development.

### D. Pull Requests & Traceability

<img width="1499" height="824" alt="image" src="https://github.com/user-attachments/assets/7f950952-85e0-4faa-8783-3d6202534dbe" />


* **Caption:** A merged pull request showing "Closes #" linkage to its corresponding tracked issue.

---

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology

**What cause did you use?** Same-line edit conflict — two branches independently changed the value of the same CSS property (`padding`) on the same line.

#### Step 1: Generating the Clash

<img width="2278" height="526" alt="image" src="https://github.com/user-attachments/assets/259d9744-de46-43a2-8e71-cfe9119f7e39" />


* **Caption:** Merging `conflict/padding-b` into `main` after `conflict/padding-a` had already been merged, both having changed the same `padding` line to different values.

#### Step 2: Inside the Code Editor (Conflict Markers)

<img width="2042" height="1002" alt="image" src="https://github.com/user-attachments/assets/9e12b817-633b-4f4e-a979-e0e48a1a9d76" />


* **Caption:** Git could not determine which of the two padding values to keep, so it inserted conflict markers around both versions for manual resolution.

#### Step 3: Resolution & Clean Merge

<img width="1499" height="824" alt="image" src="https://github.com/user-attachments/assets/66e1e79a-7b9c-4e3a-9225-475a13a72a96" />


* **Caption:** Resolved by keeping the `1.5rem` value, removing the conflict markers, committing the merge, and pushing to main.

---

### Conflict 2 — Different Cause

**What cause did you use?** Block deletion vs. block modification (modify/delete conflict).

**Why does this cause trigger a conflict?** One branch deleted the `.site-footer` CSS rule entirely, while another branch, created from the same starting point, modified properties inside that same rule. Git cannot reconcile "this content no longer exists" with "this content changed," so it flags a conflict for manual resolution.

<img width="1846" height="290" alt="image" src="https://github.com/user-attachments/assets/1aae0dd0-b73e-46d2-8c65-29a1a6c6c6c7" />


* **Caption:** `conflict/footer-delete` removed the `.site-footer` block entirely (empty HEAD side) while `conflict/footer-edit` updated its padding, color, and font size — resolved by keeping the updated block since the HTML still references it.

---

### Conflict 3 — Different Cause

**What cause did you use?** Independent same-named addition (add/add conflict).

**Why does this cause trigger a conflict?** Two branches, both created from the same point on main, independently added a new CSS rule using the identical selector (`.dark-mode`) but with different property values. Git has no way to know which version should take precedence, so both are presented for manual resolution.

<img width="2998" height="1482" alt="image" src="https://github.com/user-attachments/assets/e532b7e6-2ac0-4afd-a61d-9db8e919348d" />


* **Caption:** `conflict/darkmode-a` and `conflict/darkmode-b` both added a `.dark-mode` rule independently — resolved by combining the preferred background/color values with the transition effect from the second branch.

---

## 6. Feedback & Evaluation

- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---

## Final Submission

> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
