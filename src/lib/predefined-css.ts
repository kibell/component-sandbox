// Predefined CSS classes that are injected into the preview iframe
export const predefinedCSS = `
/* ===== LAYOUT ===== */
.container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-row { flex-direction: row; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-end { justify-content: flex-end; }
.grid { display: grid; }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }

/* ===== SPACING ===== */
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.75rem; }
.p-4 { padding: 1rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }
.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.py-8 { padding-top: 2rem; padding-bottom: 2rem; }
.m-0 { margin: 0; }
.m-2 { margin: 0.5rem; }
.m-4 { margin: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-4 { margin-top: 1rem; }

/* ===== TYPOGRAPHY ===== */
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; }
.text-4xl { font-size: 2.25rem; }
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.uppercase { text-transform: uppercase; }
.tracking-wide { letter-spacing: 0.025em; }
.leading-relaxed { line-height: 1.625; }
.leading-tight { line-height: 1.25; }

/* ===== COLORS ===== */
.text-primary { color: #10b981; }
.text-secondary { color: #8b5cf6; }
.text-muted { color: #94a3b8; }
.text-dark { color: #1e293b; }
.text-light { color: #f8fafc; }
.text-danger { color: #ef4444; }
.text-warning { color: #f59e0b; }
.text-info { color: #3b82f6; }
.bg-primary { background-color: #10b981; }
.bg-secondary { background-color: #8b5cf6; }
.bg-dark { background-color: #1e293b; }
.bg-light { background-color: #f8fafc; }
.bg-muted { background-color: #f1f5f9; }
.bg-danger { background-color: #fef2f2; }
.bg-warning { background-color: #fffbeb; }
.bg-info { background-color: #eff6ff; }
.bg-gradient { background: linear-gradient(135deg, #10b981, #8b5cf6); }

/* ===== BORDERS ===== */
.border { border: 1px solid #e2e8f0; }
.border-2 { border: 2px solid #e2e8f0; }
.border-primary { border-color: #10b981; }
.border-secondary { border-color: #8b5cf6; }
.rounded { border-radius: 0.375rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-xl { border-radius: 0.75rem; }
.rounded-2xl { border-radius: 1rem; }
.rounded-full { border-radius: 9999px; }

/* ===== SHADOWS ===== */
.shadow { box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
.shadow-md { box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.shadow-lg { box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
.shadow-xl { box-shadow: 0 20px 25px rgba(0,0,0,0.1); }

/* ===== SIZING ===== */
.w-full { width: 100%; }
.w-auto { width: auto; }
.h-auto { height: auto; }
.min-h-screen { min-height: 100vh; }
.max-w-sm { max-width: 24rem; }
.max-w-md { max-width: 28rem; }
.max-w-lg { max-width: 32rem; }
.max-w-xl { max-width: 36rem; }

/* ===== DISPLAY ===== */
.block { display: block; }
.inline-block { display: inline-block; }
.inline { display: inline; }
.hidden { display: none; }
.relative { position: relative; }
.absolute { position: absolute; }

/* ===== COMPONENTS ===== */
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.5rem 1.25rem; border-radius: 0.375rem; font-weight: 500;
  font-size: 0.875rem; cursor: pointer; border: none; transition: all 0.15s;
}
.btn-primary { background-color: #10b981; color: white; }
.btn-primary:hover { background-color: #059669; }
.btn-secondary { background-color: #8b5cf6; color: white; }
.btn-secondary:hover { background-color: #7c3aed; }
.btn-outline { background: transparent; border: 1px solid #e2e8f0; color: #1e293b; }
.btn-outline:hover { background-color: #f8fafc; }
.btn-lg { padding: 0.75rem 1.75rem; font-size: 1rem; }
.btn-sm { padding: 0.25rem 0.75rem; font-size: 0.75rem; }

.card {
  background: white; border-radius: 0.75rem; border: 1px solid #e2e8f0;
  padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.badge {
  display: inline-flex; align-items: center; padding: 0.125rem 0.625rem;
  border-radius: 9999px; font-size: 0.75rem; font-weight: 500;
}
.badge-primary { background-color: #d1fae5; color: #065f46; }
.badge-secondary { background-color: #ede9fe; color: #5b21b6; }
.badge-danger { background-color: #fef2f2; color: #991b1b; }

.input {
  width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0;
  border-radius: 0.375rem; font-size: 0.875rem; outline: none;
  transition: border-color 0.15s;
}
.input:focus { border-color: #10b981; box-shadow: 0 0 0 3px rgba(16,185,129,0.1); }

.avatar {
  width: 2.5rem; height: 2.5rem; border-radius: 9999px;
  background-color: #e2e8f0; display: flex; align-items: center;
  justify-content: center; font-weight: 600; color: #475569;
}

.divider { height: 1px; background-color: #e2e8f0; margin: 1rem 0; }

/* ===== ANIMATIONS ===== */
.animate-fade { animation: fadeIn 0.3s ease-in; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.animate-slide-up { animation: slideUp 0.3s ease-out; }
@keyframes slideUp { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

/* ===== BASE RESET ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; color: #1e293b; }
img { max-width: 100%; height: auto; }
a { color: #10b981; text-decoration: none; }
a:hover { text-decoration: underline; }
`;

export const defaultCode = `<div class="container py-8">
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-3xl font-bold text-dark">Dashboard</h1>
    <button class="btn btn-primary">New Project</button>
  </div>

  <div class="grid grid-cols-3 gap-4 mb-6">
    <div class="card animate-fade">
      <p class="text-muted text-sm mb-2">Total Users</p>
      <p class="text-2xl font-bold text-dark">12,847</p>
      <span class="badge badge-primary mt-2">+12%</span>
    </div>
    <div class="card animate-fade">
      <p class="text-muted text-sm mb-2">Revenue</p>
      <p class="text-2xl font-bold text-dark">$48,290</p>
      <span class="badge badge-secondary mt-2">+8.1%</span>
    </div>
    <div class="card animate-fade">
      <p class="text-muted text-sm mb-2">Active Now</p>
      <p class="text-2xl font-bold text-dark">573</p>
      <span class="badge badge-danger mt-2">-2.4%</span>
    </div>
  </div>

  <div class="card">
    <h2 class="text-xl font-semibold mb-4 text-dark">Quick Actions</h2>
    <div class="flex gap-3">
      <button class="btn btn-primary">Create Report</button>
      <button class="btn btn-secondary">View Analytics</button>
      <button class="btn btn-outline">Export Data</button>
    </div>
  </div>
</div>`;
