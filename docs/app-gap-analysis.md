# Wuslah App Gap Analysis

Date: 2026-05-31

Source reviewed: `C:/Users/syeda/Downloads/Wuslah_Phase_Features_v2.pdf`

## Executive summary

The current app is an early scaffold for Wuslah rather than an implemented relationship-management product. It has a polished landing page, Clerk authentication, Convex wiring, a Clerk-to-Convex user sync webhook, a protected dashboard shell, a static/mock CRM-style kanban board, and a generic OpenRouter chat API route.

The PDF roadmap describes a phased product centered on personal relationship memory: contacts, notes, tags, search, interaction logs, reminders, birthdays, freemium limits, premium dashboards, AI contact memory, billing, voice-to-log, enrichment, outreach, teams, admin controls, and APIs.

The main build gap is that the app does not yet have the core Wuslah domain model. There are no persisted contacts, notes, tags, interactions, reminders, birthdays, groups, subscriptions, dashboard metrics, notification jobs, AI memory functions, or tier enforcement. The dashboard currently presents static deal data, which is visually useful but does not match the Phase 1 contact-memory product described in the PDF.

## What the app already has

### Frontend shell

- Next.js 16 app router project with React 19 and TypeScript.
- Tailwind/shadcn-style component setup with local UI primitives.
- Branded Wuslah landing page at `/`.
- Landing sections for hero, features, testimonials, CTA, and footer.
- Wuslah logo/mark components.
- Clerk-hosted sign-in page at `/sign-in`.
- Clerk-hosted sign-up page at `/sign-up`.
- Protected dashboard route at `/dashboard`.
- Authenticated sidebar layout with sections for Workspace, CRM, and Projects.
- Static dashboard metric cards for pipeline value, open projects, and new contacts.
- Static kanban board with draggable deal cards and an inspect drawer.

### Authentication and user sync

- Clerk provider configured in `app/layout.tsx`.
- Clerk middleware protects `/dashboard(.*)`.
- Convex client is wrapped with `ConvexProviderWithClerk`.
- Convex auth config exists in `convex/auth.config.ts`.
- Clerk webhook endpoint exists at `app/api/webhooks/clerk/route.ts`.
- Webhook handles `user.created` and `user.updated`.
- Webhook upserts users into Convex through `users:upsertFromClerk`.

### Convex backend

- Convex is installed and generated files are present.
- `convex/schema.ts` defines a single `users` table.
- `users` table stores Clerk user id, email, first name, last name, image URL, created timestamp, and updated timestamp.
- `users` table has a `by_clerk_user_id` index.
- `convex/users.ts` exposes `upsertFromClerk`.

### AI plumbing

- `app/api/chat/route.ts` exposes a streaming chat endpoint.
- Uses the Vercel AI SDK and OpenRouter.
- System prompt says the assistant is for a professional networking app.
- No app data is connected to the chat route yet.

### Environment and tooling

- Scripts exist for `dev`, `build`, `start`, `lint`, `format`, and `typecheck`.
- `.env.example` includes Clerk, Convex, and OpenRouter variables.
- README is still a generic Next.js/shadcn template.

## Important distinction: implemented vs. placeholder

Several visible surfaces imply CRM/networking functionality, but they are not backed by the product data model yet.

- The dashboard cards are hard-coded.
- The kanban board is client state only and resets on reload.
- The sidebar links for Inbox, Calendar, Contacts, Accounts, Deals, Campaigns, Projects, Tasks, and Settings point to `#`.
- The landing page feature claims mention connection tracking, reminders, discovery, and integrations, but those features are not implemented.
- The OpenRouter chat route is generic and does not read contact notes, interaction logs, reminders, or user data.

## PDF roadmap requirements

### Phase 1: Free and Premium

Free, Week 1:

- User authentication with email and Google SSO.
- Contact card with name, job title, company, city, relationship type, how you met, date met, and birthday.
- Memory notes as free-form text per contact.
- Tags that can be added and removed per contact.
- Search by name, company, tag, and relationship type.

Free, Week 2:

- Interaction log with dated entries, capped at last 3 per contact.
- Free dashboard with contact count out of 10, recently added contacts, and upcoming birthdays with only 3 shown.
- Reminder feature: 1 per month, for 1 contact only, in-app notification.
- Freemium gate: lockout at 10 contacts and upgrade prompt at 8+.
- Onboarding flow for first contact, first note, and first log entry.

Premium, Month 1:

- Unlimited contacts.
- Full interaction log with no entry cap.
- Unlimited reminders with custom date.
- Birthday email alerts.
- Last contacted tracker based on days since last log entry per contact.
- Overdue flag for contacts with no interaction in 90+ days.

Premium, Month 2:

- Groups/circles with contact assignment.
- Full notes search across all contact memory notes.
- CSV export for all contact data.
- Premium dashboard with relationship health score, overdue contacts, activity chart, top tags, streak, and contacts by relationship type.

Premium, Month 3:

