// --- HTML (embedded as template literal) ---
const HTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>和旭电商售后小工具</title>
  <script>(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();</script>
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

    /* ── Modal ── */
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

    /* ── Toast ── */
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
        <button class="theme-toggle" id="themeToggleBtn" onclick="toggleTheme()" title="切换主题" style="margin-left:auto;background:var(--bg-hover);border:1px solid var(--border);border-radius:6px;padding:6px 10px;cursor:pointer;font-size:14px;color:var(--text-secondary);transition:all 0.2s;">🌙</button>
      </div>
      <h1>和旭电商售后小工具</h1>
      <p class="header-sub">查询 · 登记 · 设置 — 数据来源：<code>腾讯文档</code>&nbsp;<code>旺店通</code></p>
    </header>

    <nav class="tabs">
      <button class="tab active" data-view="query" onclick="switchView('query')">查询</button>
      <button class="tab" data-view="write" onclick="switchView('write')">登记</button>
      <button class="tab" data-view="settings" onclick="switchView('settings')">设置</button>
    </nav>

    <!-- Query View -->
    <section class="view active" id="view-query">
      <div class="card">
        <h2 class="card-title">文档查询</h2>
        <div class="doc-selector">
          <label for="queryDocSelect" style="margin:0">文档：</label>
          <select id="queryDocSelect" onchange="onQueryDocChange()"></select>
        </div>
        <div class="search-row">
          <div class="search-input-wrap">
            <span class="search-prefix">&gt;</span>
            <input type="text" class="search-input" id="searchInput" placeholder="输入快递单号查询登记记录..." autocomplete="off" spellcheck="false"/>
          </div>
          <button class="btn btn-primary" id="searchBtn" onclick="doSearch()">查询</button>
        </div>
        <div class="search-meta">
          <span id="statusText">ready</span>
          <button class="btn-refresh" onclick="doRefresh()">刷新数据</button>
        </div>
      </div>

      <div class="error-box" id="errorMsg"></div>
      <div class="loading" id="loading">
        <div class="spinner"></div>
        <p>fetching data...</p>
      </div>

      <div class="card" id="resultPanel" style="display:none">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <h2 class="card-title" style="margin:0">查询结果</h2>
          <span style="font-family:var(--font-mono);font-size:13px;color:var(--text-secondary)">共 <em id="totalCount" style="font-style:normal;color:var(--accent);font-weight:600">0</em> 条</span>
        </div>
        <div class="table-scroll">
          <table>
            <thead>
              <tr>
                <th>来源</th><th>登记日期</th><th>快递单号</th><th>商品名称</th>
                <th>正品</th><th>次品</th><th>次品备注</th><th>备注</th>
              </tr>
            </thead>
            <tbody id="resultBody"></tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h2 class="card-title">旺店通ERP查询</h2>
        <div class="search-row">
          <div class="search-input-wrap">
            <span class="search-prefix">&gt;</span>
            <input type="text" class="search-input" id="wdtSearchInput" placeholder="输入物流单号或原始单号查询ERP订单..." autocomplete="off" spellcheck="false"/>
          </div>
          <button class="btn btn-primary" id="wdtSearchBtn" onclick="doWdtSearch()">ERP查询</button>
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
          <h2 class="card-title" style="margin:0">ERP订单信息</h2>
          <span style="font-family:var(--font-mono);font-size:13px;color:var(--text-secondary)">旺店通 · 共 <em id="wdtTotalCount" style="font-style:normal;color:var(--accent);font-weight:600">0</em> 条</span>
        </div>
        <div class="table-scroll">
          <table>
            <thead>
              <tr>
                <th>原始单号</th><th>物流单号</th><th>店铺名称</th><th>平台</th>
                <th>物流公司</th><th>订单状态</th><th>订单金额</th>
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
        <h2 class="card-title">登记新记录</h2>
        <div class="form-row">
          <div class="form-group">
            <label>选择文档</label>
            <select id="writeDocSelect" onchange="onWriteDocChange()"></select>
          </div>
          <div class="form-group">
            <label>选择目标表格</label>
            <select id="writeTargetSelect"></select>
          </div>
        </div>
        <div class="form-group">
          <label>用自然语言描述要登记的内容</label>
          <textarea id="writeDescription" placeholder="例如：9831745985570 丢件理赔54.9元 运费7元&#10;系统会自动识别物流单号并从旺店通ERP反查原始单号、店铺名、平台"></textarea>
        </div>
        <div class="btn-row">
          <button class="btn btn-primary" id="extractBtn" onclick="doExtract()">登记预览</button>
        </div>
      </div>

      <div class="error-box" id="writeError"></div>
      <div class="success-box" id="writeSuccess"></div>
      <div class="loading" id="writeLoading">
        <div class="spinner"></div>
        <p>AI 正在分析...</p>
      </div>

      <div class="card" id="previewPanel" style="display:none">
        <h2 class="card-title">登记预览</h2>
        <div id="missingFields" class="missing-fields" style="display:none"></div>
        <div class="table-scroll">
          <table class="preview-table">
            <thead><tr id="previewHeader"></tr></thead>
            <tbody><tr id="previewRow"></tr></tbody>
          </table>
        </div>
        <div id="debugInfo" style="display:none;margin-top:12px;padding:10px 14px;background:var(--bg-primary);border:1px solid var(--border);border-radius:6px;font-family:var(--font-mono);font-size:11px;color:var(--text-muted);"></div>
        <div style="margin-top:16px;display:flex;gap:10px">
          <button class="btn btn-primary" onclick="doWrite()">确认登记</button>
          <button class="btn btn-secondary" onclick="cancelWrite()">取消</button>
        </div>
      </div>
    </section>

    <!-- Settings View -->
    <section class="view" id="view-settings">
      <div class="card">
        <h2 class="card-title">系统设置</h2>

        <div id="settingsPasswordGate" style="display:none">
          <div class="settings-section">
            <h3>访问验证</h3>
            <p id="passwordGateDesc" style="color:var(--text-secondary);font-size:14px;margin-bottom:12px">请输入访问密码</p>
            <div class="form-group">
              <input type="password" id="settingsPasswordInput" placeholder="访问密码" onkeydown="if(event.key==='Enter') handlePasswordGate()"/>
            </div>
            <div class="btn-row">
              <button class="btn btn-primary" id="passwordGateBtn" onclick="handlePasswordGate()">进入设置</button>
            </div>
          </div>
        </div>

        <div id="settingsContent" style="display:none">

        <div class="settings-section">
          <h3>腾讯文档配置</h3>
          <div class="form-group">
            <label>API Key</label>
            <input type="password" id="cfgTencentKey" placeholder="腾讯文档 API Key"/>
          </div>
          <div class="form-group">
            <label>MCP API 地址</label>
            <input type="url" id="cfgTencentUrl" placeholder="https://docs.qq.com/openapi/mcp"/>
          </div>
        </div>

        <div class="settings-section">
          <h3>LLM 配置</h3>
          <div class="form-row">
            <div class="form-group">
              <label>服务商</label>
              <select id="cfgLlmProvider" onchange="onLlmProviderChange()">
                <option value="deepseek">DeepSeek</option>
                <option value="doubao">豆包 (火山引擎)</option>
                <option value="qwen">通义千问</option>
                <option value="stepfun">阶跃星辰TOKENPLAN</option>
                <option value="ollama">Ollama (本地)</option>
                <option value="openai">OpenAI</option>
                <option value="custom">自定义</option>
              </select>
            </div>
            <div class="form-group" id="customProviderNameGroup" style="display:none">
              <label>自定义服务商名</label>
              <input type="text" id="cfgLlmCustomName" placeholder="例如 MyLLM"/>
            </div>
            <div class="form-group">
              <label>模型名称</label>
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
            <button class="btn btn-secondary" onclick="testLLM()">测试连接</button>
          </div>
        </div>

        <div class="settings-section">
          <h3>默认文档</h3>
          <div class="form-row">
            <div class="form-group">
              <label>查询 TAB 默认文档</label>
              <select id="cfgQueryDefaultDoc" onchange="onQueryDefaultDocChange()"></select>
            </div>
            <div class="form-group">
              <label>登记 TAB 默认文档</label>
              <select id="cfgWriteDefaultDoc" onchange="onWriteDefaultDocChange()"></select>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <h3>文档配置</h3>
          <div id="docListContainer"></div>
          <button class="btn btn-secondary" onclick="addDocument()" style="margin-top:8px">+ 添加文档</button>
        </div>

        <div class="settings-section">
          <h3>缓存配置</h3>
          <div class="form-row">
            <div class="form-group">
              <label>缓存有效期（秒）</label>
              <input type="text" id="cfgCacheTtl" placeholder="300"/>
            </div>
            <div class="form-group">
              <label>自动刷新间隔（秒）</label>
              <input type="text" id="cfgCacheRefresh" placeholder="1800"/>
            </div>
          </div>
        </div>

        <div class="btn-row">
          <button class="btn btn-primary" onclick="saveSettings()">保存配置</button>
        </div>
        </div>
      </div>
    </section>

    <!-- Document Edit Modal -->
    <div class="modal-overlay" id="docModal">
      <div class="modal">
        <h2 class="modal-title" id="docModalTitle">添加文档</h2>
        <div class="form-group">
          <label>文档名称</label>
          <input type="text" id="modalDocName" placeholder="如：和旭电商退货登记"/>
        </div>
        <div class="form-group">
          <label>腾讯文档 File ID</label>
          <input type="text" id="modalDocFileId" placeholder="文档 ID"/>
        </div>
        <div class="form-group">
          <label>读取 Sheet 关键词（逗号分隔）</label>
          <input type="text" id="modalDocKeywords" placeholder="客退,退货"/>
        </div>
        <div class="form-group">
          <label>写入目标（每行一个，格式：显示名|sheet名）</label>
          <textarea id="modalDocTargets" placeholder="快递理赔登记表|理赔登记&#10;售后换货登记表|换货登记" style="min-height:60px"></textarea>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" id="modalDocQueryDefault" style="width:auto;display:inline;margin-right:6px"/>
            设为查询 TAB 默认文档
          </label>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" id="modalDocWriteDefault" style="width:auto;display:inline;margin-right:6px"/>
            设为登记 TAB 默认文档
          </label>
        </div>
        <div class="modal-actions">
          <button class="btn btn-secondary" onclick="closeDocModal()">取消</button>
          <button class="btn btn-primary" id="docModalSave" onclick="saveDocModal()">保存</button>
        </div>
      </div>
    </div>

    <!-- Delete Confirm Modal -->
    <div class="modal-overlay" id="deleteModal">
      <div class="modal" style="max-width:400px">
        <h2 class="modal-title">确认删除</h2>
        <p id="deleteModalText" style="color:var(--text-secondary);font-size:14px;line-height:1.6"></p>
        <div class="modal-actions">
          <button class="btn btn-secondary" onclick="closeDeleteModal()">取消</button>
          <button class="btn btn-danger" id="deleteConfirmBtn">删除</button>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div class="toast" id="toast"></div>

    <div class="card" id="logPanel" style="position:fixed;bottom:0;left:0;right:0;max-height:240px;overflow-y:auto;z-index:900;display:none;border-radius:0;border-left:none;border-right:none;border-bottom:none;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;position:sticky;top:0;background:var(--bg-card);padding:8px 0;z-index:1;">
        <h2 class="card-title" style="margin:0;font-size:13px;">操作日志</h2>
        <div style="display:flex;gap:8px;">
          <button class="btn-refresh" onclick="clearLog()">清空</button>
          <button class="btn-refresh" onclick="toggleLogPanel()">收起</button>
        </div>
      </div>
      <div id="logList" style="font-family:var(--font-mono);font-size:12px;"></div>
    </div>
    <button class="btn-refresh" id="logToggleBtn" onclick="toggleLogPanel()" style="position:fixed;bottom:16px;right:24px;z-index:901;padding:6px 14px;">日志</button>
  </div>

  <script>
    const $ = id => document.getElementById(id);

    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      $('themeToggleBtn').textContent = next === 'dark' ? '🌙' : '☀️';
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
      const sq = esc(q).replace(/[.*+?^\${}()|[\]\\]/g, '\\$&');
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
        list.innerHTML = '<div style="color:var(--text-muted);padding:8px 0;">暂无操作记录</div>';
        return;
      }
      list.innerHTML = operationLogs.map(log =>
        '<div class="log-entry">' +
        '<span class="log-time">' + esc(log.time) + '</span>' +
        '<span class="log-type">' + esc(log.type) + '</span>' +
        '<span class="log-result ' + (log.result === '成功' ? 'success' : 'error') + '">' + esc(log.result) + '</span>' +
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
        // 仅首次加载或缓存失效时才请求 /api/documents
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
            ? (d.queryDefault ? ' (查询默认)' : '')
            : (d.writeDefault ? ' (登记默认)' : '');
          opt.textContent = d.name + defaultLabel;
          const isDefault = selectId === 'queryDocSelect' ? d.queryDefault : d.writeDefault;
          if (isDefault) opt.selected = true;
          sel.appendChild(opt);
        });

        if (selectId === 'writeDocSelect') {
          onWriteDocChange();
        }
      } catch (err) {
        console.error('加载文档列表失败:', err);
      }
    }

    function onQueryDocChange() {
      setStatus('ready');
    }

    async function onWriteDocChange() {
      const docId = $('writeDocSelect').value;
      const doc = documents.find(d => d.id === docId);
      if (!doc) return;

      // 优先使用已缓存的 currentConfig，避免重复请求 /api/config
      if (!currentConfig) {
        try {
          const resp = await fetch('/api/config');
          const data = await resp.json();
          if (data.success) {
            currentConfig = data.data;
          }
        } catch (err) {
          console.error('加载登记目标失败:', err);
          return;
        }
      }

      const docConfig = currentConfig.documents.find(d => d.id === docId);
      const targets = (docConfig && docConfig.writeTargets) || [];
      const sel = $('writeTargetSelect');
      sel.innerHTML = '';
      if (targets.length === 0) {
        sel.innerHTML = '<option value="">未配置登记目标</option>';
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
      if (!q) { showError('请输入快递单号'); $('searchInput').focus(); return; }

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
          showError(data.error || '查询失败');
          showToast(data.error || '查询失败', 'error');
          addLog('查询', '失败', data.error || '查询失败');
          setStatus('error');
          return;
        }

        $('totalCount').textContent = data.total;
        const body = $('resultBody');
        body.innerHTML = '';

        if (data.total === 0) {
          body.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:40px;color:var(--text-muted)">未找到匹配记录</td></tr>';
        } else {
          data.data.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML =
              '<td><span class="tag">' + esc(r.source) + '</span></td>' +
              '<td>' + esc(r['登记日期']) + '</td>' +
              '<td style="color:var(--text-primary);font-family:var(--font-mono);font-size:13px">' + hl(r['快递单号'], q) + '</td>' +
              '<td>' + esc(r['商品名称']) + '</td>' +
              '<td>' + esc(r['正品数量']) + '</td>' +
              '<td>' + esc(r['次品数量']) + '</td>' +
              '<td>' + esc(r['次品备注']) + '</td>' +
              '<td>' + esc(r['备注']) + '</td>';
            body.appendChild(tr);
          });
        }

        $('resultPanel').style.display = 'block';
        setStatus('done — ' + data.total + ' result' + (data.total > 1 ? 's' : ''));
        showToast('查询完成，共 ' + data.total + ' 条结果', 'success');
        addLog('查询', '成功', '单号: ' + q + '，共 ' + data.total + ' 条');
      } catch (err) {
        $('loading').classList.remove('visible');
        showError('网络请求失败');
        showToast('网络请求失败', 'error');
        addLog('查询', '失败', '网络错误');
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
          setStatus('synced — ' + data.total + ' records');
          showToast('刷新成功，共 ' + data.total + ' 条记录', 'success');
          addLog('刷新', '成功', '共 ' + data.total + ' 条记录');
        } else {
          showError('刷新失败: ' + (data.error || ''));
          showToast('刷新失败: ' + (data.error || ''), 'error');
          addLog('刷新', '失败', data.error || '刷新失败');
          setStatus('error');
        }
      } catch {
        setStatus('network error');
        showToast('刷新失败: 网络错误', 'error');
        addLog('刷新', '失败', '网络错误');
      }
    }

    const TRADE_STATUS_MAP = {4:'线下退款',5:'已取消',6:'待审核',10:'未付款',55:'已审核',95:'已发货',110:'已完成'};
    function formatTradeStatus(s) { return TRADE_STATUS_MAP[s] || ('状态' + s); }
    function setWdtStatus(t) { $('wdtStatusText').textContent = t; }

    $('wdtSearchInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') doWdtSearch();
    });

    async function doWdtSearch() {
      const q = $('wdtSearchInput').value.trim();
      if (!q) { showError('请输入物流单号或原始单号', 'wdtErrorMsg'); $('wdtSearchInput').focus(); return; }

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
          showError(data.error || 'ERP查询失败', 'wdtErrorMsg');
          showToast(data.error || 'ERP查询失败', 'error');
          addLog('ERP查询', '失败', data.error || '查询失败');
          setWdtStatus('error');
          return;
        }

        $('wdtTotalCount').textContent = data.total;
        const body = $('wdtResultBody');
        body.innerHTML = '';

        if (data.total === 0) {
          body.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--text-muted)">未找到匹配的ERP订单</td></tr>';
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
        setWdtStatus('done — ' + data.total + ' result' + (data.total > 1 ? 's' : ''));
        showToast('ERP查询完成，共 ' + data.total + ' 条结果', 'success');
        addLog('ERP查询', '成功', '查询: ' + q + '，共 ' + data.total + ' 条');
      } catch (err) {
        $('wdtLoading').classList.remove('visible');
        showError('网络请求失败', 'wdtErrorMsg');
        showToast('网络请求失败', 'error');
        addLog('ERP查询', '失败', '网络错误');
        setWdtStatus('network error');
      } finally {
        $('wdtSearchBtn').disabled = false;
      }
    }

    async function doExtract() {
      const docId = $('writeDocSelect').value;
      const targetId = $('writeTargetSelect').value;
      const description = $('writeDescription').value.trim();

      if (!targetId) { showError('请选择目标表格', 'writeError'); return; }
      if (!description) { showError('请输入描述内容', 'writeError'); return; }

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
          showError(data.error || '提取失败', 'writeError');
          showToast(data.error || '提取失败', 'error');
          addLog('提取', '失败', data.error || '提取失败');
          return;
        }

        writePreviewData = data.data;

        const headers = data.data.headers;
        const values = data.data.values;

        $('previewHeader').innerHTML = headers.map(h => '<th>' + esc(h) + '</th>').join('');
        renderPreviewRow();
        updateMissingFields();

        const d = data.data.debug;
        if (d) {
          $('debugInfo').style.display = 'block';
          let debugHtml = '识别方式: <span style="color:var(--accent)">' + esc(d.method) + '</span> | 耗时: ' + d.parseTime + 'ms | 非空字段: ' + d.nonEmptyCount + '/' + d.headerCount;
          if (d.wdtMatch) {
            debugHtml += '<br><span style="color:var(--accent)">旺店通匹配: 原始单号=' + esc(d.wdtMatch.src_tids || '') + ' 物流单号=' + esc(d.wdtMatch.logistics_no || '') + ' 店铺=' + esc(d.wdtMatch.shop_name || '') + ' 平台=' + esc(d.wdtMatch.platform || '') + ' 云仓=' + esc(d.wdtMatch.warehouse_name || d.wdtMatch.warehouse_no || '') + '</span>';
          }
          if (d.llmError) {
            debugHtml += ' | AI错误: <span style="color:var(--danger)">' + esc(d.llmError) + '</span>';
          }
          $('debugInfo').innerHTML = debugHtml;
        } else {
          $('debugInfo').style.display = 'none';
        }

        $('previewPanel').style.display = 'block';
        showToast('提取完成（' + (data.data.debug ? data.data.debug.method : '') + '）', 'success');
        addLog('提取', '成功', '方式: ' + (data.data.debug?.method || '未知') + '，非空字段: ' + (data.data.debug?.nonEmptyCount || 0));
      } catch (err) {
        $('writeLoading').classList.remove('visible');
        showError('网络请求失败: ' + err.message, 'writeError');
        showToast('网络请求失败: ' + err.message, 'error');
        addLog('提取', '失败', '网络错误: ' + err.message);
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
        const display = isEmpty ? '(空)' : esc(v);
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
        el.textContent = '⚠ 以下字段未填写，建议补充: ' + missing.join(', ');
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
      const display = isEmpty ? '(空)' : esc(v);
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
          showError(data.error || '登记失败', 'writeError');
          showToast(data.error || '登记失败', 'error');
          addLog('登记', '失败', data.error || '登记失败');
          return;
        }

        showSuccess(data.message);
        showToast(data.message, 'success');
        addLog('登记', '成功', '行: ' + writePreviewData.targetRow + '，' + data.message);
        $('previewPanel').style.display = 'none';
        $('writeDescription').value = '';
        writePreviewData = null;
      } catch (err) {
        showError('网络请求失败: ' + err.message, 'writeError');
        showToast('网络请求失败: ' + err.message, 'error');
        addLog('登记', '失败', '网络错误: ' + err.message);
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
        $('passwordGateDesc').textContent = hasPassword ? '请输入访问密码' : '首次访问设置，请设置访问密码';
        $('passwordGateBtn').textContent = hasPassword ? '进入设置' : '设置密码';
        $('settingsPasswordInput').focus();
      } catch (err) {
        console.error('检查密码状态失败:', err);
      }
    }

    async function handlePasswordGate() {
      const password = $('settingsPasswordInput').value.trim();
      if (!password) { showToast('请输入密码', 'error'); return; }

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
          showToast(data.error || '验证失败', 'error');
        }
      } catch (err) {
        showToast('请求失败: ' + err.message, 'error');
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
        console.error('加载设置失败:', err);
      }
    }

    function renderDefaultDocSelectors() {
      const docs = currentConfig.documents || [];
      const querySel = $('cfgQueryDefaultDoc');
      const writeSel = $('cfgWriteDefaultDoc');
      querySel.innerHTML = '<option value="">-- 请选择 --</option>';
      writeSel.innerHTML = '<option value="">-- 请选择 --</option>';
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
        container.innerHTML = '<p style="color:var(--text-muted);font-size:13px">暂无文档配置</p>';
        return;
      }

      currentConfig.documents.forEach((doc, idx) => {
        const item = document.createElement('div');
        item.className = 'doc-list-item';
        const isQueryDefault = doc.id === currentConfig.queryDefaultDocumentId;
        const isWriteDefault = doc.id === currentConfig.writeDefaultDocumentId;
        const tags = [];
        if (isQueryDefault) tags.push('<span class="tag">查询默认</span>');
        if (isWriteDefault) tags.push('<span class="tag">登记默认</span>');
        item.innerHTML =
          '<span class="name">' + esc(doc.name) + (tags.length ? ' ' + tags.join(' ') : '') + '</span>' +
          '<div class="actions">' +
            '<button class="btn btn-secondary btn-icon" onclick="editDocument(' + idx + ')">编辑</button>' +
            '<button class="btn btn-secondary btn-icon" onclick="deleteDocument(' + idx + ')">删除</button>' +
          '</div>';
        container.appendChild(item);
      });
    }

    let docModalEditIdx = -1;

    function addDocument() {
      docModalEditIdx = -1;
      $('docModalTitle').textContent = '添加文档';
      $('modalDocName').value = '';
      $('modalDocFileId').value = '';
      $('modalDocKeywords').value = '客退,退货';
      $('modalDocTargets').value = '';
      $('modalDocQueryDefault').checked = false;
      $('modalDocWriteDefault').checked = false;
      $('docModal').classList.add('visible');
      $('modalDocName').focus();
    }

    function editDocument(idx) {
      const doc = currentConfig.documents[idx];
      docModalEditIdx = idx;
      $('docModalTitle').textContent = '编辑文档';
      $('modalDocName').value = doc.name || '';
      $('modalDocFileId').value = doc.fileId || '';
      $('modalDocKeywords').value = (doc.readSheetKeywords || []).join(',');
      $('modalDocTargets').value = (doc.writeTargets || []).map(t => t.name + '|' + t.sheetName).join('\n');
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

      if (!name) { showToast('请输入文档名称', 'error'); return; }
      if (!fileId) { showToast('请输入 File ID', 'error'); return; }

      const writeTargets = targetsStr ? targetsStr.split('\n').filter(s => s.trim()).map((s, i) => {
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
        readSheetKeywords: keywords ? keywords.split(',').map(s => s.trim()).filter(Boolean) : ['客退', '退货'],
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
      showToast('文档已保存，点击下方"保存配置"生效');
    }

    let deleteTargetIdx = -1;

    function deleteDocument(idx) {
      deleteTargetIdx = idx;
      $('deleteModalText').textContent = '确认删除文档"' + currentConfig.documents[idx].name + '"？此操作需点击下方"保存配置"才会真正生效。';
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
        showToast('文档已删除，点击下方"保存配置"生效');
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
        // 仅在输入框为空时填充默认值，避免覆盖用户手动修改的内容
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
          showToast('✓ ' + data.message, 'success');
        } else {
          showToast('✗ ' + data.message, 'error');
        }
      } catch (err) {
        showToast('✗ 请求失败: ' + err.message, 'error');
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
          showToast('配置已保存');
          invalidateFrontendCache();
          loadSettings();
        } else {
          showToast('保存失败: ' + (data.error || ''), 'error');
        }
      } catch (err) {
        showToast('保存失败: ' + err.message, 'error');
      }
    }

    loadDocSelector('queryDocSelect');

    // 动态加载版本号
    (async function loadVersion() {
      try {
        const resp = await fetch('/api/version');
        const data = await resp.json();
        if (data.success && data.data && data.data.version) {
          const el = $('appVersion');
          if (el) el.textContent = 'v' + data.data.version;
        }
      } catch (err) {
        console.error('加载版本号失败:', err);
      }
    })();
  </script>
