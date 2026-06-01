# Wuslah Business Specs and Feature Distillation

Source: `C:\Users\syeda\Downloads\Wuslah_BRD_v2.pdf`  
BRD version: 1.0, May 2026

## 1. Product Direction

Wuslah is a personal connection tracker for helping people remember the people they meet. The product should feel warm, human, and memory-oriented rather than like a sales CRM.

Core promise:

- Help users remember people, context, and relationship details.
- Make follow-ups and birthdays harder to miss.
- Turn scattered networking notes into a searchable personal relationship system.

Primary audience:

- Students and young professionals, especially people doing coffee chats, events, introductions, and early-career networking.

Secondary audience:

- Community builders, coaches, recruiters, hosts, and socially active people who meet many people.

Future enterprise audience:

- Organizations that need shared contact intelligence, demographic profiling, and team-level contact visibility.

Positioning rules:

- Use language around memory, care, relationships, and being a better friend or colleague.
- Avoid leading with CRM, pipeline, sales, or productivity language in user-facing copy.
- Tone should be warm, personal, lightly aspirational, and not corporate.

## 2. Product Tiers

### Free Tier

Price: `$0`

Purpose: Let users capture a small personal network and experience the core memory loop.

Business limits:

- Maximum 10 contacts.
- Interaction log capped to the last 3 entries per contact.
- One reminder per month for one person only.
- Dashboard is intentionally limited.
- Upgrade prompt appears when user reaches 8+ contacts.
- Hard upgrade gate appears at 10 contacts.

Required features:

- Authentication with email and Google SSO.
- Contact card.
- Memory notes.
- Tags.
- Search by name, company, tag, and relationship type.
- Basic interaction log.
- Basic dashboard.
- One in-app reminder.
- Onboarding flow.

### Premium Tier

Price: `$14/month` or `$99/year`

Purpose: Convert active users who are maintaining a larger network and need automation, reminders, analytics, and AI help.

Required feature upgrades:

- Unlimited contacts.
- Unlimited interaction history.
- Unlimited follow-up and birthday reminders.
- Birthday email alerts.
- Weekly digest email with 3 people to reconnect with.
- Last-contacted tracker.
- Overdue relationship flags.
- Groups/circles.
- Full notes search.
- CSV export.
- Full analytics dashboard.
- AI memory assistant.
- AI talking points.
- Stripe subscription billing.

### Pro Tier

Target price: `$29-$35/month`

Planned phase: Phase 3 / Month 4

Purpose: Add heavier AI workflows and assisted relationship maintenance.

Required features:

- Speech-to-log.
- Profile intelligence.
- Auto outreach with user approval.
- Everything in Premium.

Important constraint:

- Auto outreach must require user review and manual confirmation before sending. It should not silently send messages.

### Enterprise Tier

Price: Custom

Planned phase: Phase 4 / Months 4-8 build, later sales motion.

Purpose: Support team-based relationship intelligence and organization-level reporting.

Required features:

- Team workspaces.
- Shared contact pools.
- Role-based access control.
- Admin dashboard.
- Enhanced demographic profiling.
- SSO/security controls.
- REST API and webhooks.
- Data export and governance controls.
- Dedicated onboarding and support.
- Everything in Pro.

## 3. Phase 1 Build Scope: Free Tier

Target timing: Weeks 1-2 from project start.

This is the minimum viable product surface that should be built first.

### 3.1 Authentication

Users must be able to:

- Sign up and sign in with email.
- Sign up and sign in with Google SSO.
- Access only their own contacts and reminders.

Implementation note:

- The BRD recommends Supabase Auth, but this repository already uses Clerk and Convex. Treat Clerk as the likely auth layer unless the project direction changes.

### 3.2 Contact Card

Each contact should support:

- Name.
- Job title.
- Company.
- City.
- Relationship type.
- How you met.
- Date met.
- Birthday.
- Tags.
- Free-form memory notes.

Expected UX:

- Users can create, view, edit, and delete contacts.
- Contact creation should feel quick and lightweight.
- Free users cannot create more than 10 contacts.

### 3.3 Memory Notes

Each contact needs a free-form notes field for personal details and relationship context.

Examples of supported content:

