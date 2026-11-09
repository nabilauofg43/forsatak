"use strict";

const jobs = [
  {
    id: "frontend-developer",
    title: "مطور واجهات أمامية",
    company: "النيل للحلول الرقمية",
    initial: "ن",
    tone: "",
    location: "الخرطوم",
    category: "تقنية المعلومات",
    type: "دوام كامل",
    published: "منذ يومين",
    description: "تبحث شركة النيل للحلول الرقمية عن مطور واجهات أمامية للمساهمة في بناء خدمات رقمية سهلة الاستخدام والعمل مع فريق المنتج والهندسة.",
    responsibilities: ["تطوير واجهات ويب تفاعلية ومتجاوبة.", "التعاون مع المصممين لتحويل التصاميم إلى تجربة عملية.", "تحسين جودة الشيفرة والأداء وإصلاح المشكلات."],
    requirements: ["خبرة عملية في HTML وCSS وJavaScript.", "فهم جيد لمبادئ التصميم المتجاوب وإمكانية الوصول.", "القدرة على العمل ضمن فريق والتواصل بوضوح."]
  },
  {
    id: "digital-marketer",
    title: "أخصائي تسويق رقمي",
    company: "سنابل للتسويق",
    initial: "س",
    tone: "tone-sand",
    location: "السودان عن بُعد",
    category: "التسويق",
    type: "عمل عن بُعد",
    published: "منذ 3 أيام",
    description: "تبحث سنابل للتسويق عن أخصائي للمساهمة في تخطيط الحملات الرقمية وتنفيذها وتحليل نتائجها وتعزيز حضور العلامة التجارية.",
    responsibilities: ["إعداد خطط الحملات التسويقية ومتابعة تنفيذها.", "إدارة المحتوى عبر القنوات الرقمية.", "تحليل مؤشرات الأداء واقتراح التحسينات."],
    requirements: ["خبرة في التسويق الرقمي وصناعة المحتوى.", "مهارات تحليل وكتابة باللغة العربية.", "القدرة على تنظيم المهام والعمل باستقلالية."]
  },
  {
    id: "ux-designer",
    title: "مصمم تجربة مستخدم",
    company: "مدى للتصميم الرقمي",
    initial: "م",
    tone: "tone-blue",
    location: "بحري",
    category: "التصميم",
    type: "دوام كامل",
    published: "منذ 4 أيام",
    description: "تبحث مدى للتصميم الرقمي عن مصمم تجربة مستخدم يضع احتياجات الناس في قلب عملية التصميم ويساعد على بناء منتجات رقمية واضحة.",
    responsibilities: ["إجراء الأبحاث لفهم احتياجات المستخدمين.", "إعداد خرائط الرحلة والنماذج الأولية.", "التعاون مع فرق المنتج والهندسة لتطوير الحلول."],
    requirements: ["خبرة في تصميم المنتجات الرقمية.", "إتقان أدوات النمذجة والتصميم الشائعة.", "ملف أعمال يعرض نماذج من المشاريع السابقة."]
  },
  {
    id: "hr-specialist",
    title: "أخصائي موارد بشرية",
    company: "روافد للموارد البشرية",
    initial: "ر",
    tone: "tone-sand",
    location: "أم درمان",
    category: "الموارد البشرية",
    type: "دوام كامل",
    published: "منذ أسبوع",
    description: "تبحث روافد للموارد البشرية عن أخصائي لدعم عمليات الاستقطاب والتطوير والمساهمة في تحسين تجربة الموظفين.",
    responsibilities: ["تنسيق عمليات التوظيف وإجراءات الانضمام.", "متابعة ملفات الموظفين وتحديث البيانات.", "دعم برامج التدريب وتطوير بيئة العمل."],
    requirements: ["مؤهل مناسب في الموارد البشرية أو ما يعادلها.", "مهارات تواصل وتنظيم ممتازة.", "معرفة أساسية بإجراءات الموارد البشرية."]
  },
  {
    id: "financial-analyst",
    title: "محاسب مبتدئ",
    company: "جسور للمحاسبة",
    initial: "ج",
    tone: "",
    location: "ود مدني",
    category: "المالية",
    type: "تدريب",
    published: "منذ أسبوع",
    description: "تبحث جسور للمحاسبة عن محاسب مبتدئ للمساعدة في تنظيم السجلات ومراجعة المستندات وإعداد التقارير المالية.",
    responsibilities: ["تسجيل المعاملات ومراجعة المستندات المالية.", "المساعدة في إعداد التقارير الدورية.", "تنظيم الملفات والتنسيق مع فريق الحسابات."],
    requirements: ["مؤهل في المحاسبة أو المالية.", "إجادة استخدام الجداول الإلكترونية.", "الدقة والاهتمام بالتفاصيل."]
  },
  {
    id: "customer-support",
    title: "ممثل خدمة عملاء",
    company: "رواسي لخدمات العملاء",
    initial: "ر",
    tone: "tone-blue",
    location: "نيالا",
    category: "خدمة العملاء",
    type: "دوام جزئي",
    published: "منذ 10 أيام",
    description: "تبحث رواسي لخدمات العملاء عن ممثل متعاون للرد على الاستفسارات ومتابعة الطلبات وتقديم خدمة واضحة للعملاء.",
    responsibilities: ["الرد على استفسارات العملاء ومتابعتها.", "تسجيل الملاحظات وتصعيد الحالات عند الحاجة.", "المساهمة في تحسين جودة الخدمة."],
    requirements: ["مهارات تواصل وكتابة ممتازة.", "الالتزام والقدرة على التعامل باحترافية.", "يفضل وجود خبرة سابقة في خدمة العملاء."]
  },
  {
    id: "teacher",
    title: "معلم لغة عربية",
    company: "آفاق للتعليم",
    initial: "آ",
    tone: "",
    location: "كسلا",
    category: "التعليم",
    type: "دوام كامل",
    published: "منذ 12 يوماً",
    description: "تبحث آفاق للتعليم عن معلم لغة عربية لإعداد الدروس وتقديمها ومتابعة تقدم الطلاب بالتنسيق مع فريق المدرسة.",
    responsibilities: ["إعداد خطط الدروس وتقديمها بوضوح.", "متابعة مستوى الطلاب وتقديم الملاحظات.", "التنسيق مع الهيئة التعليمية وأولياء الأمور."],
    requirements: ["مؤهل مناسب في اللغة العربية أو التعليم.", "مهارات تواصل وإدارة صف جيدة.", "القدرة على إعداد أنشطة تعليمية مناسبة."]
  },
  {
    id: "civil-engineer",
    title: "مهندس مدني",
    company: "أساس للأعمال الهندسية",
    initial: "أ",
    tone: "tone-sand",
    location: "بورتسودان",
    category: "الهندسة",
    type: "دوام كامل",
    published: "منذ أسبوعين",
    description: "تبحث أساس للأعمال الهندسية عن مهندس مدني للمساهمة في متابعة الأعمال الميدانية والتنسيق الفني ومراجعة تقدم المشروع.",
    responsibilities: ["متابعة تنفيذ الأعمال وفق المخططات.", "إعداد تقارير تقدم العمل والملاحظات الفنية.", "التنسيق مع فريق الموقع والمقاولين."],
    requirements: ["بكالوريوس في الهندسة المدنية.", "إلمام بقراءة المخططات وإعداد التقارير.", "الاستعداد للعمل الميداني والتعاون مع الفريق."]
  },
  {
    id: "sales-representative",
    title: "مندوب مبيعات",
    company: "روافد للتجارة",
    initial: "ر",
    tone: "tone-blue",
    location: "عطبرة",
    category: "المبيعات",
    type: "دوام كامل",
    published: "منذ أسبوعين",
    description: "تبحث روافد للتجارة عن مندوب مبيعات لبناء علاقات مهنية مع العملاء والتعريف بخدمات الشركة ومتابعة احتياجاتهم.",
    responsibilities: ["التواصل مع العملاء والتعريف بالخدمات.", "متابعة الطلبات وبناء علاقات مستمرة.", "إعداد تقارير الزيارات والمبيعات."],
    requirements: ["مهارات تواصل وتفاوض جيدة.", "القدرة على تنظيم الزيارات ومتابعة العملاء.", "خبرة في المبيعات تعد ميزة إضافية."]
  }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
  });
}

