import Link from "next/link";
import { patients } from "../../components/mockData";

export default function PatientsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">환자 목록</h2>
          <p className="muted text-sm">환자 검색과 상태 필터를 통해 대상자를 관리합니다.</p>
        </div>
        <button className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">+ 환자 추가</button>
      </div>
      <div className="surface flex flex-col gap-4 p-4">
        <div className="flex flex-wrap gap-3">
          <input className="w-full flex-1 rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="이름 또는 ID 검색" />
          <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">필터</button>
          <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">정렬</button>
        </div>
        <div className="grid gap-3">
          {patients.map((patient) => (
            <Link key={patient.id} href={`/patients/${patient.id}`} className="surface-strong flex items-center justify-between rounded-2xl p-4">
              <div>
                <div className="text-sm font-semibold">{patient.id}</div>
                <div className="muted text-xs">{patient.name} · {patient.site}</div>
              </div>
              <div className="text-right text-xs">
                <div className="text-[var(--accent)]">{patient.status}</div>
                <div className="muted">진행률 {patient.progress}%</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