- Personal details.
- Shared interests.
- Conversation history.
- Context from the first meeting.
- Things to remember for future conversations.

### 3.4 Tags

Users must be able to:

- Add tags to contacts.
- Remove tags from contacts.
- Search contacts by tag.

Tags should support flexible user-created labels such as `university`, `founder`, `coffee-chat`, or `tech-network`.

### 3.5 Search

Free tier search must cover:

- Name.
- Company.
- Tag.
- Relationship type.

Premium search later expands to notes content.

### 3.6 Interaction Log

Each contact should have dated interaction entries.

Free tier limits:

- Show only the last 3 entries per contact.
- Prevent or gate access to older entries if more exist after upgrade/downgrade scenarios.

Each entry should include:

- Interaction date.
- Free-form summary.
- Optional interaction type if useful for the UI.

### 3.7 Reminder

Free users get:

- One reminder per month.
- Reminder can be attached to one contact.
- Reminder appears as an in-app notification.

Premium expands this to unlimited reminders and email alerts.

### 3.8 Free Dashboard

The Free dashboard must show:

- Total contacts out of the 10-contact cap.
- Recently added contacts, limited to the last 2.
- Upcoming birthdays in the next 30 days, limited to 3 shown with the rest locked.
- Next reminder due.
- Upgrade prompt banner when the user has 8+ contacts.

### 3.9 Onboarding

The onboarding flow should guide the user through:

- Creating their first contact.
- Adding the first memory note.
- Logging the first interaction.

Activation signal:

- The BRD defines 5+ contacts added per user as a key activation metric.

## 4. Phase 2 Build Scope: Premium Tier

Target timing: Months 1-3.

### Month 1: Limits, Reminders, and Relationship Status

Features:

- Unlimited contacts.
- Full interaction log with no entry cap.
- Unlimited reminders with custom dates.
- Birthday email alerts.
- Last-contacted tracker showing days since last interaction.
- Overdue contact flag for contacts with no interaction in 90+ days.

Business rule:

- A contact is overdue when there has been no interaction logged for 90+ days.

### Month 2: Organization, Export, and Analytics

Features:

- Groups/circles with named collections and contact assignment.
- Full notes search across contact memory notes.
- CSV export of all contact data.
- Premium dashboard.

Premium dashboard must include:

- Total contacts with growth trend versus last month.
- Relationship health score: percentage of contacts touched in the last 60 days.
- Overdue contacts.
- Upcoming birthdays in a 60-day window.
- Weekly digest preview.
- Interaction activity chart by month.
- Top tags.
- Streak of consecutive days with an interaction logged.
- Contacts by relationship type.

### Month 3: AI and Billing

Features:

- Weekly digest email showing 3 contacts the user should reconnect with.
- AI memory assistant.
- AI talking points.
- Stripe billing for monthly and annual subscriptions.
- Upgrade, downgrade, and cancellation flows.

AI memory assistant:

- User asks what they know about a contact.
- System returns a structured summary from the contact card, notes, and interaction log.

AI talking points:

- System generates 3 suggested conversation starters before a meeting.
- Suggestions should be based on known contact data and prior notes.

## 5. Phase 3 Build Scope: Pro Tier

Target timing: Month 4.

### 5.1 Speech-to-Log

Users should be able to record a voice note after a meeting and turn it into structured contact data.

Required flow:

1. User records audio in app.
2. Audio is transcribed.
3. Transcript is parsed into structured fields.
4. App pre-fills contact card fields and interaction log.
5. User reviews and edits extracted fields.
6. User confirms before saving.

Fields to extract:

- Name.
- Company.
- Role.
- Key facts.
- Notes.
- Interaction summary.

BRD stack note:

- BRD recommends Whisper for transcription and Claude for extraction. This repo currently includes AI SDK/OpenRouter dependencies, so provider choice should be confirmed before implementation.

### 5.2 Profile Intelligence

Users should be able to input a name plus company or LinkedIn URL and receive a publicly sourced profile summary.

Required inputs:

- Name and company, or
- LinkedIn URL.

Required output:

- Role history.
- Stated interests.
- Public activity.
- Notable mentions.
- Source links.

Important data rule:

- All enriched fields must be clearly labeled as publicly sourced.

