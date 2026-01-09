export default function NewSaePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">새 SAE 보고서</h2>
        <p className="muted text-sm">필수 정보를 입력하여 이상 사례를 기록합니다.</p>
      </div>
      <div className="surface p-5">
        <div className="grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="이상 사례 유형" />
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="발생 일시" />
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="심각도" />
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="조치 및 결과" />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">보고서 제출</button>
      </div>
    </div>
  );
}
