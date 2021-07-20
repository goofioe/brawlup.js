const Client = require('./client')
const moduleError = require('./moduleError')

class CheckTeam {

constructor(brawler1, brawler2, brawler3) {
  this.req = Client().req
  
    if (!brawler1) throw new moduleError(`You didn't specified a brawler (min. 3), which is required for this class!`)
    if (!brawler2) throw new moduleError(`You didn't specified the second brawler (min. 3), which is required for this class!`)
    if (!brawler3) throw new moduleError(`You didn't specified the third brawler, which is required for this class!`)
    
    if (typeof brawler1 !== "string") throw new moduleError(`You didn't specified a valid type of brawler! (first)`)
    if (typeof brawler2 !== "string") throw new moduleError(`You didn't specified a valid type of brawler! (second)`)
    if (typeof brawler3 !== "string") throw new moduleError(`You didn't specified a valid type of brawler! (third)`)
    
    ;(async() => {
    const data = ourArray(await this.req.getPowerLeagueMaps()).find( ({ hash }) => hash === `${brawler1}+${brawler2}+${brawler3}` )
    
    if (!data) {
    this.rating = { result: "Unknown", id: 0 }
    this.winRate = null 
    }
 
    let winrate = data.data.winRate
    if (winrate < 47) { 
    this.rating = { result: "Bad", id: 1 }
    this.winRate = winrate
    }
    
    if (winrate > 47 && winrate < 51) { 
    this.rating = { result: "Average", id: 2 }
    this.winRate = winrate 
    }
  
    if (winrate > 52 && winrate < 65) {
    this.rating = { result: "Good", id: 3 }
    this.winRate = winrate 
    }
    
    if (winrate > 65 && winrate < 75) {
    this.rating = { result: "Very Good", id: 3 }
    this.winRate = winrate 
    }
    
    if (winrate > 75) { 
    this.rating = { result: "Godly", id: 4 }
    this.winRate = winrate 
    }
  })()   
      
  }
}

module.exports = CheckTeam

function ourArray(array) {
  const arr = []
  
  array.active.map(m => {
  
  m.map.teamStats.map(mAp => 
    arr.push( {"hash": mAp.hash, "name": mAp.name, "data": mAp.data } )
  )
  
  })
  
  return arr;
}
