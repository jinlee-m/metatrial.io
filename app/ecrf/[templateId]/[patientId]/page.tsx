export default function EcrfPage({ params }: { params: { templateId: string; patientId: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">eCRF 입력</h2>
        <p className="muted text-sm">
          템플릿 {params.templateId} · 환자 {params.patientId}
        </p>
      </div>
      <div className="surface p-4">
        <div className="flex items-center justify-between text-sm">
          <span>진행률</span>
          <span className="text-[var(--accent)]">72%</span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-[var(--panel-strong)]">
          <div className="h-2 w-[72%] rounded-full bg-[var(--accent)]"></div>
        </div>
      </div>
      <div className="surface p-5">
        <div className="text-sm font-semibold">Demographics</div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="Subject Initials" />
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="Date of Birth" />
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="Sex" />
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="Race" />
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">이전</button>
        <div className="flex gap-2">
          <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">저장</button>
          <button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">다음</button>
        </div>
      </div>
    </div>
  );
}
