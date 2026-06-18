# Identidade Visual — Goulart Consultoria em TI

Guia de marca da **Goulart Consultoria em TI LTDA** (CNPJ 51.399.263/0001-56).

## Logotipo

O logotipo é formado por **símbolo** (monograma "G" estilizado como um nó de
rede aberto, sugerindo conexão e tecnologia) + **wordmark** ("Goulart /
Consultoria em TI").

| Arquivo | Uso |
| --- | --- |
| `public/logo.svg` | Logotipo horizontal — fundos claros |
| `public/logo-light.svg` | Logotipo horizontal — fundos escuros |
| `public/logo-mark.svg` | Apenas o símbolo (avatar, ícone, redes) |
| `src/app/icon.svg` | Favicon do site |

**Área de proteção:** mantenha um espaço livre equivalente à metade da altura
do símbolo em volta do logotipo. Tamanho mínimo do símbolo: 24px.

## Paleta de cores

| Token | Hex | Uso |
| --- | --- | --- |
| Brand | `#3b82f6` | Cor primária, botões, links |
| Brand Strong | `#2563eb` | Hover / estados ativos |
| Accent (ciano) | `#22d3ee` | Destaques, gradientes |
| Fundo | `#0b1020` | Base do site (dark) |
| Fundo suave | `#11182e` | Seções alternadas |
| Superfície | `#131c34` | Cards |
| Borda | `#233052` | Divisórias |
| Texto | `#e6ebf5` | Texto principal |
| Texto suave | `#9aa6c4` | Texto secundário |

**Gradiente da marca:** `linear-gradient(120deg, #3b82f6 → #22d3ee)`.

Os tokens estão centralizados em `src/app/globals.css` (`:root`).

## Tipografia

- **Família:** [Inter](https://rsms.me/inter/) (carregada via `next/font`).
- **Títulos:** peso 700, tracking levemente negativo.
- **Corpo:** peso 400–500.

## Aplicação

A identidade está aplicada em todo o site (`src/app/`). Para reutilizar o
gradiente ou as cores, use as variáveis CSS de `globals.css` em vez de valores
fixos.
