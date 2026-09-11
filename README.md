# EduLoan Flow

STATEMENT OF WORK 

Education Loan Aggregator CRM 

Lead-to-Disbursement Management Platform. 

 

1. Introduction & Background about Normiloans 

 

we are new age education lending aggregator building with digital platform for customer service and channel partners across the locations in India, Currently presence in Hyderabad, Telangana, will be soon expanding all markets, specifically tier I and tier II locations,  Our area of operations student lending those who are aspiring to study and build their career from premier institutions abroad and India, building bridge between banks, NBFC, channel partners and customers as well, Our business model B2b and B2c, I would like avail services which are mentioned below, also looking for ongoing support. 

 

Defines the core B2C + B2B education loan aggregator model and strategic positioning in the market. 

Define B2C + B2B aggregator business model structure  

Build value proposition for students, channel partners, and lenders  

Identify revenue streams (loan commissions, cross-sell, platform fees)  

Outline Tier 1 & Tier 2 expansion strategy (high-level)  

Define basic organization structure (functions & roles)  

Analyses global and India education loan ecosystem, demand trends, and product landscape. 

Study India and global education loan market size and growth trends  

Analyse study abroad ecosystem (USA, UK, Canada, Australia)  

Identify key demand drivers (education cost, migration, credit access)  

Segment customer types (students, co-applicants, course-based demand)  

Map loan products (secured vs unsecured, domestic vs international)  

 

Currently Manual process-  

At present this pipeline — sales team/tele caller captures a lead, the case is sent to a bank/NBFC’s, they process for sanctions/reject/ disburses subject to meeting the product, policy norms of their internal policies and discretion, currently tracking manually across notebooks, WhatsApp and spreadsheets, making it hard to see where each case stands and to reconcile commissions. 

This Statement of Work (“SOW”) defines the scope, deliverables, timeline and fixed price for a solo freelance developer to build a purpose-built web application that manages this end-to-end pipeline. The application uses a React front end, a FastAPI (Python) back end, and a MongoDB database. 

2. Project Objectives 

Provide one simple platform to manage every student case from lead to loan disbursement till join college/university joining. 

Let sales/tele calling team capture, assign and follow up on leads without losing track. 

Standardise student details and document collection for bank submission. 

Track each case through bank submission, login, rejection, pending, requirement, sanction and disbursement status. 

Record when the file disbursed commission earned per case. 

Give the owner/management a clear dashboard of the pipeline of leads, login, sanction, disbursement and payouts. 

 

Proposing Process Flow  

Create Student/applicant Lead ↓ 

 Student & Loan Details ↓  

Lender accesses the lead↓ 

Updating the lead status sales/ lender↓ 

Lender Eligibility / Matching ↓  

Application Submission ↓  

Document Verification ↓  

Documents upload↓ 

Lender Processing ↓  

Sanction / Rejection ↓  

Pending/ Requirement↓ 

Disbursement completed/ under process↓  

Overall dash board↓ 

 

 

                                                   Fields requirement 

 

Student/ Applicant 

Name, contact number, email address 

Country planning UK, USA Australia, Canada, Germany, Ireland, India etc 

Course which he/she planning, MS, MBA, UG, Medicine etc 

Academic Background/ score, 10th, 12th, Graduation BE/ Btech or any other course 

Standard testing score …GRE, GMAT, SAT, IELTS, TOELF and Duolingo etc 

Work experience number of years, if any 

 

Coapplicant/ Coo barrower 

Name, contact number, email id 

Salaried/ self-employer  

Name of organisation/ business 

Place of work 

Vintage of work or business 

Monthly income/ annual income 

Existing loan loans/ obligations 

Current address and parament address of residency 

 

Additional Coapplicant/ Guarantor 

 

Name, contact number, email id 

Salaried/ self-employer  

Name of organisation/ business 

Place of work 

Vintage of work or business 

Monthly income/ annual income 

Existing loan loans/ obligations 

Current address and parament address of residency 

 

Security/ collateral 

Property type such as house, building, flat, open land 

Location of the property, current market value 

Property owner details 

Cash collateral if any like a Fixed deposit etc 

 

3. Scope of Work 

3.1 Business Workflow — Lifecycle Stages 

The application models the broker's pipeline: 