function jobCard(job) {
  const href = "job-details.html?id=" + encodeURIComponent(job.id);
  return '<article class="job-card"><div class="job-card-top"><span class="company-mark ' + escapeHtml(job.tone) + '" aria-hidden="true">' + escapeHtml(job.initial) + '</span><div><h3>' + escapeHtml(job.title) + '</h3><span class="job-company">' + escapeHtml(job.company) + '</span></div></div><div class="job-meta"><span class="job-tag">' + escapeHtml(job.location) + '</span><span class="job-tag">' + escapeHtml(job.type) + '</span></div><div class="job-date">نُشرت ' + escapeHtml(job.published) + '</div><a class="job-card-link" href="' + href + '">عرض تفاصيل الوظيفة <span aria-hidden="true">←</span></a></article>';
}

function renderHomeJobs() {
  const container = document.getElementById("latest-jobs");
  if (container) container.innerHTML = jobs.slice(0, 3).map(jobCard).join("");
}

function renderJobsPage() {
  const form = document.getElementById("job-filters");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const keyword = document.getElementById("job-keyword");
  const category = document.getElementById("job-category");
  const type = document.getElementById("job-type");
  const location = document.getElementById("job-location");
  const results = document.getElementById("all-jobs");
  const emptyState = document.getElementById("empty-jobs");
  const count = document.getElementById("results-count");
  keyword.value = params.get("q") || "";
  category.value = params.get("category") || "";
  type.value = params.get("type") || "";
  location.value = params.get("location") || "";

  function updateResults() {
    const query = keyword.value.trim().toLocaleLowerCase("ar");
    const filtered = jobs.filter(function (job) {
      const searchable = (job.title + " " + job.company + " " + job.category).toLocaleLowerCase("ar");
      return (!query || searchable.includes(query)) &&
        (!category.value || job.category === category.value) &&
        (!type.value || job.type === type.value) &&
        (!location.value || job.location === location.value);
    });
    results.innerHTML = filtered.map(jobCard).join("");
    emptyState.hidden = filtered.length !== 0;
    count.textContent = "تم العثور على " + filtered.length + " " + (filtered.length === 1 ? "وظيفة" : "وظائف");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const search = new URLSearchParams();
    if (keyword.value.trim()) search.set("q", keyword.value.trim());
    if (category.value) search.set("category", category.value);
    if (type.value) search.set("type", type.value);
    if (location.value) search.set("location", location.value);
    const queryString = search.toString();
    history.replaceState(null, "", window.location.pathname + (queryString ? "?" + queryString : ""));
    updateResults();
  });

  document.getElementById("clear-filters").addEventListener("click", function () {
    form.reset();
    history.replaceState(null, "", window.location.pathname);
    updateResults();
    keyword.focus();
  });

  updateResults();
}

