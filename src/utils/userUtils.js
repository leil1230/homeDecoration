class UserUtils {
	constructor() {}

	// 检查用户是否授权查询信息
	checkUserInfoScope() {
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
			wx.getUserInfo({
				success(res) {
					resolve(res.userInfo);
				}
			});
		});
	}


}

const userUtils = new UserUtils()
export default userUtils