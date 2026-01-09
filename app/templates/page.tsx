import Link from "next/link";
import { templates } from "../../components/mockData";

export default function TemplatesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">eCRF 템플릿</h2>
          <p className="muted text-sm">드래그 앤 드롭으로 템플릿을 관리합니다.</p>
        </div>
        <button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">새 템플릿</button>
      </div>
      <div className="surface p-4">
        <div className="grid gap-3">
          {templates.map((template) => (
            <div key={template.id} className="surface-strong flex items-center justify-between rounded-2xl p-4">
              <div>
                <div className="text-sm font-semibold">{template.name}</div>
                <div className="muted text-xs">마지막 업데이트 {template.updated}</div>
              </div>
              <div className="flex gap-2">
                <Link href={`/templates/${template.id}/edit`} className="rounded-xl border border-[var(--border)] px-3 py-1 text-xs">편집</Link>
                <Link href={`/templates/${template.id}/preview`} className="rounded-xl border border-[var(--border)] px-3 py-1 text-xs">미리보기</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
