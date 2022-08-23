function racePodium(blocks) {
  // your code here
  let platforms = []
  platforms[1] = parseInt(blocks / 2)
  platforms[0] = parseInt(platforms[1] - 1)
  platforms[2] = parseInt(blocks - platforms[1] - platforms[0])
  
  return platforms
}

console.log(racePodium(11))