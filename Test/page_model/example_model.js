import {Selector, t} from 'testcafe';

export default class ExamplePage {
	constructor() {
		this.inputName = Selector('#developer-name');
		this.checkboxRemoteTesting = Selector('input').withAttribute('name', 'remote');
		this.checkboxAnalysisTesting = Selector('input').withAttribute('name', 'analysis');
		this.triedTestCafe = Selector('#tried-test-cafe');
		this.OS = Selector('#linux');
		this.comments = Selector('#comments');
		this.submit = Selector('#submit-button');
		this.tyMessage = Selector('#article-header');
	}
}