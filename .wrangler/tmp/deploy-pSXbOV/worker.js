var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// worker.js
var HTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\u548C\u65ED\u7535\u5546\u552E\u540E\u5C0F\u5DE5\u5177</title>
  <script>(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();<\/script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #0A0F1A;
      --bg-secondary: #111827;
      --bg-card: #151C2C;
      --bg-hover: #1A2332;
      --text-primary: #E2E8F0;
      --text-secondary: #8892B0;
      --text-muted: #4A5568;
      --accent: #00D4AA;
      --accent-dim: rgba(0, 212, 170, 0.1);
      --accent-glow: rgba(0, 212, 170, 0.25);
      --border: #1E293B;
      --border-accent: rgba(0, 212, 170, 0.3);
      --danger: #F87171;
      --danger-bg: rgba(248, 113, 113, 0.08);
      --warning-bg: rgba(251, 191, 36, 0.12);
      --warning-text: #FBBF24;
      --font-display: 'Space Grotesk', system-ui, sans-serif;
      --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
      --radius: 8px;
    }

    [data-theme="light"] {
      --bg-primary: #F8FAFC;
      --bg-secondary: #F1F5F9;
      --bg-card: #FFFFFF;
      --bg-hover: #F1F5F9;
      --text-primary: #1E293B;
      --text-secondary: #64748B;
      --text-muted: #94A3B8;
      --accent: #00A884;
      --accent-dim: rgba(0,168,132,0.1);
      --accent-glow: rgba(0,168,132,0.18);
      --border: #E2E8F0;
      --border-accent: rgba(0,168,132,0.35);
      --danger: #DC2626;
      --danger-bg: rgba(220,38,38,0.06);
      --warning-bg: rgba(217,119,6,0.1);
      --warning-text: #B45309;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: var(--font-display);
      background: var(--bg-primary);
      color: var(--text-primary);
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
    }

    .app {
      max-width: 1120px;
      margin: 0 auto;
      padding: 48px 24px 80px;
    }

    .header { margin-bottom: 32px; }

    .header-top {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .header-tag {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 500;
      color: var(--accent);
      background: var(--accent-dim);
      border: 1px solid var(--border-accent);
      padding: 3px 10px;
      border-radius: 4px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .header h1 {
      font-size: clamp(24px, 4vw, 36px);
      font-weight: 700;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }

    .header-sub {
      font-size: 15px;
      color: var(--text-secondary);
      margin-top: 6px;
    }

    .tabs {
      display: flex;
      gap: 4px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0;
    }

    .tab {
      padding: 10px 20px;
      background: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      color: var(--text-secondary);
      font-family: var(--font-display);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.2s, border-color 0.2s;
      margin-bottom: -1px;
    }

    .tab:hover { color: var(--text-primary); }
    .tab.active {
      color: var(--accent);
      border-bottom-color: var(--accent);
    }

    .view { display: none; }
    .view.active { display: block; }

    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 28px;
      margin-bottom: 20px;
    }

    .card-title {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .form-group { margin-bottom: 16px; }

    label {
      display: block;
      font-size: 13px;
      color: var(--text-secondary);
      margin-bottom: 6px;
      font-weight: 500;
    }

    input[type="text"],
    input[type="password"],
    input[type="url"],
    select,
    textarea {
      width: 100%;
      padding: 10px 14px;
      background: var(--bg-primary);
      border: 1px solid var(--border);
      border-radius: 6px;
      font-family: var(--font-display);
      font-size: 14px;
      color: var(--text-primary);
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    input:focus, select:focus, textarea:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-glow);
    }

    select {
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      padding-right: 36px;
    }

    textarea {
      min-height: 80px;
      resize: vertical;
      font-family: var(--font-mono);
    }

    .btn {
      padding: 10px 24px;
      border: none;
      border-radius: 6px;
      font-family: var(--font-display);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.15s, transform 0.1s;
      white-space: nowrap;
    }

    .btn-primary {
      background: var(--accent);
      color: var(--bg-primary);
    }

    [data-theme="light"] .btn-primary { color: #FFFFFF; }

    .btn-secondary {
      background: var(--bg-hover);
      color: var(--text-primary);
      border: 1px solid var(--border);
    }

    .btn-danger {
      background: var(--danger);
      color: #fff;
    }

    .btn:hover { opacity: 0.88; }
    .btn:active { transform: scale(0.97); }
    .btn:disabled { opacity: 0.4; cursor: not-allowed; }

    .btn-row {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .search-row {
      display: flex;
      gap: 10px;
      align-items: stretch;
    }

    .search-input-wrap {
      flex: 1;
      position: relative;
    }

    .search-prefix {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      font-family: var(--font-mono);
      font-size: 13px;
      color: var(--text-muted);
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      padding: 13px 16px 13px 36px;
      font-family: var(--font-mono);
      font-size: 15px;
    }

    .doc-selector {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;
    }

    .doc-selector select {
      width: 240px;
    }

    .search-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 14px;
      font-size: 12px;
      color: var(--text-muted);
      font-family: var(--font-mono);
    }

    .btn-refresh {
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 4px 12px;
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-refresh:hover { border-color: var(--accent); color: var(--accent); }

    .error-box {
      display: none;
      background: var(--danger-bg);
      border: 1px solid rgba(248, 113, 113, 0.2);
      border-radius: 6px;
      padding: 14px 20px;
      color: var(--danger);
      font-size: 14px;
      margin-bottom: 20px;
    }
    .error-box.visible { display: block; }

    .success-box {
      display: none;
      background: var(--accent-dim);
      border: 1px solid var(--border-accent);
      border-radius: 6px;
      padding: 14px 20px;
      color: var(--accent);
      font-size: 14px;
      margin-bottom: 20px;
    }
    .success-box.visible { display: block; }

    .loading { display: none; text-align: center; padding: 48px 20px; }
    .loading.visible { display: block; }

    .spinner {
      display: inline-block;
      width: 28px;
      height: 28px;
      border: 2px solid var(--border);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    .loading p {
      margin-top: 14px;
      color: var(--text-secondary);
      font-size: 13px;
      font-family: var(--font-mono);
    }

    .table-scroll { overflow-x: auto; }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead th {
      padding: 11px 20px;
      text-align: left;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 500;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.8px;
      border-bottom: 1px solid var(--border);
      white-space: nowrap;
      background: var(--bg-secondary);
    }

    tbody td {
      padding: 12px 20px;
      font-size: 14px;
      color: var(--text-secondary);
      border-bottom: 1px solid var(--border);
      white-space: nowrap;
    }

    tbody tr { transition: background 0.12s; }
    tbody tr:hover { background: var(--bg-hover); }
    tbody tr:last-child td { border-bottom: none; }

    .tag {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 500;
      padding: 2px 8px;
      border-radius: 4px;
      background: var(--accent-dim);
      color: var(--accent);
      border: 1px solid var(--border-accent);
    }

    .hl {
      background: var(--warning-bg);
      color: var(--warning-text);
      padding: 1px 4px;
      border-radius: 3px;
      font-weight: 600;
    }

    .preview-table {
      width: 100%;
      border-collapse: collapse;
    }

    .preview-table th {
      padding: 8px 14px;
      font-size: 12px;
      color: var(--text-muted);
      border-bottom: 1px solid var(--border);
      text-align: left;
    }

    .preview-table td {
      padding: 10px 14px;
      font-size: 14px;
      color: var(--text-primary);
      border-bottom: 1px solid var(--border);
    }

    .preview-table .empty-cell {
      color: var(--danger);
      font-style: italic;
    }

    .preview-table td.editable-cell {
      position: relative;
      cursor: pointer;
      min-width: 90px;
      transition: background 0.15s;
    }

    .preview-table td.editable-cell:hover {
      background: var(--bg-hover);
    }

    .preview-table td.editable-cell .edit-icon {
      position: absolute;
      top: 6px;
      right: 6px;
      opacity: 0;
      transition: opacity 0.15s;
      fill: var(--text-secondary);
      pointer-events: none;
    }

    .preview-table td.editable-cell:hover .edit-icon {
      opacity: 1;
    }

    .preview-table td.editable-cell .cell-editor {
      width: 100%;
      border: 1px solid var(--accent);
      border-radius: 4px;
      padding: 6px 8px;
      font: inherit;
      font-size: 14px;
      background: var(--bg-card);
      color: var(--text-primary);
      outline: none;
      box-shadow: 0 0 0 3px var(--accent-glow);
    }

    .missing-fields {
      background: var(--warning-bg);
      border: 1px solid rgba(251, 191, 36, 0.2);
      border-radius: 6px;
      padding: 12px 16px;
      color: var(--warning-text);
      font-size: 13px;
      margin-bottom: 16px;
    }

    .settings-section {
      margin-bottom: 28px;
    }

    .settings-section h3 {
      font-size: 14px;
      color: var(--accent);
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }

    .doc-list-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      background: var(--bg-primary);
      border: 1px solid var(--border);
      border-radius: 6px;
      margin-bottom: 8px;
    }

    .doc-list-item .name {
      flex: 1;
      font-weight: 500;
    }

    .doc-list-item .actions {
      display: flex;
      gap: 6px;
    }

    .btn-icon {
      padding: 4px 10px;
      font-size: 12px;
    }

    .form-row {
      display: flex;
      gap: 14px;
    }

    .form-row .form-group {
      flex: 1;
    }

    .hint {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 4px;
    }

    /* \u2500\u2500 Modal \u2500\u2500 */
    .modal-overlay {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.6);
      z-index: 1000;
      justify-content: center;
      align-items: center;
    }
    .modal-overlay.visible { display: flex; }

    .modal {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 28px;
      max-width: 520px;
      width: 90%;
      max-height: 85vh;
      overflow-y: auto;
    }

    .modal-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .modal-actions {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      margin-top: 20px;
    }

    /* \u2500\u2500 Toast \u2500\u2500 */
    .toast {
      display: none;
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 2000;
      padding: 14px 20px;
      border-radius: 6px;
      font-size: 14px;
      max-width: 400px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    .toast.visible { display: block; }
    .toast.success {
      background: var(--accent-dim);
      border: 1px solid var(--border-accent);
      color: var(--accent);
    }
    .toast.error {
      background: var(--danger-bg);
      border: 1px solid rgba(248, 113, 113, 0.2);
      color: var(--danger);
    }

    .log-entry {
      display: grid;
      grid-template-columns: 70px 60px 50px 1fr;
      gap: 8px;
      padding: 4px 0;
      border-bottom: 1px solid var(--border);
      color: var(--text-secondary);
    }
    .log-entry .log-time { color: var(--text-muted); }
    .log-entry .log-type { color: var(--accent); }
    .log-entry .log-result.success { color: var(--accent); }
    .log-entry .log-result.error { color: var(--danger); }
    .log-entry .log-detail { color: var(--text-secondary); word-break: break-all; }

    @media (max-width: 640px) {
      .app { padding: 24px 12px 48px; }
      .card { padding: 18px; }
      .search-row { flex-direction: column; }
      .form-row { flex-direction: column; }
      .doc-selector select { width: 100%; }
    }
  </style>
</head>
<body>
  <div class="app">
    <header class="header">
      <div class="header-top">
        <span class="header-tag" id="appVersion">v2.1.0</span>
        <button class="theme-toggle" id="themeToggleBtn" onclick="toggleTheme()" title="\u5207\u6362\u4E3B\u9898" style="margin-left:auto;background:var(--bg-hover);border:1px solid var(--border);border-radius:6px;padding:6px 10px;cursor:pointer;font-size:14px;color:var(--text-secondary);transition:all 0.2s;">\u{1F319}</button>
      </div>
      <h1>\u548C\u65ED\u7535\u5546\u552E\u540E\u5C0F\u5DE5\u5177</h1>
      <p class="header-sub">\u67E5\u8BE2 \xB7 \u767B\u8BB0 \xB7 \u8BBE\u7F6E \u2014 \u6570\u636E\u6765\u6E90\uFF1A<code>\u817E\u8BAF\u6587\u6863</code>&nbsp;<code>\u65FA\u5E97\u901A</code></p>
    </header>

    <nav class="tabs">
      <button class="tab active" data-view="query" onclick="switchView('query')">\u67E5\u8BE2</button>
      <button class="tab" data-view="write" onclick="switchView('write')">\u767B\u8BB0</button>
      <button class="tab" data-view="settings" onclick="switchView('settings')">\u8BBE\u7F6E</button>
    </nav>

    <!-- Query View -->
    <section class="view active" id="view-query">
      <div class="card">
        <h2 class="card-title">\u6587\u6863\u67E5\u8BE2</h2>
        <div class="doc-selector">
          <label for="queryDocSelect" style="margin:0">\u6587\u6863\uFF1A</label>
          <select id="queryDocSelect" onchange="onQueryDocChange()"></select>
        </div>
        <div class="search-row">
          <div class="search-input-wrap">
            <span class="search-prefix">&gt;</span>
            <input type="text" class="search-input" id="searchInput" placeholder="\u8F93\u5165\u5FEB\u9012\u5355\u53F7\u67E5\u8BE2\u767B\u8BB0\u8BB0\u5F55..." autocomplete="off" spellcheck="false"/>
          </div>
          <button class="btn btn-primary" id="searchBtn" onclick="doSearch()">\u67E5\u8BE2</button>
        </div>
        <div class="search-meta">
          <span id="statusText">ready</span>
          <button class="btn-refresh" onclick="doRefresh()">\u5237\u65B0\u6570\u636E</button>
        </div>
      </div>

      <div class="error-box" id="errorMsg"></div>
      <div class="loading" id="loading">
        <div class="spinner"></div>
        <p>fetching data...</p>
      </div>

      <div class="card" id="resultPanel" style="display:none">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <h2 class="card-title" style="margin:0">\u67E5\u8BE2\u7ED3\u679C</h2>
          <span style="font-family:var(--font-mono);font-size:13px;color:var(--text-secondary)">\u5171 <em id="totalCount" style="font-style:normal;color:var(--accent);font-weight:600">0</em> \u6761</span>
        </div>
        <div class="table-scroll">
          <table>
            <thead>
              <tr>
                <th>\u6765\u6E90</th><th>\u767B\u8BB0\u65E5\u671F</th><th>\u5FEB\u9012\u5355\u53F7</th><th>\u5546\u54C1\u540D\u79F0</th>
                <th>\u6B63\u54C1</th><th>\u6B21\u54C1</th><th>\u6B21\u54C1\u5907\u6CE8</th><th>\u5907\u6CE8</th>
              </tr>
            </thead>
            <tbody id="resultBody"></tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h2 class="card-title">\u65FA\u5E97\u901AERP\u67E5\u8BE2</h2>
        <div class="search-row">
          <div class="search-input-wrap">
            <span class="search-prefix">&gt;</span>
            <input type="text" class="search-input" id="wdtSearchInput" placeholder="\u8F93\u5165\u7269\u6D41\u5355\u53F7\u6216\u539F\u59CB\u5355\u53F7\u67E5\u8BE2ERP\u8BA2\u5355..." autocomplete="off" spellcheck="false"/>
          </div>
          <button class="btn btn-primary" id="wdtSearchBtn" onclick="doWdtSearch()">ERP\u67E5\u8BE2</button>
        </div>
        <div class="search-meta">
          <span id="wdtStatusText">ready</span>
        </div>
      </div>

      <div class="error-box" id="wdtErrorMsg"></div>
      <div class="loading" id="wdtLoading">
        <div class="spinner"></div>
        <p>querying ERP...</p>
      </div>

      <div class="card" id="wdtResultPanel" style="display:none">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <h2 class="card-title" style="margin:0">ERP\u8BA2\u5355\u4FE1\u606F</h2>
          <span style="font-family:var(--font-mono);font-size:13px;color:var(--text-secondary)">\u65FA\u5E97\u901A \xB7 \u5171 <em id="wdtTotalCount" style="font-style:normal;color:var(--accent);font-weight:600">0</em> \u6761</span>
        </div>
        <div class="table-scroll">
          <table>
            <thead>
              <tr>
                <th>\u539F\u59CB\u5355\u53F7</th><th>\u7269\u6D41\u5355\u53F7</th><th>\u5E97\u94FA\u540D\u79F0</th><th>\u5E73\u53F0</th>
                <th>\u7269\u6D41\u516C\u53F8</th><th>\u8BA2\u5355\u72B6\u6001</th><th>\u8BA2\u5355\u91D1\u989D</th>
              </tr>
            </thead>
            <tbody id="wdtResultBody"></tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Write View -->
    <section class="view" id="view-write">
      <div class="card">
        <h2 class="card-title">\u767B\u8BB0\u65B0\u8BB0\u5F55</h2>
        <div class="form-row">
          <div class="form-group">
            <label>\u9009\u62E9\u6587\u6863</label>
            <select id="writeDocSelect" onchange="onWriteDocChange()"></select>
          </div>
          <div class="form-group">
            <label>\u9009\u62E9\u76EE\u6807\u8868\u683C</label>
            <select id="writeTargetSelect"></select>
          </div>
        </div>
        <div class="form-group">
          <label>\u7528\u81EA\u7136\u8BED\u8A00\u63CF\u8FF0\u8981\u767B\u8BB0\u7684\u5185\u5BB9</label>
          <textarea id="writeDescription" placeholder="\u4F8B\u5982\uFF1A9831745985570 \u4E22\u4EF6\u7406\u8D5454.9\u5143 \u8FD0\u8D397\u5143&#10;\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u8BC6\u522B\u7269\u6D41\u5355\u53F7\u5E76\u4ECE\u65FA\u5E97\u901AERP\u53CD\u67E5\u539F\u59CB\u5355\u53F7\u3001\u5E97\u94FA\u540D\u3001\u5E73\u53F0"></textarea>
        </div>
        <div class="btn-row">
          <button class="btn btn-primary" id="extractBtn" onclick="doExtract()">\u767B\u8BB0\u9884\u89C8</button>
        </div>
      </div>

      <div class="error-box" id="writeError"></div>
      <div class="success-box" id="writeSuccess"></div>
      <div class="loading" id="writeLoading">
        <div class="spinner"></div>
        <p>AI \u6B63\u5728\u5206\u6790...</p>
      </div>

      <div class="card" id="previewPanel" style="display:none">
        <h2 class="card-title">\u767B\u8BB0\u9884\u89C8</h2>
        <div id="missingFields" class="missing-fields" style="display:none"></div>
        <div class="table-scroll">
          <table class="preview-table">
            <thead><tr id="previewHeader"></tr></thead>
            <tbody><tr id="previewRow"></tr></tbody>
          </table>
        </div>
        <div id="debugInfo" style="display:none;margin-top:12px;padding:10px 14px;background:var(--bg-primary);border:1px solid var(--border);border-radius:6px;font-family:var(--font-mono);font-size:11px;color:var(--text-muted);"></div>
        <div style="margin-top:16px;display:flex;gap:10px">
          <button class="btn btn-primary" onclick="doWrite()">\u786E\u8BA4\u767B\u8BB0</button>
          <button class="btn btn-secondary" onclick="cancelWrite()">\u53D6\u6D88</button>
        </div>
      </div>
    </section>

    <!-- Settings View -->
    <section class="view" id="view-settings">
      <div class="card">
        <h2 class="card-title">\u7CFB\u7EDF\u8BBE\u7F6E</h2>

        <div id="settingsPasswordGate" style="display:none">
          <div class="settings-section">
            <h3>\u8BBF\u95EE\u9A8C\u8BC1</h3>
            <p id="passwordGateDesc" style="color:var(--text-secondary);font-size:14px;margin-bottom:12px">\u8BF7\u8F93\u5165\u8BBF\u95EE\u5BC6\u7801</p>
            <div class="form-group">
              <input type="password" id="settingsPasswordInput" placeholder="\u8BBF\u95EE\u5BC6\u7801" onkeydown="if(event.key==='Enter') handlePasswordGate()"/>
            </div>
            <div class="btn-row">
              <button class="btn btn-primary" id="passwordGateBtn" onclick="handlePasswordGate()">\u8FDB\u5165\u8BBE\u7F6E</button>
            </div>
          </div>
        </div>

        <div id="settingsContent" style="display:none">

        <div class="settings-section">
          <h3>\u817E\u8BAF\u6587\u6863\u914D\u7F6E</h3>
          <div class="form-group">
            <label>API Key</label>
            <input type="password" id="cfgTencentKey" placeholder="\u817E\u8BAF\u6587\u6863 API Key"/>
          </div>
          <div class="form-group">
            <label>MCP API \u5730\u5740</label>
            <input type="url" id="cfgTencentUrl" placeholder="https://docs.qq.com/openapi/mcp"/>
          </div>
        </div>

        <div class="settings-section">
          <h3>LLM \u914D\u7F6E</h3>
          <div class="form-row">
            <div class="form-group">
              <label>\u670D\u52A1\u5546</label>
              <select id="cfgLlmProvider" onchange="onLlmProviderChange()">
                <option value="deepseek">DeepSeek</option>
                <option value="doubao">\u8C46\u5305 (\u706B\u5C71\u5F15\u64CE)</option>
                <option value="qwen">\u901A\u4E49\u5343\u95EE</option>
                <option value="stepfun">\u9636\u8DC3\u661F\u8FB0TOKENPLAN</option>
                <option value="ollama">Ollama (\u672C\u5730)</option>
                <option value="openai">OpenAI</option>
                <option value="custom">\u81EA\u5B9A\u4E49</option>
              </select>
            </div>
            <div class="form-group" id="customProviderNameGroup" style="display:none">
              <label>\u81EA\u5B9A\u4E49\u670D\u52A1\u5546\u540D</label>
              <input type="text" id="cfgLlmCustomName" placeholder="\u4F8B\u5982 MyLLM"/>
            </div>
            <div class="form-group">
              <label>\u6A21\u578B\u540D\u79F0</label>
              <input type="text" id="cfgLlmModel" placeholder="deepseek-chat"/>
            </div>
          </div>
          <div class="form-group">
            <label>API Key</label>
            <input type="password" id="cfgLlmKey" placeholder="LLM API Key"/>
          </div>
          <div class="form-group">
            <label>Base URL</label>
            <input type="url" id="cfgLlmUrl" placeholder="https://api.deepseek.com"/>
          </div>
          <div class="btn-row" style="margin-top:8px">
            <button class="btn btn-secondary" onclick="testLLM()">\u6D4B\u8BD5\u8FDE\u63A5</button>
          </div>
        </div>

        <div class="settings-section">
          <h3>\u9ED8\u8BA4\u6587\u6863</h3>
          <div class="form-row">
            <div class="form-group">
              <label>\u67E5\u8BE2 TAB \u9ED8\u8BA4\u6587\u6863</label>
              <select id="cfgQueryDefaultDoc" onchange="onQueryDefaultDocChange()"></select>
            </div>
            <div class="form-group">
              <label>\u767B\u8BB0 TAB \u9ED8\u8BA4\u6587\u6863</label>
              <select id="cfgWriteDefaultDoc" onchange="onWriteDefaultDocChange()"></select>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <h3>\u6587\u6863\u914D\u7F6E</h3>
          <div id="docListContainer"></div>
          <button class="btn btn-secondary" onclick="addDocument()" style="margin-top:8px">+ \u6DFB\u52A0\u6587\u6863</button>
        </div>

        <div class="settings-section">
          <h3>\u7F13\u5B58\u914D\u7F6E</h3>
          <div class="form-row">
            <div class="form-group">
              <label>\u7F13\u5B58\u6709\u6548\u671F\uFF08\u79D2\uFF09</label>
              <input type="text" id="cfgCacheTtl" placeholder="300"/>
            </div>
            <div class="form-group">
              <label>\u81EA\u52A8\u5237\u65B0\u95F4\u9694\uFF08\u79D2\uFF09</label>
              <input type="text" id="cfgCacheRefresh" placeholder="1800"/>
            </div>
          </div>
        </div>

        <div class="btn-row">
          <button class="btn btn-primary" onclick="saveSettings()">\u4FDD\u5B58\u914D\u7F6E</button>
        </div>
        </div>
      </div>
    </section>

    <!-- Document Edit Modal -->
    <div class="modal-overlay" id="docModal">
      <div class="modal">
        <h2 class="modal-title" id="docModalTitle">\u6DFB\u52A0\u6587\u6863</h2>
        <div class="form-group">
          <label>\u6587\u6863\u540D\u79F0</label>
          <input type="text" id="modalDocName" placeholder="\u5982\uFF1A\u548C\u65ED\u7535\u5546\u9000\u8D27\u767B\u8BB0"/>
        </div>
        <div class="form-group">
          <label>\u817E\u8BAF\u6587\u6863 File ID</label>
          <input type="text" id="modalDocFileId" placeholder="\u6587\u6863 ID"/>
        </div>
        <div class="form-group">
          <label>\u8BFB\u53D6 Sheet \u5173\u952E\u8BCD\uFF08\u9017\u53F7\u5206\u9694\uFF09</label>
          <input type="text" id="modalDocKeywords" placeholder="\u5BA2\u9000,\u9000\u8D27"/>
        </div>
        <div class="form-group">
          <label>\u5199\u5165\u76EE\u6807\uFF08\u6BCF\u884C\u4E00\u4E2A\uFF0C\u683C\u5F0F\uFF1A\u663E\u793A\u540D|sheet\u540D\uFF09</label>
          <textarea id="modalDocTargets" placeholder="\u5FEB\u9012\u7406\u8D54\u767B\u8BB0\u8868|\u7406\u8D54\u767B\u8BB0&#10;\u552E\u540E\u6362\u8D27\u767B\u8BB0\u8868|\u6362\u8D27\u767B\u8BB0" style="min-height:60px"></textarea>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" id="modalDocQueryDefault" style="width:auto;display:inline;margin-right:6px"/>
            \u8BBE\u4E3A\u67E5\u8BE2 TAB \u9ED8\u8BA4\u6587\u6863
          </label>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" id="modalDocWriteDefault" style="width:auto;display:inline;margin-right:6px"/>
            \u8BBE\u4E3A\u767B\u8BB0 TAB \u9ED8\u8BA4\u6587\u6863
          </label>
        </div>
        <div class="modal-actions">
          <button class="btn btn-secondary" onclick="closeDocModal()">\u53D6\u6D88</button>
          <button class="btn btn-primary" id="docModalSave" onclick="saveDocModal()">\u4FDD\u5B58</button>
        </div>
      </div>
    </div>

    <!-- Delete Confirm Modal -->
    <!-- Duplicate Detection Modal -->
    <div class="modal-overlay" id="duplicateModal">
      <div class="modal" style="max-width:700px">
        <h2 class="modal-title" id="duplicateModalTitle">\u67E5\u91CD\u63D0\u793A</h2>
        <div id="duplicateModalBody" style="margin-bottom:16px"></div>
        <div class="modal-actions">
          <button class="btn btn-secondary" onclick="closeDuplicateModal()">\u53D6\u6D88</button>
          <button class="btn btn-primary" id="duplicateConfirmBtn" onclick="confirmDuplicate()">\u786E\u8BA4</button>
        </div>
      </div>
    </div>

    <div class="modal-overlay" id="deleteModal">
      <div class="modal" style="max-width:400px">
        <h2 class="modal-title">\u786E\u8BA4\u5220\u9664</h2>
        <p id="deleteModalText" style="color:var(--text-secondary);font-size:14px;line-height:1.6"></p>
        <div class="modal-actions">
          <button class="btn btn-secondary" onclick="closeDeleteModal()">\u53D6\u6D88</button>
          <button class="btn btn-danger" id="deleteConfirmBtn">\u5220\u9664</button>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div class="toast" id="toast"></div>

    <div class="card" id="logPanel" style="position:fixed;bottom:0;left:0;right:0;max-height:240px;overflow-y:auto;z-index:900;display:none;border-radius:0;border-left:none;border-right:none;border-bottom:none;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;position:sticky;top:0;background:var(--bg-card);padding:8px 0;z-index:1;">
        <h2 class="card-title" style="margin:0;font-size:13px;">\u64CD\u4F5C\u65E5\u5FD7</h2>
        <div style="display:flex;gap:8px;">
          <button class="btn-refresh" onclick="clearLog()">\u6E05\u7A7A</button>
          <button class="btn-refresh" onclick="toggleLogPanel()">\u6536\u8D77</button>
        </div>
      </div>
      <div id="logList" style="font-family:var(--font-mono);font-size:12px;"></div>
    </div>
    <button class="btn-refresh" id="logToggleBtn" onclick="toggleLogPanel()" style="position:fixed;bottom:16px;right:24px;z-index:901;padding:6px 14px;">\u65E5\u5FD7</button>
  </div>

  <script>
    const $ = id => document.getElementById(id);

    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      $('themeToggleBtn').textContent = next === 'dark' ? '\u{1F319}' : '\u2600\uFE0F';
      localStorage.setItem('theme', next);
    }

    let currentConfig = null;
    let documents = [];
    let writePreviewData = null;
    let _documentsLoaded = false;

    function invalidateFrontendCache() {
      _documentsLoaded = false;
      currentConfig = null;
    }

    function esc(s) {
      if (!s) return '';
      return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }

    function hl(text, q) {
      if (!q) return esc(text);
      const safe = esc(text);
      const sq = esc(q).replace(/[.*+?^\${}()|[]\\]/g, '\\$&');
      return safe.replace(new RegExp('(' + sq + ')', 'gi'), '<span class="hl">$1</span>');
    }

    function showError(msg, container) {
      const el = container || $('errorMsg');
      el.textContent = msg;
      el.classList.add('visible');
      setTimeout(() => el.classList.remove('visible'), 8000);
    }

    function showSuccess(msg) {
      const el = $('writeSuccess');
      el.textContent = msg;
      el.classList.add('visible');
      setTimeout(() => el.classList.remove('visible'), 8000);
    }

    function setStatus(t) { $('statusText').textContent = t; }

    function showToast(msg, type) {
      const el = $('toast');
      el.textContent = msg;
      el.className = 'toast ' + (type || 'success') + ' visible';
      setTimeout(() => el.classList.remove('visible'), 5000);
    }

    let operationLogs = [];
    function addLog(type, result, detail) {
      const now = new Date();
      const time = now.toLocaleTimeString('zh-CN', { hour12: false });
      operationLogs.unshift({ time, type, result, detail });
      if (operationLogs.length > 10) operationLogs.pop();
      renderLogs();
    }
    function renderLogs() {
      const list = $('logList');
      if (operationLogs.length === 0) {
        list.innerHTML = '<div style="color:var(--text-muted);padding:8px 0;">\u6682\u65E0\u64CD\u4F5C\u8BB0\u5F55</div>';
        return;
      }
      list.innerHTML = operationLogs.map(log =>
        '<div class="log-entry">' +
        '<span class="log-time">' + esc(log.time) + '</span>' +
        '<span class="log-type">' + esc(log.type) + '</span>' +
        '<span class="log-result ' + (log.result === '\u6210\u529F' ? 'success' : 'error') + '">' + esc(log.result) + '</span>' +
        '<span class="log-detail">' + esc(log.detail) + '</span>' +
        '</div>'
      ).join('');
    }
    function toggleLogPanel() {
      const panel = $('logPanel');
      if (panel.style.display === 'none') { panel.style.display = 'block'; } else { panel.style.display = 'none'; }
    }
    function clearLog() { operationLogs = []; renderLogs(); }

    function switchView(viewName) {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.querySelector('.tab[data-view="' + viewName + '"]').classList.add('active');
      $('view-' + viewName).classList.add('active');

      if (viewName === 'settings') showSettingsPasswordGate();
      if (viewName === 'query') loadDocSelector('queryDocSelect');
      if (viewName === 'write') loadDocSelector('writeDocSelect');
    }

    async function loadDocSelector(selectId) {
      try {
        // \u4EC5\u9996\u6B21\u52A0\u8F7D\u6216\u7F13\u5B58\u5931\u6548\u65F6\u624D\u8BF7\u6C42 /api/documents
        if (!_documentsLoaded) {
          const resp = await fetch('/api/documents');
          const data = await resp.json();
          if (data.success) {
            documents = data.data;
            _documentsLoaded = true;
          }
        }
        const sel = $(selectId);
        sel.innerHTML = '';
        documents.forEach(d => {
          const opt = document.createElement('option');
          opt.value = d.id;
          const defaultLabel = selectId === 'queryDocSelect'
            ? (d.queryDefault ? ' (\u67E5\u8BE2\u9ED8\u8BA4)' : '')
            : (d.writeDefault ? ' (\u767B\u8BB0\u9ED8\u8BA4)' : '');
          opt.textContent = d.name + defaultLabel;
          const isDefault = selectId === 'queryDocSelect' ? d.queryDefault : d.writeDefault;
          if (isDefault) opt.selected = true;
          sel.appendChild(opt);
        });

        if (selectId === 'writeDocSelect') {
          onWriteDocChange();
        }
      } catch (err) {
        console.error('\u52A0\u8F7D\u6587\u6863\u5217\u8868\u5931\u8D25:', err);
      }
    }

    function onQueryDocChange() {
      setStatus('ready');
    }

    async function onWriteDocChange() {
      const docId = $('writeDocSelect').value;
      const doc = documents.find(d => d.id === docId);
      if (!doc) return;

      // \u4F18\u5148\u4F7F\u7528\u5DF2\u7F13\u5B58\u7684 currentConfig\uFF0C\u907F\u514D\u91CD\u590D\u8BF7\u6C42 /api/config
      if (!currentConfig) {
        try {
          const resp = await fetch('/api/config');
          const data = await resp.json();
          if (data.success) {
            currentConfig = data.data;
          }
        } catch (err) {
          console.error('\u52A0\u8F7D\u767B\u8BB0\u76EE\u6807\u5931\u8D25:', err);
          return;
        }
      }

      const docConfig = currentConfig.documents.find(d => d.id === docId);
      const targets = (docConfig && docConfig.writeTargets) || [];
      const sel = $('writeTargetSelect');
      sel.innerHTML = '';
      if (targets.length === 0) {
        sel.innerHTML = '<option value="">\u672A\u914D\u7F6E\u767B\u8BB0\u76EE\u6807</option>';
      } else {
        targets.forEach(t => {
          const opt = document.createElement('option');
          opt.value = t.id;
          opt.textContent = t.name;
          sel.appendChild(opt);
        });
      }
    }

    $('searchInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') doSearch();
    });

    async function doSearch() {
      const q = $('searchInput').value.trim();
      if (!q) { showError('\u8BF7\u8F93\u5165\u5FEB\u9012\u5355\u53F7'); $('searchInput').focus(); return; }

      const docId = $('queryDocSelect').value;
      $('resultPanel').style.display = 'none';
      $('loading').classList.add('visible');
      $('errorMsg').classList.remove('visible');
      $('searchBtn').disabled = true;
      setStatus('querying...');

      try {
        const resp = await fetch('/api/search?q=' + encodeURIComponent(q) + '&docId=' + encodeURIComponent(docId));
        const data = await resp.json();
        $('loading').classList.remove('visible');

        if (!data.success) {
          showError(data.error || '\u67E5\u8BE2\u5931\u8D25');
          showToast(data.error || '\u67E5\u8BE2\u5931\u8D25', 'error');
          addLog('\u67E5\u8BE2', '\u5931\u8D25', data.error || '\u67E5\u8BE2\u5931\u8D25');
          setStatus('error');
          return;
        }

        $('totalCount').textContent = data.total;
        const body = $('resultBody');
        body.innerHTML = '';

        if (data.total === 0) {
          body.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:40px;color:var(--text-muted)">\u672A\u627E\u5230\u5339\u914D\u8BB0\u5F55</td></tr>';
        } else {
          data.data.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML =
              '<td><span class="tag">' + esc(r.source) + '</span></td>' +
              '<td>' + esc(r['\u767B\u8BB0\u65E5\u671F']) + '</td>' +
              '<td style="color:var(--text-primary);font-family:var(--font-mono);font-size:13px">' + hl(r['\u5FEB\u9012\u5355\u53F7'], q) + '</td>' +
              '<td>' + esc(r['\u5546\u54C1\u540D\u79F0']) + '</td>' +
              '<td>' + esc(r['\u6B63\u54C1\u6570\u91CF']) + '</td>' +
              '<td>' + esc(r['\u6B21\u54C1\u6570\u91CF']) + '</td>' +
              '<td>' + esc(r['\u6B21\u54C1\u5907\u6CE8']) + '</td>' +
              '<td>' + esc(r['\u5907\u6CE8']) + '</td>';
            body.appendChild(tr);
          });
        }

        $('resultPanel').style.display = 'block';
        setStatus('done \u2014 ' + data.total + ' result' + (data.total > 1 ? 's' : ''));
        showToast('\u67E5\u8BE2\u5B8C\u6210\uFF0C\u5171 ' + data.total + ' \u6761\u7ED3\u679C', 'success');
        addLog('\u67E5\u8BE2', '\u6210\u529F', '\u5355\u53F7: ' + q + '\uFF0C\u5171 ' + data.total + ' \u6761');
      } catch (err) {
        $('loading').classList.remove('visible');
        showError('\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25');
        showToast('\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25', 'error');
        addLog('\u67E5\u8BE2', '\u5931\u8D25', '\u7F51\u7EDC\u9519\u8BEF');
        setStatus('network error');
      } finally {
        $('searchBtn').disabled = false;
      }
    }

    async function doRefresh() {
      const docId = $('queryDocSelect').value;
      setStatus('refreshing...');
      try {
        const resp = await fetch('/api/refresh?docId=' + encodeURIComponent(docId));
        const data = await resp.json();
        if (data.success) {
          setStatus('synced \u2014 ' + data.total + ' records');
          showToast('\u5237\u65B0\u6210\u529F\uFF0C\u5171 ' + data.total + ' \u6761\u8BB0\u5F55', 'success');
          addLog('\u5237\u65B0', '\u6210\u529F', '\u5171 ' + data.total + ' \u6761\u8BB0\u5F55');
        } else {
          showError('\u5237\u65B0\u5931\u8D25: ' + (data.error || ''));
          showToast('\u5237\u65B0\u5931\u8D25: ' + (data.error || ''), 'error');
          addLog('\u5237\u65B0', '\u5931\u8D25', data.error || '\u5237\u65B0\u5931\u8D25');
          setStatus('error');
        }
      } catch {
        setStatus('network error');
        showToast('\u5237\u65B0\u5931\u8D25: \u7F51\u7EDC\u9519\u8BEF', 'error');
        addLog('\u5237\u65B0', '\u5931\u8D25', '\u7F51\u7EDC\u9519\u8BEF');
      }
    }

    const TRADE_STATUS_MAP = {4:'\u7EBF\u4E0B\u9000\u6B3E',5:'\u5DF2\u53D6\u6D88',6:'\u5F85\u5BA1\u6838',10:'\u672A\u4ED8\u6B3E',55:'\u5DF2\u5BA1\u6838',95:'\u5DF2\u53D1\u8D27',110:'\u5DF2\u5B8C\u6210'};
    function formatTradeStatus(s) { return TRADE_STATUS_MAP[s] || ('\u72B6\u6001' + s); }
    function setWdtStatus(t) { $('wdtStatusText').textContent = t; }

    $('wdtSearchInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') doWdtSearch();
    });

    async function doWdtSearch() {
      const q = $('wdtSearchInput').value.trim();
      if (!q) { showError('\u8BF7\u8F93\u5165\u7269\u6D41\u5355\u53F7\u6216\u539F\u59CB\u5355\u53F7', 'wdtErrorMsg'); $('wdtSearchInput').focus(); return; }

      $('wdtResultPanel').style.display = 'none';
      $('wdtLoading').classList.add('visible');
      $('wdtErrorMsg').classList.remove('visible');
      $('wdtSearchBtn').disabled = true;
      setWdtStatus('querying ERP...');

      try {
        const resp = await fetch('/api/wdt/query?q=' + encodeURIComponent(q));
        const data = await resp.json();
        $('wdtLoading').classList.remove('visible');

        if (!data.success) {
          showError(data.error || 'ERP\u67E5\u8BE2\u5931\u8D25', 'wdtErrorMsg');
          showToast(data.error || 'ERP\u67E5\u8BE2\u5931\u8D25', 'error');
          addLog('ERP\u67E5\u8BE2', '\u5931\u8D25', data.error || '\u67E5\u8BE2\u5931\u8D25');
          setWdtStatus('error');
          return;
        }

        $('wdtTotalCount').textContent = data.total;
        const body = $('wdtResultBody');
        body.innerHTML = '';

        if (data.total === 0) {
          body.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--text-muted)">\u672A\u627E\u5230\u5339\u914D\u7684ERP\u8BA2\u5355</td></tr>';
        } else {
          data.orders.forEach(o => {
            const tr = document.createElement('tr');
            tr.innerHTML =
              '<td style="font-family:var(--font-mono);font-size:13px;color:var(--text-primary)">' + esc(o.src_tids) + '</td>' +
              '<td style="font-family:var(--font-mono);font-size:13px;color:var(--accent)">' + hl(o.logistics_no, q) + '</td>' +
              '<td>' + esc(o.parsedShopName || o.shop_name) + '</td>' +
              '<td><span class="tag">' + esc(o.platform) + '</span></td>' +
              '<td>' + esc(o.logistics_name) + '</td>' +
              '<td>' + esc(formatTradeStatus(o.trade_status)) + '</td>' +
              '<td>' + esc(o.goods_amount) + '</td>';
            body.appendChild(tr);
          });
        }

        $('wdtResultPanel').style.display = 'block';
        setWdtStatus('done \u2014 ' + data.total + ' result' + (data.total > 1 ? 's' : ''));
        showToast('ERP\u67E5\u8BE2\u5B8C\u6210\uFF0C\u5171 ' + data.total + ' \u6761\u7ED3\u679C', 'success');
        addLog('ERP\u67E5\u8BE2', '\u6210\u529F', '\u67E5\u8BE2: ' + q + '\uFF0C\u5171 ' + data.total + ' \u6761');
      } catch (err) {
        $('wdtLoading').classList.remove('visible');
        showError('\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25', 'wdtErrorMsg');
        showToast('\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25', 'error');
        addLog('ERP\u67E5\u8BE2', '\u5931\u8D25', '\u7F51\u7EDC\u9519\u8BEF');
        setWdtStatus('network error');
      } finally {
        $('wdtSearchBtn').disabled = false;
      }
    }

    async function doExtract() {
      const docId = $('writeDocSelect').value;
      const targetId = $('writeTargetSelect').value;
      const description = $('writeDescription').value.trim();

      if (!targetId) { showError('\u8BF7\u9009\u62E9\u76EE\u6807\u8868\u683C', 'writeError'); return; }
      if (!description) { showError('\u8BF7\u8F93\u5165\u63CF\u8FF0\u5185\u5BB9', 'writeError'); return; }

      $('previewPanel').style.display = 'none';
      $('writeLoading').classList.add('visible');
      $('writeError').classList.remove('visible');
      $('writeSuccess').classList.remove('visible');
      $('extractBtn').disabled = true;

      try {
        const resp = await fetch('/api/write/extract', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ docId, targetId, description })
        });
        const data = await resp.json();
        $('writeLoading').classList.remove('visible');

        if (!data.success) {
          showError(data.error || '\u63D0\u53D6\u5931\u8D25', 'writeError');
          showToast(data.error || '\u63D0\u53D6\u5931\u8D25', 'error');
          addLog('\u63D0\u53D6', '\u5931\u8D25', data.error || '\u63D0\u53D6\u5931\u8D25');
          return;
        }

        writePreviewData = data.data;

        // \u67E5\u91CD\u68C0\u6D4B
        if (data.data.duplicate) {
          handleDuplicate(data.data.duplicate, data.data);
          return; // \u6682\u4E0D\u663E\u793A\u9884\u89C8\u9762\u677F\uFF0C\u7B49\u5F85\u7528\u6237\u5904\u7406\u67E5\u91CD\u5F39\u7A97
        }

        const headers = data.data.headers;
        const values = data.data.values;

        $('previewHeader').innerHTML = headers.map(h => '<th>' + esc(h) + '</th>').join('');
        renderPreviewRow();
        updateMissingFields();

        const d = data.data.debug;
        if (d) {
          $('debugInfo').style.display = 'block';
          let debugHtml = '\u8BC6\u522B\u65B9\u5F0F: <span style="color:var(--accent)">' + esc(d.method) + '</span> | \u8017\u65F6: ' + d.parseTime + 'ms | \u975E\u7A7A\u5B57\u6BB5: ' + d.nonEmptyCount + '/' + d.headerCount;
          if (d.wdtMatch) {
            debugHtml += '<br><span style="color:var(--accent)">\u65FA\u5E97\u901A\u5339\u914D: \u539F\u59CB\u5355\u53F7=' + esc(d.wdtMatch.src_tids || '') + ' \u7269\u6D41\u5355\u53F7=' + esc(d.wdtMatch.logistics_no || '') + ' \u5E97\u94FA=' + esc(d.wdtMatch.shop_name || '') + ' \u5E73\u53F0=' + esc(d.wdtMatch.platform || '') + ' \u4E91\u4ED3=' + esc(d.wdtMatch.warehouse_name || d.wdtMatch.warehouse_no || '') + '</span>';
          }
          if (d.llmError) {
            debugHtml += ' | AI\u9519\u8BEF: <span style="color:var(--danger)">' + esc(d.llmError) + '</span>';
          }
          $('debugInfo').innerHTML = debugHtml;
        } else {
          $('debugInfo').style.display = 'none';
        }

        $('previewPanel').style.display = 'block';
        showToast('\u63D0\u53D6\u5B8C\u6210\uFF08' + (data.data.debug ? data.data.debug.method : '') + '\uFF09', 'success');
        addLog('\u63D0\u53D6', '\u6210\u529F', '\u65B9\u5F0F: ' + (data.data.debug?.method || '\u672A\u77E5') + '\uFF0C\u975E\u7A7A\u5B57\u6BB5: ' + (data.data.debug?.nonEmptyCount || 0));
      } catch (err) {
        $('writeLoading').classList.remove('visible');
        showError('\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25: ' + err.message, 'writeError');
        showToast('\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25: ' + err.message, 'error');
        addLog('\u63D0\u53D6', '\u5931\u8D25', '\u7F51\u7EDC\u9519\u8BEF: ' + err.message);
      } finally {
        $('extractBtn').disabled = false;
      }
    }

    function renderPreviewRow() {
      if (!writePreviewData) return;
      const values = writePreviewData.values;
      const pencilIcon = '<svg class="edit-icon" viewBox="0 0 24 24" width="13" height="13"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>';
      $('previewRow').innerHTML = values.map((v, i) => {
        const isEmpty = !v || !v.trim();
        const display = isEmpty ? '(\u7A7A)' : esc(v);
        const cls = isEmpty ? 'empty-cell' : '';
        return '<td class="editable-cell ' + cls + '" data-col="' + i + '" onclick="editPreviewCell(' + i + ')">' +
          '<span class="cell-text">' + display + '</span>' + pencilIcon + '</td>';
      }).join('');
    }

    function updateMissingFields() {
      if (!writePreviewData) return;
      const headers = writePreviewData.headers;
      const values = writePreviewData.values;
      const missing = headers.filter((h, i) => !values[i] || !values[i].trim());
      const el = $('missingFields');
      if (missing.length > 0) {
        el.style.display = 'block';
        el.textContent = '\u26A0 \u4EE5\u4E0B\u5B57\u6BB5\u672A\u586B\u5199\uFF0C\u5EFA\u8BAE\u8865\u5145: ' + missing.join(', ');
      } else {
        el.style.display = 'none';
      }
    }

    function editPreviewCell(colIndex) {
      if (!writePreviewData) return;
      const td = document.querySelector('#previewRow td[data-col="' + colIndex + '"]');
      if (!td || td.querySelector('input')) return;
      const currentValue = writePreviewData.values[colIndex] || '';
      td.innerHTML = '<input type="text" class="cell-editor" value="' + esc(currentValue) + '" ' +
        'onblur="savePreviewCell(' + colIndex + ', this.value)" ' +
        'onkeydown="handlePreviewCellKey(event, ' + colIndex + ')" />';
      const input = td.querySelector('input');
      input.focus();
      input.select();
    }

    function savePreviewCell(colIndex, value) {
      if (!writePreviewData) return;
      writePreviewData.values[colIndex] = value.trim();
      renderPreviewCell(colIndex);
      updateMissingFields();
    }

    function renderPreviewCell(colIndex) {
      if (!writePreviewData) return;
      const td = document.querySelector('#previewRow td[data-col="' + colIndex + '"]');
      if (!td) return;
      const v = writePreviewData.values[colIndex];
      const isEmpty = !v || !v.trim();
      const display = isEmpty ? '(\u7A7A)' : esc(v);
      const cls = isEmpty ? 'empty-cell' : '';
      const pencilIcon = '<svg class="edit-icon" viewBox="0 0 24 24" width="13" height="13"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>';
      td.className = 'editable-cell ' + cls;
      td.innerHTML = '<span class="cell-text">' + display + '</span>' + pencilIcon;
    }

    function handlePreviewCellKey(e, colIndex) {
      if (e.key === 'Enter') {
        savePreviewCell(colIndex, e.target.value);
      } else if (e.key === 'Escape') {
        e.target.blur();
      }
    }

    let duplicatePendingData = null;

    function handleDuplicate(dup, fullData) {
      duplicatePendingData = fullData;
      const headers = fullData.headers;
      const body = $('duplicateModalBody');

      if (dup.type === 'overwrite') {
        $('duplicateModalTitle').textContent = '\u8BE5\u5355\u53F7\u5DF2\u5B8C\u6574\u767B\u8BB0\uFF0C\u662F\u5426\u8986\u76D6\uFF1F';
        $('duplicateConfirmBtn').textContent = '\u8986\u76D6\u767B\u8BB0';
        $('duplicateConfirmBtn').className = 'btn btn-danger';

        let html = '<p style="color:var(--text-secondary);font-size:14px;margin-bottom:12px">\u7269\u6D41\u5355\u53F7 <b>' + esc(dup.newValues[headers.findIndex(h => h === '\u5FEB\u9012\u5355\u53F7' || h === '\u7269\u6D41\u5355\u53F7')] || '') + '</b> \u5DF2\u5B58\u5728\u5B8C\u6574\u8BB0\u5F55\uFF08\u7B2C ' + dup.existingRow + ' \u884C\uFF09\u3002\u4EE5\u4E0B\u4E3A\u5B57\u6BB5\u5BF9\u6BD4\uFF1A</p>';
        html += '<div class="table-scroll"><table class="preview-table" style="font-size:12px"><thead><tr><th>\u5B57\u6BB5</th><th>\u73B0\u6709\u503C</th><th>\u65B0\u503C</th></tr></thead><tbody>';
        for (let i = 0; i < headers.length; i++) {
          const oldVal = (dup.existingValues[i] || '').trim();
          const newVal = (dup.newValues[i] || '').trim();
          if (oldVal !== newVal) {
            html += '<tr style="background:var(--accent-dim)"><td><b>' + esc(headers[i]) + '</b></td><td>' + (oldVal ? esc(oldVal) : '<span style="color:var(--text-muted)">(\u7A7A)</span>') + '</td><td>' + (newVal ? esc(newVal) : '<span style="color:var(--text-muted)">(\u7A7A)</span>') + '</td></tr>';
          } else {
            html += '<tr><td>' + esc(headers[i]) + '</td><td>' + (oldVal ? esc(oldVal) : '<span style="color:var(--text-muted)">(\u7A7A)</span>') + '</td><td>' + (newVal ? esc(newVal) : '<span style="color:var(--text-muted)">(\u7A7A)</span>') + '</td></tr>';
          }
        }
        html += '</tbody></table></div>';
        if (dup.changedFields.length === 0) {
          html += '<p style="color:var(--text-secondary);font-size:13px;margin-top:8px">\u65B0\u6570\u636E\u4E0E\u73B0\u6709\u8BB0\u5F55\u5B8C\u5168\u4E00\u81F4\uFF0C\u65E0\u9700\u8986\u76D6\u3002</p>';
        } else {
          html += '<p style="color:var(--text-secondary);font-size:13px;margin-top:8px">\u6709 ' + dup.changedFields.length + ' \u4E2A\u5B57\u6BB5\u5B58\u5728\u5DEE\u5F02\uFF08\u5DF2\u9AD8\u4EAE\uFF09\u3002</p>';
        }
        body.innerHTML = html;
      } else if (dup.type === 'merge') {
        $('duplicateModalTitle').textContent = '\u8BE5\u5355\u53F7\u5DF2\u767B\u8BB0\u4F46\u4FE1\u606F\u4E0D\u5168\uFF0C\u5DF2\u81EA\u52A8\u8865\u5168';
        $('duplicateConfirmBtn').textContent = '\u786E\u8BA4\u8865\u5168';
        $('duplicateConfirmBtn').className = 'btn btn-primary';

        let html = '<p style="color:var(--text-secondary);font-size:14px;margin-bottom:12px">\u7269\u6D41\u5355\u53F7 <b>' + esc(dup.newValues[headers.findIndex(h => h === '\u5FEB\u9012\u5355\u53F7' || h === '\u7269\u6D41\u5355\u53F7')] || '') + '</b> \u5DF2\u5B58\u5728\u8BB0\u5F55\uFF08\u7B2C ' + dup.existingRow + ' \u884C\uFF09\uFF0C\u4F46\u6709 ' + dup.emptyFieldIndices.length + ' \u4E2A\u5B57\u6BB5\u4E3A\u7A7A\u3002\u4EE5\u4E0B\u4E3A\u8865\u5168\u9884\u89C8\uFF1A</p>';
        if (dup.filledFields.length > 0) {
          html += '<div class="table-scroll"><table class="preview-table" style="font-size:12px"><thead><tr><th>\u5B57\u6BB5</th><th>\u73B0\u6709\u503C</th><th>\u8865\u5168\u503C</th></tr></thead><tbody>';
          for (const f of dup.filledFields) {
            html += '<tr style="background:var(--accent-dim)"><td><b>' + esc(f.header) + '</b></td><td><span style="color:var(--text-muted)">(\u7A7A)</span></td><td>' + esc(f.newValue) + '</td></tr>';
          }
          html += '</tbody></table></div>';
        } else {
          html += '<p style="color:var(--text-secondary);font-size:13px">\u672C\u6B21\u63D0\u4EA4\u672A\u5305\u542B\u53EF\u8865\u5168\u7684\u5B57\u6BB5\u3002</p>';
        }
        body.innerHTML = html;
      }

      $('duplicateModal').classList.add('visible');
    }

    function confirmDuplicate() {
      $('duplicateModal').classList.remove('visible');
      if (!duplicatePendingData) return;

      // \u6062\u590D\u9884\u89C8\u9762\u677F\u663E\u793A
      const headers = duplicatePendingData.headers;
      const values = duplicatePendingData.values;

      $('previewHeader').innerHTML = headers.map(h => '<th>' + esc(h) + '</th>').join('');
      renderPreviewRow();
      updateMissingFields();

      const d = duplicatePendingData.debug;
      if (d) {
        $('debugInfo').style.display = 'block';
        let debugHtml = '\u8BC6\u522B\u65B9\u5F0F: <span style="color:var(--accent)">' + esc(d.method) + '</span> | \u8017\u65F6: ' + d.parseTime + 'ms | \u975E\u7A7A\u5B57\u6BB5: ' + d.nonEmptyCount + '/' + d.headerCount;
        if (d.wdtMatch) {
          debugHtml += '<br><span style="color:var(--accent)">\u65FA\u5E97\u901A\u5339\u914D: \u539F\u59CB\u5355\u53F7=' + esc(d.wdtMatch.src_tids || '') + ' \u7269\u6D41\u5355\u53F7=' + esc(d.wdtMatch.logistics_no || '') + ' \u5E97\u94FA=' + esc(d.wdtMatch.shop_name || '') + ' \u5E73\u53F0=' + esc(d.wdtMatch.platform || '') + ' \u4E91\u4ED3=' + esc(d.wdtMatch.warehouse_name || d.wdtMatch.warehouse_no || '') + '</span>';
        }
        if (d.llmError) {
          debugHtml += ' | AI\u9519\u8BEF: <span style="color:var(--danger)">' + esc(d.llmError) + '</span>';
        }
        $('debugInfo').innerHTML = debugHtml;
      } else {
        $('debugInfo').style.display = 'none';
      }

      $('previewPanel').style.display = 'block';

      const dup = duplicatePendingData.duplicate;
      if (dup && dup.type === 'overwrite') {
        showToast('\u5DF2\u5E94\u7528\u8986\u76D6\u6A21\u5F0F\uFF0C\u8BF7\u70B9\u51FB\u786E\u8BA4\u767B\u8BB0', 'success');
      } else if (dup && dup.type === 'merge') {
        showToast('\u5DF2\u81EA\u52A8\u8865\u5168\u7F3A\u5931\u5B57\u6BB5\uFF0C\u8BF7\u786E\u8BA4\u767B\u8BB0', 'success');
      }

      duplicatePendingData = null;
    }

    function closeDuplicateModal() {
      $('duplicateModal').classList.remove('visible');
      duplicatePendingData = null;
      writePreviewData = null;
      $('extractBtn').disabled = false;
      showToast('\u5DF2\u53D6\u6D88\u767B\u8BB0', 'info');
    }

    async function doWrite() {
      if (!writePreviewData) return;

      const docId = $('writeDocSelect').value;

      try {
        const resp = await fetch('/api/write/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            docId,
            targetFileId: writePreviewData.targetFileId,
            sheetId: writePreviewData.sheetId,
            targetRow: writePreviewData.targetRow,
            values: writePreviewData.values
          })
        });
        const data = await resp.json();

        if (!data.success) {
          showError(data.error || '\u767B\u8BB0\u5931\u8D25', 'writeError');
          showToast(data.error || '\u767B\u8BB0\u5931\u8D25', 'error');
          addLog('\u767B\u8BB0', '\u5931\u8D25', data.error || '\u767B\u8BB0\u5931\u8D25');
          return;
        }

        showSuccess(data.message);
        showToast(data.message, 'success');
        addLog('\u767B\u8BB0', '\u6210\u529F', '\u884C: ' + writePreviewData.targetRow + '\uFF0C' + data.message);
        $('previewPanel').style.display = 'none';
        $('writeDescription').value = '';
        writePreviewData = null;
      } catch (err) {
        showError('\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25: ' + err.message, 'writeError');
        showToast('\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25: ' + err.message, 'error');
        addLog('\u767B\u8BB0', '\u5931\u8D25', '\u7F51\u7EDC\u9519\u8BEF: ' + err.message);
      }
    }

    function cancelWrite() {
      $('previewPanel').style.display = 'none';
      writePreviewData = null;
    }

    async function showSettingsPasswordGate() {
      try {
        const resp = await fetch('/api/settings/password-status');
        const data = await resp.json();
        if (!data.success) return;
        const hasPassword = data.data.hasPassword;

        $('settingsContent').style.display = 'none';
        $('settingsPasswordGate').style.display = 'block';
        $('settingsPasswordInput').value = '';
        $('passwordGateDesc').textContent = hasPassword ? '\u8BF7\u8F93\u5165\u8BBF\u95EE\u5BC6\u7801' : '\u9996\u6B21\u8BBF\u95EE\u8BBE\u7F6E\uFF0C\u8BF7\u8BBE\u7F6E\u8BBF\u95EE\u5BC6\u7801';
        $('passwordGateBtn').textContent = hasPassword ? '\u8FDB\u5165\u8BBE\u7F6E' : '\u8BBE\u7F6E\u5BC6\u7801';
        $('settingsPasswordInput').focus();
      } catch (err) {
        console.error('\u68C0\u67E5\u5BC6\u7801\u72B6\u6001\u5931\u8D25:', err);
      }
    }

    async function handlePasswordGate() {
      const password = $('settingsPasswordInput').value.trim();
      if (!password) { showToast('\u8BF7\u8F93\u5165\u5BC6\u7801', 'error'); return; }

      try {
        const statusResp = await fetch('/api/settings/password-status');
        const statusData = await statusResp.json();
        const hasPassword = statusData.data && statusData.data.hasPassword;
        const action = hasPassword ? 'verify' : 'set';

        const resp = await fetch('/api/settings/password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action, password })
        });
        const data = await resp.json();
        if (data.success) {
          $('settingsPasswordGate').style.display = 'none';
          $('settingsContent').style.display = 'block';
          loadSettings();
        } else {
          showToast(data.error || '\u9A8C\u8BC1\u5931\u8D25', 'error');
        }
      } catch (err) {
        showToast('\u8BF7\u6C42\u5931\u8D25: ' + err.message, 'error');
      }
    }

    async function loadSettings() {
      try {
        const resp = await fetch('/api/config');
        const data = await resp.json();
        if (!data.success) return;

        currentConfig = data.data;

        $('cfgTencentKey').value = currentConfig.tencentDocs.apiKey || '';
        $('cfgTencentUrl').value = currentConfig.tencentDocs.mcpUrl || '';

        $('cfgLlmProvider').value = currentConfig.llm.provider || 'deepseek';
        $('cfgLlmCustomName').value = currentConfig.llm.customProviderName || '';
        $('cfgLlmModel').value = currentConfig.llm.model || '';
        $('cfgLlmKey').value = currentConfig.llm.apiKey || '';
        $('cfgLlmUrl').value = currentConfig.llm.baseUrl || '';
        onLlmProviderChange();

        $('cfgCacheTtl').value = (currentConfig.cache.ttl || 300000) / 1000;
        $('cfgCacheRefresh').value = (currentConfig.cache.autoRefreshInterval || 1800000) / 1000;

        renderDocList();
        renderDefaultDocSelectors();
      } catch (err) {
        console.error('\u52A0\u8F7D\u8BBE\u7F6E\u5931\u8D25:', err);
      }
    }

    function renderDefaultDocSelectors() {
      const docs = currentConfig.documents || [];
      const querySel = $('cfgQueryDefaultDoc');
      const writeSel = $('cfgWriteDefaultDoc');
      querySel.innerHTML = '<option value="">-- \u8BF7\u9009\u62E9 --</option>';
      writeSel.innerHTML = '<option value="">-- \u8BF7\u9009\u62E9 --</option>';
      docs.forEach(doc => {
        const optQ = document.createElement('option');
        optQ.value = doc.id;
        optQ.textContent = doc.name;
        optQ.selected = doc.id === currentConfig.queryDefaultDocumentId;
        querySel.appendChild(optQ);

        const optW = document.createElement('option');
        optW.value = doc.id;
        optW.textContent = doc.name;
        optW.selected = doc.id === currentConfig.writeDefaultDocumentId;
        writeSel.appendChild(optW);
      });
    }

    function onQueryDefaultDocChange() {
      currentConfig.queryDefaultDocumentId = $('cfgQueryDefaultDoc').value;
    }

    function onWriteDefaultDocChange() {
      currentConfig.writeDefaultDocumentId = $('cfgWriteDefaultDoc').value;
    }

    function renderDocList() {
      const container = $('docListContainer');
      container.innerHTML = '';

      if (!currentConfig.documents || currentConfig.documents.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted);font-size:13px">\u6682\u65E0\u6587\u6863\u914D\u7F6E</p>';
        return;
      }

      currentConfig.documents.forEach((doc, idx) => {
        const item = document.createElement('div');
        item.className = 'doc-list-item';
        const isQueryDefault = doc.id === currentConfig.queryDefaultDocumentId;
        const isWriteDefault = doc.id === currentConfig.writeDefaultDocumentId;
        const tags = [];
        if (isQueryDefault) tags.push('<span class="tag">\u67E5\u8BE2\u9ED8\u8BA4</span>');
        if (isWriteDefault) tags.push('<span class="tag">\u767B\u8BB0\u9ED8\u8BA4</span>');
        item.innerHTML =
          '<span class="name">' + esc(doc.name) + (tags.length ? ' ' + tags.join(' ') : '') + '</span>' +
          '<div class="actions">' +
            '<button class="btn btn-secondary btn-icon" onclick="editDocument(' + idx + ')">\u7F16\u8F91</button>' +
            '<button class="btn btn-secondary btn-icon" onclick="deleteDocument(' + idx + ')">\u5220\u9664</button>' +
          '</div>';
        container.appendChild(item);
      });
    }

    let docModalEditIdx = -1;

    function addDocument() {
      docModalEditIdx = -1;
      $('docModalTitle').textContent = '\u6DFB\u52A0\u6587\u6863';
      $('modalDocName').value = '';
      $('modalDocFileId').value = '';
      $('modalDocKeywords').value = '\u5BA2\u9000,\u9000\u8D27';
      $('modalDocTargets').value = '';
      $('modalDocQueryDefault').checked = false;
      $('modalDocWriteDefault').checked = false;
      $('docModal').classList.add('visible');
      $('modalDocName').focus();
    }

    function editDocument(idx) {
      const doc = currentConfig.documents[idx];
      docModalEditIdx = idx;
      $('docModalTitle').textContent = '\u7F16\u8F91\u6587\u6863';
      $('modalDocName').value = doc.name || '';
      $('modalDocFileId').value = doc.fileId || '';
      $('modalDocKeywords').value = (doc.readSheetKeywords || []).join(',');
      $('modalDocTargets').value = (doc.writeTargets || []).map(t => t.name + '|' + t.sheetName).join('
');
      $('modalDocQueryDefault').checked = (doc.id === currentConfig.queryDefaultDocumentId);
      $('modalDocWriteDefault').checked = (doc.id === currentConfig.writeDefaultDocumentId);
      $('docModal').classList.add('visible');
    }

    function closeDocModal() {
      $('docModal').classList.remove('visible');
    }

    function saveDocModal() {
      const name = $('modalDocName').value.trim();
      const fileId = $('modalDocFileId').value.trim();
      const keywords = $('modalDocKeywords').value.trim();
      const targetsStr = $('modalDocTargets').value.trim();
      const isQueryDefault = $('modalDocQueryDefault').checked;
      const isWriteDefault = $('modalDocWriteDefault').checked;

      if (!name) { showToast('\u8BF7\u8F93\u5165\u6587\u6863\u540D\u79F0', 'error'); return; }
      if (!fileId) { showToast('\u8BF7\u8F93\u5165 File ID', 'error'); return; }

      const writeTargets = targetsStr ? targetsStr.split('
').filter(s => s.trim()).map((s, i) => {
        const parts = s.split('|').map(p => p.trim());
        return {
          id: 'target' + i,
          name: parts[0] || parts[1] || '',
          sheetName: parts[1] || parts[0] || ''
        };
      }) : [];

      const docData = {
        name: name,
        fileId: fileId,
        readSheetKeywords: keywords ? keywords.split(',').map(s => s.trim()).filter(Boolean) : ['\u5BA2\u9000', '\u9000\u8D27'],
        writeTargets: writeTargets
      };

      if (docModalEditIdx >= 0) {
        const doc = currentConfig.documents[docModalEditIdx];
        Object.assign(doc, docData);
      } else {
        docData.id = 'doc' + Date.now();
        currentConfig.documents.push(docData);
        if (!currentConfig.queryDefaultDocumentId && !currentConfig.writeDefaultDocumentId) {
          currentConfig.queryDefaultDocumentId = docData.id;
          currentConfig.writeDefaultDocumentId = docData.id;
        }
      }

      const docId = docModalEditIdx >= 0 ? currentConfig.documents[docModalEditIdx].id : docData.id;
      if (isQueryDefault) {
        currentConfig.queryDefaultDocumentId = docId;
      } else if (docModalEditIdx >= 0 && docId === currentConfig.queryDefaultDocumentId) {
        currentConfig.queryDefaultDocumentId = '';
      }
      if (isWriteDefault) {
        currentConfig.writeDefaultDocumentId = docId;
      } else if (docModalEditIdx >= 0 && docId === currentConfig.writeDefaultDocumentId) {
        currentConfig.writeDefaultDocumentId = '';
      }

      closeDocModal();
      renderDocList();
      showToast('\u6587\u6863\u5DF2\u4FDD\u5B58\uFF0C\u70B9\u51FB\u4E0B\u65B9"\u4FDD\u5B58\u914D\u7F6E"\u751F\u6548');
    }

    let deleteTargetIdx = -1;

    function deleteDocument(idx) {
      deleteTargetIdx = idx;
      $('deleteModalText').textContent = '\u786E\u8BA4\u5220\u9664\u6587\u6863"' + currentConfig.documents[idx].name + '"\uFF1F\u6B64\u64CD\u4F5C\u9700\u70B9\u51FB\u4E0B\u65B9"\u4FDD\u5B58\u914D\u7F6E"\u624D\u4F1A\u771F\u6B63\u751F\u6548\u3002';
      $('deleteConfirmBtn').onclick = function() {
        const docId = currentConfig.documents[deleteTargetIdx].id;
        currentConfig.documents.splice(deleteTargetIdx, 1);
        if (currentConfig.queryDefaultDocumentId === docId) {
          currentConfig.queryDefaultDocumentId = currentConfig.documents[0] ? currentConfig.documents[0].id : '';
        }
        if (currentConfig.writeDefaultDocumentId === docId) {
          currentConfig.writeDefaultDocumentId = currentConfig.documents[0] ? currentConfig.documents[0].id : '';
        }
        closeDeleteModal();
        renderDocList();
        showToast('\u6587\u6863\u5DF2\u5220\u9664\uFF0C\u70B9\u51FB\u4E0B\u65B9"\u4FDD\u5B58\u914D\u7F6E"\u751F\u6548');
      };
      $('deleteModal').classList.add('visible');
    }

    function closeDeleteModal() {
      $('deleteModal').classList.remove('visible');
    }

    function onLlmProviderChange() {
      const provider = $('cfgLlmProvider').value;
      const isCustom = provider === 'custom';
      $('customProviderNameGroup').style.display = isCustom ? 'block' : 'none';

      const presets = {
        deepseek: { url: 'https://api.deepseek.com', model: 'deepseek-v4-flash' },
        doubao: { url: 'https://ark.cn-beijing.volces.com/api/v3', model: 'doubao-1-5-pro-32k' },
        qwen: { url: 'https://dashscope.aliyuncs.com/compatible-mode/v1', model: 'qwen-plus' },
        stepfun: { url: 'https://api.stepfun.com/step_plan/v1', model: 'step-3.7-flash' },
        ollama: { url: 'http://localhost:11434/v1', model: 'qwen2.5:7b' },
        openai: { url: 'https://api.openai.com/v1', model: 'gpt-4o-mini' }
      };
      const preset = presets[provider];
      if (preset) {
        // \u4EC5\u5728\u8F93\u5165\u6846\u4E3A\u7A7A\u65F6\u586B\u5145\u9ED8\u8BA4\u503C\uFF0C\u907F\u514D\u8986\u76D6\u7528\u6237\u624B\u52A8\u4FEE\u6539\u7684\u5185\u5BB9
        if (!$('cfgLlmUrl').value) $('cfgLlmUrl').value = preset.url;
        if (!$('cfgLlmModel').value) $('cfgLlmModel').value = preset.model;
      }
    }

    async function testLLM() {
      const llmConfig = {
        provider: $('cfgLlmProvider').value,
        customProviderName: $('cfgLlmCustomName').value,
        apiKey: $('cfgLlmKey').value.includes('****') ? (currentConfig.llm.apiKey || '') : $('cfgLlmKey').value,
        baseUrl: $('cfgLlmUrl').value,
        model: $('cfgLlmModel').value
      };

      try {
        const resp = await fetch('/api/llm/test', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ llmConfig })
        });
        const data = await resp.json();
        if (data.success) {
          showToast('\u2713 ' + data.message, 'success');
        } else {
          showToast('\u2717 ' + data.message, 'error');
        }
      } catch (err) {
        showToast('\u2717 \u8BF7\u6C42\u5931\u8D25: ' + err.message, 'error');
      }
    }

    async function saveSettings() {
      const config = {
        documents: currentConfig.documents,
        queryDefaultDocumentId: currentConfig.queryDefaultDocumentId,
        writeDefaultDocumentId: currentConfig.writeDefaultDocumentId,
        tencentDocs: {
          apiKey: $('cfgTencentKey').value,
          mcpUrl: $('cfgTencentUrl').value
        },
        llm: {
          provider: $('cfgLlmProvider').value,
          customProviderName: $('cfgLlmProvider').value === 'custom' ? $('cfgLlmCustomName').value : '',
          apiKey: $('cfgLlmKey').value,
          baseUrl: $('cfgLlmUrl').value,
          model: $('cfgLlmModel').value
        },
        cache: {
          ttl: parseInt($('cfgCacheTtl').value) * 1000 || 300000,
          autoRefreshInterval: parseInt($('cfgCacheRefresh').value) * 1000 || 1800000
        }
      };

      try {
        const resp = await fetch('/api/config', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(config)
        });
        const data = await resp.json();
        if (data.success) {
          showToast('\u914D\u7F6E\u5DF2\u4FDD\u5B58');
          invalidateFrontendCache();
          loadSettings();
        } else {
          showToast('\u4FDD\u5B58\u5931\u8D25: ' + (data.error || ''), 'error');
        }
      } catch (err) {
        showToast('\u4FDD\u5B58\u5931\u8D25: ' + err.message, 'error');
      }
    }

    loadDocSelector('queryDocSelect');

    // \u52A8\u6001\u52A0\u8F7D\u7248\u672C\u53F7
    (async function loadVersion() {
      try {
        const resp = await fetch('/api/version');
        const data = await resp.json();
        if (data.success && data.data && data.data.version) {
          const el = $('appVersion');
          if (el) el.textContent = 'v' + data.data.version;
        }
      } catch (err) {
        console.error('\u52A0\u8F7D\u7248\u672C\u53F7\u5931\u8D25:', err);
      }
    })();
  <\/script>
