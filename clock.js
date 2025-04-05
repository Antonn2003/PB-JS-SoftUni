function clock(){

    for(let hours = 0; hours < 24; hours++){
        for(let minutes = 0; minutes < 60; minutes++){
            console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}h.`)
        }
    }
}
clock()