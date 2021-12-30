/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
 class Page {
    
    open() {
        browser.url(`https://demo.opencart.com/index.php?route=account/register`)
    }
}

export default new Page();
