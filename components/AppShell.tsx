"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/patients", label: "환자" },
  { href: "/sae", label: "SAE" },
  { href: "/templates", label: "템플릿" },
  { href: "/queries", label: "쿼리" },
  { href: "/users", label: "사용자" },
  { href: "/settings", label: "설정" },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="page-shell">
      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-8">
        <aside className="hidden w-60 flex-col gap-4 lg:flex">
          <div className="surface p-4">
            <div className="text-sm font-semibold">metaTrial</div>
            <p className="muted mt-1 text-xs">eCRF Clinical Workspace</p>
          </div>
          <nav className="surface flex flex-col gap-1 p-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-3 py-2 text-sm transition ${
                    active ? "bg-[var(--panel-strong)] font-semibold" : "hover:bg-[var(--panel-strong)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <header className="surface flex flex-wrap items-center justify-between gap-4 px-5 py-4">
            <div>
              <div className="text-lg font-semibold">metaTrial Prototype</div>
              <p className="muted text-xs">임상시험 운영을 위한 통합 eCRF 경험</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs">Offline Ready</span>
              <ThemeToggle />
            </div>
          </header>
          <main className="surface px-6 py-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
