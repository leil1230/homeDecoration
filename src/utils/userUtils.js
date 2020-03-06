class UserUtils {
	constructor() {}

	// 检查用户是否授权查询信息
	_checkUserInfoScope() {
		return new Promise((resolve, reject) => {
			wx.getSetting({
				success(res) {
					if (res.authSetting['scope.userInfo']) {
						resolve();
					} else {
						reject("用户没有授权查询");
					}
				}
			});
		});
	}


	// 获取用户信息
	obtainUserInfo() {
		return new Promise((resolve, reject) => {
			let userInfo = wx.getStorageSync('userInfo');
			if (userInfo) {
				return resolve(userInfo);
			}
			_checkUserInfoScope()
				.then(() => {
					wx.getUserInfo({
						success(res) {
							storeUserInfo(res.userInfo);
							resolve(res.userInfo);
						}
					});
				}).catch(err => {
					reject(err);
				});
		});
	}

	// 将userInfo存储到缓存中
	storeUserInfo(userInfo) {
		wx.setStorageSync('userInfo', userInfo);
	}


}

const userUtils = new UserUtils()
export default userUtils