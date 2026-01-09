import Link from "next/link";

const quickLinks = [
  { href: "/auth/login", label: "로그인" },
  { href: "/patients", label: "환자 목록" },
  { href: "/ecrf/tmpl-001/001-KR-SE", label: "eCRF 입력" },
  { href: "/sae", label: "SAE 관리" },
  { href: "/templates", label: "eCRF 템플릿" },
  { href: "/queries", label: "쿼리 관리" },
  { href: "/users", label: "사용자 관리" },
  { href: "/settings", label: "설정" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-8 text-white">
        <div className="text-sm uppercase tracking-[0.2em] text-slate-300">metaTrial Platform</div>
        <h1 className="mt-3 text-3xl font-semibold">임상 eCRF 운영을 하나의 흐름으로</h1>
        <p className="mt-2 text-sm text-slate-300">
          시작 → 환자 관리 → eCRF 입력 → SAE/쿼리 → 데이터 검토까지 이어지는 전 과정을 한 화면에서 설계합니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/auth/login" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
            시작하기
          </Link>
          <Link href="/patients" className="rounded-full border border-white/30 px-4 py-2 text-sm">
            환자 흐름 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {quickLinks.map((item) => (
          <Link key={item.href} href={item.href} className="surface flex items-center justify-between p-4">
            <div>
              <div className="text-sm font-semibold">{item.label}</div>
              <div className="muted text-xs">{item.href}</div>
            </div>
            <span className="text-sm">→</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
