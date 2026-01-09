import Link from "next/link";
import { queries } from "../../components/mockData";

export default function QueriesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">쿼리 목록</h2>
        <p className="muted text-sm">상태/우선순위별로 쿼리를 관리합니다.</p>
      </div>
      <div className="surface p-4">
        <div className="flex flex-wrap gap-2">
          <button className="rounded-full border border-[var(--border)] px-3 py-1 text-xs">Open</button>
          <button className="rounded-full border border-[var(--border)] px-3 py-1 text-xs">Resolved</button>
          <button className="rounded-full border border-[var(--border)] px-3 py-1 text-xs">High</button>
        </div>
        <div className="mt-4 grid gap-3">
          {queries.map((query) => (
            <Link key={query.id} href={`/queries/${query.id}`} className="surface-strong flex items-center justify-between rounded-2xl p-4">
              <div>
                <div className="text-sm font-semibold">{query.module}</div>
                <div className="muted text-xs">{query.id}</div>
              </div>
              <div className="text-right text-xs">
                <div>{query.priority}</div>
                <div className="muted">{query.status}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
