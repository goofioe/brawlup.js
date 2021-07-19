module.exports = {
 
  toFetch(tag) {
    tag = tag.toUpperCase()
    
    if (tag.startsWith(`%23`)) return tag
    if (tag.startsWith(`#`)) { 
      return '%23' + tag.replace(`#`)
    } else {
     return '%23' + tag 
    }
  },
  
  toPlayerTag(tag) {
    tag = tag.toUpperCase()
    
    if (tag.startsWith(`#`)) return tag
    if (tag.startsWith(`%23`)) { 
      return '#' + tag.replace(`%23`)
    } else {
     return '#' + tag 
    }
  }
}
