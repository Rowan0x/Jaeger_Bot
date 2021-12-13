const puppeteer = require('puppeteer');
const Discord = require('discord.js');
const client = new Discord.Client();

async function send(id) {
    //post request to discord webhook
    const webhook = new Discord.WebhookClient('920013923321782373', 'jFXYfe1SkQ8KIfnrJlbwwP_R8R22FsY90aBhMwzvwCp1BBKgKdFivrY9ZC7cCjaoRej0');
    const embed = new Discord.MessageEmbed()
    .setAuthor('Reality', 'https://cdn.discordapp.com/attachments/920013907790278696/920021449002070016/114052764_8712ed04-9d22-4440-8027-03e5dfc08af3.jpg')
        .setTitle('Roblox Report')
        .setColor(0x00AE86)
        .setDescription('Game reported at: ' + new Date().toLocaleString() + ' \n Succes = ✅ \n ID: ' + id)
    webhook.send(embed);
    //send images to webhook
    const attachment = new Discord.MessageAttachment('proof1.png');
    webhook.send(attachment);
    const attachment2 = new Discord.MessageAttachment('example.png');
    webhook.send(attachment2);


}

exports.report = async function (id, token) {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.roblox.com/');

    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
    });
    await page.click('.cookie-btn')
    await page.setCookie({ name: '.ROBLOSECURITY', value: token, domain: '.roblox.com' });
    page.goto(`https://www.roblox.com/abusereport/asset?id=${id}`).then(async () => {
        const title = await page.title();
        await page.type('#Comment', 'Hello, this game has been detected by the Hidd3n report system. This game is  most likely a Robles sex game. Please take this game down. \n -Sincerely Rowan F.', { delay: 0 })
        const url = await page.url();
        console.log(title, url);
        await page.select("select#ReportCategory", "7")
        await page.screenshot({ path: "proof1.png", fullPage: true });
        await page.click('#report-abuse');
        await page.waitForNavigation();
        await page.screenshot({ path: "example.png", fullPage: true });
        send(id);
    })
}





