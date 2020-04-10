import ExamplePage from '../page_model/example_model'

const page = new ExamplePage();

fixture`instagram Test`
  .page`https://instagram.com`;

test('My First Test', async t => {
	await t
		.typeText(page.username, 'fofawam582@smlmail.com')
		.typeText(page.password, 'GenericPassword1')
		.click(page.submit)
		.wait(2000);
	await t.expect(page.usernameLabel.innerText).contains('dummyaccount411');
});




