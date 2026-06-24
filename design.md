# デザイン仕様

## カラーパレット

| 役割 | 変数名 | カラーコード |
|------|--------|------------|
| プライマリ | `--color-primary` | `#6366F1` (Indigo) |
| プライマリ（暗） | `--color-primary-dark` | `#4F46E5` |
| アクセント | `--color-accent` | `#F59E0B` (Amber) |
| 背景 | `--color-bg` | `#0F172A` (Slate 900) |
| サーフェス | `--color-surface` | `#1E293B` (Slate 800) |
| テキスト（メイン） | `--color-text` | `#F1F5F9` (Slate 100) |
| テキスト（サブ） | `--color-text-muted` | `#94A3B8` (Slate 400) |
| ボーダー | `--color-border` | `#334155` (Slate 700) |

## タイポグラフィ

| 用途 | フォント | サイズ | ウェイト |
|------|---------|--------|---------|
| 見出し | `'Inter', sans-serif` | 48px / 32px / 24px | 700 |
| 本文 | `'Inter', sans-serif` | 16px | 400 |
| キャプション | `'Inter', sans-serif` | 14px | 400 |
| コード | `'JetBrains Mono', monospace` | 14px | 400 |

## スペーシング

4px ベースグリッド。

| トークン | 値 |
|---------|-----|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |
| `--space-16` | 64px |

## ボーダーラジアス

| トークン | 値 | 用途 |
|---------|-----|------|
| `--radius-sm` | 6px | バッジ、タグ |
| `--radius-md` | 10px | カード、ボタン |
| `--radius-lg` | 16px | モーダル |
| `--radius-full` | 9999px | ピル形状 |

## コンポーネント

### ボタン
- `primary`: 背景 `--color-primary`、テキスト白、hover で `--color-primary-dark`
- `ghost`: 背景透明、ボーダー `--color-border`、hover で `--color-surface`

### カード
- 背景 `--color-surface`
- ボーダー `1px solid --color-border`
- 角丸 `--radius-md`
- padding `--space-6`

### バッジ
- 背景 `--color-primary` 15% 透過
- テキスト `--color-primary`
- 角丸 `--radius-full`

## アニメーション

| 種類 | duration | easing |
|------|---------|--------|
| 通常のトランジション | 200ms | `ease` |
| フェードイン | 400ms | `ease-out` |
| スライドアップ | 500ms | `cubic-bezier(0.16, 1, 0.3, 1)` |

## レスポンシブブレークポイント

| 名前 | 幅 |
|-----|-----|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
