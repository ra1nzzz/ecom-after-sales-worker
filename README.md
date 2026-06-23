# 综合电商售后处理系统 - Cloudflare Worker 版

基于 Cloudflare Workers 部署的电商售后处理工具，支持腾讯文档 MCP 读写和 LLM 智能录入。

## 在线访问

https://ecomtools.ytaiv.com

## 功能

- **查询**: 按快递单号搜索腾讯文档中的售后记录
- **写入**: 通过 LLM 自然语言描述，自动识别表头结构并写入空行
- **配置**: 支持多文档、多写入目标、LLM 多供应商切换

## 技术栈

- Cloudflare Workers (ES Modules)
- Cloudflare KV (配置存储)
- 腾讯文档 MCP API (JSON-RPC 2.0)
- OpenAI 兼容 LLM API (DeepSeek / Doubao / Qwen / Ollama)

## 部署

### 前置要求

- Cloudflare 账号
- 腾讯文档 API Key
- (可选) LLM API Key

### 部署步骤

1. 复制 `config.example.json` 并填入你的配置
2. 运行部署脚本（需要 Node.js 22+）：

```bash
# 编辑 deploy-cf.js 中的配置后运行
node deploy-cf.js
```

部署脚本会自动完成：
- 创建 KV 命名空间
- 上传 Worker 脚本
- 配置 DNS 记录
- 创建 Worker 路由

### 手动更新

修改 `worker.js` 后，重新运行 `node deploy-cf.js` 即可。

## 与本地版的区别

| 特性 | 本地版 | CF Worker 版 |
|------|--------|-------------|
| 运行环境 | Node.js | Cloudflare Workers |
| 配置存储 | config.json 文件 | KV 命名空间 |
| MCP 会话 | 内存缓存，持久连接 | 每次请求初始化 |
| LLM 调用 | OpenAI SDK | 原生 fetch |
| 自动刷新 | setInterval 定时 | 无（按需刷新） |
| 部署方式 | 本地运行 | 边缘部署 |

## License

MIT
