describe('Login Demo', () => {
    it('should not login with the corect credentials', async() => {
        //access the username input by its text
         await $("//*[@text='USUARIO']").setValue("test@user.com");
         //acces the password input by its text
         await $("//*[@text='CONTRASEÑA']").setValue("1234");
         //access the login button by resource id
         await $("[id='com.livin.ath:id/button']").click();
         
         await driver.pause(3000);
    });
    
});