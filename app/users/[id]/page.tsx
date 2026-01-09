import { users } from "../../../components/mockData";

export function generateStaticParams() {
  return users.map((user) => ({ id: user.id }));
}

export default function UserDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">사용자 상세</h2>
        <p className="muted text-sm">{params.id} 계정 정보를 편집합니다.</p>
      </div>
      <div className="surface p-4">
        <div className="grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="이름" />
          <input className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm" placeholder="이메일" />
          <select className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm">
            <option>Investigator</option>
            <option>Coordinator</option>
            <option>Administrator</option>
          </select>
          <select className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm">
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">변경 사항 저장</button>
        <button className="rounded-xl border border-red-400 px-4 py-2 text-sm text-red-500">사용자 삭제</button>
      </div>
    </div>
  );
}
