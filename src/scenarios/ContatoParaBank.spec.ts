import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import { ai } from '@zerostep/playwright';
import ParaBankPage from '../support/pages/ParaBankPage';

test.describe('Testes funcionais no site ParaBank', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let paraBankPage: ParaBankPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.paraBank')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    paraBankPage = new ParaBankPage(page);
    await page.goto(BASE_URL);
  });

  test('Validar funcionalidade de contato para dúvidas', async () => {
    await paraBankPage.preencherCamposValidos();
    await paraBankPage.enviarFormulario();
    await paraBankPage.validarMensagem();
  });

  test('Validar falta do SSN ', async () => {
    await paraBankPage.campoSSNFaltante();
    await paraBankPage.enviarFormulario();
    await paraBankPage.validarMensagemSSNFaltante();
  });

  test('Validar senhas diferentes ', async () => {
    await paraBankPage.senhasDiferentes();
    await paraBankPage.enviarFormulario();
    await paraBankPage.validarMensagemSenhasDiferentes();
  });

  test('Fill out the ParaBank registration form using ZeroStep AI', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');
    const aiArgs = { page, test };
  
    await ai(`
      Fill out only the login form using the following data:
      - Username: Yasmin
      - Password: Michels
      Then click the Log In button located inside that same form.
    `, aiArgs);
  });  

});