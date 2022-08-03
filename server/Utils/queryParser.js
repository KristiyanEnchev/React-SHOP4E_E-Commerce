<<<<<<< HEAD
export function parseWhere(query) {
  const operators = {
    '<=': (prop, value) => (record) => record[prop] <= JSON.parse(value),
    '<': (prop, value) => (record) => record[prop] < JSON.parse(value),
    '>=': (prop, value) => (record) => record[prop] >= JSON.parse(value),
    '>': (prop, value) => (record) => record[prop] > JSON.parse(value),
    '=': (prop, value) => (record) => record[prop] == JSON.parse(value),
    ' like ': (prop, value) => (record) =>
      record[prop].toLowerCase().includes(JSON.parse(value).toLowerCase()),
    ' in ': (prop, value) => (record) =>
      JSON.parse(`[${/\((.+?)\)/.exec(value)[1]}]`).includes(record[prop]),
  };
  const pattern = new RegExp(
    `^(.+?)(${Object.keys(operators).join('|')})(.+?)$`,
    'i'
  );

  try {
    let clauses = [query.trim()];
    let check = (a, b) => b;
    let acc = true;
    if (query.match(/ and /gi)) {
      // inclusive
      clauses = query.split(/ and /gi);
      check = (a, b) => a && b;
      acc = true;
    } else if (query.match(/ or /gi)) {
      // optional
      clauses = query.split(/ or /gi);
      check = (a, b) => a || b;
      acc = false;
    }
    clauses = clauses.map(createChecker);

    return (record) => clauses.map((c) => c(record)).reduce(check, acc);
  } catch (err) {
    throw new Error('Could not parse WHERE clause, check your syntax.');
  }

  function createChecker(clause) {
    let [match, prop, operator, value] = pattern.exec(clause);
    [prop, value] = [prop.trim(), value.trim()];

    return operators[operator.toLowerCase()](prop, value);
  }
}
=======
export function parseWhere(query) {
  const operators = {
    '<=': (prop, value) => (record) => record[prop] <= JSON.parse(value),
    '<': (prop, value) => (record) => record[prop] < JSON.parse(value),
    '>=': (prop, value) => (record) => record[prop] >= JSON.parse(value),
    '>': (prop, value) => (record) => record[prop] > JSON.parse(value),
    '=': (prop, value) => (record) => record[prop] == JSON.parse(value),
    ' like ': (prop, value) => (record) =>
      record[prop].toLowerCase().includes(JSON.parse(value).toLowerCase()),
    ' in ': (prop, value) => (record) =>
      JSON.parse(`[${/\((.+?)\)/.exec(value)[1]}]`).includes(record[prop]),
  };
  const pattern = new RegExp(
    `^(.+?)(${Object.keys(operators).join('|')})(.+?)$`,
    'i'
  );

  try {
    let clauses = [query.trim()];
    let check = (a, b) => b;
    let acc = true;
    if (query.match(/ and /gi)) {
      // inclusive
      clauses = query.split(/ and /gi);
      check = (a, b) => a && b;
      acc = true;
    } else if (query.match(/ or /gi)) {
      // optional
      clauses = query.split(/ or /gi);
      check = (a, b) => a || b;
      acc = false;
    }
    clauses = clauses.map(createChecker);

    return (record) => clauses.map((c) => c(record)).reduce(check, acc);
  } catch (err) {
    throw new Error('Could not parse WHERE clause, check your syntax.');
  }

  function createChecker(clause) {
    let [match, prop, operator, value] = pattern.exec(clause);
    [prop, value] = [prop.trim(), value.trim()];

    return operators[operator.toLowerCase()](prop, value);
  }
}
>>>>>>> df3aa0355ae16a734cfeb3d038f575eb7c7de743
