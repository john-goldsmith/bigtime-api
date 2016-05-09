let Base = require('./base');

class UnauthorizedBase extends Base {

  constructor() {
    super();
  }

  /**
   * Issue an HTTP GET request.
   *
   * @param  {String} resourcePath
   * @param  {Object} headers
   * @return {Promise}
   */
  get(resourcePath, headers = {}) {
    return super(resourcePath, headers);
  }

  /**
   * Issue an HTTP POST request.
   *
   * @param  {String} resourcePath
   * @param  {Null|Object} body
   * @param  {Object} headers
   * @return {Promise}
   */
  post(resourcePath, body = null, headers = {}) {
    return super(resourcePath, body, headers);
  }

  /**
   * Issue an HTTP PUT request.
   *
   * @param  {String} resourcePath
   * @param  {Null|Object} body
   * @param  {Object} headers
   * @return {Promise}
   */
  put(resourcePath, body = null, headers = {}) {
    return super(resourcePath, body, headers);
  }

  /**
   * Issue an HTTP DELETE request.
   *
   * @param  {String} resourcePath
   * @param  {Null|Object} body
   * @param  {Object} headers
   * @return {Promise}
   */
  delete(resourcePath, body = null, headers = {}) {
    return super(resourcePath, body, headers);
  }

}

module.exports = UnauthorizedBase;