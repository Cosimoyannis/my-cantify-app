import axios from "axios"

export async function getMenu(mensaID, date) {
    const resp = await axios.get(`https://openmensa.org/api/v2/canteens/${mensaID}/days/${date}/meals`)
    return resp.data
}