- Weekly digest email with 3 contacts to reconnect with.
- AI memory assistant that summarizes a contact from notes and logs.
- AI talking points from contact notes before a meeting.
- Stripe billing for monthly/yearly Premium, upgrade, downgrade, and cancellation.

### Phase 2: Pro

- Speech-to-log flow with in-app voice recording, Whisper transcription, Claude extraction, auto-population, and review/confirm before save.
- Profile intelligence flow from name/company or LinkedIn URL, public data gathering, synthesis, and labelled public-source enrichment.
- Auto outreach with Gmail OAuth, iMessage bridge, editable templates, approval flow, and outreach logs.
- Pro dashboard with voice usage, enrichment usage, outreach activity, and Pro billing.

### Phase 3: Enterprise

- Team workspaces with shared contact pools and email invites.
- Role-based access with admin, editor, and viewer roles.
- Enhanced demographic profiling through third-party enrichment.
- Admin dashboard for coverage, activity, usage, and API consumption.
- SSO with SAML/Okta.
- REST API and webhooks for contact data.
- Private beta/pre-order flow.
- Custom pricing, contract flow, dedicated onboarding, org export, and deletion/governance controls.

## Current coverage against the roadmap

| Roadmap area | Current status | Notes |
| --- | --- | --- |
| Email auth | Partial | Clerk sign-in/sign-up exists. Need confirm enabled providers in Clerk dashboard. |
| Google SSO | Unknown | UI uses Clerk, but provider configuration is external and not visible in repo. |
| User profile storage | Partial | Clerk users sync to Convex. No app-level preferences or plan fields. |
| Contact cards | Missing | No contacts table, APIs, or UI. |
| Memory notes | Missing | No notes table/field or UI. |
| Tags | Missing | No tag model or UI. |
| Search | Missing | No contact search or Convex search indexes. |
| Interaction log | Missing | No interaction model or UI. |
| Free dashboard | Missing | Current dashboard is unrelated static deal data. |
| Reminders | Missing | No reminders model, scheduler, or notification UI. |
| Freemium gates | Missing | No plan/subscription model or contact-limit enforcement. |
| Onboarding | Missing | No onboarding state or guided flow. |
| Premium contacts/logs/reminders | Missing | Depends on core data model and billing. |
| Birthday email alerts | Missing | No email provider or scheduled jobs. |
| Last contacted/overdue | Missing | No interactions yet. |
| Groups/circles | Missing | No groups model. |
| CSV export | Missing | No export route or data access layer. |
| Premium dashboard analytics | Missing | No metrics model or queries. |
| Weekly digest | Missing | No email provider, scheduler, or recommendation logic. |
| AI memory assistant | Partial plumbing only | Generic chat route exists but is not connected to contacts. |
| AI talking points | Partial plumbing only | Needs contact context, prompt workflow, and UI. |
| Stripe billing | Missing | No Stripe integration or subscription state. |
| Pro voice-to-log | Missing | No recording UI, storage, transcription, extraction, or review flow. |
| Profile intelligence | Missing | No enrichment pipeline. |
| Auto outreach | Missing | No Gmail/iMessage integration, templates, approval, or outreach logs. |
| Enterprise teams/RBAC/API | Missing | Current model is single-user only. |

## Core gaps to close first

### 1. Product data model

Add Convex tables for the Phase 1 domain:

- `contacts`
- `contactNotes` or `notes`
- `interactionLogs`
- `tags`
- `contactTags`
- `reminders`
- `notifications`
- `userPreferences`
- `subscriptions` or `entitlements`
- `onboardingProgress`

The schema should avoid unbounded arrays on contact documents. Notes, logs, reminders, and tag assignments should be separate tables with indexes for owner, contact, date, and lookup fields.

### 2. Authorization model

Every user-owned query and mutation should derive the authenticated identity server-side from `ctx.auth.getUserIdentity()`. Do not accept user ids from the client for access control. Add a helper to resolve the current Convex user from Clerk token identity or Clerk user id.

### 3. Contact CRUD

Build the core workflows before expanding the dashboard:

- Create contact.
- View contact list.
- View contact details.
- Edit contact fields.
- Delete/archive contact.
- Enforce free contact cap at mutation level.

### 4. Notes, tags, and interaction logs

Implement the memory layer:

- Add/edit/delete notes.
- Add/remove tags.
- Log interactions with dates and summaries.
- For free users, expose only the last 3 interactions per contact and/or enforce UI/API limits based on the intended business rule.

### 5. Search

Add search surfaces that match the PDF:

- Name search.
- Company search.
- Tag filter.
- Relationship type filter.
- Later, premium full-text note search.

This likely needs a mix of normal Convex indexes and search indexes.

### 6. Dashboard replacement

Replace the static deal pipeline with a Wuslah relationship dashboard:

- Contact count and free cap state.
- Recently added contacts.
- Upcoming birthdays.
- Reminders due.
- Last contacted/overdue indicators.
- Upgrade prompts at 8+ contacts for free users.

### 7. Reminders and notifications

