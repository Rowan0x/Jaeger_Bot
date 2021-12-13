const puppeteer = require('puppeteer');
const Discord = require('discord.js');
const client = new Discord.Client();
const api = require('./back.js')


const t = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_5370D725411E3C0CE7032D16567F6E727F2670D31A163D3022FCE30061C1A15CF77385012B2EB0F7629D56394396DCE36234BCB059C304EE4AF65062DAC21D503E901F565F820CD6411E6A7C4E386F9C0AC926D4C5018BBC626491164B209FA72060815DFD198E0C4067F8E0D4E6A626BD158F8DDDEA635104424BF0264187B32D7ADAF83713DBB1A23CA461A768A5D5AE92D63BB4A012123D9A8B6A934BE8675B56F7B4BCB10051CEBBA1F9848A0503071FB94231E8852CF6840402C1E200C1B9CBC4BA06761331ABCE17943A146345E70FBE6620B926303D3C7BDE6A187F13C2E8E8B9B3659FD1A242FDD71EEBDD8D0B89D64F64C7BA7A3C1FE8DD01E01AEC5D877D8437FFA3BA61E1EE408CAF38B7BBCE4E2C6B4FBBB01C33CA2DA6DBC307518D0185C9FCB500879D4B7CD280652D46395F4F60214B4BC1390CEE0388DE9EAEAB6D09324F6E002764D5090E7DD4E9F833183B"

client.login("OTA2OTc0MTIxNzEwMjIzNDIy.YYgbeQ.zghwtTpWe57HDeY25ZAkGq2zjuQ");

client.on('message', async message => {
    const url = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    //get url out of message
    let url_match = message.content.match(url);
    if (url_match != null) {
        const match = url_match[0];
        if (match.includes("roblox")) {
            const split = match.split("/")
            console.log(split[4])
            console.log("roblox url")
            api.report(split[4], t)
        }
    }
})










