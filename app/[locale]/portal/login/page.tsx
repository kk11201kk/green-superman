export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto px-6 py-20 text-center">
      <div className="text-5xl mb-4">🔐</div>
      <h1 className="text-xl font-black text-[var(--color-green-dark)] mb-2">會員入口</h1>
      <p className="text-sm text-[var(--color-green-mid)] mb-8">會員登入功能即將上線，敬請期待。</p>
      <a
        href="https://line.me"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors inline-block"
        style={{ backgroundColor: 'var(--color-green-primary)' }}
      >
        📱 先透過 LINE 聯絡我們
      </a>
    </div>
  )
}