Lead Capture — sales/tele caller records a prospective student and loan requirement. 

Lead Qualification & Assignment — lead is qualified and assigned to an executive. 

Student Details & Documents — profile, co-applicant details and required documents collected. 

Bank Submission — case is forwarded to the selected partner bank. 

Sanction Tracking — bank queries, sanctioned amount, ROI and tenure recorded. 

Disbursement Status — the bank's disbursement (to student/college) is recorded. 

College Joining — student's enrolment/joining is confirmed. 

Closure & Commission — case closed and the commission/payout earned is recorded. 

3.2 Functional Modules (MVP) 

a) User & Role Management 

Role-based login (Admin/Owner, Sales/Telecaller, Processing, Viewer). 

Secure authentication (JWT) with password reset. 

Add/deactivate users and basic activity log. 

b) Lead Management 

Capture leads manually or via a simple web form, with source tracking. 

Assign leads to executives and track status (New, Contacted, Qualified, Sent to Bank, Converted, Lost). 

Follow-up reminders, notes and interaction history. 

c) Student Details & Documents 

Student profile — personal, academic, co-applicant and loan requirement. 

Document upload against a checklist (ID, address, academic, admission letter, income proof). 

College and course details captured for the case. 

d) Bank Submission & Loan Tracking 

Partner-bank master (banks, branches, contacts). 

Forward a case to a selected bank and track submission and queries. 

Record sanction details — sanctioned amount, ROI, tenure and conditions. 

Re-submit to an alternate bank on rejection. 

e) Disbursement, Joining & Commission 

Record the bank's disbursement status (single or tranche-wise) and date. 

Confirm the student has joined college. 

Record commission/payout earned per case and its received status. 

f) Dashboard & Reports 

Owner/ Business head dashboard with key numbers (pipeline, sanctioned, disbursed, commission). 

Lead conversion and case-status reports; export to Excel. 

g) Notifications 

Email notifications on assignment and key status changes. 

In-app reminders (SMS/WhatsApp optional, subject to a gateway supplied by the Client). 

3.3 Technical Scope 

Responsive web app (React) that works on desktop and mobile browsers. 

REST APIs built with FastAPI (Python), documented via Swagger. 

MongoDB database for leads, students, cases, banks, disbursements and commissions. 

JWT authentication and role-based access on all APIs. 

File storage for uploaded documents. 

Deployment to the Client's hosting with a basic setup guide. 

4. Out of Scope (Future Phases) 

Excluded from this fixed price unless separately agreed and re-quoted: 

Native mobile apps (iOS / Android) — the web app is responsive only. 

Direct/real-time integration with any bank or lender system — bank status is entered manually. 

Online payment gateway or fund movement — the broker does not handle money in the app. 

Accounting / ERP / tax-software integration. 

Bulk migration of old data beyond a small agreed sample. 

Multi-language / multi-currency — delivered in English, INR. 

Hosting, domain, database and SMS/WhatsApp gateway costs (borne by the Client). 

5. Technical Architecture 

A standard three-tier setup: 

Front end: React single-page app — screens, forms and REST integration. 

Back end: FastAPI service — business logic, validation, authentication and role-based access. 

Database: MongoDB for all records, plus file storage for documents. 

6. Assumptions & Dependencies 

Requirements are confirmed at the start; changes after that are handled per Section 13. 

The Client gives timely feedback and approvals and provides one point of contact. 

Bank status is entered manually in the app; there is no live bank system integration. 

The Client arranges and pays for hosting, domain, database and any SMS/WhatsApp gateway. 

Logos, content and any legal text are provided by the Client. 

The application is delivered in English and in INR. 

7. Acceptance Criteria 

Each module is checked against the agreed scope during Client review (UAT). 

Critical and major issues are fixed before go-live. 

Final acceptance is on successful UAT sign-off and deployment. 

8. Warranty & Support 

A 60-day warranty from go-live is included, covering fixes for defects in the delivered scope at no extra cost. New features or work outside the delivered scope are handled under optional support (Section 9.4) or quoted separately. 

9. Change Management 

Anything beyond the agreed scope is noted as a change request, estimated time, and done only after the Client approves. Approved changes may adjust the schedule.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://aim-loan-manager.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/08ce8ce8-917e-4821-9b74-dab612c5129a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
