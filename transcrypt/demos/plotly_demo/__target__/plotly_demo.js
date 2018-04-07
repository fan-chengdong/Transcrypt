// Transcrypt'ed from Python, 2018-04-07 16:10:13
var itertools = {};
var math = {};
var random = {};
import {__envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, format, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, __Terminal__, __terminal__, print, input} from './org.transcrypt.__runtime__.js';
import * as __module_itertools__ from './itertools.js';
__nest__ (itertools, '', __module_itertools__);
import * as __module_math__ from './math.js';
__nest__ (math, '', __module_math__);
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var xValues = (function () {
	var __accu0__ = [];
	for (var step = 0; step < 201; step++) {
		__accu0__.append (((2 * math.pi) * step) / 200);
	}
	return __accu0__;
}) ();
export var yValuesList = list ([(function () {
	var __accu0__ = [];
	for (var xValue of xValues) {
		__accu0__.append (math.sin (xValue) + 0.5 * math.sin (xValue * 3 + 0.25 * math.sin (xValue * 5)));
	}
	return __accu0__;
}) (), (function () {
	var __accu0__ = [];
	for (var xValue of xValues) {
		__accu0__.append ((xValue <= math.pi ? 1 : -(1)));
	}
	return __accu0__;
}) ()]);
export var kind = 'linear';
Plotly.plot (kind, (function () {
	var __accu0__ = [];
	for (var yValues of yValuesList) {
		__accu0__.append (dict ({x: xValues, y: yValues}));
	}
	return __accu0__;
}) (), dict ({title: kind, xaxis: dict ({title: 'U (t) [V]'}), yaxis: dict ({title: 't [s]'})}));
try {
	var xValues = list (range (10));
	var yValues = (function () {
		var __accu0__ = [];
		for (var x of xValues) {
			__accu0__.append (math.exp (Math.pow (x, 2)));
		}
		return __accu0__;
	}) ();
	var kind = 'logarithmic';
	Plotly.plot (kind, list ([dict ({x: xValues, y: yValues})]), dict ({title: kind, xaxis: dict ({title: 'x'}), yaxis: dict ({type: 'log', tickformat: '2e', title: 'exp (x**2)'})}));
}
catch (__except0__) {
	// pass;
}
export var tangentialValues = list (range (-(180), 180));
export var radialValuesList = list ([(function () {
	var __accu0__ = [];
	for (var t of tangentialValues) {
		__accu0__.append (abs (t));
	}
	return __accu0__;
}) (), (function () {
	var __accu0__ = [];
	for (var t of tangentialValues) {
		__accu0__.append (180 - abs (t));
	}
	return __accu0__;
}) (), (function () {
	var __accu0__ = [];
	for (var t of tangentialValues) {
		__accu0__.append (abs (2 * t));
	}
	return __accu0__;
}) ()]);
var kind = 'polar';
Plotly.plot (kind, (function () {
	var __accu0__ = [];
	for (var [i, radialValues] of enumerate (radialValuesList)) {
		__accu0__.append (dict ({t: tangentialValues, r: radialValues, name: 'Cardioid {}'.format (i)}));
	}
	return __accu0__;
}) (), dict ({title: kind}));
export var denseGrid = (function () {
	var __accu0__ = [];
	for (var step = -(100); step < 101; step++) {
		__accu0__.append (((8 * math.pi) * step) / 200);
	}
	return __accu0__;
}) ();
export var sparseGrid = (function () {
	var __accu0__ = [];
	for (var step = -(100); step < 101; step += 10) {
		__accu0__.append (((8 * math.pi) * step) / 200);
	}
	return __accu0__;
}) ();
export var getZValues = function (xGrid, yGrid) {
	return (function () {
		var __accu0__ = [];
		for (var y of yGrid) {
			__accu0__.append ((function () {
				var __accu1__ = [];
				for (var r of (function () {
					var __accu2__ = [];
					for (var x of xGrid) {
						__accu2__.append (math.sqrt (x * x + y * y));
					}
					return __accu2__;
				}) ()) {
					__accu1__.append (math.sin (r) / r);
				}
				return __accu1__;
			}) ());
		}
		return __accu0__;
	}) ();
};
var kind = 'wireframe';
document.getElementById (kind).innerHTML = 'Plotly {} not yet functional for JS6'.format (kind);
export var aType = 'scatter3d';
Plotly.plot (kind, itertools.chain ((function () {
	var __accu0__ = [];
	for (var i = 0; i < 20; i++) {
		__accu0__.append (dict ({x: denseGrid, y: (function () {
			var __accu1__ = [];
			for (var value of denseGrid) {
				__accu1__.append (sparseGrid [i]);
			}
			return __accu1__;
		}) (), z: getZValues (denseGrid, sparseGrid) [i], type: aType, mode: 'lines', line: dict ({color: 'rgb(0,0,255)'}), zmin: -(0.2), zmax: 1, showscale: !(i)}));
	}
	return __accu0__;
}) (), (function () {
	var __accu0__ = [];
	for (var i = 0; i < 20; i++) {
		__accu0__.append (dict ({x: (function () {
			var __accu1__ = [];
			for (var value of denseGrid) {
				__accu1__.append (sparseGrid [i]);
			}
			return __accu1__;
		}) (), y: denseGrid, z: zip (...getZValues (sparseGrid, denseGrid)) [i], type: aType, mode: 'lines', line: dict ({color: 'rgb(0,0,255)'}), zmin: -(0.2), zmax: 1, showscale: !(i)}));
	}
	return __accu0__;
}) ()), dict ({title: kind, showlegend: false}));
var kind = 'ribbon';
Plotly.plot (kind, (function () {
	var __accu0__ = [];
	for (var i = 0; i < 10; i++) {
		__accu0__.append (dict ({x: denseGrid, y: list (range (i * 20, (i + 0.7) * 20)), z: getZValues (denseGrid, denseGrid).__getslice__ (i * 20, (i + 0.7) * 20, 1), type: 'surface', zmin: -(0.2), zmax: 1, showscale: !(i)}));
	}
	return __accu0__;
}) (), dict ({title: kind}));
var kind = 'surface';
Plotly.plot (kind, list ([dict ({x: denseGrid, y: denseGrid, z: getZValues (denseGrid, denseGrid), type: kind, zmin: -(0.2), zmax: 1})]), dict ({title: kind}));
export var labels = list (['much', 'more', 'most']);
var kind = 'bar';
Plotly.plot (kind, list ([dict ({name: 'rare', x: labels, y: list ([1, 2, 4]), type: kind}), dict ({name: 'common', x: labels, y: list ([8, 16, 32]), type: kind})]), dict ({title: kind, barmode: 'group'}));
var kind = 'pie';
Plotly.plot (kind, list ([dict ({values: list ([1, 2, 3, 4, 5, 6]), labels: list (['least', 'less', 'little', 'much', 'more', 'most']), type: kind})]), dict ({title: kind}));
var kind = 'scatter3d';
export var getRandoms = function (aMax) {
	return (function () {
		var __accu0__ = [];
		for (var i = 0; i < 20; i++) {
			__accu0__.append (random.randint (0, aMax));
		}
		return __accu0__;
	}) ();
};
Plotly.plot (kind, (function () {
	var __accu0__ = [];
	for (var aMax of tuple ([2, 5, 10])) {
		__accu0__.append (dict ({x: getRandoms (aMax), y: getRandoms (aMax), z: getRandoms (aMax), mode: 'markers', marker: dict ({color: 'rgb({}, 127, {})'.format (127 - aMax * 12, aMax * 12), size: 12, symbol: 'circle', line: dict ({color: 'rgb({}, 255, {})'.format (255 - aMax * 25, aMax * 25), width: 1})}), type: kind}));
	}
	return __accu0__;
}) (), dict ({title: kind}));

//# sourceMappingURL=plotly_demo.map