function renderJobDetails() {
  const container = document.getElementById("job-details-content");
  if (!container) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const job = jobs.find(function (item) { return item.id === id; });
  if (!job) {
    container.innerHTML = '<div class="detail-not-found"><h1>لم نعثر على هذه الوظيفة</h1><p>ربما لم تعد هذه الفرصة متاحة. يمكنك استكشاف الوظائف الأخرى.</p><a class="button" href="jobs.html">استعراض الوظائف</a></div>';
    document.getElementById("apply-card").hidden = true;
    return;
  }
  document.title = job.title + " | فرصتك";
  container.innerHTML = '<header class="details-header"><div class="details-header-top"><span class="company-mark ' + escapeHtml(job.tone) + '" aria-hidden="true">' + escapeHtml(job.initial) + '</span><div><h1>' + escapeHtml(job.title) + '</h1><span class="details-company">' + escapeHtml(job.company) + '</span></div></div><div class="details-meta"><span>' + escapeHtml(job.location) + '</span><span>' + escapeHtml(job.type) + '</span><span>' + escapeHtml(job.category) + '</span><span>نُشرت ' + escapeHtml(job.published) + '</span></div></header><div class="details-content"><section><h2>عن الوظيفة</h2><p>' + escapeHtml(job.description) + '</p></section><section><h2>المسؤوليات</h2><ul>' + job.responsibilities.map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") + '</ul></section><section><h2>المتطلبات والمؤهلات</h2><ul>' + job.requirements.map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") + '</ul></section></div>';
  document.getElementById("apply-link").href = "apply.html?id=" + encodeURIComponent(job.id);
}

