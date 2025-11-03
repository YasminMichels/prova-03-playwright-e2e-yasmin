import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import ParaBankElements from '../elements/ParaBankElements';
import BasePage from './BasePage';

export default class ParaBankPage extends BasePage {
  readonly paraBankElements: ParaBankElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.paraBankElements = new ParaBankElements(page);
  }

  async preencherCamposValidos(): Promise<void> {
    await this.paraBankElements.getCampoNome().fill(faker.person.firstName());
    await this.paraBankElements.getCampoUltimoNome().fill(faker.person.lastName());
    await this.paraBankElements.getCampoRuaEndereco().fill(faker.location.street());
    await this.paraBankElements.getCampoCidadeEndereco().fill(faker.location.city());
    await this.paraBankElements.getCampoEstadoEndereco().fill(faker.location.state());
    await this.paraBankElements.getCampoCEPEndereco().fill(faker.location.zipCode());
    await this.paraBankElements.getCampoTelefone().fill(faker.phone.number());
    await this.paraBankElements.getCampoSSN().fill('010101010');
    await this.paraBankElements.getCampoUserName().fill(faker.person.firstName());
    await this.paraBankElements.getCampoSenha().fill('hellokitty123');
    await this.paraBankElements.getCampoSenhaConfirma().fill('hellokitty123');
  }

  async campoSSNFaltante(): Promise<void> {
    await this.paraBankElements.getCampoNome().fill(faker.person.firstName());
    await this.paraBankElements.getCampoUltimoNome().fill(faker.person.lastName());
    await this.paraBankElements.getCampoRuaEndereco().fill(faker.location.street());
    await this.paraBankElements.getCampoCidadeEndereco().fill(faker.location.city());
    await this.paraBankElements.getCampoEstadoEndereco().fill(faker.location.state());
    await this.paraBankElements.getCampoCEPEndereco().fill(faker.location.zipCode());
    await this.paraBankElements.getCampoTelefone().fill(faker.phone.number());
    await this.paraBankElements.getCampoSSN().fill('');
    await this.paraBankElements.getCampoUserName().fill(faker.person.firstName());
    await this.paraBankElements.getCampoSenha().fill('hellokitty123');
    await this.paraBankElements.getCampoSenhaConfirma().fill('hellokitty123');
  }

  async senhasDiferentes(): Promise<void> {
    await this.paraBankElements.getCampoNome().fill(faker.person.firstName());
    await this.paraBankElements.getCampoUltimoNome().fill(faker.person.lastName());
    await this.paraBankElements.getCampoRuaEndereco().fill(faker.location.street());
    await this.paraBankElements.getCampoCidadeEndereco().fill(faker.location.city());
    await this.paraBankElements.getCampoEstadoEndereco().fill(faker.location.state());
    await this.paraBankElements.getCampoCEPEndereco().fill(faker.location.zipCode());
    await this.paraBankElements.getCampoTelefone().fill(faker.phone.number());
    await this.paraBankElements.getCampoSSN().fill('010101010');
    await this.paraBankElements.getCampoUserName().fill(faker.person.firstName());
    await this.paraBankElements.getCampoSenha().fill('hellokitty123');
    await this.paraBankElements.getCampoSenhaConfirma().fill('hellokitty12');
  }

  async enviarFormulario(): Promise<void> {
    await this.paraBankElements.getBotaoEnviar().click();
  }

  async validarMensagem(): Promise<void> {
    await expect(this.paraBankElements.getValidarMensagem()).toBeVisible();
  }

  async validarMensagemSSNFaltante(): Promise<void> {
    await expect(this.paraBankElements.getMensagemSSNFaltante()).toBeVisible();
  }

  async validarMensagemSenhasDiferentes(): Promise<void> {
    await expect(this.paraBankElements.getMensagemSenhaDiferente()).toBeVisible();
  }

}