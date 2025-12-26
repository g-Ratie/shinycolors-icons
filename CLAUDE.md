# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # 開発サーバー起動（Reactデモアプリ）
pnpm build    # TypeScriptチェック + Viteビルド (tsc --project tsconfig.build.json && vite build)
pnpm preview  # ビルド出力のプレビュー
```

## Architecture

Vite + React + TypeScriptによるReactコンポーネントライブラリプロジェクト。

### ディレクトリ構造

```
lib/
  icons/
    AddLine.tsx          # アイコンコンポーネント（SVGベース）
  types.ts              # 共通IconPropsインターフェース
  index.ts              # メインエントリポイント
src/
  App.tsx               # Reactデモアプリ
  main.tsx              # React.createRoot
  style.css
dist/
  shinycolors-icons.js  # ESM出力
  shinycolors-icons.umd.cjs  # UMD出力
  index.d.ts            # 自動生成された型定義
```

### ビルド設定

- **エントリポイント**: `lib/index.ts`
- **出力形式**: ESM（Tree Shaking対応）+ UMD（レガシー対応）
- **型定義**: `vite-plugin-dts`で自動生成
- **外部依存**: React, React-DOM（外部化）

### アイコンコンポーネント仕様

全アイコンは共通の`IconProps`インターフェースを実装：

```typescript
export interface IconProps {
  size?: number | string;       // デフォルト: 24
  color?: string;               // デフォルト: 'currentColor'
  className?: string;           // CSS クラス
  style?: React.CSSProperties;  // インラインスタイル
}
```

新しいアイコンを追加する場合：
1. `lib/icons/NewIconName.tsx`を作成
2. 共通型`IconProps`を実装
3. `lib/index.ts`にエクスポートを追加

### 開発フロー

- デモアプリは`src/App.tsx`で実装（`pnpm dev`で起動）
- ライブラリはTypeScript型チェック + Viteでバンドル
- 型定義は自動生成されるため、手動更新は不要
