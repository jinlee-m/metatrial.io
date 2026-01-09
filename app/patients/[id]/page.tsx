import Link from "next/link";

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">환자 상세</h2>
          <p className="muted text-sm">{params.id}에 대한 요약과 빠른 작업을 제공합니다.</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/patients/${params.id}/case-reports`} className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">
            케이스 보고서
          </Link>
          <Link href={`/ecrf/tmpl-001/${params.id}`} className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">
            eCRF 입력
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="surface p-4">
          <div className="text-sm font-semibold">최근 방문 요약</div>
          <p className="muted mt-2 text-sm">Visit 2 · 2024-02-18 · Vital Signs 완료</p>
        </div>
        <div className="surface p-4">
          <div className="text-sm font-semibold">알림</div>
          <p className="muted mt-2 text-sm">열린 쿼리 2건 · SAE 보고 필요</p>
        </div>
      </div>
      <div className="surface p-4">
        <div className="text-sm font-semibold">빠른 작업</div>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">케이스 보고서 생성</button>
          <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">SAE 보고</button>
          <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">쿼리 확인</button>
        </div>
      </div>
    </div>
  );
}
