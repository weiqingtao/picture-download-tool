const request = require("request");
const fs = require("fs");
module.exports = {
    /**
     * 
     * @param {*} path  下载路径
     * @param {*} url  下载图片的地址
     */
    async downFile(url, path) {
        try {
            const stream = fs.createWriteStream(path);
            return await new Promise((resolve, reject) => {
                request(url)
                    .pipe(stream)
                    .on('close', function (err) {
                        if (err) {
                            reject(err);
                        }
                        resolve();
                    });
            })
        } catch (error) {
            throw error;
        }
    }
}