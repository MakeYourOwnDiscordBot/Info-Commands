# Discord-Info-Commands
Discordサーバー内の情報を表示するコマンドを追加する拡張機能

## 拡張コマンド
|追加されるコマンド|使用方法(※設定によって変わります)|表示される情報|
|---|---|---|
|サーバー<br>情報表示|`!server`|<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/server-command.png" width="320px">|
|ユーザー<br>情報表示|`!user @user`<br>もしくは<br>`!user userID`|<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/user-command.png" width="160px">  <img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/user-command1.png" width="160px"><br>オプションで権限表示もできます|
|ロール<br>情報表示|`!role @role`<br>もしくは<br>`!role roleID`|<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/role-command.png" width="320px"><br>オプションで権限表示もできます|
<br>

## 設定方法(古いので更新中)

### 1.このリポジトリは下記リポジトリの拡張機能です。
[これ(main)](https://github.com/MakeYourOwnDiscordBot/main)をセットアップする。<br><br>
### 2.コマンドを使えるようにする。
`info`フォルダを**直接**`Extensions`フォルダにドラッグ&ドロップ
### 3.詳細設定を行う。(デフォルトのままでも使えるし、セキュリティ上の問題も特にない)
`info`フォルダにある`commandConfig.json`を開く<br>
以下設定項目と説明<br>
[***設定の具体例***](https://github.com/MakeYourOwnDiscordBot/Info-Commands/blob/main/README.md#4設定具体例)
##### `serverCommand` : サーバーの情報を表示するコマンドの設定
- [x] `aliases` **:** serverコマンドを実行する文字列(いくつか登録した場合、どれでも使える)
- [x] `embedColor` **:** serverコマンドを使った時に送信するembed(埋め込み)の色(`"RED"`、`"BLUE"`、`"#ff00ff"`など) | [色見本](https://www.colordic.org/)
- [x] `ownerOnly` **:** `true`の場合、serverコマンドはbotのオーナーしか使えない<br><br>
##### `userCommand`: 指定したユーザーの情報を表示するコマンドの設定
- [x] `aliases` **:** userコマンドを実行する文字列(いくつか登録した場合、どれでも使える)
- [x] `ownerOnly` **:** `true`の場合、serverコマンドはbotのオーナーしか使えない<br><br>
##### `roleCommand`: 指定したロールの情報を表示するコマンドの設定 
- [x] `aliases` **:** roleコマンドを実行する文字列(いくつか登録した場合、どれでも使える)
- [x] `ownerOnly` **:** `true`の場合、serverコマンドはbotのオーナーしか使えない<br><br>
### 4.設定具体例
<details><summary>デフォルト(クリックで展開)</summary>
  
デフォルト設定
```json
{
   "serverCommand":{
      "aliases":[
         "server"
      ],
      "embedColor":"BLUE",
      "ownerOnly":false,
      "userPermissions":[]
   },
   "userCommand":{
      "aliases":[
         "user"
      ],
      "ownerOnly":false,
      "userPermissions": []
   },
   "roleCommand":{
      "aliases":[
         "role"
      ],
      "ownerOnly":false,
      "userPermissions":[]
   }
}
```
</details>


<details><summary>例1(クリックで展開)</summary>
  
aliasesを増やして簡易的に実行できるようにしてある。(aliasesを増やしすぎると、aliasesが被ってコマンドが二つ実行されてしまうことがあるので注意！)
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


<details><summary>例2(クリックで展開)</summary>
  
権限強め、`OWNERS_ID`に登録されていてかつ、管理者権限(`ADMINISTRATOR`)を持っていないと実行できない(あくまで例、この設定にするのはお勧めできない。)
```json
{
   "serverCommand":{
      "aliases":[
         "server"
      ],
      "embedColor":"BLUE",
      "ownerOnly":true,
      "userPermissions":[
         "ADMINISTRATOR"
      ]
   },
   "userCommand":{
      "aliases":[
         "user"
      ],
      "ownerOnly":true,
      "userPermissions":[
         "ADMINISTRATOR"
      ]
   },
   "roleCommand":{
      "aliases":[
         "role"
      ],
      "ownerOnly":true,
      "userPermissions":[
         "ADMINISTRATOR"
      ]
   }
}
```
</details>
