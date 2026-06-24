# deploy-text — デプロイテスト用サンプルサイト

## プロジェクト概要

静的HTMLサイト。Vercel / Netlify / GitHub Pages へのデプロイ動作確認用。

## ディレクトリ構成

```
deploy-text/
├── index.html          # メインページ
├── assets/
│   ├── style.css       # グローバルスタイル
│   └── main.js         # インタラクション
├── CLAUDE.md           # このファイル
├── design.md           # デザイン仕様
├── package.json        # npm スクリプト
├── vercel.json         # Vercel デプロイ設定
└── netlify.toml        # Netlify デプロイ設定
```

## 開発コマンド

```bash
# ローカルサーバー起動（要 Node.js）
npm run dev

# ビルド（静的サイトなのでコピーのみ）
npm run build
```

## デプロイ方法

### Vercel
```bash
npx vercel
```

### Netlify
```bash
npx netlify deploy --dir . --prod
```

### GitHub Pages
リポジトリの Settings > Pages > Deploy from branch で `main` ブランチのルートを指定。

## 技術スタック

- HTML5 / CSS3 / Vanilla JS（フレームワーク不使用）
- ビルドツールなし（静的ファイルをそのまま配信）

## デザイン

詳細は [design.md](design.md) を参照。
