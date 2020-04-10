import ExamplePage from '../page_model/example_model'

const page = new ExamplePage();

fixture`Example page tests`
  .page`https://devexpress.github.io/testcafe/example/`;

test('My First Test', async t => {
	await t
		.typeText(page.inputName, 'Manuel')
		.click(page.checkboxRemoteTesting)
		.click(page.checkboxAnalysisTesting)
		.click(page.triedTestCafe)
		.click(page.OS)
		.typeText(page.comments, 'Very good page')
		.click(page.submit)
		.wait(2000);
	await t.expect(page.tyMessage.innerText).contains('Manuel');
});




