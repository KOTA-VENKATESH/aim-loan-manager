import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, LineChart, FileCheck2, Landmark, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Normiloans CRM — Education Loan Lead to Disbursement" },
      {
        name: "description",
        content:
          "Normiloans CRM manages every education loan case from lead capture to lender sanction, disbursement and commission payout.",
      },
      { property: "og:title", content: "Normiloans CRM — Education Loan Lead to Disbursement" },
      {
        property: "og:description",
        content: "One platform for students, channel partners and lender partners across India.",
      },
    ],
  }),
  component: Landing,
});

const FEATURES = [
  { icon: GraduationCap, title: "Lead capture & assignment", body: "Tele-calling, website, partner and walk-in leads with owner, source and follow-up history." },
  { icon: FileCheck2, title: "Student & document file", body: "Applicant, co-applicant, guarantor, collateral and a document checklist ready for lender submission." },
  { icon: Landmark, title: "Lender submission tracking", body: "Login, query, sanction, rejection and re-submission across your bank and NBFC panel." },
  { icon: Wallet, title: "Disbursement & commission", body: "Tranche-wise disbursement, college joining confirmation and payout reconciliation per case." },
  { icon: LineChart, title: "Owner dashboard", body: "Pipeline, sanctioned and disbursed value, conversion funnel and lender scorecards." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </span>
          <span className="font-display text-lg font-semibold">Normiloans</span>
        </div>
        <Button asChild size="sm">
          <Link to="/auth">Sign in</Link>
        </Button>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
        <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          Education lending aggregator · B2C + B2B
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-6xl">
          Lead to disbursement, without the spreadsheets.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
          A purpose-built CRM for the Normiloans pipeline — student cases, lender submissions, sanctions,
          disbursements and commissions in one place for your sales, processing and management teams.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/auth">Open the workspace</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/auth">Request access</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="surface-card p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <f.icon className="size-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold">{f.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </article>
          ))}
          <article className="surface-card flex flex-col justify-between bg-sidebar p-6 text-sidebar-foreground">
            <h2 className="font-display text-xl font-semibold">Built for Hyderabad. Ready for Tier 1 & 2.</h2>
            <p className="mt-3 text-sm text-sidebar-foreground/70">
              Role-based access for owners, sales, tele-callers, processing and viewers as you expand across markets.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