Add reminder creation, due-date queries, and in-app notifications. For emails and digests, add scheduled Convex jobs only after the notification data model is in place.

### 8. Billing and tier gates

Before Premium features launch, add:

- Stripe customer mapping.
- Subscription status sync.
- Plan/tier entitlement checks.
- Upgrade/downgrade/cancel flows.
- Server-side guards for limits, not only UI hiding.

### 9. AI memory assistant

The existing chat route can be reused conceptually, but the product feature needs:

- Authenticated access to the selected contact.
- Retrieval of notes and interaction logs.
- Structured prompts for summary and talking points.
- Clear handling of missing/sparse data.
- Audit/logging if outputs are saved.

## Recommended build order

### Milestone 1: Free Week 1 foundation

1. Add Convex schema for contacts, notes, tags, and tag assignments.
2. Add current-user helper and protected Convex queries/mutations.
3. Build contact list page.
4. Build create/edit contact form.
5. Build contact detail page with memory note field.
6. Add tag add/remove UI.
7. Add basic search and filters.

### Milestone 2: Free Week 2 product loop

1. Add interaction log table and UI.
2. Add free cap logic for 10 contacts.
3. Add upgrade prompts at 8+ contacts.
4. Replace dashboard with contact count, recently added, birthdays, and due reminders.
5. Add reminder table and one-reminder-per-month free enforcement.
6. Add onboarding checklist/progress.

### Milestone 3: Premium Month 1

1. Add Stripe subscription model and webhook sync.
2. Add entitlement checks for unlimited contacts/logs/reminders.
3. Add last-contacted query and overdue flag.
4. Add birthday email alert infrastructure.
5. Add account/settings billing page.

### Milestone 4: Premium Month 2

1. Add groups/circles.
2. Add premium note full-text search.
3. Add CSV export.
4. Build premium analytics dashboard.

### Milestone 5: Premium Month 3

1. Add weekly digest scheduler and email templates.
2. Connect AI assistant to contact notes/logs.
3. Add AI talking points workflow.
4. Add usage/quality safeguards for AI outputs.

### Milestone 6: Pro and Enterprise

Build these after the personal CRM is stable. Voice logging, enrichment, outreach, teams, RBAC, SSO, REST APIs, and governance all depend on the core contact and entitlement models.

## Suggested initial Convex indexes

For `contacts`:

- `by_owner`
- `by_owner_and_created_at`
- `by_owner_and_name`
- `by_owner_and_company`
- `by_owner_and_relationship_type`
- `by_owner_and_birthday_month_day` if birthday queries need efficient upcoming birthday lookup.

For `contactNotes`:

- `by_owner_and_contact_id`
- `by_contact_id_and_created_at`
- Premium search index on note body.

For `interactionLogs`:

- `by_owner_and_contact_id_and_interaction_date`
- `by_owner_and_interaction_date`

For `reminders`:

- `by_owner_and_due_at`
- `by_owner_and_contact_id`
- `by_owner_and_status_and_due_at`

For `tags`:

- `by_owner_and_name`

For `contactTags`:

- `by_owner_and_contact_id`
- `by_owner_and_tag_id`
- `by_contact_id_and_tag_id`

For `subscriptions`:

- `by_owner`
- `by_stripe_customer_id`
- `by_stripe_subscription_id`

## Recommended page structure

- `/dashboard` relationship dashboard.
- `/contacts` contact list and search.
- `/contacts/new` create contact.
- `/contacts/[contactId]` contact detail, notes, logs, reminders, tags.
- `/reminders` reminder list.
- `/settings` user preferences and billing.
- `/upgrade` plan comparison and checkout.
- Later: `/groups`, `/ai`, `/voice-log`, `/outreach`, `/team`, `/admin`.

## Risks and decisions to make

- Decide whether the free interaction cap means only 3 visible entries or only 3 stored entries. Storing all and gating visibility preserves upgrade value but may have product/privacy implications.
- Decide whether memory notes are one free-form field per contact or multiple note records. The PDF says a free-form text field per contact, but Premium full notes search and AI summaries may work better with note records plus an optional current summary field.
- Decide how birthdays should store yearless dates. Upcoming birthday queries are easier with normalized `birthdayMonth` and `birthdayDay` fields.
- Decide whether relationship type is a fixed enum or user-customizable. A fixed enum improves dashboard analytics.
- Decide which email provider to use for birthday alerts and digests.
- Decide whether OpenRouter remains the AI abstraction or whether specific features should call OpenAI/Anthropic directly.
- Decide if the current dashboard kanban should be removed, repurposed for future deals, or kept behind a later CRM/Deals section.

## Immediate next implementation target

The next practical step is to implement Phase 1 Free Week 1:

1. Convex schema and functions for contacts, notes, tags, and search.
2. Contact list/create/detail UI.
3. Server-side free-tier contact cap scaffolding, even before Stripe is added.

This will turn the app from a branded shell into the first usable Wuslah product loop: capture a person, remember context, tag the relationship, and find them later.
