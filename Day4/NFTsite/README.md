# KryptoCamp Homework - NFT Site 

> **GitHub 的問題**

> 1. 10.14.? 以前的 OS 版本無法使用 Fork.app
> 解法：https://github.com/fork-dev/Tracker/issues/611
> ```
> dyld: Library not loaded: @rpath/libswiftAppKit.dylib
> Referenced from: /usr/local/bin/fork
> Reason: image not found
> ```

> 2. Please use a personal access token
> [建立 Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
> 接著左上角 Fork -> Account -> 使用 Token 登入 github

此範例使用自動化工具 [Scaffold-ETH](https://github.com/scaffold-eth/scaffold-eth) 建置

**參考連結：**
1. [Scaffold-eth Challenge 1: Staking dApp](https://stermi.medium.com/how-to-write-your-first-decentralized-app-scaffold-eth-challenge-1-staking-dapp-b0b6a6f4d242)

### Step1：在 Terminal 執行以下指令建置環境，以及運作 Local 測試鏈

```
yarn install 
yarn chain
```

> #### 無法啟動 JSON RPC Server？
> 在 Terminal 執行 export NODE_OPTIONS=--openssl-legacy-provider 搞定，修改 Node.js max heap size 的限制 - [Stack Overflow 的解釋](https://stackoverflow.com/questions/69659558/error-hh604-error-running-json-rpc-server-error0308010cdigital-envelope-rout)

### Step2：撰寫合約（可先略過），在 Local 部署。接著啟動 React APP

```
yarn deploy
yarn start // 啟動要等一下，請保持耐心
```

> error Command failed with exit code 1

> 不知為何，一樣在 Terminal 執行 export NODE_OPTIONS=--openssl-legacy-provider 又解決了 = A = - [Stack Overflow 的解釋](https://stackoverflow.com/questions/55323656/error-command-failed-with-exit-code-1-when-i-try-to-run-yarn)、[第二個解釋](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)


### Step3：撰寫前端（可先略過）

1. 練習修改 APP.jsx，開發環境會即時 Compile。
2. JSX 是 React 官方推薦的樣板語言。

### Step4：deploy to the testnet!!

參考連結：https://docs.scaffoldeth.io/scaffold-eth/getting-started/deploying-your-contracts

1. 更改 hardhat.config.js，將主網 defaultNetwork 設為 ropsten
2. 往下尋找 ropsten 的設定檔，將 infura ID 改為自己的 Infura Project ID
3. `yarn generate` 生成部署帳戶（deploy account）
4. 此時也生成了 mnemonic.txt，以及 {account}.txt，要很注意的是，這兩個檔案不要上傳到 git!!!!
5. `yarn account` 查看帳戶，並寄些 ETH 到 Terminal 顯示的地址。有錢才可以請礦工 deploy
6. `yarn deploy` 部署合約

### Step5：Upload Front-End APP

參考連結：（同 Step4）https://docs.scaffoldeth.io/scaffold-eth/getting-started/deploying-your-contracts

1. 確認 APP.jsx 的 initialNetwork（前端要連的網路）是正確的，預設是 localhost
   APP.jsx 的 DEBUG 設為 false
   至 ./constants.js 修改 INFURA_ID
2. `yarn build` 部署
   凍結在 `Creating an optimized production build...`，請耐心等待 = =
3. `yarn surge`
   在 yarn 環境可以直接使用，這是免費存放靜態網頁的 Server
   上傳後會給你一個網址，進入網址就可使用囉 O_O

### Ending

以下保留原本的 README.md

------

# 🏗 Scaffold-ETH

> everything you need to build on Ethereum! 🚀

🧪 Quickly experiment with Solidity using a frontend that adapts to your smart contract:

![image](https://user-images.githubusercontent.com/2653167/124158108-c14ca380-da56-11eb-967e-69cde37ca8eb.png)


# 🏄‍♂️ Quick Start

Prerequisites: [Node](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> clone/fork 🏗 scaffold-eth:

```bash
git clone https://github.com/scaffold-eth/scaffold-eth.git
```

> install and start your 👷‍ Hardhat chain:

```bash
cd scaffold-eth
yarn install
yarn chain
```

> in a second terminal window, start your 📱 frontend:

```bash
cd scaffold-eth
yarn start
```

> in a third terminal window, 🛰 deploy your contract:

```bash
cd scaffold-eth
yarn deploy
```

🔏 Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app

# 📚 Documentation

Documentation, tutorials, challenges, and many more resources, visit: [docs.scaffoldeth.io](https://docs.scaffoldeth.io)

# 🔭 Learning Solidity

📕 Read the docs: https://docs.soliditylang.org

📚 Go through each topic from [solidity by example](https://solidity-by-example.org) editing `YourContract.sol` in **🏗 scaffold-eth**

- [Primitive Data Types](https://solidity-by-example.org/primitives/)
- [Mappings](https://solidity-by-example.org/mapping/)
- [Structs](https://solidity-by-example.org/structs/)
- [Modifiers](https://solidity-by-example.org/function-modifier/)
- [Events](https://solidity-by-example.org/events/)
- [Inheritance](https://solidity-by-example.org/inheritance/)
- [Payable](https://solidity-by-example.org/payable/)
- [Fallback](https://solidity-by-example.org/fallback/)

📧 Learn the [Solidity globals and units](https://solidity.readthedocs.io/en/v0.6.6/units-and-global-variables.html)

# 🛠 Buidl

Check out all the [active branches](https://github.com/scaffold-eth/scaffold-eth/branches/active), [open issues](https://github.com/scaffold-eth/scaffold-eth/issues), and join/fund the 🏰 [BuidlGuidl](https://BuidlGuidl.com)!

  
 - 🚤  [Follow the full Ethereum Speed Run](https://medium.com/@austin_48503/%EF%B8%8Fethereum-dev-speed-run-bd72bcba6a4c)


 - 🎟  [Create your first NFT](https://github.com/scaffold-eth/scaffold-eth/tree/simple-nft-example)
 - 🥩  [Build a staking smart contract](https://github.com/scaffold-eth/scaffold-eth/tree/challenge-1-decentralized-staking)
 - 🏵  [Deploy a token and vendor](https://github.com/scaffold-eth/scaffold-eth/tree/challenge-2-token-vendor)
 - 🎫  [Extend the NFT example to make a "buyer mints" marketplace](https://github.com/scaffold-eth/scaffold-eth/tree/buyer-mints-nft)
 - 🎲  [Learn about commit/reveal](https://github.com/scaffold-eth/scaffold-eth/tree/commit-reveal-with-frontend)
 - ✍️  [Learn how ecrecover works](https://github.com/scaffold-eth/scaffold-eth/tree/signature-recover)
 - 👩‍👩‍👧‍👧  [Build a multi-sig that uses off-chain signatures](https://github.com/scaffold-eth/scaffold-eth/tree/meta-multi-sig)
 - ⏳  [Extend the multi-sig to stream ETH](https://github.com/scaffold-eth/scaffold-eth/tree/streaming-meta-multi-sig)
 - ⚖️  [Learn how a simple DEX works](https://medium.com/@austin_48503/%EF%B8%8F-minimum-viable-exchange-d84f30bd0c90)
 - 🦍  [Ape into learning!](https://github.com/scaffold-eth/scaffold-eth/tree/aave-ape)

# 💌 P.S.

🌍 You need an RPC key for testnets and production deployments, create an [Alchemy](https://www.alchemy.com/) account and replace the value of `ALCHEMY_KEY = xxx` in `packages/react-app/src/constants.js` with your new key.

# 🏃💨 Speedrun Ethereum
Register as a builder [here](https://speedrunethereum.com) and start on some of the challenges and build a portfolio.


# 💬 Support Chat

Join the telegram [support chat 💬](https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA) to ask questions and find others building with 🏗 scaffold-eth!

---

🙏 Please check out our [Gitcoin grant](https://gitcoin.co/grants/2851/scaffold-eth) too!

### Automated with Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/scaffold-eth/scaffold-eth)