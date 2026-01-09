import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-5">
      <div>
        <h2 className="text-2xl font-semibold">회원가입</h2>
        <p className="muted text-sm">새로운 연구 계정을 생성합니다.</p>
      </div>
      <div className="surface flex flex-col gap-4 p-5">
        <label className="text-sm">
          이름
          <input className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2" />
        </label>
        <label className="text-sm">
          이메일
          <input className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2" />
        </label>
        <label className="text-sm">
          비밀번호
          <input type="password" className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2" />
        </label>
        <button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">계정 만들기</button>
      </div>
      <p className="text-sm">
        이미 계정이 있나요? <Link href="/auth/login" className="text-[var(--accent)]">로그인</Link>
      </p>
    </div>
  );
}
