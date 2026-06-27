# Task Board Project

## プロジェクト概要

タスク管理ボードアプリケーション。

## Git 運用ルール

### コード変更時の必須手順

**コードを変更するたびに、必ずGitHubへプッシュすること。**

変更後は以下の手順を実行する:

```bash
git add <変更ファイル>
git commit -m "コミットメッセージ"
git push origin <ブランチ名>
```

### コミットメッセージ規則

- 変更内容を日本語または英語で簡潔に記述する
- 例: `feat: タスク追加機能を実装`, `fix: 削除ボタンの不具合を修正`

### ブランチ戦略

- `main`: 本番相当の安定ブランチ
- 機能追加・バグ修正は直接 `main` にコミットしてプッシュする

### プッシュの注意事項

- 破壊的な操作（`git push --force` など）は使用しない
- プッシュ前に `git status` で変更内容を確認する

## デプロイ先

https://htyt0820a.github.io/task-board/

## 技術スタック

| カテゴリ | 技術 |
|---|---|
| フレームワーク | React 18 |
| ビルドツール | Vite 5 |
| 言語 | JavaScript (JSX) |
| スタイリング | Plain CSS (CSS Modules なし) |
| 状態管理 | React useState / useEffect |
| データ永続化 | localStorage |
| パッケージマネージャ | npm |

## コンポーネント命名規約

- コンポーネントファイル名・関数名は **PascalCase** (`App.jsx`)
- CSS クラス名は **kebab-case** (`.task-item`, `.add-btn`, `.delete-btn`)
- ローカルストレージのキーは **kebab-case** の文字列定数 (`task-board-tasks`)
- state 変数は **camelCase** (`tasks`, `input`)
- イベントハンドラは `handle` プレフィックス + 動詞 (`handleKeyDown`)

## 開発ガイドライン

- コードを変更した際は型チェックやテストを実行してから commit する
- 新しいファイルを作成する前に既存ファイルの修正で対応できないか検討する
- コメントは非自明な理由がある場合のみ記述する
