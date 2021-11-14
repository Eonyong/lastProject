<template>
  <div align="center">
    <div class="container">
      <form class="form lang-en_us auto-en_us ">

        <div class="form clr">
          <!-- 로그인 중에서 Account 작성 부분 -->
          <dl>
            <dt class="fm-label">
              <div class="fm-label-wrap clr">
                <label for="fm-login-id">Account:</label>
              </div>
            </dt>
            <!-- account 입력 칸 -->
            <dd class="fm-field">
              <div class="fm-field-wrap">
                <input type="text" tabindex="1" value autocorrect="off" autocapitalize="off" placeholder="Enter your Account">
              </div>
            </dd>
          </dl>
          <!-- 로그인 중에서 Password 작성 부분 -->
          <dl>
            <dt class="fm-label">
              <div class="fm-label-wrap">
                <label for="fm-login-password">Password:</label>
                <!-- forget password 작성 부분 -->
                <span class="fm-label-extra">
                  <a href="#" target="_blank" data-spm-protocol="i">Forgot Password?</a>
                </span>
              </div>
            </dt>
            <!-- password 입력 칸 -->
            <dd class="fm-field">
              <div class="fm-field-wrap">
                <input type="password" tabindex="2" value autocorrect="off" autocapitalize="off" placeholder="Enter your Password">
              </div>
            </dd>
          </dl>
        </div>
        <!-- submit btn -->
        <div>
          <input type="hidden" value="submit" name="event_submit_do_login" class="bg-warning">
          <input type="submit" value="Sign in" class="fm-button fm-submit bg-warning" tabindex="4" name="submit-btn">
        </div>
        <div class="login-login-links">
          <span class="thirdpart-login-text">Sign in with:</span>
          <span id="thirdpart-login">
            <a href="javascript:;" attr-action="window" attr-type="facebook" attr-customurl="" attr-onclickfn="" class="thirdpart-login-icon icon-facebook" title="sign in with facebook"></a>
            <a href="javascript:;" attr-action="window" attr-type="google" attr-customurl="" attr-onclickfn="" class="thirdpart-login-icon icon-google" title="sign in with google"></a>
            <a href="javascript:;" attr-action="window" attr-type="linkedin" attr-customurl="" attr-onclickfn="" class="thirdpart-login-icon icon-linkedin" title="sign in with linkedin"></a>
            <a href="javascript:;" attr-action="window" attr-type="twitter" attr-customurl="" attr-onclickfn="" class="thirdpart-login-icon icon-twitter" title="sign in with twitter"></a>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    userId: '',
    userPassword: '',
  }),
  method: {
    onSubmit () {
      console.log(this.userId)
      console.log(this.userPassword)
    }
  }
}
</script>

<style>

</style>