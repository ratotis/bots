// ==UserScript==
// @name         defenders
// @namespace    Violentmonkey Scripts
// @match        *://sploop.io/
// @grant        none
// @version      1.5
// @run-at       document-start
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// @author       ratotis
// @description 8/31/2025, 11:36:58 PM
// ==/UserScript==
/******/
window.addEventListener('load', () => {
    const botConsole = document.createElement('div');
    botConsole.id = 'bot-console';
    botConsole.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
        color: #00ff00;
        font-family: monospace;
        font-size: 12px;
        line-height: 1.4;
        padding: 8px;
        max-width: 300px;
        max-height: 200px;
        overflow-y: auto;
        z-index: 9999;
        border-bottom-right-radius: 5px;
    `;
    document.body.appendChild(botConsole);

    window.logBot = function(msg) {
        const line = document.createElement("div");
        const timestamp = new Date().toLocaleTimeString();
        line.textContent = `[${timestamp}] ${msg}`;
        botConsole.appendChild(line);
        botConsole.scrollTop = botConsole.scrollHeight;

        if (botConsole.children.length > 50) {
            botConsole.removeChild(botConsole.children[0]);
        }
    };

    // 🟢 Gọi sau khi logBot đã định nghĩa
    logBot("✅ Bot console initialized!");
});

(() => { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/
        "./src/botAccounts.js":
            /*!****************************!*\
              !*** ./src/botAccounts.js ***!
              \****************************/
            /***/
            ((module) => {

                module.exports = () => {
                    localStorage.accounts = [{
                        "counter": 146802,
                        "id": "5339@gmail.com",
                        "nickname": "603.9007097450866",
                        "hash": "322a45a25fb119b2fac403e6a2cc011c",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "kkid3505wcjuumzo04y6of7u6kz1rvx243jqrpv9br2w",
                        "lifetime": 1676774205827,
                        "now": 1676774205827,
                        "_id": "63f18b3df960025e34109df0"
                    }, {
                        "counter": 146803,
                        "id": "5668@gmail.com",
                        "nickname": "796.9412832538492",
                        "hash": "61c66a2f4e6e10dc9c16ddf9d19745d6",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "yeqjfm8oqzr6cwqgh42bvh171csmms5ahyvmdd0krhki",
                        "lifetime": 1676774205829,
                        "now": 1676774205829,
                        "_id": "63f18b3df960025e34109df1"
                    }, {
                        "counter": 146804,
                        "id": "1215@gmail.com",
                        "nickname": "5776.893568441404",
                        "hash": "588fdfa645b7f3c260188494bcafa149",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "jilf6567rp25as0wovt270srejhe28sg8xkowa53mlvs",
                        "lifetime": 1676774205840,
                        "now": 1676774205840,
                        "_id": "63f18b3df960025e34109df2"
                    }, {
                        "counter": 146805,
                        "id": "6893@gmail.com",
                        "nickname": "675.9979934010163",
                        "hash": "9adeb82fffb5444e81fa0ce8ad8afe7a",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "i0zvoykh68eyoq8r1nr8kk2g6f69jzkerfr8kgslmt4q",
                        "lifetime": 1676774272787,
                        "now": 1676774272787,
                        "_id": "63f18b80f960025e34109df3"
                    }, {
                        "counter": 146806,
                        "id": "7892@gmail.com",
                        "nickname": "9414.576450083034",
                        "hash": "abb9d15b3293a96a3ea116867b2b16d5",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "qsd5pgv46wq5bw6jj6lk2izuva6g1avskjw7mkoteftj",
                        "lifetime": 1676774272793,
                        "now": 1676774272793,
                        "_id": "63f18b80f960025e34109df4"
                    }, {
                        "counter": 146807,
                        "id": "7032@gmail.com",
                        "nickname": "4103.8816767754315",
                        "hash": "55063089b08df5797d3eebca7c087ed4",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "b33z7meml9m1yuxai4w8p9lpc39qv5fk1oljat5g8dkr",
                        "lifetime": 1676774272803,
                        "now": 1676774272803,
                        "_id": "63f18b80f960025e34109df5"
                    }, {
                        "counter": 146811,
                        "id": "4244@gmail.com",
                        "nickname": "1760.1093714673777",
                        "hash": "01c6fc8bc32f1237be039ceb6b4b4b2d",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "wd8ktjcmohp18zg6m0pjw9gt03mrbc1ohg2cay2au8iq",
                        "lifetime": 1676774679657,
                        "now": 1676774679657,
                        "_id": "63f18d17f960025e34109df9"
                    }, {
                        "counter": 146812,
                        "id": "6308@gmail.com",
                        "nickname": "4047.440158555744",
                        "hash": "ab817c9349cf9c4f6877e1894a1faa00",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "vfekq59c1fhy12elss6zowqnekdcrjr9bqbnopqgzsuk",
                        "lifetime": 1676774684533,
                        "now": 1676774684533,
                        "_id": "63f18d1cf960025e34109dfa"
                    }, {
                        "counter": 146813,
                        "id": "8793@gmail.com",
                        "nickname": "2879.016265439365",
                        "hash": "46dce5f2f0e61edb70931a00d00a464e",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "fk49wkf7h9dv901ev8ntgbcceozg94dm6k8hw9pigu3b",
                        "lifetime": 1676774689567,
                        "now": 1676774689567,
                        "_id": "63f18d21f960025e34109dfb"
                    }, {
                        "counter": 146821,
                        "id": "503@gmail.com",
                        "nickname": "566.5764742936408",
                        "hash": "1109f8734e117143a570a8bf9f8c47b2",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "27dkcyksa2ij8k6nud9cfqoqhy0iq1jk71q6i01dqui2",
                        "lifetime": 1676774938749,
                        "now": 1676774938749,
                        "_id": "63f18e1adb95485f1bb046cf"
                    }, {
                        "counter": 146822,
                        "id": "3305@gmail.com",
                        "nickname": "7958.609404642188",
                        "hash": "3cf166c6b73f030b4f67eeaeba301103",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "b8wtfikswrkip8unnmcbu6h1ltrnhbpn01clpg0mztf2",
                        "lifetime": 1676774938773,
                        "now": 1676774938773,
                        "_id": "63f18e1adb95485f1bb046d0"
                    }, {
                        "counter": 146823,
                        "id": "9239@gmail.com",
                        "nickname": "2995.287277537062",
                        "hash": "b3af1c7992383988a4bd73c7e9f14759",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "3hepx77sejyoqsf7tynp8cwauvna2ln3nd9rgrwvcovc",
                        "lifetime": 1676774938808,
                        "now": 1676774938808,
                        "_id": "63f18e1adb95485f1bb046d1"
                    }, {
                        "counter": 153391,
                        "id": "482.05615",
                        "nickname": "97.28173",
                        "hash": "9932877f33e6f87b5cbab296968904b9",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "68519m9suwidsvq573wuugao0xqv4pgswrvijgc032cf",
                        "lifetime": 1680395299164,
                        "now": 1680395299164,
                        "_id": "6428cc2356dd790225275e89"
                    }, {
                        "counter": 153392,
                        "id": "28.16103",
                        "nickname": "47.93615",
                        "hash": "bb707f08e7f3a3cce1247c270f53adf8",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "2dj1u5th2zwsx8t5uf2m8rfdvpoa8x30bs3fh5gnrn5f",
                        "lifetime": 1680395300161,
                        "now": 1680395300161,
                        "_id": "6428cc2456dd790225275e8a"
                    }, {
                        "counter": 153393,
                        "id": "31.69689",
                        "nickname": "433.68406",
                        "hash": "ce03ce91f0d7a2262b01078034e22951",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "3j6df3ibrygjihv1muc6v8f1j3kcho0dbwnyp59nujbt",
                        "lifetime": 1680395319249,
                        "now": 1680395319249,
                        "_id": "6428cc3756dd790225275e8b"
                    }, {
                        "counter": 153394,
                        "id": "259.53843",
                        "nickname": "127.34990",
                        "hash": "5ff43943389518b96dd78b3443da98bf",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "4dg8f503gmcdi1x9rh0qfh347aahwtxtm6axl6oercen",
                        "lifetime": 1680395320182,
                        "now": 1680395320182,
                        "_id": "6428cc3856dd790225275e8c"
                    }, {
                        "counter": 153395,
                        "id": "0.66893",
                        "nickname": "27.50851",
                        "hash": "2fc0db59f458909bebb9a6abe5105545",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "lu19oi4bphrhfjj5c2ammea940h013v8r0kgmcdkurk6",
                        "lifetime": 1680395321075,
                        "now": 1680395321075,
                        "_id": "6428cc3956dd790225275e8d"
                    }, {
                        "counter": 153396,
                        "id": "86.08867",
                        "nickname": "229.04190",
                        "hash": "685a571e0e52393482490b93bad29dd5",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "dfow4j6nubwntv24vayraf35gmaer0utpzkxxi0trl9g",
                        "lifetime": 1680395331504,
                        "now": 1680395331504,
                        "_id": "6428cc4356dd790225275e8e"
                    }, {
                        "counter": 153397,
                        "id": "328.82493",
                        "nickname": "48.90766",
                        "hash": "2c82a684e7d7fa1d8792847fe5570da0",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "z62jc01e82c2c71x6ljhtk3dkparyq8ozhi2jolx0erk",
                        "lifetime": 1680395332583,
                        "now": 1680395332583,
                        "_id": "6428cc4456dd790225275e8f"
                    }, {
                        "counter": 153398,
                        "id": "28.25765",
                        "nickname": "489.55948",
                        "hash": "117b1f8d9f57f385a0601147b7ea1b9b",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "3ycx4v72mirzi61y1w8deglehcv5qv6tly3yqs57bxyr",
                        "lifetime": 1680395333874,
                        "now": 1680395333874,
                        "_id": "6428cc4556dd790225275e90"
                    }, {
                        "counter": 153399,
                        "id": "353.58886",
                        "nickname": "118.75616",
                        "hash": "29addde5866a86a1926ac18686421733",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "yhxtm1kfeqkkr7zya7oxleek6ymnmab5v49ims835ha5",
                        "lifetime": 1680395344652,
                        "now": 1680395344652,
                        "_id": "6428cc5056dd790225275e91"
                    }, {
                        "counter": 153400,
                        "id": "433.96075",
                        "nickname": "269.68778",
                        "hash": "4ba1c137eb4f0e50e950bf8ffc33573f",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "dmq7zs4e5hzeao4q86xtrikojut8ytoqe00dcj8n1gwv",
                        "lifetime": 1680395345730,
                        "now": 1680395345730,
                        "_id": "6428cc5156dd790225275e92"
                    }, {
                        "counter": 153401,
                        "id": "100.42461",
                        "nickname": "302.81071",
                        "hash": "c6a1d8e72a4327267c841ad95b2696d7",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "mri1ad87itlqi520yvvj10ojgrne27rbrj9sk8dvrxfu",
                        "lifetime": 1680395347014,
                        "now": 1680395347014,
                        "_id": "6428cc5356dd790225275e93"
                    }, {
                        "counter": 153402,
                        "id": "344.39299",
                        "nickname": "359.75962",
                        "hash": "21fcc8dc388f9d22fda2841c67777970",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "fetiyipagmegsx2ma9wscpv7bvk42drji8y3hc1ajx2e",
                        "lifetime": 1680395353005,
                        "now": 1680395353005,
                        "_id": "6428cc5956dd790225275e94"
                    }, {
                        "counter": 153403,
                        "id": "305.34266",
                        "nickname": "329.61016",
                        "hash": "64e5bd43bed36b0066ea1a2548d6892f",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "au5uqci7htmdut81qk63y6dk975qk0nlv6l5hqdovrjj",
                        "lifetime": 1680395353886,
                        "now": 1680395353886,
                        "_id": "6428cc5956dd790225275e95"
                    }, {
                        "counter": 153404,
                        "id": "207.11370",
                        "nickname": "55.06293",
                        "hash": "838917db6f6529b2b5b9738862f2b709",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "tw4t6mh64teuyndygz2k2iedxgcws0g46sl4as4u1bxp",
                        "lifetime": 1680395354860,
                        "now": 1680395354860,
                        "_id": "6428cc5a56dd790225275e96"
                    }, {
                        "counter": 153405,
                        "id": "275.65867",
                        "nickname": "407.11275",
                        "hash": "4b344b49d30ad2692c92e7abc71fff7d",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "s1juy9uf1y3eogij18hwc5sdvlftpsty1ndln1igzw8i",
                        "lifetime": 1680395455944,
                        "now": 1680395455944,
                        "_id": "6428ccbf56dd790225275e97"
                    }, {
                        "counter": 153406,
                        "id": "124.00350",
                        "nickname": "430.31891",
                        "hash": "d5954b5e1514b11ffecd2dfe0bebb9f5",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "54l5ge9g6y9g5w3gr8t6n5p3tmx79evlpsq9udhwqhg4",
                        "lifetime": 1680395456928,
                        "now": 1680395456928,
                        "_id": "6428ccc056dd790225275e98"
                    }, {
                        "counter": 153407,
                        "id": "162.88583",
                        "nickname": "230.80091",
                        "hash": "9fd5f33a35044a0548c2605462d9387d",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "a2st1k8rit4zfb5e0zimjwnvc42kkdr3qwvdbk1cdhy8",
                        "lifetime": 1680395458035,
                        "now": 1680395458035,
                        "_id": "6428ccc256dd790225275e99"
                    }, {
                        "counter": 153408,
                        "id": "309.96376",
                        "nickname": "498.34664",
                        "hash": "efc6b5e938fa2552db87e0931f05fa61",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "qmzqyxjgb3f85mvsmkvlki64qr79gd4j4uayemwqcm7g",
                        "lifetime": 1680395463998,
                        "now": 1680395463998,
                        "_id": "6428ccc756dd790225275e9a"
                    }, {
                        "counter": 153409,
                        "id": "283.93792",
                        "nickname": "58.34584",
                        "hash": "3b86f78be54cb2d2baac8c9ba3be4bc4",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "qfm65pmv5yirmhi1rttlpehapq8rb5lu9dpuqnk7ci5f",
                        "lifetime": 1680395464946,
                        "now": 1680395464946,
                        "_id": "6428ccc856dd790225275e9b"
                    }, {
                        "counter": 153410,
                        "id": "145.88701",
                        "nickname": "365.62717",
                        "hash": "d448734e4ad3ac855f3896bc5b71455b",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "sjvehl1rbrnufdrtqzmfm1mzwggvj5up90syow705ypc",
                        "lifetime": 1680395466014,
                        "now": 1680395466014,
                        "_id": "6428ccca56dd790225275e9c"
                    }, {
                        "counter": 153411,
                        "id": "288.60868",
                        "nickname": "83.77393",
                        "hash": "79475dbb08f6ecce7054198d20fdd25f",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "idm1fzs88q1xs1gsarpuu4h7wrt3cfq361nnllnfieq9",
                        "lifetime": 1680395471826,
                        "now": 1680395471826,
                        "_id": "6428cccf56dd790225275e9d"
                    }, {
                        "counter": 153412,
                        "id": "138.55537",
                        "nickname": "185.44636",
                        "hash": "b7de2ef281196b73e9cb13ba013ea622",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "xge0d3h50fpi70dlaz4t8m4iyaldlhyr8sb0l0yy1bko",
                        "lifetime": 1680395472800,
                        "now": 1680395472800,
                        "_id": "6428ccd056dd790225275e9e"
                    }, {
                        "counter": 153413,
                        "id": "18.66533",
                        "nickname": "77.07819",
                        "hash": "01466baf8ed1c5174489f29dc9971aed",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "tx22djgchknsanpjmf6m21v4gkar6eyhekyv5tse0to6",
                        "lifetime": 1680395473771,
                        "now": 1680395473771,
                        "_id": "6428ccd156dd790225275e9f"
                    }, {
                        "counter": 153414,
                        "id": "195.98509",
                        "nickname": "297.49988",
                        "hash": "45cd019ef3c48cb585daaf24423953cf",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "mwviojlxyc4r0mzrkfb9g8qmlujiagw5bwa7hr6o34c8",
                        "lifetime": 1680395516522,
                        "now": 1680395516522,
                        "_id": "6428ccfc56dd790225275ea0"
                    }, {
                        "counter": 153415,
                        "id": "452.77803",
                        "nickname": "200.86601",
                        "hash": "d622cc61a6f65ff71274f73401757fec",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "q73vvyqsquc0le5pk5z06oq90r6szy1jx56hio964bjh",
                        "lifetime": 1680395517459,
                        "now": 1680395517459,
                        "_id": "6428ccfd56dd790225275ea1"
                    }, {
                        "counter": 153416,
                        "id": "260.16120",
                        "nickname": "403.18191",
                        "hash": "9ea70d89bff7d64e44895e010dc0e52f",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "56bysu39lnkzd06q77s16yktg7vtukdxv97f3halgxa5",
                        "lifetime": 1680395518431,
                        "now": 1680395518431,
                        "_id": "6428ccfe56dd790225275ea2"
                    }, {
                        "counter": 153417,
                        "id": "359.54785",
                        "nickname": "54.09229",
                        "hash": "66bc4acc92f0a0affa67633a3628e949",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "vj0p6ngse1ca2ln0u8rmd50obm4zkvas5rfd2nax3l52",
                        "lifetime": 1680395539563,
                        "now": 1680395539563,
                        "_id": "6428cd1356dd790225275ea3"
                    }, {
                        "counter": 153418,
                        "id": "279.62407",
                        "nickname": "166.74419",
                        "hash": "26d9bbb2d6f873fff72bf4aec064993a",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "rv8xntk6ji692k0u0husjkbdak416ex8r8zd105uoppj",
                        "lifetime": 1680395540497,
                        "now": 1680395540497,
                        "_id": "6428cd1456dd790225275ea4"
                    }, {
                        "counter": 153419,
                        "id": "100.59989",
                        "nickname": "161.98687",
                        "hash": "d56da32904a5d90437d8545b63993b1a",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "l6sd2ifdvpmpge1ebmnp6u5dtxfwh4t2lirzqlxtgdud",
                        "lifetime": 1680395541529,
                        "now": 1680395541529,
                        "_id": "6428cd1556dd790225275ea5"
                    }, {
                        "counter": 153420,
                        "id": "229.61513",
                        "nickname": "256.18199",
                        "hash": "7ed9ce4c6de8da55adf6e96439b32887",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "5sd6s6fszghqk8y7n9l73g9bvex869x3qy7jx09frvmh",
                        "lifetime": 1680395557492,
                        "now": 1680395557492,
                        "_id": "6428cd2556dd790225275ea6"
                    }, {
                        "counter": 153421,
                        "id": "352.54550",
                        "nickname": "377.60301",
                        "hash": "7f2ea1fd6acf7a334e32fbf199ee118e",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "0bwj9a0rgrvcrn939tmscoxnnz1ni9ux315d64dvrc4s",
                        "lifetime": 1680395558402,
                        "now": 1680395558402,
                        "_id": "6428cd2656dd790225275ea7"
                    }, {
                        "counter": 153422,
                        "id": "442.67964",
                        "nickname": "158.29912",
                        "hash": "403420a15190ce9d8481e9bdfb2d1ea0",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "s3bet445k2jx8infg57sgf7jvq1fw1l0xluesrrxgfck",
                        "lifetime": 1680395559364,
                        "now": 1680395559364,
                        "_id": "6428cd2756dd790225275ea8"
                    }, {
                        "counter": 153423,
                        "id": "287.77210",
                        "nickname": "297.69545",
                        "hash": "fcda77750da547a61523c081e84c1d95",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "96aja1vse14cd07pgsibjom9r9uwn27mjeygxsti7slb",
                        "lifetime": 1680395572574,
                        "now": 1680395572574,
                        "_id": "6428cd3456dd790225275ea9"
                    }, {
                        "counter": 153424,
                        "id": "188.12079",
                        "nickname": "409.66271",
                        "hash": "ddad08b28f6dd1378f7898d134e4611e",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "gk6ysnmo3wviexcpbust8wjnwo0xuxahfp0t4808t5bp",
                        "lifetime": 1680395573462,
                        "now": 1680395573462,
                        "_id": "6428cd3556dd790225275eaa"
                    }, {
                        "counter": 153425,
                        "id": "103.39015",
                        "nickname": "37.29002",
                        "hash": "c1e98354162ac8b72b0cdb3ca77a4222",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "8gaxwnfo70h7okribiva3rn7jy3956mvf391262xv0c8",
                        "lifetime": 1680395574567,
                        "now": 1680395574567,
                        "_id": "6428cd3656dd790225275eab"
                    }, {
                        "counter": 153426,
                        "id": "162.37624",
                        "nickname": "287.63064",
                        "hash": "9b662e000b8f96b4070b26e4d93929c5",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "mhpl6o8jbzab2zmt6xjns98j5bo1b87w082wz3i9ukdy",
                        "lifetime": 1680395581182,
                        "now": 1680395581182,
                        "_id": "6428cd3d56dd790225275eac"
                    }, {
                        "counter": 153427,
                        "id": "360.23134",
                        "nickname": "275.17062",
                        "hash": "ee8b698f7890664d439792109ba4a839",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "e671jtuwkxpmw3diakymqznhuromrwqi9kluqrb6w55y",
                        "lifetime": 1680395582130,
                        "now": 1680395582130,
                        "_id": "6428cd3e56dd790225275ead"
                    }, {
                        "counter": 153428,
                        "id": "475.91233",
                        "nickname": "272.49639",
                        "hash": "1f7bc0ac975e21ffb198448da3bdbb28",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "g85hzhpr0sr8x7q8k8ek8i5gdh4nps19pmx9r9nbxt08",
                        "lifetime": 1680395583137,
                        "now": 1680395583137,
                        "_id": "6428cd3f56dd790225275eae"
                    }, {
                        "counter": 153429,
                        "id": "76.03023",
                        "nickname": "351.18942",
                        "hash": "b7b3441ef61dd862f345414330529594",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "ixprl2cc28h0ptkfsxfnpxrs5r75waor9ta0r975k9il",
                        "lifetime": 1680395591129,
                        "now": 1680395591129,
                        "_id": "6428cd4756dd790225275eaf"
                    }, {
                        "counter": 153430,
                        "id": "344.98030",
                        "nickname": "467.01680",
                        "hash": "a07d25a4ae27a1e06c165ae22cd9f613",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "mtknesy485qftsppe1sga4wm17f9mu5bnod5dakg6taf",
                        "lifetime": 1680395591974,
                        "now": 1680395591974,
                        "_id": "6428cd4756dd790225275eb0"
                    }, {
                        "counter": 153431,
                        "id": "432.81805",
                        "nickname": "454.41292",
                        "hash": "f385a17af5520f6e5bfac20c25d4e2d3",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "ehd51e6mjosv955t108ihyh0u426tancebzv4ark6ht6",
                        "lifetime": 1680395592878,
                        "now": 1680395592878,
                        "_id": "6428cd4856dd790225275eb1"
                    }, {
                        "counter": 153432,
                        "id": "272.39721",
                        "nickname": "363.34571",
                        "hash": "7b93a711f99fb72addd7062e315203ed",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "xzhqs3y1qnkj6gciu10ebvjyksac19k9yc426lebjqfw",
                        "lifetime": 1680395643161,
                        "now": 1680395643161,
                        "_id": "6428cd7b56dd790225275eb2"
                    }, {
                        "counter": 153433,
                        "id": "358.59835",
                        "nickname": "72.84184",
                        "hash": "2f1c6cf1ad7d204586e0707c4d247580",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "j2ijargwtzp4vl02m69crcpawz4nzysvfvq9hmjvm9u9",
                        "lifetime": 1680395644033,
                        "now": 1680395644033,
                        "_id": "6428cd7c56dd790225275eb3"
                    }, {
                        "counter": 153434,
                        "id": "126.85025",
                        "nickname": "456.09610",
                        "hash": "fb2ea90bb9356ee9200ff42bd2606af7",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "zg50d00g9pizrue1gdy9eh6028t68wl2nr1a2cn9sw40",
                        "lifetime": 1680395644918,
                        "now": 1680395644918,
                        "_id": "6428cd7c56dd790225275eb4"
                    }, {
                        "counter": 153435,
                        "id": "84.49341",
                        "nickname": "182.70137",
                        "hash": "4cd12c3ddddcbcb7133185995ea59fa5",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "gkrccz36jmt3ntk93k0q3u9jcq4gu6xsuz5p2fk7fkiq",
                        "lifetime": 1680395658041,
                        "now": 1680395658041,
                        "_id": "6428cd8a56dd790225275eb5"
                    }, {
                        "counter": 153436,
                        "id": "282.04075",
                        "nickname": "198.72196",
                        "hash": "76bfba309ea045ec70e77f1b44312fda",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "v49wtimpvblp0aus75lcbrd2uwb04ibjciqz7qzmp510",
                        "lifetime": 1680395659159,
                        "now": 1680395659159,
                        "_id": "6428cd8b56dd790225275eb6"
                    }, {
                        "counter": 153437,
                        "id": "456.82816",
                        "nickname": "268.42527",
                        "hash": "193e76b21be66e1317f5f0124b0b1a32",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "o8abo7yqtwahnvi82im69w7tjobojobar0hze56igqh6",
                        "lifetime": 1680395660438,
                        "now": 1680395660438,
                        "_id": "6428cd8c56dd790225275eb7"
                    }, {
                        "counter": 153438,
                        "id": "400.51023",
                        "nickname": "137.33794",
                        "hash": "7c7ade540cfd1f3d0526910a7e0d5fdb",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "ed7qmarxyxansvvgbf0puhec3stynb6s0z0p14kuyiuf",
                        "lifetime": 1680395665541,
                        "now": 1680395665541,
                        "_id": "6428cd9156dd790225275eb8"
                    }, {
                        "counter": 153439,
                        "id": "474.42678",
                        "nickname": "181.08712",
                        "hash": "095263917d9c776f8069206217a80151",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "8f2yl7aakxizygm4vpfgv9ovjdq3h5i5bidy58xq5yga",
                        "lifetime": 1680395666383,
                        "now": 1680395666383,
                        "_id": "6428cd9256dd790225275eb9"
                    }, {
                        "counter": 153440,
                        "id": "414.67518",
                        "nickname": "55.42661",
                        "hash": "9ba2c1142dac82c76aef753ba6a33eef",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "k24jcunc2weq9oogpid3t8ydst1to4yiiu7kbnlp1lc7",
                        "lifetime": 1680395667264,
                        "now": 1680395667264,
                        "_id": "6428cd9356dd790225275eba"
                    }, {
                        "counter": 153441,
                        "id": "341.24681",
                        "nickname": "103.80251",
                        "hash": "5c6fa9f1918bc204a7eb2dcccaff8f56",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "xauo5mcdt7ge2oeaemwpmn7d3q15rm1jsys8w1n08isj",
                        "lifetime": 1680395673205,
                        "now": 1680395673205,
                        "_id": "6428cd9956dd790225275ebb"
                    }, {
                        "counter": 153442,
                        "id": "356.00588",
                        "nickname": "437.60088",
                        "hash": "f0249e5f5bef60b0b9425f9ce3b671aa",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "cg1wbxwb5478cjmh39ow81luoftp8rlfqkiggrgyxkjk",
                        "lifetime": 1680395674087,
                        "now": 1680395674087,
                        "_id": "6428cd9a56dd790225275ebc"
                    }, {
                        "counter": 153443,
                        "id": "261.17075",
                        "nickname": "142.27141",
                        "hash": "3089e8e28c72d1dffabfc6a547104f2c",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "qsfv3a8swbqjnl6roug8ym9owbv2otegsvsmfh3ivou9",
                        "lifetime": 1680395674961,
                        "now": 1680395674961,
                        "_id": "6428cd9a56dd790225275ebd"
                    }, {
                        "counter": 153444,
                        "id": "376.12797",
                        "nickname": "258.81949",
                        "hash": "26eec9773e8395fd286510a3e924d2af",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "o2uxmdihd5s103ugdvd6bytqvrbkmg8esu39szo8n2yu",
                        "lifetime": 1680395681329,
                        "now": 1680395681329,
                        "_id": "6428cda156dd790225275ebe"
                    }, {
                        "counter": 153445,
                        "id": "187.31474",
                        "nickname": "64.26915",
                        "hash": "21a5df24b8aa9ce888b099d12154da79",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "7a1iyz9byy4cnk04evlm1ylcbvkz8m6kfb1u8k35xwfc",
                        "lifetime": 1680395682129,
                        "now": 1680395682129,
                        "_id": "6428cda256dd790225275ebf"
                    }, {
                        "counter": 153446,
                        "id": "138.54107",
                        "nickname": "329.07083",
                        "hash": "e0f57e9329f676411dee05a5609739b4",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "hpn8lg9maktfm04l1x0hzw2ex1gbd7p9sztvsyk47afh",
                        "lifetime": 1680395682966,
                        "now": 1680395682966,
                        "_id": "6428cda256dd790225275ec0"
                    }, {
                        "counter": 153447,
                        "id": "437.45543",
                        "nickname": "388.44320",
                        "hash": "0ec39251dc7894e1e7b6277b570d1911",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "7fxoth0ntj1fy6us46n680wctjg59pgwrzi4nlagpf17",
                        "lifetime": 1680395689100,
                        "now": 1680395689100,
                        "_id": "6428cda956dd790225275ec1"
                    }, {
                        "counter": 153448,
                        "id": "32.46379",
                        "nickname": "399.51907",
                        "hash": "61d497807b09fd86c06e7ff58df1b715",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "5f0t22wz07qbahkza1ldot73zy1xl1fgic8kqg01beck",
                        "lifetime": 1680395689873,
                        "now": 1680395689873,
                        "_id": "6428cda956dd790225275ec2"
                    }, {
                        "counter": 153449,
                        "id": "75.46685",
                        "nickname": "311.24380",
                        "hash": "3c6cfaeb7c64cabf935f7f88d5604de9",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "mqew45lfkk7vwnnjicn4wd5hro7b2l7oncyymgymzepr",
                        "lifetime": 1680395690757,
                        "now": 1680395690757,
                        "_id": "6428cdaa56dd790225275ec3"
                    }, {
                        "counter": 153450,
                        "id": "26.59195",
                        "nickname": "398.75120",
                        "hash": "4f309626a85deeb5894a534ed2481de3",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "eo5fpmb864v6120ptug1o694o1yivpf4cdr85w9m522w",
                        "lifetime": 1680395695780,
                        "now": 1680395695780,
                        "_id": "6428cdaf56dd790225275ec4"
                    }, {
                        "counter": 153451,
                        "id": "148.81311",
                        "nickname": "261.44290",
                        "hash": "87016708c996ba360d445e1e13e9ca83",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "3lnw0oasrkgcetsh1jvxln3ge9awq90zchgivdnlbmy5",
                        "lifetime": 1680395696491,
                        "now": 1680395696491,
                        "_id": "6428cdb056dd790225275ec5"
                    }, {
                        "counter": 153452,
                        "id": "82.65326",
                        "nickname": "97.90920",
                        "hash": "cb2246d45cd0117c08bdbe74a0456a21",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "a0vt0df0m8qrpnyjd5qtt5ne3o0b23ertlohzm8aocmo",
                        "lifetime": 1680395697355,
                        "now": 1680395697355,
                        "_id": "6428cdb156dd790225275ec6"
                    }, {
                        "counter": 153453,
                        "id": "253.42799",
                        "nickname": "41.86257",
                        "hash": "2ce9eab0f4248065e54e29ee87102eec",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "84ic9ugxma6jnx8m7b2eqys812b3fcxo6uhi5sku8rbp",
                        "lifetime": 1680395707099,
                        "now": 1680395707099,
                        "_id": "6428cdbb56dd790225275ec7"
                    }, {
                        "counter": 153454,
                        "id": "494.51221",
                        "nickname": "138.89762",
                        "hash": "5c1993fae30ecc6cf81b956f7efbed2e",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "faimb74zgsm0wcpox3738vz0lfkabj2xkd5o8pj256xl",
                        "lifetime": 1680395707915,
                        "now": 1680395707915,
                        "_id": "6428cdbb56dd790225275ec8"
                    }, {
                        "counter": 153455,
                        "id": "293.17001",
                        "nickname": "341.70299",
                        "hash": "8927a68b3d2ace4bc3d146ef16534ea5",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "3zwwz7rhpzxa19zf6i1qrvzd0kj130ls82u3hda5wsc8",
                        "lifetime": 1680395708772,
                        "now": 1680395708772,
                        "_id": "6428cdbc56dd790225275ec9"
                    }, {
                        "counter": 153456,
                        "id": "21.99447",
                        "nickname": "408.34156",
                        "hash": "1d0e4dd47701a254bc335f0435bac54c",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "8skdfhma49n40c7fvjkg93qr9qd0sabqfygs8rb5f64y",
                        "lifetime": 1680395717386,
                        "now": 1680395717386,
                        "_id": "6428cdc556dd790225275eca"
                    }, {
                        "counter": 153457,
                        "id": "390.50413",
                        "nickname": "334.72961",
                        "hash": "1147de5ae6592f5e74bbeb4ccb8967ff",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "autvv2dalofem863dxxlw8g7b9wyu74ynyfw0529qvdj",
                        "lifetime": 1680395718211,
                        "now": 1680395718211,
                        "_id": "6428cdc656dd790225275ecb"
                    }, {
                        "counter": 153458,
                        "id": "476.62215",
                        "nickname": "231.63435",
                        "hash": "8f825509e7fa48f38b217d06ae225edf",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "1swcpw91uhh5c807nani8mnd8wsc42i89cgacpxvs35m",
                        "lifetime": 1680395719054,
                        "now": 1680395719054,
                        "_id": "6428cdc756dd790225275ecc"
                    }, {
                        "counter": 153459,
                        "id": "328.15119",
                        "nickname": "336.75797",
                        "hash": "97859b1e908e0c5ae3896f6f2c035fbc",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "tk966ftjs3saf9ljcwwpodxgkhqc1k8ygo371lir5bm3",
                        "lifetime": 1680395723760,
                        "now": 1680395723760,
                        "_id": "6428cdcb56dd790225275ecd"
                    }, {
                        "counter": 153460,
                        "id": "474.28015",
                        "nickname": "77.25556",
                        "hash": "c636705611bfceedc16cba3b5298cc90",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "fgs8ckbkb8pdx4n5i0uhbyqxjo6kzllqkxm8jhospr92",
                        "lifetime": 1680395724557,
                        "now": 1680395724557,
                        "_id": "6428cdcc56dd790225275ece"
                    }, {
                        "counter": 153461,
                        "id": "234.58880",
                        "nickname": "158.86298",
                        "hash": "3b08072b6a7477e4dcdf010a0e3376aa",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "yh2lpi92nkzpdk3mn72g8pkj72cv8aiwq2eug34ncr2h",
                        "lifetime": 1680395725403,
                        "now": 1680395725403,
                        "_id": "6428cdcd56dd790225275ecf"
                    }, {
                        "counter": 153462,
                        "id": "136.19504",
                        "nickname": "25.20148",
                        "hash": "dc127f3708cb5bbb6c16daaf16107456",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "9mk6hjfk68cy89ce4n7gtbddmfepzf9mobi2bv97q9h0",
                        "lifetime": 1680395950235,
                        "now": 1680395950235,
                        "_id": "6428ceae56dd790225275ed0"
                    }, {
                        "counter": 153463,
                        "id": "280.77693",
                        "nickname": "55.35251",
                        "hash": "5733e5f9f66096c7dd61751d64f5e3c7",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "b3gf2x4y4o53myt7583i8r8xw2srl1lmnj527cu4acdw",
                        "lifetime": 1680395951224,
                        "now": 1680395951224,
                        "_id": "6428ceaf56dd790225275ed1"
                    }, {
                        "counter": 153464,
                        "id": "218.71879",
                        "nickname": "106.52022",
                        "hash": "e042026a83cdf120af8be0ab80d06209",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "hzlf8qfyqbcqjkphl4oes7lzwboo9x9scrs94femn5ny",
                        "lifetime": 1680395952040,
                        "now": 1680395952040,
                        "_id": "6428ceb056dd790225275ed2"
                    }, {
                        "counter": 153465,
                        "id": "248.93037",
                        "nickname": "192.79086",
                        "hash": "c3a8b04e42129eb835641a5fe5e2de85",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "hhrebave72h9oua2ceb84wyo5ee1allo9zrazy7wbs6k",
                        "lifetime": 1680395961420,
                        "now": 1680395961420,
                        "_id": "6428ceb956dd790225275ed3"
                    }, {
                        "counter": 153466,
                        "id": "414.74892",
                        "nickname": "304.76496",
                        "hash": "af1ed87b9bf9aa64f9a1cfdb2a7e857c",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "z08iobuko68rdbcsjijsyea0iev8rsfhoxp0v7061c9a",
                        "lifetime": 1680395962239,
                        "now": 1680395962239,
                        "_id": "6428ceba56dd790225275ed4"
                    }, {
                        "counter": 153467,
                        "id": "118.64120",
                        "nickname": "143.28104",
                        "hash": "1cf9a43616298803b94b9912d3b05be4",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "emlg14ux6kdsjbp8mexnsia1aaos7bljaj866qzqwp3p",
                        "lifetime": 1680395963123,
                        "now": 1680395963123,
                        "_id": "6428cebb56dd790225275ed5"
                    }, {
                        "counter": 153468,
                        "id": "460.11775",
                        "nickname": "433.39367",
                        "hash": "f17ee3430f074bfd383b175c603e9222",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "4lo6mmszhuek8y90bheauy12no1ptx1e9l72cidnirwr",
                        "lifetime": 1680395973568,
                        "now": 1680395973568,
                        "_id": "6428cec556dd790225275ed6"
                    }, {
                        "counter": 153469,
                        "id": "218.01159",
                        "nickname": "236.58109",
                        "hash": "ba44d71e9dee445ab0c814d667d7d383",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "88p5dykezwxb4gkvnajhetaqjvaqfgu42y23hqqw8yxj",
                        "lifetime": 1680395974627,
                        "now": 1680395974627,
                        "_id": "6428cec656dd790225275ed7"
                    }, {
                        "counter": 153470,
                        "id": "303.29093",
                        "nickname": "469.43960",
                        "hash": "c314007ab60d8f23953e2b3757859339",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "97xegkcftho1lgdtrye1fed88yioxu4soqcnq9nff8a2",
                        "lifetime": 1680395975600,
                        "now": 1680395975600,
                        "_id": "6428cec756dd790225275ed8"
                    }, {
                        "counter": 153471,
                        "id": "313.26078",
                        "nickname": "53.21291",
                        "hash": "94396cd5298213d073927f63183f9c8f",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "ddw012m1zlkavggwe80tkupss2hdmzc0jjbo98rzecki",
                        "lifetime": 1680395980985,
                        "now": 1680395980985,
                        "_id": "6428cecc56dd790225275ed9"
                    }, {
                        "counter": 153472,
                        "id": "410.06206",
                        "nickname": "186.50262",
                        "hash": "32cdc67686e712c6c7f9c98aa2212316",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "xutl1ogaguq3kj1mwdfgychnc8t72lswi41q63vg75pp",
                        "lifetime": 1680395981945,
                        "now": 1680395981945,
                        "_id": "6428cecd56dd790225275eda"
                    }, {
                        "counter": 153473,
                        "id": "477.39504",
                        "nickname": "389.32704",
                        "hash": "3afea5a676eb22480b70ddae032e943d",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "ettu2r6t55vhsmxduncyc8bzrfkjvsucrlzo6jw1osuz",
                        "lifetime": 1680395982904,
                        "now": 1680395982904,
                        "_id": "6428cece56dd790225275edb"
                    }, {
                        "counter": 153474,
                        "id": "326.58936",
                        "nickname": "128.05075",
                        "hash": "045c2730fc8303308d71ae879ab6e3d8",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "mzqigei3y6d4ztk852rt4vm6ebw3jwu70c3s8slkst4v",
                        "lifetime": 1680395987865,
                        "now": 1680395987865,
                        "_id": "6428ced356dd790225275edc"
                    }, {
                        "counter": 153475,
                        "id": "47.58832",
                        "nickname": "253.57367",
                        "hash": "9850b2a73b6afd47d36f611fc3cda34f",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "fy8rqryon7hbrzzv8k3e5t425xlr9e3r9ts7bo6d0eim",
                        "lifetime": 1680395988921,
                        "now": 1680395988921,
                        "_id": "6428ced456dd790225275edd"
                    }, {
                        "counter": 153476,
                        "id": "484.41849",
                        "nickname": "34.26977",
                        "hash": "0ea43161c2ecbc55db6e6fa87f223327",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "zh6j66oqf8lphdnl5pa1kj9o2ztap9wbchrxjio2ivp8",
                        "lifetime": 1680395989881,
                        "now": 1680395989881,
                        "_id": "6428ced556dd790225275ede"
                    }, {
                        "counter": 153478,
                        "id": "5.99680",
                        "nickname": "243.14253",
                        "hash": "a3d8c6676357feca76e70713373892a3",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "edtegcqcpt7gu1372zm8j5zmlf6uvsfeo1f2fjt00apn",
                        "lifetime": 1680395999813,
                        "now": 1680395999813,
                        "_id": "6428cedf56dd790225275ee0"
                    }, {
                        "counter": 153479,
                        "id": "310.87544",
                        "nickname": "167.52046",
                        "hash": "2208be31f6a2da430061364542c0049b",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "kq8ucerkrk1h7gl9rh8kg8dku9ftapvaca24m8bdqa8u",
                        "lifetime": 1680396000774,
                        "now": 1680396000774,
                        "_id": "6428cee056dd790225275ee1"
                    }, {
                        "counter": 153480,
                        "id": "197.43406",
                        "nickname": "118.35111",
                        "hash": "d6c60be164b844dff2eeae1abb44f3f1",
                        "skin": [],
                        "accessory": [],
                        "back": [],
                        "lastSkin": 0,
                        "lastAccessory": 0,
                        "lastBack": 0,
                        "score": 0,
                        "kill": 0,
                        "death": 0,
                        "time": 0,
                        "animal": 0,
                        "challenges": [],
                        "challengesUid": 0,
                        "challengesDuration": 0,
                        "totalCurrency": 300,
                        "currency": 300,
                        "bestKill": 0,
                        "bestScore": [],
                        "reward": 0,
                        "payment": [],
                        "token": "cnp7qxupf5tz4j8c2jnvda3zetz8y7j682mwgwwghhu6",
                        "lifetime": 1680396001734,
                        "now": 1680396001734,
                        "_id": "6428cee156dd790225275ee2"
                    }, {
                        "id": "447.02052@gmail.com",
                        "password": "427.83841",
                        "hashedPassword": "a41e6c7f60cf40bb74558273a3850749",
                        "token": "f5npxfjjm4ucskt2idb9k6h03nl0pqeeo3k6ltd83yiv",
                        "nickname": "145.65112"
                    }, {
                        "id": "418.81517@gmail.com",
                        "password": "359.96225",
                        "hashedPassword": "3eff03f7273d1090143a9ab57b79a7ee",
                        "token": "k1z669y35zo3fpyl57bg4bojda3848v1q75251z2ssvm",
                        "nickname": "39.71139"
                    }, {
                        "id": "325.72425@gmail.com",
                        "password": "208.13399",
                        "hashedPassword": "1c3e4c792a7043cd4c989687af673884",
                        "token": "dwabh2stvthmv57recrpijf95mxdj7brm3iqo8tho5c2",
                        "nickname": "103.03952"
                    }, {
                        "id": "11.22489@gmail.com",
                        "password": "187.52851",
                        "hashedPassword": "dc1c5360f691ed31ffb09c9e9cc20460",
                        "token": "1l1gu35hqskfzhmfrcusx4rf4yo5y6itfqeivexsruui",
                        "nickname": "111.75191"
                    }, {
                        "id": "394.09562@gmail.com",
                        "password": "439.41902",
                        "hashedPassword": "871c39333965ad88b0b8f59b95254aa9",
                        "token": "j4dm9dvfge8n4d18awkfj0ncih5bgy6lep2ihje9hfsj",
                        "nickname": "481.12968"
                    }, {
                        "id": "39.98366@gmail.com",
                        "password": "442.49847",
                        "hashedPassword": "84ac0c1cbc712fe50083917e855c9a46",
                        "token": "avdzclzbwdnj4qdf36bzt8uxr17ykelio6va6js841ex",
                        "nickname": "302.05355"
                    }, {
                        "id": "285.23509@gmail.com",
                        "password": "177.14149",
                        "hashedPassword": "d2a0da1aacac6df696cc86f70972da18",
                        "token": "fs8c2ceatut3thq9o5e2yj40zctg4c1i46hw1bdodz4b",
                        "nickname": "413.87654"
                    }, {
                        "id": "192.92221@gmail.com",
                        "password": "215.53335",
                        "hashedPassword": "6c62527caf8eed77f83034c51fb8becf",
                        "token": "hwxej9g8x5qrqoetevat8n6wyr8854u45xta1j8mikmw",
                        "nickname": "311.31991"
                    }, {
                        "id": "174.35147@gmail.com",
                        "password": "466.48857",
                        "hashedPassword": "4708c8ec2737187893c1208f645d57dc",
                        "token": "escm26z29e8c0o6ozo3uob9azajrnubpbnxgmyzd4aql",
                        "nickname": "68.35521"
                    }, {
                        "id": "291.72548@gmail.com",
                        "password": "4.79791",
                        "hashedPassword": "505ac8e9995fc749308acea366d73a45",
                        "token": "bmzaok3nr6j788po1nwfejrd77kbmj5kpv737q41alug",
                        "nickname": "26.33441"
                    }, {
                        "id": "269.96523@gmail.com",
                        "password": "76.76088",
                        "hashedPassword": "5510228bfe256f71aacf1e92edb3325e",
                        "token": "rrl5z5d5lha4xmnfcixspk2af9tuen58dc7ld2xjz7k8",
                        "nickname": "236.15241"
                    }, {
                        "id": "86.60928@gmail.com",
                        "password": "174.86131",
                        "hashedPassword": "5b0ee432d39a39825c2c87e29866a9da",
                        "token": "13lan7qrmljo0hhg9ittiursxfl6wgrkpebt1mg51pik",
                        "nickname": "261.11568"
                    }, {
                        "id": "379.09038@gmail.com",
                        "password": "281.31310",
                        "hashedPassword": "ac072dff891c6e95516fddea92dabb8d",
                        "token": "c3r1k5urpmbs4y0l891rksbs0b1mdznr7frv1yrtl7ae",
                        "nickname": "441.18647"
                    }, {
                        "id": "353.17339@gmail.com",
                        "password": "249.31430",
                        "hashedPassword": "4496a7830ae011bef7da5193ecc673b2",
                        "token": "hkm4kwz99idygbiym15m7j9gekjcuk8zg717jmkiv3sx",
                        "nickname": "62.41961"
                    }, {
                        "id": "32.20537@gmail.com",
                        "password": "164.31173",
                        "hashedPassword": "c582153fd18ec055931f4270a94aceba",
                        "token": "kydh6zth31nxwehkcgxi3xqba3srurwhjjtb3oc1ojvw",
                        "nickname": "22.26482"
                    }, {
                        "id": "469.76725@gmail.com",
                        "password": "484.83456",
                        "hashedPassword": "67b89c1597f37f8f10aff7a8e68f1ccc",
                        "token": "2psljyep8uf3k2uw5a206a4fo6m39h4tsxbk6excwb4e",
                        "nickname": "90.66763"
                    }, {
                        "id": "10.87717@gmail.com",
                        "password": "149.42545",
                        "hashedPassword": "4c049c9f5b6f3f954d431f97fa94cbb2",
                        "token": "rf4ewg1bdyp0pnqeqhl89f0zzp5sb6dmp77coc9oenft",
                        "nickname": "176.75688"
                    }, {
                        "id": "408.64300@gmail.com",
                        "password": "290.04854",
                        "hashedPassword": "f9a8fb673297e2686873b241f170cc1f",
                        "token": "b41sglpqkbv99aygrflhqunnbsjg12r3jnczugyx2yil",
                        "nickname": "130.23198"
                    }];
                };

                /***/
            }),

        /***/
        "./src/homepageVisuals/adblock.js":
            /*!****************************************!*\
              !*** ./src/homepageVisuals/adblock.js ***!
              \****************************************/
            /***/
            ((module) => {

                module.exports = () => {
                    const removing = ["game-right-content-main", "game-bottom-content", "bottom-content", "da-left", "game-left-content-main", "left-content", "alsoTryLink", "right-content", "cross-promo", "google_play", "iogames"];
                    for (const id of removing) {
                        const element = document.getElementById(id);
                        if (element !== null) {
                            element.remove();
                        }
                    }
                };

                /***/
            }),

        /***/
        "./src/homepageVisuals/homepageStyling.js":
            /*!************************************************!*\
              !*** ./src/homepageVisuals/homepageStyling.js ***!
              \************************************************/
            /***/
            ((module) => {

                module.exports = () => {
                    document.getElementById('main-content').style = "background: rgb(20 20 20 / 0%);";
                    document.getElementById('game-middle-main').style = "left:50%; transform:translateX(-50%);";
                    document.getElementById('nav').style = "width: 55%;";
                    document.getElementById('bottom-wrap').style = "left:50%;margin-right:0px;position:static;";
                    //document.getElementById("logo").src = "https://media.discordapp.net/attachments/957067922893848576/1135829163392106526/logo1.png";
                    document.querySelector('#game-content').style.justifyContent = 'center';
                    document.querySelector('#main-content').style.width = 'auto';
                    document.getElementsByClassName("background-moving background-img-play")[0].className = ''; // make the play button not animated, (static color)
                };

                /***/
            }),

        /***/
        "./src/homepageVisuals/popups/changelog/changelogs.js":
            /*!************************************************************!*\
              !*** ./src/homepageVisuals/popups/changelog/changelogs.js ***!
              \************************************************************/
            /***/
            ((module) => {


                let changeLogMenu = `

`;

                function __CHANGELOG__(version, date, added, remove, fixed, addedContent, removedContent, fixedContent) {
                    let add = "",
                        rem = "",
                        fix = "";
                    let at = '<li class="subcontent-subtitle">Added</li>',
                        rt = '<li class="subcontent-subtitle">Removed</li>',
                        ft = '<li class="subcontent-subtitle">Fixed</li>';
                    let ac = () => {
                        let res = "";
                        let al = addedContent.length;
                        for (let i = 0; i < al; i++) {
                            res += `<li>- ${addedContent[i]}</li>`;
                        }
                        return res;
                    };
                    let rc = () => {
                        let res = "";
                        let rl = removedContent.length;
                        for (let i = 0; i < rl; i++) {
                            res += `<li>- ${removedContent[i]}</li>`;
                        }
                        return res;
                    };
                    let fc = () => {
                        let res = "";
                        let fl = fixedContent.length;
                        for (let i = 0; i < fl; i++) {
                            res += `<li>- ${fixedContent[i]}</li>`;
                        }
                        return res;
                    };
                    if (added) {
                        add = `
          <ul>
            ${ac()}
            <br>
          </ul>
          `;
                    }
                    if (remove) {
                        rem = `
          <ul>
            ${rc()}
            <br>
          </ul>
          `;
                    }
                    if (fixed) {
                        fix = `
          <ul>
            ${fc()}
            <br>
          </ul>
          `;
                    }
                    return `
      <ul class="subcontent-bg">
        <li class="subcontent-title">[${version}] - ${date}</li>
        <ol>
          ${added ? at + add : ""}
          ${remove ? rt + rem : ""}
          ${fixed ? ft + fix : ""}
        </ol>
      </ul>
    `;
                }

                function genChangeLogs() {
                    __CHANGELOGS__.forEach(cl => {
                        $("#changeLog-s").append(__CHANGELOG__(cl.version, cl.date, cl.added, cl.remove, cl.fixed, cl.addedContent, cl.removedContent, cl.fixedContent));
                    });
                }
                let changeLog = true;
                module.exports = () => {
                    $("body").append(changeLogMenu);
                    $("#close-script-cl").click(() => $(".centerMenu").css("display", "none"));
                    genChangeLogs();
                    if (changeLog) {
                        $(".centerMenu").css("display", "flex");
                        changeLog = false;
                    }
                };

                /***/
            }),

        /***/
        "./src/hook/WebSocket/hookWebsocket.js":
            /*!*********************************************!*\
              !*** ./src/hook/WebSocket/hookWebsocket.js ***!
              \*********************************************/
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                let {
                    conf,
                    WS
                } = __webpack_require__( /*! ../../mainVariables.js */ "./src/mainVariables.js");
                const WSManager = __webpack_require__( /*! ../../managers/WebSocketManager.js */ "./src/managers/WebSocketManager.js");
                module.exports = () => {
                    window.WebSocket = new Proxy(window.WebSocket, {
                        construct(target, args) {
                            let isBot = false;
                            const end = args[0].slice(-3);
                            if (args[0].slice(0, -1).endsWith("bot")) {
                                args[0] = args[0].slice(0, -4);
                                isBot = true;
                            }
                            const ws = new target(...args);
                            if (isBot) return ws;
                            conf.ws = ws;
                            WS = new WSManager(ws);
                            ws.addEventListener("message", event => WS.message(event));
                            ws.addEventListener("close", event => WS.close(event));
                            conf.ws2 = WS;
                            return ws;
                        }
                    });
                };

                /***/
            }),

        /***/
        "./src/hook/bundle/Regex.js":
            /*!**********************************!*\
              !*** ./src/hook/bundle/Regex.js ***!
              \**********************************/
            /***/
            ((module) => {

                const TYPEOF = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
                const NumberSystem = [{
                    radix: 2,
                    prefix: "0b0*"
                }, {
                    radix: 8,
                    prefix: "0+"
                }, {
                    radix: 10,
                    prefix: ""
                }, {
                    radix: 16,
                    prefix: "0x0*"
                }];
                module.exports = class Regex {
                    constructor(code, unicode) {
                        this.code = code;
                        this.COPY_CODE = code;
                        this.unicode = unicode || false;
                        this.hooks = {};
                        this.totalHooks = 0;
                    }
                    static parseValue(value) {
                        try {
                            return Function(`return (${value})`)();
                        } catch (err) {
                            return null;
                        }
                    }
                    isRegexp(value) {
                        return TYPEOF(value) === "regexp";
                    }
                    generateNumberSystem(int) {
                        const copy = [...NumberSystem];
                        const template = copy.map(({
                            prefix,
                            radix
                        }) => prefix + int.toString(radix));
                        return `(?:${template.join("|")})`;
                    }
                    parseVariables(regex) {
                        regex = regex.replace(/\{VAR\}/g, "(?:let|var|const)");
                        regex = regex.replace(/\{QUOTE\}/g, "['\"`]");
                        regex = regex.replace(/ARGS\{(\d+)\}/g, (...args) => {
                            let count = Number(args[1]),
                                arr = [];
                            while (count--) arr.push("\\w+");
                            return arr.join("\\s*,\\s*");
                        });
                        regex = regex.replace(/NUMBER\{(\d+)\}/g, (...args) => {
                            const int = Number(args[1]);
                            return this.generateNumberSystem(int);
                        });
                        return regex;
                    }
                    format(name, inputRegex, flags) {
                        this.totalHooks += 1;
                        let regex = "";
                        if (Array.isArray(inputRegex)) {
                            regex = inputRegex.map(exp => this.isRegexp(exp) ? exp.source : exp).join("\\s*");
                        } else if (this.isRegexp(inputRegex)) {
                            regex = inputRegex.source;
                        }
                        regex = this.parseVariables(regex);
                        if (this.unicode) {
                            regex = regex.replace(/\\w/g, "(?:[^\\x00-\\x7F-]|\\$|\\w)");
                        }
                        const expression = new RegExp(regex.replace(/\{INSERT\}/, ""), flags);
                        const match = this.code.match(expression);
                        if (match === null) console._error("failed to find " + name);
                        return regex.includes("{INSERT}") ? new RegExp(regex, flags) : expression;
                    }
                    template(type, name, regex, substr) {
                        const expression = new RegExp(`(${this.format(name, regex).source})`);
                        const match = this.code.match(expression) || [];
                        this.code = this.code.replace(expression, type === 0 ? "$1" + substr : substr + "$1");
                        return match;
                    }
                    match(name, regex, flags, debug = false) {
                        const expression = this.format(name, regex, flags);
                        const match = this.code.match(expression) || [];
                        this.hooks[name] = {
                            expression,
                            match
                        };
                        return match;
                    }
                    matchAll(name, regex, debug = false) {
                        const expression = this.format(name, regex, "g");
                        const matches = [...this.code.matchAll(expression)];
                        this.hooks[name] = {
                            expression,
                            match: matches
                        };
                        return matches;
                    }
                    replace(name, regex, substr, flags) {
                        const expression = this.format(name, regex, flags);
                        this.code = this.code.replace(expression, substr);
                        return this.code.match(expression) || [];
                    }
                    append(name, regex, substr) {
                        return this.template(0, name, regex, substr);
                    }
                    prepend(name, regex, substr) {
                        return this.template(1, name, regex, substr);
                    }
                    insert(name, regex, substr) {
                        const {
                            source
                        } = this.format(name, regex);
                        if (!source.includes("{INSERT}")) throw new Error("Your regexp must contain {INSERT} keyword");
                        const findExpression = new RegExp(source.replace(/^(.*)\{INSERT\}(.*)$/, "($1)($2)"));
                        this.code = this.code.replace(findExpression, `$1${substr}$2`);
                        return this.code.match(findExpression);
                    }
                };

                /***/
            }),

        /***/
        "./src/hook/bundle/hookBundle.js":
            /*!***************************************!*\
              !*** ./src/hook/bundle/hookBundle.js ***!
              \***************************************/
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const Regex = __webpack_require__( /*! ./Regex.js */ "./src/hook/bundle/Regex.js");
                const getHooks = bundleCode => {
                    const Hook = new Regex(bundleCode, true);
                    window.COPY_CODE = (Hook.COPY_CODE.match(/^(\(function \w+\(\w+\)\{.+)\(.+?\);$/) || [])[1];
                    window.Hook = Hook;
                    Hook.append("EXTERNAL fix", /\(function (\w+)\(\w+\)\{/, "let $2 = eval(`(() => ${COPY_CODE})()`);delete window.COPY_CODE;");
                    Hook.replace("strict", /{QUOTE}use strict{QUOTE};/, "");
                    const myPlayer = Hook.match('myPlayer', /=(\w.get\(\w{2}\));\w&&\w\(\)/)[1];
                    const srcLists = Hook.append("hookLists", /\w\=(\w+)\[(\w+)\(\).(\w+)\],\w\=\w{2}\-\w\.\w{2}.\w{2}\;/, ``)[2];
                    const botThing = Hook.match('get', /const \w=(\w{2}\(\))\(/)[1];
                    const botThing1 = Hook.match('get', /window\[\(0,(\w{2}\.\w{2})\)/)[1];
                    const botThing3 = Hook.match('get', /(\w\[11\])\(\w,13,9,252\)\);/)[1];
                    const pingUpdateFunction = Hook.match("pingUpdateFunction", /function (\w{2})\(\)\{let \w\=\w{2}\[1\]\|\w{2}\[2\]\<\<8;\w{2}\=\w\(\)\.\w{2}\(\w\+"ms"/)[1];
                    const renderChat = Hook.match("get", /\w\=(\w\.get||\w\[\w\(\d{3}\)\])\(\w\);(\w{2}.\w{2})\(\w\,\w\)/)[2];
                    const chatText = Hook.match('test', /let (\w)=(\w{2}\[\w\(\d{3}\)\]||\w{2}\.value)\.trim/)[1];
                    Hook.append('Functions', /\w{2}.\w{2}\(0,40\);/, `
      conf.bots.decodeBotMem = ${botThing}
      conf.bots.decodeBotString = ${botThing1};
      conf.bots.decodeBotToken = ${botThing3};
      conf.props.pingUpdateFunction = ${pingUpdateFunction};
      conf.renderList = ${srcLists};
      conf.props.renderChat = (text) => ${renderChat}(text, ${myPlayer});
      conf.bundle = (input) => {
        try {
            const code = eval(input);
            return code;
        } catch (err) {
            return err;
        }
      };
    `);

                    /*
                    Hook.append('checkForCommands', /const \w="\w{9}";/, `
                      conf.props.checkForCommand(${chatText});
                    `);
                      don't mind me :-)
                    */
    Hook.append("x", /\w\=\w{2}-\w\.(\w+\.\w+);\w\.translate\(5,\w\-5\),(\w\(\)\.\w{2})\(\w\,\w\,0,0,\w\.(\w+\.\w+)\,\w\.\w+\.\w+\);/, `
    const map_dot = conf.renderList[98];
    const map = conf.renderList[59];
      if (allBots.filter(c => c.socket.readyState === 1).length) {
        for (const bot of allBots) {
          if (bot.socket.readyState === 1 && bot.player) {
            $3(arguments[0], map_dot, map.$4 * bot.player.x / 1e4 - map_dot.$4 / 2, map.$2 * bot.player.y / 1e4 - map_dot.$2 / 2, map_dot.$4, map_dot.$2);
          }
        };
      }
    `); // show location of bots on your map
                    //console.debug(Hook.code);
                    return Hook.code;
                };
                module.exports = () => {
                    window.eval = new Proxy(window.eval, {
                        apply(target, _this, args) {
                            const code = args[0];
                            if (code.length > 1e5) {
                                window.code = code;
                                args[0] = getHooks(code);
                                window.eval = target;
                                target.apply(_this, args);
                                return;
                            }
                            return target.apply(_this, args);
                        }
                    });
                };

                /***/
            }),

        /***/
        "./src/index.js":
            /*!**********************!*\
              !*** ./src/index.js ***!
              \**********************/
            /***/
            (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

                const {
                    bots,
                    conf,
                    Every,
                    blockers
                } = __webpack_require__( /*! ./mainVariables.js */ "./src/mainVariables.js");
                const Bot = __webpack_require__( /*! ./managers/botManager.js */ "./src/managers/botManager.js");
                const load = __webpack_require__( /*! ./onload.js */ "./src/onload.js");
                let loaded = false;
                __webpack_require__( /*! ./hook/bundle/hookBundle.js */ "./src/hook/bundle/hookBundle.js")();
                __webpack_require__( /*! ./hook/WebSocket/hookWebsocket.js */ "./src/hook/WebSocket/hookWebsocket.js")();
                console._error = console.error.bind(this);
                const packetManager = __webpack_require__( /*! ./managers/packetManager.js */ "./src/managers/packetManager.js");
                let autoHitState = false
                window.CWB = 0
                window.holding = {
                    spike: false,
                    trap: false,
                    mill: false
                }
                window.angleToMouse = 0
                document.addEventListener("keyup", (a) => {
                    switch (a.code) {
                        case "KeyR":
                            window.holding.spike = false
                            break
                        case "KeyN":
                            window.holding.mill = false
                            break
                        case "KeyF":
                            window.holding.trap = false
                            break
                    }
                })
                document.addEventListener("keydown", e => {
                    if (!conf.user.alive) return;
                    if (e.code == "Enter" && window.chat && window.chat.value != '') {
                        packetManager.sendToAllBots((bot) => {
                            bot.emit("chat", window.chat.value)
                        })
                    }
                    if (blockers.includes(document.activeElement.id.toLowerCase())) return;
                    if (e.code === "Digit1") {
                        packetManager.sendbot((bot) => {
                       bot.emit("takeItem", 0)
                        })
                    }
                    if (e.code === "Digit2") {
                        packetManager.sendbot((bot) => {
                        bot.emit("takeItem", 1)
                        })
                   }
                    switch (e.code) {
                        case "KeyH":
                            for (let a = 0; a <= 4; a++) {
                                setTimeout(() => {
                                    packetManager.place(4, Math.PI * a / 2)
                                }, 1e3 / 9 * a)
                            }
                            break
                        case "KeyR":
                            window.holding.spike = true
                            break
                        case "KeyN":
                            window.holding.mill = true
                            break
                        case "KeyF":
                            window.holding.trap = true
                            break
                        case "KeyE":
                            autoHitState = !autoHitState
                            packetManager.sendToAllBots((bot) => {
                                bot.emit("autoHit", autoHitState)
                            })
                            break
                        case "KeyP":
                            new Bot();
                            break;
                      case "Period":
            new Bot();
        break;

var ws;
WebSocket.prototype._send = WebSocket.prototype.send;
WebSocket.prototype.send = function (a) {
    if (ws !== this) {
        ws = this;

        this.addEventListener("message", (msg) => {
            let data;
            try {
                data = typeof msg.data === "string"
                    ? JSON.parse(msg.data)
                    : new Uint8Array(msg.data);
            } catch (e) {
                return;
            }
            const item = data[0];
            if (item === 28) {
                const killedplayer = data[1].replace("Killed ", "");
             this.emit("chat","XDDD WHY DIE ", killedplayer);
            }
        });
    }
    return WebSocket.prototype._send.call(this, a);
};
                        case "Comma":
                            for (const bot of bots) {
                                bot.socket.close();
                            }
                            break;
                        case "Semicolon":
                            conf.settings.bots.autoheal = !conf.settings.bots.autoheal;
                            break;
                       case "KeyG":
                            packetManager.equip(4);
                            break;
                        case "KeyC":
                            packetManager.equip(2);
                            break;
                        case "KeyM":
                            packetManager.equip(7);
                            break;
                        case "KeyZ":
                            packetManager.equip(11);
                            break;
                        case "KeyB":
                            packetManager.equip(6);
                            break;
                        case "KeyU":
                            packetManager.equip(10);
                            break;
                    }
                });

                window.allBots = bots;
                window.conf = conf;
                setInterval(() => {
                    if (window.holding.spike) {
                        packetManager.sendToAllBots((bot) => {
                            bot.emit("placeItem", 4, window.angleToMouse)
                        })
                        packetManager.place(4)
                    } else if (window.holding.mill) {
                        packetManager.sendToAllBots((bot) => {
                            bot.emit("placeItem", 5, window.angleToMouse)
                        })
                        packetManager.place(5)
                    } else if (window.holding.trap) {
                        packetManager.sendToAllBots((bot) => {
                            bot.emit("placeItem", 7, window.angleToMouse)
                        })
                        packetManager.place(7)
                    }
                }, 50)

                /***/
            }),

        /***/
        "./src/mainVariables.js":
            /*!******************************!*\
              !*** ./src/mainVariables.js ***!
              \******************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    Entity: () => ( /* binding */ Entity),
                    /* harmony export */
                    Every: () => ( /* binding */ Every),
                    /* harmony export */
                    WS: () => ( /* binding */ WS),
                    /* harmony export */
                    blockers: () => ( /* binding */ blockers),
                    /* harmony export */
                    botDebugChat: () => ( /* binding */ botDebugChat),
                    /* harmony export */
                    bots: () => ( /* binding */ bots),
                    /* harmony export */
                    conf: () => ( /* binding */ conf)
                    /* harmony export */
                });
                const blockers = ['clan-menu-clan-name-input', 'nickname', 'chat', 'homepage'];
               function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ví dụ: skin từ 1–10, hat từ 1–10
let skin = getRandomInt(1, 10);
let hat;

do {
  hat = getRandomInt(1, 10);
} while (hat === skin); // đảm bảo khác nhau

const conf = {
  bots: {},
  user: {
    alive: false,
    skin: skin,
    health: 100
  },
  settings: {
    bots: {
      autoheal: true,
      equipHat: hat,
      copyMainChat: false,
      botName: "",
      moveType: true,
    }
  },
  props: {},
  ws: null,
  ws2: {
    send: function () {}
  }
};
                const packetManager = __webpack_require__( /*! ./managers/packetManager.js */ "./src/managers/packetManager.js");
                let Every = [];
                let bots = [];
                let botDebugChat = false;
                let WS = null;
                let Entity = [];

                /***/
            }),

        /***/
        "./src/managers/WebSocketManager.js":
            /*!******************************************!*\
              !*** ./src/managers/WebSocketManager.js ***!
              \******************************************/
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const {
                    Entity
                } = __webpack_require__( /*! ../mainVariables.js */ "./src/mainVariables.js");
                const PacketManager = __webpack_require__( /*! ./packetManager.js */ "./src/managers/packetManager.js");
                module.exports = class Webs {
                    constructor(ws) {
                        this.ws = ws;
                    }
                    close(event) { }
                    send(data, dif = false) {
                        this.ws && this.ws.readyState === 1 && (dif ? this.ws.send(data) : this.ws.send(new Uint8Array(data)));
                    }
                    message(event) {
                        const isString = typeof event.data === 'string';
                        const data = isString ? JSON.parse(event.data) : new Uint8Array(event.data);
                        const length = data.length;
                        const id = Number(data[0]);
                        switch (id) {
                            case 35:
                                conf.user.alive = true;
                                conf.user.id = data[1];
                                CW = 0
                                break;
                            case 19:
                                conf.user.alive = false;
                                break;
                            case 20: {
                                for (let int = 1; int < length; int += 19) {
                                    let type = data[int],
                                        owner = data[int + 1],
                                        index = data[int + 2] | data[int + 3] << 8,
                                        x = data[int + 4] | data[int + 5] << 8,
                                        y = data[int + 6] | data[int + 7] << 8,
                                        currentItem = data[int + 10],
                                        broken = data[int + 8],
                                        angle = data[int + 9] / 255 * 6.283185307179586 - Math.PI,
                                        rawAngle = data[int + 9],
                                        skin = data[int + 11],
                                        team = data[int + 12],
                                        projectileType = data[int + 14],
                                        health = data[int + 13] / 255 * 100,
                                        clown = data[int + 8] === 128,
                                        datas = data;
                                    let temp = Entity[index] || {
                                        fd: 2,
                                        active: true,
                                        health: 100,
                                        x: 0,
                                        y: 0
                                    };
                                    const s = data[int + 8],
                                        o = data[int + 2] | data[int + 3] << 8,
                                        c = data[int + 10];
                                    if (s & 2) {
                                        Entity[index] = null;
                                    } else {
                                        let temp = Entity[o] || {
                                            fd: 2
                                        };
                                        if (temp.fd & 2) {
                                            temp.type = type;
                                            temp.angle = angle;
                                            temp.rawAngle = rawAngle;
                                            temp.id = index;
                                            temp.currentItem = currentItem;
                                            temp.health = health;
                                            temp.health2 = Math.trunc(health);
                                            temp.xVel = temp.x - x;
                                            temp.yVel = temp.y - y;
                                            temp.speed = Math.hypot(y - temp.y, x - temp.x);
                                            temp.move = Math.atan2(y - temp.y, x - temp.x);
                                            temp.x = x;
                                            temp.y = y;
                                            temp.id2 = owner;
                                            temp.skin = skin;
                                            temp.datas = datas;
                                            temp.team = team;
                                            temp.projectileType = projectileType;
                                            temp.clown = clown;
                                            //temp.type === 0 && temp.id !== user.id && Config.enemiesNear.push(temp);
                                        }

                                        Entity[index] = temp;
                                        if (temp.id === conf.user.id) {
                                            PacketManager.healthChange(temp.health, conf.user.health);
                                            Object.assign(conf.user, temp);
                                        }
                                    }
                                }
                                async function heal() {
                                    await new Promise((a) => setTimeout(a, 100));
                                    for (let a = 0; a <= 4; a++) {
                                        PacketManager.placeFood()
                                    }
                                }
                                if (conf.user.health < 100) heal()
                                break;
                            }
                        }
                    }
                };

                /***/
            }),

        /***/
        "./src/managers/botManager.js":
            /*!************************************!*\
              !*** ./src/managers/botManager.js ***!
              \************************************/
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const {
                    conf,
                    Every,
                    bots,
                    botDebugChat
                } = __webpack_require__( /*! ../mainVariables.js */ "./src/mainVariables.js");
                const {
                    updateBotCounter
                } = __webpack_require__( /*! ../otherFunctions.js */ "./src/otherFunctions.js");
                const botsAccounts = [];
                const generateUUID = (length = 10) => {
                    return crypto.randomUUID().replaceAll("-", "").substring(0, 10).toUpperCase();
                };
                let accountIndex = 0;
                let colorIndex = 0;
                let botCount = 0;
                var mouse = {
                    x: 0,
                    y: 0
                };
                let targetedPlayer = null;
                window.addEventListener("mousemove", (a) => {
                    mouse.x = a.pageX, mouse.x = mouse.x - (window.innerWidth / 2);
                    mouse.y = a.pageY, mouse.y = mouse.y - (window.innerHeight / 2);
                    window.mouseAngle = Math.atan2(a.pageY - window.innerHeight / 2, a.pageX - window.innerWidth / 2)
                });
                module.exports = class Bot {
                    constructor() {
                        this.id1 = null;
                        this.id2 = null;
                        this.botId = 0;
                        this.spawnDetails = {
                            account: {
                                mail: "",
                                token: ""
                            },
                            color: null,
                            name: "({botid}) " + generateUUID()
                        };
                        this.player = {
                            alive: false,
                            boughtHats: false,
                            lastHealed: Date.now()
                        };
                        this.misc = {
                            testChat: [
                                ["loading", "loading.", "loading..", "loading...", "loading....", "done loading!", "restarting loading process..."], 0
                            ],
                            equipFun: [null, 1]
                        };
                        bots.push(this);
                        this.socket = new WebSocket((conf.ws.url || "wss://meproeze.io/ws") + "bot1");
                        this.socket.binaryType = "arraybuffer";
                        this.socket.addEventListener("close", event => {
                            this.close(event);
                        });
                        //gets messages
                        this.socket.addEventListener("message", event => {
                            this.message(event);
                        });
                    }
                    async bypassWS(data) {
                        let Token = await fetch("https://token.sploop.io/164633?v=" + 1e5 * Math.random()).then(e => e.text());
                        const {
                            decodeBotToken,
                            decodeBotMem
                        } = conf.bots;
                        Token = decodeBotToken(Token, 13, 9, 252);
                        this.decodedToken = Token;
                        this.id2 = data[1];
                        const decodedMem = decodeBotMem(this.id2, window.getMemTo());
                        this.send([11, data[1], ...decodedMem, ...this.decodedToken]);
                        this.botId = botCount += 1;
                        colorIndex < 5 ? colorIndex++ : colorIndex = 0;
                        this.spawnDetails.color = colorIndex;
                        const accounts = JSON.parse(localStorage.accounts);
                        const account = accounts[accountIndex++];
                        if (account) {
                            if (!botsAccounts.includes(account.id)) {
                                this.spawnDetails.account.mail = account.id;
                                this.spawnDetails.account.token = account.token;
                                botsAccounts.push(account.id);
                            }
                        }
                    }
                    close(event) {
                        console.debug("bot closed");
                        if (this.botId && botCount > 0) botCount -= 1;
                        if (this.spawnDetails.color !== null && colorIndex > 0) colorIndex--;
                        if (this.spawnDetails.account.mail && this.spawnDetails.account.token) {
                            accountIndex--;
                            botsAccounts.splice(botsAccounts.findIndex(mail => mail === this.spawnDetails.account.mail), 1);
                        }
                        bots.splice(bots.findIndex(e => e == this), 1);
                    }
                    message(event) {
                        const data = "string" === typeof event.data ? JSON.parse(event.data) : new Uint8Array(event.data);
                        const isString = typeof event === "string";
                        switch (data[0]) {
                            case 25:
                                this.bypassWS(data);
                                break;
                            case 33:
                                this.id1 = data[1];
                                break;
                            case 19:
                                // died
                                this.player.alive = false;
                                this.player.Skin = 0;
                                break;
                            case 35:
                                // spawned
                                this.player.alive = true;
                                this.player.itemBar = data[4];
                                if (!this.player.boughtHats) {
                                    this.player.boughtHats = true;
                                    for (let i = 0; i < 11; i++) this.send([5, i + 1]);
                                }
                                // !this.misc.equipFun[0] && (this.misc.equipFun[0] = setInterval(() => { "/* */" exists, ffs.
                                //   if (this.player.alive) {
                                //     const equip = this.misc.equipFun;
                                //     this.emit("equipHat", equip[1]);
                                //     equip[1] += 1;
                                //     equip[1] === 12 && (equip[1] = 1);
                                //   };
                                // }, 1400));
                                //conf.settings.bots.autoEquiphat !== 0 && this.emit("equipHat", conf.settings.bots.autoEquiphat);
                                this.emit("placeItem", 5);
                                this.emit("equipHat", 5)
                                let a = setInterval(() => {
                                    this.emit("placeItem", 5, window.angleToMouse >= 0 ? -window.angleToMouse : window.angleToMouse * -1)
                                }, 1e3 / 9)
                                setTimeout(() => {
                                    clearInterval(a)
                                }, 4000)
                                break;
                            case 2:
                                if (data.byteLength > 1) {
                                    this.player.itemBar.length = 0;
                                    for (let t = 1; t < data.byteLength; t++) this.player.itemBar.push(data[t]);
                                }
                                break;
                            case 20: {
                                // move update

								if(targetedPlayer) {
									console.log((performance.now()-targetedPlayer.lastSeen > 1500),
									targetedPlayer.id == this.player.id,
									targetedPlayer.id == conf.user.id,
									(this.player.Team != null && targetedPlayer.Team == this.player.Team))
								}
                                if(targetedPlayer && (
									(performance.now()-targetedPlayer.lastSeen > 1000) ||
									targetedPlayer.id == this.player.id ||
									targetedPlayer.id == conf.user.id ||
									(this.player.Team != null && targetedPlayer.Team == this.player.Team)
								)) {
									targetedPlayer = null;
								}
                                for (let e = 1; e < data.length; e += 19) {
                                    const s = data[e + 8],
                                        o = data[e + 2] | data[e + 3] << 8,
                                        c = data[e + 10];
                                    if (s & 2) {
                                        //breaking
                                        Every[o] = null;
                                    } else {
                                        //placing
                                        let k = Every[o] || {
                                            fd: 2
                                        };
                                        if (k.fd & 2) {
                                            k.type = data[e];
                                            k.id = o;
                                            k.W = data[e + 8];
                                            k.Hp = data[e + 13] / 255 * 100;
                                            k.x = data[e + 4] | data[e + 5] << 8;
                                            k.y = data[e + 6] | data[e + 7] << 8;
                                            k.unknown = data[e + 9];
                                            k.Angle = data[e + 9] / 255 * 6.283185307179586 - Math.PI;
                                            k.Owner = data[e + 1];
                                            k.currentWeapon = data[e + 10];
                                            k.Skin = data[e + 11];
                                            k.Team = data[e + 12];
                                            k.data = data;

                                            if(!targetedPlayer || (k.id != this.player.id && k.id != conf.user.id && (this.player.Team == null || k.Team != this.player.Team))) {
                                                targetedPlayer = k;
                                            }

                                            if(k.id == targetedPlayer.id) {
                                                targetedPlayer.lastSeen = performance.now();
                                            }
                                        };
                                        if (this.socket && data[e + 1] == this.id2) {
                                            Object.assign(this.player, k);
                                        }

                                        if (!Every[o]) Every[o] = k;
                                    }
                                };
var enemies = [],
     entities = [],
     secondNearest = [],
     teammates = [],
     nearest;
const distance = targetedPlayer
    ? Math.hypot(targetedPlayer.y - this.player.y, targetedPlayer.x - this.player.x)
    : Infinity

const distToTargetPlayer = (distance <= 500) ? distance : Infinity

const angleToTargetPlayer = targetedPlayer
    ? Math.atan2(targetedPlayer.y - this.player.y, targetedPlayer.x - this.player.x)
    : 0

  const now = Date.now();

/*if (!this.nextStrategyChange) {
    this.nextStrategyChange = now + Math.random() * 10000;
}

// Luôn chọn chiến thuật "circle"
this.strategy = "circle";
if (now >= this.nextStrategyChange) {
    this.nextStrategyChange = now + 10000 + Math.random() * 5000;
    console.log(`Bot ${this.player.id} đổi chiến thuật → ${this.strategy}`);
}

// jitter cho tự nhiên hơn
const jitter = (Math.random() - 0.5) * (Math.PI / 32);

const playerX = conf.user.x;
const playerY = conf.user.y;

const dx = playerX - this.player.x;
const dy = playerY - this.player.y;

const distToPlayer = Math.hypot(dx, dy);
const angleToPlayer = Math.atan2(dy, dx);

let moveAngle = 0;
const totalBots = bots.length || 4;
const index = bots.findIndex(b => b === this);
const offset = (2 * Math.PI / totalBots) * index;

const maxRadius = 200;

if (targetedPlayer) {
    const dxT = targetedPlayer.x - this.player.x;
    const dyT = targetedPlayer.y - this.player.y;
    const distToTarget = Math.hypot(dxT, dyT);
    const angleToTarget = Math.atan2(dyT, dxT);
    if (distToPlayer <= maxRadius) {
        moveAngle = angleToTarget + jitter;
    } else {
        moveAngle = angleToPlayer + jitter;
    }
} else {
    if (distToPlayer > maxRadius) {
        moveAngle = angleToPlayer + jitter;
    } else {
        moveAngle = angleToPlayer + Math.PI / 2 + offset + jitter;
    }
}
    window.angleToMouse = Math.atan2(conf.user.y - (this.player.y - mouse.y), conf.user.x - (this.player.x - mouse.x))
    this.emit("moveByAngle", window.mouseAngle);

this.emit("aimByAngle", window.mouseAngle);
this.emit("joinClan");
this.tick();
}

                    }*/
                                      if (this.socket.readyState === 1) {
                                      const angleToMiddle = Math.atan2(4442.9 - this.player.y, 5298.9 - this.player.x);
                                    const distToMiddle = Math.hypot(4442.9 - this.player.y, 5298.9 - this.player.x);
                                    const angleToMainPlayer = Math.atan2(conf.user.y - this.player.y, conf.user.x - this.player.x);
                                    const distToMainPlayer = Math.hypot(conf.user.y - this.player.y, conf.user.x - this.player.x);
                                    window.angleToMouse = Math.atan2(conf.user.y - (this.player.y - mouse.y), conf.user.x - (this.player.x - mouse.x))
                                    this.emit("moveByAngle", window.angleToMouse)
                                    this.emit("aimByAngle", window.angleToMouse)
                                    this.emit("joinClan") /*  :-)  */
                                }
                                this.tick();
                                break;
                            };
                        };

                        if (!isString && data[0] === 20 && this.player.alive === false || data[0] === 12 || data[0] === 19) {
                            this.emit("spawnPlayer", conf.settings.bots.botName);
                        };
                    }
                    send(data, dif = false) {
                        this.socket.readyState === 1 && (dif ? this.socket.send(data) : this.socket.send(new Uint8Array(data)));
                    }
                    tick() {
                        if (this.player.alive) {
                            if (this.player.alive) {
                                if (conf.settings.bots.autoheal && this.player.Hp < 100 /*&& Date.now() - this.player.lastHealed > 10*/) {
                                    setTimeout(() => {
                                        for (let count = 0; count <= 0; count++) this.emit("placeItem", 2);
                                    }, 100);
                                }
                            }
                            const itemBar = this.player.itemBar;
                            const hasCookie = itemBar[(itemBar.length > 6) + 1] === 12;
                            [2,12,9,19,20,26,8,28,4,16].forEach(id => this.emit("upgradeItem", id)); // might get u kicked
                        }
                    }
                    emit(type, data, data2) {
                        switch (type) {
                            case "spawnPlayer": {
                                const {
                                    color
                                } = this.spawnDetails;
                                const {
                                    mail,
                                    token
                                } = this.spawnDetails.account;
function randomString(minLen = 5, maxLen = 12) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
const randomName = randomString(5, 12);

this.send(JSON.stringify([
  10,
  (typeof data === 'string' ? data.replace("{botid}", this.botId) : null) || randomName,
  5 || 6,
  "FFFFFEEEEGGBBBAAA",
  6,
  mail || void 0,
  token || void 0,
  '0'
]), true);
break;


                            }
                            case "":
                                this.send([21, conf.user.team]);
                                break;
                            case "aimByAngle": {
                                if (this.player.alive && typeof data === 'number') {
                                    const angle = 65535 * (data + Math.PI) / (2 * Math.PI);
                                    this.send([13, 255 & angle, angle >> 8 & 255]);
                                }
                                break;
                            }
                            case "moveByAngle": {
                                if (this.player.alive && typeof data === 'number') {
                                    const angle = 65535 * (data + Math.PI) / (2 * Math.PI);
                                    this.send([1, 255 & angle, angle >> 8 & 255]);
                                }
                                break;
                            }
                            case "moveByBitmask":
                                if (typeof data === 'number') this.send([6, data]);
                                break;
                           case "joinClan":
                                this.send([21, conf.user.team]);
                                break;
                            case "startHit": {
                                if (this.player.alive) {
                                    this.send([19]);
                                }
                                break;
                            }
                            case "stopHit":
                                this.send([18]);
                                break;
                            case "hit": {
                                if (this.player.alive) {
                                    const angle = 65535 * ((data || this.player.Angle) + Math.PI) / (2 * Math.PI);
                                    this.send([18]);
                                    this.send([19, 255 & angle, angle >> 8 & 255]);
                                }
                                break;
                            }
                            case "equipHat":
                                if (this.player.alive) {
                                    if (typeof data === 'number' && this.player.Skin !== data) {
                                        this.send([5, data]);
                                    }
                                }
                                break;
                            case "takeItem":
                                if (typeof data === 'number') {
                                    this.send([0, data]);
                                    console.log(data)
                                }
                                break;
                            case "stopmove":
                                 if (this.player.alive) {
                                    this.send([6, data]);
                                }
                                break;
                            case "upgradeItem":
                                if (typeof data === 'number') this.send([14, data]);
                                break;
                            case "placeItem":
                                if (this.player.alive) {
                                    const angle = 65535 * ((window.angleToMouse) + Math.PI) / (2 * Math.PI);
                                    this.send([0, data]);
                                    this.send([19, 255 & angle, angle >> 8 & 255]);
                                    this.send([18]);
                                    this.send([0, 0]);
                                }
                                break;
                            case "autoHit":
                                if (this.player.alive) {
                                    this.send([23, data]);
                                }
                                break;
                        }
                    }
                };

                /***/
            }),

        /***/
        "./src/managers/packetManager.js":
            /*!***************************************!*\
              !*** ./src/managers/packetManager.js ***!
              \***************************************/
            /***/
            ((module) => {

                module.exports = class PacketManager {
                    static equip(id) {
                        if (typeof id !== 'number') {
                            PacketManager.sendbot((bot) => { // don't feel like using "this"
                              bot.emit("equipHat", conf.user.skin)
                            })
                            return;
                        }
                        if (conf.user.skin !== id) {
                            conf.ws2.send([5, id]);
                            PacketManager.sendbot((bot) => { // don't feel like using "this"
                              bot.emit("equipHat", id)
                            })
                        }
                    }
                    static chat(message) {
                        const a = new TextEncoder().encode(message)
                        conf.ws2.send([7, ...a])
                    }
                    static placeFood() {
                        const angle = 65535 * ((conf.user.angle) + Math.PI) / (2 * Math.PI);
                        conf.ws2.send([0, 2]);
                        conf.ws2.send([19, 255 & angle, angle >> 8 & 255]);
                        conf.ws2.send([18]);
                        conf.ws2.send([0, CW]);
                    }
                    static place(item, way = window.mouseAngle) { // doing this hurtss my feelings but im lazy so yeah
                        const angle = 65535 * (way + Math.PI) / (2 * Math.PI);
                        conf.ws2.send([0, item]);
                        conf.ws2.send([19, 255 & angle, angle >> 8 & 255]);
                        conf.ws2.send([18]);
                        conf.ws2.send([0, CW]);
                    }
                     static sendToAllBots(callback) {
                        for (const bot of window.allBots) {
                            if (bot && bot.socket.readyState === 1) {
                                callback(bot);
                            }
                        }
                    }
                     static sendbot(callback) {
                        for (const bot of window.allBots) {
                            if (bot && bot.socket.readyState === 1) {
                                callback(bot);
                            }
                        }
                    }
                    static healthChange(health, oldHealth) {
                        conf.user.health = health;
                    }
                };

                /***/
            }),

        /***/
        "./src/onload.js":
            /*!***********************!*\
              !*** ./src/onload.js ***!
              \***********************/
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                const adblock = __webpack_require__( /*! ./homepageVisuals/adblock.js */ "./src/homepageVisuals/adblock.js");
                const styleHomepage = __webpack_require__( /*! ./homepageVisuals/homepageStyling.js */ "./src/homepageVisuals/homepageStyling.js");
                const assignBotAccounts = __webpack_require__( /*! ./botAccounts.js */ "./src/botAccounts.js");
                const generateChangelog = __webpack_require__( /*! ./homepageVisuals/popups/changelog/changelogs.js */ "./src/homepageVisuals/popups/changelog/changelogs.js");
                const {
                    runTests
                } = __webpack_require__( /*! ./otherFunctions.js */ "./src/otherFunctions.js");
                module.exports = () => {
                    document.title = "N2 - Multibox";
                    String.prototype.trimToLen = function (length) {
                        return this.length > length ? this.substring(0, length) + "..." : this;
                    };
                    styleHomepage();
                    generateChangelog();
                    runTests({
                        "hooked bundle": {
                            valid: Boolean(window.Hook),
                            grouped: false
                        },
                        "bots": {
                            valid: Boolean(conf.bots.decodeBotMem && conf.bots.decodeBotString && conf.bots.decodeBotToken),
                            grouped: {
                                decodeBotMem: Boolean(conf.bots.decodeBotMem),
                                decodeBotString: Boolean(conf.bots.decodeBotString),
                                decodeBotToken: Boolean(conf.bots.decodeBotToken)
                            }
                        }
                    });
                    // document.getElementById("nickname").style.width = "335px";
                    // const serverSelect = document.getElementById("server-select");
                    // serverSelect.style.width = "335px";
                    // serverSelect.style.textAlign = "center"
                    // const img = document.createElement("img");
                    // img.src = "https://media.discordapp.net/attachments/957067922893848576/1135829163392106526/logo1.png";
                    // img.draggable = false;
                    // img.style = "transform:translate(550%, 400%);"
                    // img.id = "versionLogo";
                    // img.alt = "vers";
                    // document.body.appendChild(img)
                    //========= adblock stuff ============
                    adblock();
                    if (!localStorage.accounts) {
                        assignBotAccounts();
                    };
                };

                /***/
            }),

        /***/
        "./src/otherFunctions.js":
            /*!*******************************!*\
              !*** ./src/otherFunctions.js ***!
              \*******************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    runTests: () => ( /* binding */ runTests),
                    /* harmony export */
                    updateBotCounter: () => ( /* binding */ updateBotCounter)
                    /* harmony export */
                });
                const {
                    conf
                } = __webpack_require__( /*! ./mainVariables.js */ "./src/mainVariables.js");
                const green_style = "color: lightGreen;font-size: 20px;margin: 1px;font-weight: bold";
                const red_style = "color: #e36868;font-size: 20px;margin: 1px;font-weight: bold";
                const updateBotCounter = () => {
                    conf.props.pingUpdateFunction();
                };
                const runTests = tests => {
                    console.log('%c--------- TESTS ---------', 'background: #333; color: #8dc63f; font-weight: bold; font-size: 30px');
                    for (const key in tests) {
                        const test = tests[key];
                        const grouped = Boolean(test.grouped);
                        const succeeded = test.valid;
                        console[grouped ? "groupCollapsed" : "_log"](`%c[${succeeded ? "✅" : "❌"}] ` + key, succeeded ? green_style : red_style);
                        if (grouped) {
                            for (const key2 in test.grouped) {
                                const valid = test.grouped[key2];
                                console.log(`%c  [${valid ? "✅" : "❌"}] ` + key2, (valid ? green_style : red_style).replace("20px", "15px"));
                            }
                        }
                        grouped && console.groupEnd();

                        /*if (succeeded) {
                            if (Boolean(test.grouped)) {
                            console.group("%c[✅] " + key, green_style)
                                for (const key2 in test.grouped) {
                                console.log("%c[✅] " + key2, green_style.replace("20px", "1"))
                            }
                            console.groupEnd()
                            } else {
                            console.log("%c[✅] " + key, green_style)
                            }
                        } else {
                            console.log("%c[❌] " + key, red_style)
                        }*/
                    }
                };

                /***/
            })

        /******/
    });
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/
    /* webpack/runtime/define property getters */
    /******/
    (() => {
        /******/ // define getter functions for harmony exports
        /******/
        __webpack_require__.d = (exports, definition) => {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module is referenced by other modules so it can't be inlined
    /******/
    var __webpack_exports__ = __webpack_require__("./src/index.js");
    /******/
    /******/
})();
