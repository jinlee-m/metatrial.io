(function () {
  const STORAGE_KEY = "metatrial_proto_v1";

  const seed = {
    _seeded: true,
    user: { name: "Dr. Lee", role: "CRC" },
    currentPatientId: "001-KR-SE",
    patients: [
      {
        id: "001-KR-SE",
        name: "김철수 (Kim Chul-soo)",
        status: "Active",
        site: "KR-01",
        dob: "1980-05-12",
        lastVisit: "2023.10.27",
        visits: 4,
        progress: 72,
        queries: 2,
      },
      {
        id: "002-KR-SE",
        name: "이영희 (Lee Young-hee)",
        status: "Screening",
        site: "KR-01",
        dob: "1976-11-04",
        lastVisit: "2023.10.26",
        visits: 1,
        progress: 25,
        queries: 0,
      },
      {
        id: "003-KR-SE",
        name: "박민수 (Park Min-soo)",
        status: "Active",
        site: "KR-02",
        dob: "1990-02-17",
        lastVisit: "2023.10.25",
        visits: 2,
        progress: 46,
        queries: 1,
      },
    ],
    submissions: [],
    currentSaeId: "SAE-2023-005",
    saes: [
      {
        id: "SAE-2023-005",
        patientId: "KR-01-005",
        status: "미제출",
        severity: "Severe",
        title: "Anaphylactic Shock",
        date: "2023.10.27",
      },
      {
        id: "SAE-2023-004",
        patientId: "KR-02-011",
        status: "제출 완료",
        severity: "Mild",
        title: "Severe Headache",
        date: "2023.10.15",
      },
      {
        id: "SAE-2023-003",
        patientId: "KR-03-009",
        status: "쿼리 확인",
        severity: "Moderate",
        title: "Chest Pain",
        date: "2023.10.10",
      },
    ],
    currentQueryId: "Q-4592",
    queries: [
      {
        id: "Q-4592",
        patientId: "101-004",
        site: "NYC-01",
        priority: "High",
        status: "Open",
        module: "Vital Signs • Visit 1",
        message: "Diastolic BP value is out of expected range (90-120). Please verify the entry.",
        date: "2023-10-24",
      },
      {
        id: "Q-4591",
        patientId: "101-002",
        site: "NYC-01",
        priority: "Medium",
        status: "Resolved",
        module: "Adverse Events • SAE",
        message: "Please confirm the start date of the adverse event. It predates the consent date.",
        date: "2023-10-23",
      },
      {
        id: "Q-4589",
        patientId: "101-001",
        site: "NYC-02",
        priority: "Low",
        status: "Open",
        module: "Concomitant Meds • Visit 2",
        message: "Dose unit is missing for Metformin. Please update.",
        date: "2023-10-21",
      },
    ],
    currentUserId: "U-001",
    users: [
      { id: "U-001", name: "김철수 (Cheolsu Kim)", email: "kim.cs@hospital.kr", role: "Investigator", status: "Active" },
      { id: "U-002", name: "이영희 (Younghee Lee)", email: "yh.lee@research.org", role: "Coordinator", status: "Suspended" },
      { id: "U-003", name: "박지민 (Jimin Park)", email: "jimin.park@admin.crf", role: "Administrator", status: "Active" },
      { id: "U-004", name: "한지호 (Jiho Han)", email: "jiho.han@monitor.com", role: "Monitor", status: "Active" },
    ],
  };

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...seed };
      const data = JSON.parse(raw);
      if (!data || !data._seeded) return { ...seed };
      return data;
    } catch (err) {
      return { ...seed };
    }
  }

  function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function currentPatient(data) {
    return data.patients.find((p) => p.id === data.currentPatientId) || data.patients[0];
  }

  function setCurrentPatient(id) {
    const data = load();
    data.currentPatientId = id;
    save(data);
  }

  function setCurrentSae(id) {
    const data = load();
    data.currentSaeId = id;
    save(data);
  }

  function setCurrentQuery(id) {
    const data = load();
    data.currentQueryId = id;
    save(data);
  }

  function setCurrentUser(id) {
    const data = load();
    data.currentUserId = id;
    save(data);
  }

  function renderPatientList(container) {
    const data = load();
    const total = data.patients.length;
    const active = data.patients.filter((p) => p.status === "Active").length;
    const screening = data.patients.filter((p) => p.status === "Screening").length;

    document.querySelectorAll("[data-proto-count='total']").forEach((el) => (el.textContent = total));
    document.querySelectorAll("[data-proto-count='active']").forEach((el) => (el.textContent = active));
    document.querySelectorAll("[data-proto-count='screening']").forEach((el) => (el.textContent = screening));

    if (total === 0) {
      container.innerHTML = "<div class='p-6 text-center text-sm text-slate-500'>등록된 환자가 없습니다.</div>";
      return;
    }

    const cards = data.patients
      .map((p) => {
        const initials = p.name.split(" ")[0]?.slice(0, 2) || p.id.slice(0, 2);
        const statusColor = p.status === "Active" ? "green" : "orange";
        return `
        <a class="group relative flex flex-col gap-3 p-4 rounded-xl bg-white dark:bg-[#1a2632] shadow-sm border border-gray-100 dark:border-gray-800 hover:border-blue-400 transition-colors" href="../patient_detail_hub/code.html" data-proto-select="${p.id}">
          <div class="flex justify-between items-start">
            <div class="flex gap-4 items-center">
              <div class="h-12 w-12 rounded-full bg-${statusColor}-50 dark:bg-${statusColor}-900/20 flex items-center justify-center text-${statusColor}-600 dark:text-${statusColor}-400 font-bold text-lg shrink-0">
                ${initials}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-slate-900 dark:text-white font-bold text-base">${p.id}</h3>
                  <span class="px-2 py-0.5 rounded-full bg-${statusColor}-100 dark:bg-${statusColor}-900/40 text-${statusColor}-700 dark:text-${statusColor}-300 text-xs font-medium">${p.status}</span>
                </div>
                <p class="text-slate-500 dark:text-gray-400 text-sm mt-0.5">${p.name}</p>
              </div>
            </div>
            <div class="flex flex-col items-end gap-1">
              <span class="text-xs text-slate-500">${p.lastVisit}</span>
              <span class="material-symbols-outlined text-gray-300 group-hover:text-blue-500 text-[20px]">chevron_right</span>
            </div>
          </div>
          <div class="h-px w-full bg-gray-100 dark:bg-gray-700"></div>
          <div class="flex justify-between items-center text-sm">
            <span class="text-slate-500 dark:text-gray-400 flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px]">event_available</span>
              방문 ${p.visits} 진행
            </span>
            <span class="text-blue-600 text-xs font-medium">세부정보 보기</span>
          </div>
        </a>`;
      })
      .join("\n");

    container.innerHTML = cards;

    container.querySelectorAll("[data-proto-select]").forEach((link) => {
      link.addEventListener("click", () => {
        setCurrentPatient(link.dataset.protoSelect);
      });
    });
  }

  function wireAddPatient() {
    const btn = document.querySelector("[data-proto-add-patient]");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const id = prompt("환자 ID를 입력하세요 (예: 004-KR-SE)");
      if (!id) return;
      const name = prompt("환자 이름을 입력하세요 (예: 홍길동)") || "새 환자";
      const data = load();
      data.patients.unshift({
        id,
        name,
        status: "Screening",
        site: "KR-01",
        dob: "1992-01-01",
        lastVisit: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
        visits: 0,
        progress: 0,
        queries: 0,
      });
      data.currentPatientId = id;
      save(data);
      const list = document.querySelector("[data-proto-patient-list]");
      if (list) renderPatientList(list);
    });
  }

  function fillPatientDetail() {
    const data = load();
    const patient = currentPatient(data);
    if (!patient) return;

    document.querySelectorAll("[data-proto-text='patient-id']").forEach((el) => (el.textContent = patient.id));
    document.querySelectorAll("[data-proto-text='patient-name']").forEach((el) => (el.textContent = patient.name));
    document.querySelectorAll("[data-proto-text='patient-site']").forEach((el) => (el.textContent = `Site ${patient.site}`));
    document.querySelectorAll("[data-proto-text='patient-dob']").forEach((el) => (el.textContent = patient.dob));
    document.querySelectorAll("[data-proto-text='patient-progress']").forEach((el) => (el.textContent = `${patient.progress}%`));
    document.querySelectorAll("[data-proto-text='patient-visits']").forEach((el) => (el.textContent = patient.visits));
    document.querySelectorAll("[data-proto-text='patient-queries']").forEach((el) => (el.textContent = patient.queries));

    document.querySelectorAll("[data-proto-status]").forEach((el) => {
      el.textContent = patient.status;
      const isActive = patient.status === "Active";
      el.classList.toggle("bg-green-100", isActive);
      el.classList.toggle("text-green-700", isActive);
      el.classList.toggle("bg-orange-100", !isActive);
      el.classList.toggle("text-orange-700", !isActive);
    });
  }

  function fillCaseHeader() {
    const data = load();
    const patient = currentPatient(data);
    if (!patient) return;
    document.querySelectorAll("[data-proto-text='case-patient-id']").forEach((el) => (el.textContent = patient.id));
    document.querySelectorAll("[data-proto-text='case-patient-site']").forEach(
      (el) => (el.textContent = `Site ${patient.site}`)
    );
  }

  function wireLogin() {
    const loginBtn = document.querySelector("[data-proto-login]");
    if (!loginBtn) return;
    loginBtn.addEventListener("click", () => {
      const data = load();
      data.user = data.user || { name: "Dr. Lee", role: "CRC" };
      save(data);
    });
  }

  function wireSubmit() {
    const submitBtn = document.querySelector("[data-proto-submit]");
    if (!submitBtn) return;
    submitBtn.addEventListener("click", () => {
      const data = load();
      const patient = currentPatient(data);
      if (patient) {
        patient.progress = 100;
      }
      const id = `CRF-${new Date().toISOString().slice(0, 10)}-${Math.floor(Math.random() * 900 + 100)}`;
      data.submissions.unshift({ id, patientId: patient?.id || "", submittedAt: new Date().toISOString() });
      save(data);
    });
  }

  function fillSubmission() {
    const data = load();
    if (!data.submissions.length) return;
    const latest = data.submissions[0];
    document.querySelectorAll("[data-proto-submission-id]").forEach((el) => (el.textContent = latest.id));
  }

  function wireSearch() {
    const search = document.querySelector("[data-proto-search]");
    const list = document.querySelector("[data-proto-patient-list]");
    if (!search || !list) return;
    search.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase();
      list.querySelectorAll("[data-proto-select]").forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? "flex" : "none";
      });
    });
  }

  function wireListSearch(inputSelector, itemSelector) {
    const search = document.querySelector(inputSelector);
    if (!search) return;
    search.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll(itemSelector).forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? "" : "none";
      });
    });
  }

  function renderSaeList(container) {
    const data = load();
    const count = data.saes.length;
    document.querySelectorAll("[data-proto-sae-count]").forEach((el) => (el.textContent = `총 ${count}건의 보고서`));

    const cards = data.saes
      .map((s) => {
        const statusColor = s.status === "제출 완료" ? "blue" : s.status === "쿼리 확인" ? "amber" : "slate";
        return `
        <button class="group bg-white dark:bg-[#1e293b] rounded-2xl p-5 shadow-sm border border-blue-100 dark:border-slate-700 hover:border-primary transition-all text-left" data-proto-sae-select="${s.id}">
          <div class="flex justify-between items-start mb-3">
            <div class="flex items-center gap-2">
              <span class="bg-${statusColor}-100 dark:bg-${statusColor}-900/40 text-${statusColor}-700 dark:text-${statusColor}-300 text-xs font-bold px-2.5 py-1 rounded-lg border border-${statusColor}-200 dark:border-${statusColor}-800">${s.status}</span>
              <span class="text-primary-dark dark:text-blue-300 font-bold text-base">${s.id}</span>
            </div>
            <span class="text-text-sub-light text-xs">${s.date}</span>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-semibold text-slate-900 dark:text-white">${s.title}</p>
              <p class="text-xs text-slate-500">환자 ID: ${s.patientId}</p>
            </div>
            <span class="material-symbols-outlined text-slate-300 group-hover:text-primary">chevron_right</span>
          </div>
        </button>`;
      })
      .join("\n");

    container.innerHTML = cards;
    container.querySelectorAll("[data-proto-sae-select]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setCurrentSae(btn.dataset.protoSaeSelect);
        window.location.href = "../sae_detail_view_1/code.html";
      });
    });
  }

  function fillSaeDetail() {
    const data = load();
    const sae = data.saes.find((s) => s.id === data.currentSaeId) || data.saes[0];
    if (!sae) return;
    document.querySelectorAll("[data-proto-sae-id]").forEach((el) => (el.textContent = sae.id));
    document.querySelectorAll("[data-proto-sae-title]").forEach((el) => (el.textContent = sae.title));
    document.querySelectorAll("[data-proto-sae-patient]").forEach((el) => (el.textContent = sae.patientId));
    document.querySelectorAll("[data-proto-sae-status]").forEach((el) => (el.textContent = sae.status));
  }

  function wireSaeSubmit() {
    const submitBtn = document.querySelector("[data-proto-sae-submit]");
    if (!submitBtn) return;
    submitBtn.addEventListener("click", () => {
      const title = prompt("SAE 제목을 입력하세요", "New SAE");
      if (!title) return;
      const data = load();
      const id = `SAE-${new Date().getFullYear()}-${Math.floor(Math.random() * 900 + 100)}`;
      data.saes.unshift({
        id,
        patientId: data.currentPatientId || "KR-01-000",
        status: "미제출",
        severity: "Moderate",
        title,
        date: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
      });
      data.currentSaeId = id;
      save(data);
      showToast("SAE 임시 저장됨");
    });
  }

  function renderQueryList(container) {
    const data = load();
    const cards = data.queries
      .map((q) => {
        const badgeColor = q.priority === "High" ? "red" : q.priority === "Medium" ? "orange" : "blue";
        const statusColor = q.status === "Resolved" ? "green" : "primary";
        return `
        <button class="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#192633] p-4 shadow-sm border border-gray-100 dark:border-transparent text-left" data-proto-query-select="${q.id}">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="rounded-md bg-${badgeColor}-50 dark:bg-${badgeColor}-500/10 px-2 py-0.5 text-xs font-bold text-${badgeColor}-600 dark:text-${badgeColor}-400 border border-${badgeColor}-100 dark:border-${badgeColor}-500/20">${q.priority}</span>
              <span class="text-sm font-bold text-black dark:text-white">#${q.id}</span>
            </div>
            <span class="text-xs font-medium text-text-secondary">${q.date}</span>
          </div>
          <div class="flex flex-col gap-1">
            <div class="flex items-baseline justify-between">
              <h3 class="text-base font-bold text-black dark:text-white">Subject: ${q.patientId}</h3>
              <span class="text-xs text-text-secondary">Site: ${q.site}</span>
            </div>
            <p class="text-sm font-medium text-primary">${q.module}</p>
          </div>
          <div class="bg-gray-50 dark:bg-[#111a22] p-3 rounded-lg border border-gray-100 dark:border-transparent">
            <p class="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">${q.message}</p>
          </div>
          <div class="flex items-center justify-between mt-1">
            <div class="flex items-center gap-2 rounded-full bg-${statusColor}/10 px-3 py-1">
              <span class="text-xs font-bold text-${statusColor}">${q.status}</span>
            </div>
            <span class="material-symbols-outlined text-[20px] text-gray-400">chevron_right</span>
          </div>
        </button>`;
      })
      .join("\n");
    container.innerHTML = cards;
    container.querySelectorAll("[data-proto-query-select]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setCurrentQuery(btn.dataset.protoQuerySelect);
        window.location.href = "../query_detail/resolve/code.html";
      });
    });
  }

  function fillQueryDetail() {
    const data = load();
    const query = data.queries.find((q) => q.id === data.currentQueryId) || data.queries[0];
    if (!query) return;
    document.querySelectorAll("[data-proto-query-id]").forEach((el) => (el.textContent = `#${query.id}`));
    document.querySelectorAll("[data-proto-query-patient]").forEach((el) => (el.textContent = query.patientId));
    document.querySelectorAll("[data-proto-query-status]").forEach((el) => (el.textContent = query.status));
    document.querySelectorAll("[data-proto-query-message]").forEach((el) => (el.textContent = query.message));
    const statusSelect = document.querySelector("[data-proto-query-status-select]");
    if (statusSelect) {
      statusSelect.value = query.status.toLowerCase() === "resolved" ? "answered" : query.status.toLowerCase();
    }
  }

  function wireQuerySubmit() {
    const submitBtn = document.querySelector("[data-proto-query-submit]");
    if (!submitBtn) return;
    submitBtn.addEventListener("click", () => {
      const data = load();
      const query = data.queries.find((q) => q.id === data.currentQueryId);
      const response = document.querySelector("[data-proto-query-response]");
      const statusSelect = document.querySelector("[data-proto-query-status-select]");
      if (query) {
        if (statusSelect) query.status = statusSelect.value === "closed" ? "Closed" : statusSelect.value === "open" ? "Open" : "Resolved";
        if (response && response.value) query.message = response.value;
        save(data);
        showToast("쿼리 상태가 업데이트되었습니다");
      }
    });
  }

  function renderUserList(container) {
    const data = load();
    document.querySelectorAll("[data-proto-user-count]").forEach((el) => (el.textContent = `총 ${data.users.length}명`));
    const cards = data.users
      .map((u) => {
        return `
        <button class="group relative flex flex-col gap-3 rounded-2xl bg-white dark:bg-[#1c2936] p-4 shadow-sm border border-slate-100 dark:border-slate-800 text-left" data-proto-user-select="${u.id}">
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3 flex-1 overflow-hidden">
              <div class="shrink-0 size-14 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 font-bold">
                ${u.name.slice(0, 2)}
              </div>
              <div class="flex flex-col justify-center min-w-0">
                <h3 class="text-base font-bold text-slate-900 dark:text-white truncate">${u.name}</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 truncate">${u.email}</p>
              </div>
            </div>
            <span class="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
          </div>
          <div class="flex items-center gap-2 mt-1">
            <span class="inline-flex items-center gap-1 rounded-md bg-blue-50 dark:bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">${u.role}</span>
            <span class="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">${u.status}</span>
          </div>
        </button>`;
      })
      .join("\n");
    container.innerHTML = cards;
    container.querySelectorAll("[data-proto-user-select]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setCurrentUser(btn.dataset.protoUserSelect);
        window.location.href = "../user_detail/edit/code.html";
      });
    });
  }

  function fillUserDetail() {
    const data = load();
    const user = data.users.find((u) => u.id === data.currentUserId) || data.users[0];
    if (!user) return;
    document.querySelectorAll("[data-proto-user-name]").forEach((el) => (el.textContent = user.name));
    document.querySelectorAll("[data-proto-user-email]").forEach((el) => (el.value = user.email));
    const roleSelect = document.querySelector("[data-proto-user-role-select]");
    const statusSelect = document.querySelector("[data-proto-user-status-select]");
    if (roleSelect) roleSelect.value = user.role;
    if (statusSelect) statusSelect.value = user.status;
  }

  function wireUserSave() {
    const saveBtn = document.querySelector("[data-proto-user-save]");
    if (!saveBtn) return;
    saveBtn.addEventListener("click", () => {
      const data = load();
      const user = data.users.find((u) => u.id === data.currentUserId);
      const roleSelect = document.querySelector("[data-proto-user-role-select]");
      const statusSelect = document.querySelector("[data-proto-user-status-select]");
      if (user) {
        if (roleSelect) user.role = roleSelect.value;
        if (statusSelect) user.status = statusSelect.value;
        save(data);
        showToast("사용자 정보가 저장되었습니다");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const data = load();
    save(data);

    const list = document.querySelector("[data-proto-patient-list]");
    if (list) renderPatientList(list);

    wireAddPatient();
    wireSearch();
    fillPatientDetail();
    fillCaseHeader();
    wireLogin();
    wireSaeSubmit();
    wireEcrfSteps();
    wireSubmit();
    fillSubmission();
    const saeList = document.querySelector("[data-proto-sae-list]");
    if (saeList) renderSaeList(saeList);
    fillSaeDetail();
    const queryList = document.querySelector("[data-proto-query-list]");
    if (queryList) renderQueryList(queryList);
    fillQueryDetail();
    wireQuerySubmit();
    const userList = document.querySelector("[data-proto-user-list]");
    if (userList) renderUserList(userList);
    fillUserDetail();
    wireUserSave();
    wireListSearch("[data-proto-sae-search]", "[data-proto-sae-select]");
    wireListSearch("[data-proto-query-search]", "[data-proto-query-select]");
    wireListSearch("[data-proto-user-search]", "[data-proto-user-select]");
  });

  function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.cssText =
      "position:fixed;bottom:24px;right:24px;background:#0f172a;color:#fff;padding:10px 14px;border-radius:10px;font:600 12px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Noto Sans',Arial,sans-serif;box-shadow:0 10px 20px rgba(0,0,0,0.25);z-index:9999;";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1600);
  }

  function wireEcrfSteps() {
    const stepRaw = document.body.dataset.protoEcrfStep;
    if (!stepRaw) return;
    const step = parseInt(stepRaw, 10);
    if (Number.isNaN(step)) return;

    const data = load();
    const patient = currentPatient(data);
    const progress = Math.min(100, Math.round((step / 8) * 100));
    if (patient) {
      patient.progress = Math.max(patient.progress, progress);
      save(data);
    }

    const nextBtn = document.querySelector("[data-proto-next]");
    const prevBtn = document.querySelector("[data-proto-prev]");
    const saveBtn = document.querySelector("[data-proto-save]");

    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        const latest = load();
        const cur = currentPatient(latest);
        if (cur) {
          cur.progress = Math.max(cur.progress, progress);
          save(latest);
        }
        showToast("임시 저장됨");
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const href = nextBtn.getAttribute("href") || nextBtn.dataset.protoNextHref;
        if (href) {
          window.location.href = href;
          return;
        }
        const path = window.location.pathname;
        const nextPath = path.replace(/_(\\d+)\\/code\\.html$/, (_, n) => `_${Number(n) + 1}/code.html`);
        if (nextPath !== path) {
          window.location.href = nextPath;
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const href = prevBtn.getAttribute("href") || prevBtn.dataset.protoPrevHref;
        if (href) {
          window.location.href = href;
          return;
        }
        const path = window.location.pathname;
        const prevPath = path.replace(/_(\\d+)\\/code\\.html$/, (_, n) => `_${Math.max(1, Number(n) - 1)}/code.html`);
        if (prevPath !== path) {
          window.location.href = prevPath;
        }
      });
    }
  }
})();
