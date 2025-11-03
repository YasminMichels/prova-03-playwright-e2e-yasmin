import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ParaBankElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoNome(): Locator {
    return this.page.locator('input[name="customer.firstName"]');
  }

  getCampoUltimoNome(): Locator {
    return this.page.locator('input[name="customer.lastName"]');
  }

  getCampoRuaEndereco(): Locator {
    return this.page.locator('input[name="customer.address.street"]');
  }

  getCampoCidadeEndereco(): Locator {
    return this.page.locator('input[name="customer.address.city"]');
  }
  
  getCampoEstadoEndereco(): Locator {
    return this.page.locator('input[name="customer.address.state"]');
  } 
  
  getCampoCEPEndereco(): Locator {
    return this.page.locator('input[name="customer.address.zipCode"]');
  }   

  getCampoTelefone(): Locator {
    return this.page.locator('input[name="customer.phoneNumber"]');
  }  

  getCampoSSN(): Locator {
    return this.page.locator('input[name="customer.ssn"]');
  }  
  
  getCampoUserName(): Locator {
    return this.page.locator('input[name="customer.username"]');
  }   

  getCampoSenha(): Locator {
    return this.page.locator('input[name="customer.password"]');
  }

  getCampoSenhaConfirma(): Locator {
    return this.page.locator('input[name="repeatedPassword"]');
  }    


  getBotaoEnviar(): Locator {
    return this.page.locator('input[value="Register"]');
  }

  getValidarMensagem(): Locator {
    return this.page.locator(
      'text= Your account was created successfully. You are now logged in.'
    );
  }

  getMensagemSSNFaltante(): Locator {
    return this.page.locator('text= Social Security Number is required.');
  }

  getMensagemSenhaDiferente(): Locator {
    return this.page.locator('text= Passwords did not match.');
  }
}