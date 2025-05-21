# vertical-editor

日本語の縦書き原稿用紙スタイルで入力できる **React + TailwindCSS** 製エディタです。

## 取り合えず使ってみる

https://vertical-editor-j8u28jzdb-nakatsuka-ks-projects.vercel.app/

![demo](./demo.gif)

---

## 特長 ✨

* **縦書き・右→左** の本格的な原稿用紙レイアウト
* **列番号** が右端から 1-20 で横並び
* 1 文字目は **常に右上端** から開始
* 文字サイズ変更・文字数カウンタ
* 行数は無制限で自動スクロール
* 純粋なフロントエンド実装のみで **追加ライブラリ不要**
* MIT ライセンスで OSS 提供

---

## デモを見る 👀

```bash
# リポジトリをクローン
$ git clone https://github.com/nakatsuka-k/vertical-editor.git
$ cd vertical-editor

# 依存関係をインストール（Yarn 推奨）
$ yarn install

# 開発用サーバを起動
$ yarn dev
```

ブラウザで `http://localhost:5173` にアクセスするとデモページが開きます。

---

## コンポーネントとして使う 🛠️

```tsx
import VerticalEditor from "vertical-editor";

function App() {
  return (
    <div className="p-8">
      <VerticalEditor />
    </div>
  );
}
```

| Props           | 型                       | デフォルト | 説明                    |
| --------------- | ----------------------- | ----- | --------------------- |
| `initialFontPx` | `number`                | `20`  | 初期の文字サイズ(px)          |
| `cols`          | `number`                | `20`  | 列数（原稿用紙の横幅）           |
| `initialRows`   | `number`                | `20`  | 初期表示行数                |
| `onChange`      | `(text:string) => void` | —     | 入力が更新されるたびに呼ばれるコールバック |

> **注:** これらの props は今後のロードマップで公開予定です。現状はフォークしてカスタムしてください。

---

## ビルド & デプロイ 🏗️

```bash
# 本番ビルド
$ yarn build

# 静的ファイルが dist/ に生成されます
```

Vercel / Netlify など静的ホスティングにそのままデプロイ可能です。

---

## ディレクトリ構成 🗂️

```text
src/
├─ vertical-editor.tsx
├─ App.tsx
├─ main.tsx
└─ index.css
```

---

## ロードマップ 🗺️

* [ ] 行番号（縦側）の表示
* [ ] モバイル端末でのテキスト選択最適化
* [ ] Markdown エクスポート
* [ ] 自動保存・復元機能
* [ ] i18n（英語 README 含む）

---

## コントリビュート方法 🤝

1. Issue を確認し、担当したいものがあればコメントしてください
2. フォーク → ブランチを切る → 変更をコミット
3. **Conventional Commits** に従ったコミットメッセージ
4. Pull Request を作成

> PR は日本語 / 英語どちらでも歓迎です！

---

## ライセンス 📄

MIT © 2025 [nakatsuka-k](https://github.com/nakatsuka-k)
