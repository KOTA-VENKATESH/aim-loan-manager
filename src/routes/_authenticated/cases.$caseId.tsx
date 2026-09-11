import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { AppShell, StageBadge } from "@/components/crm/AppShell";
import { Button } from "@/components/ui/button";
import { CASES, formatINR, formatLakh } from "@/lib/demo-data";

export const Route = createFileRoute("/_authenticated/cases/$caseId")({
  head: () => ({
    meta: [
      { title: "Case File | Normiloans CRM" },
      { name: "description", content: "Student, co-applicant, collateral, documents and lender status for one case." },
      { property: "og:title", content: "Case File | Normiloans CRM" },
      { property: "og:description", content: "Full applicant file with lender submission and sanction tracking." },
    ],
  }),
  component: CaseDetail,
  notFoundComponent: CaseMissing,
});

function CaseMissing() {
  return (
    <AppShell title="Case not found" subtitle="This case ID does not exist in the demo data">
      <Button asChild>
        <Link to="/leads">Back to pipeline</Link>
      </Button>
    </AppShell>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="surface-card p-6">
      <h2 className="text-base font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function CaseDetail() {
  const { caseId } = Route.useParams();
  const record = CASES.find((c) => c.id === caseId);
  if (!record) throw notFound();

  return (
    <AppShell
      title={record.student}
      subtitle={`${record.id} · ${record.course} · ${record.university}`}
      action={
        <div className="flex items-center gap-2">
          <StageBadge stage={record.stage} />
          <Button size="sm" variant="outline">
            Update status
          </Button>
        </div>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="surface-card p-5">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Requirement</p>
          <p className="stat-figure mt-2 text-2xl">{formatLakh(record.amount)}</p>
          <p className="text-xs text-muted-foreground">{record.loanType} loan</p>
        </div>
        <div className="surface-card p-5">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Sanctioned</p>
          <p className="stat-figure mt-2 text-2xl text-primary">
            {record.sanctioned ? formatLakh(record.sanctioned) : "—"}
          </p>
          <p className="text-xs text-muted-foreground">
            {record.roi ? `${record.roi}% ROI · ${record.tenure} months` : "Awaiting lender decision"}
          </p>
        </div>
        <div className="surface-card p-5">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Disbursed</p>
          <p className="stat-figure mt-2 text-2xl">{record.disbursed ? formatLakh(record.disbursed) : "—"}</p>
          <p className="text-xs text-muted-foreground">{record.disbursed ? "Tranche 1 released" : "Not started"}</p>
        </div>
        <div className="surface-card p-5">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Commission</p>
          <p className="stat-figure mt-2 text-2xl">{record.commission ? formatINR(record.commission) : "—"}</p>
          <p className="text-xs text-muted-foreground">
            {record.commission ? (record.commissionReceived ? "Received" : "Pending receipt") : "Not applicable yet"}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <Panel title="Student / applicant">
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Contact" value={record.phone} />
              <Field label="Email" value={record.email} />
              <Field label="Destination" value={record.country} />
              <Field label="Course" value={record.course} />
              <Field label="Intake" value={record.intake} />
              <Field label="University" value={record.university} />
              <Field label="10th" value={record.academics.tenth} />
              <Field label="12th" value={record.academics.twelfth} />
              <Field label="Graduation" value={record.academics.graduation} />
              <Field label="Test scores" value={record.academics.tests} />
              <Field label="Work experience" value={record.academics.experience} />
              <Field label="Lead source" value={record.source} />
            </div>
          </Panel>

          <Panel title="Co-applicant / co-borrower">
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Name" value={`${record.coApplicant.name} (${record.coApplicant.relation})`} />
              <Field label="Employment" value={record.coApplicant.employment} />
              <Field label="Organisation / business" value={record.coApplicant.organisation} />
              <Field label="Monthly income" value={formatINR(record.coApplicant.monthlyIncome)} />
              <Field label="Existing obligations" value={formatINR(record.coApplicant.obligations)} />
              <Field label="Place of work" value={record.coApplicant.city} />
            </div>
          </Panel>

          {record.collateral ? (
            <Panel title="Security / collateral">
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Property type" value={record.collateral.type} />
                <Field label="Location" value={record.collateral.location} />
                <Field label="Market value" value={formatINR(record.collateral.marketValue)} />
                <Field label="Owner" value={record.collateral.owner} />
              </div>
            </Panel>
          ) : null}

          <Panel title="Document checklist">
            <ul className="divide-y divide-border">
              {record.documents.map((d) => (
                <li key={d.name} className="flex items-center justify-between py-3 text-sm">
                  <span>{d.name}</span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      d.status === "Verified"
                        ? "bg-success/12 text-success"
                        : d.status === "Received"
                          ? "bg-info/12 text-info"
                          : "bg-warning/15 text-warning-foreground"
                    }`}
                  >
                    {d.status}
                  </span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="space-y-4">
          <Panel title="Lender status">
            <div className="space-y-4">
              <Field label="Partner" value={record.lender} />
              <Field label="Case owner" value={record.owner} />
              <Field label="Last update" value={record.updated} />
            </div>
          </Panel>

          <Panel title="Activity timeline">
            <ol className="relative space-y-5 border-l border-border pl-5">
              {record.timeline.map((t) => (
                <li key={`${t.date}-${t.label}`}>
                  <span className="absolute -left-[5px] mt-1.5 size-2.5 rounded-full bg-primary" />
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                  <p className="text-sm font-medium">{t.label}</p>
                  <p className="text-xs text-muted-foreground">{t.by}</p>
                </li>
              ))}
            </ol>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
