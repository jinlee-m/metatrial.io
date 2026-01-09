import Link from "next/link";
import { saes } from "../../components/mockData";

export default function SaePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">SAE 보고서</h2>
          <p className="muted text-sm">이상 사례 보고서를 목록으로 확인합니다.</p>
        </div>
        <Link href="/sae/new" className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">
          새 SAE 보고서 작성
        </Link>
      </div>
      <div className="surface p-4">
        <div className="grid gap-3">
          {saes.map((sae) => (
            <Link key={sae.id} href={`/sae/${sae.id}`} className="surface-strong flex items-center justify-between rounded-2xl p-4">
              <div>
                <div className="text-sm font-semibold">{sae.title}</div>
                <div className="muted text-xs">{sae.id}</div>
              </div>
              <div className="text-xs text-right">
                <div>{sae.severity}</div>
                <div className="muted">{sae.status}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
