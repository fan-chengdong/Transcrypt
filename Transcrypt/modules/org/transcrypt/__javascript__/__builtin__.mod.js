
	// Initialize non-nested modules __base__ and __standard__ and make its names available directly and via __all__
	// It can't do that itself, because it is a regular Python module
	// The compiler recognizes its their namesand generates them inline rather than nesting them
	// In this way it isn't needed to import them everywhere
	
	__nest__ (__all__, '', __init__ (__all__.org.transcrypt.__base__));
	var __envir__ = __all__.__envir__;

	__nest__ (__all__, '', __init__ (__all__.org.transcrypt.__standard__));
	var Exception = __all__.Exception;
	var sort = __all__.sort;
	var sorted = __all__.sorted;

	// Complete __envir__, that was created in __base__, for non-stub mode
	__envir__.executorName = __envir__.transpilerName;
	
	// Make make __main__ available in browser
	var __main__ = {__file__: ''};
	__all__.main = __main__;
	
	// Define current exception, there's at most one exception in the air at any time
	var __except__ = null;
	__all__.__except__ = __except__;
		
	// Define recognizable dictionary for **kwargs parameter
	var __kwargdict__ = function (anObject) {
		anObject.__class__ = __kwargdict__;	// This class needs no __name__
		anObject.constructor = Object;
		return anObject;
	}
	__all__.___kwargdict__ = __kwargdict__;
	
	// Property installer function, no member since that would bloat classes
	var property = function (getter, setter) {	// Returns a property descriptor rather than a property
		return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
	}
	__all__.property = property;
	
	var __merge__ = function (object0, object1) {
		var result = {};
		for (var attrib in object0) {
			result [attrib] = object0 [attrib];
		}
		for (var attrib in object1) {
			result [attrib] = object1 [attrib];
		}
		return result;
	}
	__all__.__merge__ = __merge__;
	
	// Console message
	var print = function () {
		console.log ([] .slice.apply (arguments) .join (' '));
	};
	__all__.print = print;
	
	// Make console.log understand apply
	console.log.apply = function () {
		print ([] .slice.apply (arguments) .slice (1));
	};

	// In function, used to mimic Python's in operator
	var __in__ = function (element, container) {
		return container.indexOf (element) > -1;
	}
	__all__.__in__ = __in__;
	
	// Find out if an attribute is special
	var __specialattrib__ = function (attrib) {
		return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor';
	}
	__all__.__specialattrib__ = __specialattrib__;
		
	// Len function for any object
	var len = function (anObject) {
		try {
			return anObject.length;
		}
		catch (exception) {
			result = 0;
			for (attrib in anObject) {
				if (!__specialattrib__ (attrib)) {
					result++;
				}
			}
			return result;
		}
	};
	__all__.len = len;
	
	var bool = {__name__: 'bool'}
	__all__.bool = bool;
	
	var int = function (aNumber) {
		return aNumber | 0;
	}
	int.__name__ = 'int';
	__all__.int = int;
	
	var float = {__name__:'float'}
	__all__.float = float;
	
	var type = function (anObject) {
		try {
			return anObject.__class__;
		}
		catch (exception) {
			var aType = typeof anObject;
			if (aType == 'boolean') {
				return bool;
			}
			else if (aType == 'number') {
				if (anObject % 1 == 0) {
					return int;
				}
				else {
					return float;
				}				
			}
			else {
				return aType;
			}
		}
	}
	__all__.type = type;
	
	var isinstance = function (anObject, classinfo) {
		function isA (queryClass) {
			if (queryClass == classinfo) {
				return true;
			}
			for (var index = 0; index < queryClass.__bases__.length; index++) {
				if (isA (queryClass.__bases__ [index], classinfo)) {
					return true;
				}
			}
			return false;
		}
		return isA (anObject.__class__)
	};
	__all__.isinstance = isinstance;
	
	// Repr function uses __repr__ method, then __str__ then toString
	var repr = function (anObject) {
		try {
			return anObject.__repr__ ();
		}
		catch (exception) {
			try {
				return anObject.__str__ ();
			}
			catch (exception) {	// It was a dict in Python, so an Object in JavaScript
				try {
					if (anObject.constructor == Object) {
						var result = '{';
						var comma = false;
						for (var attrib in anObject) {
							if (!__specialattrib__ (attrib)) {
								if (attrib.isnumeric ()) {
									var attribRepr = attrib;				// Numerical key in dict 
								}											// So e.g. '1' is misrepresented as 1
								else {
									var attribRepr = '\'' + attrib + '\'';	// Alpha key in dict
								}
								
								if (comma) {
									result += ', ';
								}
								else {
									comma = true;
								}
								try {
									result += attribRepr + ': ' + anObject [attrib] .__repr__ ();
								}
								catch (exception) {
									result += attribRepr + ': ' + anObject [attrib] .toString ();
								}
							}
						}
						result += '}';
						return result;					
					}
					else {
						return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
					}
				}
				catch (exception) {
					console.log ('ERROR: Could not evaluate repr (<object of type ' + typeof anObject + '>)');
					return '???';
				}
			}
		}
	}
	__all__.repr = repr;
	
	// Char from Unicode or ASCII
	
	var chr = function (charCode) {
		return String.fromCharCode (charCode);
	}
	__all__.chr = chr;

	// Unicode or ASCII from char
	
	var ord = function (aChar) {
		return aChar.charCodeAt (0);
	}
	__all__.org = ord;
	
	// Zip method for arrays
	var zip = function () {
		var args = [].slice.call (arguments);
		var shortest = args.length == 0 ? [] : args.reduce (	// Find shortest array in arguments
			function (array0, array1) {
				return array0.length < array1.length ? array0 : array1;
			}
		);
		return shortest.map (					// Map each element of shortest array
			function (current, index) {			// To the result of this function
				return args.map (				// Map each array in arguments
					function (current) {		// To the result of this function
						return current [index]; // Namely it's index't entry
					}
				);
			}
		);
	}
	__all__.zip = zip;
	
	// Range method, returning an array
	function range (start, stop, step) {
		if (typeof stop == 'undefined') {
			// one param defined
			stop = start;
			start = 0;
		}
		if (typeof step == 'undefined') {
			step = 1;
		}
		if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
			return [];
		}
		var result = [];
		for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
			result.push(i);
		}
		return result;
	};
	__all__.range = range;
	
	// Enumerate method, returning a zipped list
	function enumerate (iterable) {
		return zip (range (len (iterable)), iterable);
	}
	__all__.enumerate = enumerate;
		
	// Shallow and deepcopy
	
	function copy (anObject) {
		if (anObject == null || typeof anObject == "object") {
			return anObject;
		}
		else {
			var result = {}
			for (var attrib in obj) {
				if (anObject.hasOwnProperty (attrib)) {
					result [attrib] = anObject [attrib];
				}
			}
			return result;
		}
	}
	__all__.copy = copy;
	
	function deepcopy (anObject) {
		if (anObject == null || typeof anObject == "object") {
			return anObject;
		}
		else {
			var result = {}
			for (var attrib in obj) {
				if (anObject.hasOwnProperty (attrib)) {
					result [attrib] = deepcopy (anObject [attrib]);
				}
			}
			return result;
		}
	}
	__all__.deepcopy = deepcopy;
		
	// List extensions to Array
	
	function list (iterable) {										// All such creators should be callable without new
		var instance = iterable ? [] .slice.apply (iterable) : [];	// Spread iterable, n.b. array.slice (), so array before dot
		instance.__class__ = list;
		// Sort is the normal JavaScript sort, Python sort is a non-member function
		return instance;
	}
	__all__.list = list;
	Array.prototype.__class__ = list;	// Arrays are lists, unless constructed otherwise
	list.__name__ = 'list';
	
	Array.prototype.__getslice__ = function (start, stop, step) {	// Only called if step is not null, else slice is called
		if (start < 0) {
			start = this.length + 1 - start;
		}
		
		if (stop == null) {
			stop = this.length;
		}
		else if (stop < 0) {
			stop = this.length + 1 - stop;
		}
		
		var result = [];
		for (var index = start; index < stop; index += step) {
			result.push (this [index]);
		}
		
		return result;
	}
		
	Array.prototype.__repr__ = function () {
		if (this.__class__ == set && !this.length) {
			return 'set()';
		}
		
		var result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
		
		for (var index = 0; index < this.length; index++) {
			if (index) {
				result += ', ';
			}
			try {
				result += this [index] .__repr__ ();
			}
			catch (exception) {
				result += this [index] .toString ();
			}
		}
		
		if (this.__class__ == tuple && this.length == 1) {
			result += ',';
		}
		
		result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
		return result;
	};
	
	Array.prototype.__setslice__ = function (start, stop, step, source) {
		if (start < 0) {
			start = this.length + 1 - start;
		}
			
		if (stop == null) {
			stop = this.length;
		}
		else if (stop < 0) {
			stop = this.length + 1 - stop;
		}
			
		if (step == null) {	// Assign to 'ordinary' slice, replace subsequence
			Array.prototype.splice.apply (this, [start, stop - start] .concat (source)) 
		}
		else {				// Assign to extended slice, replace designated items one by one
			var sourceIndex = 0;
			for (var targetIndex = start; targetIndex < stop; targetIndex += step) {
				this [targetIndex] = source [sourceIndex++];
			}
		}
	}
		
	Array.prototype.__str__ = Array.prototype.__repr__;
	
	Array.prototype.append = function (element) {
		this.push (element);
	};

	Array.prototype.clear = function (aList) {
		aList.splice (0, aList.length);
	};
	
	Array.prototype.extend = function (aList) {
		this.push.apply (this, aList);
	};

	// Tuple extensions to Array
	
	function tuple (iterable) {
		var instance = iterable ? [] .slice.apply (iterable) : [];
		instance.__class__ = tuple;	// Not all arrays are tuples
		return instance;
	}
	__all__.tuple = tuple;
	tuple.__name__ = 'tuple';
	
	
	// Set extensions to Array
		
	function set (iterable) {
		var instance = [];
		if (iterable) {
			for (var index = 0; index < iterable.length; index++) {
				instance.add (iterable [index]);
			}
		}
		instance.__class__ = set;	// Not all arrays are sets
		return instance;
	}
	__all__.set = set;
	set.__name__ = 'set';
	
	Array.prototype.add = function (element) {
		if (this.indexOf (element) == -1) {	// Avoid duplicates in set
			this.push (element);
		}
	}
	
	Array.prototype.remove = function (element) {
		var index = this.indexOf (element);
		if (index != -1) {
			this.splice (index, 1);
		}
	}
	
	// Dict extensions to object

	function __keys__ () {
		keys = []
		for (attrib in this) {
			if (__normalattrib__ (attrib)) {
				keys.push (key);
			}     
		}
		return keys;
	}
	__all__.__keys__ = __keys__;
		
	function dict (pairs) {
		var instance = {};
		if (pairs) {
			for (var index = 0; index < pairs.length; index++) {
				instance [pair [0]] = pair [1];
			}
		}
		instance.__class__ = dict;	// Not all arrays are sets
		instance.keys = __keys__;	// Defined externally, so only once
		return instance;
	}
	__all__.dict = dict;
	dict.__name__ = 'dict';
	
	// String extensions
		
	function str (stringable) {
		return new String (stringable);
	}
	__all__.str = str;	
	
	String.prototype.__class__ = str;	// All strings are str
	str.__name__ = 'str';
	
	String.prototype.__repr__ = function () {
		return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .replace ('\n', '\\n');
	};
	
	String.prototype.__str__ = function () {
		return this;
	};
	
	String.prototype.capitalize = function () {
		return this.charAt (0).toUpperCase () + this.slice (1);
	};
	
	String.prototype.endswith = function (suffix) {
		return suffix == '' || this.slice (-suffix.length) == suffix;
	};
	
	String.prototype.find  = function (sub, start) {
		return this.indexOf (sub, start);
	};
	
	// Since it's worthwhile for the 'format' function to be able to deal with *args, it is defined as a property
	// __get__ will produce a bound function if there's something before the dot
	// Since a call using *args is compiled to e.g. <object>.<function>.apply (null, args), the function has to be bound already
	// Otherwise it will never be, because of the null argument
	// Using 'this' rather than 'null' contradicts the requirement to be able to pass bound functions around
	// The object 'before the dot' won't be available at call time in that case, unless implicitly via the function bound to it
	// While for Python methods this mechanism is generated by the compiler, for JavaScript methods it has to be provided manually
	Object.defineProperty (String.prototype, 'format', {
		get: function () {return __get__ (this, function (self) {
			var args = tuple ([].slice.apply (arguments).slice (1));			
			var autoIndex = 0;
			return self.replace (/\{(\w*)\}/g, function (match, key) { 
				if (key == '') {
					key = autoIndex++;
				}
				if (key == +key) {	// So key is numerical
					return args [key] == 'undefined' ? match : args [key];
				}
				else {				// Key is a string
					for (var index = 0; index < args.length; index++) {
						// Find first 'dict' that has that key and the right field
						if (typeof args [index] == 'object' && typeof args [index][key] != 'undefined') {
							return args [index][key];	// Return that field field
						}
					}
					return match;
				}
			});
		});},
		enumerable: true
	});
	
	String.prototype.isnumeric = function () {
		return !isNaN (parseFloat (this)) && isFinite (this);
	};
	
	String.prototype.join = function (aList) {
		return aList.join (this);
	};
	
	String.prototype.jsSplit = String.prototype.split;
	
	String.prototype.lower = function () {
		return this.toLowerCase ();
	};
	
	String.prototype.lstrip = function () {
		return this.replace (/^\s*/g, '');
	};
	
	String.prototype.rfind = function (sub, start) {
		return this.lastIndexOf (sub, start);
	};
	
	String.prototype.rsplit = function (sep, maxsplit) {
		var split = this.split (sep || /s+/);
		return maxsplit ? [ split.slice (0, -maxsplit) .join (sep) ].concat (split.slice (-maxsplit)) : split;
	};
	
	String.prototype.rstrip = function () {
		return this.replace (/\s*$/g, '');
	};
	
	String.prototype.split = function (sep, maxsplit) {
		if (!sep) {
			sep = ' ';
		}
		return this.jsSplit (sep || /s+/, maxsplit);
	};
	
	String.prototype.startswith = function (prefix) {
		return this.indexOf (prefix) == 0;
	};
	
	String.prototype.strip = function () {
		return this.trim ();
	};
		
	String.prototype.upper = function () {
		return this.toUpperCase ();
	};
