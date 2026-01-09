export default function TemplatePreviewPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">템플릿 미리보기</h2>
        <p className="muted text-sm">{params.id} 템플릿의 실제 화면을 확인합니다.</p>
      </div>
      <div className="surface p-5">
        <div className="text-sm font-semibold">Baseline Visit Form</div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="Subject Initials" />
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="Age" />
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="Weight" />
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="Height" />
        </div>
      </div>
    </div>
  );
}
