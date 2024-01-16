
interface Users {
    id: number;
    name: string;
}

let users: Users[] = []
//peticion 1
for (let i = 0; i < 100000; i++) {
    users = [
        ...users,
        {
            id: i,
            name: Math.random().toString()
        }
    ]
}

//peticion 2
type WithCreatedBy = Users & { created_by: number }
let lista: WithCreatedBy[] = []

for (let i = 0; i < 10000; i++) {
    lista[i] = {
        id: i,
        name: Math.random.toString(),
        created_by: Math.floor(Math.random() * 10000)
    }
}


type WithCreatedByUser = WithCreatedBy & { created_by_user?: Users }

const startTime = performance.now()
const _lista: WithCreatedByUser[] = lista.map(item => ({
    ...item,
    created_by_user: users.find(x => x.id === item.created_by)
}))
const endTime = performance.now()




const userIndexado = users.reduce((acc: { [key: number]: Users }, el) => {
    acc[el.id] = el
    return acc
}, {})

const startTime1 = performance.now()
const _lista1: WithCreatedByUser[] = lista.map(item => ({
    ...item,
    created_by_user: userIndexado[item.created_by]
}))
const endTime1 = performance.now()
