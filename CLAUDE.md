# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # 開発サーバー起動
pnpm build    # TypeScriptチェック + Viteビルド (tsc && vite build)
```

## Architecture

Vite + TypeScriptによるライブラリプロジェクト。

- `lib/` - ライブラリのソースコード（ビルド対象エントリポイント: `lib/main.ts`）
- `src/` - 開発用デモアプリ
- `dist/` - ビルド出力（ESM: `counter.js`, CJS: `counter.umd.cjs`）
- `index.d.ts` - 型定義ファイル

ビルド設定は`vite.config.ts`でライブラリモードを使用。
