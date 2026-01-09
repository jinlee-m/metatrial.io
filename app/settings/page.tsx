export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">설정</h2>
        <p className="muted text-sm">개인정보, 알림, 테마 설정을 관리합니다.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="surface p-4">
          <div className="text-sm font-semibold">개인 정보</div>
          <p className="muted mt-2 text-sm">이메일, 전화번호, 기관 정보 수정</p>
        </div>
        <div className="surface p-4">
          <div className="text-sm font-semibold">알림 설정</div>
          <p className="muted mt-2 text-sm">중요 쿼리 및 SAE 알림 수신 여부</p>
        </div>
        <div className="surface p-4">
          <div className="text-sm font-semibold">테마</div>
          <p className="muted mt-2 text-sm">다크 모드 / 라이트 모드 전환</p>
        </div>
      </div>
    </div>
  );
}