</body>
</html>

`;
// --- MD5 Implementation// --- MD5 Implementation// --- MD5 Implementation (pure JS, for Wangdian API signing) ---
function md5(str) {
  function rh(n) { var j, s = ''; for (j = 0; j <= 3; j++) s += ((n >> (j * 8 + 4)) & 0x0F).toString(16) + ((n >> (j * 8)) & 0x0F).toString(16); return s; }
  function ad(x, y) { var l = (x & 0xFFFF) + (y & 0xFFFF); var m = (x >> 16) + (y >> 16) + (l >> 16); return (m << 16) | (l & 0xFFFF); }
  function rl(n, c) { return (n << c) | (n >>> (32 - c)); }
  function cm(q, a, b, x, s, t) { return ad(rl(ad(ad(a, q), ad(x, t)), s), b); }
  function ff(a, b, c, d, x, s, t) { return cm((b & c) | (~b & d), a, b, x, s, t); }
  function gg(a, b, c, d, x, s, t) { return cm((b & d) | (c & ~d), a, b, x, s, t); }
  function hh(a, b, c, d, x, s, t) { return cm(b ^ c ^ d, a, b, x, s, t); }
  function ii(a, b, c, d, x, s, t) { return cm(c ^ (b | ~d), a, b, x, s, t); }
  function cv(s) { var u = unescape(encodeURIComponent(s)); var n = u.length; var w = []; for (var i = 0; i < n; i++) w[i >> 2] = (w[i >> 2] || 0) | (u.charCodeAt(i) << ((i % 4) * 8)); w[n >> 2] = (w[n >> 2] || 0) | (0x80 << ((n % 4) * 8)); var m = Math.ceil(n / 4) + 1; w[m * 16 - 2] = n * 8; return w; }
  var x = cv(str); var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
  for (var i = 0; i < x.length; i += 16) {
    var oa = a, ob = b, oc = c, od = d;
    a=ff(a,b,c,d,x[i],7,-680876936);d=ff(d,a,b,c,x[i+1],12,-389564586);c=ff(c,d,a,b,x[i+2],17,606105819);b=ff(b,c,d,a,x[i+3],22,-1044525330);
    a=ff(a,b,c,d,x[i+4],7,-176418897);d=ff(d,a,b,c,x[i+5],12,1200080426);c=ff(c,d,a,b,x[i+6],17,-1473231341);b=ff(b,c,d,a,x[i+7],22,-45705983);
    a=ff(a,b,c,d,x[i+8],7,1770035416);d=ff(d,a,b,c,x[i+9],12,-1958414417);c=ff(c,d,a,b,x[i+10],17,-42063);b=ff(b,c,d,a,x[i+11],22,-1990404162);
    a=ff(a,b,c,d,x[i+12],7,1804603682);d=ff(d,a,b,c,x[i+13],12,-40341101);c=ff(c,d,a,b,x[i+14],17,-1502002290);b=ff(b,c,d,a,x[i+15],22,1236535329);
    a=gg(a,b,c,d,x[i+1],5,-165796510);d=gg(d,a,b,c,x[i+6],9,-1069501632);c=gg(c,d,a,b,x[i+11],14,643717713);b=gg(b,c,d,a,x[i],20,-373897302);
    a=gg(a,b,c,d,x[i+5],5,-701558691);d=gg(d,a,b,c,x[i+10],9,38016083);c=gg(c,d,a,b,x[i+15],14,-660478335);b=gg(b,c,d,a,x[i+4],20,-405537848);
    a=gg(a,b,c,d,x[i+9],5,568446438);d=gg(d,a,b,c,x[i+14],9,-1019803690);c=gg(c,d,a,b,x[i+3],14,-187363961);b=gg(b,c,d,a,x[i+8],20,1163531501);
    a=gg(a,b,c,d,x[i+13],5,-1444681467);d=gg(d,a,b,c,x[i+2],9,-51403784);c=gg(c,d,a,b,x[i+7],14,1735328473);b=gg(b,c,d,a,x[i+12],20,-1926607734);
    a=hh(a,b,c,d,x[i+5],4,-378558);d=hh(d,a,b,c,x[i+8],11,-2022574463);c=hh(c,d,a,b,x[i+11],16,1839030562);b=hh(b,c,d,a,x[i+14],23,-35309556);
    a=hh(a,b,c,d,x[i+1],4,-1530992060);d=hh(d,a,b,c,x[i+4],11,1272893353);c=hh(c,d,a,b,x[i+7],16,-155497632);b=hh(b,c,d,a,x[i+10],23,-1094730640);
    a=hh(a,b,c,d,x[i+13],4,681279174);d=hh(d,a,b,c,x[i],11,-358537222);c=hh(c,d,a,b,x[i+3],16,-722521979);b=hh(b,c,d,a,x[i+6],23,76029189);
    a=hh(a,b,c,d,x[i+9],4,-640364487);d=hh(d,a,b,c,x[i+12],11,-421815835);c=hh(c,d,a,b,x[i+15],16,530742520);b=hh(b,c,d,a,x[i+2],23,-995338651);
    a=ii(a,b,c,d,x[i],6,-198630844);d=ii(d,a,b,c,x[i+7],10,1126891415);c=ii(c,d,a,b,x[i+14],15,-1416354905);b=ii(b,c,d,a,x[i+5],21,-57434055);
    a=ii(a,b,c,d,x[i+12],6,1700485571);d=ii(d,a,b,c,x[i+3],10,-1894986606);c=ii(c,d,a,b,x[i+10],15,-1051523);b=ii(b,c,d,a,x[i+1],21,-2054922799);
    a=ii(a,b,c,d,x[i+8],6,1873313359);d=ii(d,a,b,c,x[i+15],10,-30611744);c=ii(c,d,a,b,x[i+6],15,-1560198380);b=ii(b,c,d,a,x[i+13],21,1309151649);
    a=ii(a,b,c,d,x[i+4],6,-145523070);d=ii(d,a,b,c,x[i+11],10,-1120210379);c=ii(c,d,a,b,x[i+2],15,718787259);b=ii(b,c,d,a,x[i+9],21,-343485551);
    a=ad(a,oa);b=ad(b,ob);c=ad(c,oc);d=ad(d,od);
  }
  return rh(a)+rh(b)+rh(c)+rh(d);
}

const DEFAULT_CONFIG = {"documents":[{"id":"doc_demo","name":"电商售后DEMO演示","fileId":"ZBTKrbvmhXBq","readSheetKeywords":["客退","退货","理赔","换货","退款","工作表"],"writeTargets":[{"id":"target0","name":"客退登记表","sheetName":"工作表1"}]},{"name":"快递理赔登记表","fileId":"DWnhndXZoREdQSUJV","readSheetKeywords":["理赔","快递"],"writeTargets":[{"id":"target0","name":"快递理赔登记表","sheetName":"工作表1"}],"id":"doc1782201419594"}],"queryDefaultDocumentId":"doc_demo","writeDefaultDocumentId":"doc_demo","tencentDocs":{"apiKey":"","mcpUrl":"https://docs.qq.com/openapi/mcp"},"llm":{"provider":"deepseek","apiKey":"","baseUrl":"https://api.deepseek.com","model":"deepseek-chat"},"wangdian":{"sid":"","key":"","secret":"","salt":""},"cache":{"ttl":300000,"autoRefreshInterval":1800000}};

// 全局常量
const MAX_DESCRIPTION_LENGTH = 5000; // LLM 提取描述的最大字符数
const HEADER_SAMPLE_ROW_LIMIT = 50; // 读取表头采样时的最大行数
const MAX_COL_COUNT = 10; // 读取单元格数据时限制的最大列数
const EMPTY_ROW_BATCH_SIZE = 50;

// --- Shared Constants (mirror of local/src/constants.js, keep in sync) ---
const PLATFORMS = ['京东','淘宝','天猫','拼多多','抖音','快手','小红书','微信','有赞','微店','苏宁','唯品会','当当','1688','阿里'];
const FIELD_ALIASES = {'单号':'快递单号','金额':'货值(元)','价格':'货值(元)','日期':'登记日期','数量':'正品数量','理赔':'理赔类型','运费':'运费(元)','货值':'货值(元)'};
const CLAIM_TYPES = ['丢件','破损','少件','漏发','错发','退件','拒收','地址错误','超区','无人收件'];
const TRADE_STATUS_MAP = {4:'线下退款',5:'已取消',6:'待审核',10:'未付款',55:'已审核',95:'已发货',110:'已完成'};
const WDT_FIELD_MAP = {'订单号':'src_tids','原始单号':'src_tids','快递单号':'logistics_no','物流单号':'logistics_no','店铺名称':'parsedShopName','店铺':'parsedShopName','平台':'platform','云仓':'warehouse_name','仓库':'warehouse_name'};
const LOGISTICS_NO_REGEX = /^[A-Za-z0-9]{8,}$/;

// --- MCP Client (Workers fetch) ---
async function callMcpApi(mcpUrl, apiKey, method, params, sessionId) {
  const headers = { 'Content-Type': 'application/json', 'Authorization': apiKey };
  if (sessionId) headers['Mcp-Session-Id'] = sessionId;
  const resp = await fetch(mcpUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ jsonrpc: '2.0', id: Date.now().toString(), method: method, params: params })
  });
  const newSid = resp.headers.get('mcp-session-id') || sessionId;
  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error('MCP API 返回错误状态码 ' + resp.status + ': ' + errText.substring(0, 200));
  }
  const data = await resp.json();
  if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
  return { result: data.result, sessionId: newSid };
}

async function initMcpSession(mcpUrl, apiKey) {
  const init = await callMcpApi(mcpUrl, apiKey, 'initialize', {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'ecomtools-worker', version: '1.0.0' }
  }, null);
  const sid = init.sessionId;
  await fetch(mcpUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': apiKey, 'Mcp-Session-Id': sid },
    body: JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized', params: {} })
  });
  return sid;
}

async function callToolWithSession(mcpUrl, apiKey, sessionId, toolName, args) {
  const { result } = await callMcpApi(mcpUrl, apiKey, 'tools/call', { name: toolName, arguments: args }, sessionId);
  return result;
}

function extractText(toolResult) {
  if (!toolResult || !toolResult.content) return '';
  let text = '';
  for (const c of toolResult.content) {
    if (c.type === 'text') {
      try {
        const inner = JSON.parse(c.text);
        if (inner.csv_data) return inner.csv_data;
        if (inner.content) text += inner.content;
        else text += c.text;
      } catch (e) { text += c.text; }
    }
  }
  return text;
}

async function getSheetList(mcpUrl, apiKey, sessionId, fileId) {
  const result = await callToolWithSession(mcpUrl, apiKey, sessionId, 'sheet.get_sheet_info', { file_id: fileId });
  const text = extractText(result);
  try {
    const parsed = JSON.parse(text);
    if (parsed.sheets) return parsed.sheets;
  } catch (e) { /* 响应非JSON格式，返回空数组 */ }
  return [];
}

async function readSheetCsv(mcpUrl, apiKey, sessionId, fileId, sheetId, rowCount, colCount, startRow = 0) {
  const result = await callToolWithSession(mcpUrl, apiKey, sessionId, 'sheet.get_cell_data', {
    file_id: fileId, sheet_id: sheetId,
    start_row: Math.max(0, startRow), end_row: rowCount,
    start_col: 0, end_col: Math.min(colCount, MAX_COL_COUNT),
    return_csv: true
  });
  return extractText(result);
}

// 从 startRow 开始查找第一个全空行，用于追加写入
async function findNextEmptyRow(mcpUrl, apiKey, sessionId, fileId, sheetId, startRow, colCount, maxRowCount) {
  let currentRow = startRow;
  while (currentRow < maxRowCount) {
    const endRow = Math.min(currentRow + EMPTY_ROW_BATCH_SIZE, maxRowCount);
    const csv = await readSheetCsv(mcpUrl, apiKey, sessionId, fileId, sheetId, endRow, colCount, currentRow);
    const allLines = csv.split('\n');
    const expectedRows = endRow - currentRow;
    for (let i = 0; i < Math.min(allLines.length, expectedRows); i++) {
      const cells = parseCsvLine(allLines[i]);
      if (cells.every(c => !c || !c.trim())) {
        return currentRow + i;
      }
    }
    currentRow += EMPTY_ROW_BATCH_SIZE;
  }
  return maxRowCount;
}

function parseCsvLine(line) {
  const cells = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"' && line[i + 1] === '"') { current += '"'; i++; }
      else if (ch === '"') { inQuotes = false; }
      else { current += ch; }
    } else {
      if (ch === '"') { inQuotes = true; }
      else if (ch === ',') { cells.push(current.trim()); current = ''; }
      else { current += ch; }
    }
  }
  cells.push(current.trim());
  return cells;
}

function parseSheetCsv(csvText, sheetName) {
  const lines = csvText.split('\n').filter(l => l.trim());
  if (lines.length < 2) return [];
  const headerCells = parseCsvLine(lines[0]);
  const trackingIdx = headerCells.findIndex(h => h.includes('快递单号') || h.includes('单号'));
  if (trackingIdx === -1) return [];
  const dateIdx = headerCells.findIndex(h => h.includes('登记日期') || h.includes('日期'));
  const productIdx = headerCells.findIndex(h => h.includes('商品名称') || h.includes('货品'));
  const genuineIdx = headerCells.findIndex(h => h.includes('正品'));
  const defectIdx = headerCells.findIndex(h => h.includes('次品') || h.includes('残品'));
  const defectNoteIdx = headerCells.findIndex(h => h.includes('次品备注') || h.includes('残品备注'));
  const remarkIdx = headerCells.findIndex(h => h === '备注');
  const records = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i]);
    const trackingNo = (cells[trackingIdx] || '').trim();
    if (!trackingNo) continue;
    records.push({
      _source: sheetName,
      '登记日期': dateIdx >= 0 ? (cells[dateIdx] || '').trim() : '',
      '快递单号': trackingNo,
      '商品名称': productIdx >= 0 ? (cells[productIdx] || '').trim() : '',
      '正品数量': genuineIdx >= 0 ? (cells[genuineIdx] || '').trim() : '',
      '次品数量': defectIdx >= 0 ? (cells[defectIdx] || '').trim() : '',
      '次品备注': defectNoteIdx >= 0 ? (cells[defectNoteIdx] || '').trim() : '',
      '备注': remarkIdx >= 0 ? (cells[remarkIdx] || '').trim() : ''
    });
  }
  return records;
}

async function fetchData(docConfig, tencentDocsConfig) {
  const sid = await initMcpSession(tencentDocsConfig.mcpUrl, tencentDocsConfig.apiKey);
  const sheets = await getSheetList(tencentDocsConfig.mcpUrl, tencentDocsConfig.apiKey, sid, docConfig.fileId);
  const keywords = docConfig.readSheetKeywords || ['客退', '退货'];
  const dataSheets = sheets.filter(sheet => keywords.some(kw => sheet.sheet_name.includes(kw)));

  // 并行读取所有匹配的 sheet，提升多表文档的加载速度
  const results = await Promise.allSettled(
    dataSheets.map(sheet =>
      readSheetCsv(tencentDocsConfig.mcpUrl, tencentDocsConfig.apiKey, sid, docConfig.fileId, sheet.sheet_id, sheet.row_count, sheet.col_count)
        .then(csv => parseSheetCsv(csv, sheet.sheet_name))
    )
  );

  const allRecords = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i].status === 'fulfilled') {
      allRecords.push(...results[i].value);
    } else if (results[i].status === 'rejected') {
      console.error('读取失败 [' + dataSheets[i].sheet_name + ']: ' + (results[i].reason && results[i].reason.message));
    }
  }
  return allRecords;
}

function searchRecords(records, query) {
  if (!query || query.trim() === '') return [];
  const q = query.trim().toLowerCase();
  return records.filter(r => (r['快递单号'] || '').toLowerCase().includes(q));
}

async function writeRow(tencentDocsConfig, sessionId, fileId, sheetId, startRow, values) {
  // 腾讯文档 sheet.set_range_value 接口中：
  // - row 为 0-based（从 0 开始）
  // - col 为 0-based（从 0 开始）
  const cellValues = values.map((val, idx) => ({
    row: startRow,
    col: idx,
    value_type: 'STRING',
    string_value: String(val)
  }));
  const result = await callToolWithSession(tencentDocsConfig.mcpUrl, tencentDocsConfig.apiKey, sessionId, 'sheet.set_range_value', {
    file_id: fileId, sheet_id: sheetId, values: cellValues
  });
  const text = extractText(result);
  try {
    const parsed = JSON.parse(text);
    return { updateNum: parsed.update_num || cellValues.length };
  } catch (e) { return { updateNum: cellValues.length }; }
}

// --- Wangdian (旺店通) API Client (CF Worker adapted) ---
const WDT_BASE_TIME = 1325347200; // 2012-01-01 00:00:00
const WDT_API_URL = 'https://wdt.wangdian.cn/openapi';

function calcWdtSign(secret, params) {
  const sortedKeys = Object.keys(params).sort();
  let signStr = secret;
  for (const k of sortedKeys) {
    signStr += k + params[k];
  }
  signStr += secret;
  return md5(signStr);
}

async function callWdtApi(credentials, method, bodyParams) {
  const { sid, key, secret, salt } = credentials;
  const timestamp = Math.floor(Date.now() / 1000) - WDT_BASE_TIME;
  const bodyContent = JSON.stringify([bodyParams]);

  const signParams = {
    body: bodyContent,
    calc_total: '1',
    key: key,
    method: method,
    page_no: '0',
    page_size: '40',
    salt: salt,
    sid: sid,
    timestamp: String(timestamp),
    v: '1.0',
  };

  const sign = calcWdtSign(secret, signParams);

  const queryParams = {
    sid, key, salt, method,
    timestamp: String(timestamp), v: '1.0', sign,
    page_size: '40', page_no: '0', calc_total: '1'
  };

  const queryString = Object.entries(queryParams)
    .map(([k, val]) => encodeURIComponent(k) + '=' + encodeURIComponent(String(val)))
    .join('&');

  const resp = await fetch(WDT_API_URL + '?' + queryString, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: bodyContent
  });
  const text = await resp.text();
  try {
    return JSON.parse(text);
  } catch (e) {
    throw new Error('旺店通API返回非JSON: ' + text.substring(0, 200));
  }
}

function parseShopInfo(fullShopName) {
  if (!fullShopName) return { platform: '', shopName: '' };
  let platform = '';
  let shopName = fullShopName;
  for (const p of PLATFORMS) {
    if (fullShopName.startsWith(p) || fullShopName.includes(' ' + p) || fullShopName.includes(p + ' ')) {
      platform = p;
      break;
    }
  }
  const parts = fullShopName.split(/\s+/);
  if (parts.length >= 2) {
    if (!platform) {
      platform = parts[0].substring(0, 2);
    }
    shopName = parts.slice(1).join(' ');
  }
  shopName = shopName.replace(/\d+$/, '').trim();
  return { platform, shopName };
}

async function queryWdtOrder(credentials, query) {
  const q = String(query || '').trim();
  if (!q) {
    return { success: false, error: '查询内容不能为空' };
  }
  let result = await callWdtApi(credentials, 'sales.TradeQuery.queryWithDetail', {
    logistics_no: q
  });
  if (!result.data || !result.data.order || result.data.order.length === 0) {
    result = await callWdtApi(credentials, 'sales.TradeQuery.queryWithDetail', {
      src_tid: q
    });
  }
  if (result.status !== 0) {
    return { success: false, error: result.message || '旺店通API返回错误' };
  }
  const orders = (result.data && result.data.order) || [];
  if (orders.length === 0) {
    return { success: true, total: 0, orders: [] };
  }
  const parsedOrders = orders.map(o => {
    const shopInfo = parseShopInfo(o.shop_name);
    return {
      trade_no: o.trade_no || '',
      src_tids: o.src_tids || '',
      logistics_no: o.logistics_no || '',
      logistics_name: o.logistics_name || '',
      shop_name: o.shop_name || '',
      shop_no: o.shop_no || '',
      platform: shopInfo.platform,
      parsedShopName: shopInfo.shopName,
      trade_status: o.trade_status,
      trade_time: o.trade_time || '',
      consign_time: o.consign_time || '',
      stockout_no: o.stockout_no || '',
      warehouse_no: o.warehouse_no || '',
      goods_count: o.goods_count || 0,
      goods_amount: o.goods_amount || 0,
      receiver_area: o.receiver_area || '',
      receiver_name: o.receiver_name || '',
      receiver_mobile: o.receiver_mobile || ''
    };
  });
  return { success: true, total: parsedOrders.length, orders: parsedOrders };
}

/**
 * 查询仓库名称
 */
async function queryWarehouse(credentials, warehouseNo) {
  if (!warehouseNo) return '';
  try {
    const result = await callWdtApi(credentials, 'setting.Warehouse.queryWarehouse', {
      warehouse_no: warehouseNo
    });
    if (result.status === 0 && result.data && result.data.length > 0) {
      return result.data[0].warehouse_name || warehouseNo;
    }
  } catch (err) {
    console.error('[wdt] 查询仓库失败:', err.message);
  }
  return warehouseNo;
}

/**
 * 从描述文本中自动匹配旺店通订单
 * 遍历描述中的每个 token，提取可能的物流单号并查询旺店通，
 * 返回第一个匹配到的订单对象（或 null）。
 */
async function autoMatchWdtOrder(credentials, description) {
  const tokens = description.split(/\s+/);
  for (const token of tokens) {
    const cleaned = token.replace(/^[^\w]+/, '').replace(/[^\w]+$/, '');
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
      } catch (e) { /* 忽略旺店通查询错误 */ }
    }
  }
  return null;
}

/**
 * 将旺店通订单数据合并到提取结果中
 * 旺店通数据来自真实订单，优先级高于 LLM/规则提取，因此会覆盖已有值。
 * 返回更新后的 nonEmptyCount 和 missing。
 */
function mergeWdtData(headers, extractResult, wdtMatch) {
  for (let i = 0; i < headers.length; i++) {
    const h = headers[i];
    const wdtProp = WDT_FIELD_MAP[h];
    if (wdtProp && wdtMatch[wdtProp] && String(wdtMatch[wdtProp]).trim()) {
      extractResult.values[i] = wdtMatch[wdtProp];
    }
  }
  // 同步 raw，确保预览和后续处理一致
  for (let i = 0; i < headers.length; i++) {
    extractResult.raw[headers[i]] = extractResult.values[i];
  }
  extractResult.nonEmptyCount = extractResult.values.filter(v => v && v.trim()).length;
  extractResult.missing = headers.filter((h, i) => !extractResult.values[i] || !extractResult.values[i].trim());
}

// --- LLM Client (Workers fetch) ---
async function chatJSON(llmConfig, systemPrompt, userMessage) {
  if (!llmConfig.apiKey && llmConfig.provider !== 'ollama') {
    throw new Error('LLM API Key 未配置 (provider: ' + llmConfig.provider + ')');
  }
  const url = llmConfig.baseUrl.replace(/\/+$/, '') + '/chat/completions';
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + (llmConfig.apiKey || 'ollama') },
    body: JSON.stringify({
      model: llmConfig.model,
      messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userMessage }],
      temperature: 0, response_format: { type: 'json_object' }, max_tokens: 2048
    })
  });
  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error('LLM API 错误: ' + resp.status + ' ' + errText.substring(0, 200));
  }
  const data = await resp.json();
  const content = data.choices[0].message.content;
  if (!content || !content.trim()) throw new Error('LLM 返回空内容，请重试');
  try { return JSON.parse(content); }
  catch (e) {
    const match = content.match(/\{[\s\S]*\}/);
    if (match) {
      try { return JSON.parse(match[0]); }
      catch (e2) { throw new Error('LLM 输出无法解析为 JSON: ' + content.substring(0, 200)); }
    }
    throw new Error('LLM 输出无法解析为 JSON: ' + content.substring(0, 200));
  }
}

async function testLLMConnection(llmConfig) {
  try {
    if (!llmConfig.apiKey && llmConfig.provider !== 'ollama') {
      return { ok: false, message: 'LLM API Key 未配置' };
    }
    const url = llmConfig.baseUrl.replace(/\/+$/, '') + '/chat/completions';
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + (llmConfig.apiKey || 'ollama') },
      body: JSON.stringify({
        model: llmConfig.model,
        messages: [{ role: 'user', content: '请回复"ok"' }],
        max_tokens: 10, temperature: 0
      })
    });
    if (!resp.ok) return { ok: false, message: 'API 错误: ' + resp.status };
    const data = await resp.json();
    return { ok: true, message: '连接成功，模型回复: ' + data.choices[0].message.content };
  } catch (err) { return { ok: false, message: err.message }; }
}

// --- Extractor ---
function buildSystemPrompt(headers, tableName) {
  return '你是一个电商售后数据录入助手。\n' +
    '用户要向"' + tableName + '"写入一条新记录。\n' +
    '表格的列标题如下：\n' +
    JSON.stringify(headers) + '\n\n' +
    '【输入格式说明】\n' +
    '用户通常以空格分隔不同字段，字段名可能直接出现在输入中。\n' +
    '例如"订单号123456789"表示"订单号"列的值为"123456789"。\n' +
    '例如"快递单号 SF1234567890"表示"快递单号"列的值为"SF1234567890"。\n\n' +
    '【输出规则】\n' +
    '1. 只输出 JSON，不要输出任何解释、markdown 标记或多余文字。\n' +
    '2. JSON 的 key 必须与上面的列标题完全一致。\n' +
    '3. 如果某个列的值无法从描述中提取，对应值填空字符串 ""。\n' +
    '4. 不要编造未提及的信息。\n' +
    '5. 金额字段只填数字，不带"元"字。\n' +
    '6. 日期字段格式为 YYYY-MM-DD。\n' +
    '7. 识别输入中直接出现的字段名（如"订单号""快递单号""货值"等），提取其后的值。\n\n' +
    '【常见别名】\n' +
    '- "单号" → 快递单号\n' +
    '- "金额/价格" → 货值(元)\n' +
    '- "日期" → 登记日期\n' +
    '- "理赔" → 理赔类型（如"丢件理赔"表示理赔类型为"丢件"）\n' +
    '- "运费" → 运费(元)\n\n' +
    '【示例1】\n' +
    '列标题：["登记日期","店铺名称","平台","订单号","快递单号","理赔类型","货值(元)","运费(元)","备注"]\n' +
    '用户输入：华强北数码3C店 淘宝 订单号123456789 快递单号SF1234567890 丢件理赔货值399元 运费20元\n' +
    '输出：{"登记日期":"","店铺名称":"华强北数码3C店","平台":"淘宝","订单号":"123456789","快递单号":"SF1234567890","理赔类型":"丢件","货值(元)":"399","运费(元)":"20","备注":""}\n\n' +
    '【示例2】\n' +
    '列标题：["登记日期","快递单号","商品名称","正品数量","次品数量","次品备注","备注"]\n' +
    '用户输入：2026-06-23 快递单号YT9876543210 蓝牙耳机 正品2 次品1 包装破损\n' +
    '输出：{"登记日期":"2026-06-23","快递单号":"YT9876543210","商品名称":"蓝牙耳机","正品数量":"2","次品数量":"1","次品备注":"包装破损","备注":""}\n\n' +
    '【示例3】\n' +
    '列标题：["登记日期","店铺名称","平台","订单号","快递单号","理赔类型","货值(元)","运费(元)","备注"]\n' +
    '用户输入：9831745985570 丢件理赔54.9元 运费7元\n' +
    '输出：{"登记日期":"","店铺名称":"","平台":"","订单号":"","快递单号":"9831745985570","理赔类型":"丢件","货值(元)":"54.9","运费(元)":"7","备注":""}\n\n' +
    '【示例4】\n' +
    '列标题：["登记日期","店铺名称","平台","订单号","快递单号","理赔类型","货值(元)","运费(元)","备注"]\n' +
    '用户输入：店铺 和旭数码 平台 拼多多 订单号 9988776655 快递单号 JJD00998877 破损理赔 货值 158 运费 12\n' +
    '输出：{"登记日期":"","店铺名称":"和旭数码","平台":"拼多多","订单号":"9988776655","快递单号":"JJD00998877","理赔类型":"破损","货值(元)":"158","运费(元)":"12","备注":""}';
}

function cleanValue(val) {
  if (!val) return '';
  let v = val.trim();
  v = v.replace(/元$/, '');
  v = v.replace(/^[:：]+/, '');
  return v.trim();
}

// 去除表头中的括号后缀用于匹配，如 "货值(元)" → "货值"
function stripHeaderSuffix(h) {
  return h.replace(/[（(].*?[)）]\s*$/, '').trim();
}

function ruleBasedExtract(headers, description) {
  const result = {};
  headers.forEach(h => { result[h] = ''; });

  // 构建匹配表：原始表头 → 去后缀表头
  const headerMap = {};
  headers.filter(h => h && h.length > 0).forEach(h => {
    headerMap[h] = h;
    const stripped = stripHeaderSuffix(h);
    if (stripped !== h) headerMap[stripped] = h;
  });

  // 按长度降序排列（包括去后缀的版本）
  const sortedHeaders = Object.keys(headerMap).sort((a, b) => b.length - a.length);

  const aliases = FIELD_ALIASES;

  // 理赔类型关键词
  const claimTypes = CLAIM_TYPES;

  const tokens = description.split(/\s+/).filter(t => t.length > 0);
  let currentHeader = null;
  let valueParts = [];
  function flushCurrent() {
    if (currentHeader && valueParts.length > 0) {
      result[currentHeader] = cleanValue(valueParts.join(' '));
    }
    valueParts = [];
  }
  for (const token of tokens) {
    let matchedHeader = null;
    let remainder = '';

    // 1. 精确匹配表头
    for (const h of sortedHeaders) {
      if (token === h) { matchedHeader = headerMap[h]; remainder = ''; break; }
    }
    // 2. 表头前缀匹配（如 "快递单号SF123" → 快递单号 + SF123）
    if (!matchedHeader) {
      for (const h of sortedHeaders) {
        if (token.length > h.length && token.startsWith(h)) {
          matchedHeader = headerMap[h]; remainder = token.substring(h.length); break;
        }
      }
    }
    // 3. 别名匹配
    if (!matchedHeader) {
      for (const [alias, target] of Object.entries(aliases)) {
        if (headers.includes(target)) {
          if (token === alias) { matchedHeader = target; remainder = ''; break; }
          if (token.length > alias.length && token.startsWith(alias)) {
            matchedHeader = target; remainder = token.substring(alias.length); break;
          }
        }
      }
    }
    // 4. 分隔符匹配（如 "货值:399"）
    if (!matchedHeader) {
      for (const h of sortedHeaders) {
        const idx = token.indexOf(h);
        if (idx >= 0 && idx + h.length < token.length) {
          const after = token.substring(idx + h.length);
          if (/^[:：\-—=]/.test(after)) {
            matchedHeader = headerMap[h]; remainder = after.replace(/^[:：\-—=]+/, ''); break;
          }
        }
      }
    }
    // 5. 特殊模式：理赔类型+金额（如 "丢件理赔54.9元"）
    if (!matchedHeader) {
      for (const ct of claimTypes) {
        if (token.includes(ct)) {
          const claimHeader = headers.find(h => h.includes('理赔类型'));
          if (claimHeader) {
            result[claimHeader] = ct;
            // 提取剩余部分中的金额
            const rest = token.replace(ct, '').replace('理赔', '');
            const amountMatch = rest.match(/(\d+\.?\d*)/);
            if (amountMatch) {
              const amountHeader = headers.find(h => h.includes('货值'));
              if (amountHeader) result[amountHeader] = amountMatch[1];
            }
            matchedHeader = null; // 已处理，不进入常规流程
            break;
          }
        }
      }
    }
    // 6. 特殊模式：字段名+数字（如 "运费7元" 或 "运费7"）
    if (!matchedHeader) {
      for (const h of sortedHeaders) {
        const stripped = stripHeaderSuffix(headerMap[h] || h);
        if (stripped.length >= 2 && token.startsWith(stripped) && token.length > stripped.length) {
          const after = token.substring(stripped.length);
          if (/^\d+\.?\d*元?$/.test(after)) {
            matchedHeader = headerMap[h] || h; remainder = after; break;
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

async function extractRowData(llmConfig, headers, tableName, userDescription) {
  const t0 = Date.now();
  let method = 'none';
  let raw = null;
  let llmError = null;
  const llmAvailable = (llmConfig.apiKey && llmConfig.apiKey.trim()) || llmConfig.provider === 'ollama';
  if (llmAvailable) {
    try {
      const systemPrompt = buildSystemPrompt(headers, tableName);
      raw = await chatJSON(llmConfig, systemPrompt, userDescription);
      method = 'llm';
    } catch (err) {
      llmError = err.message;
    }
  } else {
    llmError = 'LLM API Key 未配置';
  }
  if (!raw) {
    raw = ruleBasedExtract(headers, userDescription);
    method = 'rule';
  } else {
    // LLM返回结果后，仅当存在空字段时才用rule-based补充，避免不必要的计算
    const hasEmpty = headers.some(h => !raw[h] || String(raw[h]).trim() === '');
    if (hasEmpty) {
      const ruleResult = ruleBasedExtract(headers, userDescription);
      for (const h of headers) {
        if ((!raw[h] || String(raw[h]).trim() === '') && ruleResult[h] && String(ruleResult[h]).trim()) {
          raw[h] = ruleResult[h];
        }
      }
      method = 'llm+rule';
    } else {
      method = 'llm';
    }
  }
  // 自动填充登记日期为当天日期（若表头包含且值为空）
  const today = new Date();
  const todayStr = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
  const dateHeader = headers.find(h => h === '登记日期' || h.includes('日期'));
  if (dateHeader && (!raw[dateHeader] || String(raw[dateHeader]).trim() === '')) {
    raw[dateHeader] = todayStr;
  }

  const values = headers.map(h => {
    const v = raw[h];
    if (v === undefined || v === null) return '';
    return String(v);
  });
  const missing = headers.filter(h => !raw[h] || String(raw[h]).trim() === '');
  const parseTime = Date.now() - t0;
  const nonEmptyCount = values.filter(v => v && v.trim()).length;
  return { values, missing, raw, method, parseTime, llmError, nonEmptyCount };
}

function buildPreviewText(headers, values) {
  const lines = [];
  for (let i = 0; i < headers.length; i++) {
    const val = values[i] || '(空)';
    lines.push('  ' + headers[i] + ': ' + val);
  }
  return lines.join('\n');
}

// --- Config ---
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

async function loadConfig(env) {
  let cfg;
  try {
    const stored = await env.CONFIG.get('config');
    if (stored) cfg = deepMerge(DEFAULT_CONFIG, JSON.parse(stored));
    else cfg = JSON.parse(JSON.stringify(DEFAULT_CONFIG));

    // 向后兼容：旧版 defaultDocumentId 拆分为查询/写入默认文档
    if (cfg.defaultDocumentId && !cfg.queryDefaultDocumentId && !cfg.writeDefaultDocumentId) {
      cfg.queryDefaultDocumentId = cfg.defaultDocumentId;
      cfg.writeDefaultDocumentId = cfg.defaultDocumentId;
    }
  } catch (e) {
    console.error('[config] 加载配置失败:', e.message);
    cfg = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  }
  if (!cfg.wangdian) cfg.wangdian = { sid: '', key: '', secret: '', salt: '' };
  if (env.WDT_SID) cfg.wangdian.sid = env.WDT_SID;
  if (env.WDT_KEY) cfg.wangdian.key = env.WDT_KEY;
  if (env.WDT_SECRET) cfg.wangdian.secret = env.WDT_SECRET;
  if (env.WDT_SALT) cfg.wangdian.salt = env.WDT_SALT;
  return cfg;
}

async function saveConfig(env, config) {
  await env.CONFIG.put('config', JSON.stringify(config));
}

function getDocumentById(config, docId) {
  return config.documents.find(d => d.id === docId) || null;
}

// --- HTTP Helpers ---
function maskApiKey(key) {
  if (!key) return key;
  return key.substring(0, 4) + '****' + key.substring(key.length - 4);
}

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

// --- Route Handler ---
export default {
  async fetch(request, env) {
    try {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
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

    // Static HTML
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(HTML, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    }

    // Version API
    if (url.pathname === '/api/version' && request.method === 'GET') {
      return jsonResponse({ success: true, data: { version: env.VERSION || '2.2.1' } });
    }

    // Settings password API
    if (url.pathname === '/api/settings/password-status' && request.method === 'GET') {
      const hasPassword = !!(env.SETTINGS_PASSWORD && String(env.SETTINGS_PASSWORD).trim());
      return jsonResponse({ success: true, data: { hasPassword } });
    }

    if (url.pathname === '/api/settings/password' && request.method === 'POST') {
      const body = await request.json();
      const action = body.action;
      const password = String(body.password || '').trim();
      if (action === 'set') {
        return jsonResponse({ success: false, error: 'Cloudflare Workers 环境变量为只读。请通过 Cloudflare Workers 控制台 / secrets 设置 SETTINGS_PASSWORD，无法通过此接口设置密码。' }, 400);
      }
      if (action === 'verify') {
        const current = env.SETTINGS_PASSWORD || '';
        if (!current) {
          return jsonResponse({ success: false, error: '尚未设置访问密码' }, 400);
        }
        if (password === String(current)) {
          return jsonResponse({ success: true, message: '验证通过' });
        }
        return jsonResponse({ success: false, error: '密码错误' }, 401);
      }
      return jsonResponse({ success: false, error: '未知操作' }, 400);
    }

    // GET /api/config
    if (url.pathname === '/api/config' && request.method === 'GET') {
      const safeConfig = JSON.parse(JSON.stringify(config));
      if (safeConfig.tencentDocs) safeConfig.tencentDocs.apiKey = maskApiKey(safeConfig.tencentDocs.apiKey);
      if (safeConfig.llm) safeConfig.llm.apiKey = maskApiKey(safeConfig.llm.apiKey);
      return jsonResponse({ success: true, data: safeConfig });
    }

    // PUT /api/config
    if (url.pathname === '/api/config' && request.method === 'PUT') {
      const body = await request.json();
      try {
        const newConfig = JSON.parse(JSON.stringify(config));
        if (body.documents) newConfig.documents = body.documents;
        newConfig.queryDefaultDocumentId = body.queryDefaultDocumentId || config.queryDefaultDocumentId;
        newConfig.writeDefaultDocumentId = body.writeDefaultDocumentId || config.writeDefaultDocumentId;
        if ('defaultDocumentId' in newConfig) delete newConfig.defaultDocumentId;
        if (body.cache) newConfig.cache = body.cache;
        if (body.tencentDocs) {
          newConfig.tencentDocs = {
            apiKey: (body.tencentDocs.apiKey && !body.tencentDocs.apiKey.includes('****')) ? body.tencentDocs.apiKey : config.tencentDocs.apiKey,
            mcpUrl: body.tencentDocs.mcpUrl || config.tencentDocs.mcpUrl
          };
        }
        if (body.llm) {
          newConfig.llm = {
            provider: body.llm.provider || config.llm.provider,
            customProviderName: body.llm.customProviderName !== undefined
              ? body.llm.customProviderName : config.llm.customProviderName,
            apiKey: (body.llm.apiKey && !body.llm.apiKey.includes('****')) ? body.llm.apiKey : config.llm.apiKey,
            baseUrl: body.llm.baseUrl || config.llm.baseUrl,
            model: body.llm.model || config.llm.model
          };
        }
        await saveConfig(env, newConfig);
        return jsonResponse({ success: true, message: '配置已保存' });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // GET /api/documents
    if (url.pathname === '/api/documents' && request.method === 'GET') {
      const docs = config.documents.map(d => ({
        id: d.id, name: d.name,
        queryDefault: d.id === config.queryDefaultDocumentId,
        writeDefault: d.id === config.writeDefaultDocumentId,
        writeTargetCount: (d.writeTargets || []).length
      }));
      return jsonResponse({ success: true, data: docs });
    }

    // GET /api/search
    if (url.pathname === '/api/search' && request.method === 'GET') {
      const query = url.searchParams.get('q') || '';
      const docId = url.searchParams.get('docId') || config.queryDefaultDocumentId;
      const doc = getDocumentById(config, docId);
      if (!doc) return jsonResponse({ success: false, error: '未找到指定文档' }, 400);
      try {
        const records = await fetchData(doc, config.tencentDocs);
        const results = searchRecords(records, query);
        return jsonResponse({
          success: true, query: query, docName: doc.name, total: results.length,
          data: results.map(r => ({
            source: r._source,
            '登记日期': r['登记日期'] || '', '快递单号': r['快递单号'] || '',
            '商品名称': r['商品名称'] || '', '正品数量': r['正品数量'] || '',
            '次品数量': r['次品数量'] || '', '次品备注': r['次品备注'] || '',
            '备注': r['备注'] || ''
          }))
        });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // GET /api/refresh
    if (url.pathname === '/api/refresh' && request.method === 'GET') {
      const docId = url.searchParams.get('docId') || config.queryDefaultDocumentId;
      const doc = getDocumentById(config, docId);
      if (!doc) return jsonResponse({ success: false, error: '未找到指定文档' }, 400);
      try {
        const records = await fetchData(doc, config.tencentDocs);
        return jsonResponse({ success: true, message: '数据刷新成功', total: records.length });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // GET /api/health
    if (url.pathname === '/api/health' && request.method === 'GET') {
      return jsonResponse({ status: 'ok', documents: config.documents.length });
    }

    // GET /api/wdt/query
    if (url.pathname === '/api/wdt/query' && request.method === 'GET') {
      const q = url.searchParams.get('q') || '';
      if (!q.trim()) return jsonResponse({ success: false, error: '查询内容不能为空' }, 400);
      const wdtCfg = config.wangdian || {};
      if (!wdtCfg.sid || !wdtCfg.key || !wdtCfg.secret || !wdtCfg.salt) {
        return jsonResponse({ success: false, error: '旺店通API未配置，请在环境变量或配置文件中设置WDT_SID/WDT_KEY/WDT_SECRET/WDT_SALT' }, 400);
      }
      try {
        const result = await queryWdtOrder(wdtCfg, q);
        return jsonResponse(result);
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // GET /api/write/headers
    if (url.pathname === '/api/write/headers' && request.method === 'GET') {
      const docId = url.searchParams.get('docId') || config.writeDefaultDocumentId;
      const targetId = url.searchParams.get('targetId');
      const doc = getDocumentById(config, docId || config.writeDefaultDocumentId);
      if (!doc) return jsonResponse({ success: false, error: '未找到指定文档' }, 400);
      const target = (doc.writeTargets || []).find(t => t.id === targetId);
      if (!target) return jsonResponse({ success: false, error: '未找到指定的写入目标表格' }, 400);
      try {
        const targetFileId = target.fileId || doc.fileId;
        const sid = await initMcpSession(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey);
        const sheets = await getSheetList(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId);
        const sheet = sheets.find(s => s.sheet_name === target.sheetName) || sheets[0];
        if (!sheet) return jsonResponse({ success: false, error: '文档中未找到任何工作表' }, 400);
        const csv = await readSheetCsv(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId, sheet.sheet_id, Math.min(sheet.row_count, HEADER_SAMPLE_ROW_LIMIT), sheet.col_count);
        const allLines = csv.split('\n');
        const lines = allLines.filter(l => l.trim());
        if (lines.length === 0) return jsonResponse({ success: false, error: '工作表为空' }, 400);
        const headers = parseCsvLine(lines[0]);
        // 去除标题行末尾连续的空列，避免写入时产生多余空列导致视觉错位
        while (headers.length > 0 && !headers[headers.length - 1].trim()) {
          headers.pop();
        }
        return jsonResponse({
          success: true,
          data: { headers: headers, sheetName: sheet.sheet_name, sheetId: sheet.sheet_id, targetFileId: targetFileId, rowCount: sheet.row_count, colCount: sheet.col_count, existingDataLines: lines.length - 1 }
        });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // POST /api/write/extract
    if (url.pathname === '/api/write/extract' && request.method === 'POST') {
      const body = await request.json();
      const docId = body.docId || config.writeDefaultDocumentId;
      const targetId = body.targetId;
      const description = body.description;
      const doc = getDocumentById(config, docId || config.writeDefaultDocumentId);
      if (!doc) return jsonResponse({ success: false, error: '未找到指定文档' }, 400);
      const target = (doc.writeTargets || []).find(t => t.id === targetId);
      if (!target) return jsonResponse({ success: false, error: '未找到指定的写入目标表格' }, 400);
      if (!description || !description.trim()) return jsonResponse({ success: false, error: '请输入描述内容' }, 400);
      if (description.length > MAX_DESCRIPTION_LENGTH) return jsonResponse({ success: false, error: '描述内容过长，最大支持 ' + MAX_DESCRIPTION_LENGTH + ' 个字符' }, 400);
      try {
        const targetFileId = target.fileId || doc.fileId;
        const sid = await initMcpSession(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey);
        const sheets = await getSheetList(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId);
        const sheet = sheets.find(s => s.sheet_name === target.sheetName) || sheets[0];
        if (!sheet) return jsonResponse({ success: false, error: '文档中未找到任何工作表' }, 400);
        const csv = await readSheetCsv(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId, sheet.sheet_id, Math.min(sheet.row_count, HEADER_SAMPLE_ROW_LIMIT), sheet.col_count);
        const allLines = csv.split('\n');
        const lines = allLines.filter(l => l.trim());
        if (lines.length === 0) return jsonResponse({ success: false, error: '工作表为空' }, 400);
        const headers = parseCsvLine(lines[0]);
        // 去除标题行末尾连续的空列，避免写入时产生多余空列导致视觉错位
        while (headers.length > 0 && !headers[headers.length - 1].trim()) {
          headers.pop();
        }
        // 并行执行：LLM 提取 + 旺店通自动匹配（两者互不依赖）
        const wdtCfg = config.wangdian || {};
        const wdtEnabled = wdtCfg.sid && wdtCfg.key && wdtCfg.secret && wdtCfg.salt;

        const [extractResult, wdtMatch] = await Promise.all([
          extractRowData(config.llm, headers, target.name, description),
          wdtEnabled ? autoMatchWdtOrder(wdtCfg, description) : Promise.resolve(null)
        ]);

        // 合并旺店通数据到提取结果
        if (wdtMatch) {
          mergeWdtData(headers, extractResult, wdtMatch);
        }

        if (extractResult.nonEmptyCount === 0) {
          return jsonResponse({ success: false, error: '未能从描述中提取到任何有效数据，请检查输入内容' }, 400);
        }
        // 查找第一个空行时保留空行，避免跳过空行导致追加时间隔一行
        let emptyRowIndex = allLines.length;
        for (let i = 1; i < allLines.length; i++) {
          const cells = parseCsvLine(allLines[i]);
          const isEmpty = cells.every(c => !c || !c.trim());
          if (isEmpty) { emptyRowIndex = i; break; }
        }
        return jsonResponse({
          success: true,
          data: { headers: headers, values: extractResult.values, missing: extractResult.missing, targetRow: emptyRowIndex, sheetName: sheet.sheet_name, sheetId: sheet.sheet_id, targetFileId: targetFileId, preview: buildPreviewText(headers, extractResult.values), debug: { method: extractResult.method, parseTime: extractResult.parseTime, llmRaw: extractResult.raw, llmError: extractResult.llmError, nonEmptyCount: extractResult.nonEmptyCount, headerCount: headers.length, totalLines: lines.length, wdtMatch: wdtMatch ? { src_tids: wdtMatch.src_tids, logistics_no: wdtMatch.logistics_no, shop_name: wdtMatch.shop_name, platform: wdtMatch.platform, warehouse_no: wdtMatch.warehouse_no, warehouse_name: wdtMatch.warehouse_name } : null } }
        });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // POST /api/write/execute
    if (url.pathname === '/api/write/execute' && request.method === 'POST') {
      const body = await request.json();
      const docId = body.docId || config.writeDefaultDocumentId;
      const targetFileId = body.targetFileId;
      const sheetId = body.sheetId;
      const targetRow = body.targetRow;
      const values = body.values;
      const doc = getDocumentById(config, docId);
      if (!doc) return jsonResponse({ success: false, error: '未找到指定文档' }, 400);
      if (!values || !Array.isArray(values)) return jsonResponse({ success: false, error: '写入数据无效' }, 400);
      if (!Number.isInteger(targetRow) || targetRow < 0) return jsonResponse({ success: false, error: '目标行号无效' }, 400);
      const nonEmptyCount = values.filter(v => v && String(v).trim()).length;
      if (nonEmptyCount === 0) return jsonResponse({ success: false, error: '写入数据全为空，已阻止写入' }, 400);
      const writeDocId = targetFileId || doc.fileId;
      try {
        const sid = await initMcpSession(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey);
        const sheets = await getSheetList(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, writeDocId);
        const sheet = sheets.find(s => s.sheet_id === sheetId);
        if (!sheet) return jsonResponse({ success: false, error: '未找到指定工作表' }, 400);
        // 执行写入前重新查找第一个空行，确保追加到已有内容的下一行
        const actualRow = await findNextEmptyRow(
          config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid,
          writeDocId, sheetId, targetRow, sheet.col_count, sheet.row_count
        );

        const result = await writeRow(config.tencentDocs, sid, writeDocId, sheetId, actualRow, values);
        return jsonResponse({ success: true, message: '登记成功，更新了 ' + result.updateNum + ' 个单元格', data: { updateNum: result.updateNum, row: actualRow } });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // POST /api/llm/test
    if (url.pathname === '/api/llm/test' && request.method === 'POST') {
      const body = await request.json();
      const llmConfig = body.llmConfig || config.llm;
      try {
        const result = await testLLMConnection(llmConfig);
        return jsonResponse({ success: result.ok, message: result.message });
      } catch (err) {
        return jsonResponse({ success: false, message: err.message }, 500);
      }
    }

    return new Response('Not Found', { status: 404 });
    } catch (err) {
      return jsonResponse({ success: false, error: '服务器内部错误: ' + err.message }, 500);
    }
  }
};