### 5.3 Auto Outreach

Users should be able to generate and send birthday messages and follow-up nudges.

Required components:

- Gmail OAuth integration.
- Possible iMessage bridge through Zapier or Mac app integration.
- User-editable message templates.
- Review and approval flow.
- Outreach log per contact.

Required safety rule:

- Every outbound message requires user review and manual confirmation before send.

## 6. Phase 4 Build Scope: Enterprise Tier

Target timing:

- Months 4-6: Core enterprise infrastructure.
- Months 6-7: Private beta and pre-orders.
- Month 8: Enterprise launch.

### 6.1 Team Workspaces

Organizations need multi-user workspaces with:

- Invite by email.
- Shared contact pool.
- Team-level settings.
- User membership management.

### 6.2 Role-Based Access

Required roles:

- Admin.
- Editor.
- Viewer.

Permissions should control:

- Contact visibility.
- Contact editing.
- Exports.
- Admin dashboard access.
- API access.

### 6.3 Shared Contact Pool

Teams need a shared database of contacts visible and editable according to role permissions.

Key needs:

- Avoid duplicate contact confusion.
- Track who created or last updated a contact.
- Support team-level reporting.

### 6.4 Enhanced Demographic Profiling

Enterprise requires enriched demographic and professional data.

BRD examples:

- Age range.
- Income bracket.
- Professional background.
- Network mapping.

Implementation caution:

- This area has privacy, consent, data sourcing, and compliance risk. It should be reviewed before implementation and may need explicit user-facing disclosures, opt-outs, and strict sourcing rules.

### 6.5 Admin Dashboard

Enterprise dashboard must include:

- Team-level contact coverage map.
- Demographic profile breakdown.
- API usage and rate-limit tracking.
- User activity by team member.
- Enrichment usage.
- Export and governance controls.

### 6.6 Enterprise Auth and API

Required features:

- SAML 2.0 / Okta SSO.
- REST API for reading and writing contact data.
- Webhook support.
- API usage analytics.
- Security controls.

### 6.7 Governance and Launch

Enterprise launch requires:

- Full organization data export.
- GDPR-compliant deletion flows.
- Quote request form.
- Manual contract generation.
- Dedicated onboarding flow.
- Guided workspace setup.
- Team import.
- Admin configuration.

## 7. Core Data Objects

### User

Represents an individual account.

Likely fields:

- Auth identity ID.
- Email.
- Name.
- Plan/tier.
- Subscription status.
- Created date.
- Last active date.

### Contact

Represents a person the user or team wants to remember.

Likely fields:

- Owner user ID or workspace ID.
- Name.
- Job title.
- Company.
- City.
- Relationship type.
- How met.
- Date met.
- Birthday.
- Notes.
- Tags.
- Group IDs.
- Created date.
- Updated date.

### Interaction

Represents a dated relationship touchpoint.

Likely fields:

- Contact ID.
- User ID.
- Interaction date.
- Summary.
- Type.
- Created date.

### Reminder

Represents a future follow-up or birthday reminder.

Likely fields:

- Contact ID.
- User ID.
- Reminder date.
- Reminder type.
- Message/note.
- Completed status.
- Notification channel.

### Group or Circle

Represents a named collection of contacts.

Likely fields:

- Owner user ID or workspace ID.
- Name.
- Description.
- Contact IDs or join records.

### Subscription

Represents billing and plan access.

Likely fields:

- User ID or workspace ID.
- Stripe customer ID.
- Stripe subscription ID.
- Plan.
- Status.
- Current period end.

### Workspace

Enterprise-only team account.

Likely fields:

- Organization name.
- Plan.
- Members.
- Roles.
- SSO settings.
- Created date.

## 8. Gating and Entitlement Rules

Free tier:

- 10-contact cap.
- Last 3 interaction entries visible per contact.
- One reminder per month for one contact.
- Limited dashboard.
- Upcoming birthdays locked after 3 visible birthdays.
- Upgrade prompt at 8+ contacts.

Premium tier:

- Unlimited contacts.
- Unlimited interaction log.
- Unlimited reminders.
- Email alerts.
- Full dashboard.
- AI memory features.
- CSV export.

Pro tier:

