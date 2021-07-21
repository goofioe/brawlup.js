const Requesting = require('./requesting')
const moduleError = require('./moduleError')

class CheckTeam {

constructor(brawler1, brawler2, brawler3) {
  this.req = new Requesting()
  
    if (!brawler1) throw new moduleError(`You didn't specified a brawler (min. 3), which is required for this class!`)
    if (!brawler2) throw new moduleError(`You didn't specified the second brawler (min. 3), which is required for this class!`)
    if (!brawler3) throw new moduleError(`You didn't specified the third brawler, which is required for this class!`)
    
    if (typeof brawler1 !== "string") throw new moduleError(`You didn't specified a valid type of brawler! (first)`)
    if (typeof brawler2 !== "string") throw new moduleError(`You didn't specified a valid type of brawler! (second)`)
    if (typeof brawler3 !== "string") throw new moduleError(`You didn't specified a valid type of brawler! (third)`)   

  this.brawler1 = brawler1
  this.brawler2 = brawler2
  this.brawler3 = brawler3

}

  /** 
  * @returns {Object} Team checker results.
  */
  async check() {
  const urArray = ourArray(await (await this.req.getPowerLeagueMaps()).active)
  const data = urArray.find( ({ hash }) => hash === `${this.brawler1}+${this.brawler2}+${this.brawler3}` )

  if (!data || data === null) {
  return { rating: { result: "Unknown", id: 0 }, winRate: null }
  }

  let winrate = data.winRate
  if (winrate < 47) {
  return { rating: { result: "Bad", id: 1 }, winRate: winrate }
  }
  
  if (winrate > 47 && winrate < 51) { 
  return { rating: { result: "Average", id: 2 }, winRate: winrate }
  }

  if (winrate > 52 && winrate < 65) {
  return { rating: { result: "Good", id: 3 }, winRate: winrate }
  }
  
  if (winrate > 65 && winrate < 75) {
  return { rating: { result: "Very Good", id: 3 }, winRate: winrate }
  }
  
  if (winrate > 75) { 
  return { rating: { result: "Godly", id: 4 }, winRate: winrate }
  }

}

}

module.exports = CheckTeam

function ourArray(array) {
  const arr = []
  
  array.map(m => {
  
  m.map.teamStats.map(mAp => 
    arr.push( {"hash": mAp.hash, "name": mAp.name, "winRate": mAp.data.winRate } )
  )
  
  })
  
  return arr;
}
