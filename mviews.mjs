const types_used = (db) => {
    return Object.keys(db).map(id => id.split(':')[0])
}

export { types_used }