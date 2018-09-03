'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	//by Salman Dmitriy
	QUnit.test('format проверяет заданное количество колонок', function (assert) {
		const input = [ 10, 100, 200, 1000, -1000];

		const expected0 = null

		const expected1 = 
			'  10   100 200\n' +
			'1000 -1000';

		assert.strictEqual(format(input, 10), expected0);
		assert.strictEqual(format(input, -2), expected0);
		assert.strictEqual(format(input, 3), expected1);
	});

	QUnit.test('format работает правильно c установкой количества колонок по умолчанию', function (assert) {
		const input = [ 10, 100, 200, 1000, -1000];

		const expected = 
			'   10\n' + 
			'  100\n' + 
			'  200\n' +
			' 1000\n' +
			'-1000';

		assert.strictEqual(format(input), expected);
	});
});
