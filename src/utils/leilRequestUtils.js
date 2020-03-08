import config from './leilConfig.js';

class LeilRequestUtils {
	constructor() {}

	request(params, callback, fail) {

		let rootUrl = config.rootUrl;
		let url = rootUrl + params.url;
		wx.request({
			url: url,
			method: params.method,
			data: params.data,
			header: {
				'content-type': 'application/json' // 默认值
			},
			success(res) {
				callback(res);
			},
			fail(err) {
				fail(err);
			}
		});
	}



}

const leilRequestUtils = new LeilRequestUtils();
export default leilRequestUtils;