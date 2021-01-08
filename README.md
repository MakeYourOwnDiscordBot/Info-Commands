# Discord-Info-Commands
Discordサーバー内の情報を表示するコマンド

## 使用方法
### 1.このリポジトリは下記リポジトリの拡張機能です。
[これ](https://github.com/MakeYourOwnDiscordBot/main)をセットアップする。
### 2.コマンドを使えるようにする。
`info`フォルダを**直接**`commands`フォルダにドラッグ&ドロップ
### 3.詳細設定を行う。
`info`フォルダにある`commandConfig.json`を開く
↓例
```json
{
   "serverCommand":{ //serverコマンドの設定
      "aliases":[  //serverコマンドを使う際の文字列(どれでも使える)
         "server","server-info","s","server-i"
      ],
      "embedColor":"RANDOM",//serverコマンドを使った時に送信するembed(埋め込み)の色("RED"、"BLUE"、"#ff00ff"など) 
      "ownerOnly":false,
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
[embed(埋め込み)の色見本](https://www.colordic.org/)