- Premium features plus speech-to-log, profile intelligence, and auto outreach.

Enterprise tier:

- Pro features plus workspaces, shared data, admin controls, API, SSO, and governance.

## 9. Notifications and Email

Required notification types:

- In-app reminder due.
- Birthday alert.
- Weekly reconnect digest.

Free tier:

- In-app reminder only.

Premium and above:

- Birthday email alerts.
- Weekly digest email.
- Unlimited reminders.

Email provider from BRD:

- Resend or SendGrid.

## 10. Analytics and Success Metrics

Phase 1 targets:

- 100 signups in first 2 weeks.
- 30%+ day-7 retention.
- 5+ contacts added per user as activation signal.

Phase 2 targets:

- 5-10% free-to-premium conversion rate.
- 100 monthly paid users by Month 4.
- `$800-$1,400` MRR by Month 4.

Phase 3 targets:

- 50 Pro subscribers by Month 8.
- `$2,000-$5,000` MRR by Month 8.

Phase 4 targets:

- 3-5 enterprise contracts by Month 18.
- `$50,000+` ARR by Month 18.

Product analytics should track:

- Signup conversion.
- Onboarding completion.
- First contact created.
- First note added.
- First interaction logged.
- Contacts per user.
- Reminder creation.
- Reminder completion.
- Search usage.
- Dashboard usage.
- Upgrade prompt impressions.
- Upgrade conversions.
- Churn/cancellation.

BRD stack note:

- BRD recommends PostHog for analytics.

## 11. Go-To-Market Requirements That Affect Product

The product should support launch content and early founder-led marketing.

Useful product surfaces for GTM:

- Polished onboarding that can be demoed in short videos.
- Clear before/after value moments: forgotten details become remembered details.
- Upgrade moments around contact limits, birthdays, reminders, and reconnect prompts.
- Shareable founder demos using seeded example contacts.

Month 0 content plan from BRD:

- TikTok / Instagram Reels: 3 posts/day, 90 pieces.
- Twitter / X: 3 posts/day, 90 pieces.
- LinkedIn: 2 posts/week per founder, 16 posts/month.
- Reddit: 1 post/week, 4 posts/month.

## 12. Tech Stack Notes and Repo Alignment

BRD recommended stack:

- Frontend: Next.js + Tailwind CSS.
- Backend: Supabase.
- AI: Anthropic Claude.
- Speech: OpenAI Whisper.
- Email: Resend or SendGrid.
- Payments: Stripe.
- Analytics: PostHog.
- Deployment: Vercel.

Current repository signals:

- Next.js app.
- Tailwind/shadcn-style UI setup.
- Convex backend dependency.
- Clerk dependency.
- AI SDK and OpenRouter dependency.

Decision needed:

- Confirm whether to follow the BRD's Supabase recommendation or continue with the repo's Convex + Clerk direction.

Recommended default for this repo:

- Keep Convex as backend and Clerk as auth unless there is a deliberate migration decision. The business requirements do not depend on Supabase specifically.

## 13. Open Product Decisions

These should be resolved before or during implementation planning:

- Should relationship type be a fixed enum, user-defined, or both?
- Should birthday support partial dates when the user only knows month/day?
- Should reminders have recurring behavior in Phase 1 or only one-time dates?
- Should interaction type be required or optional?
- What happens to contacts beyond 10 if a Premium user downgrades to Free?
- What data is included in CSV export?
- Should groups/circles allow one contact in multiple groups?
- Which AI provider should be used for memory assistant and extraction?
- What privacy language is required for AI processing of personal notes?
- What public data sources are acceptable for profile intelligence?
- How should users review, edit, and approve auto outreach?
- What compliance requirements apply before enterprise demographic profiling?

## 14. Recommended Implementation Order

1. Auth and user identity.
2. Contact CRUD with Free tier cap.
3. Contact notes, tags, and search.
4. Interaction log with Free tier cap.
5. Reminder model and one in-app reminder.
6. Free dashboard and upgrade gates.
7. Onboarding flow.
8. Billing and entitlement system.
9. Premium limits and full dashboard.
10. Email notifications and weekly digest.
11. AI memory assistant and talking points.
12. Pro AI workflows.
13. Enterprise workspaces and permissions.

