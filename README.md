[![npm version](https://badge.fury.io/js/shinycolors-icons.svg)](https://badge.fury.io/js/shinycolors-icons)
![担当](https://img.shields.io/badge/担当-小宮果穂,八宮めぐる-f29317)
# shinycolors-icons

アイドルマスター シャイニーカラーズのユニットアイコンセットのReactコンポーネントライブラリ

## インストール

```bash
pnpm add shinycolors-icons
# or
npm install shinycolors-icons
# or
yarn add shinycolors-icons
```

## 使い方

```tsx
import { Alstroemeria, Cometik, HokagoClimaxGirls } from 'shinycolors-icons';

function App() {
  return (
    <div>
      <Alstroemeria />
      <Cometik size={32} color="#1A1A1C" />
      <HokagoClimaxGirls size={24} aria-label="ロゴ" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | アイコンのサイズ（px） |
| `color` | `string` | `'currentColor'` | アイコンの色 |
| `className` | `string` | - | CSSクラス |
| `style` | `React.CSSProperties` | - | インラインスタイル |


## ライセンス

MIT
