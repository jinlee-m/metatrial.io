import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-5">
      <div>
        <h2 className="text-2xl font-semibold">로그인</h2>
        <p className="muted text-sm">임상 연구 포털에 접속합니다.</p>
      </div>
      <div className="surface flex flex-col gap-4 p-5">
        <label className="text-sm">
          이메일
          <input className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2" />
        </label>
        <label className="text-sm">
          비밀번호
          <input type="password" className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2" />
        </label>
        <button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">로그인</button>
        <div className="flex items-center justify-between text-xs">
          <span className="muted">소셜 로그인</span>
          <span className="rounded-full border border-[var(--border)] px-3 py-1">Google</span>
        </div>
      </div>
      <p className="text-sm">
        계정이 없나요? <Link href="/auth/signup" className="text-[var(--accent)]">회원가입</Link>
      </p>
    </div>
  );
}
