import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store";
import { getToken, setToken, removeToken } from "@/utils/auth";
// import { login, getLoginUserInfo, getLoginUserMenu } from "@api/auth";

export interface AuthState {
  id: number | string;
}

interface loginParams {
  code: string;
  password: string;
  userName: string;
}

@Module({ dynamic: true, store, name: "auth" })
class Auth extends VuexModule implements AuthState {
  id: string | number = "";

  @Mutation
  private SET_ID(id: number | string) {
    this.id = id;
  }

  /**
   * @description: 登录回调
   * @param {*}
   * @return {*}
   */
  @Action
  public login(loginParams: loginParams): Promise<string> {
    const { userName, password, code } = loginParams;
    return new Promise((resolve, reject) => {
      // login({ userName: userName.trim(), password, code })
      //   .then(response => {
      //     const { data } = response;
      //     this.SET_TOKEN(data.token);
      //     setToken(data.token);
      //     resolve(data.token);
      //   })
      //   .catch(error => {
      //     reject(error);
      //   });
    });
  }

  /**
   * @description: 获取用户数据
   * @param {*}
   * @return {*}
   */
  @Action
  getLoginUserInfo(): Promise<Record<string, unknown>> {
    return new Promise((resolve, reject) => {
      //   getLoginUserInfo()
      //     .then(async response => {
      //       const { data } = response;
      //       if (!data) {
      //         reject("登录过期，请重新登录");
      //       }
      //       const { id, userName, avatar, name, phone } = data;
      //       this.SET_USERNAME(userName);
      //       this.SET_NAME(name);
      //       this.SET_AVATAR(avatar);
      //       this.SET_ID(id);
      //       this.SET_PHONE(phone);
      //       resolve(data);
      //     })
      //     .catch(error => {
      //       if (error.message.indexOf("Request aborted") !== -1) {
      //         return;
      //       }
      //       reject(error);
      //     });
    });
  }

  /**
   * @description: 登出
   * @param {*}
   * @return {*}
   */
  @Action
  async logout() {
    this.SET_ID("");
    removeToken();
  }
}

export const AuthModule = getModule(Auth);
