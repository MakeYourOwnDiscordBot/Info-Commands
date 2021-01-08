# Discord-Info-Commands
Discordサーバー内の情報を表示するコマンド

## 使用方法
### 1.このリポジトリは下記リポジトリの拡張機能です。
[これ](https://github.com/MakeYourOwnDiscordBot/main)をセットアップする。
### 2.コマンドを使えるようにする。
`info`フォルダを**直接**`commands`フォルダにドラッグ&ドロップ
### 3.詳細設定を行う。
`info`フォルダにある`commandConfig.json`を開く<br>
以下設定項目と説明<br>
[設定の具体例]()
##### `serverCommand` サーバーの情報を表示するコマンドの設定
- [ ] `aliases` serverコマンドを実行する文字列(いくつか登録した場合、どれでも使える)
- [ ] `embedColor` serverコマンドを使った時に送信するembed(埋め込み)の色("RED"、"BLUE"、"#ff00ff"など) | [色見本](https://www.colordic.org/)
- [ ] `ownerOnly` trueの場合、serverコマンドはOWNERS_IDに登録されている人しか使えない
- [ ] `userPermissions` ここに書いてある権限を**全て持っている**人しかserverコマンドを使えない(権限がなくても使えるようにする場合は`[]`にする) | [discordの権限一覧](https://scrapbox.io/discordjs-japan/Discordの権限まとめ)<br><br>
### 4.設定具体例
<details><summary>例1(クリックで展開)</summary>
  

```json
{
   "serverCommand":{
      "aliases":[  
         "server","server-info","s"
      ],
      "embedColor":"RANDOM", 
      "ownerOnly":false, 
      "userPermissions":[]
   },
   "userCommand":{
      "aliases":[
         "user","user-info","u"
      ],
      "ownerOnly":false,
      "userPermissions":[]
   },
   "roleCommand":{
      "aliases":[
         "role","role-info","r"
      ],
      "ownerOnly":false,
      "userPermissions":[]
   }
}
```
</details>


