const get_types = (db) => {
    return Object.keys(db).map(id => id.split(':')[0])
}

export { get_types }