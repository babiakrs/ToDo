/** Class which works with localStorage */
export default class JSONStorage {
	/**
	 * Defines necessary variables
	 */
	constructor() {
		this._activeField = null;
		this._cache = null;
	}

	/**
	 * Selects key:value pair from localStorage by it's key
	 * @param {string} field - Key name
	 */
	static select(field) {
		this._activeField = field;
		return this;
	}

	/**
	 * Pushs data into localStorage
	 * @param {any} data - Data for pushing into localStorage, if undefined pushing will be from cache(pull method)
	 */
	static push(data) {
		if ('localStorage' in window) {
			localStorage.setItem(this._activeField, JSON.stringify(data ? data : this._cache));
		}
		return this;
	}

	/**
	 * Pulls data from localStorage to the cache
	 */
	static pull() {
		if ('localStorage' in window) {
			try {
				let data = localStorage.getItem(this._activeField);
				this._cache = data ? JSON.parse(data) : [];
			}
			catch (e) {
				console.error('Couldn\'t pull data from localStorage!', e);
			}
		}
		return this;
	}

	/**
	 * Calls function with passing cache
	 * @param {function} cb - Callback
	 */
	static apply(cb) {
		let ret = cb.call(this._cache, this._cache);

		if ((Array.isArray(ret) && Array.isArray(this._cache)) || typeof ret === typeof this._cache) {
			this._cache = ret;
		}

		return this;
	}
}
