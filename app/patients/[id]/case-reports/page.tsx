import Link from "next/link";
import { patients } from "../../../components/mockData";

export function generateStaticParams() {
  return patients.map((patient) => ({ id: patient.id }));
}


export default function CaseReportsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">케이스 보고서</h2>
          <p className="muted text-sm">{params.id} 환자의 기존 케이스 보고서를 확인합니다.</p>
        </div>
        <Link href={`/ecrf/tmpl-001/${params.id}`} className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">
          새 보고서 생성
        </Link>
      </div>
      <div className="surface p-4">
        <div className="grid gap-3">
          {[
            "Visit 1 · Screening",
            "Visit 2 · Baseline",
            "Visit 3 · Follow-up",
          ].map((title) => (
            <div key={title} className="flex items-center justify-between rounded-2xl border border-[var(--border)] px-4 py-3">
              <div>
                <div className="text-sm font-semibold">{title}</div>
                <div className="muted text-xs">2024-02-18</div>
              </div>
              <button className="rounded-xl border border-[var(--border)] px-3 py-1 text-xs">열기</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
