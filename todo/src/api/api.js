class Api{
    constructor(){
        this.serverDomain = "http://localhost:5000"
    }
    signin = async (tokenId, cb) => {
        try {
            const rawData = await fetch(`${this.serverDomain}/signin`, {
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({tokenId})
            })
            const data = await rawData.json()
            if(data.error) return cb(data.error)
            cb(null, data)
        } catch (error) {
            cb(error)
        }
    }
    newNote = async (postData, cb) => {
        try {
            const rawData = await fetch(`${this.serverDomain}/note`, {
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({...postData})
            })
            const data = await rawData.json()
            if(data.error) return cb(data.error)
            cb(null, data)
        } catch (error) {
            cb(error)
        }
    }
    patchNote = async (patchData, cb) => {
        try {
            const rawData = await fetch(`${this.serverDomain}/note`, {
                method: "PATCH",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({...patchData})
            })
            const data = await rawData.json()
            if(data.error) return cb(data.error)
            cb(null, data)
        } catch (error) {
            cb(error)
        }
    }
    deleteNote = async (deleteData, cb) => {
        try {
            const rawData = await fetch(`${this.serverDomain}/note`, {
                method: "DELETE",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({...deleteData})
            })
            const data = await rawData.json()
            if(data.error) return cb(data.error)
            cb(null, data)
        } catch (error) {
            cb(error)
        }
    }
}
export default Api