export default function QueryDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">쿼리 상세</h2>
        <p className="muted text-sm">{params.id} 쿼리에 대한 답변을 등록합니다.</p>
      </div>
      <div className="surface p-4">
        <div className="text-sm font-semibold">쿼리 내용</div>
        <p className="muted mt-2 text-sm">Diastolic BP value is out of expected range. 확인 후 수정해주세요.</p>
      </div>
      <div className="surface p-4">
        <div className="text-sm font-semibold">답변/해결</div>
        <textarea className="mt-3 h-28 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="답변을 입력하세요" />
        <div className="mt-3 flex gap-2">
          <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">닫힘</button>
          <button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">답변 제출</button>
        </div>
      </div>
    </div>
  );
}
