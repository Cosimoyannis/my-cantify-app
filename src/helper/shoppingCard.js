export function loadShoppingCart() {
    const raw = localStorage.getItem("shopping-card")
    if (raw !== null) {
        return JSON.parse(raw)
    }
    return []
}

export function addItemToShoppingCart(item) {
    const raw = localStorage.getItem("shopping-card")
    let shoppingCard = [] 
    if (raw !== null) {
        shoppingCard = JSON.parse(raw)
    }
    shoppingCard.push(item)
    localStorage.setItem("shopping-card", JSON.stringify(shoppingCard))
}

export function removeItemFromShoppingCart(idx) {
    const raw = localStorage.getItem("shopping-card")
    let shoppingCard = [] 
    if (raw !== null) {
        shoppingCard = JSON.parse(raw)
    }
    shoppingCard.splice(idx, 1)
    localStorage.setItem("shopping-card", JSON.stringify(shoppingCard))
}