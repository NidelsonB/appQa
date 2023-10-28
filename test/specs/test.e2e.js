describe("Login and loyalty points verification", () => {
  beforeEach(async () => {
    //presionar el boton de menu dropdown por medio del atributo content description
    await $(
      '//android.widget.ImageButton[@content-desc="Show dropdown menu"]'
    ).click();

    //Esperar que cargue 2 segundos
    await driver.pause(2000);

    //presionar el pais El Salvador por medio de coordenadas
    await driver.touchAction([{ action: "tap", x: 423, y: 1764.19 }]);

     //presionar el boton de continuar
     await $(
        '//android.widget.FrameLayout[@resource-id="net.livinapp.lealtad:id/btnContinue"]'
      ).click();
  });
  
  it("should  login with the corect credentials", async () => {

    //Ingresar el correo electronico
    await $(
      '//android.widget.EditText[@resource-id="net.livinapp.lealtad:id/email"]'
    ).setValue("guillememo95@gmail.com");

    //Ingresar la contraseña
    await $(
      '//android.widget.EditText[@resource-id="net.livinapp.lealtad:id/password"]'
    ).setValue("12345678");

    //Presionar el boton de acceder
    await $('//android.widget.TextView[@text="Acceder"]').click();

    //Presionar el icono de perfil
    await $(
      '//android.widget.ImageView[@resource-id="net.livinapp.lealtad:id/imageIconPerson"]'
    ).click();

    //Esperar 2 segundos
    //await driver.pause(2000);

    //Buscar el elemento con texto Cerrar sesion
    const logOutElement = await $('//*[@text="Cerrar sesión"]');

    //Obtener el texto 
    const logOutText = await logOutElement.getText();

    //Realizar la asercion del texto
    expect(logOutText).toHaveText("Cerrar sesión");
  });

  it('should check loyalty points', async() => {
    
  });
});
