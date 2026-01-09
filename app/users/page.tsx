import Link from "next/link";
import { users } from "../../components/mockData";

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">사용자 관리</h2>
          <p className="muted text-sm">역할 및 계정 상태를 관리합니다.</p>
        </div>
        <button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">사용자 추가</button>
      </div>
      <div className="surface p-4">
        <div className="grid gap-3">
          {users.map((user) => (
            <Link key={user.id} href={`/users/${user.id}`} className="surface-strong flex items-center justify-between rounded-2xl p-4">
              <div>
                <div className="text-sm font-semibold">{user.name}</div>
                <div className="muted text-xs">{user.role}</div>
              </div>
              <div className="text-xs text-right">
                <div>{user.id}</div>
                <div className="muted">{user.status}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
