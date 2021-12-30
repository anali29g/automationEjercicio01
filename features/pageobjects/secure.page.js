

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage {
    /**
     * define selectors using getter methods
     */
    get flashAlert() {
        return $('.text-danger');
    }

    get Warning() {
        return $('.alert.alert-danger ');
    }

    get confirmationMessage() {
        return $('#content>h1')
    }
}

export default new SecurePage();