function setupApplicationForm() {
  const form = document.getElementById("application-form");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const job = jobs.find(function (item) { return item.id === params.get("id"); });
  const jobName = document.getElementById("application-job-name");
  const jobId = document.getElementById("application-job-id");
  const formSection = document.getElementById("application-form-section");
  const missingJob = document.getElementById("application-job-missing");

  if (!job) {
    missingJob.hidden = false;
    formSection.hidden = true;
    return;
  }

  jobName.textContent = job.title;
  jobId.value = job.id;

  const resumeInput = document.getElementById("application-resume");
  const phoneInput = document.getElementById("applicant-phone");
  const notice = document.getElementById("application-notice");
  const maxResumeSize = 5 * 1024 * 1024;
  const allowedPdfTypes = ["application/pdf", "application/x-pdf"];

  function validatePhone() {
    const phone = phoneInput.value.trim();
    if (!phone) {
      phoneInput.setCustomValidity("");
      return true;
    }

    const validPhone = /^[0-9٠-٩+()\s-]{7,20}$/.test(phone);
    phoneInput.setCustomValidity(validPhone ? "" : "أدخل رقم هاتف صحيحاً يتكون من 7 إلى 20 رقماً أو رمزاً.");
    return validPhone;
  }

  function validateResumeMetadata() {
    const file = resumeInput.files[0];
    if (!file) {
      resumeInput.setCustomValidity("");
      return true;
    }

    const hasPdfExtension = /\.pdf$/i.test(file.name);
    const hasPdfType = !file.type || allowedPdfTypes.includes(file.type.toLowerCase());
    if (!hasPdfExtension || !hasPdfType) {
      resumeInput.setCustomValidity("يرجى اختيار ملف بصيغة PDF.");
    } else if (file.size > maxResumeSize) {
      resumeInput.setCustomValidity("يجب ألا يتجاوز حجم السيرة الذاتية 5 ميجابايت.");
    } else {
      resumeInput.setCustomValidity("");
    }
    return resumeInput.validity.valid;
  }

  resumeInput.addEventListener("change", function () {
    validateResumeMetadata();
    notice.hidden = true;
  });

  form.addEventListener("input", function () {
    validatePhone();
    notice.hidden = true;
  });

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!validatePhone()) {
      phoneInput.reportValidity();
      return;
    }
    if (!validateResumeMetadata()) {
      resumeInput.reportValidity();
      return;
    }

    const file = resumeInput.files[0];
    const header = new Uint8Array(await file.slice(0, 1024).arrayBuffer());
    const headerText = new TextDecoder().decode(header);
    if (!headerText.includes("%PDF-")) {
      resumeInput.setCustomValidity("تعذر التحقق من الملف. يرجى اختيار سيرة ذاتية بصيغة PDF صحيحة.");
      resumeInput.reportValidity();
      return;
    }

    resumeInput.setCustomValidity("");
    notice.textContent = "تم التحقق من بيانات طلب التقديم على وظيفة " + job.title + " بنجاح.";
    notice.hidden = false;
    form.reset();
  });
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const notice = document.getElementById("contact-notice");
    notice.textContent = "تم التحقق من بيانات رسالتك بنجاح.";
    notice.hidden = false;
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });
  renderHomeJobs();
  renderJobsPage();
  renderJobDetails();
  setupContactForm();
  setupApplicationForm();
});
