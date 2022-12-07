export const updateObjInArray = (items: any[], keyName: string, itemID: string | number, updatedProp: Object) => {
    return  items.map(item => {
        if (item[keyName] === itemID) return {...item, ...updatedProp}
        return item
    })
}