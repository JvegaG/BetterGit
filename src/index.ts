
type dataBase = {
    name: string,
    creationDate?: Date,
}
type allReadonlyType<T> = {
    +readonly [k in keyof T]: T[k]
}
type dataBaseReadonly = allReadonlyType<dataBase>