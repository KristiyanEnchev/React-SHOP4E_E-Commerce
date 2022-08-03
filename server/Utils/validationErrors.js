<<<<<<< HEAD
export class ServiceError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'ServiceError';
    this.code = code || 400;
  }
}

export class NotFoundError extends ServiceError {
  constructor(message, code) {
    super(message);
    this.name = 'NotFoundError';
    this.code = code || 404;
  }
}

export class RequestError extends ServiceError {
  constructor(message, code) {
    super(message);
    this.name = 'RequestError';
    this.code = code || 400;
  }
}

export class ConflictError extends ServiceError {
  constructor(message, code) {
    super(message);
    this.name = 'ConflictError';
    this.code = code || 409;
  }
}

export class AuthorizationError extends ServiceError {
  constructor(message, code) {
    super(message);
    this.name = 'AuthorizationError';
    this.code = code || 401;
  }
}

export class CredentialError extends ServiceError {
  constructor(message, code) {
    super(message);
    this.name = 'CredentialError';
    this.code = code || 403;
  }
}
=======
export class ServiceError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'ServiceError';
    this.code = code || 400;
  }
}

export class NotFoundError extends ServiceError {
  constructor(message, code) {
    super(message);
    this.name = 'NotFoundError';
    this.code = code || 404;
  }
}

export class RequestError extends ServiceError {
  constructor(message, code) {
    super(message);
    this.name = 'RequestError';
    this.code = code || 400;
  }
}

export class ConflictError extends ServiceError {
  constructor(message, code) {
    super(message);
    this.name = 'ConflictError';
    this.code = code || 409;
  }
}

export class AuthorizationError extends ServiceError {
  constructor(message, code) {
    super(message);
    this.name = 'AuthorizationError';
    this.code = code || 401;
  }
}

export class CredentialError extends ServiceError {
  constructor(message, code) {
    super(message);
    this.name = 'CredentialError';
    this.code = code || 403;
  }
}
>>>>>>> df3aa0355ae16a734cfeb3d038f575eb7c7de743
