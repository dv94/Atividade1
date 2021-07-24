function add(a, b) {
    return a + b;
}

// eslint-disable-next-line no-undef
QUnit.module('add', function () {
    // eslint-disable-next-line no-undef
    QUnit.test('should add two numbers', function (assert) {
        assert.equal(add(1, 1), 2);
    });
});