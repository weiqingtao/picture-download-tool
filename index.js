const fs = require("fs-extra");
const randomstring = require("randomstring");
const moment = require("moment");

const url = require("url");
const downloadTool = require("./lib/downloadImage")
module.exports = {
    /**
     * 
     * @param {*} options 
     * url 图片地址， 不传入地址默认为/public/image  不传入图片名称默认时间戳+随机数
     */
    downloadImage(options) {
        try {
            if (!options) {
                // return "options is undefined"
                return Promise.reject(new Error('The options is required'));
            }
            if (!options.url) {
                return Promise.reject(new Error('The options.url is required'));
            }
            if (!options.dist) { //下载路径 不传入路径为 /public/image/
                options.dist = process.cwd() + "/public/image/";
                fs.ensureDirSync(options.dist)
            }
            if (!options.fileName) {
                const random = randomstring.generate({
                    length: 6,
                    charset: 'numeric'
                });
                const fileName = `${moment().format('YYYYMMDDHHmmss')}_${random}.jpg`;
                options.fileName = fileName
            }
            //dist 以/结尾 或者 fileName 以/开头
            if (!options.fileName.substr(0, 1) == "/" || !options.dist.endsWith("/")) {
                options.dist = options.dist + "/"
            }
            options.path = options.dist + options.fileName
            downloadTool.downFile(options.url, options.path)
        } catch (error) {
            throw error;
        }
    }
}
String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};