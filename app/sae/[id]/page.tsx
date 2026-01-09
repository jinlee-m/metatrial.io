import { saes } from "../../components/mockData";

export function generateStaticParams() {
  return saes.map((sae) => ({ id: sae.id }));
}

export default function SaeDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">SAE 상세</h2>
        <p className="muted text-sm">보고서 {params.id} 세부 정보</p>
      </div>
      <div className="surface p-4">
        <div className="grid gap-3 text-sm">
          <div className="flex justify-between"><span className="muted">유형</span><span>Anaphylactic Shock</span></div>
          <div className="flex justify-between"><span className="muted">심각도</span><span>Severe</span></div>
          <div className="flex justify-between"><span className="muted">발생 일시</span><span>2023-10-27</span></div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">편집</button>
        <button className="rounded-xl border border-red-400 px-4 py-2 text-sm text-red-500">삭제</button>
      </div>
    </div>
  );
}
