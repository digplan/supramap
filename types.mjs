import BaseType from './basetype.mjs'

class person extends BaseType {
    age = 40  // default value
    // Street // required value
    upd
}

class nicePerson extends person {
   
}

class timezone extends BaseType {
    name
    abbr
    offset
}

export default {
    "person": person,
    "nicePerson": nicePerson,
    "timezone": timezone
}