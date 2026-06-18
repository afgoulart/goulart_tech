/** @type {import('next').NextConfig} */

// O GitHub Pages publica o site em um subdiretório (.../goulart_tech).
// Em produção precisamos do basePath/assetPrefix para que CSS, JS e
// imagens carreguem corretamente. Em desenvolvimento (yarn dev) fica vazio.
// Ao migrar para um domínio próprio na raiz (ex.: goulart.tech), basta
// definir BASE_PATH="" no build.
const isProd = process.env.NODE_ENV === 'production'
const basePath = process.env.BASE_PATH ?? (isProd ? '/goulart_tech' : '')

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
