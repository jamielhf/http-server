
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    //https://github.com/andris9/nodemailer-wellknown#supported-services 支持列表
    service: 'qq',
    port: 465, // SMTP 端口
    secureConnection: true, // 使用 SSL
    auth: {
        user: '569309786@qq.com',
        pass: 'yctjvjxhfvhjbcdd' //邮件的SMTP密码
    }
});


let email = {
    sendEmail(content){
        var mailOptions = {
            from: '569309786@qq.com', // 发件地址
            to: '569309786@qq.com', // 收件列表
            subject: 'Hello sir', // 标题
            //text和html两者只支持一种
            text: 'Hello world ?', // 标题
            html: content// html 内容
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('发邮件')

            console.log('Message sent: ' + info.response);

        });
    }
}


exports.email = email