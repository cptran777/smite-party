describe('App', function() {
  var {
  	Simulate,
  	renderIntroDocument,
  	findRenderedDOMComponentWithClass,
  	scryRenderedDOMComponentWithClass
  } = React.addons.TestUtils;

  beforeEach(function() {
    app = renderIntoDocument(
      <App />
    );
  });

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });
});