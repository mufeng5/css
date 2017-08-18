const STORAGE_KEY ="todos-vuejs"
export default {
    fetch: function() {
    return JSON.parse(window.localStrage.getItem(STORAGE_KEY)||"[]")
    },
    save: function(items){
        window.localStrage.setItem(STORAGE_KEY,JSON.stringify(items))
    }
}