import { templates } from "../../../../components/mockData";

export function generateStaticParams() {
  return templates.map((template) => ({ id: template.id }));
}

export default function TemplateEditPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">템플릿 편집</h2>
        <p className="muted text-sm">{params.id} 템플릿을 구성합니다.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="surface p-4">
          <div className="text-sm font-semibold">폼 빌더</div>
          <div className="mt-3 h-64 rounded-2xl border border-dashed border-[var(--border)] p-4 text-sm text-[var(--muted)]">
            필드를 드래그 앤 드롭하여 추가하세요.
          </div>
        </div>
        <aside className="surface p-4">
          <div className="text-sm font-semibold">필드 속성</div>
          <div className="mt-3 grid gap-3">
            <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="라벨" />
            <select className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm">
              <option>텍스트</option>
              <option>선택</option>
              <option>날짜</option>
            </select>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> 필수
            </label>
          </div>
        </aside>
      </div>
    </div>
  );
}
