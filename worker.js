const HTML = "<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>综合电商售后处理系统</title>\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link href=\"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap\" rel=\"stylesheet\">\n  <style>\n    :root {\n      --bg-primary: #0A0F1A;\n      --bg-secondary: #111827;\n      --bg-card: #151C2C;\n      --bg-hover: #1A2332;\n      --text-primary: #E2E8F0;\n      --text-secondary: #8892B0;\n      --text-muted: #4A5568;\n      --accent: #00D4AA;\n      --accent-dim: rgba(0, 212, 170, 0.1);\n      --accent-glow: rgba(0, 212, 170, 0.25);\n      --border: #1E293B;\n      --border-accent: rgba(0, 212, 170, 0.3);\n      --danger: #F87171;\n      --danger-bg: rgba(248, 113, 113, 0.08);\n      --warning-bg: rgba(251, 191, 36, 0.12);\n      --warning-text: #FBBF24;\n      --font-display: 'Space Grotesk', system-ui, sans-serif;\n      --font-mono: 'JetBrains Mono', 'Fira Code', monospace;\n      --radius: 8px;\n    }\n\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n\n    body {\n      font-family: var(--font-display);\n      background: var(--bg-primary);\n      color: var(--text-primary);\n      min-height: 100vh;\n      -webkit-font-smoothing: antialiased;\n    }\n\n    .app {\n      max-width: 1120px;\n      margin: 0 auto;\n      padding: 48px 24px 80px;\n    }\n\n    .header { margin-bottom: 32px; }\n\n    .header-top {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      margin-bottom: 8px;\n    }\n\n    .header-tag {\n      font-family: var(--font-mono);\n      font-size: 11px;\n      font-weight: 500;\n      color: var(--accent);\n      background: var(--accent-dim);\n      border: 1px solid var(--border-accent);\n      padding: 3px 10px;\n      border-radius: 4px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n    }\n\n    .header h1 {\n      font-size: clamp(24px, 4vw, 36px);\n      font-weight: 700;\n      letter-spacing: -0.5px;\n      line-height: 1.2;\n    }\n\n    .header-sub {\n      font-size: 15px;\n      color: var(--text-secondary);\n      margin-top: 6px;\n    }\n\n    .tabs {\n      display: flex;\n      gap: 4px;\n      margin-bottom: 24px;\n      border-bottom: 1px solid var(--border);\n      padding-bottom: 0;\n    }\n\n    .tab {\n      padding: 10px 20px;\n      background: transparent;\n      border: none;\n      border-bottom: 2px solid transparent;\n      color: var(--text-secondary);\n      font-family: var(--font-display);\n      font-size: 14px;\n      font-weight: 500;\n      cursor: pointer;\n      transition: color 0.2s, border-color 0.2s;\n      margin-bottom: -1px;\n    }\n\n    .tab:hover { color: var(--text-primary); }\n    .tab.active {\n      color: var(--accent);\n      border-bottom-color: var(--accent);\n    }\n\n    .view { display: none; }\n    .view.active { display: block; }\n\n    .card {\n      background: var(--bg-card);\n      border: 1px solid var(--border);\n      border-radius: var(--radius);\n      padding: 28px;\n      margin-bottom: 20px;\n    }\n\n    .card-title {\n      font-size: 15px;\n      font-weight: 600;\n      margin-bottom: 16px;\n    }\n\n    .form-group { margin-bottom: 16px; }\n\n    label {\n      display: block;\n      font-size: 13px;\n      color: var(--text-secondary);\n      margin-bottom: 6px;\n      font-weight: 500;\n    }\n\n    input[type=\"text\"],\n    input[type=\"password\"],\n    input[type=\"url\"],\n    select,\n    textarea {\n      width: 100%;\n      padding: 10px 14px;\n      background: var(--bg-primary);\n      border: 1px solid var(--border);\n      border-radius: 6px;\n      font-family: var(--font-display);\n      font-size: 14px;\n      color: var(--text-primary);\n      outline: none;\n      transition: border-color 0.2s, box-shadow 0.2s;\n    }\n\n    input:focus, select:focus, textarea:focus {\n      border-color: var(--accent);\n      box-shadow: 0 0 0 3px var(--accent-glow);\n    }\n\n    select {\n      cursor: pointer;\n      appearance: none;\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238892B0' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n      background-repeat: no-repeat;\n      background-position: right 12px center;\n      padding-right: 36px;\n    }\n\n    textarea {\n      min-height: 80px;\n      resize: vertical;\n      font-family: var(--font-mono);\n    }\n\n    .btn {\n      padding: 10px 24px;\n      border: none;\n      border-radius: 6px;\n      font-family: var(--font-display);\n      font-size: 14px;\n      font-weight: 600;\n      cursor: pointer;\n      transition: opacity 0.15s, transform 0.1s;\n      white-space: nowrap;\n    }\n\n    .btn-primary {\n      background: var(--accent);\n      color: var(--bg-primary);\n    }\n\n    .btn-secondary {\n      background: var(--bg-hover);\n      color: var(--text-primary);\n      border: 1px solid var(--border);\n    }\n\n    .btn-danger {\n      background: var(--danger);\n      color: #fff;\n    }\n\n    .btn:hover { opacity: 0.88; }\n    .btn:active { transform: scale(0.97); }\n    .btn:disabled { opacity: 0.4; cursor: not-allowed; }\n\n    .btn-row {\n      display: flex;\n      gap: 10px;\n      align-items: center;\n    }\n\n    .search-row {\n      display: flex;\n      gap: 10px;\n      align-items: stretch;\n    }\n\n    .search-input-wrap {\n      flex: 1;\n      position: relative;\n    }\n\n    .search-prefix {\n      position: absolute;\n      left: 14px;\n      top: 50%;\n      transform: translateY(-50%);\n      font-family: var(--font-mono);\n      font-size: 13px;\n      color: var(--text-muted);\n      pointer-events: none;\n    }\n\n    .search-input {\n      width: 100%;\n      padding: 13px 16px 13px 36px;\n      font-family: var(--font-mono);\n      font-size: 15px;\n    }\n\n    .doc-selector {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      margin-bottom: 14px;\n    }\n\n    .doc-selector select {\n      width: 240px;\n    }\n\n    .search-meta {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-top: 14px;\n      font-size: 12px;\n      color: var(--text-muted);\n      font-family: var(--font-mono);\n    }\n\n    .btn-refresh {\n      background: transparent;\n      border: 1px solid var(--border);\n      border-radius: 4px;\n      padding: 4px 12px;\n      font-family: var(--font-mono);\n      font-size: 11px;\n      color: var(--text-secondary);\n      cursor: pointer;\n      transition: all 0.2s;\n    }\n\n    .btn-refresh:hover { border-color: var(--accent); color: var(--accent); }\n\n    .error-box {\n      display: none;\n      background: var(--danger-bg);\n      border: 1px solid rgba(248, 113, 113, 0.2);\n      border-radius: 6px;\n      padding: 14px 20px;\n      color: var(--danger);\n      font-size: 14px;\n      margin-bottom: 20px;\n    }\n    .error-box.visible { display: block; }\n\n    .success-box {\n      display: none;\n      background: var(--accent-dim);\n      border: 1px solid var(--border-accent);\n      border-radius: 6px;\n      padding: 14px 20px;\n      color: var(--accent);\n      font-size: 14px;\n      margin-bottom: 20px;\n    }\n    .success-box.visible { display: block; }\n\n    .loading { display: none; text-align: center; padding: 48px 20px; }\n    .loading.visible { display: block; }\n\n    .spinner {\n      display: inline-block;\n      width: 28px;\n      height: 28px;\n      border: 2px solid var(--border);\n      border-top-color: var(--accent);\n      border-radius: 50%;\n      animation: spin 0.7s linear infinite;\n    }\n\n    @keyframes spin { to { transform: rotate(360deg); } }\n\n    .loading p {\n      margin-top: 14px;\n      color: var(--text-secondary);\n      font-size: 13px;\n      font-family: var(--font-mono);\n    }\n\n    .table-scroll { overflow-x: auto; }\n\n    table {\n      width: 100%;\n      border-collapse: collapse;\n    }\n\n    thead th {\n      padding: 11px 20px;\n      text-align: left;\n      font-family: var(--font-mono);\n      font-size: 11px;\n      font-weight: 500;\n      color: var(--text-muted);\n      text-transform: uppercase;\n      letter-spacing: 0.8px;\n      border-bottom: 1px solid var(--border);\n      white-space: nowrap;\n      background: var(--bg-secondary);\n    }\n\n    tbody td {\n      padding: 12px 20px;\n      font-size: 14px;\n      color: var(--text-secondary);\n      border-bottom: 1px solid var(--border);\n      white-space: nowrap;\n    }\n\n    tbody tr { transition: background 0.12s; }\n    tbody tr:hover { background: var(--bg-hover); }\n    tbody tr:last-child td { border-bottom: none; }\n\n    .tag {\n      display: inline-block;\n      font-family: var(--font-mono);\n      font-size: 11px;\n      font-weight: 500;\n      padding: 2px 8px;\n      border-radius: 4px;\n      background: var(--accent-dim);\n      color: var(--accent);\n      border: 1px solid var(--border-accent);\n    }\n\n    .hl {\n      background: var(--warning-bg);\n      color: var(--warning-text);\n      padding: 1px 4px;\n      border-radius: 3px;\n      font-weight: 600;\n    }\n\n    .preview-table {\n      width: 100%;\n      border-collapse: collapse;\n    }\n\n    .preview-table th {\n      padding: 8px 14px;\n      font-size: 12px;\n      color: var(--text-muted);\n      border-bottom: 1px solid var(--border);\n      text-align: left;\n    }\n\n    .preview-table td {\n      padding: 10px 14px;\n      font-size: 14px;\n      color: var(--text-primary);\n      border-bottom: 1px solid var(--border);\n    }\n\n    .preview-table .empty-cell {\n      color: var(--danger);\n      font-style: italic;\n    }\n\n    .missing-fields {\n      background: var(--warning-bg);\n      border: 1px solid rgba(251, 191, 36, 0.2);\n      border-radius: 6px;\n      padding: 12px 16px;\n      color: var(--warning-text);\n      font-size: 13px;\n      margin-bottom: 16px;\n    }\n\n    .settings-section {\n      margin-bottom: 28px;\n    }\n\n    .settings-section h3 {\n      font-size: 14px;\n      color: var(--accent);\n      margin-bottom: 14px;\n      padding-bottom: 8px;\n      border-bottom: 1px solid var(--border);\n    }\n\n    .doc-list-item {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding: 12px 14px;\n      background: var(--bg-primary);\n      border: 1px solid var(--border);\n      border-radius: 6px;\n      margin-bottom: 8px;\n    }\n\n    .doc-list-item .name {\n      flex: 1;\n      font-weight: 500;\n    }\n\n    .doc-list-item .actions {\n      display: flex;\n      gap: 6px;\n    }\n\n    .btn-icon {\n      padding: 4px 10px;\n      font-size: 12px;\n    }\n\n    .form-row {\n      display: flex;\n      gap: 14px;\n    }\n\n    .form-row .form-group {\n      flex: 1;\n    }\n\n    .hint {\n      font-size: 12px;\n      color: var(--text-muted);\n      margin-top: 4px;\n    }\n\n    /* ── Modal ── */\n    .modal-overlay {\n      display: none;\n      position: fixed;\n      top: 0; left: 0; right: 0; bottom: 0;\n      background: rgba(0,0,0,0.6);\n      z-index: 1000;\n      justify-content: center;\n      align-items: center;\n    }\n    .modal-overlay.visible { display: flex; }\n\n    .modal {\n      background: var(--bg-card);\n      border: 1px solid var(--border);\n      border-radius: var(--radius);\n      padding: 28px;\n      max-width: 520px;\n      width: 90%;\n      max-height: 85vh;\n      overflow-y: auto;\n    }\n\n    .modal-title {\n      font-size: 16px;\n      font-weight: 600;\n      margin-bottom: 20px;\n    }\n\n    .modal-actions {\n      display: flex;\n      gap: 10px;\n      justify-content: flex-end;\n      margin-top: 20px;\n    }\n\n    /* ── Toast ── */\n    .toast {\n      display: none;\n      position: fixed;\n      top: 24px;\n      right: 24px;\n      z-index: 2000;\n      padding: 14px 20px;\n      border-radius: 6px;\n      font-size: 14px;\n      max-width: 400px;\n      box-shadow: 0 4px 12px rgba(0,0,0,0.3);\n    }\n    .toast.visible { display: block; }\n    .toast.success {\n      background: var(--accent-dim);\n      border: 1px solid var(--border-accent);\n      color: var(--accent);\n    }\n    .toast.error {\n      background: var(--danger-bg);\n      border: 1px solid rgba(248, 113, 113, 0.2);\n      color: var(--danger);\n    }\n\n    @media (max-width: 640px) {\n      .app { padding: 24px 12px 48px; }\n      .card { padding: 18px; }\n      .search-row { flex-direction: column; }\n      .form-row { flex-direction: column; }\n      .doc-selector select { width: 100%; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"app\">\n    <header class=\"header\">\n      <div class=\"header-top\">\n        <span class=\"header-tag\">v2.0</span>\n      </div>\n      <h1>综合电商售后处理系统</h1>\n      <p class=\"header-sub\">查询 · 写入 · 设置 — 数据来源：<code>腾讯文档</code></p>\n    </header>\n\n    <nav class=\"tabs\">\n      <button class=\"tab active\" data-view=\"query\" onclick=\"switchView('query')\">查询</button>\n      <button class=\"tab\" data-view=\"write\" onclick=\"switchView('write')\">写入</button>\n      <button class=\"tab\" data-view=\"settings\" onclick=\"switchView('settings')\">设置</button>\n    </nav>\n\n    <!-- Query View -->\n    <section class=\"view active\" id=\"view-query\">\n      <div class=\"card\">\n        <div class=\"doc-selector\">\n          <label for=\"queryDocSelect\" style=\"margin:0\">文档：</label>\n          <select id=\"queryDocSelect\" onchange=\"onQueryDocChange()\"></select>\n        </div>\n        <div class=\"search-row\">\n          <div class=\"search-input-wrap\">\n            <span class=\"search-prefix\">&gt;</span>\n            <input type=\"text\" class=\"search-input\" id=\"searchInput\" placeholder=\"输入快递单号...\" autocomplete=\"off\" spellcheck=\"false\"/>\n          </div>\n          <button class=\"btn btn-primary\" id=\"searchBtn\" onclick=\"doSearch()\">查询</button>\n        </div>\n        <div class=\"search-meta\">\n          <span id=\"statusText\">ready</span>\n          <button class=\"btn-refresh\" onclick=\"doRefresh()\">刷新数据</button>\n        </div>\n      </div>\n\n      <div class=\"error-box\" id=\"errorMsg\"></div>\n      <div class=\"loading\" id=\"loading\">\n        <div class=\"spinner\"></div>\n        <p>fetching data...</p>\n      </div>\n\n      <div class=\"card\" id=\"resultPanel\" style=\"display:none\">\n        <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:16px\">\n          <h2 class=\"card-title\" style=\"margin:0\">查询结果</h2>\n          <span style=\"font-family:var(--font-mono);font-size:13px;color:var(--text-secondary)\">共 <em id=\"totalCount\" style=\"font-style:normal;color:var(--accent);font-weight:600\">0</em> 条</span>\n        </div>\n        <div class=\"table-scroll\">\n          <table>\n            <thead>\n              <tr>\n                <th>来源</th><th>登记日期</th><th>快递单号</th><th>商品名称</th>\n                <th>正品</th><th>次品</th><th>次品备注</th><th>备注</th>\n              </tr>\n            </thead>\n            <tbody id=\"resultBody\"></tbody>\n          </table>\n        </div>\n      </div>\n    </section>\n\n    <!-- Write View -->\n    <section class=\"view\" id=\"view-write\">\n      <div class=\"card\">\n        <h2 class=\"card-title\">写入新记录</h2>\n        <div class=\"form-row\">\n          <div class=\"form-group\">\n            <label>选择文档</label>\n            <select id=\"writeDocSelect\" onchange=\"onWriteDocChange()\"></select>\n          </div>\n          <div class=\"form-group\">\n            <label>选择目标表格</label>\n            <select id=\"writeTargetSelect\"></select>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>用自然语言描述要写入的内容</label>\n          <textarea id=\"writeDescription\" placeholder=\"例如：华强北数码3C店 淘宝 订单号123456789 快递单号SF1234567890 丢件登记理赔货值399元 运费20元\"></textarea>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-primary\" id=\"extractBtn\" onclick=\"doExtract()\">提取并预览</button>\n        </div>\n      </div>\n\n      <div class=\"error-box\" id=\"writeError\"></div>\n      <div class=\"success-box\" id=\"writeSuccess\"></div>\n      <div class=\"loading\" id=\"writeLoading\">\n        <div class=\"spinner\"></div>\n        <p>LLM 正在分析...</p>\n      </div>\n\n      <div class=\"card\" id=\"previewPanel\" style=\"display:none\">\n        <h2 class=\"card-title\">写入预览</h2>\n        <div id=\"missingFields\" class=\"missing-fields\" style=\"display:none\"></div>\n        <div class=\"table-scroll\">\n          <table class=\"preview-table\">\n            <thead><tr id=\"previewHeader\"></tr></thead>\n            <tbody><tr id=\"previewRow\"></tr></tbody>\n          </table>\n        </div>\n        <div style=\"margin-top:16px;display:flex;gap:10px\">\n          <button class=\"btn btn-primary\" onclick=\"doWrite()\">确认写入</button>\n          <button class=\"btn btn-secondary\" onclick=\"cancelWrite()\">取消</button>\n        </div>\n      </div>\n    </section>\n\n    <!-- Settings View -->\n    <section class=\"view\" id=\"view-settings\">\n      <div class=\"card\">\n        <h2 class=\"card-title\">系统设置</h2>\n\n        <div class=\"settings-section\">\n          <h3>腾讯文档配置</h3>\n          <div class=\"form-group\">\n            <label>API Key</label>\n            <input type=\"password\" id=\"cfgTencentKey\" placeholder=\"腾讯文档 API Key\"/>\n          </div>\n          <div class=\"form-group\">\n            <label>MCP API 地址</label>\n            <input type=\"url\" id=\"cfgTencentUrl\" placeholder=\"https://docs.qq.com/openapi/mcp\"/>\n          </div>\n        </div>\n\n        <div class=\"settings-section\">\n          <h3>LLM 配置</h3>\n          <div class=\"form-row\">\n            <div class=\"form-group\">\n              <label>服务商</label>\n              <select id=\"cfgLlmProvider\" onchange=\"onLlmProviderChange()\">\n                <option value=\"deepseek\">DeepSeek</option>\n                <option value=\"doubao\">豆包 (火山引擎)</option>\n                <option value=\"qwen\">通义千问</option>\n                <option value=\"ollama\">Ollama (本地)</option>\n                <option value=\"openai\">OpenAI</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label>模型名称</label>\n              <input type=\"text\" id=\"cfgLlmModel\" placeholder=\"deepseek-chat\"/>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>API Key</label>\n            <input type=\"password\" id=\"cfgLlmKey\" placeholder=\"LLM API Key\"/>\n          </div>\n          <div class=\"form-group\">\n            <label>Base URL</label>\n            <input type=\"url\" id=\"cfgLlmUrl\" placeholder=\"https://api.deepseek.com\"/>\n          </div>\n          <div class=\"btn-row\" style=\"margin-top:8px\">\n            <button class=\"btn btn-secondary\" onclick=\"testLLM()\">测试连接</button>\n          </div>\n        </div>\n\n        <div class=\"settings-section\">\n          <h3>文档配置</h3>\n          <div id=\"docListContainer\"></div>\n          <button class=\"btn btn-secondary\" onclick=\"addDocument()\" style=\"margin-top:8px\">+ 添加文档</button>\n        </div>\n\n        <div class=\"settings-section\">\n          <h3>缓存配置</h3>\n          <div class=\"form-row\">\n            <div class=\"form-group\">\n              <label>缓存有效期（秒）</label>\n              <input type=\"text\" id=\"cfgCacheTtl\" placeholder=\"300\"/>\n            </div>\n            <div class=\"form-group\">\n              <label>自动刷新间隔（秒）</label>\n              <input type=\"text\" id=\"cfgCacheRefresh\" placeholder=\"1800\"/>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"btn-row\">\n          <button class=\"btn btn-primary\" onclick=\"saveSettings()\">保存配置</button>\n        </div>\n      </div>\n    </section>\n\n    <!-- Document Edit Modal -->\n    <div class=\"modal-overlay\" id=\"docModal\">\n      <div class=\"modal\">\n        <h2 class=\"modal-title\" id=\"docModalTitle\">添加文档</h2>\n        <div class=\"form-group\">\n          <label>文档名称</label>\n          <input type=\"text\" id=\"modalDocName\" placeholder=\"如：和旭电商退货登记\"/>\n        </div>\n        <div class=\"form-group\">\n          <label>腾讯文档 File ID</label>\n          <input type=\"text\" id=\"modalDocFileId\" placeholder=\"文档 ID\"/>\n        </div>\n        <div class=\"form-group\">\n          <label>读取 Sheet 关键词（逗号分隔）</label>\n          <input type=\"text\" id=\"modalDocKeywords\" placeholder=\"客退,退货\"/>\n        </div>\n        <div class=\"form-group\">\n          <label>写入目标（每行一个，格式：显示名|sheet名）</label>\n          <textarea id=\"modalDocTargets\" placeholder=\"快递理赔登记表|理赔登记&#10;售后换货登记表|换货登记\" style=\"min-height:60px\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>\n            <input type=\"checkbox\" id=\"modalDocDefault\" style=\"width:auto;display:inline;margin-right:6px\"/>\n            设为默认文档\n          </label>\n        </div>\n        <div class=\"modal-actions\">\n          <button class=\"btn btn-secondary\" onclick=\"closeDocModal()\">取消</button>\n          <button class=\"btn btn-primary\" id=\"docModalSave\" onclick=\"saveDocModal()\">保存</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Delete Confirm Modal -->\n    <div class=\"modal-overlay\" id=\"deleteModal\">\n      <div class=\"modal\" style=\"max-width:400px\">\n        <h2 class=\"modal-title\">确认删除</h2>\n        <p id=\"deleteModalText\" style=\"color:var(--text-secondary);font-size:14px;line-height:1.6\"></p>\n        <div class=\"modal-actions\">\n          <button class=\"btn btn-secondary\" onclick=\"closeDeleteModal()\">取消</button>\n          <button class=\"btn btn-danger\" id=\"deleteConfirmBtn\">删除</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Toast -->\n    <div class=\"toast\" id=\"toast\"></div>\n  </div>\n\n  <script>\n    const $ = id => document.getElementById(id);\n\n    let currentConfig = null;\n    let documents = [];\n    let writePreviewData = null;\n\n    function esc(s) {\n      if (!s) return '';\n      return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;');\n    }\n\n    function hl(text, q) {\n      if (!q) return esc(text);\n      const safe = esc(text);\n      const sq = esc(q).replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\__HTML_CONTENT__');\n      return safe.replace(new RegExp('(' + sq + ')', 'gi'), '<span class=\"hl\">$1</span>');\n    }\n\n    function showError(msg, container) {\n      const el = container || $('errorMsg');\n      el.textContent = msg;\n      el.classList.add('visible');\n      setTimeout(() => el.classList.remove('visible'), 8000);\n    }\n\n    function showSuccess(msg) {\n      const el = $('writeSuccess');\n      el.textContent = msg;\n      el.classList.add('visible');\n      setTimeout(() => el.classList.remove('visible'), 8000);\n    }\n\n    function setStatus(t) { $('statusText').textContent = t; }\n\n    function showToast(msg, type) {\n      const el = $('toast');\n      el.textContent = msg;\n      el.className = 'toast ' + (type || 'success') + ' visible';\n      setTimeout(() => el.classList.remove('visible'), 5000);\n    }\n\n    function switchView(viewName) {\n      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));\n      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));\n      document.querySelector('.tab[data-view=\"' + viewName + '\"]').classList.add('active');\n      $('view-' + viewName).classList.add('active');\n\n      if (viewName === 'settings') loadSettings();\n      if (viewName === 'query') loadDocSelector('queryDocSelect');\n      if (viewName === 'write') loadDocSelector('writeDocSelect');\n    }\n\n    async function loadDocSelector(selectId) {\n      try {\n        const resp = await fetch('/api/documents');\n        const data = await resp.json();\n        if (data.success) {\n          documents = data.data;\n          const sel = $(selectId);\n          sel.innerHTML = '';\n          documents.forEach(d => {\n            const opt = document.createElement('option');\n            opt.value = d.id;\n            opt.textContent = d.name + (d.isDefault ? ' (默认)' : '');\n            if (d.isDefault) opt.selected = true;\n            sel.appendChild(opt);\n          });\n\n          if (selectId === 'writeDocSelect') {\n            onWriteDocChange();\n          }\n        }\n      } catch (err) {\n        console.error('加载文档列表失败:', err);\n      }\n    }\n\n    function onQueryDocChange() {\n      setStatus('ready');\n    }\n\n    async function onWriteDocChange() {\n      const docId = $('writeDocSelect').value;\n      const doc = documents.find(d => d.id === docId);\n      if (!doc) return;\n\n      try {\n        const resp = await fetch('/api/config');\n        const data = await resp.json();\n        if (data.success) {\n          const docConfig = data.data.documents.find(d => d.id === docId);\n          const targets = (docConfig && docConfig.writeTargets) || [];\n          const sel = $('writeTargetSelect');\n          sel.innerHTML = '';\n          if (targets.length === 0) {\n            sel.innerHTML = '<option value=\"\">未配置写入目标</option>';\n          } else {\n            targets.forEach(t => {\n              const opt = document.createElement('option');\n              opt.value = t.id;\n              opt.textContent = t.name;\n              sel.appendChild(opt);\n            });\n          }\n        }\n      } catch (err) {\n        console.error('加载写入目标失败:', err);\n      }\n    }\n\n    $('searchInput').addEventListener('keydown', e => {\n      if (e.key === 'Enter') doSearch();\n    });\n\n    async function doSearch() {\n      const q = $('searchInput').value.trim();\n      if (!q) { showError('请输入快递单号'); $('searchInput').focus(); return; }\n\n      const docId = $('queryDocSelect').value;\n      $('resultPanel').style.display = 'none';\n      $('loading').classList.add('visible');\n      $('errorMsg').classList.remove('visible');\n      $('searchBtn').disabled = true;\n      setStatus('querying...');\n\n      try {\n        const resp = await fetch('/api/search?q=' + encodeURIComponent(q) + '&docId=' + encodeURIComponent(docId));\n        const data = await resp.json();\n        $('loading').classList.remove('visible');\n\n        if (!data.success) {\n          showError(data.error || '查询失败');\n          setStatus('error');\n          return;\n        }\n\n        $('totalCount').textContent = data.total;\n        const body = $('resultBody');\n        body.innerHTML = '';\n\n        if (data.total === 0) {\n          body.innerHTML = '<tr><td colspan=\"8\" style=\"text-align:center;padding:40px;color:var(--text-muted)\">未找到匹配记录</td></tr>';\n        } else {\n          data.data.forEach(r => {\n            const tr = document.createElement('tr');\n            tr.innerHTML =\n              '<td><span class=\"tag\">' + esc(r.source) + '</span></td>' +\n              '<td>' + esc(r['登记日期']) + '</td>' +\n              '<td style=\"color:var(--text-primary);font-family:var(--font-mono);font-size:13px\">' + hl(r['快递单号'], q) + '</td>' +\n              '<td>' + esc(r['商品名称']) + '</td>' +\n              '<td>' + esc(r['正品数量']) + '</td>' +\n              '<td>' + esc(r['次品数量']) + '</td>' +\n              '<td>' + esc(r['次品备注']) + '</td>' +\n              '<td>' + esc(r['备注']) + '</td>';\n            body.appendChild(tr);\n          });\n        }\n\n        $('resultPanel').style.display = 'block';\n        setStatus('done — ' + data.total + ' result' + (data.total > 1 ? 's' : ''));\n      } catch (err) {\n        $('loading').classList.remove('visible');\n        showError('网络请求失败');\n        setStatus('network error');\n      } finally {\n        $('searchBtn').disabled = false;\n      }\n    }\n\n    async function doRefresh() {\n      const docId = $('queryDocSelect').value;\n      setStatus('refreshing...');\n      try {\n        const resp = await fetch('/api/refresh?docId=' + encodeURIComponent(docId));\n        const data = await resp.json();\n        if (data.success) {\n          setStatus('synced — ' + data.total + ' records');\n        } else {\n          showError('刷新失败: ' + (data.error || ''));\n          setStatus('error');\n        }\n      } catch {\n        setStatus('network error');\n      }\n    }\n\n    async function doExtract() {\n      const docId = $('writeDocSelect').value;\n      const targetId = $('writeTargetSelect').value;\n      const description = $('writeDescription').value.trim();\n\n      if (!targetId) { showError('请选择目标表格', 'writeError'); return; }\n      if (!description) { showError('请输入描述内容', 'writeError'); return; }\n\n      $('previewPanel').style.display = 'none';\n      $('writeLoading').classList.add('visible');\n      $('writeError').classList.remove('visible');\n      $('writeSuccess').classList.remove('visible');\n      $('extractBtn').disabled = true;\n\n      try {\n        const resp = await fetch('/api/write/extract', {\n          method: 'POST',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify({ docId, targetId, description })\n        });\n        const data = await resp.json();\n        $('writeLoading').classList.remove('visible');\n\n        if (!data.success) {\n          showError(data.error || '提取失败', 'writeError');\n          return;\n        }\n\n        writePreviewData = data.data;\n\n        const headers = data.data.headers;\n        const values = data.data.values;\n\n        $('previewHeader').innerHTML = headers.map(h => '<th>' + esc(h) + '</th>').join('');\n        $('previewRow').innerHTML = values.map(v => {\n          if (!v || !v.trim()) return '<td class=\"empty-cell\">(空)</td>';\n          return '<td>' + esc(v) + '</td>';\n        }).join('');\n\n        if (data.data.missing && data.data.missing.length > 0) {\n          const el = $('missingFields');\n          el.style.display = 'block';\n          el.textContent = '⚠ 以下字段未填写，建议补充: ' + data.data.missing.join(', ');\n        } else {\n          $('missingFields').style.display = 'none';\n        }\n\n        $('previewPanel').style.display = 'block';\n      } catch (err) {\n        $('writeLoading').classList.remove('visible');\n        showError('网络请求失败: ' + err.message, 'writeError');\n      } finally {\n        $('extractBtn').disabled = false;\n      }\n    }\n\n    async function doWrite() {\n      if (!writePreviewData) return;\n\n      const docId = $('writeDocSelect').value;\n\n      try {\n        const resp = await fetch('/api/write/execute', {\n          method: 'POST',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify({\n            docId,\n            targetFileId: writePreviewData.targetFileId,\n            sheetId: writePreviewData.sheetId,\n            targetRow: writePreviewData.targetRow,\n            values: writePreviewData.values\n          })\n        });\n        const data = await resp.json();\n\n        if (!data.success) {\n          showError(data.error || '写入失败', 'writeError');\n          return;\n        }\n\n        showSuccess(data.message);\n        $('previewPanel').style.display = 'none';\n        $('writeDescription').value = '';\n        writePreviewData = null;\n      } catch (err) {\n        showError('网络请求失败: ' + err.message, 'writeError');\n      }\n    }\n\n    function cancelWrite() {\n      $('previewPanel').style.display = 'none';\n      writePreviewData = null;\n    }\n\n    async function loadSettings() {\n      try {\n        const resp = await fetch('/api/config');\n        const data = await resp.json();\n        if (!data.success) return;\n\n        currentConfig = data.data;\n\n        $('cfgTencentKey').value = currentConfig.tencentDocs.apiKey || '';\n        $('cfgTencentUrl').value = currentConfig.tencentDocs.mcpUrl || '';\n\n        $('cfgLlmProvider').value = currentConfig.llm.provider || 'deepseek';\n        $('cfgLlmModel').value = currentConfig.llm.model || '';\n        $('cfgLlmKey').value = currentConfig.llm.apiKey || '';\n        $('cfgLlmUrl').value = currentConfig.llm.baseUrl || '';\n\n        $('cfgCacheTtl').value = (currentConfig.cache.ttl || 300000) / 1000;\n        $('cfgCacheRefresh').value = (currentConfig.cache.autoRefreshInterval || 1800000) / 1000;\n\n        renderDocList();\n      } catch (err) {\n        console.error('加载设置失败:', err);\n      }\n    }\n\n    function renderDocList() {\n      const container = $('docListContainer');\n      container.innerHTML = '';\n\n      if (!currentConfig.documents || currentConfig.documents.length === 0) {\n        container.innerHTML = '<p style=\"color:var(--text-muted);font-size:13px\">暂无文档配置</p>';\n        return;\n      }\n\n      currentConfig.documents.forEach((doc, idx) => {\n        const item = document.createElement('div');\n        item.className = 'doc-list-item';\n        const isDefault = doc.id === currentConfig.defaultDocumentId;\n        item.innerHTML =\n          '<span class=\"name\">' + esc(doc.name) + ' ' + (isDefault ? '<span class=\"tag\">默认</span>' : '') + '</span>' +\n          '<div class=\"actions\">' +\n            '<button class=\"btn btn-secondary btn-icon\" onclick=\"editDocument(' + idx + ')\">编辑</button>' +\n            '<button class=\"btn btn-secondary btn-icon\" onclick=\"deleteDocument(' + idx + ')\">删除</button>' +\n          '</div>';\n        container.appendChild(item);\n      });\n    }\n\n    let docModalEditIdx = -1;\n\n    function addDocument() {\n      docModalEditIdx = -1;\n      $('docModalTitle').textContent = '添加文档';\n      $('modalDocName').value = '';\n      $('modalDocFileId').value = '';\n      $('modalDocKeywords').value = '客退,退货';\n      $('modalDocTargets').value = '';\n      $('modalDocDefault').checked = !currentConfig.defaultDocumentId;\n      $('docModal').classList.add('visible');\n      $('modalDocName').focus();\n    }\n\n    function editDocument(idx) {\n      const doc = currentConfig.documents[idx];\n      docModalEditIdx = idx;\n      $('docModalTitle').textContent = '编辑文档';\n      $('modalDocName').value = doc.name || '';\n      $('modalDocFileId').value = doc.fileId || '';\n      $('modalDocKeywords').value = (doc.readSheetKeywords || []).join(',');\n      $('modalDocTargets').value = (doc.writeTargets || []).map(t => t.name + '|' + t.sheetName).join('\\n');\n      $('modalDocDefault').checked = (doc.id === currentConfig.defaultDocumentId);\n      $('docModal').classList.add('visible');\n    }\n\n    function closeDocModal() {\n      $('docModal').classList.remove('visible');\n    }\n\n    function saveDocModal() {\n      const name = $('modalDocName').value.trim();\n      const fileId = $('modalDocFileId').value.trim();\n      const keywords = $('modalDocKeywords').value.trim();\n      const targetsStr = $('modalDocTargets').value.trim();\n      const isDefault = $('modalDocDefault').checked;\n\n      if (!name) { showToast('请输入文档名称', 'error'); return; }\n      if (!fileId) { showToast('请输入 File ID', 'error'); return; }\n\n      const writeTargets = targetsStr ? targetsStr.split('\\n').filter(s => s.trim()).map((s, i) => {\n        const parts = s.split('|').map(p => p.trim());\n        return {\n          id: 'target' + i,\n          name: parts[0] || parts[1] || '',\n          sheetName: parts[1] || parts[0] || ''\n        };\n      }) : [];\n\n      const docData = {\n        name: name,\n        fileId: fileId,\n        readSheetKeywords: keywords ? keywords.split(',').map(s => s.trim()).filter(Boolean) : ['客退', '退货'],\n        writeTargets: writeTargets\n      };\n\n      if (docModalEditIdx >= 0) {\n        const doc = currentConfig.documents[docModalEditIdx];\n        Object.assign(doc, docData);\n      } else {\n        docData.id = 'doc' + Date.now();\n        currentConfig.documents.push(docData);\n        if (!currentConfig.defaultDocumentId) {\n          currentConfig.defaultDocumentId = docData.id;\n        }\n      }\n\n      if (isDefault) {\n        const docId = docModalEditIdx >= 0 ? currentConfig.documents[docModalEditIdx].id : docData.id;\n        currentConfig.defaultDocumentId = docId;\n      }\n\n      closeDocModal();\n      renderDocList();\n      showToast('文档已保存，点击下方\"保存配置\"生效');\n    }\n\n    let deleteTargetIdx = -1;\n\n    function deleteDocument(idx) {\n      deleteTargetIdx = idx;\n      $('deleteModalText').textContent = '确认删除文档\"' + currentConfig.documents[idx].name + '\"？此操作需点击下方\"保存配置\"才会真正生效。';\n      $('deleteConfirmBtn').onclick = function() {\n        const docId = currentConfig.documents[deleteTargetIdx].id;\n        currentConfig.documents.splice(deleteTargetIdx, 1);\n        if (currentConfig.defaultDocumentId === docId) {\n          currentConfig.defaultDocumentId = currentConfig.documents[0] ? currentConfig.documents[0].id : '';\n        }\n        closeDeleteModal();\n        renderDocList();\n        showToast('文档已删除，点击下方\"保存配置\"生效');\n      };\n      $('deleteModal').classList.add('visible');\n    }\n\n    function closeDeleteModal() {\n      $('deleteModal').classList.remove('visible');\n    }\n\n    function onLlmProviderChange() {\n      const provider = $('cfgLlmProvider').value;\n      const presets = {\n        deepseek: { url: 'https://api.deepseek.com', model: 'deepseek-chat' },\n        doubao: { url: 'https://ark.cn-beijing.volces.com/api/v3', model: 'doubao-1-5-pro-32k' },\n        qwen: { url: 'https://dashscope.aliyuncs.com/compatible-mode/v1', model: 'qwen-plus' },\n        ollama: { url: 'http://localhost:11434/v1', model: 'qwen2.5:7b' },\n        openai: { url: 'https://api.openai.com/v1', model: 'gpt-4o-mini' }\n      };\n      const preset = presets[provider];\n      if (preset) {\n        $('cfgLlmUrl').value = preset.url;\n        $('cfgLlmModel').value = preset.model;\n      }\n    }\n\n    async function testLLM() {\n      const llmConfig = {\n        provider: $('cfgLlmProvider').value,\n        apiKey: $('cfgLlmKey').value.includes('****') ? (currentConfig.llm.apiKey || '') : $('cfgLlmKey').value,\n        baseUrl: $('cfgLlmUrl').value,\n        model: $('cfgLlmModel').value\n      };\n\n      try {\n        const resp = await fetch('/api/llm/test', {\n          method: 'POST',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify({ llmConfig })\n        });\n        const data = await resp.json();\n        if (data.success) {\n          showToast('✓ ' + data.message, 'success');\n        } else {\n          showToast('✗ ' + data.message, 'error');\n        }\n      } catch (err) {\n        showToast('✗ 请求失败: ' + err.message, 'error');\n      }\n    }\n\n    async function saveSettings() {\n      const config = {\n        documents: currentConfig.documents,\n        defaultDocumentId: currentConfig.defaultDocumentId,\n        tencentDocs: {\n          apiKey: $('cfgTencentKey').value,\n          mcpUrl: $('cfgTencentUrl').value\n        },\n        llm: {\n          provider: $('cfgLlmProvider').value,\n          apiKey: $('cfgLlmKey').value,\n          baseUrl: $('cfgLlmUrl').value,\n          model: $('cfgLlmModel').value\n        },\n        cache: {\n          ttl: parseInt($('cfgCacheTtl').value) * 1000 || 300000,\n          autoRefreshInterval: parseInt($('cfgCacheRefresh').value) * 1000 || 1800000\n        }\n      };\n\n      try {\n        const resp = await fetch('/api/config', {\n          method: 'PUT',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify(config)\n        });\n        const data = await resp.json();\n        if (data.success) {\n          showToast('配置已保存');\n          loadSettings();\n        } else {\n          showToast('保存失败: ' + (data.error || ''), 'error');\n        }\n      } catch (err) {\n        showToast('保存失败: ' + err.message, 'error');\n      }\n    }\n\n    loadDocSelector('queryDocSelect');\n  </script>\n</body>\n</html>\n";
const DEFAULT_CONFIG = {"documents":[{"id":"doc_demo","name":"电商售后DEMO演示","fileId":"ZBTKrbvmhXBq","readSheetKeywords":["客退","退货","理赔","换货","退款","工作表"],"writeTargets":[{"id":"target0","name":"客退登记表","sheetName":"工作表1"}]},{"name":"快递理赔登记表","fileId":"DWnhndXZoREdQSUJV","readSheetKeywords":["理赔","快递"],"writeTargets":[{"id":"target0","name":"快递理赔登记表","sheetName":"工作表1"}],"id":"doc1782201419594"}],"defaultDocumentId":"doc_demo","tencentDocs":{"apiKey":"e307046ff3f64c099f678442a95bb8a5","mcpUrl":"https://docs.qq.com/openapi/mcp"},"llm":{"provider":"deepseek","apiKey":"","baseUrl":"https://api.deepseek.com","model":"deepseek-chat"},"cache":{"ttl":300000,"autoRefreshInterval":1800000}};

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
  } catch (e) {}
  return [];
}

