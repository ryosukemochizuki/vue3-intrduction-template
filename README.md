# Vue3-introduction-template

これは、Vue2 を実装したことがある人を想定しています。

Vue3 で変わったところ(特に composition-API)を中心に取り扱います。

Geeksalon WebExpert コースの Vue3 に関する勉強会リポジトリです。

## compositionAPI とは?

Vue3 で追加された「関心毎ごとにロジックを記述する」ことができる新しい書き方。

今までは、もし 1 ページにいろいろな機能が入っていても、computed や methods などでごちゃっと書くしか無かった

↓

一つの関数内にまとめることでその返り値を見て、このコンポーネントが何をしているか判断できる

# セットアップ

```
$ git clone https://github.com/ryosukemochizuki/vue3-intrduction-template.git && cd vue3-intrduction-template && npm ci && npm run serve
```

# todo

※ステップ毎に import するコンポーネントを変更する(ステップ 1 はされている)

## 1. Vue2 で書かれたカウンターアプリを Vue3 の compositionAPI を用いて書き換える

- `components/Counter.vue`を編集する。

- Vue の optionAPI も今まで通り使えるが、使わずに実装すること。

### 発展

- 読み込まれた時に、初期値を 10 にしてみる

## 2. Vue3 で保存機能なしの todo リストを作ってみる

- `App.vue`に`components/todoList.vue`をインポートする
- 0 ベースで作ってみて下さい

## 3. 2 で作った todolist のデータを localStorage から保存、取り出す

- どこまでこだわるかは自由ですが、デザインに集中しすぎるのはやめること

## 4. todoList を firebasev9 を連携してみる(時間がある人)

2 で作った todolist を firebase に保存、取り出しをする

# 参考

https://v3.ja.vuejs.org/guide/composition-api-introduction.html#%E3%81%AA%E3%81%9B%E3%82%99-composition-api-%E3%81%AA%E3%81%AE%E3%81%8B
