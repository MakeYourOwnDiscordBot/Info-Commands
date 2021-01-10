# Discord-Info-Commands
Discordサーバー内の情報を表示するコマンドを追加する拡張機能

## 拡張コマンド
|追加されるコマンド|使用方法(※設定によって変わります)|表示される情報|
|---|---|---|
|サーバー<br>情報表示|`!server`|<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/server-command.png" width="320px">|
|ユーザー<br>情報表示|`!user @user`<br>もしくは<br>`!user userID`|<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/user-command.png" width="160px">  <img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/user-command1.png" width="160px"><br>オプションで権限表示もできます|
|ロール<br>情報表示|`!role @role`<br>もしくは<br>`!role roleID`|<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/role-command.png" width="320px"><br>オプションで権限表示もできます|
<br>

## オプション
|コマンド|オプション|画像|
|---|---|---|
|user|管理者権限を持っている人が<br>コマンドの最後に`true`をつけると権限を表示できる|<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/command-option-user.png" width="320px">|
|role|管理者権限を持っている人が<br>コマンドの最後に`true`をつけると権限を表示できる|<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/command-option-role.png" width="320px">|

## 設定方法(古いので更新中)

### 1.このリポジトリは下記リポジトリの拡張機能です。
[これ(main)](https://github.com/MakeYourOwnDiscordBot/main)をセットアップする。<br><br>
### 2.コマンドを使えるようにする。
`info`フォルダを**直接**`Extensions`フォルダにドラッグ&ドロップ<br>
<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/info-folder.png" width=160px>
<br><br>
### 3.詳細設定を行う。(デフォルトのままでも使えるし、セキュリティ上の問題も特にない)
`info`フォルダにある`commandConfig.json`を開く<br>

[***設定の具体例***](https://github.com/MakeYourOwnDiscordBot/Info-Commands/blob/main/README.md#4設定具体例)

#### 設定項目と説明<br>
- [ ] 任意の項目(空欄でもいい)
- [x] 必須項目

##### `serverCommand` : サーバーの情報を表示するコマンドの設定
- [ ] `aliases` **:** serverコマンドを実行する文字列(いくつか登録した場合、どれでも使える)(空欄だと`server`のみに反応)
- [x] `embedColor` **:** serverコマンドを使った時に送信するembed(埋め込み)の色(`"RED"`、`"BLUE"`、`"#ff00ff"`など) | [色見本](https://www.colordic.org/)
- [ ] `cooldown` **:** 一度コマンドを使用してからもう一度おなじコマンドが使えるようになるまでの時間。単位は秒。(空欄だと1秒)
- [ ] `description` **:** コマンドの説明文、[helpコマンド]()を使用したときに表示される。
- [ ] `disabled` **:** `true`にすると、そのコマンドのみ止めることができる。(空欄だと`false`)
- [x] `ownerOnly` **:** `true`の場合、serverコマンドはbotのオーナーしか使えない<br><br>
##### `userCommand`: 指定したユーザーの情報を表示するコマンドの設定
- [ ] `aliases` **:** userコマンドを実行する文字列(いくつか登録した場合、どれでも使える)(空欄だと`user`のみに反応)
- [ ] `cooldown` **:** 一度コマンドを使用してからもう一度おなじコマンドが使えるようになるまでの時間。単位は秒。(空欄だと1秒)
- [ ] `description` **:** コマンドの説明文、[helpコマンド]()を使用したときに表示される。
- [ ] `disabled` **:** `true`にすると、そのコマンドのみ止めることができる。(空欄だと`false`)
- [x] `ownerOnly` **:** `true`の場合、serverコマンドはbotのオーナーしか使えない<br><br>
##### `roleCommand`: 指定したロールの情報を表示するコマンドの設定 
- [ ] `aliases` **:** roleコマンドを実行する文字列(いくつか登録した場合、どれでも使える)(空欄だと`role`のみに反応)
- [ ] `cooldown` **:** 一度コマンドを使用してからもう一度おなじコマンドが使えるようになるまでの時間。単位は秒。(空欄だと1秒)
- [ ] `description` **:** コマンドの説明文、[helpコマンド]()を使用したときに表示される。
- [ ] `disabled` **:** `true`にすると、そのコマンドのみ止めることができる。(空欄だと`false`)
- [x] `ownerOnly` **:** `true`の場合、serverコマンドはbotのオーナーしか使えない<br><br>
### 4.設定具体例
<details><summary>デフォルト(クリックで展開)</summary>
  
デフォルト設定
```json
{
   "serverCommand":{
      "aliases":[],
      "embedColor":"BLUE",
      "ownerOnly":false,
      "cooldown":5,
      "description": "サーバーの情報を表示",
      "disabled":false
   },
   "userCommand":{
      "aliases":[],
      "ownerOnly":false,
      "cooldown":5,
      "description": "ユーザーの情報を取得\n使用方法:!user <@user>\n!user <user ID>",
      "disabled":false
   },
   "roleCommand":{
      "aliases":[],
      "ownerOnly":false,
      "cooldown":5,
      "description": "ロール情報を表示\n使用方法: !role <@role>\n!role <role ID>",
      "disabled":false
   }
}
```
</details>


<details><summary>例1(クリックで展開)</summary>
  
aliasesを増やして簡易的に実行できるようにしてある。(aliasesを増やしすぎると、aliasesが被ってコマンドが二つ実行されてしまうことがあるので注意！)
```json
{
   "serverCommand":{
      "aliases":["s","server-info"],
      "embedColor":"RANDOM",
      "ownerOnly":false,
      "cooldown":5,
      "description": "サーバーの情報を表示",
      "disabled":false
   },
   "userCommand":{
      "aliases":["u","user-info"],
      "ownerOnly":false,
      "cooldown":5,
      "description": "ユーザーの情報を取得\n使用方法:!user <@user>\n!user <user ID>",
      "disabled":false
   },
   "roleCommand":{
      "aliases":["r","role-info"],
      "ownerOnly":false,
      "cooldown":5,
      "description": "ロール情報を表示\n使用方法: !role <@role>\n!role <role ID>",
      "disabled":false
   }
}
```
</details>


<details><summary>例2(クリックで展開)</summary>
  
権限強め、botオーナーでないと実行できない(あくまで例、この設定にするのはお勧めできない。)
```json
{
   "serverCommand":{
      "aliases":[],
      "embedColor":"BLUE",
      "ownerOnly":true,
      "cooldown":5,
      "description": "サーバーの情報を表示",
      "disabled":false
   },
   "userCommand":{
      "aliases":[],
      "ownerOnly":true,
      "cooldown":5,
      "description": "ユーザーの情報を取得\n使用方法:!user <@user>\n!user <user ID>",
      "disabled":false
   },
   "roleCommand":{
      "aliases":[],
      "ownerOnly":true,
      "cooldown":5,
      "description": "ロール情報を表示\n使用方法: !role <@role>\n!role <role ID>",
      "disabled":false
   }
}
```
</details>
