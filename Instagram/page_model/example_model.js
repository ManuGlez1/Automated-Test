import {Selector, t} from 'testcafe';

export default class ExamplePage {
	constructor() {
		this.username = Selector('input').withAttribute('name', 'username');
		this.password = Selector('input').withAttribute('name', 'password');
		this.submit = Selector('.L3NKy');
		this.usernameLabel = Selector('.gmFkV');
	}
}