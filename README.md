# Discord-Info-Commands
Discordサーバー内の情報を表示するコマンド

## 使用方法
### 1.このリポジトリは下記リポジトリの拡張機能です。
[これ](https://github.com/MakeYourOwnDiscordBot/main)をセットアップする。
### 2.コマンドを使えるようにする。
`info`フォルダを**直接**`commands`フォルダにドラッグ&ドロップ
### 3.詳細設定を行う。
`info`フォルダにある`commandConfig.json`を開く
```json
{
   "serverCommand":{
      "aliases":[
         "server"
      ],
      "embedColor":"BLUE",
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
}```