</body>
</html>

`;
function md5(str) {
  function rh(n) {
    var j, s = "";
    for (j = 0; j <= 3; j++) s += (n >> j * 8 + 4 & 15).toString(16) + (n >> j * 8 & 15).toString(16);
    return s;
  }
  __name(rh, "rh");
  function ad(x2, y) {
    var l = (x2 & 65535) + (y & 65535);
    var m = (x2 >> 16) + (y >> 16) + (l >> 16);
    return m << 16 | l & 65535;
  }
  __name(ad, "ad");
  function rl(n, c2) {
    return n << c2 | n >>> 32 - c2;
  }
  __name(rl, "rl");
  function cm(q, a2, b2, x2, s, t) {
    return ad(rl(ad(ad(a2, q), ad(x2, t)), s), b2);
  }
  __name(cm, "cm");
  function ff(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 & c2 | ~b2 & d2, a2, b2, x2, s, t);
  }
  __name(ff, "ff");
  function gg(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 & d2 | c2 & ~d2, a2, b2, x2, s, t);
  }
  __name(gg, "gg");
  function hh(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 ^ c2 ^ d2, a2, b2, x2, s, t);
  }
  __name(hh, "hh");
  function ii(a2, b2, c2, d2, x2, s, t) {
    return cm(c2 ^ (b2 | ~d2), a2, b2, x2, s, t);
  }
  __name(ii, "ii");
  function cv(s) {
    var u = unescape(encodeURIComponent(s));
    var n = u.length;
    var w = [];
    for (var i2 = 0; i2 < n; i2++) w[i2 >> 2] = (w[i2 >> 2] || 0) | u.charCodeAt(i2) << i2 % 4 * 8;
    w[n >> 2] = (w[n >> 2] || 0) | 128 << n % 4 * 8;
    var m = Math.ceil(n / 4) + 1;
    w[m * 16 - 2] = n * 8;
    return w;
  }
  __name(cv, "cv");
  var x = cv(str);
  var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
  for (var i = 0; i < x.length; i += 16) {
    var oa = a, ob = b, oc = c, od = d;
    a = ff(a, b, c, d, x[i], 7, -680876936);
    d = ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i + 10], 17, -42063);
    b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = gg(b, c, d, a, x[i], 20, -373897302);
    a = gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = hh(a, b, c, d, x[i + 5], 4, -378558);
    d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = hh(d, a, b, c, x[i], 11, -358537222);
    c = hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = ii(a, b, c, d, x[i], 6, -198630844);
    d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = ad(a, oa);
    b = ad(b, ob);
    c = ad(c, oc);
    d = ad(d, od);
  }
  return rh(a) + rh(b) + rh(c) + rh(d);
}
__name(md5, "md5");
var DEFAULT_CONFIG = { "documents": [{ "id": "doc_demo", "name": "\u7535\u5546\u552E\u540EDEMO\u6F14\u793A", "fileId": "ZBTKrbvmhXBq", "readSheetKeywords": ["\u5BA2\u9000", "\u9000\u8D27", "\u7406\u8D54", "\u6362\u8D27", "\u9000\u6B3E", "\u5DE5\u4F5C\u8868"], "writeTargets": [{ "id": "target0", "name": "\u5BA2\u9000\u767B\u8BB0\u8868", "sheetName": "\u5DE5\u4F5C\u88681" }] }, { "name": "\u5FEB\u9012\u7406\u8D54\u767B\u8BB0\u8868", "fileId": "DWnhndXZoREdQSUJV", "readSheetKeywords": ["\u7406\u8D54", "\u5FEB\u9012"], "writeTargets": [{ "id": "target0", "name": "\u5FEB\u9012\u7406\u8D54\u767B\u8BB0\u8868", "sheetName": "\u5DE5\u4F5C\u88681" }], "id": "doc1782201419594" }], "queryDefaultDocumentId": "doc_demo", "writeDefaultDocumentId": "doc_demo", "tencentDocs": { "apiKey": "", "mcpUrl": "https://docs.qq.com/openapi/mcp" }, "llm": { "provider": "deepseek", "apiKey": "", "baseUrl": "https://api.deepseek.com", "model": "deepseek-chat" }, "wangdian": { "sid": "", "key": "", "secret": "", "salt": "" }, "cache": { "ttl": 3e5, "autoRefreshInterval": 18e5 } };
var MAX_DESCRIPTION_LENGTH = 5e3;
var HEADER_SAMPLE_ROW_LIMIT = 50;
var MAX_COL_COUNT = 10;
var EMPTY_ROW_BATCH_SIZE = 50;
var PLATFORMS = ["\u4EAC\u4E1C", "\u6DD8\u5B9D", "\u5929\u732B", "\u62FC\u591A\u591A", "\u6296\u97F3", "\u5FEB\u624B", "\u5C0F\u7EA2\u4E66", "\u5FAE\u4FE1", "\u6709\u8D5E", "\u5FAE\u5E97", "\u82CF\u5B81", "\u552F\u54C1\u4F1A", "\u5F53\u5F53", "1688", "\u963F\u91CC"];
var FIELD_ALIASES = { "\u5355\u53F7": "\u5FEB\u9012\u5355\u53F7", "\u91D1\u989D": "\u8D27\u503C(\u5143)", "\u4EF7\u683C": "\u8D27\u503C(\u5143)", "\u65E5\u671F": "\u767B\u8BB0\u65E5\u671F", "\u6570\u91CF": "\u6B63\u54C1\u6570\u91CF", "\u7406\u8D54": "\u7406\u8D54\u7C7B\u578B", "\u8FD0\u8D39": "\u8FD0\u8D39(\u5143)", "\u8D27\u503C": "\u8D27\u503C(\u5143)" };
var CLAIM_TYPES = ["\u4E22\u4EF6", "\u7834\u635F", "\u5C11\u4EF6", "\u6F0F\u53D1", "\u9519\u53D1", "\u9000\u4EF6", "\u62D2\u6536", "\u5730\u5740\u9519\u8BEF", "\u8D85\u533A", "\u65E0\u4EBA\u6536\u4EF6"];
var WDT_FIELD_MAP = { "\u8BA2\u5355\u53F7": "src_tids", "\u539F\u59CB\u5355\u53F7": "src_tids", "\u5FEB\u9012\u5355\u53F7": "logistics_no", "\u7269\u6D41\u5355\u53F7": "logistics_no", "\u5E97\u94FA\u540D\u79F0": "parsedShopName", "\u5E97\u94FA": "parsedShopName", "\u5E73\u53F0": "platform", "\u4E91\u4ED3": "warehouse_name", "\u4ED3\u5E93": "warehouse_name" };
var LOGISTICS_NO_REGEX = /^[A-Za-z0-9]{8,}$/;
async function callMcpApi(mcpUrl, apiKey, method, params, sessionId) {
  const headers = { "Content-Type": "application/json", "Authorization": apiKey };
  if (sessionId) headers["Mcp-Session-Id"] = sessionId;
  const resp = await fetch(mcpUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({ jsonrpc: "2.0", id: Date.now().toString(), method, params })
  });
  const newSid = resp.headers.get("mcp-session-id") || sessionId;
  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error("MCP API \u8FD4\u56DE\u9519\u8BEF\u72B6\u6001\u7801 " + resp.status + ": " + errText.substring(0, 200));
  }
  const data = await resp.json();
  if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
  return { result: data.result, sessionId: newSid };
}
__name(callMcpApi, "callMcpApi");
async function initMcpSession(mcpUrl, apiKey) {
  const init = await callMcpApi(mcpUrl, apiKey, "initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "ecomtools-worker", version: "1.0.0" }
  }, null);
  const sid = init.sessionId;
  await fetch(mcpUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": apiKey, "Mcp-Session-Id": sid },
    body: JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized", params: {} })
  });
  return sid;
}
__name(initMcpSession, "initMcpSession");
async function callToolWithSession(mcpUrl, apiKey, sessionId, toolName, args) {
  const { result } = await callMcpApi(mcpUrl, apiKey, "tools/call", { name: toolName, arguments: args }, sessionId);
  return result;
}
__name(callToolWithSession, "callToolWithSession");
function extractText(toolResult) {
  if (!toolResult || !toolResult.content) return "";
  let text = "";
  for (const c of toolResult.content) {
    if (c.type === "text") {
      try {
        const inner = JSON.parse(c.text);
        if (inner.csv_data) return inner.csv_data;
        if (inner.content) text += inner.content;
        else text += c.text;
      } catch (e) {
        text += c.text;
      }
    }
  }
  return text;
}
__name(extractText, "extractText");
async function getSheetList(mcpUrl, apiKey, sessionId, fileId) {
  const result = await callToolWithSession(mcpUrl, apiKey, sessionId, "sheet.get_sheet_info", { file_id: fileId });
  const text = extractText(result);
  try {
    const parsed = JSON.parse(text);
    if (parsed.sheets) return parsed.sheets;
  } catch (e) {
  }
  return [];
}
__name(getSheetList, "getSheetList");
async function readSheetCsv(mcpUrl, apiKey, sessionId, fileId, sheetId, rowCount, colCount, startRow = 0) {
  const result = await callToolWithSession(mcpUrl, apiKey, sessionId, "sheet.get_cell_data", {
    file_id: fileId,
    sheet_id: sheetId,
    start_row: Math.max(0, startRow),
    end_row: rowCount,
    start_col: 0,
    end_col: Math.min(colCount, MAX_COL_COUNT),
    return_csv: true
  });
  return extractText(result);
}
__name(readSheetCsv, "readSheetCsv");
async function findNextEmptyRow(mcpUrl, apiKey, sessionId, fileId, sheetId, startRow, colCount, maxRowCount) {
  let currentRow = startRow;
  while (currentRow < maxRowCount) {
    const endRow = Math.min(currentRow + EMPTY_ROW_BATCH_SIZE, maxRowCount);
    const csv = await readSheetCsv(mcpUrl, apiKey, sessionId, fileId, sheetId, endRow, colCount, currentRow);
    const allLines = csv.split("\n");
    const expectedRows = endRow - currentRow;
    for (let i = 0; i < Math.min(allLines.length, expectedRows); i++) {
      const cells = parseCsvLine(allLines[i]);
      if (cells.every((c) => !c || !c.trim())) {
        return currentRow + i;
      }
    }
    currentRow += EMPTY_ROW_BATCH_SIZE;
  }
  return maxRowCount;
}
__name(findNextEmptyRow, "findNextEmptyRow");
function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"' && line[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        cells.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
  }
  cells.push(current.trim());
  return cells;
}
__name(parseCsvLine, "parseCsvLine");
function parseSheetCsv(csvText, sheetName) {
  const lines = csvText.split("\n").filter((l) => l.trim());
  if (lines.length < 2) return [];
  const headerCells = parseCsvLine(lines[0]);
  const trackingIdx = headerCells.findIndex((h) => h.includes("\u5FEB\u9012\u5355\u53F7") || h.includes("\u5355\u53F7"));
  if (trackingIdx === -1) return [];
  const dateIdx = headerCells.findIndex((h) => h.includes("\u767B\u8BB0\u65E5\u671F") || h.includes("\u65E5\u671F"));
  const productIdx = headerCells.findIndex((h) => h.includes("\u5546\u54C1\u540D\u79F0") || h.includes("\u8D27\u54C1"));
  const genuineIdx = headerCells.findIndex((h) => h.includes("\u6B63\u54C1"));
  const defectIdx = headerCells.findIndex((h) => h.includes("\u6B21\u54C1") || h.includes("\u6B8B\u54C1"));
  const defectNoteIdx = headerCells.findIndex((h) => h.includes("\u6B21\u54C1\u5907\u6CE8") || h.includes("\u6B8B\u54C1\u5907\u6CE8"));
  const remarkIdx = headerCells.findIndex((h) => h === "\u5907\u6CE8");
  const records = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i]);
    const trackingNo = (cells[trackingIdx] || "").trim();
    if (!trackingNo) continue;
    records.push({
      _source: sheetName,
      "\u767B\u8BB0\u65E5\u671F": dateIdx >= 0 ? (cells[dateIdx] || "").trim() : "",
      "\u5FEB\u9012\u5355\u53F7": trackingNo,
      "\u5546\u54C1\u540D\u79F0": productIdx >= 0 ? (cells[productIdx] || "").trim() : "",
      "\u6B63\u54C1\u6570\u91CF": genuineIdx >= 0 ? (cells[genuineIdx] || "").trim() : "",
      "\u6B21\u54C1\u6570\u91CF": defectIdx >= 0 ? (cells[defectIdx] || "").trim() : "",
      "\u6B21\u54C1\u5907\u6CE8": defectNoteIdx >= 0 ? (cells[defectNoteIdx] || "").trim() : "",
      "\u5907\u6CE8": remarkIdx >= 0 ? (cells[remarkIdx] || "").trim() : ""
    });
  }
  return records;
}
__name(parseSheetCsv, "parseSheetCsv");
async function fetchData(docConfig, tencentDocsConfig) {
  const sid = await initMcpSession(tencentDocsConfig.mcpUrl, tencentDocsConfig.apiKey);
  const sheets = await getSheetList(tencentDocsConfig.mcpUrl, tencentDocsConfig.apiKey, sid, docConfig.fileId);
  const keywords = docConfig.readSheetKeywords || ["\u5BA2\u9000", "\u9000\u8D27"];
  const dataSheets = sheets.filter((sheet) => keywords.some((kw) => sheet.sheet_name.includes(kw)));
  const results = await Promise.allSettled(
    dataSheets.map(
      (sheet) => readSheetCsv(tencentDocsConfig.mcpUrl, tencentDocsConfig.apiKey, sid, docConfig.fileId, sheet.sheet_id, sheet.row_count, sheet.col_count).then((csv) => parseSheetCsv(csv, sheet.sheet_name))
    )
  );
  const allRecords = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i].status === "fulfilled") {
      allRecords.push(...results[i].value);
    } else if (results[i].status === "rejected") {
      console.error("\u8BFB\u53D6\u5931\u8D25 [" + dataSheets[i].sheet_name + "]: " + (results[i].reason && results[i].reason.message));
    }
  }
  return allRecords;
}
__name(fetchData, "fetchData");
function searchRecords(records, query) {
  if (!query || query.trim() === "") return [];
  const q = query.trim().toLowerCase();
  return records.filter((r) => (r["\u5FEB\u9012\u5355\u53F7"] || "").toLowerCase().includes(q));
}
__name(searchRecords, "searchRecords");
async function writeRow(tencentDocsConfig, sessionId, fileId, sheetId, startRow, values) {
  const cellValues = values.map((val, idx) => ({
    row: startRow,
    col: idx,
    value_type: "STRING",
    string_value: String(val)
  }));
  const result = await callToolWithSession(tencentDocsConfig.mcpUrl, tencentDocsConfig.apiKey, sessionId, "sheet.set_range_value", {
    file_id: fileId,
    sheet_id: sheetId,
    values: cellValues
  });
  const text = extractText(result);
  try {
    const parsed = JSON.parse(text);
    return { updateNum: parsed.update_num || cellValues.length };
  } catch (e) {
    return { updateNum: cellValues.length };
  }
}
__name(writeRow, "writeRow");
var WDT_BASE_TIME = 1325347200;
var WDT_API_URL = "https://wdt.wangdian.cn/openapi";
function calcWdtSign(secret, params) {
  const sortedKeys = Object.keys(params).sort();
  let signStr = secret;
  for (const k of sortedKeys) {
    signStr += k + params[k];
  }
  signStr += secret;
  return md5(signStr);
}
__name(calcWdtSign, "calcWdtSign");
async function callWdtApi(credentials, method, bodyParams) {
  const { sid, key, secret, salt } = credentials;
  const timestamp = Math.floor(Date.now() / 1e3) - WDT_BASE_TIME;
  const bodyContent = JSON.stringify([bodyParams]);
  const signParams = {
    body: bodyContent,
    calc_total: "1",
    key,
    method,
    page_no: "0",
    page_size: "40",
    salt,
    sid,
    timestamp: String(timestamp),
    v: "1.0"
  };
  const sign = calcWdtSign(secret, signParams);
  const queryParams = {
    sid,
    key,
    salt,
    method,
    timestamp: String(timestamp),
    v: "1.0",
    sign,
    page_size: "40",
    page_no: "0",
    calc_total: "1"
  };
  const queryString = Object.entries(queryParams).map(([k, val]) => encodeURIComponent(k) + "=" + encodeURIComponent(String(val))).join("&");
  const resp = await fetch(WDT_API_URL + "?" + queryString, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: bodyContent
  });
  const text = await resp.text();
  try {
    return JSON.parse(text);
  } catch (e) {
    throw new Error("\u65FA\u5E97\u901AAPI\u8FD4\u56DE\u975EJSON: " + text.substring(0, 200));
  }
}
__name(callWdtApi, "callWdtApi");
function parseShopInfo(fullShopName) {
  if (!fullShopName) return { platform: "", shopName: "" };
  let platform = "";
  let shopName = fullShopName;
  for (const p of PLATFORMS) {
    if (fullShopName.startsWith(p) || fullShopName.includes(" " + p) || fullShopName.includes(p + " ")) {
      platform = p;
      break;
    }
  }
  const parts = fullShopName.split(/\s+/);
  if (parts.length >= 2) {
    if (!platform) {
      platform = parts[0].substring(0, 2);
    }
    shopName = parts.slice(1).join(" ");
  }
  shopName = shopName.replace(/\d+$/, "").trim();
  return { platform, shopName };
}
__name(parseShopInfo, "parseShopInfo");
async function queryWdtOrder(credentials, query) {
  const q = String(query || "").trim();
  if (!q) {
    return { success: false, error: "\u67E5\u8BE2\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A" };
  }
  let result = await callWdtApi(credentials, "sales.TradeQuery.queryWithDetail", {
    logistics_no: q
  });
  if (!result.data || !result.data.order || result.data.order.length === 0) {
    result = await callWdtApi(credentials, "sales.TradeQuery.queryWithDetail", {
      src_tid: q
    });
  }
  if (result.status !== 0) {
    return { success: false, error: result.message || "\u65FA\u5E97\u901AAPI\u8FD4\u56DE\u9519\u8BEF" };
  }
  const orders = result.data && result.data.order || [];
  if (orders.length === 0) {
    return { success: true, total: 0, orders: [] };
  }
  const parsedOrders = orders.map((o) => {
    const shopInfo = parseShopInfo(o.shop_name);
    return {
      trade_no: o.trade_no || "",
      src_tids: o.src_tids || "",
      logistics_no: o.logistics_no || "",
      logistics_name: o.logistics_name || "",
      shop_name: o.shop_name || "",
      shop_no: o.shop_no || "",
      platform: shopInfo.platform,
      parsedShopName: shopInfo.shopName,
      trade_status: o.trade_status,
      trade_time: o.trade_time || "",
      consign_time: o.consign_time || "",
      stockout_no: o.stockout_no || "",
      warehouse_no: o.warehouse_no || "",
      goods_count: o.goods_count || 0,
      goods_amount: o.goods_amount || 0,
      receiver_area: o.receiver_area || "",
      receiver_name: o.receiver_name || "",
      receiver_mobile: o.receiver_mobile || ""
    };
  });
  return { success: true, total: parsedOrders.length, orders: parsedOrders };
}
__name(queryWdtOrder, "queryWdtOrder");
async function queryWarehouse(credentials, warehouseNo) {
  if (!warehouseNo) return "";
  try {
    const result = await callWdtApi(credentials, "setting.Warehouse.queryWarehouse", {
      warehouse_no: warehouseNo
    });
    if (result.status === 0 && result.data && result.data.details && result.data.details.length > 0) {
      return result.data.details[0].name || warehouseNo;
    }
  } catch (err) {
    console.error("[wdt] \u67E5\u8BE2\u4ED3\u5E93\u5931\u8D25:", err.message);
  }
  return warehouseNo;
}
__name(queryWarehouse, "queryWarehouse");
async function autoMatchWdtOrder(credentials, description) {
  const tokens = description.split(/\s+/);
  for (const token of tokens) {
    const cleaned = token.replace(/^[^\w]+/, "").replace(/[^\w]+$/, "");
    if (LOGISTICS_NO_REGEX.test(cleaned) && /\d/.test(cleaned)) {
      try {
        const wdtResult = await queryWdtOrder(credentials, cleaned);
        if (wdtResult.success && wdtResult.orders && wdtResult.orders.length > 0) {
          const order = wdtResult.orders[0];
          if (order.warehouse_no) {
            order.warehouse_name = await queryWarehouse(credentials, order.warehouse_no);
          }
          return order;
        }
      } catch (e) {
      }
    }
  }
  return null;
}
__name(autoMatchWdtOrder, "autoMatchWdtOrder");
function mergeWdtData(headers, extractResult, wdtMatch) {
  for (let i = 0; i < headers.length; i++) {
    const h = headers[i];
    const wdtProp = WDT_FIELD_MAP[h];
    if (wdtProp && wdtMatch[wdtProp] && String(wdtMatch[wdtProp]).trim()) {
      extractResult.values[i] = wdtMatch[wdtProp];
    }
  }
  for (let i = 0; i < headers.length; i++) {
    extractResult.raw[headers[i]] = extractResult.values[i];
  }
  extractResult.nonEmptyCount = extractResult.values.filter((v) => v && v.trim()).length;
  extractResult.missing = headers.filter((h, i) => !extractResult.values[i] || !extractResult.values[i].trim());
}
__name(mergeWdtData, "mergeWdtData");
async function chatJSON(llmConfig, systemPrompt, userMessage) {
  if (!llmConfig.apiKey && llmConfig.provider !== "ollama") {
    throw new Error("LLM API Key \u672A\u914D\u7F6E (provider: " + llmConfig.provider + ")");
  }
  const url = llmConfig.baseUrl.replace(/\/+$/, "") + "/chat/completions";
  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + (llmConfig.apiKey || "ollama") },
    body: JSON.stringify({
      model: llmConfig.model,
      messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userMessage }],
      temperature: 0,
      response_format: { type: "json_object" },
      max_tokens: 2048
    })
  });
  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error("LLM API \u9519\u8BEF: " + resp.status + " " + errText.substring(0, 200));
  }
  const data = await resp.json();
  const content = data.choices[0].message.content;
  if (!content || !content.trim()) throw new Error("LLM \u8FD4\u56DE\u7A7A\u5185\u5BB9\uFF0C\u8BF7\u91CD\u8BD5");
  try {
    return JSON.parse(content);
  } catch (e) {
    const match = content.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch (e2) {
        throw new Error("LLM \u8F93\u51FA\u65E0\u6CD5\u89E3\u6790\u4E3A JSON: " + content.substring(0, 200));
      }
    }
    throw new Error("LLM \u8F93\u51FA\u65E0\u6CD5\u89E3\u6790\u4E3A JSON: " + content.substring(0, 200));
  }
}
__name(chatJSON, "chatJSON");
async function testLLMConnection(llmConfig) {
  try {
    if (!llmConfig.apiKey && llmConfig.provider !== "ollama") {
      return { ok: false, message: "LLM API Key \u672A\u914D\u7F6E" };
    }
    const url = llmConfig.baseUrl.replace(/\/+$/, "") + "/chat/completions";
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + (llmConfig.apiKey || "ollama") },
      body: JSON.stringify({
        model: llmConfig.model,
        messages: [{ role: "user", content: '\u8BF7\u56DE\u590D"ok"' }],
        max_tokens: 10,
        temperature: 0
      })
    });
    if (!resp.ok) return { ok: false, message: "API \u9519\u8BEF: " + resp.status };
    const data = await resp.json();
    return { ok: true, message: "\u8FDE\u63A5\u6210\u529F\uFF0C\u6A21\u578B\u56DE\u590D: " + data.choices[0].message.content };
  } catch (err) {
    return { ok: false, message: err.message };
  }
}
__name(testLLMConnection, "testLLMConnection");
function buildSystemPrompt(headers, tableName) {
  return '\u4F60\u662F\u4E00\u4E2A\u7535\u5546\u552E\u540E\u6570\u636E\u5F55\u5165\u52A9\u624B\u3002\n\u7528\u6237\u8981\u5411"' + tableName + '"\u5199\u5165\u4E00\u6761\u65B0\u8BB0\u5F55\u3002\n\u8868\u683C\u7684\u5217\u6807\u9898\u5982\u4E0B\uFF1A\n' + JSON.stringify(headers) + '\n\n\u3010\u8F93\u5165\u683C\u5F0F\u8BF4\u660E\u3011\n\u7528\u6237\u901A\u5E38\u4EE5\u7A7A\u683C\u5206\u9694\u4E0D\u540C\u5B57\u6BB5\uFF0C\u5B57\u6BB5\u540D\u53EF\u80FD\u76F4\u63A5\u51FA\u73B0\u5728\u8F93\u5165\u4E2D\u3002\n\u4F8B\u5982"\u8BA2\u5355\u53F7123456789"\u8868\u793A"\u8BA2\u5355\u53F7"\u5217\u7684\u503C\u4E3A"123456789"\u3002\n\u4F8B\u5982"\u5FEB\u9012\u5355\u53F7 SF1234567890"\u8868\u793A"\u5FEB\u9012\u5355\u53F7"\u5217\u7684\u503C\u4E3A"SF1234567890"\u3002\n\n\u3010\u8F93\u51FA\u89C4\u5219\u3011\n1. \u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u8F93\u51FA\u4EFB\u4F55\u89E3\u91CA\u3001markdown \u6807\u8BB0\u6216\u591A\u4F59\u6587\u5B57\u3002\n2. JSON \u7684 key \u5FC5\u987B\u4E0E\u4E0A\u9762\u7684\u5217\u6807\u9898\u5B8C\u5168\u4E00\u81F4\u3002\n3. \u5982\u679C\u67D0\u4E2A\u5217\u7684\u503C\u65E0\u6CD5\u4ECE\u63CF\u8FF0\u4E2D\u63D0\u53D6\uFF0C\u5BF9\u5E94\u503C\u586B\u7A7A\u5B57\u7B26\u4E32 ""\u3002\n4. \u4E0D\u8981\u7F16\u9020\u672A\u63D0\u53CA\u7684\u4FE1\u606F\u3002\n5. \u91D1\u989D\u5B57\u6BB5\u53EA\u586B\u6570\u5B57\uFF0C\u4E0D\u5E26"\u5143"\u5B57\u3002\n6. \u65E5\u671F\u5B57\u6BB5\u683C\u5F0F\u4E3A YYYY-MM-DD\u3002\n7. \u8BC6\u522B\u8F93\u5165\u4E2D\u76F4\u63A5\u51FA\u73B0\u7684\u5B57\u6BB5\u540D\uFF08\u5982"\u8BA2\u5355\u53F7""\u5FEB\u9012\u5355\u53F7""\u8D27\u503C"\u7B49\uFF09\uFF0C\u63D0\u53D6\u5176\u540E\u7684\u503C\u3002\n\n\u3010\u5E38\u89C1\u522B\u540D\u3011\n- "\u5355\u53F7" \u2192 \u5FEB\u9012\u5355\u53F7\n- "\u91D1\u989D/\u4EF7\u683C" \u2192 \u8D27\u503C(\u5143)\n- "\u65E5\u671F" \u2192 \u767B\u8BB0\u65E5\u671F\n- "\u7406\u8D54" \u2192 \u7406\u8D54\u7C7B\u578B\uFF08\u5982"\u4E22\u4EF6\u7406\u8D54"\u8868\u793A\u7406\u8D54\u7C7B\u578B\u4E3A"\u4E22\u4EF6"\uFF09\n- "\u8FD0\u8D39" \u2192 \u8FD0\u8D39(\u5143)\n\n\u3010\u793A\u4F8B1\u3011\n\u5217\u6807\u9898\uFF1A["\u767B\u8BB0\u65E5\u671F","\u5E97\u94FA\u540D\u79F0","\u5E73\u53F0","\u8BA2\u5355\u53F7","\u5FEB\u9012\u5355\u53F7","\u7406\u8D54\u7C7B\u578B","\u8D27\u503C(\u5143)","\u8FD0\u8D39(\u5143)","\u5907\u6CE8"]\n\u7528\u6237\u8F93\u5165\uFF1A\u534E\u5F3A\u5317\u6570\u78013C\u5E97 \u6DD8\u5B9D \u8BA2\u5355\u53F7123456789 \u5FEB\u9012\u5355\u53F7SF1234567890 \u4E22\u4EF6\u7406\u8D54\u8D27\u503C399\u5143 \u8FD0\u8D3920\u5143\n\u8F93\u51FA\uFF1A{"\u767B\u8BB0\u65E5\u671F":"","\u5E97\u94FA\u540D\u79F0":"\u534E\u5F3A\u5317\u6570\u78013C\u5E97","\u5E73\u53F0":"\u6DD8\u5B9D","\u8BA2\u5355\u53F7":"123456789","\u5FEB\u9012\u5355\u53F7":"SF1234567890","\u7406\u8D54\u7C7B\u578B":"\u4E22\u4EF6","\u8D27\u503C(\u5143)":"399","\u8FD0\u8D39(\u5143)":"20","\u5907\u6CE8":""}\n\n\u3010\u793A\u4F8B2\u3011\n\u5217\u6807\u9898\uFF1A["\u767B\u8BB0\u65E5\u671F","\u5FEB\u9012\u5355\u53F7","\u5546\u54C1\u540D\u79F0","\u6B63\u54C1\u6570\u91CF","\u6B21\u54C1\u6570\u91CF","\u6B21\u54C1\u5907\u6CE8","\u5907\u6CE8"]\n\u7528\u6237\u8F93\u5165\uFF1A2026-06-23 \u5FEB\u9012\u5355\u53F7YT9876543210 \u84DD\u7259\u8033\u673A \u6B63\u54C12 \u6B21\u54C11 \u5305\u88C5\u7834\u635F\n\u8F93\u51FA\uFF1A{"\u767B\u8BB0\u65E5\u671F":"2026-06-23","\u5FEB\u9012\u5355\u53F7":"YT9876543210","\u5546\u54C1\u540D\u79F0":"\u84DD\u7259\u8033\u673A","\u6B63\u54C1\u6570\u91CF":"2","\u6B21\u54C1\u6570\u91CF":"1","\u6B21\u54C1\u5907\u6CE8":"\u5305\u88C5\u7834\u635F","\u5907\u6CE8":""}\n\n\u3010\u793A\u4F8B3\u3011\n\u5217\u6807\u9898\uFF1A["\u767B\u8BB0\u65E5\u671F","\u5E97\u94FA\u540D\u79F0","\u5E73\u53F0","\u8BA2\u5355\u53F7","\u5FEB\u9012\u5355\u53F7","\u7406\u8D54\u7C7B\u578B","\u8D27\u503C(\u5143)","\u8FD0\u8D39(\u5143)","\u5907\u6CE8"]\n\u7528\u6237\u8F93\u5165\uFF1A9831745985570 \u4E22\u4EF6\u7406\u8D5454.9\u5143 \u8FD0\u8D397\u5143\n\u8F93\u51FA\uFF1A{"\u767B\u8BB0\u65E5\u671F":"","\u5E97\u94FA\u540D\u79F0":"","\u5E73\u53F0":"","\u8BA2\u5355\u53F7":"","\u5FEB\u9012\u5355\u53F7":"9831745985570","\u7406\u8D54\u7C7B\u578B":"\u4E22\u4EF6","\u8D27\u503C(\u5143)":"54.9","\u8FD0\u8D39(\u5143)":"7","\u5907\u6CE8":""}\n\n\u3010\u793A\u4F8B4\u3011\n\u5217\u6807\u9898\uFF1A["\u767B\u8BB0\u65E5\u671F","\u5E97\u94FA\u540D\u79F0","\u5E73\u53F0","\u8BA2\u5355\u53F7","\u5FEB\u9012\u5355\u53F7","\u7406\u8D54\u7C7B\u578B","\u8D27\u503C(\u5143)","\u8FD0\u8D39(\u5143)","\u5907\u6CE8"]\n\u7528\u6237\u8F93\u5165\uFF1A\u5E97\u94FA \u548C\u65ED\u6570\u7801 \u5E73\u53F0 \u62FC\u591A\u591A \u8BA2\u5355\u53F7 9988776655 \u5FEB\u9012\u5355\u53F7 JJD00998877 \u7834\u635F\u7406\u8D54 \u8D27\u503C 158 \u8FD0\u8D39 12\n\u8F93\u51FA\uFF1A{"\u767B\u8BB0\u65E5\u671F":"","\u5E97\u94FA\u540D\u79F0":"\u548C\u65ED\u6570\u7801","\u5E73\u53F0":"\u62FC\u591A\u591A","\u8BA2\u5355\u53F7":"9988776655","\u5FEB\u9012\u5355\u53F7":"JJD00998877","\u7406\u8D54\u7C7B\u578B":"\u7834\u635F","\u8D27\u503C(\u5143)":"158","\u8FD0\u8D39(\u5143)":"12","\u5907\u6CE8":""}';
}
__name(buildSystemPrompt, "buildSystemPrompt");
function cleanValue(val) {
  if (!val) return "";
  let v = val.trim();
  v = v.replace(/元$/, "");
  v = v.replace(/^[:：]+/, "");
  return v.trim();
}
__name(cleanValue, "cleanValue");
function stripHeaderSuffix(h) {
  return h.replace(/[（(].*?[)）]\s*$/, "").trim();
}
__name(stripHeaderSuffix, "stripHeaderSuffix");
function ruleBasedExtract(headers, description) {
  const result = {};
  headers.forEach((h) => {
    result[h] = "";
  });
  const headerMap = {};
  headers.filter((h) => h && h.length > 0).forEach((h) => {
    headerMap[h] = h;
    const stripped = stripHeaderSuffix(h);
    if (stripped !== h) headerMap[stripped] = h;
  });
  const sortedHeaders = Object.keys(headerMap).sort((a, b) => b.length - a.length);
  const aliases = FIELD_ALIASES;
  const claimTypes = CLAIM_TYPES;
  const tokens = description.split(/\s+/).filter((t) => t.length > 0);
  let currentHeader = null;
  let valueParts = [];
  function flushCurrent() {
    if (currentHeader && valueParts.length > 0) {
      result[currentHeader] = cleanValue(valueParts.join(" "));
    }
    valueParts = [];
  }
  __name(flushCurrent, "flushCurrent");
  for (const token of tokens) {
    let matchedHeader = null;
    let remainder = "";
    for (const h of sortedHeaders) {
      if (token === h) {
        matchedHeader = headerMap[h];
        remainder = "";
        break;
      }
    }
    if (!matchedHeader) {
      for (const h of sortedHeaders) {
        if (token.length > h.length && token.startsWith(h)) {
          matchedHeader = headerMap[h];
          remainder = token.substring(h.length);
          break;
        }
      }
    }
    if (!matchedHeader) {
      for (const [alias, target] of Object.entries(aliases)) {
        if (headers.includes(target)) {
          if (token === alias) {
            matchedHeader = target;
            remainder = "";
            break;
          }
          if (token.length > alias.length && token.startsWith(alias)) {
            matchedHeader = target;
            remainder = token.substring(alias.length);
            break;
          }
        }
      }
    }
    if (!matchedHeader) {
      for (const h of sortedHeaders) {
        const idx = token.indexOf(h);
        if (idx >= 0 && idx + h.length < token.length) {
          const after = token.substring(idx + h.length);
          if (/^[:：\-—=]/.test(after)) {
            matchedHeader = headerMap[h];
            remainder = after.replace(/^[:：\-—=]+/, "");
            break;
          }
        }
      }
    }
    if (!matchedHeader) {
      for (const ct of claimTypes) {
        if (token.includes(ct)) {
          const claimHeader = headers.find((h) => h.includes("\u7406\u8D54\u7C7B\u578B"));
          if (claimHeader) {
            result[claimHeader] = ct;
            const rest = token.replace(ct, "").replace("\u7406\u8D54", "");
            const amountMatch = rest.match(/(\d+\.?\d*)/);
            if (amountMatch) {
              const amountHeader = headers.find((h) => h.includes("\u8D27\u503C"));
              if (amountHeader) result[amountHeader] = amountMatch[1];
            }
            matchedHeader = null;
            break;
          }
        }
      }
    }
    if (!matchedHeader) {
      for (const h of sortedHeaders) {
        const stripped = stripHeaderSuffix(headerMap[h] || h);
        if (stripped.length >= 2 && token.startsWith(stripped) && token.length > stripped.length) {
          const after = token.substring(stripped.length);
          if (/^\d+\.?\d*元?$/.test(after)) {
            matchedHeader = headerMap[h] || h;
            remainder = after;
            break;
          }
        }
      }
    }
    if (matchedHeader) {
      flushCurrent();
      currentHeader = matchedHeader;
      if (remainder) valueParts.push(remainder);
    } else if (currentHeader) {
      valueParts.push(token);
    }
  }
  flushCurrent();
  return result;
}
__name(ruleBasedExtract, "ruleBasedExtract");
async function extractRowData(llmConfig, headers, tableName, userDescription) {
  const t0 = Date.now();
  let method = "none";
  let raw = null;
  let llmError = null;
  const llmAvailable = llmConfig.apiKey && llmConfig.apiKey.trim() || llmConfig.provider === "ollama";
  if (llmAvailable) {
    try {
      const systemPrompt = buildSystemPrompt(headers, tableName);
      raw = await chatJSON(llmConfig, systemPrompt, userDescription);
      method = "llm";
    } catch (err) {
      llmError = err.message;
    }
  } else {
    llmError = "LLM API Key \u672A\u914D\u7F6E";
  }
  if (!raw) {
    raw = ruleBasedExtract(headers, userDescription);
    method = "rule";
  } else {
    const hasEmpty = headers.some((h) => !raw[h] || String(raw[h]).trim() === "");
    if (hasEmpty) {
      const ruleResult = ruleBasedExtract(headers, userDescription);
      for (const h of headers) {
        if ((!raw[h] || String(raw[h]).trim() === "") && ruleResult[h] && String(ruleResult[h]).trim()) {
          raw[h] = ruleResult[h];
        }
      }
      method = "llm+rule";
    } else {
      method = "llm";
    }
  }
  const today = /* @__PURE__ */ new Date();
  const todayStr = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
  const dateHeader = headers.find((h) => h === "\u767B\u8BB0\u65E5\u671F" || h.includes("\u65E5\u671F"));
  if (dateHeader && (!raw[dateHeader] || String(raw[dateHeader]).trim() === "")) {
    raw[dateHeader] = todayStr;
  }
  const values = headers.map((h) => {
    const v = raw[h];
    if (v === void 0 || v === null) return "";
    return String(v);
  });
  const missing = headers.filter((h) => !raw[h] || String(raw[h]).trim() === "");
  const parseTime = Date.now() - t0;
  const nonEmptyCount = values.filter((v) => v && v.trim()).length;
  return { values, missing, raw, method, parseTime, llmError, nonEmptyCount };
}
__name(extractRowData, "extractRowData");
function buildPreviewText(headers, values) {
  const lines = [];
  for (let i = 0; i < headers.length; i++) {
    const val = values[i] || "(\u7A7A)";
    lines.push("  " + headers[i] + ": " + val);
  }
  return lines.join("\n");
}
__name(buildPreviewText, "buildPreviewText");
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}
__name(deepMerge, "deepMerge");
async function loadConfig(env) {
  let cfg;
  try {
    const stored = await env.CONFIG.get("config");
    if (stored) cfg = deepMerge(DEFAULT_CONFIG, JSON.parse(stored));
    else cfg = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    if (cfg.defaultDocumentId && !cfg.queryDefaultDocumentId && !cfg.writeDefaultDocumentId) {
      cfg.queryDefaultDocumentId = cfg.defaultDocumentId;
      cfg.writeDefaultDocumentId = cfg.defaultDocumentId;
    }
  } catch (e) {
    console.error("[config] \u52A0\u8F7D\u914D\u7F6E\u5931\u8D25:", e.message);
    cfg = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  }
  if (!cfg.wangdian) cfg.wangdian = { sid: "", key: "", secret: "", salt: "" };
  if (env.WDT_SID) cfg.wangdian.sid = env.WDT_SID;
  if (env.WDT_KEY) cfg.wangdian.key = env.WDT_KEY;
  if (env.WDT_SECRET) cfg.wangdian.secret = env.WDT_SECRET;
  if (env.WDT_SALT) cfg.wangdian.salt = env.WDT_SALT;
  return cfg;
}
__name(loadConfig, "loadConfig");
async function saveConfig(env, config) {
  await env.CONFIG.put("config", JSON.stringify(config));
}
__name(saveConfig, "saveConfig");
function getDocumentById(config, docId) {
  return config.documents.find((d) => d.id === docId) || null;
}
__name(getDocumentById, "getDocumentById");
function maskApiKey(key) {
  if (!key) return key;
  return key.substring(0, 4) + "****" + key.substring(key.length - 4);
}
__name(maskApiKey, "maskApiKey");
function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
__name(jsonResponse, "jsonResponse");
var worker_default = {
  async fetch(request, env) {
    try {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
          }
        });
      }
      const url = new URL(request.url);
      let config;
      try {
        config = await loadConfig(env);
      } catch (e) {
        config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
      }
      if (url.pathname === "/" || url.pathname === "/index.html") {
        return new Response(HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
      }
      if (url.pathname === "/api/version" && request.method === "GET") {
        return jsonResponse({ success: true, data: { version: env.VERSION || "2.2.1" } });
      }
      if (url.pathname === "/api/settings/password-status" && request.method === "GET") {
        const hasPassword = !!(env.SETTINGS_PASSWORD && String(env.SETTINGS_PASSWORD).trim());
        return jsonResponse({ success: true, data: { hasPassword } });
      }
      if (url.pathname === "/api/settings/password" && request.method === "POST") {
        const body = await request.json();
        const action = body.action;
        const password = String(body.password || "").trim();
        if (action === "set") {
          return jsonResponse({ success: false, error: "Cloudflare Workers \u73AF\u5883\u53D8\u91CF\u4E3A\u53EA\u8BFB\u3002\u8BF7\u901A\u8FC7 Cloudflare Workers \u63A7\u5236\u53F0 / secrets \u8BBE\u7F6E SETTINGS_PASSWORD\uFF0C\u65E0\u6CD5\u901A\u8FC7\u6B64\u63A5\u53E3\u8BBE\u7F6E\u5BC6\u7801\u3002" }, 400);
        }
        if (action === "verify") {
          const current = env.SETTINGS_PASSWORD || "";
          if (!current) {
            return jsonResponse({ success: false, error: "\u5C1A\u672A\u8BBE\u7F6E\u8BBF\u95EE\u5BC6\u7801" }, 400);
          }
          if (password === String(current)) {
            return jsonResponse({ success: true, message: "\u9A8C\u8BC1\u901A\u8FC7" });
          }
          return jsonResponse({ success: false, error: "\u5BC6\u7801\u9519\u8BEF" }, 401);
        }
        return jsonResponse({ success: false, error: "\u672A\u77E5\u64CD\u4F5C" }, 400);
      }
      if (url.pathname === "/api/config" && request.method === "GET") {
        const safeConfig = JSON.parse(JSON.stringify(config));
        if (safeConfig.tencentDocs) safeConfig.tencentDocs.apiKey = maskApiKey(safeConfig.tencentDocs.apiKey);
        if (safeConfig.llm) safeConfig.llm.apiKey = maskApiKey(safeConfig.llm.apiKey);
        return jsonResponse({ success: true, data: safeConfig });
      }
      if (url.pathname === "/api/config" && request.method === "PUT") {
        const body = await request.json();
        try {
          const newConfig = JSON.parse(JSON.stringify(config));
          if (body.documents) newConfig.documents = body.documents;
          newConfig.queryDefaultDocumentId = body.queryDefaultDocumentId || config.queryDefaultDocumentId;
          newConfig.writeDefaultDocumentId = body.writeDefaultDocumentId || config.writeDefaultDocumentId;
          if ("defaultDocumentId" in newConfig) delete newConfig.defaultDocumentId;
          if (body.cache) newConfig.cache = body.cache;
          if (body.tencentDocs) {
            newConfig.tencentDocs = {
              apiKey: body.tencentDocs.apiKey && !body.tencentDocs.apiKey.includes("****") ? body.tencentDocs.apiKey : config.tencentDocs.apiKey,
              mcpUrl: body.tencentDocs.mcpUrl || config.tencentDocs.mcpUrl
            };
          }
          if (body.llm) {
            newConfig.llm = {
              provider: body.llm.provider || config.llm.provider,
              customProviderName: body.llm.customProviderName !== void 0 ? body.llm.customProviderName : config.llm.customProviderName,
              apiKey: body.llm.apiKey && !body.llm.apiKey.includes("****") ? body.llm.apiKey : config.llm.apiKey,
              baseUrl: body.llm.baseUrl || config.llm.baseUrl,
              model: body.llm.model || config.llm.model
            };
          }
          await saveConfig(env, newConfig);
          return jsonResponse({ success: true, message: "\u914D\u7F6E\u5DF2\u4FDD\u5B58" });
        } catch (err) {
          return jsonResponse({ success: false, error: err.message }, 500);
        }
      }
      if (url.pathname === "/api/documents" && request.method === "GET") {
        const docs = config.documents.map((d) => ({
          id: d.id,
          name: d.name,
          queryDefault: d.id === config.queryDefaultDocumentId,
          writeDefault: d.id === config.writeDefaultDocumentId,
          writeTargetCount: (d.writeTargets || []).length
        }));
        return jsonResponse({ success: true, data: docs });
      }
      if (url.pathname === "/api/search" && request.method === "GET") {
        const query = url.searchParams.get("q") || "";
        const docId = url.searchParams.get("docId") || config.queryDefaultDocumentId;
        const doc = getDocumentById(config, docId);
        if (!doc) return jsonResponse({ success: false, error: "\u672A\u627E\u5230\u6307\u5B9A\u6587\u6863" }, 400);
        try {
          const records = await fetchData(doc, config.tencentDocs);
          const results = searchRecords(records, query);
          return jsonResponse({
            success: true,
            query,
            docName: doc.name,
            total: results.length,
            data: results.map((r) => ({
              source: r._source,
              "\u767B\u8BB0\u65E5\u671F": r["\u767B\u8BB0\u65E5\u671F"] || "",
              "\u5FEB\u9012\u5355\u53F7": r["\u5FEB\u9012\u5355\u53F7"] || "",
              "\u5546\u54C1\u540D\u79F0": r["\u5546\u54C1\u540D\u79F0"] || "",
              "\u6B63\u54C1\u6570\u91CF": r["\u6B63\u54C1\u6570\u91CF"] || "",
              "\u6B21\u54C1\u6570\u91CF": r["\u6B21\u54C1\u6570\u91CF"] || "",
              "\u6B21\u54C1\u5907\u6CE8": r["\u6B21\u54C1\u5907\u6CE8"] || "",
              "\u5907\u6CE8": r["\u5907\u6CE8"] || ""
            }))
          });
        } catch (err) {
          return jsonResponse({ success: false, error: err.message }, 500);
        }
      }
      if (url.pathname === "/api/refresh" && request.method === "GET") {
        const docId = url.searchParams.get("docId") || config.queryDefaultDocumentId;
        const doc = getDocumentById(config, docId);
        if (!doc) return jsonResponse({ success: false, error: "\u672A\u627E\u5230\u6307\u5B9A\u6587\u6863" }, 400);
        try {
          const records = await fetchData(doc, config.tencentDocs);
          return jsonResponse({ success: true, message: "\u6570\u636E\u5237\u65B0\u6210\u529F", total: records.length });
        } catch (err) {
          return jsonResponse({ success: false, error: err.message }, 500);
        }
      }
      if (url.pathname === "/api/health" && request.method === "GET") {
        return jsonResponse({ status: "ok", documents: config.documents.length });
      }
      if (url.pathname === "/api/wdt/query" && request.method === "GET") {
        const q = url.searchParams.get("q") || "";
        if (!q.trim()) return jsonResponse({ success: false, error: "\u67E5\u8BE2\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A" }, 400);
        const wdtCfg = config.wangdian || {};
        if (!wdtCfg.sid || !wdtCfg.key || !wdtCfg.secret || !wdtCfg.salt) {
          return jsonResponse({ success: false, error: "\u65FA\u5E97\u901AAPI\u672A\u914D\u7F6E\uFF0C\u8BF7\u5728\u73AF\u5883\u53D8\u91CF\u6216\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6EWDT_SID/WDT_KEY/WDT_SECRET/WDT_SALT" }, 400);
        }
        try {
          const result = await queryWdtOrder(wdtCfg, q);
          return jsonResponse(result);
        } catch (err) {
          return jsonResponse({ success: false, error: err.message }, 500);
        }
      }
      if (url.pathname === "/api/write/headers" && request.method === "GET") {
        const docId = url.searchParams.get("docId") || config.writeDefaultDocumentId;
        const targetId = url.searchParams.get("targetId");
        const doc = getDocumentById(config, docId || config.writeDefaultDocumentId);
        if (!doc) return jsonResponse({ success: false, error: "\u672A\u627E\u5230\u6307\u5B9A\u6587\u6863" }, 400);
        const target = (doc.writeTargets || []).find((t) => t.id === targetId);
        if (!target) return jsonResponse({ success: false, error: "\u672A\u627E\u5230\u6307\u5B9A\u7684\u5199\u5165\u76EE\u6807\u8868\u683C" }, 400);
        try {
          const targetFileId = target.fileId || doc.fileId;
          const sid = await initMcpSession(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey);
          const sheets = await getSheetList(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId);
          const sheet = sheets.find((s) => s.sheet_name === target.sheetName) || sheets[0];
          if (!sheet) return jsonResponse({ success: false, error: "\u6587\u6863\u4E2D\u672A\u627E\u5230\u4EFB\u4F55\u5DE5\u4F5C\u8868" }, 400);
          const csv = await readSheetCsv(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId, sheet.sheet_id, Math.min(sheet.row_count, HEADER_SAMPLE_ROW_LIMIT), sheet.col_count);
          const allLines = csv.split("\n");
          const lines = allLines.filter((l) => l.trim());
          if (lines.length === 0) return jsonResponse({ success: false, error: "\u5DE5\u4F5C\u8868\u4E3A\u7A7A" }, 400);
          const headers = parseCsvLine(lines[0]);
          while (headers.length > 0 && !headers[headers.length - 1].trim()) {
            headers.pop();
          }
          return jsonResponse({
            success: true,
            data: { headers, sheetName: sheet.sheet_name, sheetId: sheet.sheet_id, targetFileId, rowCount: sheet.row_count, colCount: sheet.col_count, existingDataLines: lines.length - 1 }
          });
        } catch (err) {
          return jsonResponse({ success: false, error: err.message }, 500);
        }
      }
      if (url.pathname === "/api/write/extract" && request.method === "POST") {
        const body = await request.json();
        const docId = body.docId || config.writeDefaultDocumentId;
        const targetId = body.targetId;
        const description = body.description;
        const doc = getDocumentById(config, docId || config.writeDefaultDocumentId);
        if (!doc) return jsonResponse({ success: false, error: "\u672A\u627E\u5230\u6307\u5B9A\u6587\u6863" }, 400);
        const target = (doc.writeTargets || []).find((t) => t.id === targetId);
        if (!target) return jsonResponse({ success: false, error: "\u672A\u627E\u5230\u6307\u5B9A\u7684\u5199\u5165\u76EE\u6807\u8868\u683C" }, 400);
        if (!description || !description.trim()) return jsonResponse({ success: false, error: "\u8BF7\u8F93\u5165\u63CF\u8FF0\u5185\u5BB9" }, 400);
        if (description.length > MAX_DESCRIPTION_LENGTH) return jsonResponse({ success: false, error: "\u63CF\u8FF0\u5185\u5BB9\u8FC7\u957F\uFF0C\u6700\u5927\u652F\u6301 " + MAX_DESCRIPTION_LENGTH + " \u4E2A\u5B57\u7B26" }, 400);
        try {
          const targetFileId = target.fileId || doc.fileId;
          const sid = await initMcpSession(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey);
          const sheets = await getSheetList(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId);
          const sheet = sheets.find((s) => s.sheet_name === target.sheetName) || sheets[0];
          if (!sheet) return jsonResponse({ success: false, error: "\u6587\u6863\u4E2D\u672A\u627E\u5230\u4EFB\u4F55\u5DE5\u4F5C\u8868" }, 400);
          const csv = await readSheetCsv(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId, sheet.sheet_id, Math.min(sheet.row_count, HEADER_SAMPLE_ROW_LIMIT), sheet.col_count);
          const allLines = csv.split("\n");
          const lines = allLines.filter((l) => l.trim());
          if (lines.length === 0) return jsonResponse({ success: false, error: "\u5DE5\u4F5C\u8868\u4E3A\u7A7A" }, 400);
          const headers = parseCsvLine(lines[0]);
          while (headers.length > 0 && !headers[headers.length - 1].trim()) {
            headers.pop();
          }
          const wdtCfg = config.wangdian || {};
          const wdtEnabled = wdtCfg.sid && wdtCfg.key && wdtCfg.secret && wdtCfg.salt;
          const [extractResult, wdtMatch] = await Promise.all([
            extractRowData(config.llm, headers, target.name, description),
            wdtEnabled ? autoMatchWdtOrder(wdtCfg, description) : Promise.resolve(null)
          ]);
          if (wdtMatch) {
            mergeWdtData(headers, extractResult, wdtMatch);
          }
          if (extractResult.nonEmptyCount === 0) {
            return jsonResponse({ success: false, error: "\u672A\u80FD\u4ECE\u63CF\u8FF0\u4E2D\u63D0\u53D6\u5230\u4EFB\u4F55\u6709\u6548\u6570\u636E\uFF0C\u8BF7\u68C0\u67E5\u8F93\u5165\u5185\u5BB9" }, 400);
          }
          let emptyRowIndex = allLines.length;
          for (let i = 1; i < allLines.length; i++) {
            const cells = parseCsvLine(allLines[i]);
            const isEmpty = cells.every((c) => !c || !c.trim());
            if (isEmpty) {
              emptyRowIndex = i;
              break;
            }
          }
          const logisticsColIdx = headers.findIndex((h) => {
            const name = (h || "").trim();
            return name === "\u5FEB\u9012\u5355\u53F7" || name === "\u7269\u6D41\u5355\u53F7";
          });
          let duplicateInfo = null;
          if (logisticsColIdx >= 0) {
            const newLogisticsNo = (extractResult.values[logisticsColIdx] || "").trim();
            if (newLogisticsNo) {
              for (let i = 1; i < allLines.length; i++) {
                const rowCells = parseCsvLine(allLines[i]);
                const existingNo = (rowCells[logisticsColIdx] || "").trim();
                if (existingNo === newLogisticsNo) {
                  while (rowCells.length < headers.length) rowCells.push("");
                  const existingValues = headers.map((_, idx) => rowCells[idx] || "");
                  const emptyFieldIndices = [];
                  for (let j = 0; j < headers.length; j++) {
                    const headerName = (headers[j] || "").trim();
                    const isRemark = headerName === "\u5907\u6CE8" || headerName === "remark";
                    const val = (existingValues[j] || "").trim();
                    if (!val && !isRemark) {
                      emptyFieldIndices.push(j);
                    }
                  }
                  const isComplete = emptyFieldIndices.length === 0;
                  if (isComplete) {
                    duplicateInfo = {
                      type: "overwrite",
                      existingRow: i,
                      existingValues,
                      newValues: extractResult.values.slice(),
                      changedFields: []
                    };
                    for (let j = 0; j < headers.length; j++) {
                      const oldVal = (existingValues[j] || "").trim();
                      const newVal = (extractResult.values[j] || "").trim();
                      if (oldVal !== newVal) {
                        duplicateInfo.changedFields.push({
                          col: j,
                          header: headers[j],
                          oldValue: existingValues[j] || "",
                          newValue: extractResult.values[j] || ""
                        });
                      }
                    }
                  } else {
                    const mergedValues = existingValues.slice();
                    const filledFields = [];
                    for (let j = 0; j < headers.length; j++) {
                      const existingVal = (existingValues[j] || "").trim();
                      const newVal = (extractResult.values[j] || "").trim();
                      if (!existingVal && newVal) {
                        mergedValues[j] = newVal;
                        filledFields.push({
                          col: j,
                          header: headers[j],
                          oldValue: "",
                          newValue: newVal
                        });
                      }
                    }
                    duplicateInfo = {
                      type: "merge",
                      existingRow: i,
                      existingValues,
                      newValues: extractResult.values.slice(),
                      mergedValues,
                      filledFields,
                      emptyFieldIndices
                    };
                  }
                  break;
                }
              }
            }
          }
          const finalTargetRow = duplicateInfo ? duplicateInfo.existingRow : emptyRowIndex;
          const finalValues = duplicateInfo && duplicateInfo.type === "merge" ? duplicateInfo.mergedValues : extractResult.values;
          return jsonResponse({
            success: true,
            data: { headers, values: finalValues, missing: extractResult.missing, targetRow: finalTargetRow, sheetName: sheet.sheet_name, sheetId: sheet.sheet_id, targetFileId, preview: buildPreviewText(headers, finalValues), duplicate: duplicateInfo, debug: { method: extractResult.method, parseTime: extractResult.parseTime, llmRaw: extractResult.raw, llmError: extractResult.llmError, nonEmptyCount: extractResult.nonEmptyCount, headerCount: headers.length, totalLines: lines.length, wdtMatch: wdtMatch ? { src_tids: wdtMatch.src_tids, logistics_no: wdtMatch.logistics_no, shop_name: wdtMatch.shop_name, platform: wdtMatch.platform, warehouse_no: wdtMatch.warehouse_no, warehouse_name: wdtMatch.warehouse_name } : null } }
          });
        } catch (err) {
          return jsonResponse({ success: false, error: err.message }, 500);
        }
      }
      if (url.pathname === "/api/write/execute" && request.method === "POST") {
        const body = await request.json();
        const docId = body.docId || config.writeDefaultDocumentId;
        const targetFileId = body.targetFileId;
        const sheetId = body.sheetId;
        const targetRow = body.targetRow;
        const values = body.values;
        const doc = getDocumentById(config, docId);
        if (!doc) return jsonResponse({ success: false, error: "\u672A\u627E\u5230\u6307\u5B9A\u6587\u6863" }, 400);
        if (!values || !Array.isArray(values)) return jsonResponse({ success: false, error: "\u5199\u5165\u6570\u636E\u65E0\u6548" }, 400);
        if (!Number.isInteger(targetRow) || targetRow < 0) return jsonResponse({ success: false, error: "\u76EE\u6807\u884C\u53F7\u65E0\u6548" }, 400);
        const nonEmptyCount = values.filter((v) => v && String(v).trim()).length;
        if (nonEmptyCount === 0) return jsonResponse({ success: false, error: "\u5199\u5165\u6570\u636E\u5168\u4E3A\u7A7A\uFF0C\u5DF2\u963B\u6B62\u5199\u5165" }, 400);
        const writeDocId = targetFileId || doc.fileId;
        try {
          const sid = await initMcpSession(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey);
          const sheets = await getSheetList(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, writeDocId);
          const sheet = sheets.find((s) => s.sheet_id === sheetId);
          if (!sheet) return jsonResponse({ success: false, error: "\u672A\u627E\u5230\u6307\u5B9A\u5DE5\u4F5C\u8868" }, 400);
          const actualRow = await findNextEmptyRow(
            config.tencentDocs.mcpUrl,
            config.tencentDocs.apiKey,
            sid,
            writeDocId,
            sheetId,
            targetRow,
            sheet.col_count,
            sheet.row_count
          );
          const result = await writeRow(config.tencentDocs, sid, writeDocId, sheetId, actualRow, values);
          return jsonResponse({ success: true, message: "\u767B\u8BB0\u6210\u529F\uFF0C\u66F4\u65B0\u4E86 " + result.updateNum + " \u4E2A\u5355\u5143\u683C", data: { updateNum: result.updateNum, row: actualRow } });
        } catch (err) {
          return jsonResponse({ success: false, error: err.message }, 500);
        }
      }
      if (url.pathname === "/api/llm/test" && request.method === "POST") {
        const body = await request.json();
        const llmConfig = body.llmConfig || config.llm;
        try {
          const result = await testLLMConnection(llmConfig);
          return jsonResponse({ success: result.ok, message: result.message });
        } catch (err) {
          return jsonResponse({ success: false, message: err.message }, 500);
        }
      }
      return new Response("Not Found", { status: 404 });
    } catch (err) {
      return jsonResponse({ success: false, error: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF: " + err.message }, 500);
    }
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