async function readSheetCsv(mcpUrl, apiKey, sessionId, fileId, sheetId, rowCount, colCount) {
  const result = await callToolWithSession(mcpUrl, apiKey, sessionId, 'sheet.get_cell_data', {
    file_id: fileId, sheet_id: sheetId,
    start_row: 0, end_row: rowCount,
    start_col: 0, end_col: Math.min(colCount, 10),
    return_csv: true
  });
  return extractText(result);
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
  const allRecords = [];
  for (const sheet of sheets) {
    if (!keywords.some(kw => sheet.sheet_name.includes(kw))) continue;
    try {
      const csv = await readSheetCsv(tencentDocsConfig.mcpUrl, tencentDocsConfig.apiKey, sid, docConfig.fileId, sheet.sheet_id, sheet.row_count, sheet.col_count);
      allRecords.push(...parseSheetCsv(csv, sheet.sheet_name));
    } catch (err) {}
  }
  return allRecords;
}

function searchRecords(records, query) {
  if (!query || query.trim() === '') return [];
  const q = query.trim().toLowerCase();
  return records.filter(r => (r['快递单号'] || '').toLowerCase().includes(q));
}

async function writeRow(tencentDocsConfig, sessionId, fileId, sheetId, startRow, values) {
  const MCP_ROW_OFFSET = 1;
  const cellValues = values.map((val, idx) => ({
    row: startRow + MCP_ROW_OFFSET, col: idx + MCP_ROW_OFFSET, value_type: 'STRING', string_value: String(val)
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
    if (match) return JSON.parse(match[0]);
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
    '- "金额/价格" → 货值\n' +
    '- "日期" → 登记日期\n\n' +
    '【示例1】\n' +
    '列标题：["登记日期","店铺名称","平台","订单号","快递单号","理赔类型","货值","运费","备注"]\n' +
    '用户输入：华强北数码3C店 淘宝 订单号123456789 快递单号SF1234567890 丢件登记理赔货值399元 运费20元\n' +
    '输出：{"登记日期":"","店铺名称":"华强北数码3C店","平台":"淘宝","订单号":"123456789","快递单号":"SF1234567890","理赔类型":"丢件","货值":"399","运费":"20","备注":""}\n\n' +
    '【示例2】\n' +
    '列标题：["登记日期","快递单号","商品名称","正品数量","次品数量","次品备注","备注"]\n' +
    '用户输入：2026-06-23 快递单号YT9876543210 蓝牙耳机 正品2 次品1 包装破损\n' +
    '输出：{"登记日期":"2026-06-23","快递单号":"YT9876543210","商品名称":"蓝牙耳机","正品数量":"2","次品数量":"1","次品备注":"包装破损","备注":""}\n\n' +
    '【示例3】\n' +
    '列标题：["登记日期","店铺名称","平台","订单号","快递单号","理赔类型","货值","运费","备注"]\n' +
    '用户输入：店铺 和旭数码 平台 拼多多 订单号 9988776655 快递单号 JJD00998877 破损理赔 货值 158 运费 12\n' +
    '输出：{"登记日期":"","店铺名称":"和旭数码","平台":"拼多多","订单号":"9988776655","快递单号":"JJD00998877","理赔类型":"破损","货值":"158","运费":"12","备注":""}';
}

function cleanValue(val) {
  if (!val) return '';
  let v = val.trim();
  v = v.replace(/元$/, '');
  v = v.replace(/^[:：]+/, '');
  return v.trim();
}

function ruleBasedExtract(headers, description) {
  const result = {};
  headers.forEach(h => { result[h] = ''; });
  const sortedHeaders = [...headers].filter(h => h && h.length > 0)
    .sort((a, b) => b.length - a.length);
  const aliases = {
    '单号': '快递单号', '金额': '货值', '价格': '货值',
    '日期': '登记日期', '数量': '正品数量'
  };
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
    for (const h of sortedHeaders) {
      if (token === h) { matchedHeader = h; remainder = ''; break; }
    }
    if (!matchedHeader) {
      for (const h of sortedHeaders) {
        if (token.length > h.length && token.startsWith(h)) {
          matchedHeader = h; remainder = token.substring(h.length); break;
        }
      }
    }
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
    if (!matchedHeader) {
      for (const h of sortedHeaders) {
        const idx = token.indexOf(h);
        if (idx >= 0 && idx + h.length < token.length) {
          const after = token.substring(idx + h.length);
          if (/^[:：\-—=]/.test(after)) {
            matchedHeader = h; remainder = after.replace(/^[:：\-—=]+/, ''); break;
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
async function loadConfig(env) {
  try {
    const stored = await env.CONFIG.get('config');
    if (stored) return JSON.parse(stored);
  } catch (e) {}
  return DEFAULT_CONFIG;
}

async function saveConfig(env, config) {
  await env.CONFIG.put('config', JSON.stringify(config));
}

function getDocumentById(config, docId) {
  return config.documents.find(d => d.id === docId) || null;
}

// --- HTTP Helpers ---
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
      config = DEFAULT_CONFIG;
    }

    // Static HTML
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(HTML, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    }

    // GET /api/config
    if (url.pathname === '/api/config' && request.method === 'GET') {
      const safeConfig = JSON.parse(JSON.stringify(config));
      if (safeConfig.tencentDocs && safeConfig.tencentDocs.apiKey) {
        const k = safeConfig.tencentDocs.apiKey;
        safeConfig.tencentDocs.apiKey = k.substring(0, 4) + '****' + k.substring(k.length - 4);
      }
      if (safeConfig.llm && safeConfig.llm.apiKey) {
        const k = safeConfig.llm.apiKey;
        safeConfig.llm.apiKey = k.substring(0, 4) + '****' + k.substring(k.length - 4);
      }
      return jsonResponse({ success: true, data: safeConfig });
    }

    // PUT /api/config
    if (url.pathname === '/api/config' && request.method === 'PUT') {
      const body = await request.json();
      try {
        const newConfig = JSON.parse(JSON.stringify(config));
        if (body.documents) newConfig.documents = body.documents;
        if (body.defaultDocumentId) newConfig.defaultDocumentId = body.defaultDocumentId;
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
        isDefault: d.id === config.defaultDocumentId,
        writeTargetCount: (d.writeTargets || []).length
      }));
      return jsonResponse({ success: true, data: docs });
    }

    // GET /api/search
    if (url.pathname === '/api/search' && request.method === 'GET') {
      const query = url.searchParams.get('q') || '';
      const docId = url.searchParams.get('docId') || config.defaultDocumentId;
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
      const docId = url.searchParams.get('docId') || config.defaultDocumentId;
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

    // GET /api/write/headers
    if (url.pathname === '/api/write/headers' && request.method === 'GET') {
      const docId = url.searchParams.get('docId') || config.defaultDocumentId;
      const targetId = url.searchParams.get('targetId');
      const doc = getDocumentById(config, docId);
      if (!doc) return jsonResponse({ success: false, error: '未找到指定文档' }, 400);
      const target = (doc.writeTargets || []).find(t => t.id === targetId);
      if (!target) return jsonResponse({ success: false, error: '未找到指定的写入目标表格' }, 400);
      try {
        const targetFileId = target.fileId || doc.fileId;
        const sid = await initMcpSession(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey);
        const sheets = await getSheetList(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId);
        const sheet = sheets.find(s => s.sheet_name === target.sheetName) || sheets[0];
        if (!sheet) return jsonResponse({ success: false, error: '文档中未找到任何工作表' }, 400);
        const csv = await readSheetCsv(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId, sheet.sheet_id, Math.min(sheet.row_count, 50), sheet.col_count);
        const lines = csv.split('\n').filter(l => l.trim());
        if (lines.length === 0) return jsonResponse({ success: false, error: '工作表为空' }, 400);
        const headers = parseCsvLine(lines[0]);
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
      const docId = body.docId || config.defaultDocumentId;
      const targetId = body.targetId;
      const description = body.description;
      const doc = getDocumentById(config, docId);
      if (!doc) return jsonResponse({ success: false, error: '未找到指定文档' }, 400);
      const target = (doc.writeTargets || []).find(t => t.id === targetId);
      if (!target) return jsonResponse({ success: false, error: '未找到指定的写入目标表格' }, 400);
      if (!description || !description.trim()) return jsonResponse({ success: false, error: '请输入描述内容' }, 400);
      try {
        const targetFileId = target.fileId || doc.fileId;
        const sid = await initMcpSession(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey);
        const sheets = await getSheetList(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId);
        const sheet = sheets.find(s => s.sheet_name === target.sheetName) || sheets[0];
        if (!sheet) return jsonResponse({ success: false, error: '文档中未找到任何工作表' }, 400);
        const csv = await readSheetCsv(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, targetFileId, sheet.sheet_id, Math.min(sheet.row_count, 50), sheet.col_count);
        const lines = csv.split('\n').filter(l => l.trim());
        if (lines.length === 0) return jsonResponse({ success: false, error: '工作表为空' }, 400);
        const headers = parseCsvLine(lines[0]);
        const extractResult = await extractRowData(config.llm, headers, target.name, description);
        if (extractResult.nonEmptyCount === 0) {
          return jsonResponse({ success: false, error: '未能从描述中提取到任何有效数据，请检查输入内容' }, 400);
        }
        let emptyRowIndex = lines.length;
        for (let i = 1; i < lines.length; i++) {
          const cells = parseCsvLine(lines[i]);
          if (cells.every(c => !c || !c.trim())) { emptyRowIndex = i; break; }
        }
        return jsonResponse({
          success: true,
          data: { headers: headers, values: extractResult.values, missing: extractResult.missing, targetRow: emptyRowIndex, sheetName: sheet.sheet_name, sheetId: sheet.sheet_id, targetFileId: targetFileId, preview: buildPreviewText(headers, extractResult.values), debug: { method: extractResult.method, parseTime: extractResult.parseTime, llmRaw: extractResult.raw, llmError: extractResult.llmError, nonEmptyCount: extractResult.nonEmptyCount, headerCount: headers.length, totalLines: lines.length } }
        });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // POST /api/write/execute
    if (url.pathname === '/api/write/execute' && request.method === 'POST') {
      const body = await request.json();
      const docId = body.docId || config.defaultDocumentId;
      const targetFileId = body.targetFileId;
      const sheetId = body.sheetId;
      const targetRow = body.targetRow;
      const values = body.values;
      const doc = getDocumentById(config, docId);
      if (!doc) return jsonResponse({ success: false, error: '未找到指定文档' }, 400);
      if (!values || !Array.isArray(values)) return jsonResponse({ success: false, error: '写入数据无效' }, 400);
      const nonEmptyCount = values.filter(v => v && String(v).trim()).length;
      if (nonEmptyCount === 0) return jsonResponse({ success: false, error: '写入数据全为空，已阻止写入' }, 400);
      const writeDocId = targetFileId || doc.fileId;
      try {
        const sid = await initMcpSession(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey);
        const sheets = await getSheetList(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, writeDocId);
        const sheet = sheets.find(s => s.sheet_id === sheetId);
        if (!sheet) return jsonResponse({ success: false, error: '未找到指定工作表' }, 400);
        const checkCsv = await readSheetCsv(config.tencentDocs.mcpUrl, config.tencentDocs.apiKey, sid, writeDocId, sheetId, targetRow + 1, sheet.col_count);
        const checkLines = checkCsv.split('\n').filter(l => l.trim());
        if (checkLines.length > targetRow) {
          const rowCells = parseCsvLine(checkLines[targetRow] || '');
          if (rowCells.some(c => c && c.trim())) {
            return jsonResponse({ success: false, error: '目标行已有数据，可能正在被其他人使用，请重新提取' }, 409);
          }
        }
        const result = await writeRow(config.tencentDocs, sid, writeDocId, sheetId, targetRow, values);
        return jsonResponse({ success: true, message: '写入成功，更新了 ' + result.updateNum + ' 个单元格', data: { updateNum: result.updateNum, row: targetRow } });
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
  }
};
